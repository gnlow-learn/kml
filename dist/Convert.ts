// To parse this data:
//
//   import { Convert, Kml } from "./file";
//
//   const kml = Convert.toKml(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Kml {
    "@version":  string;
    "@encoding": string;
    kml:         KmlClass;
}

export interface KmlClass {
    "@xmlns":      string;
    "@xmlns:gx":   string;
    "@xmlns:kml":  string;
    "@xmlns:atom": string;
    Document:      Document;
}

export interface Document {
    name:        string;
    description: string;
    Style:       Style[];
    StyleMap:    StyleMap[];
    Folder:      DocumentFolder[];
}

export interface DocumentFolder {
    name:   string;
    Folder: PurpleFolder[];
}

export interface PurpleFolder {
    name:   string;
    Folder: FluffyFolder[];
}

export interface FluffyFolder {
    name:   string;
    Folder: TentacledFolder[];
}

export interface TentacledFolder {
    name:       string;
    Folder?:    StickyFolder[];
    Placemark?: FluffyPlacemark[];
}

export interface StickyFolder {
    name:       string;
    Folder?:    IndigoFolder[];
    Placemark?: FluffyPlacemark[];
}

export interface IndigoFolder {
    name:       string;
    Folder?:    IndecentFolder[];
    Placemark?: FluffyPlacemark[];
}

export interface IndecentFolder {
    name:       string;
    Placemark?: PurplePlacemark[];
    Folder?:    HilariousFolder[];
}

export interface HilariousFolder {
    name:       string;
    Placemark?: PurplePlacemark[];
    Folder?:    AmbitiousFolder[];
}

export interface AmbitiousFolder {
    name:      string;
    Placemark: PurplePlacemark[];
}

export interface PurplePlacemark {
    name:       string;
    styleUrl:   string;
    Region?:    Region;
    LineString: LineString;
    open?:      string;
}

export interface LineString {
    tessellate:  string;
    coordinates: string;
}

export interface Region {
    LatLonAltBox: LatLonAltBox;
    Lod:          Lod;
}

export interface LatLonAltBox {
    north:       string;
    south:       string;
    east:        string;
    west:        string;
    minAltitude: string;
    maxAltitude: string;
}

export interface Lod {
    minLodPixels:  string;
    maxLodPixels:  string;
    minFadeExtent: string;
    maxFadeExtent: string;
}

export interface FluffyPlacemark {
    name:         string;
    styleUrl:     string;
    Region?:      Region;
    LineString?:  LineString;
    "@id"?:       string;
    description?: string;
    LookAt?:      LookAt;
    Point?:       Point;
}

export interface LookAt {
    longitude: string;
    latitude:  string;
    altitude:  string;
    heading:   string;
    tilt:      string;
    range:     string;
}

export interface Point {
    coordinates: string;
}

export interface Style {
    "@id":       string;
    IconStyle?:  IconStyle;
    LabelStyle?: LabelStyle;
    LineStyle:   LineStyle;
}

export interface IconStyle {
    color?: Color;
    scale:  string;
    Icon:   Icon;
}

export interface Icon {
    href: string;
}

export enum Color {
    Bfffffff = "bfffffff",
    The7Fffffff = "7fffffff",
}

export interface LabelStyle {
    color?: string;
    scale:  string;
}

export interface LineStyle {
    color: string;
    width: string;
}

export interface StyleMap {
    "@id": string;
    Pair:  Pair[];
}

export interface Pair {
    key:      Key;
    styleUrl: string;
}

export enum Key {
    Highlight = "highlight",
    Normal = "normal",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toKml(json: string): Kml {
        return cast(JSON.parse(json), r("Kml"));
    }

    public static kmlToJson(value: Kml): string {
        return JSON.stringify(uncast(value, r("Kml")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Kml": o([
        { json: "@version", js: "@version", typ: "" },
        { json: "@encoding", js: "@encoding", typ: "" },
        { json: "kml", js: "kml", typ: r("KmlClass") },
    ], false),
    "KmlClass": o([
        { json: "@xmlns", js: "@xmlns", typ: "" },
        { json: "@xmlns:gx", js: "@xmlns:gx", typ: "" },
        { json: "@xmlns:kml", js: "@xmlns:kml", typ: "" },
        { json: "@xmlns:atom", js: "@xmlns:atom", typ: "" },
        { json: "Document", js: "Document", typ: r("Document") },
    ], false),
    "Document": o([
        { json: "name", js: "name", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "Style", js: "Style", typ: a(r("Style")) },
        { json: "StyleMap", js: "StyleMap", typ: a(r("StyleMap")) },
        { json: "Folder", js: "Folder", typ: a(r("DocumentFolder")) },
    ], false),
    "DocumentFolder": o([
        { json: "name", js: "name", typ: "" },
        { json: "Folder", js: "Folder", typ: a(r("PurpleFolder")) },
    ], false),
    "PurpleFolder": o([
        { json: "name", js: "name", typ: "" },
        { json: "Folder", js: "Folder", typ: a(r("FluffyFolder")) },
    ], false),
    "FluffyFolder": o([
        { json: "name", js: "name", typ: "" },
        { json: "Folder", js: "Folder", typ: a(r("TentacledFolder")) },
    ], false),
    "TentacledFolder": o([
        { json: "name", js: "name", typ: "" },
        { json: "Folder", js: "Folder", typ: u(undefined, a(r("StickyFolder"))) },
        { json: "Placemark", js: "Placemark", typ: u(undefined, a(r("FluffyPlacemark"))) },
    ], false),
    "StickyFolder": o([
        { json: "name", js: "name", typ: "" },
        { json: "Folder", js: "Folder", typ: u(undefined, a(r("IndigoFolder"))) },
        { json: "Placemark", js: "Placemark", typ: u(undefined, a(r("FluffyPlacemark"))) },
    ], false),
    "IndigoFolder": o([
        { json: "name", js: "name", typ: "" },
        { json: "Folder", js: "Folder", typ: u(undefined, a(r("IndecentFolder"))) },
        { json: "Placemark", js: "Placemark", typ: u(undefined, a(r("FluffyPlacemark"))) },
    ], false),
    "IndecentFolder": o([
        { json: "name", js: "name", typ: "" },
        { json: "Placemark", js: "Placemark", typ: u(undefined, a(r("PurplePlacemark"))) },
        { json: "Folder", js: "Folder", typ: u(undefined, a(r("HilariousFolder"))) },
    ], false),
    "HilariousFolder": o([
        { json: "name", js: "name", typ: "" },
        { json: "Placemark", js: "Placemark", typ: u(undefined, a(r("PurplePlacemark"))) },
        { json: "Folder", js: "Folder", typ: u(undefined, a(r("AmbitiousFolder"))) },
    ], false),
    "AmbitiousFolder": o([
        { json: "name", js: "name", typ: "" },
        { json: "Placemark", js: "Placemark", typ: a(r("PurplePlacemark")) },
    ], false),
    "PurplePlacemark": o([
        { json: "name", js: "name", typ: "" },
        { json: "styleUrl", js: "styleUrl", typ: "" },
        { json: "Region", js: "Region", typ: u(undefined, r("Region")) },
        { json: "LineString", js: "LineString", typ: r("LineString") },
        { json: "open", js: "open", typ: u(undefined, "") },
    ], false),
    "LineString": o([
        { json: "tessellate", js: "tessellate", typ: "" },
        { json: "coordinates", js: "coordinates", typ: "" },
    ], false),
    "Region": o([
        { json: "LatLonAltBox", js: "LatLonAltBox", typ: r("LatLonAltBox") },
        { json: "Lod", js: "Lod", typ: r("Lod") },
    ], false),
    "LatLonAltBox": o([
        { json: "north", js: "north", typ: "" },
        { json: "south", js: "south", typ: "" },
        { json: "east", js: "east", typ: "" },
        { json: "west", js: "west", typ: "" },
        { json: "minAltitude", js: "minAltitude", typ: "" },
        { json: "maxAltitude", js: "maxAltitude", typ: "" },
    ], false),
    "Lod": o([
        { json: "minLodPixels", js: "minLodPixels", typ: "" },
        { json: "maxLodPixels", js: "maxLodPixels", typ: "" },
        { json: "minFadeExtent", js: "minFadeExtent", typ: "" },
        { json: "maxFadeExtent", js: "maxFadeExtent", typ: "" },
    ], false),
    "FluffyPlacemark": o([
        { json: "name", js: "name", typ: "" },
        { json: "styleUrl", js: "styleUrl", typ: "" },
        { json: "Region", js: "Region", typ: u(undefined, r("Region")) },
        { json: "LineString", js: "LineString", typ: u(undefined, r("LineString")) },
        { json: "@id", js: "@id", typ: u(undefined, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "LookAt", js: "LookAt", typ: u(undefined, r("LookAt")) },
        { json: "Point", js: "Point", typ: u(undefined, r("Point")) },
    ], false),
    "LookAt": o([
        { json: "longitude", js: "longitude", typ: "" },
        { json: "latitude", js: "latitude", typ: "" },
        { json: "altitude", js: "altitude", typ: "" },
        { json: "heading", js: "heading", typ: "" },
        { json: "tilt", js: "tilt", typ: "" },
        { json: "range", js: "range", typ: "" },
    ], false),
    "Point": o([
        { json: "coordinates", js: "coordinates", typ: "" },
    ], false),
    "Style": o([
        { json: "@id", js: "@id", typ: "" },
        { json: "IconStyle", js: "IconStyle", typ: u(undefined, r("IconStyle")) },
        { json: "LabelStyle", js: "LabelStyle", typ: u(undefined, r("LabelStyle")) },
        { json: "LineStyle", js: "LineStyle", typ: r("LineStyle") },
    ], false),
    "IconStyle": o([
        { json: "color", js: "color", typ: u(undefined, r("Color")) },
        { json: "scale", js: "scale", typ: "" },
        { json: "Icon", js: "Icon", typ: r("Icon") },
    ], false),
    "Icon": o([
        { json: "href", js: "href", typ: "" },
    ], false),
    "LabelStyle": o([
        { json: "color", js: "color", typ: u(undefined, "") },
        { json: "scale", js: "scale", typ: "" },
    ], false),
    "LineStyle": o([
        { json: "color", js: "color", typ: "" },
        { json: "width", js: "width", typ: "" },
    ], false),
    "StyleMap": o([
        { json: "@id", js: "@id", typ: "" },
        { json: "Pair", js: "Pair", typ: a(r("Pair")) },
    ], false),
    "Pair": o([
        { json: "key", js: "key", typ: r("Key") },
        { json: "styleUrl", js: "styleUrl", typ: "" },
    ], false),
    "Color": [
        "bfffffff",
        "7fffffff",
    ],
    "Key": [
        "highlight",
        "normal",
    ],
};

