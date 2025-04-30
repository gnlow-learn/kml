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
    Path:        Path;
    Point:       DocumentPoint;
}

export interface Path {
    ASIA: Asia;
}

export interface Asia {
    DPRK: Dprk;
    ROK:  Rok;
}

export interface Dprk {
    영업: Dprk영업;
    폐지: Dprk폐지;
}

export interface Dprk영업 {
    전용선:  Purple전용선;
    국철:   Purple국철;
    궤도선:  Purple궤도선;
    도시철도: Purple도시철도;
    강삭철도: 강삭철도_Value;
    삭도:   삭도_Value;
}

export interface 강삭철도_Value {
    Placemark: 강삭철도_Placemark[];
}

export interface 강삭철도_Placemark {
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

export interface Purple국철 {
    지선:       Purple지선;
    간선:       Purple간선;
    "북한 철도성": 국철_북한철도성;
}

export interface Purple간선 {
    "북한 철도성": Purple북한철도성;
}

export interface Purple북한철도성 {
    Placemark: 강삭철도_Placemark[];
    경의선:       북한철도성_경의선;
    평라선:       강삭철도_Value;
    평북선:       강삭철도_Value;
    평덕선:       강삭철도_Value;
    평남선:       교육기관;
    강원선:       교육기관;
    개천선:       교육기관;
    금강산청년선:    강삭철도_Value;
    동해북부선:     삭도_Value;
    남양국경선:     교육기관;
    두만강선:      강삭철도_Value;
    만포선:       강삭철도_Value;
    무산선:       무산선;
    배천선:       교육기관;
    백두산청년선:    강삭철도_Value;
    백마선:       강삭철도_Value;
    백무선:       강삭철도_Value;
    북부내륙선:     강삭철도_Value;
    경원선:       강삭철도_Value;
    함북선:       강삭철도_Value;
    황해청년선:     강삭철도_Value;
}

export interface 교육기관 {
}

export interface 북한철도성_경의선 {
    Placemark: 강삭철도_Placemark[];
    정주기관차대:    삭도_Value;
    사리원기관차대:   강삭철도_Value;
}

export interface 삭도_Value {
    Placemark: 강삭철도_Placemark;
}

export interface 무산선 {
    Placemark: 강삭철도_Placemark[];
    철송기관차대:    강삭철도_Value;
}

export interface 국철_북한철도성 {
    Placemark: 강삭철도_Placemark;
    진흥선:       삭도_Value;
}

export interface Purple지선 {
    "북한 철도성": Fluffy북한철도성;
}

export interface Fluffy북한철도성 {
    Placemark: 강삭철도_Placemark[];
    모학선:       강삭철도_Value;
    신흥선:       강삭철도_Value;
    청진조차장선:    강삭철도_Value;
    신온선:       강삭철도_Value;
    털섬항선:      교육기관;
    강계선:       삭도_Value;
    강덕선:       교육기관;
    강안선:       강삭철도_Value;
    고건원선:      교육기관;
    고비선:       교육기관;
    고원탄광선:     강삭철도_Value;
    고참탄광선:     교육기관;
    곡하선:       삭도_Value;
    금골선:       강삭철도_Value;
    남포지선:      강삭철도_Value;
    남흥선:       강삭철도_Value;
    다사도선:      강삭철도_Value;
    대각선:       교육기관;
    대건선:       삭도_Value;
    봉창선:       삭도_Value;
    대안선:       삭도_Value;
    덕성선:       교육기관;
    덕현선:       삭도_Value;
    도지리선:      교육기관;
    두언선:       교육기관;
    득장선:       교육기관;
    라진항선:      강삭철도_Value;
    락랑선:       강삭철도_Value;
    려호선:       교육기관;
    룡문탄광선:     교육기관;
    룡암선:       강삭철도_Value;
    리원선:       교육기관;
    마평선:       교육기관;
    만덕선:       강삭철도_Value;
    명당선:       교육기관;
    문천항선:      교육기관;
    장연선:       교육기관;
    봉산선:       삭도_Value;
    봉천탄광선:     삭도_Value;
    부포선:       교육기관;
    비날론선:      강삭철도_Value;
    산음선:       강삭철도_Value;
    삼지연선:      삭도_Value;
    서호선:       삭도_Value;
    석하선:       교육기관;
    성산인입선:     삭도_Value;
    세천선:       강삭철도_Value;
    솔골탄광선:     교육기관;
    신송도원선:     교육기관;
    송도원선:      교육기관;
    송림선:       강삭철도_Value;
    수풍선:       교육기관;
    청년팔원선:     교육기관;
    신흥동선:      교육기관;
    덕남선:       교육기관;
    신성선:       교육기관;
    풍덕선:       삭도_Value;
    안골선:       교육기관;
    오시천선:      삭도_Value;
    옹진선:       삭도_Value;
    원산항선:      교육기관;
    일탄선:       삭도_Value;
    잉포선:       교육기관;
    장상선:       교육기관;
    장진선:       강삭철도_Value;
    재동선:       교육기관;
    정도선:       교육기관;
    조양탄광선:     삭도_Value;
    준혁선:       교육기관;
    창흥선:       삭도_Value;
    철산선:       교육기관;
    청년이천선:     강삭철도_Value;
    청진항선:      강삭철도_Value;
    춘두선:       강삭철도_Value;
    향산선:       교육기관;
    향원선:       교육기관;
    허천선:       삭도_Value;
    형봉선:       교육기관;
    회둔선:       교육기관;
    회령탄광선:     삭도_Value;
    흥남항선:      강삭철도_Value;
}

export interface Purple궤도선 {
    "함경북도 청진시": 강삭철도_Value;
}

export interface Purple도시철도 {
    "내각 보안성 제23국 지하철도 운영관리국": 도시철도_내각보안성제23국지하철도운영관리국;
    "평양시 려객운수종합기업소":          도시철도_평양시려객운수종합기업소;
    "강원도 원산시":                강삭철도_Value;
    "평안남도 평성시":               삭도_Value;
}

export interface 도시철도_내각보안성제23국지하철도운영관리국 {
    Placemark:      강삭철도_Placemark[];
    "평양 지하철도 천리마선": 강삭철도_Value;
}

export interface 도시철도_평양시려객운수종합기업소 {
    Placemark:      강삭철도_Placemark[];
    "평양 궤도전차 금수산선": 삭도_Value;
    "평양 궤도전차 3호선":  강삭철도_Value;
    "평양 궤도전차 2호선":  강삭철도_Value;
    "평양 궤도전차 1호선":  강삭철도_Value;
}

export interface Purple전용선 {
    Placemark:       강삭철도_Placemark[];
    "북한 철도성":        Tentacled북한철도성;
    기타:              강삭철도_Value;
    궤도선:             Fluffy궤도선;
    "평양시 려객운수종합기업소": 강삭철도_Value;
}

export interface Fluffy궤도선 {
    "북한 철도성": { [key: string]: 강삭철도_Value };
    기타:       강삭철도_Value;
}

export interface Tentacled북한철도성 {
    Placemark: 강삭철도_Placemark[];
    경의선:       강삭철도_Value;
    평남선:       강삭철도_Value;
    배천선:       강삭철도_Value;
    평덕선:       강삭철도_Value;
    강원선:       강삭철도_Value;
    평북선:       강삭철도_Value;
    평라선:       강삭철도_Value;
    평양화전선:     강삭철도_Value;
    만포선:       강삭철도_Value;
    룡성선:       강삭철도_Value;
    비날론선:      강삭철도_Value;
    흥남항선:      강삭철도_Value;
    창흥선:       강삭철도_Value;
    승리선:       강삭철도_Value;
    라진항선:      강삭철도_Value;
    세천선:       강삭철도_Value;
    관하선:       강삭철도_Value;
    대건선:       삭도_Value;
    청년팔원선:     삭도_Value;
    향원선:       강삭철도_Value;
    강계선:       삭도_Value;
    두언선:       강삭철도_Value;
    허천선:       강삭철도_Value;
    운하선:       삭도_Value;
    모학선:       강삭철도_Value;
    회둔선:       삭도_Value;
    덕현선:       강삭철도_Value;
    회령탄광선:     강삭철도_Value;
    은률선:       강삭철도_Value;
    분강선:       강삭철도_Value;
    회암선:       강삭철도_Value;
    춘두선:       강삭철도_Value;
    무산선:       삭도_Value;
    함북선:       강삭철도_Value;
    백무선:       강삭철도_Value;
    백두산청년선:    강삭철도_Value;
    삼지연선:      삭도_Value;
    강안선:       강삭철도_Value;
    옹진선:       강삭철도_Value;
    마평선:       삭도_Value;
    백마선:       강삭철도_Value;
    청진조차장선:    강삭철도_Value;
    금골선:       강삭철도_Value;
    수풍선:       강삭철도_Value;
    봉천탄광선:     삭도_Value;
    명당선:       강삭철도_Value;
    경원선:       강삭철도_Value;
    솔골탄광선:     삭도_Value;
    룡암선:       삭도_Value;
    추평선:       삭도_Value;
    개천선:       삭도_Value;
    보산선:       강삭철도_Value;
    남흥선:       강삭철도_Value;
    덕성선:       강삭철도_Value;
    일탄선:       강삭철도_Value;
    득장선:       삭도_Value;
    도지리선:      강삭철도_Value;
    삼천포지선:     삭도_Value;
    신흥선:       강삭철도_Value;
    리원철산선:     강삭철도_Value;
    봉학선:       강삭철도_Value;
    남포지선:      강삭철도_Value;
    봉산선:       강삭철도_Value;
    털섬항선:      강삭철도_Value;
    북부내륙선:     강삭철도_Value;
    남포항선:      강삭철도_Value;
    재동선:       강삭철도_Value;
    다사도선:      강삭철도_Value;
    철산선:       삭도_Value;
    부포선:       삭도_Value;
    대안선:       강삭철도_Value;
    량진선:       삭도_Value;
    만덕선:       삭도_Value;
    성산인입선:     삭도_Value;
    송림선:       강삭철도_Value;
    강덕선:       삭도_Value;
    금강산청년선:    삭도_Value;
    직동탄광선:     강삭철도_Value;
    천내선:       삭도_Value;
    장선강선:      삭도_Value;
    청년이천선:     강삭철도_Value;
    황해청년선:     강삭철도_Value;
}

export interface Dprk폐지 {
    전용선:  Fluffy전용선;
    국철:   Fluffy국철;
    도시철도: Fluffy도시철도;
    사철:   { [key: string]: 강삭철도_Value };
    지선:   Tentacled지선;
    궤도선:  Sticky궤도선;
    공영교통: Purple공영교통;
    열차페리: Purple열차페리;
}

export interface Purple공영교통 {
    궤도선: Tentacled궤도선;
}

export interface Tentacled궤도선 {
    함경북도: 강삭철도_Value;
}

export interface Fluffy국철 {
    간선: Fluffy간선;
    지선: Fluffy지선;
    버스: 국철_Class;
}

export interface Fluffy간선 {
    "북한 철도성": Sticky북한철도성;
    북선척식철도:   강삭철도_Value;
}

export interface Sticky북한철도성 {
    Placemark: 강삭철도_Placemark[];
    경의선:       강삭철도_Value;
    평라선:       강삭철도_Value;
    동해북부선:     강삭철도_Value;
    금강산청년선:    강삭철도_Value;
    두만강선:      강삭철도_Value;
    배천선:       강삭철도_Value;
    백두산청년선:    강삭철도_Value;
    백무선:       강삭철도_Value;
    북부내륙선:     강삭철도_Value;
    경원선:       강삭철도_Value;
    함북선:       강삭철도_Value;
    황해청년선:     강삭철도_Value;
}

export interface 국철_Class {
    "조선총독부 철도국": 강삭철도_Value;
}

export interface Fluffy지선 {
    "북한 철도성":    Indigo북한철도성;
    "조선총독부 철도국": 삭도_Value;
}

export interface Indigo북한철도성 {
    Placemark: 강삭철도_Placemark[];
    박천선:       삭도_Value;
    성산인입선:     삭도_Value;
    수화선:       삭도_Value;
    옹진선:       강삭철도_Value;
    청년이천선:     강삭철도_Value;
}

export interface Sticky궤도선 {
    강서궤도:        삭도_Value;
    생기령점토석탄주식회사: 강삭철도_Value;
    주을삼림궤도:      강삭철도_Value;
}

export interface Fluffy도시철도 {
    "평양시 려객운수종합기업소": 강삭철도_Value;
}

export interface Purple열차페리 {
    국철: 국철_Class;
}

export interface Fluffy전용선 {
    Placemark:         강삭철도_Placemark[];
    "북한 철도성":          Hilarious북한철도성;
    궤도선:               Indigo궤도선;
    기타:                강삭철도_Value;
    조선철도주식회사:          전용선_조선철도주식회사;
    "미쓰비시 석탄 광업 주식회사": 삭도_Value;
}

export interface Indigo궤도선 {
    Placemark:         강삭철도_Placemark;
    "북한 철도성":          Indecent북한철도성;
    "미쓰비시 석탄 광업 주식회사": 삭도_Value;
    한국철도공사:            궤도선_한국철도공사;
}

export interface Indecent북한철도성 {
    Placemark: 강삭철도_Placemark[];
    백무선:       강삭철도_Value;
    함북선:       강삭철도_Value;
    강원선:       강삭철도_Value;
    회령탄광선:     삭도_Value;
    평남선:       강삭철도_Value;
    경의선:       삭도_Value;
    안주탄광선:     삭도_Value;
    평덕선:       강삭철도_Value;
    평라선:       삭도_Value;
}

export interface 궤도선_한국철도공사 {
    호남선: 삭도_Value;
}

export interface Hilarious북한철도성 {
    Placemark: 강삭철도_Placemark[];
    금강산청년선:    강삭철도_Value;
    경의선:       강삭철도_Value;
    평덕선:       강삭철도_Value;
    백무선:       강삭철도_Value;
    백마선:       강삭철도_Value;
    평남선:       삭도_Value;
    룡성선:       강삭철도_Value;
    장선강선:      강삭철도_Value;
    백두산청년선:    강삭철도_Value;
    라진항선:      강삭철도_Value;
    함북선:       강삭철도_Value;
    평라선:       강삭철도_Value;
    대건선:       삭도_Value;
    만포선:       강삭철도_Value;
    남흥선:       강삭철도_Value;
    강덕선:       삭도_Value;
    봉산선:       강삭철도_Value;
    "구 은률선":   삭도_Value;
    구성선:       강삭철도_Value;
    평북선:       강삭철도_Value;
    다사도선:      삭도_Value;
    대각선:       강삭철도_Value;
    대안선:       삭도_Value;
    덕성선:       삭도_Value;
    두언선:       강삭철도_Value;
    룡강선:       삭도_Value;
    보천선:       강삭철도_Value;
    은률선:       강삭철도_Value;
    옹진선:       강삭철도_Value;
    잠진리선:      삭도_Value;
    부포선:       삭도_Value;
    북부내륙선:     강삭철도_Value;
    삼지연선:      삭도_Value;
    송림선:       강삭철도_Value;
    강원선:       삭도_Value;
    경원선:       강삭철도_Value;
    천내선:       삭도_Value;
    추평선:       삭도_Value;
    황해청년선:     강삭철도_Value;
    회령탄광선:     삭도_Value;
    박천선:       삭도_Value;
}

export interface 전용선_조선철도주식회사 {
    사해선: 삭도_Value;
}

export interface Tentacled지선 {
    Placemark:         강삭철도_Placemark[];
    "미쓰비시 석탄 광업 주식회사": 삭도_Value;
}

export interface Rok {
    영업:  Rok영업;
    폐지:  Rok폐지;
    미래:  미래;
    미성선: 미성선;
}

export interface 미래 {
    궤도선:  미래_궤도선;
    도시철도: 미래_도시철도;
    국철:   미래_국철;
    삭도:   { [key: string]: 삭도_Value };
    기타:   삭도_Value;
}

export interface 미래_국철 {
    간선:   Tentacled간선;
    지선:   Sticky지선;
    준고속선: Purple준고속선;
    고속선:  Purple고속선;
}

export interface Tentacled간선 {
    한국철도공사:   Purple한국철도공사;
    "북한 철도성": 삭도_Value;
}

export interface Purple한국철도공사 {
    Placemark: 강삭철도_Placemark[];
    충북선:       삭도_Value;
    경부선:       교육기관;
    경원선:       강삭철도_Value;
}

export interface Purple고속선 {
    한국철도공사: 삭도_Value;
}

export interface Purple준고속선 {
    한국철도공사: 강삭철도_Value;
}

export interface Sticky지선 {
    한국철도공사: Fluffy한국철도공사;
}

export interface Fluffy한국철도공사 {
    Placemark: 강삭철도_Placemark[];
    군산항선:      강삭철도_Value;
    부전선:       부전선;
}

export interface 부전선 {
    "부전-가야": 삭도_Value;
}

export interface 미래_궤도선 {
    인천교통공사:  강삭철도_Value;
    순천에코트랜스: 삭도_Value;
}

export interface 미래_도시철도 {
    Placemark:      강삭철도_Placemark[];
    인천교통공사:         Purple인천교통공사;
    "우이신설경전철 주식회사": 강삭철도_Value;
    동북선도시철도주식회사:    강삭철도_Value;
    대구도시철도공사:       Purple대구도시철도공사;
    "서울시메트로 9호선":   Purple서울시메트로9호선;
    부산교통공사:         강삭철도_Value;
    한국철도공사:         강삭철도_Value;
    광주광역시도시철도공사:    강삭철도_Value;
    서울교통공사:         강삭철도_Value;
    "에스지레일 주식회사":   강삭철도_Value;
    "넥스트레인 주식회사":   강삭철도_Value;
}

export interface Purple대구도시철도공사 {
    "대구 도시철도 1호선": 삭도_Value;
}

export interface Purple서울시메트로9호선 {
    "서울시메트로 9호선": 삭도_Value;
}

export interface Purple인천교통공사 {
    Placemark:    강삭철도_Placemark;
    "서울교통공사 7호선": 삭도_Value;
}

export interface 미성선 {
    국철:            미성선_국철;
    도시철도:          미성선_도시철도;
    "단양석탄공업 주식회사": 삭도_Value;
    철도청:           강삭철도_Value;
    사철:            미성선_사철;
    궤도선:           미성선_궤도선;
    전용선:           미성선_전용선;
}

export interface 미성선_국철 {
    지선:          Indigo지선;
    철도청:         강삭철도_Value;
    한국철도공사:      국철_한국철도공사;
    "조선총독부 교통국": 강삭철도_Value;
    고속선:         Fluffy고속선;
}

export interface Fluffy고속선 {
    한국철도공사: Tentacled한국철도공사;
}

export interface Tentacled한국철도공사 {
    경부고속선: 삭도_Value;
}

export interface Indigo지선 {
    철도청: 삭도_Value;
}

export interface 국철_한국철도공사 {
    Placemark: 강삭철도_Placemark;
    영동선:       강삭철도_Value;
    호남선:       삭도_Value;
}

export interface 미성선_궤도선 {
    서울특별시: 삭도_Value;
}

export interface 미성선_도시철도 {
    창원도시철도: 강삭철도_Value;
    부산교통공사: Purple부산교통공사;
}

export interface Purple부산교통공사 {
    "부산 도시철도 2호선": 삭도_Value;
}

export interface 미성선_사철 {
    궤도선: 사철_궤도선;
}

export interface 사철_궤도선 {
    "김제궤도 주식회사": 삭도_Value;
}

export interface 미성선_전용선 {
    "조선총독부 교통국": 전용선_조선총독부교통국;
}

export interface 전용선_조선총독부교통국 {
    동해중부선: 삭도_Value;
}

export interface Rok영업 {
    국철:   Tentacled국철;
    궤도선:  Indecent궤도선;
    도시철도: Tentacled도시철도;
    기타:   영업_기타;
    간선:   영업_간선;
    삭도:   { [key: string]: 삭도_Value };
    강삭철도: 영업_강삭철도;
    열차페리: 영업_열차페리;
    전용선:  Sticky전용선;
}

export interface 영업_간선 {
    "서해철도 주식회사":   간선_서해철도주식회사;
    "서부광역철도 주식회사": 간선_서부광역철도주식회사;
    한국철도공사:        Sticky한국철도공사;
}

export interface 간선_서부광역철도주식회사 {
    소사대곡선: 강삭철도_Value;
}

export interface 간선_서해철도주식회사 {
    소사원시선: 소사원시선;
    소사대곡선: 삭도_Value;
}

export interface 소사원시선 {
    Placemark:    강삭철도_Placemark[];
    "소사원시선종점-원시": 삭도_Value;
}

export interface Sticky한국철도공사 {
    소사대곡선: 소사대곡선;
}

export interface 소사대곡선 {
    Placemark: 강삭철도_Placemark;
    "대곡-능곡":   삭도_Value;
}

export interface 영업_강삭철도 {
    "주식회사 강원랜드": 삭도_Value;
}

export interface Tentacled국철 {
    간선:   Sticky간선;
    지선:   Indecent지선;
    버스:   Purple버스;
    도시철도: 국철_도시철도;
    준고속선: Fluffy준고속선;
    궤도선:  국철_궤도선;
    고속선:  Tentacled고속선;
    기타:   국철_기타;
    전용선:  Tentacled전용선;
}

export interface Sticky간선 {
    한국철도공사: Indigo한국철도공사;
}

export interface Indigo한국철도공사 {
    Placemark: 강삭철도_Placemark[];
    호남선:       강삭철도_Value;
    경인선:       강삭철도_Value;
    영동선:       강삭철도_Value;
    경북선:       강삭철도_Value;
    태백선:       강삭철도_Value;
    충북선:       강삭철도_Value;
    경춘선:       경춘선;
    중앙선:       Purple중앙선;
    원주강릉선:     강삭철도_Value;
    동해선:       동해선;
    경부선:       Purple경부선;
    경강선:       강삭철도_Value;
    전라선:       강삭철도_Value;
    장항선:       장항선;
    경전선:       경전선;
    중부내륙선:     강삭철도_Value;
    동해북부선:     강삭철도_Value;
    경의선:       한국철도공사_경의선;
    경원선:       경원선;
    대구선:       강삭철도_Value;
}

export interface Purple경부선 {
    Placemark:  강삭철도_Placemark[];
    "노량진-대방":   삭도_Value;
    "신도림-구로":   삭도_Value;
    "영등포-신도림":  삭도_Value;
    "신길-영등포":   삭도_Value;
    "용산-노량진":   삭도_Value;
    "대방-신길":    삭도_Value;
    "노량진-용산":   강삭철도_Value;
    "가산디-구로":   삭도_Value;
    "구로-가산디":   삭도_Value;
    "서울-용산":    삭도_Value;
    "용산-서울":    삭도_Value;
    "천안-두정":    삭도_Value;
    "두정-직산":    강삭철도_Value;
    "직산-성환":    삭도_Value;
    "성환-평택":    삭도_Value;
    "직산-두정":    삭도_Value;
    "대신-김천":    삭도_Value;
    "김천-대신":    삭도_Value;
    "동대구-대구":   삭도_Value;
    "삼랑진-원동":   삭도_Value;
    "원동-삼랑진":   삭도_Value;
    "사상-부산진":   강삭철도_Value;
    "부산진-부산진":  삭도_Value;
    "조치원-내판":   삭도_Value;
    "내판-조치원":   삭도_Value;
    "시흥연-금천구":  삭도_Value;
    "금천구-시흥연":  삭도_Value;
    "서정리-송탄":   삭도_Value;
    약목:         삭도_Value;
    "제목 없는 폴더": 강삭철도_Value;
}

export interface 경원선 {
    Placemark: 강삭철도_Placemark[];
    "왕십리-청량리": 삭도_Value;
}

export interface 한국철도공사_경의선 {
    Placemark: 강삭철도_Placemark[];
    "행신-강매":   삭도_Value;
    "화전-강매":   삭도_Value;
    "행신-능곡":   삭도_Value;
    "능곡-행신":   삭도_Value;
    "강매-화전":   삭도_Value;
    "서울-신촌":   삭도_Value;
    "가좌-신촌":   삭도_Value;
    "가좌-디엠시":  삭도_Value;
    "수색-디엠시":  삭도_Value;
    "화전-수색":   삭도_Value;
    "수색-화전":   삭도_Value;
}

export interface 경전선 {
    Placemark: 강삭철도_Placemark[];
    "한림정-낙동강": 삭도_Value;
    "낙동강-한림정": 삭도_Value;
}

export interface 경춘선 {
    Placemark: 강삭철도_Placemark[];
    "신내-망우":   삭도_Value;
    "상봉-망우":   삭도_Value;
}

export interface 동해선 {
    Placemark: 강삭철도_Placemark[];
    "범일-부산진":  삭도_Value;
    "부산진-범일":  삭도_Value;
    "거제해-부전":  삭도_Value;
}

export interface 장항선 {
    Placemark: 강삭철도_Placemark[];
    "신창-온양온":  삭도_Value;
    "온양온-신창":  삭도_Value;
}

export interface Purple중앙선 {
    Placemark: 강삭철도_Placemark[];
    "봉양-제천조":  삭도_Value;
    "제천조-제천":  삭도_Value;
    "제천-제천조":  삭도_Value;
    "제천조-봉양":  삭도_Value;
    "상봉-중랑":   삭도_Value;
    "망우-상봉":   삭도_Value;
    "청량리-회기":  삭도_Value;
}

export interface Tentacled고속선 {
    "주식회사 SR": 고속선_주식회사Sr;
    한국철도공사:    Indecent한국철도공사;
}

export interface 고속선_주식회사Sr {
    Placemark: 강삭철도_Placemark[];
    수서평택고속선:   수서평택고속선;
}

export interface 수서평택고속선 {
    Placemark: 강삭철도_Placemark[];
    "S수서-S성남": 강삭철도_Value;
    "S동탄-S용인": 강삭철도_Value;
    "S용인-S동탄": 강삭철도_Value;
    "S성남-S수서": 삭도_Value;
    "S성남-S용인": 삭도_Value;
    "S용인-S성남": 강삭철도_Value;
}

export interface Indecent한국철도공사 {
    경부고속선: Purple경부고속선;
    호남고속선: 강삭철도_Value;
}

export interface Purple경부고속선 {
    Placemark: 강삭철도_Placemark[];
    "광명-시흥연":  강삭철도_Value;
    "시흥연-광명":  강삭철도_Value;
    "신경분-신경주": 삭도_Value;
    "신경주-신경분": 삭도_Value;
    "신경주-울산":  삭도_Value;
    "울산-신경주":  삭도_Value;
}

export interface 국철_궤도선 {
    한국철도기술연구원: 강삭철도_Value;
}

export interface 국철_기타 {
    한국철도기술연구원: 한국철도기술연구원;
}

export interface 한국철도기술연구원 {
    철도종합시험선로: 강삭철도_Value;
}

export interface 국철_도시철도 {
    한국철도공사: Hilarious한국철도공사;
}

export interface Hilarious한국철도공사 {
    안산선: 강삭철도_Value;
}

export interface Purple버스 {
    한국철도공사: 버스_한국철도공사;
}

export interface 버스_한국철도공사 {
    "KTX 리무진 광명도심공항선": Ktx리무진광명도심공항선;
}

export interface Ktx리무진광명도심공항선 {
    Placemark:   강삭철도_Placemark[];
    "공항T2-공항T2": 삭도_Value;
    "공항T2-인천국":  삭도_Value;
    "인천국-공항T2":  삭도_Value;
}

export interface Tentacled전용선 {
    한국철도공사: Ambitious한국철도공사;
}

export interface Ambitious한국철도공사 {
    호남선: Purple호남선;
}

export interface Purple호남선 {
    와룡: 삭도_Value;
}

export interface Fluffy준고속선 {
    한국철도공사: 준고속선_한국철도공사;
}

export interface 준고속선_한국철도공사 {
    Placemark: 강삭철도_Placemark[];
    중앙선:       강삭철도_Value;
    원주강릉선:     강삭철도_Value;
    호남선:       강삭철도_Value;
    전라선:       강삭철도_Value;
    중부내륙선:     강삭철도_Value;
    대구선:       강삭철도_Value;
}

export interface Indecent지선 {
    한국철도공사:      Cunning한국철도공사;
    "서해철도 주식회사": { [key: string]: 삭도_Value };
}

export interface Cunning한국철도공사 {
    Placemark: 강삭철도_Placemark[];
    구로삼각선:     삭도_Value;
    월곶시흥선:     강삭철도_Value;
    시흥기지선:     삭도_Value;
    안산입고선:     삭도_Value;
    서울교외선:     서울교외선;
    안산출고선:     삭도_Value;
    정선선:       삭도_Value;
    북평선:       강삭철도_Value;
    묵호항선:      강삭철도_Value;
    문경선:       강삭철도_Value;
    함백선:       강삭철도_Value;
    여천선:       강삭철도_Value;
    옥구선:       삭도_Value;
    진해선:       강삭철도_Value;
    평내기지선:     강삭철도_Value;
    신광양항선:     강삭철도_Value;
    광양항선:      강삭철도_Value;
    광양제철선:     광양제철선;
    사천선:       강삭철도_Value;
    군산항선:      강삭철도_Value;
    강릉기지선:     삭도_Value;
    제천조차장선:    제천조차장선;
    용문기지선:     강삭철도_Value;
    우암선:       강삭철도_Value;
    부전선:       강삭철도_Value;
    가야선:       강삭철도_Value;
    온산선:       강삭철도_Value;
    울산신항선:     강삭철도_Value;
    울산기지선:     강삭철도_Value;
    울산항선:      강삭철도_Value;
    괴동선:       강삭철도_Value;
    삼척선:       강삭철도_Value;
    영일만항선:     강삭철도_Value;
    건천연결선:     강삭철도_Value;
    용산삼각선:     삭도_Value;
    구로기지선:     강삭철도_Value;
    남부화물기지선:   강삭철도_Value;
    병점기지선:     강삭철도_Value;
    천안직결선:     Purple천안직결선;
    양산화물선:     강삭철도_Value;
    대구북연결선:    강삭철도_Value;
    평택삼각선:     삭도_Value;
    부강화물선:     강삭철도_Value;
    신동화물선:     강삭철도_Value;
    "부산신항 남선": 강삭철도_Value;
    "부산신항 북선": 강삭철도_Value;
    부산신항선:     강삭철도_Value;
    수인선:       Purple수인선;
    분당기지선:     강삭철도_Value;
    익산삼각선:     삭도_Value;
    대전선:       삭도_Value;
    강경선:       강삭철도_Value;
    안평화물선:     강삭철도_Value;
    대불선:       강삭철도_Value;
    전경삼각선:     삭도_Value;
    북전주선:      강삭철도_Value;
    덕산선:       강삭철도_Value;
    미전선:       강삭철도_Value;
    부발기지선:     강삭철도_Value;
    광주기지선:     삭도_Value;
    망우선:       삭도_Value;
    평택선:       강삭철도_Value;
    광주선:       강삭철도_Value;
    북송정삼각선:    삭도_Value;
    용산선:       강삭철도_Value;
    수색객차출발선:   강삭철도_Value;
    수식직결선:     강삭철도_Value;
    고양기지선:     강삭철도_Value;
    문산기지선:     강삭철도_Value;
    성북기지선:     삭도_Value;
    이문기지선:     강삭철도_Value;
    광명기지선:     { [key: string]: 삭도_Value };
    시흥연결선:     강삭철도_Value;
    대전북연결선:    강삭철도_Value;
    대전남연결선:    강삭철도_Value;
    영동정비기지선:   강삭철도_Value;
    신동연결선:     강삭철도_Value;
    오송정비기지선:   강삭철도_Value;
    부산북연결선:    강삭철도_Value;
    대구남연결선:    삭도_Value;
    익산남연결선:    강삭철도_Value;
    광주송정북연결선:  강삭철도_Value;
    장생포선:      강삭철도_Value;
    영천삼각선:     삭도_Value;
    강릉삼각선:     삭도_Value;
    익산북연결선:    강삭철도_Value;
    경부고속선:     Fluffy경부고속선;
}

export interface Fluffy경부고속선 {
    "시흥연-광명": 삭도_Value;
}

export interface 광양제철선 {
    Placemark: 강삭철도_Placemark[];
    "초남-황길":   삭도_Value;
    "광양-초남":   삭도_Value;
}

export interface 서울교외선 {
    Placemark: 강삭철도_Placemark[];
    "대곡-능곡":   삭도_Value;
}

export interface Purple수인선 {
    Placemark: 강삭철도_Placemark[];
    "중앙-한대앞":  삭도_Value;
    "한대앞-중앙":  삭도_Value;
}

export interface 제천조차장선 {
    Placemark: 강삭철도_Placemark[];
    "제천조-제천":  삭도_Value;
}

export interface Purple천안직결선 {
    Placemark: 강삭철도_Placemark;
    "천안-두정":   삭도_Value;
    "두정-천안":   삭도_Value;
}

export interface Indecent궤도선 {
    인천교통공사:         삭도_Value;
    순천에코트랜스:        강삭철도_Value;
    "해운대블루라인 주식회사": 강삭철도_Value;
}

export interface 영업_기타 {
    공항철도:                      Purple공항철도;
    신분당선주식회사:                  { [key: string]: 강삭철도_Value };
    경기철도주식회사:                  경기철도주식회사;
    "새서울철도 주식회사":              새서울철도주식회사;
    "한국철도공사 철도관광사업법인 코레일관광개발": 삭도_Value;
    도계광업소:                     삭도_Value;
}

export interface 경기철도주식회사 {
    Placemark: 강삭철도_Placemark;
    신분당선:      강삭철도_Value;
}

export interface Purple공항철도 {
    수색직결선:    강삭철도_Value;
    인천국제공항철도: 인천국제공항철도;
    용유차량삼각선:  강삭철도_Value;
    용유차량기지선:  강삭철도_Value;
}

export interface 인천국제공항철도 {
    Placemark: 강삭철도_Placemark[];
    "계양-김포공":  삭도_Value;
}

export interface 새서울철도주식회사 {
    신분당선: 강삭철도_Value;
}

export interface Tentacled도시철도 {
    인천교통공사:           Fluffy인천교통공사;
    김포골드라인운영주식회사:     김포골드라인운영주식회사;
    "서울시메트로 9호선":     Fluffy서울시메트로9호선;
    "남서울경전철 주식회사":    도시철도_남서울경전철주식회사;
    서울교통공사:           도시철도_서울교통공사;
    "주식회사 우진메트로":     도시철도_주식회사우진메트로;
    "우이신설경전철 주식회사":   도시철도_우이신설경전철주식회사;
    대전교통공사:           도시철도_대전교통공사;
    대구도시철도공사:         Fluffy대구도시철도공사;
    용인경량전철주식회사:       도시철도_용인경량전철주식회사;
    한국철도공사:           Magenta한국철도공사;
    부산교통공사:           Fluffy부산교통공사;
    "부산-김해경전철운영주식회사": 도시철도_부산김해경전철운영주식회사;
    광주광역시도시철도공사:      광주광역시도시철도공사;
    "에스지레일 주식회사":     강삭철도_Value;
    하남도시공사:           도시철도_하남도시공사;
}

export interface 광주광역시도시철도공사 {
    Placemark:     강삭철도_Placemark;
    "광주 도시철도 1호선": 강삭철도_Value;
}

export interface 김포골드라인운영주식회사 {
    김포골드라인: 강삭철도_Value;
}

export interface 도시철도_남서울경전철주식회사 {
    "서울 경전철 신림선": 강삭철도_Value;
}

export interface Fluffy대구도시철도공사 {
    "대구 도시철도 3호선": 강삭철도_Value;
    "대구 도시철도 1호선": 강삭철도_Value;
    "대구 도시철도 2호선": 대구도시철도2호선;
}

export interface 대구도시철도2호선 {
    Placemark: 강삭철도_Placemark[];
    "청라언덕-명덕": 삭도_Value;
    "명덕-청라언덕": 삭도_Value;
}

export interface 도시철도_대전교통공사 {
    Placemark:     강삭철도_Placemark;
    "대전 도시철도 1호선": 강삭철도_Value;
}

export interface 도시철도_부산김해경전철운영주식회사 {
    부산김해경전철: 강삭철도_Value;
}

export interface Fluffy부산교통공사 {
    Placemark:     강삭철도_Placemark;
    "부산 도시철도 1호선": 부산도시철도1호선;
    "부산 도시철도 2호선": 강삭철도_Value;
    "부산 도시철도 3호선": 강삭철도_Value;
    "부산 도시철도 4호선": 강삭철도_Value;
}

export interface 부산도시철도1호선 {
    Placemark: 강삭철도_Placemark[];
    "부산진-부산진": 삭도_Value;
}

export interface 도시철도_서울교통공사 {
    Placemark:          강삭철도_Placemark[];
    "서울교통공사 1호선":       강삭철도_Value;
    "서울교통공사 6호선":       강삭철도_Value;
    "서울교통공사 5호선":       강삭철도_Value;
    "서울교통공사 5호선 강동삼각선": 삭도_Value;
    "서울교통공사 5호선 마천지선":  강삭철도_Value;
    "서울교통공사 2호선 신정지선":  강삭철도_Value;
    "서울교통공사 2호선":       강삭철도_Value;
    "서울교통공사 2호선 성수지선":  강삭철도_Value;
    삼송지축선:              삭도_Value;
    "서울교통공사 7호선":       강삭철도_Value;
    "서울교통공사 4호선 창동기지선": 강삭철도_Value;
    "서울교통공사 4호선 노원창동선": 강삭철도_Value;
    "서울교통공사 4호선":       강삭철도_Value;
    진접선:                강삭철도_Value;
    "서울교통공사 3호선":       강삭철도_Value;
    "서울교통공사 3호선 수서기지선": 강삭철도_Value;
    "서울교통공사 3호선 수서삼각선": 삭도_Value;
    "서울교통공사 8호선":       강삭철도_Value;
    "서울교통공사 3호선 지축기지선": 강삭철도_Value;
    하남선:                강삭철도_Value;
}

export interface Fluffy서울시메트로9호선 {
    "서울시메트로 9호선": 인천국제공항철도;
}

export interface 도시철도_용인경량전철주식회사 {
    Placemark: 강삭철도_Placemark[];
    용인경전철:     강삭철도_Value;
}

export interface 도시철도_우이신설경전철주식회사 {
    "서울 경전철 우이신설선": 강삭철도_Value;
}

export interface Fluffy인천교통공사 {
    Placemark:     강삭철도_Placemark[];
    "인천공항 자기부상철도": 강삭철도_Value;
    "인천 도시철도 2호선": 강삭철도_Value;
    "서울교통공사 7호선":  강삭철도_Value;
    "인천 도시철도 1호선": 인천도시철도1호선;
}

export interface 인천도시철도1호선 {
    Placemark:        강삭철도_Placemark[];
    "송도달빛축제공원-1호선종점": 삭도_Value;
    "계양-1호선종점":       삭도_Value;
}

export interface 도시철도_주식회사우진메트로 {
    Placemark: 강삭철도_Placemark;
    의정부경전철:    강삭철도_Value;
}

export interface 도시철도_하남도시공사 {
    하남선: 강삭철도_Value;
}

export interface Magenta한국철도공사 {
    일산선:   강삭철도_Value;
    삼송지축선: 삭도_Value;
    분당선:   강삭철도_Value;
    과천선:   강삭철도_Value;
}

export interface 영업_열차페리 {
    기타: { [key: string]: 삭도_Value };
}

export interface Sticky전용선 {
    Placemark:   강삭철도_Placemark[];
    한국철도공사:      Frisky한국철도공사;
    "주식회사 강원랜드": 전용선_주식회사강원랜드;
}

export interface 전용선_주식회사강원랜드 {
    "하이원추추파크 전용선": 강삭철도_Value;
}

export interface Frisky한국철도공사 {
    경인선:     Purple경인선;
    북평선:     삭도_Value;
    영동선:     영동선;
    진해선:     Purple진해선;
    삼척선:     삭도_Value;
    북전주선:    Purple북전주선;
    대구선:     삭도_Value;
    경부선:     Fluffy경부선;
    남부화물기지선: 남부화물기지선;
    박물관:     강삭철도_Value;
    수색객차출발선: 수색객차출발선;
    중앙선:     Fluffy중앙선;
    문경선:     문경선;
    경북선:     경북선;
    태백선:     태백선;
    호남선:     Fluffy호남선;
    오송정비기지선: 강삭철도_Value;
    괴동선:     삭도_Value;
    정선선:     삭도_Value;
    온산선:     삭도_Value;
}

export interface Fluffy경부선 {
    Placemark: 강삭철도_Placemark;
    의왕:        삭도_Value;
    대전조:       삭도_Value;
}

export interface 경북선 {
    옥산: 강삭철도_Value;
}

export interface Purple경인선 {
    Placemark: 강삭철도_Placemark;
    인천:        강삭철도_Value;
}

export interface 남부화물기지선 {
    오봉: 강삭철도_Value;
}

export interface 문경선 {
    주평: 강삭철도_Value;
}

export interface Purple북전주선 {
    Placemark: 강삭철도_Placemark;
    북전주:       강삭철도_Value;
}

export interface 수색객차출발선 {
    수색: 강삭철도_Value;
}

export interface 영동선 {
    Placemark: 강삭철도_Placemark;
    옥계:        삭도_Value;
    동백산:       강삭철도_Value;
}

export interface Fluffy중앙선 {
    팔당: 삭도_Value;
    도담: 강삭철도_Value;
    삼곡: 삭도_Value;
}

export interface Purple진해선 {
    진해: 강삭철도_Value;
}

export interface 태백선 {
    입석리: 강삭철도_Value;
    쌍룡:  삭도_Value;
}

export interface Fluffy호남선 {
    광주송: 삭도_Value;
    노령:  삭도_Value;
}

export interface Rok폐지 {
    국철:   Sticky국철;
    사철:   폐지_사철;
    삭도:   폐지_삭도;
    공영교통: Fluffy공영교통;
    궤도선:  Ambitious궤도선;
    전용선:  Indecent전용선;
    열차페리: 버스_Class;
    도시철도: Sticky도시철도;
    기타:   폐지_기타;
    지선:   Ambitious지선;
}

export interface Fluffy공영교통 {
    궤도선: Hilarious궤도선;
}

export interface Hilarious궤도선 {
    서울특별시: 강삭철도_Value;
}

export interface Sticky국철 {
    지선:  Hilarious지선;
    간선:  Indigo간선;
    궤도선: { [key: string]: 삭도_Value };
    전용선: Indigo전용선;
    버스:  국철_Class;
}

export interface Indigo간선 {
    한국철도공사:      Mischievous한국철도공사;
    "조선총독부 교통국": 전용선_조선총독부교통국;
    철도청:         간선_철도청;
}

export interface 간선_철도청 {
    Placemark: 강삭철도_Placemark[];
    수려선:       강삭철도_Value;
}

export interface Mischievous한국철도공사 {
    Placemark: 강삭철도_Placemark[];
    영동선:       강삭철도_Value;
    태백선:       강삭철도_Value;
    경북선:       삭도_Value;
    충북선:       충북선;
    경춘선:       강삭철도_Value;
    "구 경춘선":   강삭철도_Value;
    중앙선:       강삭철도_Value;
    함백선:       삭도_Value;
    동해남부선:     강삭철도_Value;
    경부선:       강삭철도_Value;
    호남선:       강삭철도_Value;
    전라선:       전라선;
    장항선:       강삭철도_Value;
    경전선:       강삭철도_Value;
    경의선:       강삭철도_Value;
    경원선:       강삭철도_Value;
    경인선:       삭도_Value;
}

export interface 전라선 {
    Placemark: 강삭철도_Placemark[];
    죽림온:       삭도_Value;
}

export interface 충북선 {
    Placemark: 강삭철도_Placemark[];
    청주:        강삭철도_Value;
}

export interface Indigo전용선 {
    대한석탄공사: 전용선_대한석탄공사;
}

export interface 전용선_대한석탄공사 {
    Placemark: 강삭철도_Placemark[];
    화순선:       강삭철도_Value;
}

export interface Hilarious지선 {
    철도청:         지선_철도청;
    한국철도공사:      Braggadocious한국철도공사;
    대한석탄공사:      삭도_Value;
    한국중부발전:      한국중부발전;
    "조선총독부 교통국": 삭도_Value;
    교통부:         삭도_Value;
    "조선총독부 철도국": 삭도_Value;
}

export interface 지선_철도청 {
    Placemark: 강삭철도_Placemark[];
    우암선:       삭도_Value;
}

export interface 한국중부발전 {
    Placemark: 강삭철도_Placemark[];
    서천화력선:     삭도_Value;
}

export interface Braggadocious한국철도공사 {
    Placemark: 강삭철도_Placemark[];
    여천선:       삭도_Value;
    옥구선:       삭도_Value;
    진해선:       강삭철도_Value;
    광양제철선:     삭도_Value;
    사천선:       삭도_Value;
    제천조차장선:    삭도_Value;
    가야선:       삭도_Value;
    부전선:       삭도_Value;
    울산항선:      강삭철도_Value;
    장생포선:      강삭철도_Value;
    금장삼각선:     강삭철도_Value;
    천안직결선:     Fluffy천안직결선;
    수인선:       강삭철도_Value;
    장항선:       강삭철도_Value;
    군산화물선:     강삭철도_Value;
    장항화물선:     강삭철도_Value;
    남포선:       강삭철도_Value;
    덕산선:       강삭철도_Value;
    경전선:       강삭철도_Value;
    광주선:       삭도_Value;
    수색객차출발선:   강삭철도_Value;
    서울교외선:     강삭철도_Value;
    망우선:       삭도_Value;
    대구선:       삭도_Value;
}

export interface Fluffy천안직결선 {
    "두정-천안": 삭도_Value;
}

export interface Ambitious궤도선 {
    함평궤도주식회사:      삭도_Value;
    서울특별시:         궤도선_서울특별시;
    "남선합동전기 주식회사": 강삭철도_Value;
    제주도순환궤도:       강삭철도_Value;
}

export interface 궤도선_서울특별시 {
    Placemark:   강삭철도_Placemark[];
    "서울전차 의주로선": 삭도_Value;
    "서울전차 창경원선": 삭도_Value;
}

export interface 폐지_기타 {
    공항철도:    Fluffy공항철도;
    국립중앙과학관: 강삭철도_Value;
    도계광업소:   삭도_Value;
}

export interface Fluffy공항철도 {
    인천국제공항철도: 삭도_Value;
}

export interface Sticky도시철도 {
    한국철도공사: 한국철도공사_1;
    서울교통공사: { [key: string]: 삭도_Value };
}

export interface 한국철도공사_1 {
    분당선: 삭도_Value;
}

export interface 폐지_사철 {
    경성전기주식회사:   강삭철도_Value;
    조선철도주식회사:   삭도_Value;
    궤도선:        { [key: string]: 삭도_Value };
    조선경남철도주식회사: 삭도_Value;
    버스:         버스_Class;
}

export interface 버스_Class {
    조선경남철도주식회사: 강삭철도_Value;
}

export interface 폐지_삭도 {
    Placemark:  강삭철도_Placemark;
    조선전업주식회사:   삭도_Value;
    송도해상케이블카:   삭도_Value;
    "보문산 케이블카": 삭도_Value;
}

export interface Indecent전용선 {
    Placemark:     강삭철도_Placemark[];
    한국철도공사:        한국철도공사_2;
    도계광업소:         삭도_Value;
    "주식회사 삼척탄좌개발": 삭도_Value;
    서울특별시:         전용선_서울특별시;
    철도청:           전용선_철도청;
    궤도선:           Cunning궤도선;
    "조선총독부 철도국":   삭도_Value;
    "북한 철도성":      Ambitious북한철도성;
}

export interface Cunning궤도선 {
    "조선총독부 철도국": 삭도_Value;
    "북한 철도성":    Ambitious북한철도성;
}

export interface Ambitious북한철도성 {
    평라선: 삭도_Value;
}

export interface 전용선_서울특별시 {
    "경성궤도 본선": 삭도_Value;
}

export interface 전용선_철도청 {
    문현선:   삭도_Value;
    동해남부선: 강삭철도_Value;
    경부선:   삭도_Value;
    전라선:   삭도_Value;
    동해북부선: 삭도_Value;
    안성선:   삭도_Value;
}

export interface 한국철도공사_2 {
    경부선:     Tentacled경부선;
    수인선:     Fluffy수인선;
    경인선:     Fluffy경인선;
    영동선:     강삭철도_Value;
    묵호항선:    삭도_Value;
    경북선:     강삭철도_Value;
    충북선:     강삭철도_Value;
    진해선:     Fluffy진해선;
    여천선:     삭도_Value;
    중앙선:     Tentacled중앙선;
    동해남부선:   강삭철도_Value;
    삼척선:     삭도_Value;
    호남선:     강삭철도_Value;
    북전주선:    Fluffy북전주선;
    군산화물선:   강삭철도_Value;
    장항화물선:   강삭철도_Value;
    경전선:     강삭철도_Value;
    덕산선:     삭도_Value;
    광주선:     강삭철도_Value;
    경의선:     삭도_Value;
    서울교외선:   강삭철도_Value;
    경원선:     강삭철도_Value;
    "구 대구선": 삭도_Value;
    대구선:     강삭철도_Value;
    전라선:     강삭철도_Value;
    장항선:     강삭철도_Value;
    경춘선:     강삭철도_Value;
    동해북부선:   삭도_Value;
    "구 경춘선": 삭도_Value;
}

export interface Tentacled경부선 {
    Placemark: 강삭철도_Placemark[];
    부산진:       삭도_Value;
}

export interface Fluffy경인선 {
    Placemark: 강삭철도_Placemark[];
    인천:        강삭철도_Value;
}

export interface Fluffy북전주선 {
    북전주: 강삭철도_Value;
}

export interface Fluffy수인선 {
    Placemark: 강삭철도_Placemark[];
    학익:        강삭철도_Value;
    소래:        강삭철도_Value;
}

export interface Tentacled중앙선 {
    Placemark: 강삭철도_Placemark[];
    영천:        삭도_Value;
}

export interface Fluffy진해선 {
    Placemark: 강삭철도_Placemark;
    진해:        강삭철도_Value;
}

export interface Ambitious지선 {
    궤도선: 국철_Class;
}

export interface DocumentPoint {
    영업시설: 영업시설;
    건널목:  건널목;
    전기시설: 전기시설;
}

export interface 건널목 {
    영업중: 건널목_영업중;
    폐지:  건널목_폐지;
}

export interface 건널목_영업중 {
    국유철도:        Purple국유철도;
    "주식회사 강원랜드": 영업중_주식회사강원랜드;
}

export interface Purple국유철도 {
    한국철도공사: 한국철도공사_3;
}

export interface 한국철도공사_3 {
    대불선:        수도권광역급행철도_B노선기지선;
    경인선:        동탄인덕원선;
    군산항선:       동탄인덕원선;
    울산신항선:      동탄인덕원선;
    대구선:        동탄인덕원선;
    대전선:        동탄인덕원선;
    옥구선:        동탄인덕원선;
    북전주선:       동탄인덕원선;
    중앙선:        동탄인덕원선;
    태백선:        동탄인덕원선;
    영동선:        동탄인덕원선;
    용산삼각선:      동탄인덕원선;
    우암선:        동탄인덕원선;
    울산항선:       동탄인덕원선;
    대전철도차량정비단선: 동탄인덕원선;
    진해선:        동탄인덕원선;
    장항선:        동탄인덕원선;
    군산화물선:      동탄인덕원선;
    경원선:        동탄인덕원선;
    경부선:        동탄인덕원선;
    경의선:        동탄인덕원선;
    서울교외선:      동탄인덕원선;
    호남선:        동탄인덕원선;
    덕산선:        동탄인덕원선;
    경전선:        동탄인덕원선;
    광주선:        동탄인덕원선;
    북송정삼각선:     동탄인덕원선;
    오송선:        수도권광역급행철도_B노선기지선;
    충북선:        동탄인덕원선;
    "구 경춘선":    동탄인덕원선;
    동해선:        수도권광역급행철도_B노선기지선;
    함백선:        동탄인덕원선;
    북평선:        동탄인덕원선;
    삼척선:        동탄인덕원선;
    정선선:        동탄인덕원선;
    경북선:        동탄인덕원선;
    문경선:        동탄인덕원선;
    장생포선:       동탄인덕원선;
    괴동선:        동탄인덕원선;
    강경선:        동탄인덕원선;
    온산선:        동탄인덕원선;
    사천선:        동탄인덕원선;
}

export interface 동탄인덕원선 {
    Placemark: PurplePlacemark[];
}

export interface PurplePlacemark {
    "@id":       string;
    name:        string;
    description: string;
    LookAt:      LookAt;
    styleUrl:    string;
    Region?:     Region;
    Point:       PlacemarkPoint;
}

export interface LookAt {
    longitude: string;
    latitude:  string;
    altitude:  string;
    heading:   string;
    tilt:      string;
    range:     string;
}

export interface PlacemarkPoint {
    coordinates: string;
}

export interface 수도권광역급행철도_B노선기지선 {
    Placemark: PurplePlacemark;
}

export interface 영업중_주식회사강원랜드 {
    "하이원추추파크 전용선": 동탄인덕원선;
}

export interface 건널목_폐지 {
    국유철도:   Fluffy국유철도;
    대한석탄공사: 폐지_대한석탄공사;
}

export interface Fluffy국유철도 {
    한국철도공사: 한국철도공사_4;
}

export interface 한국철도공사_4 {
    대전선:     수도권광역급행철도_B노선기지선;
    경부선:     동탄인덕원선;
    장항선:     동탄인덕원선;
    장항화물선:   동탄인덕원선;
    경원선:     동탄인덕원선;
    경의선:     동탄인덕원선;
    서울교외선:   동탄인덕원선;
    경인선:     동탄인덕원선;
    호남선:     동탄인덕원선;
    전라선:     동탄인덕원선;
    미전선:     동탄인덕원선;
    경전선:     동탄인덕원선;
    광주선:     동탄인덕원선;
    북송정삼각선:  수도권광역급행철도_B노선기지선;
    오송선:     동탄인덕원선;
    충북선:     동탄인덕원선;
    "구 경춘선": 동탄인덕원선;
    경춘선:     동탄인덕원선;
    중앙선:     동탄인덕원선;
    동해남부선:   동탄인덕원선;
    태백선:     동탄인덕원선;
    영동선:     동탄인덕원선;
    북평선:     수도권광역급행철도_B노선기지선;
    정선선:     동탄인덕원선;
    경북선:     동탄인덕원선;
    대구선:     동탄인덕원선;
    주인선:     수도권광역급행철도_B노선기지선;
    금장삼각선:   동탄인덕원선;
    우암선:     수도권광역급행철도_B노선기지선;
    진해선:     수도권광역급행철도_B노선기지선;
}

export interface 폐지_대한석탄공사 {
    화순선: 동탄인덕원선;
}

export interface 영업시설 {
    영업중:  영업시설_영업중;
    폐지:   영업시설_폐지;
    개업예정: 개업예정;
}

export interface 개업예정 {
    공영교통:                  개업예정_공영교통;
    신분당선:                  동탄인덕원선;
    공항철도:                  개업예정_공항철도;
    "지티엑스에이운영 주식회사":       { [key: string]: 동탄인덕원선 };
    국유철도:                  개업예정_국유철도;
    "수도권 광역급행철도 B노선":      동탄인덕원선;
    "수도권 광역급행철도 B노선 연결선":  동탄인덕원선;
    "수도권 광역급행철도 B노선 기지선":  수도권광역급행철도_B노선기지선;
    "수도권 광역급행철도 C노선":      동탄인덕원선;
    "수도권 광역급행철도 C노선 기지선":  수도권광역급행철도_B노선기지선;
    신안산선:                  동탄인덕원선;
    별내선:                   동탄인덕원선;
    남양주도시공사:               개업예정_남양주도시공사;
    "신안산선 지선":             동탄인덕원선;
    "서해철도 주식회사":           개업예정_서해철도주식회사;
    "판교 랜드마크 트램":          동탄인덕원선;
    "판교 랜드마크 트램 기지선":      동탄인덕원선;
    동탄인덕원선:                동탄인덕원선;
    "동탄인덕원선 지선":           동탄인덕원선;
    동북선도시철도주식회사:           동북선도시철도주식회사;
    "주식회사 SR":             개업예정_주식회사Sr;
    "서울 경전철 위례선":          동탄인덕원선;
    "서울 경전철 위례선 지선":       동탄인덕원선;
    "강화석모해상케이블카 주식회사":     강화석모해상케이블카주식회사;
    "포항영일만해양케이블카 주식회사":    포항영일만해양케이블카주식회사;
    옥정포천선:                 동탄인덕원선;
    "부산 도시철도 오륙도선":        동탄인덕원선;
    "부산 도시철도 C-Bay Park선": 동탄인덕원선;
    창원도시철도:                동탄인덕원선;
}

export interface 강화석모해상케이블카주식회사 {
    강화석모해상케이블카: 동탄인덕원선;
}

export interface 개업예정_공영교통 {
    인천교통공사: 공영교통_인천교통공사;
    광주교통공사: { [key: string]: 동탄인덕원선 };
    서울교통공사: Purple서울교통공사;
    부산교통공사: 공영교통_부산교통공사;
    대전교통공사: Purple대전교통공사;
}

export interface Purple대전교통공사 {
    "대전 도시철도 1호선": 수도권광역급행철도_B노선기지선;
}

export interface 공영교통_부산교통공사 {
    Placemark:           PurplePlacemark[];
    "부산 도시철도 사상하단선":     동탄인덕원선;
    "부산 도시철도 사상하단선 기지선": 동탄인덕원선;
    "부산 도시철도 2호선":       수도권광역급행철도_B노선기지선;
}

export interface Purple서울교통공사 {
    별내선:          동탄인덕원선;
    "서울교통공사 8호선": 수도권광역급행철도_B노선기지선;
    진접기지선:        동탄인덕원선;
    진접삼각선:        동탄인덕원선;
    도봉산옥정선:       동탄인덕원선;
    "서울교통공사 7호선": 동탄인덕원선;
    "서울시메트로 9호선": 동탄인덕원선;
    옥정포천선:        동탄인덕원선;
}

export interface 공영교통_인천교통공사 {
    "인천 도시철도 1호선": 동탄인덕원선;
}

export interface 개업예정_공항철도 {
    인천국제공항철도: 수도권광역급행철도_B노선기지선;
}

export interface 개업예정_국유철도 {
    한국철도공사:   한국철도공사_5;
    대구도시철도공사: 국유철도_대구도시철도공사;
}

export interface 국유철도_대구도시철도공사 {
    "대구 도시철도 1호선": 동탄인덕원선;
}

export interface 한국철도공사_5 {
    Placemark: PurplePlacemark;
    경춘선:       동탄인덕원선;
    중앙선:       동탄인덕원선;
    동해북부선:     동탄인덕원선;
    동해선:       동탄인덕원선;
    부전마산선:     동탄인덕원선;
    부산신항선:     수도권광역급행철도_B노선기지선;
    경전선:       동탄인덕원선;
    서해선:       동탄인덕원선;
    경부선:       동탄인덕원선;
    중부내륙선:     동탄인덕원선;
    월곶판교선:     동탄인덕원선;
    여주원주선:     동탄인덕원선;
    충북선:       동탄인덕원선;
    호남고속선:     동탄인덕원선;
    경강선:       수도권광역급행철도_B노선기지선;
    화성고속연결선:   동탄인덕원선;
    경부고속선:     동탄인덕원선;
    평택고속연결선:   수도권광역급행철도_B노선기지선;
    보성목포선:     동탄인덕원선;
    춘천속초선:     동탄인덕원선;
    평택선:       동탄인덕원선;
    수인선:       수도권광역급행철도_B노선기지선;
    경원선:       동탄인덕원선;
    호남선:       동탄인덕원선;
    장항선:       수도권광역급행철도_B노선기지선;
    과천선:       수도권광역급행철도_B노선기지선;
    경의선:       수도권광역급행철도_B노선기지선;
    소사원시선:     수도권광역급행철도_B노선기지선;
}

export interface 개업예정_남양주도시공사 {
    별내선: 동탄인덕원선;
    진접선: 수도권광역급행철도_B노선기지선;
}

export interface 동북선도시철도주식회사 {
    "서울 경전철 동북선": 동탄인덕원선;
}

export interface 개업예정_서해철도주식회사 {
    "신안산선 지선": 동탄인덕원선;
}

export interface 개업예정_주식회사Sr {
    평택고속연결선: 수도권광역급행철도_B노선기지선;
}

export interface 포항영일만해양케이블카주식회사 {
    "포항 영일만 해양 케이블카": 동탄인덕원선;
}

export interface 영업시설_영업중 {
    국유철도:                      Tentacled국유철도;
    "주식회사 강원랜드":               { [key: string]: 동탄인덕원선 };
    공영교통:                      영업중_공영교통;
    "코레일관광개발 주식회사":            코레일관광개발주식회사;
    서울시메트로9호선:                 서울시메트로9호선;
    "새서울철도 주식회사":              주식회사;
    신분당선주식회사:                  신분당선주식회사;
    경기철도주식회사:                  주식회사;
    "부산-김해경전철운영주식회사":          영업중_부산김해경전철운영주식회사;
    "코레일네트웍스 주식회사":            코레일네트웍스주식회사;
    공항철도:                      영업중_공항철도;
    용인경량전철주식회사:                영업중_용인경량전철주식회사;
    "주식회사 우진메트로":              영업중_주식회사우진메트로;
    "우이신설경전철 주식회사":            영업중_우이신설경전철주식회사;
    "주식회사 SR":                 영업중_주식회사Sr;
    한국철도기술연구원:                 { [key: string]: 동탄인덕원선 };
    "서부광역철도 주식회사":             영업중_서부광역철도주식회사;
    "서해철도 주식회사":               { [key: string]: 수도권광역급행철도_B노선기지선 };
    "남서울경전철 주식회사":             영업중_남서울경전철주식회사;
    하남도시공사:                    영업중_하남도시공사;
    남양주도시공사:                   영업중_남양주도시공사;
    김포골드라인운영주식회사:              { [key: string]: 동탄인덕원선 };
    "지티엑스에이운영 주식회사":           지티엑스에이운영주식회사;
    교육부:                       교육부;
    "주식회사 파라다이스호텔 부산":         씨월드고속훼리주식회사;
    "주식회사 신세계조선호텔":            씨월드고속훼리주식회사;
    "주식회사 온양관광호텔":             씨월드고속훼리주식회사;
    "해운대블루라인 주식회사":            { [key: string]: 동탄인덕원선 };
    대한석탄공사:                    영업중_대한석탄공사;
    "호텔금오산 주식회사":              호텔금오산주식회사;
    한국삭도공업주식회사:                한국삭도공업주식회사;
    "내장산개발 주식회사":              내장산개발주식회사;
    "양지대둔산삭도 유한회사":            양지대둔산삭도유한회사;
    "경상북도 울릉군":                경상북도울릉군;
    "삼진관광개발 주식회사":             삼진관광개발주식회사;
    "사천바다케이블카 주식회사":           사천바다케이블카주식회사;
    한국방송공사:                    한국방송공사;
    "목포해상케이블카 주식회사":           목포해상케이블카주식회사;
    "강원도 삼척시":                 강원도삼척시;
    "설악케이블카 주식회사":             설악케이블카주식회사;
    "송도해상케이블카 주식회사":           송도해상케이블카주식회사;
    "대덕개발 주식회사":               대덕개발주식회사;
    "여수해상케이블카 주식회사":           여수해상케이블카주식회사;
    "영남알프스얼음골케이블카 주식회사":       영남알프스얼음골케이블카주식회사;
    "청풍호반케이블카 주식회사":           청풍호반케이블카주식회사;
    통영관광개발공사:                  통영관광개발공사;
    "한림팩 주식회사":                한림팩주식회사;
    부산시설공단:                    부산시설공단;
    명량해상케이블카:                  동탄인덕원선;
    "제부도해상케이블카 주식회사":          제부도해상케이블카주식회사;
    "거제 케이블카 주식회사":            거제케이블카주식회사;
    "강원도 화천군":                 강원도화천군;
    "주식회사 소노인터네셔널":            주식회사소노인터네셔널;
    "주식회사 에이치제이매그놀리아용평호텔앤리조트": 주식회사에이치제이매그놀리아용평호텔앤리조트;
    "재단법인 송암스페이스센터":           재단법인송암스페이스센터;
    "주식회사 울진케이블카":             주식회사울진케이블카;
    "하동케이블카 주식회사":             하동케이블카주식회사;
    순천에코트랜스:                   순천에코트랜스;
    "JR 큐슈 고속선 주식회사":          Jr큐슈고속선주식회사;
    "간푸 페리 주식회사":              간푸페리주식회사;
    "미래고속 주식회사":               미래고속주식회사;
    "부관훼리 주식회사":               부관훼리주식회사;
    "태성해운 주식회사":               씨월드고속훼리주식회사;
    "씨월드고속훼리 주식회사":            씨월드고속훼리주식회사;
    "내각 보안성 제23국 지하철도 운영관리국":  영업중_내각보안성제23국지하철도운영관리국;
    "북한 철도성":                  영업중_북한철도성;
    "평양시 려객운수종합기업소":           영업중_평양시려객운수종합기업소;
    교육기관:                      수도권광역급행철도_B노선기지선;
    조선인민군:                     조선인민군;
    "함경북도 청진시":                함경북도청진시;
    "조선총독부 철도국":               영업중_조선총독부철도국;
    "강원도 원산시":                 강원도원산시;
    천지삭도:                      동탄인덕원선;
    향도봉호:                      동탄인덕원선;
}

export interface Jr큐슈고속선주식회사 {
    비틀: 수도권광역급행철도_B노선기지선;
}

export interface 간푸페리주식회사 {
    "간푸 페리": 수도권광역급행철도_B노선기지선;
}

export interface 강원도삼척시 {
    삼척해상케이블카: 동탄인덕원선;
}

export interface 강원도원산시 {
    "원산 궤도전차": 동탄인덕원선;
}

export interface 강원도화천군 {
    "백암산 케이블카": 동탄인덕원선;
}

export interface 거제케이블카주식회사 {
    "거제 파노라마 케이블카": 동탄인덕원선;
}

export interface 주식회사 {
    신분당선: 동탄인덕원선;
}

export interface 경상북도울릉군 {
    "독도전망대 케이블카": 동탄인덕원선;
}

export interface 영업중_공영교통 {
    서울교통공사: Fluffy서울교통공사;
    인천교통공사: { [key: string]: 동탄인덕원선 };
    대전교통공사: Fluffy대전교통공사;
    광주교통공사: 광주교통공사;
    부산교통공사: { [key: string]: 동탄인덕원선 };
}

export interface 광주교통공사 {
    "광주교통공사 1호선": 동탄인덕원선;
}

export interface Fluffy대전교통공사 {
    "대전 도시철도 1호선": 동탄인덕원선;
}

export interface Fluffy서울교통공사 {
    "서울교통공사 3호선":       동탄인덕원선;
    "서울교통공사 5호선":       동탄인덕원선;
    "서울교통공사 5호선 마천지선":  동탄인덕원선;
    "서울교통공사 6호선":       동탄인덕원선;
    "서울교통공사 7호선":       동탄인덕원선;
    "서울교통공사 8호선":       동탄인덕원선;
    "서울시메트로 9호선":       동탄인덕원선;
    "서울교통공사 2호선 성수지선":  동탄인덕원선;
    "서울교통공사 2호선 신정지선":  동탄인덕원선;
    "서울교통공사 3호선 지축기지선": 동탄인덕원선;
    "서울교통공사 3호선 수서기지선": 동탄인덕원선;
    하남선:                동탄인덕원선;
    진접선:                수도권광역급행철도_B노선기지선;
    "서울교통공사 4호선 창동기지선": 동탄인덕원선;
    "서울교통공사 4호선 노원창동선": 동탄인덕원선;
    삼송지축선:              수도권광역급행철도_B노선기지선;
    "서울교통공사 3호선 수서삼각선": 동탄인덕원선;
    "서울교통공사 5호선 강동삼각선": 동탄인덕원선;
    "서울교통공사 1호선":       동탄인덕원선;
    "서울교통공사 2호선":       동탄인덕원선;
    "서울교통공사 4호선":       동탄인덕원선;
    과천선:                수도권광역급행철도_B노선기지선;
}

export interface 영업중_공항철도 {
    인천국제공항철도: 동탄인덕원선;
    용유차량기지선:  동탄인덕원선;
    용유차량삼각선:  동탄인덕원선;
    수색직결선:    수도권광역급행철도_B노선기지선;
}

export interface 교육부 {
    교육기관: 동탄인덕원선;
}

export interface Tentacled국유철도 {
    한국철도공사:   한국철도공사_6;
    대구도시철도공사: { [key: string]: 동탄인덕원선 };
    철도청:      Purple철도청;
}

export interface Purple철도청 {
    북전주선: 수도권광역급행철도_B노선기지선;
}

export interface 한국철도공사_6 {
    가야선:               동탄인덕원선;
    강경선:               동탄인덕원선;
    경부고속선:             동탄인덕원선;
    경부선:               동탄인덕원선;
    장항선:               동탄인덕원선;
    경북선:               동탄인덕원선;
    경원선:               동탄인덕원선;
    경의선:               동탄인덕원선;
    경인선:               동탄인덕원선;
    경전선:               동탄인덕원선;
    경춘선:               동탄인덕원선;
    광양제철선:             동탄인덕원선;
    괴동선:               동탄인덕원선;
    군산화물선:             동탄인덕원선;
    대구선:               동탄인덕원선;
    대불선:               동탄인덕원선;
    동해선:               동탄인덕원선;
    문경선:               동탄인덕원선;
    부강화물선:             동탄인덕원선;
    부산신항선:             동탄인덕원선;
    "부산신항 북선":         동탄인덕원선;
    "부산신항 남선":         동탄인덕원선;
    분당선:               동탄인덕원선;
    삼척선:               동탄인덕원선;
    서울교외선:             동탄인덕원선;
    수인선:               동탄인덕원선;
    신광양항선:             동탄인덕원선;
    신동화물선:             동탄인덕원선;
    안산선:               동탄인덕원선;
    영동선:               동탄인덕원선;
    옥구선:               동탄인덕원선;
    우암선:               동탄인덕원선;
    일산선:               동탄인덕원선;
    전라선:               동탄인덕원선;
    정선선:               동탄인덕원선;
    중앙선:               동탄인덕원선;
    진해선:               동탄인덕원선;
    충북선:               동탄인덕원선;
    태백선:               동탄인덕원선;
    호남선:               동탄인덕원선;
    사업소:               동탄인덕원선;
    과천선:               동탄인덕원선;
    "KTX 리무진 광명도심공항선": 동탄인덕원선;
    용산선:               동탄인덕원선;
    광주선:               동탄인덕원선;
    광명주박기지선:           동탄인덕원선;
    병점기지선:             동탄인덕원선;
    남부화물기지선:           동탄인덕원선;
    구로삼각선:             동탄인덕원선;
    천안직결선:             동탄인덕원선;
    오송선:               동탄인덕원선;
    오송정비기지선:           동탄인덕원선;
    대전선:               동탄인덕원선;
    영동정비기지선:           동탄인덕원선;
    미전선:               동탄인덕원선;
    양산화물선:             동탄인덕원선;
    부전선:               동탄인덕원선;
    온산선:               동탄인덕원선;
    장생포선:              동탄인덕원선;
    울산항선:              동탄인덕원선;
    북영주삼각선:            동탄인덕원선;
    북평선:               동탄인덕원선;
    묵호항선:              동탄인덕원선;
    망우선:               동탄인덕원선;
    고양기지선:             동탄인덕원선;
    수색객차출발선:           동탄인덕원선;
    문산기지선:             동탄인덕원선;
    장성화물선:             동탄인덕원선;
    북송정삼각선:            동탄인덕원선;
    전경삼각선:             동탄인덕원선;
    덕산선:               동탄인덕원선;
    구로기지선:             동탄인덕원선;
    경강선:               동탄인덕원선;
    부발기지선:             동탄인덕원선;
    소사원시선:             동탄인덕원선;
    영일만항선:             동탄인덕원선;
    평택선:               동탄인덕원선;
    여천선:               동탄인덕원선;
    함백선:               동탄인덕원선;
    사천선:               동탄인덕원선;
    시흥기지선:             동탄인덕원선;
    월곶시흥선:             동탄인덕원선;
    분당기지선:             동탄인덕원선;
    용산삼각선:             동탄인덕원선;
    평내기지선:             동탄인덕원선;
    제천조차장선:            동탄인덕원선;
    영천삼각선:             동탄인덕원선;
    용문기지선:             동탄인덕원선;
    태백삼각선:             동탄인덕원선;
    울산기지선:             동탄인덕원선;
    울산신항선:             동탄인덕원선;
    원주강릉선:             동탄인덕원선;
    동해북부선:             동탄인덕원선;
    안산입고선:             수도권광역급행철도_B노선기지선;
    중부내륙선:             동탄인덕원선;
    익산삼각선:             동탄인덕원선;
    강릉삼각선:             동탄인덕원선;
    박물관:               수도권광역급행철도_B노선기지선;
    평택직결선:             동탄인덕원선;
    삼송지축선:             수도권광역급행철도_B노선기지선;
    성북기지선:             동탄인덕원선;
    안산출고선:             수도권광역급행철도_B노선기지선;
    수색직결선:             동탄인덕원선;
    이문기지선:             동탄인덕원선;
    숙성기지선:             동탄인덕원선;
    호남고속선:             동탄인덕원선;
    신동연결선:             동탄인덕원선;
    경주삼각선:             동탄인덕원선;
    대전철도차량정비단선:        동탄인덕원선;
    강릉기지선:             동탄인덕원선;
    분당연결선:             수도권광역급행철도_B노선기지선;
    대전북연결선:            동탄인덕원선;
    대전남연결선:            동탄인덕원선;
    부산북연결선:            동탄인덕원선;
    익산남연결선:            동탄인덕원선;
    "포항영덕 대행버스":       동탄인덕원선;
    익산북연결선:            동탄인덕원선;
    광주송정북연결선:          동탄인덕원선;
    군산항선:              동탄인덕원선;
    광주기지선:             동탄인덕원선;
    평택삼각선:             동탄인덕원선;
    건천연결선:             동탄인덕원선;
    광양항선:              동탄인덕원선;
    북전주선:              수도권광역급행철도_B노선기지선;
    대구북연결선:            동탄인덕원선;
    대구남연결선:            동탄인덕원선;
    시흥연결선:             동탄인덕원선;
}

export interface 영업중_남서울경전철주식회사 {
    "서울 경전철 신림선": 동탄인덕원선;
}

export interface 영업중_남양주도시공사 {
    진접선: 동탄인덕원선;
}

export interface 영업중_내각보안성제23국지하철도운영관리국 {
    Placemark:      PurplePlacemark;
    "평양 지하철도 혁신선":  동탄인덕원선;
    "평양 지하철도 천리마선": 동탄인덕원선;
    "평양 지하철도 만경대선": 동탄인덕원선;
    사업소:            교육기관;
    교육기관:           교육기관;
    병원:             교육기관;
}

export interface 내장산개발주식회사 {
    "내장산 케이블카": 동탄인덕원선;
}

export interface 대덕개발주식회사 {
    "앞산 케이블카": 동탄인덕원선;
}

export interface 영업중_대한석탄공사 {
    "도계광업소 강삭철도": 동탄인덕원선;
}

export interface 목포해상케이블카주식회사 {
    목포해상케이블카: 동탄인덕원선;
}

export interface 미래고속주식회사 {
    코비: 수도권광역급행철도_B노선기지선;
}

export interface 부관훼리주식회사 {
    부관훼리: 수도권광역급행철도_B노선기지선;
}

export interface 영업중_부산김해경전철운영주식회사 {
    부산김해경전철: 동탄인덕원선;
}

export interface 부산시설공단 {
    "금강공원 케이블카": 동탄인덕원선;
}

export interface 영업중_북한철도성 {
    경원선:          동탄인덕원선;
    강원선:          동탄인덕원선;
    천내선:          동탄인덕원선;
    금강산청년선:       동탄인덕원선;
    청년이천선:        동탄인덕원선;
    경의선:          동탄인덕원선;
    황해청년선:        동탄인덕원선;
    배천선:          동탄인덕원선;
    옹진선:          동탄인덕원선;
    부포선:          동탄인덕원선;
    송림선:          동탄인덕원선;
    장연선:          동탄인덕원선;
    은률선:          동탄인덕원선;
    서해갑문선:        동탄인덕원선;
    평남선:          동탄인덕원선;
    도지리선:         동탄인덕원선;
    대안선:          동탄인덕원선;
    보산선:          동탄인덕원선;
    후산선:          동탄인덕원선;
    룡강선:          동탄인덕원선;
    강안선:          동탄인덕원선;
    안주탄광선:        동탄인덕원선;
    개천선:          동탄인덕원선;
    구봉산선:         동탄인덕원선;
    박천선:          동탄인덕원선;
    평북선:          동탄인덕원선;
    수풍선:          동탄인덕원선;
    압록강선:         동탄인덕원선;
    철산선:          동탄인덕원선;
    백마선:          동탄인덕원선;
    다사도선:         동탄인덕원선;
    덕현선:          동탄인덕원선;
    구성선:          동탄인덕원선;
    청년팔원선:        동탄인덕원선;
    녕변선:          동탄인덕원선;
    평덕선:          동탄인덕원선;
    남흥선:          동탄인덕원선;
    마평선:          동탄인덕원선;
    룡성선:          동탄인덕원선;
    명당선:          동탄인덕원선;
    령대선:          동탄인덕원선;
    재동선:          동탄인덕원선;
    득장선:          동탄인덕원선;
    명학선:          동탄인덕원선;
    시정선:          동탄인덕원선;
    평라선:          동탄인덕원선;
    대건선:          동탄인덕원선;
    직동탄광선:        동탄인덕원선;
    모학선:          동탄인덕원선;
    은산선:          동탄인덕원선;
    성산인입선:        동탄인덕원선;
    만포선:          동탄인덕원선;
    대각선:          동탄인덕원선;
    준혁선:          동탄인덕원선;
    조양탄광선:        동탄인덕원선;
    개천탄광선:        동탄인덕원선;
    룡암선:          동탄인덕원선;
    룡문탄광선:        동탄인덕원선;
    강계선:          동탄인덕원선;
    고원탄광선:        동탄인덕원선;
    천성탄광선:        동탄인덕원선;
    금야선:          동탄인덕원선;
    신흥선:          동탄인덕원선;
    장진선:          동탄인덕원선;
    서호선:          동탄인덕원선;
    창흥선:          동탄인덕원선;
    덕성선:          동탄인덕원선;
    리원선:          동탄인덕원선;
    두언선:          동탄인덕원선;
    허천선:          동탄인덕원선;
    만덕선:          동탄인덕원선;
    금골선:          동탄인덕원선;
    일탄선:          동탄인덕원선;
    청진조차장선:       동탄인덕원선;
    강덕선:          동탄인덕원선;
    청진항선:         동탄인덕원선;
    라진항선:         동탄인덕원선;
    백두산청년선:       동탄인덕원선;
    회령탄광선:        동탄인덕원선;
    함북선:          동탄인덕원선;
    세천선:          동탄인덕원선;
    동포선:          동탄인덕원선;
    남양국경선:        동탄인덕원선;
    고건원선:         동탄인덕원선;
    회암선:          동탄인덕원선;
    춘두선:          동탄인덕원선;
    적지선:          동탄인덕원선;
    두만강선:         동탄인덕원선;
    승리선:          동탄인덕원선;
    백무선:          동탄인덕원선;
    무산선:          동탄인덕원선;
    운봉선:          동탄인덕원선;
    북부내륙선:        동탄인덕원선;
    삼지연선:         동탄인덕원선;
    고참탄광선:        동탄인덕원선;
    대향선:          동탄인덕원선;
    문천항선:         동탄인덕원선;
    송도원선:         동탄인덕원선;
    원산항선:         동탄인덕원선;
    봉천탄광선:        동탄인덕원선;
    운하선:          동탄인덕원선;
    평양화전선:        동탄인덕원선;
    솔골탄광선:        동탄인덕원선;
    관하선:          동탄인덕원선;
    잉포선:          동탄인덕원선;
    덕남선:          동탄인덕원선;
    장상선:          동탄인덕원선;
    봉산선:          동탄인덕원선;
    안골선:          동탄인덕원선;
    신성선:          동탄인덕원선;
    서창선:          동탄인덕원선;
    회둔선:          동탄인덕원선;
    형봉선:          동탄인덕원선;
    대관리선:         동탄인덕원선;
    석하선:          동탄인덕원선;
    정도선:          동탄인덕원선;
    사업소:          동탄인덕원선;
    남포지선:         동탄인덕원선;
    비날론선:         동탄인덕원선;
    무산광산선:        동탄인덕원선;
    오시천선:         동탄인덕원선;
    락랑선:          동탄인덕원선;
    청화력선:         동탄인덕원선;
    고비선:          동탄인덕원선;
    독골선:          동탄인덕원선;
    화풍선:          동탄인덕원선;
    삼천포지선:        동탄인덕원선;
    동해북부선:        수도권광역급행철도_B노선기지선;
    온포선:          동탄인덕원선;
    송평선:          동탄인덕원선;
    박물관:          수도권광역급행철도_B노선기지선;
    병원:           교육기관;
    향산선:          동탄인덕원선;
    추평선:          동탄인덕원선;
    곡하선:          동탄인덕원선;
    봉화선:          동탄인덕원선;
    진흥선:          동탄인덕원선;
    산음선:          동탄인덕원선;
    보통강삼각선:       동탄인덕원선;
    남포항선:         동탄인덕원선;
    털섬항선:         동탄인덕원선;
    원산화물선:        동탄인덕원선;
    신송도원선:        동탄인덕원선;
    량진선:          동탄인덕원선;
    황주삼각선:        동탄인덕원선;
    봉학선:          동탄인덕원선;
    장선강선:         동탄인덕원선;
    봉창선:          동탄인덕원선;
    동평양삼각선:       동탄인덕원선;
    북창삼각선:        동탄인덕원선;
    향원삼각선:        동탄인덕원선;
    향원선:          동탄인덕원선;
    고원교외선:        동탄인덕원선;
    흥남항선:         동탄인덕원선;
    송평부두선:        동탄인덕원선;
    풍덕선:          동탄인덕원선;
    대택선:          동탄인덕원선;
    "바라놉스키-하산 선": 수도권광역급행철도_B노선기지선;
    "펑상 철로":      수도권광역급행철도_B노선기지선;
    "선단 철로":      수도권광역급행철도_B노선기지선;
    "창투 철로":      수도권광역급행철도_B노선기지선;
    려호선:          동탄인덕원선;
    신흥동선:         동탄인덕원선;
    신온선:          동탄인덕원선;
}

export interface 사천바다케이블카주식회사 {
    사천바다케이블카: 동탄인덕원선;
}

export interface 삼진관광개발주식회사 {
    "두륜산 케이블카": 동탄인덕원선;
}

export interface 영업중_서부광역철도주식회사 {
    소사대곡선: 동탄인덕원선;
}

export interface 서울시메트로9호선 {
    "서울시메트로 9호선": 동탄인덕원선;
}

export interface 설악케이블카주식회사 {
    "설악 케이블카": 동탄인덕원선;
}

export interface 송도해상케이블카주식회사 {
    송도해상케이블카: 동탄인덕원선;
}

export interface 순천에코트랜스 {
    순천만PRT: 동탄인덕원선;
}

export interface 신분당선주식회사 {
    신분당선:  동탄인덕원선;
    분당연결선: 수도권광역급행철도_B노선기지선;
}

export interface 씨월드고속훼리주식회사 {
    사업소: 수도권광역급행철도_B노선기지선;
}

export interface 양지대둔산삭도유한회사 {
    "대둔산 케이블카": 동탄인덕원선;
}

export interface 여수해상케이블카주식회사 {
    여수해상케이블카: 동탄인덕원선;
}

export interface 영남알프스얼음골케이블카주식회사 {
    "영남알프스 얼음골 케이블카": 동탄인덕원선;
}

export interface 영업중_용인경량전철주식회사 {
    용인경전철: 동탄인덕원선;
}

export interface 영업중_우이신설경전철주식회사 {
    "서울 경전철 우이신설선": 동탄인덕원선;
}

export interface 재단법인송암스페이스센터 {
    "송암 스페이스센터 케이블카": 동탄인덕원선;
}

export interface 제부도해상케이블카주식회사 {
    "제부도 해상케이블카": 동탄인덕원선;
}

export interface 조선인민군 {
    "평양 궤도전차 금수산선": 동탄인덕원선;
}

export interface 영업중_조선총독부철도국 {
    룡암선: 수도권광역급행철도_B노선기지선;
}

export interface 영업중_주식회사Sr {
    수서평택고속선:          동탄인덕원선;
    "수도권 광역급행철도 A노선": 수도권광역급행철도_B노선기지선;
    사업소:              수도권광역급행철도_B노선기지선;
}

export interface 주식회사소노인터네셔널 {
    "춘천 삼악산 호수 케이블카": 동탄인덕원선;
}

export interface 주식회사에이치제이매그놀리아용평호텔앤리조트 {
    "발왕산 관광케이블카": 동탄인덕원선;
}

export interface 영업중_주식회사우진메트로 {
    의정부경전철: 동탄인덕원선;
}

export interface 주식회사울진케이블카 {
    "왕피천 케이블카": 동탄인덕원선;
}

export interface 지티엑스에이운영주식회사 {
    "수도권 광역급행철도 A노선": 동탄인덕원선;
}

export interface 청풍호반케이블카주식회사 {
    청풍호반케이블카: 동탄인덕원선;
}

export interface 코레일관광개발주식회사 {
    "섬진강 기차마을 관광철도": 동탄인덕원선;
}

export interface 코레일네트웍스주식회사 {
    "KTX 셔틀버스 광명 사당선": 동탄인덕원선;
}

export interface 통영관광개발공사 {
    "통영 케이블카": 동탄인덕원선;
}

export interface 영업중_평양시려객운수종합기업소 {
    "평양 궤도전차 1호선": 동탄인덕원선;
    "평양 궤도전차 3호선": 동탄인덕원선;
    "평양 궤도전차 2호선": 동탄인덕원선;
    사업소:           수도권광역급행철도_B노선기지선;
}

export interface 영업중_하남도시공사 {
    하남선: 동탄인덕원선;
}

export interface 하동케이블카주식회사 {
    "하동 플라이웨이 케이블카": 동탄인덕원선;
}

export interface 한국방송공사 {
    "관악산 케이블카": 동탄인덕원선;
}

export interface 한국삭도공업주식회사 {
    "남산 케이블카": 동탄인덕원선;
}

export interface 한림팩주식회사 {
    "대구 팔공산 케이블카": 동탄인덕원선;
}

export interface 함경북도청진시 {
    "청진 궤도전차": 동탄인덕원선;
}

export interface 호텔금오산주식회사 {
    "금오산 케이블카": 동탄인덕원선;
}

export interface 영업시설_폐지 {
    국유철도:               Sticky국유철도;
    교통부:                교통부;
    한국중부발전주식회사:         한국중부발전주식회사;
    "주식회사 강원랜드":        폐지_주식회사강원랜드;
    "조선총독부 철도국":        폐지_조선총독부철도국;
    "북한 철도성":           폐지_북한철도성;
    경성전기주식회사:           Purple경성전기주식회사;
    "조선총독부 교통국":        폐지_조선총독부교통국;
    함평궤도주식회사:           함평궤도주식회사;
    조선경남철도주식회사:         조선경남철도주식회사;
    조선철도주식회사:           폐지_조선철도주식회사;
    제주도순환궤도:            제주도순환궤도;
    국립중앙과학관:            국립중앙과학관;
    "주식회사 포스코":         주식회사포스코;
    "가와사키 기선 주식회사":     가와사키기선주식회사;
    "김제궤도 주식회사":        김제궤도주식회사;
    "왜관궤도 주식회사":        왜관궤도주식회사;
    한국전력주식회사:           { [key: string]: 동탄인덕원선 };
    "남선합동전기 주식회사":      { [key: string]: 동탄인덕원선 };
    "재조선미육군사령부군정청 운수부": 재조선미육군사령부군정청운수부;
    교육기관:               수도권광역급행철도_B노선기지선;
    경부철도주식회사:           경부철도주식회사;
    "미쓰비시 제강 주식회사":     씨월드고속훼리주식회사;
    "남만주철도 주식회사":       남만주철도주식회사;
    대한석탄공사:             { [key: string]: 동탄인덕원선 };
    "주식회사 삼척탄좌개발":      주식회사삼척탄좌개발;
    조선전업주식회사:           조선전업주식회사;
    "보문산 케이블카":         보문산케이블카;
    송도해상케이블카:           송도해상케이블카;
    "농림부 산림국":          농림부산림국;
    "운수성 철도국":          { [key: string]: 수도권광역급행철도_B노선기지선 };
    "조선와사전기 주식회사":      조선와사전기주식회사;
    경춘철도주식회사:           경춘철도주식회사;
    사업소:                수도권광역급행철도_B노선기지선;
    서울특별시:              폐지_서울특별시;
    한성전기회사:             한성전기회사;
    경성궤도주식회사:           경성궤도주식회사;
    남조선철도주식회사:          남조선철도주식회사;
    함경북도:               함경북도;
    생기령점토석탄주식회사:        생기령점토석탄주식회사;
    영무궤도:               영무궤도;
    강서궤도:               강서궤도;
    "미쓰비시 석탄 광업 주식회사":  미쓰비시석탄광업주식회사;
    개천철도주식회사:           개천철도주식회사;
    도문철도주식회사:           도문철도주식회사;
    "조선평안철도 주식회사":      조선평안철도주식회사;
    신흥철도주식회사:           { [key: string]: 동탄인덕원선 };
    "평양시 려객운수종합기업소":    폐지_평양시려객운수종합기업소;
    북선척식철도주식회사:         북선척식철도주식회사;
    "동만주철도 주식회사":       동만주철도주식회사;
}

export interface 가와사키기선주식회사 {
    관여연락선: 수도권광역급행철도_B노선기지선;
}

export interface 강서궤도 {
    강서궤도: 동탄인덕원선;
}

export interface 개천철도주식회사 {
    개천선: 동탄인덕원선;
}

export interface 경부철도주식회사 {
    경인선: 수도권광역급행철도_B노선기지선;
    경부선: 동탄인덕원선;
}

export interface 경성궤도주식회사 {
    Placemark:   PurplePlacemark[];
    "경성궤도 본선":   수도권광역급행철도_B노선기지선;
    "경성궤도 광장리선": 수도권광역급행철도_B노선기지선;
}

export interface Purple경성전기주식회사 {
    금강산선:         동탄인덕원선;
    "서울전차 서대문선":  동탄인덕원선;
    "서울전차 영천선":   동탄인덕원선;
    "서울전차 마포선":   동탄인덕원선;
    "서울전차 의주로선":  동탄인덕원선;
    "서울전차 세종로선":  수도권광역급행철도_B노선기지선;
    "서울전차 효자동선":  수도권광역급행철도_B노선기지선;
    "서울전차 광화문선":  수도권광역급행철도_B노선기지선;
    "서울전차 안국동선":  동탄인덕원선;
    "서울전차 종로선":   동탄인덕원선;
    "서울전차 청량리선":  동탄인덕원선;
    "서울전차 석산선":   동탄인덕원선;
    "서울전차 경용선":   동탄인덕원선;
    "서울전차 노량진선":  동탄인덕원선;
    "서울전차 구용산선":  동탄인덕원선;
    "경성전차 강안선":   동탄인덕원선;
    "서울전차 을지로선":  동탄인덕원선;
    "서울전차 창경원선":  수도권광역급행철도_B노선기지선;
    "서울전차 충무로선":  수도권광역급행철도_B노선기지선;
    "서울전차 장충단선":  동탄인덕원선;
    "서울전차 왕십리선":  동탄인덕원선;
    "서울전차 용산역전선": 수도권광역급행철도_B노선기지선;
}

export interface 경춘철도주식회사 {
    "구 경춘선": 동탄인덕원선;
}

export interface 교통부 {
    경원선:     동탄인덕원선;
    경전선:     동탄인덕원선;
    "구 경춘선": 수도권광역급행철도_B노선기지선;
    신촌연결선:   동탄인덕원선;
    박물관:     수도권광역급행철도_B노선기지선;
    우암선:     수도권광역급행철도_B노선기지선;
    "구 대구선": 수도권광역급행철도_B노선기지선;
    경부선:     수도권광역급행철도_B노선기지선;
    동촌연결선:   동탄인덕원선;
    서울교외선:   수도권광역급행철도_B노선기지선;
    동해북부선:   수도권광역급행철도_B노선기지선;
    토해선:     동탄인덕원선;
}

export interface 국립중앙과학관 {
    대전자기부상시험선: 동탄인덕원선;
}

export interface Sticky국유철도 {
    한국철도공사: 한국철도공사_7;
    철도청:    Fluffy철도청;
}

export interface Fluffy철도청 {
    문경선:      동탄인덕원선;
    화순선:      동탄인덕원선;
    전라선:      동탄인덕원선;
    충북선:      동탄인덕원선;
    경전선:      동탄인덕원선;
    "구 대구선":  수도권광역급행철도_B노선기지선;
    수인선:      동탄인덕원선;
    경춘선:      동탄인덕원선;
    "구 경춘선":  동탄인덕원선;
    마산항제1부두선: 동탄인덕원선;
    진해선:      수도권광역급행철도_B노선기지선;
    김포선:      동탄인덕원선;
    당인리선:     동탄인덕원선;
    수려선:      동탄인덕원선;
    안성선:      동탄인덕원선;
    광주선:      수도권광역급행철도_B노선기지선;
    경부선:      동탄인덕원선;
    경북선:      동탄인덕원선;
    호남선:      동탄인덕원선;
    정선선:      수도권광역급행철도_B노선기지선;
    진삼선:      동탄인덕원선;
    영동선:      동탄인덕원선;
    용산선:      동탄인덕원선;
    장항선:      동탄인덕원선;
    장항화물선:    수도권광역급행철도_B노선기지선;
    오정선:      동탄인덕원선;
    비인선:      동탄인덕원선;
    동해남부선:    동탄인덕원선;
    서청주선:     동탄인덕원선;
    옥구선:      수도권광역급행철도_B노선기지선;
    회동선:      동탄인덕원선;
    망우선:      수도권광역급행철도_B노선기지선;
    남부순환선:    동탄인덕원선;
    병원:       동탄인덕원선;
    박물관:      수도권광역급행철도_B노선기지선;
    교육기관:     수도권광역급행철도_B노선기지선;
    경인선:      동탄인덕원선;
    충남선:      동탄인덕원선;
    사업소:      동탄인덕원선;
    중앙선:      동탄인덕원선;
    단양탄광선:    동탄인덕원선;
    문현선:      동탄인덕원선;
    우암선:      수도권광역급행철도_B노선기지선;
    옥서삼각선:    동탄인덕원선;
    경의선:      수도권광역급행철도_B노선기지선;
    수색객차출발선:  동탄인덕원선;
    울산선:      동탄인덕원선;
    장생포선:     수도권광역급행철도_B노선기지선;
    울산항선:     수도권광역급행철도_B노선기지선;
    동해북부선:    동탄인덕원선;
}

export interface 한국철도공사_7 {
    가야선:        수도권광역급행철도_B노선기지선;
    경부고속선:      동탄인덕원선;
    경전선:        동탄인덕원선;
    남포선:        동탄인덕원선;
    대구선:        동탄인덕원선;
    동해남부선:      동탄인덕원선;
    문경선:        동탄인덕원선;
    장항선:        동탄인덕원선;
    장항화물선:      동탄인덕원선;
    중앙선:        동탄인덕원선;
    태백선:        동탄인덕원선;
    화순선:        동탄인덕원선;
    경의선:        동탄인덕원선;
    금장삼각선:      동탄인덕원선;
    옥구선:        수도권광역급행철도_B노선기지선;
    경춘선:        동탄인덕원선;
    가은선:        동탄인덕원선;
    "구 경춘선":    동탄인덕원선;
    "구 대구선":    동탄인덕원선;
    경부선:        동탄인덕원선;
    경북선:        동탄인덕원선;
    호남선:        동탄인덕원선;
    충북선:        동탄인덕원선;
    정선선:        수도권광역급행철도_B노선기지선;
    전라선:        동탄인덕원선;
    영동선:        동탄인덕원선;
    효창선:        동탄인덕원선;
    마산항제1부두선:   동탄인덕원선;
    정양선:        동탄인덕원선;
    경원선:        동탄인덕원선;
    병원:         수도권광역급행철도_B노선기지선;
    광양제철선:      수도권광역급행철도_B노선기지선;
    분당선:        수도권광역급행철도_B노선기지선;
    진해선:        수도권광역급행철도_B노선기지선;
    영천삼각선:      수도권광역급행철도_B노선기지선;
    "구 대전남연결선": 동탄인덕원선;
    사업소:        동탄인덕원선;
}

export interface 김제궤도주식회사 {
    김제궤도: 동탄인덕원선;
}

export interface 남만주철도주식회사 {
    사업소:  수도권광역급행철도_B노선기지선;
    경부선:  동탄인덕원선;
    라진항선: 수도권광역급행철도_B노선기지선;
}

export interface 남조선철도주식회사 {
    경전선: 수도권광역급행철도_B노선기지선;
}

export interface 농림부산림국 {
    "가곡천 산림철도": 동탄인덕원선;
}

export interface 도문철도주식회사 {
    함북선: 수도권광역급행철도_B노선기지선;
}

export interface 동만주철도주식회사 {
    "동만주철도 본선": 수도권광역급행철도_B노선기지선;
}

export interface 미쓰비시석탄광업주식회사 {
    "미쓰비시 광업 대보탄갱선": 동탄인덕원선;
}

export interface 보문산케이블카 {
    "보문산 케이블카": 동탄인덕원선;
}

export interface 북선척식철도주식회사 {
    무산선: 수도권광역급행철도_B노선기지선;
}

export interface 폐지_북한철도성 {
    금강산선:     동탄인덕원선;
    청년이천선:    동탄인덕원선;
    황해청년선:    동탄인덕원선;
    장방삼각선:    동탄인덕원선;
    배천선:      동탄인덕원선;
    옹진선:      동탄인덕원선;
    부포선:      수도권광역급행철도_B노선기지선;
    은률선:      동탄인덕원선;
    도지리선:     수도권광역급행철도_B노선기지선;
    평북선:      수도권광역급행철도_B노선기지선;
    평라선:      동탄인덕원선;
    직동탄광선:    수도권광역급행철도_B노선기지선;
    신창삼각선:    동탄인덕원선;
    신흥선:      동탄인덕원선;
    허천선:      동탄인덕원선;
    청진조차장선:   동탄인덕원선;
    회령탄광선:    동탄인덕원선;
    삼지연선:     동탄인덕원선;
    보천선:      동탄인덕원선;
    성평선:      동탄인덕원선;
    금강산청년선:   동탄인덕원선;
    평남선:      동탄인덕원선;
    서해리선:     동탄인덕원선;
    덕달선:      동탄인덕원선;
    운산선:      동탄인덕원선;
    잠진리선:     동탄인덕원선;
    남동선:      동탄인덕원선;
    "구 은률선":  동탄인덕원선;
    박천선:      수도권광역급행철도_B노선기지선;
    삼등탄광선:    동탄인덕원선;
    안주탄광선:    동탄인덕원선;
    화풍선:      동탄인덕원선;
    청남선:      동탄인덕원선;
    개천선:      동탄인덕원선;
    하성선:      동탄인덕원선;
    장연선:      동탄인덕원선;
    일탄선:      수도권광역급행철도_B노선기지선;
    백두산청년선:   동탄인덕원선;
    백무선:      동탄인덕원선;
    함북선:      동탄인덕원선;
    사해선:      동탄인덕원선;
    내토선:      동탄인덕원선;
    경원선:      수도권광역급행철도_B노선기지선;
    병원:       교육기관;
    다사도선:     동탄인덕원선;
    북부내륙선:    교육기관;
    강계선:      동탄인덕원선;
    만포선:      수도권광역급행철도_B노선기지선;
    구장삼각선:    동탄인덕원선;
    청년팔원선:    동탄인덕원선;
    경의선:      동탄인덕원선;
    삼천포지선:    동탄인덕원선;
    화풍삼각선:    동탄인덕원선;
    배골선:      동탄인덕원선;
    매하선:      동탄인덕원선;
    청단삼각선:    동탄인덕원선;
    문천항선:     동탄인덕원선;
    고비선:      수도권광역급행철도_B노선기지선;
    천성탄광선:    수도권광역급행철도_B노선기지선;
    "평양 덕산선": 동탄인덕원선;
    평덕선:      동탄인덕원선;
    수화선:      동탄인덕원선;
    서호선:      동탄인덕원선;
    청암삼각선:    동탄인덕원선;
    장진선:      동탄인덕원선;
    장풍선:      동탄인덕원선;
    무산선:      동탄인덕원선;
    서상삼각선:    동탄인덕원선;
    남양삼각선:    동탄인덕원선;
    온성선:      동탄인덕원선;
    회암선:      수도권광역급행철도_B노선기지선;
    남라진선:     수도권광역급행철도_B노선기지선;
    송림선:      수도권광역급행철도_B노선기지선;
    청진항선:     수도권광역급행철도_B노선기지선;
    사업소:      동탄인덕원선;
    문덕삼각선:    동탄인덕원선;
    선봉항선:     동탄인덕원선;
}

export interface 생기령점토석탄주식회사 {
    "생기령 점토궤도": 동탄인덕원선;
}

export interface 폐지_서울특별시 {
    "서울전차 서대문선":   동탄인덕원선;
    "서울전차 영천선":    동탄인덕원선;
    "서울전차 마포선":    동탄인덕원선;
    "서울전차 의주로선":   동탄인덕원선;
    "서울전차 세종로선":   동탄인덕원선;
    "서울전차 효자동선":   동탄인덕원선;
    "서울전차 광화문선":   동탄인덕원선;
    "서울전차 종로선":    동탄인덕원선;
    "서울전차 청량리선":   동탄인덕원선;
    "서울전차 종로삼각선":  동탄인덕원선;
    "서울전차 경용선":    동탄인덕원선;
    "서울전차 노량진선":   동탄인덕원선;
    "서울전차 영등포선":   동탄인덕원선;
    "서울전차 구용산선":   동탄인덕원선;
    "서울전차 을지로선":   동탄인덕원선;
    "서울전차 동대문삼각선": 동탄인덕원선;
    "서울전차 을지로삼각선": 동탄인덕원선;
    "서울전차 돈암동선":   동탄인덕원선;
    "서울전차 창경원선":   동탄인덕원선;
    "서울전차 충무로선":   동탄인덕원선;
    "서울전차 왕십리선":   동탄인덕원선;
    "서울전차 마포차고선":  동탄인덕원선;
    "서울전차 영등포차고선": 동탄인덕원선;
    "서울전차 삼각지차고선": 동탄인덕원선;
    "서울전차 동대문차고선": 동탄인덕원선;
    사업소:           수도권광역급행철도_B노선기지선;
    "경성궤도 본선":     동탄인덕원선;
    "경성궤도 광장리선":   동탄인덕원선;
    "서울전차 용산역전선":  동탄인덕원선;
}

export interface 송도해상케이블카 {
    "(구)송도해상케이블카": 동탄인덕원선;
}

export interface 영무궤도 {
    영무궤도: 교육기관;
}

export interface 왜관궤도주식회사 {
    왜관궤도: 동탄인덕원선;
}

export interface 재조선미육군사령부군정청운수부 {
    병원: 수도권광역급행철도_B노선기지선;
}

export interface 제주도순환궤도 {
    제주도순환궤도:      동탄인덕원선;
    "제주도순환궤도 지선": 수도권광역급행철도_B노선기지선;
}

export interface 조선경남철도주식회사 {
    안성선:             동탄인덕원선;
    장항화물선:           수도권광역급행철도_B노선기지선;
    "장항-군산 연락선":     동탄인덕원선;
    장항선:             동탄인덕원선;
    "조선경남철도 승합자동차선": 동탄인덕원선;
}

export interface 조선와사전기주식회사 {
    "부산전차 광복동선": 동탄인덕원선;
}

export interface 조선전업주식회사 {
    "영월광업소 삭도": 동탄인덕원선;
}

export interface 폐지_조선철도주식회사 {
    경북선:     동탄인덕원선;
    "구 경북선": 동탄인덕원선;
    수인선:     동탄인덕원선;
    "구 은률선": 수도권광역급행철도_B노선기지선;
    사해선:     수도권광역급행철도_B노선기지선;
    평덕선:     동탄인덕원선;
    장진선:     수도권광역급행철도_B노선기지선;
    무산선:     수도권광역급행철도_B노선기지선;
}

export interface 폐지_조선총독부교통국 {
    Placemark: PurplePlacemark;
    군산화물선:     수도권광역급행철도_B노선기지선;
    당인리선:      수도권광역급행철도_B노선기지선;
    "구 광주선":   동탄인덕원선;
    경부선:       동탄인덕원선;
    경원선:       동탄인덕원선;
    전라선:       동탄인덕원선;
    경의선:       동탄인덕원선;
    용산선:       동탄인덕원선;
    동해중부선:     동탄인덕원선;
    대삼선:       동탄인덕원선;
    동해북부선:     동탄인덕원선;
    동해남부선:     동탄인덕원선;
    경전선:       수도권광역급행철도_B노선기지선;
    함북선:       수도권광역급행철도_B노선기지선;
}

export interface 폐지_조선총독부철도국 {
    중앙선:                     동탄인덕원선;
    대구선:                     동탄인덕원선;
    군산화물선:                   수도권광역급행철도_B노선기지선;
    경부선:                     수도권광역급행철도_B노선기지선;
    경의선:                     동탄인덕원선;
    신촌연결선:                   수도권광역급행철도_B노선기지선;
    병원:                      교육기관;
    사업소:                     동탄인덕원선;
    전라선:                     동탄인덕원선;
    동해남부선:                   동탄인덕원선;
    "구 대구선":                 수도권광역급행철도_B노선기지선;
    마포지선궤도:                  수도권광역급행철도_B노선기지선;
    월미도지선:                   동탄인덕원선;
    "조선총독부 철도국 자동차 곡순선":     동탄인덕원선;
    "조선총독부 철도국 자동차 동복선":     동탄인덕원선;
    "조선총독부 철도국 자동차 화순선":     동탄인덕원선;
    "조선총독부 철도국 자동차 광려본선":    동탄인덕원선;
    평라선:                     동탄인덕원선;
    강덕선:                     수도권광역급행철도_B노선기지선;
    벽란도지선:                   동탄인덕원선;
    신안주지선:                   동탄인덕원선;
    함북선:                     동탄인덕원선;
    강안선:                     수도권광역급행철도_B노선기지선;
    "조선총독부 철도국 연락자동차 청진웅기선": 동탄인덕원선;
    "조선총독부 철도국 연락자동차 종성경원선": 동탄인덕원선;
    "조선총독부 철도국 연락자동차 종성온성선": 동탄인덕원선;
    "조선총독부 철도국 정기항로 웅기청진선":  동탄인덕원선;
    "조선총독부 철도국 연락자동차 경원훈춘선": 수도권광역급행철도_B노선기지선;
}

export interface 조선평안철도주식회사 {
    평남선: 수도권광역급행철도_B노선기지선;
}

export interface 폐지_주식회사강원랜드 {
    "하이원추추파크 전용선": 수도권광역급행철도_B노선기지선;
}

export interface 주식회사삼척탄좌개발 {
    "정암탄광 전용철도": 동탄인덕원선;
}

export interface 주식회사포스코 {
    괴동선: 수도권광역급행철도_B노선기지선;
}

export interface 폐지_평양시려객운수종합기업소 {
    "평양 궤도전차 1호선": 동탄인덕원선;
}

export interface 한국중부발전주식회사 {
    서천화력선: 동탄인덕원선;
}

export interface 한성전기회사 {
    "서울전차 의주로선": 동탄인덕원선;
}

export interface 함경북도 {
    "경성 라남 수압궤도": 동탄인덕원선;
}

export interface 함평궤도주식회사 {
    함평궤도: 동탄인덕원선;
}

export interface 전기시설 {
    폐지:  전기시설_폐지;
    영업중: 전기시설_영업중;
}

export interface 전기시설_영업중 {
    한국중부발전주식회사: 씨월드고속훼리주식회사;
}

export interface 전기시설_폐지 {
    경성전기주식회사: Fluffy경성전기주식회사;
}

export interface Fluffy경성전기주식회사 {
    사업소: 동탄인덕원선;
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
        { json: "Path", js: "Path", typ: r("Path") },
        { json: "Point", js: "Point", typ: r("DocumentPoint") },
    ], false),
    "Path": o([
        { json: "ASIA", js: "ASIA", typ: r("Asia") },
    ], false),
    "Asia": o([
        { json: "DPRK", js: "DPRK", typ: r("Dprk") },
        { json: "ROK", js: "ROK", typ: r("Rok") },
    ], false),
    "Dprk": o([
        { json: "영업", js: "영업", typ: r("Dprk영업") },
        { json: "폐지", js: "폐지", typ: r("Dprk폐지") },
    ], false),
    "Dprk영업": o([
        { json: "전용선", js: "전용선", typ: r("Purple전용선") },
        { json: "국철", js: "국철", typ: r("Purple국철") },
        { json: "궤도선", js: "궤도선", typ: r("Purple궤도선") },
        { json: "도시철도", js: "도시철도", typ: r("Purple도시철도") },
        { json: "강삭철도", js: "강삭철도", typ: r("강삭철도_Value") },
        { json: "삭도", js: "삭도", typ: r("삭도_Value") },
    ], false),
    "강삭철도_Value": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
    ], false),
    "강삭철도_Placemark": o([
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
    "Purple국철": o([
        { json: "지선", js: "지선", typ: r("Purple지선") },
        { json: "간선", js: "간선", typ: r("Purple간선") },
        { json: "북한 철도성", js: "북한 철도성", typ: r("국철_북한철도성") },
    ], false),
    "Purple간선": o([
        { json: "북한 철도성", js: "북한 철도성", typ: r("Purple북한철도성") },
    ], false),
    "Purple북한철도성": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "경의선", js: "경의선", typ: r("북한철도성_경의선") },
        { json: "평라선", js: "평라선", typ: r("강삭철도_Value") },
        { json: "평북선", js: "평북선", typ: r("강삭철도_Value") },
        { json: "평덕선", js: "평덕선", typ: r("강삭철도_Value") },
        { json: "평남선", js: "평남선", typ: r("교육기관") },
        { json: "강원선", js: "강원선", typ: r("교육기관") },
        { json: "개천선", js: "개천선", typ: r("교육기관") },
        { json: "금강산청년선", js: "금강산청년선", typ: r("강삭철도_Value") },
        { json: "동해북부선", js: "동해북부선", typ: r("삭도_Value") },
        { json: "남양국경선", js: "남양국경선", typ: r("교육기관") },
        { json: "두만강선", js: "두만강선", typ: r("강삭철도_Value") },
        { json: "만포선", js: "만포선", typ: r("강삭철도_Value") },
        { json: "무산선", js: "무산선", typ: r("무산선") },
        { json: "배천선", js: "배천선", typ: r("교육기관") },
        { json: "백두산청년선", js: "백두산청년선", typ: r("강삭철도_Value") },
        { json: "백마선", js: "백마선", typ: r("강삭철도_Value") },
        { json: "백무선", js: "백무선", typ: r("강삭철도_Value") },
        { json: "북부내륙선", js: "북부내륙선", typ: r("강삭철도_Value") },
        { json: "경원선", js: "경원선", typ: r("강삭철도_Value") },
        { json: "함북선", js: "함북선", typ: r("강삭철도_Value") },
        { json: "황해청년선", js: "황해청년선", typ: r("강삭철도_Value") },
    ], false),
    "교육기관": o([
    ], false),
    "북한철도성_경의선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "정주기관차대", js: "정주기관차대", typ: r("삭도_Value") },
        { json: "사리원기관차대", js: "사리원기관차대", typ: r("강삭철도_Value") },
    ], false),
    "삭도_Value": o([
        { json: "Placemark", js: "Placemark", typ: r("강삭철도_Placemark") },
    ], false),
    "무산선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "철송기관차대", js: "철송기관차대", typ: r("강삭철도_Value") },
    ], false),
    "국철_북한철도성": o([
        { json: "Placemark", js: "Placemark", typ: r("강삭철도_Placemark") },
        { json: "진흥선", js: "진흥선", typ: r("삭도_Value") },
    ], false),
    "Purple지선": o([
        { json: "북한 철도성", js: "북한 철도성", typ: r("Fluffy북한철도성") },
    ], false),
    "Fluffy북한철도성": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "모학선", js: "모학선", typ: r("강삭철도_Value") },
        { json: "신흥선", js: "신흥선", typ: r("강삭철도_Value") },
        { json: "청진조차장선", js: "청진조차장선", typ: r("강삭철도_Value") },
        { json: "신온선", js: "신온선", typ: r("강삭철도_Value") },
        { json: "털섬항선", js: "털섬항선", typ: r("교육기관") },
        { json: "강계선", js: "강계선", typ: r("삭도_Value") },
        { json: "강덕선", js: "강덕선", typ: r("교육기관") },
        { json: "강안선", js: "강안선", typ: r("강삭철도_Value") },
        { json: "고건원선", js: "고건원선", typ: r("교육기관") },
        { json: "고비선", js: "고비선", typ: r("교육기관") },
        { json: "고원탄광선", js: "고원탄광선", typ: r("강삭철도_Value") },
        { json: "고참탄광선", js: "고참탄광선", typ: r("교육기관") },
        { json: "곡하선", js: "곡하선", typ: r("삭도_Value") },
        { json: "금골선", js: "금골선", typ: r("강삭철도_Value") },
        { json: "남포지선", js: "남포지선", typ: r("강삭철도_Value") },
        { json: "남흥선", js: "남흥선", typ: r("강삭철도_Value") },
        { json: "다사도선", js: "다사도선", typ: r("강삭철도_Value") },
        { json: "대각선", js: "대각선", typ: r("교육기관") },
        { json: "대건선", js: "대건선", typ: r("삭도_Value") },
        { json: "봉창선", js: "봉창선", typ: r("삭도_Value") },
        { json: "대안선", js: "대안선", typ: r("삭도_Value") },
        { json: "덕성선", js: "덕성선", typ: r("교육기관") },
        { json: "덕현선", js: "덕현선", typ: r("삭도_Value") },
        { json: "도지리선", js: "도지리선", typ: r("교육기관") },
        { json: "두언선", js: "두언선", typ: r("교육기관") },
        { json: "득장선", js: "득장선", typ: r("교육기관") },
        { json: "라진항선", js: "라진항선", typ: r("강삭철도_Value") },
        { json: "락랑선", js: "락랑선", typ: r("강삭철도_Value") },
        { json: "려호선", js: "려호선", typ: r("교육기관") },
        { json: "룡문탄광선", js: "룡문탄광선", typ: r("교육기관") },
        { json: "룡암선", js: "룡암선", typ: r("강삭철도_Value") },
        { json: "리원선", js: "리원선", typ: r("교육기관") },
        { json: "마평선", js: "마평선", typ: r("교육기관") },
        { json: "만덕선", js: "만덕선", typ: r("강삭철도_Value") },
        { json: "명당선", js: "명당선", typ: r("교육기관") },
        { json: "문천항선", js: "문천항선", typ: r("교육기관") },
        { json: "장연선", js: "장연선", typ: r("교육기관") },
        { json: "봉산선", js: "봉산선", typ: r("삭도_Value") },
        { json: "봉천탄광선", js: "봉천탄광선", typ: r("삭도_Value") },
        { json: "부포선", js: "부포선", typ: r("교육기관") },
        { json: "비날론선", js: "비날론선", typ: r("강삭철도_Value") },
        { json: "산음선", js: "산음선", typ: r("강삭철도_Value") },
        { json: "삼지연선", js: "삼지연선", typ: r("삭도_Value") },
        { json: "서호선", js: "서호선", typ: r("삭도_Value") },
        { json: "석하선", js: "석하선", typ: r("교육기관") },
        { json: "성산인입선", js: "성산인입선", typ: r("삭도_Value") },
        { json: "세천선", js: "세천선", typ: r("강삭철도_Value") },
        { json: "솔골탄광선", js: "솔골탄광선", typ: r("교육기관") },
        { json: "신송도원선", js: "신송도원선", typ: r("교육기관") },
        { json: "송도원선", js: "송도원선", typ: r("교육기관") },
        { json: "송림선", js: "송림선", typ: r("강삭철도_Value") },
        { json: "수풍선", js: "수풍선", typ: r("교육기관") },
        { json: "청년팔원선", js: "청년팔원선", typ: r("교육기관") },
        { json: "신흥동선", js: "신흥동선", typ: r("교육기관") },
        { json: "덕남선", js: "덕남선", typ: r("교육기관") },
        { json: "신성선", js: "신성선", typ: r("교육기관") },
        { json: "풍덕선", js: "풍덕선", typ: r("삭도_Value") },
        { json: "안골선", js: "안골선", typ: r("교육기관") },
        { json: "오시천선", js: "오시천선", typ: r("삭도_Value") },
        { json: "옹진선", js: "옹진선", typ: r("삭도_Value") },
        { json: "원산항선", js: "원산항선", typ: r("교육기관") },
        { json: "일탄선", js: "일탄선", typ: r("삭도_Value") },
        { json: "잉포선", js: "잉포선", typ: r("교육기관") },
        { json: "장상선", js: "장상선", typ: r("교육기관") },
        { json: "장진선", js: "장진선", typ: r("강삭철도_Value") },
        { json: "재동선", js: "재동선", typ: r("교육기관") },
        { json: "정도선", js: "정도선", typ: r("교육기관") },
        { json: "조양탄광선", js: "조양탄광선", typ: r("삭도_Value") },
        { json: "준혁선", js: "준혁선", typ: r("교육기관") },
        { json: "창흥선", js: "창흥선", typ: r("삭도_Value") },
        { json: "철산선", js: "철산선", typ: r("교육기관") },
        { json: "청년이천선", js: "청년이천선", typ: r("강삭철도_Value") },
        { json: "청진항선", js: "청진항선", typ: r("강삭철도_Value") },
        { json: "춘두선", js: "춘두선", typ: r("강삭철도_Value") },
        { json: "향산선", js: "향산선", typ: r("교육기관") },
        { json: "향원선", js: "향원선", typ: r("교육기관") },
        { json: "허천선", js: "허천선", typ: r("삭도_Value") },
        { json: "형봉선", js: "형봉선", typ: r("교육기관") },
        { json: "회둔선", js: "회둔선", typ: r("교육기관") },
        { json: "회령탄광선", js: "회령탄광선", typ: r("삭도_Value") },
        { json: "흥남항선", js: "흥남항선", typ: r("강삭철도_Value") },
    ], false),
    "Purple궤도선": o([
        { json: "함경북도 청진시", js: "함경북도 청진시", typ: r("강삭철도_Value") },
    ], false),
    "Purple도시철도": o([
        { json: "내각 보안성 제23국 지하철도 운영관리국", js: "내각 보안성 제23국 지하철도 운영관리국", typ: r("도시철도_내각보안성제23국지하철도운영관리국") },
        { json: "평양시 려객운수종합기업소", js: "평양시 려객운수종합기업소", typ: r("도시철도_평양시려객운수종합기업소") },
        { json: "강원도 원산시", js: "강원도 원산시", typ: r("강삭철도_Value") },
        { json: "평안남도 평성시", js: "평안남도 평성시", typ: r("삭도_Value") },
    ], false),
    "도시철도_내각보안성제23국지하철도운영관리국": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "평양 지하철도 천리마선", js: "평양 지하철도 천리마선", typ: r("강삭철도_Value") },
    ], false),
    "도시철도_평양시려객운수종합기업소": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "평양 궤도전차 금수산선", js: "평양 궤도전차 금수산선", typ: r("삭도_Value") },
        { json: "평양 궤도전차 3호선", js: "평양 궤도전차 3호선", typ: r("강삭철도_Value") },
        { json: "평양 궤도전차 2호선", js: "평양 궤도전차 2호선", typ: r("강삭철도_Value") },
        { json: "평양 궤도전차 1호선", js: "평양 궤도전차 1호선", typ: r("강삭철도_Value") },
    ], false),
    "Purple전용선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "북한 철도성", js: "북한 철도성", typ: r("Tentacled북한철도성") },
        { json: "기타", js: "기타", typ: r("강삭철도_Value") },
        { json: "궤도선", js: "궤도선", typ: r("Fluffy궤도선") },
        { json: "평양시 려객운수종합기업소", js: "평양시 려객운수종합기업소", typ: r("강삭철도_Value") },
    ], false),
    "Fluffy궤도선": o([
        { json: "북한 철도성", js: "북한 철도성", typ: m(r("강삭철도_Value")) },
        { json: "기타", js: "기타", typ: r("강삭철도_Value") },
    ], false),
    "Tentacled북한철도성": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "경의선", js: "경의선", typ: r("강삭철도_Value") },
        { json: "평남선", js: "평남선", typ: r("강삭철도_Value") },
        { json: "배천선", js: "배천선", typ: r("강삭철도_Value") },
        { json: "평덕선", js: "평덕선", typ: r("강삭철도_Value") },
        { json: "강원선", js: "강원선", typ: r("강삭철도_Value") },
        { json: "평북선", js: "평북선", typ: r("강삭철도_Value") },
        { json: "평라선", js: "평라선", typ: r("강삭철도_Value") },
        { json: "평양화전선", js: "평양화전선", typ: r("강삭철도_Value") },
        { json: "만포선", js: "만포선", typ: r("강삭철도_Value") },
        { json: "룡성선", js: "룡성선", typ: r("강삭철도_Value") },
        { json: "비날론선", js: "비날론선", typ: r("강삭철도_Value") },
        { json: "흥남항선", js: "흥남항선", typ: r("강삭철도_Value") },
        { json: "창흥선", js: "창흥선", typ: r("강삭철도_Value") },
        { json: "승리선", js: "승리선", typ: r("강삭철도_Value") },
        { json: "라진항선", js: "라진항선", typ: r("강삭철도_Value") },
        { json: "세천선", js: "세천선", typ: r("강삭철도_Value") },
        { json: "관하선", js: "관하선", typ: r("강삭철도_Value") },
        { json: "대건선", js: "대건선", typ: r("삭도_Value") },
        { json: "청년팔원선", js: "청년팔원선", typ: r("삭도_Value") },
        { json: "향원선", js: "향원선", typ: r("강삭철도_Value") },
        { json: "강계선", js: "강계선", typ: r("삭도_Value") },
        { json: "두언선", js: "두언선", typ: r("강삭철도_Value") },
        { json: "허천선", js: "허천선", typ: r("강삭철도_Value") },
        { json: "운하선", js: "운하선", typ: r("삭도_Value") },
        { json: "모학선", js: "모학선", typ: r("강삭철도_Value") },
        { json: "회둔선", js: "회둔선", typ: r("삭도_Value") },
        { json: "덕현선", js: "덕현선", typ: r("강삭철도_Value") },
        { json: "회령탄광선", js: "회령탄광선", typ: r("강삭철도_Value") },
        { json: "은률선", js: "은률선", typ: r("강삭철도_Value") },
        { json: "분강선", js: "분강선", typ: r("강삭철도_Value") },
        { json: "회암선", js: "회암선", typ: r("강삭철도_Value") },
        { json: "춘두선", js: "춘두선", typ: r("강삭철도_Value") },
        { json: "무산선", js: "무산선", typ: r("삭도_Value") },
        { json: "함북선", js: "함북선", typ: r("강삭철도_Value") },
        { json: "백무선", js: "백무선", typ: r("강삭철도_Value") },
        { json: "백두산청년선", js: "백두산청년선", typ: r("강삭철도_Value") },
        { json: "삼지연선", js: "삼지연선", typ: r("삭도_Value") },
        { json: "강안선", js: "강안선", typ: r("강삭철도_Value") },
        { json: "옹진선", js: "옹진선", typ: r("강삭철도_Value") },
        { json: "마평선", js: "마평선", typ: r("삭도_Value") },
        { json: "백마선", js: "백마선", typ: r("강삭철도_Value") },
        { json: "청진조차장선", js: "청진조차장선", typ: r("강삭철도_Value") },
        { json: "금골선", js: "금골선", typ: r("강삭철도_Value") },
        { json: "수풍선", js: "수풍선", typ: r("강삭철도_Value") },
        { json: "봉천탄광선", js: "봉천탄광선", typ: r("삭도_Value") },
        { json: "명당선", js: "명당선", typ: r("강삭철도_Value") },
        { json: "경원선", js: "경원선", typ: r("강삭철도_Value") },
        { json: "솔골탄광선", js: "솔골탄광선", typ: r("삭도_Value") },
        { json: "룡암선", js: "룡암선", typ: r("삭도_Value") },
        { json: "추평선", js: "추평선", typ: r("삭도_Value") },
        { json: "개천선", js: "개천선", typ: r("삭도_Value") },
        { json: "보산선", js: "보산선", typ: r("강삭철도_Value") },
        { json: "남흥선", js: "남흥선", typ: r("강삭철도_Value") },
        { json: "덕성선", js: "덕성선", typ: r("강삭철도_Value") },
        { json: "일탄선", js: "일탄선", typ: r("강삭철도_Value") },
        { json: "득장선", js: "득장선", typ: r("삭도_Value") },
        { json: "도지리선", js: "도지리선", typ: r("강삭철도_Value") },
        { json: "삼천포지선", js: "삼천포지선", typ: r("삭도_Value") },
        { json: "신흥선", js: "신흥선", typ: r("강삭철도_Value") },
        { json: "리원철산선", js: "리원철산선", typ: r("강삭철도_Value") },
        { json: "봉학선", js: "봉학선", typ: r("강삭철도_Value") },
        { json: "남포지선", js: "남포지선", typ: r("강삭철도_Value") },
        { json: "봉산선", js: "봉산선", typ: r("강삭철도_Value") },
        { json: "털섬항선", js: "털섬항선", typ: r("강삭철도_Value") },
        { json: "북부내륙선", js: "북부내륙선", typ: r("강삭철도_Value") },
        { json: "남포항선", js: "남포항선", typ: r("강삭철도_Value") },
        { json: "재동선", js: "재동선", typ: r("강삭철도_Value") },
        { json: "다사도선", js: "다사도선", typ: r("강삭철도_Value") },
        { json: "철산선", js: "철산선", typ: r("삭도_Value") },
        { json: "부포선", js: "부포선", typ: r("삭도_Value") },
        { json: "대안선", js: "대안선", typ: r("강삭철도_Value") },
        { json: "량진선", js: "량진선", typ: r("삭도_Value") },
        { json: "만덕선", js: "만덕선", typ: r("삭도_Value") },
        { json: "성산인입선", js: "성산인입선", typ: r("삭도_Value") },
        { json: "송림선", js: "송림선", typ: r("강삭철도_Value") },
        { json: "강덕선", js: "강덕선", typ: r("삭도_Value") },
        { json: "금강산청년선", js: "금강산청년선", typ: r("삭도_Value") },
        { json: "직동탄광선", js: "직동탄광선", typ: r("강삭철도_Value") },
        { json: "천내선", js: "천내선", typ: r("삭도_Value") },
        { json: "장선강선", js: "장선강선", typ: r("삭도_Value") },
        { json: "청년이천선", js: "청년이천선", typ: r("강삭철도_Value") },
        { json: "황해청년선", js: "황해청년선", typ: r("강삭철도_Value") },
    ], false),
    "Dprk폐지": o([
        { json: "전용선", js: "전용선", typ: r("Fluffy전용선") },
        { json: "국철", js: "국철", typ: r("Fluffy국철") },
        { json: "도시철도", js: "도시철도", typ: r("Fluffy도시철도") },
        { json: "사철", js: "사철", typ: m(r("강삭철도_Value")) },
        { json: "지선", js: "지선", typ: r("Tentacled지선") },
        { json: "궤도선", js: "궤도선", typ: r("Sticky궤도선") },
        { json: "공영교통", js: "공영교통", typ: r("Purple공영교통") },
        { json: "열차페리", js: "열차페리", typ: r("Purple열차페리") },
    ], false),
    "Purple공영교통": o([
        { json: "궤도선", js: "궤도선", typ: r("Tentacled궤도선") },
    ], false),
    "Tentacled궤도선": o([
        { json: "함경북도", js: "함경북도", typ: r("강삭철도_Value") },
    ], false),
    "Fluffy국철": o([
        { json: "간선", js: "간선", typ: r("Fluffy간선") },
        { json: "지선", js: "지선", typ: r("Fluffy지선") },
        { json: "버스", js: "버스", typ: r("국철_Class") },
    ], false),
    "Fluffy간선": o([
        { json: "북한 철도성", js: "북한 철도성", typ: r("Sticky북한철도성") },
        { json: "북선척식철도", js: "북선척식철도", typ: r("강삭철도_Value") },
    ], false),
    "Sticky북한철도성": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "경의선", js: "경의선", typ: r("강삭철도_Value") },
        { json: "평라선", js: "평라선", typ: r("강삭철도_Value") },
        { json: "동해북부선", js: "동해북부선", typ: r("강삭철도_Value") },
        { json: "금강산청년선", js: "금강산청년선", typ: r("강삭철도_Value") },
        { json: "두만강선", js: "두만강선", typ: r("강삭철도_Value") },
        { json: "배천선", js: "배천선", typ: r("강삭철도_Value") },
        { json: "백두산청년선", js: "백두산청년선", typ: r("강삭철도_Value") },
        { json: "백무선", js: "백무선", typ: r("강삭철도_Value") },
        { json: "북부내륙선", js: "북부내륙선", typ: r("강삭철도_Value") },
        { json: "경원선", js: "경원선", typ: r("강삭철도_Value") },
        { json: "함북선", js: "함북선", typ: r("강삭철도_Value") },
        { json: "황해청년선", js: "황해청년선", typ: r("강삭철도_Value") },
    ], false),
    "국철_Class": o([
        { json: "조선총독부 철도국", js: "조선총독부 철도국", typ: r("강삭철도_Value") },
    ], false),
    "Fluffy지선": o([
        { json: "북한 철도성", js: "북한 철도성", typ: r("Indigo북한철도성") },
        { json: "조선총독부 철도국", js: "조선총독부 철도국", typ: r("삭도_Value") },
    ], false),
    "Indigo북한철도성": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "박천선", js: "박천선", typ: r("삭도_Value") },
        { json: "성산인입선", js: "성산인입선", typ: r("삭도_Value") },
        { json: "수화선", js: "수화선", typ: r("삭도_Value") },
        { json: "옹진선", js: "옹진선", typ: r("강삭철도_Value") },
        { json: "청년이천선", js: "청년이천선", typ: r("강삭철도_Value") },
    ], false),
    "Sticky궤도선": o([
        { json: "강서궤도", js: "강서궤도", typ: r("삭도_Value") },
        { json: "생기령점토석탄주식회사", js: "생기령점토석탄주식회사", typ: r("강삭철도_Value") },
        { json: "주을삼림궤도", js: "주을삼림궤도", typ: r("강삭철도_Value") },
    ], false),
    "Fluffy도시철도": o([
        { json: "평양시 려객운수종합기업소", js: "평양시 려객운수종합기업소", typ: r("강삭철도_Value") },
    ], false),
    "Purple열차페리": o([
        { json: "국철", js: "국철", typ: r("국철_Class") },
    ], false),
    "Fluffy전용선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "북한 철도성", js: "북한 철도성", typ: r("Hilarious북한철도성") },
        { json: "궤도선", js: "궤도선", typ: r("Indigo궤도선") },
        { json: "기타", js: "기타", typ: r("강삭철도_Value") },
        { json: "조선철도주식회사", js: "조선철도주식회사", typ: r("전용선_조선철도주식회사") },
        { json: "미쓰비시 석탄 광업 주식회사", js: "미쓰비시 석탄 광업 주식회사", typ: r("삭도_Value") },
    ], false),
    "Indigo궤도선": o([
        { json: "Placemark", js: "Placemark", typ: r("강삭철도_Placemark") },
        { json: "북한 철도성", js: "북한 철도성", typ: r("Indecent북한철도성") },
        { json: "미쓰비시 석탄 광업 주식회사", js: "미쓰비시 석탄 광업 주식회사", typ: r("삭도_Value") },
        { json: "한국철도공사", js: "한국철도공사", typ: r("궤도선_한국철도공사") },
    ], false),
    "Indecent북한철도성": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "백무선", js: "백무선", typ: r("강삭철도_Value") },
        { json: "함북선", js: "함북선", typ: r("강삭철도_Value") },
        { json: "강원선", js: "강원선", typ: r("강삭철도_Value") },
        { json: "회령탄광선", js: "회령탄광선", typ: r("삭도_Value") },
        { json: "평남선", js: "평남선", typ: r("강삭철도_Value") },
        { json: "경의선", js: "경의선", typ: r("삭도_Value") },
        { json: "안주탄광선", js: "안주탄광선", typ: r("삭도_Value") },
        { json: "평덕선", js: "평덕선", typ: r("강삭철도_Value") },
        { json: "평라선", js: "평라선", typ: r("삭도_Value") },
    ], false),
    "궤도선_한국철도공사": o([
        { json: "호남선", js: "호남선", typ: r("삭도_Value") },
    ], false),
    "Hilarious북한철도성": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "금강산청년선", js: "금강산청년선", typ: r("강삭철도_Value") },
        { json: "경의선", js: "경의선", typ: r("강삭철도_Value") },
        { json: "평덕선", js: "평덕선", typ: r("강삭철도_Value") },
        { json: "백무선", js: "백무선", typ: r("강삭철도_Value") },
        { json: "백마선", js: "백마선", typ: r("강삭철도_Value") },
        { json: "평남선", js: "평남선", typ: r("삭도_Value") },
        { json: "룡성선", js: "룡성선", typ: r("강삭철도_Value") },
        { json: "장선강선", js: "장선강선", typ: r("강삭철도_Value") },
        { json: "백두산청년선", js: "백두산청년선", typ: r("강삭철도_Value") },
        { json: "라진항선", js: "라진항선", typ: r("강삭철도_Value") },
        { json: "함북선", js: "함북선", typ: r("강삭철도_Value") },
        { json: "평라선", js: "평라선", typ: r("강삭철도_Value") },
        { json: "대건선", js: "대건선", typ: r("삭도_Value") },
        { json: "만포선", js: "만포선", typ: r("강삭철도_Value") },
        { json: "남흥선", js: "남흥선", typ: r("강삭철도_Value") },
        { json: "강덕선", js: "강덕선", typ: r("삭도_Value") },
        { json: "봉산선", js: "봉산선", typ: r("강삭철도_Value") },
        { json: "구 은률선", js: "구 은률선", typ: r("삭도_Value") },
        { json: "구성선", js: "구성선", typ: r("강삭철도_Value") },
        { json: "평북선", js: "평북선", typ: r("강삭철도_Value") },
        { json: "다사도선", js: "다사도선", typ: r("삭도_Value") },
        { json: "대각선", js: "대각선", typ: r("강삭철도_Value") },
        { json: "대안선", js: "대안선", typ: r("삭도_Value") },
        { json: "덕성선", js: "덕성선", typ: r("삭도_Value") },
        { json: "두언선", js: "두언선", typ: r("강삭철도_Value") },
        { json: "룡강선", js: "룡강선", typ: r("삭도_Value") },
        { json: "보천선", js: "보천선", typ: r("강삭철도_Value") },
        { json: "은률선", js: "은률선", typ: r("강삭철도_Value") },
        { json: "옹진선", js: "옹진선", typ: r("강삭철도_Value") },
        { json: "잠진리선", js: "잠진리선", typ: r("삭도_Value") },
        { json: "부포선", js: "부포선", typ: r("삭도_Value") },
        { json: "북부내륙선", js: "북부내륙선", typ: r("강삭철도_Value") },
        { json: "삼지연선", js: "삼지연선", typ: r("삭도_Value") },
        { json: "송림선", js: "송림선", typ: r("강삭철도_Value") },
        { json: "강원선", js: "강원선", typ: r("삭도_Value") },
        { json: "경원선", js: "경원선", typ: r("강삭철도_Value") },
        { json: "천내선", js: "천내선", typ: r("삭도_Value") },
        { json: "추평선", js: "추평선", typ: r("삭도_Value") },
        { json: "황해청년선", js: "황해청년선", typ: r("강삭철도_Value") },
        { json: "회령탄광선", js: "회령탄광선", typ: r("삭도_Value") },
        { json: "박천선", js: "박천선", typ: r("삭도_Value") },
    ], false),
    "전용선_조선철도주식회사": o([
        { json: "사해선", js: "사해선", typ: r("삭도_Value") },
    ], false),
    "Tentacled지선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "미쓰비시 석탄 광업 주식회사", js: "미쓰비시 석탄 광업 주식회사", typ: r("삭도_Value") },
    ], false),
    "Rok": o([
        { json: "영업", js: "영업", typ: r("Rok영업") },
        { json: "폐지", js: "폐지", typ: r("Rok폐지") },
        { json: "미래", js: "미래", typ: r("미래") },
        { json: "미성선", js: "미성선", typ: r("미성선") },
    ], false),
    "미래": o([
        { json: "궤도선", js: "궤도선", typ: r("미래_궤도선") },
        { json: "도시철도", js: "도시철도", typ: r("미래_도시철도") },
        { json: "국철", js: "국철", typ: r("미래_국철") },
        { json: "삭도", js: "삭도", typ: m(r("삭도_Value")) },
        { json: "기타", js: "기타", typ: r("삭도_Value") },
    ], false),
    "미래_국철": o([
        { json: "간선", js: "간선", typ: r("Tentacled간선") },
        { json: "지선", js: "지선", typ: r("Sticky지선") },
        { json: "준고속선", js: "준고속선", typ: r("Purple준고속선") },
        { json: "고속선", js: "고속선", typ: r("Purple고속선") },
    ], false),
    "Tentacled간선": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("Purple한국철도공사") },
        { json: "북한 철도성", js: "북한 철도성", typ: r("삭도_Value") },
    ], false),
    "Purple한국철도공사": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "충북선", js: "충북선", typ: r("삭도_Value") },
        { json: "경부선", js: "경부선", typ: r("교육기관") },
        { json: "경원선", js: "경원선", typ: r("강삭철도_Value") },
    ], false),
    "Purple고속선": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("삭도_Value") },
    ], false),
    "Purple준고속선": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("강삭철도_Value") },
    ], false),
    "Sticky지선": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("Fluffy한국철도공사") },
    ], false),
    "Fluffy한국철도공사": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "군산항선", js: "군산항선", typ: r("강삭철도_Value") },
        { json: "부전선", js: "부전선", typ: r("부전선") },
    ], false),
    "부전선": o([
        { json: "부전-가야", js: "부전-가야", typ: r("삭도_Value") },
    ], false),
    "미래_궤도선": o([
        { json: "인천교통공사", js: "인천교통공사", typ: r("강삭철도_Value") },
        { json: "순천에코트랜스", js: "순천에코트랜스", typ: r("삭도_Value") },
    ], false),
    "미래_도시철도": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "인천교통공사", js: "인천교통공사", typ: r("Purple인천교통공사") },
        { json: "우이신설경전철 주식회사", js: "우이신설경전철 주식회사", typ: r("강삭철도_Value") },
        { json: "동북선도시철도주식회사", js: "동북선도시철도주식회사", typ: r("강삭철도_Value") },
        { json: "대구도시철도공사", js: "대구도시철도공사", typ: r("Purple대구도시철도공사") },
        { json: "서울시메트로 9호선", js: "서울시메트로 9호선", typ: r("Purple서울시메트로9호선") },
        { json: "부산교통공사", js: "부산교통공사", typ: r("강삭철도_Value") },
        { json: "한국철도공사", js: "한국철도공사", typ: r("강삭철도_Value") },
        { json: "광주광역시도시철도공사", js: "광주광역시도시철도공사", typ: r("강삭철도_Value") },
        { json: "서울교통공사", js: "서울교통공사", typ: r("강삭철도_Value") },
        { json: "에스지레일 주식회사", js: "에스지레일 주식회사", typ: r("강삭철도_Value") },
        { json: "넥스트레인 주식회사", js: "넥스트레인 주식회사", typ: r("강삭철도_Value") },
    ], false),
    "Purple대구도시철도공사": o([
        { json: "대구 도시철도 1호선", js: "대구 도시철도 1호선", typ: r("삭도_Value") },
    ], false),
    "Purple서울시메트로9호선": o([
        { json: "서울시메트로 9호선", js: "서울시메트로 9호선", typ: r("삭도_Value") },
    ], false),
    "Purple인천교통공사": o([
        { json: "Placemark", js: "Placemark", typ: r("강삭철도_Placemark") },
        { json: "서울교통공사 7호선", js: "서울교통공사 7호선", typ: r("삭도_Value") },
    ], false),
    "미성선": o([
        { json: "국철", js: "국철", typ: r("미성선_국철") },
        { json: "도시철도", js: "도시철도", typ: r("미성선_도시철도") },
        { json: "단양석탄공업 주식회사", js: "단양석탄공업 주식회사", typ: r("삭도_Value") },
        { json: "철도청", js: "철도청", typ: r("강삭철도_Value") },
        { json: "사철", js: "사철", typ: r("미성선_사철") },
        { json: "궤도선", js: "궤도선", typ: r("미성선_궤도선") },
        { json: "전용선", js: "전용선", typ: r("미성선_전용선") },
    ], false),
    "미성선_국철": o([
        { json: "지선", js: "지선", typ: r("Indigo지선") },
        { json: "철도청", js: "철도청", typ: r("강삭철도_Value") },
        { json: "한국철도공사", js: "한국철도공사", typ: r("국철_한국철도공사") },
        { json: "조선총독부 교통국", js: "조선총독부 교통국", typ: r("강삭철도_Value") },
        { json: "고속선", js: "고속선", typ: r("Fluffy고속선") },
    ], false),
    "Fluffy고속선": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("Tentacled한국철도공사") },
    ], false),
    "Tentacled한국철도공사": o([
        { json: "경부고속선", js: "경부고속선", typ: r("삭도_Value") },
    ], false),
    "Indigo지선": o([
        { json: "철도청", js: "철도청", typ: r("삭도_Value") },
    ], false),
    "국철_한국철도공사": o([
        { json: "Placemark", js: "Placemark", typ: r("강삭철도_Placemark") },
        { json: "영동선", js: "영동선", typ: r("강삭철도_Value") },
        { json: "호남선", js: "호남선", typ: r("삭도_Value") },
    ], false),
    "미성선_궤도선": o([
        { json: "서울특별시", js: "서울특별시", typ: r("삭도_Value") },
    ], false),
    "미성선_도시철도": o([
        { json: "창원도시철도", js: "창원도시철도", typ: r("강삭철도_Value") },
        { json: "부산교통공사", js: "부산교통공사", typ: r("Purple부산교통공사") },
    ], false),
    "Purple부산교통공사": o([
        { json: "부산 도시철도 2호선", js: "부산 도시철도 2호선", typ: r("삭도_Value") },
    ], false),
    "미성선_사철": o([
        { json: "궤도선", js: "궤도선", typ: r("사철_궤도선") },
    ], false),
    "사철_궤도선": o([
        { json: "김제궤도 주식회사", js: "김제궤도 주식회사", typ: r("삭도_Value") },
    ], false),
    "미성선_전용선": o([
        { json: "조선총독부 교통국", js: "조선총독부 교통국", typ: r("전용선_조선총독부교통국") },
    ], false),
    "전용선_조선총독부교통국": o([
        { json: "동해중부선", js: "동해중부선", typ: r("삭도_Value") },
    ], false),
    "Rok영업": o([
        { json: "국철", js: "국철", typ: r("Tentacled국철") },
        { json: "궤도선", js: "궤도선", typ: r("Indecent궤도선") },
        { json: "도시철도", js: "도시철도", typ: r("Tentacled도시철도") },
        { json: "기타", js: "기타", typ: r("영업_기타") },
        { json: "간선", js: "간선", typ: r("영업_간선") },
        { json: "삭도", js: "삭도", typ: m(r("삭도_Value")) },
        { json: "강삭철도", js: "강삭철도", typ: r("영업_강삭철도") },
        { json: "열차페리", js: "열차페리", typ: r("영업_열차페리") },
        { json: "전용선", js: "전용선", typ: r("Sticky전용선") },
    ], false),
    "영업_간선": o([
        { json: "서해철도 주식회사", js: "서해철도 주식회사", typ: r("간선_서해철도주식회사") },
        { json: "서부광역철도 주식회사", js: "서부광역철도 주식회사", typ: r("간선_서부광역철도주식회사") },
        { json: "한국철도공사", js: "한국철도공사", typ: r("Sticky한국철도공사") },
    ], false),
    "간선_서부광역철도주식회사": o([
        { json: "소사대곡선", js: "소사대곡선", typ: r("강삭철도_Value") },
    ], false),
    "간선_서해철도주식회사": o([
        { json: "소사원시선", js: "소사원시선", typ: r("소사원시선") },
        { json: "소사대곡선", js: "소사대곡선", typ: r("삭도_Value") },
    ], false),
    "소사원시선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "소사원시선종점-원시", js: "소사원시선종점-원시", typ: r("삭도_Value") },
    ], false),
    "Sticky한국철도공사": o([
        { json: "소사대곡선", js: "소사대곡선", typ: r("소사대곡선") },
    ], false),
    "소사대곡선": o([
        { json: "Placemark", js: "Placemark", typ: r("강삭철도_Placemark") },
        { json: "대곡-능곡", js: "대곡-능곡", typ: r("삭도_Value") },
    ], false),
    "영업_강삭철도": o([
        { json: "주식회사 강원랜드", js: "주식회사 강원랜드", typ: r("삭도_Value") },
    ], false),
    "Tentacled국철": o([
        { json: "간선", js: "간선", typ: r("Sticky간선") },
        { json: "지선", js: "지선", typ: r("Indecent지선") },
        { json: "버스", js: "버스", typ: r("Purple버스") },
        { json: "도시철도", js: "도시철도", typ: r("국철_도시철도") },
        { json: "준고속선", js: "준고속선", typ: r("Fluffy준고속선") },
        { json: "궤도선", js: "궤도선", typ: r("국철_궤도선") },
        { json: "고속선", js: "고속선", typ: r("Tentacled고속선") },
        { json: "기타", js: "기타", typ: r("국철_기타") },
        { json: "전용선", js: "전용선", typ: r("Tentacled전용선") },
    ], false),
    "Sticky간선": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("Indigo한국철도공사") },
    ], false),
    "Indigo한국철도공사": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "호남선", js: "호남선", typ: r("강삭철도_Value") },
        { json: "경인선", js: "경인선", typ: r("강삭철도_Value") },
        { json: "영동선", js: "영동선", typ: r("강삭철도_Value") },
        { json: "경북선", js: "경북선", typ: r("강삭철도_Value") },
        { json: "태백선", js: "태백선", typ: r("강삭철도_Value") },
        { json: "충북선", js: "충북선", typ: r("강삭철도_Value") },
        { json: "경춘선", js: "경춘선", typ: r("경춘선") },
        { json: "중앙선", js: "중앙선", typ: r("Purple중앙선") },
        { json: "원주강릉선", js: "원주강릉선", typ: r("강삭철도_Value") },
        { json: "동해선", js: "동해선", typ: r("동해선") },
        { json: "경부선", js: "경부선", typ: r("Purple경부선") },
        { json: "경강선", js: "경강선", typ: r("강삭철도_Value") },
        { json: "전라선", js: "전라선", typ: r("강삭철도_Value") },
        { json: "장항선", js: "장항선", typ: r("장항선") },
        { json: "경전선", js: "경전선", typ: r("경전선") },
        { json: "중부내륙선", js: "중부내륙선", typ: r("강삭철도_Value") },
        { json: "동해북부선", js: "동해북부선", typ: r("강삭철도_Value") },
        { json: "경의선", js: "경의선", typ: r("한국철도공사_경의선") },
        { json: "경원선", js: "경원선", typ: r("경원선") },
        { json: "대구선", js: "대구선", typ: r("강삭철도_Value") },
    ], false),
    "Purple경부선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "노량진-대방", js: "노량진-대방", typ: r("삭도_Value") },
        { json: "신도림-구로", js: "신도림-구로", typ: r("삭도_Value") },
        { json: "영등포-신도림", js: "영등포-신도림", typ: r("삭도_Value") },
        { json: "신길-영등포", js: "신길-영등포", typ: r("삭도_Value") },
        { json: "용산-노량진", js: "용산-노량진", typ: r("삭도_Value") },
        { json: "대방-신길", js: "대방-신길", typ: r("삭도_Value") },
        { json: "노량진-용산", js: "노량진-용산", typ: r("강삭철도_Value") },
        { json: "가산디-구로", js: "가산디-구로", typ: r("삭도_Value") },
        { json: "구로-가산디", js: "구로-가산디", typ: r("삭도_Value") },
        { json: "서울-용산", js: "서울-용산", typ: r("삭도_Value") },
        { json: "용산-서울", js: "용산-서울", typ: r("삭도_Value") },
        { json: "천안-두정", js: "천안-두정", typ: r("삭도_Value") },
        { json: "두정-직산", js: "두정-직산", typ: r("강삭철도_Value") },
        { json: "직산-성환", js: "직산-성환", typ: r("삭도_Value") },
        { json: "성환-평택", js: "성환-평택", typ: r("삭도_Value") },
        { json: "직산-두정", js: "직산-두정", typ: r("삭도_Value") },
        { json: "대신-김천", js: "대신-김천", typ: r("삭도_Value") },
        { json: "김천-대신", js: "김천-대신", typ: r("삭도_Value") },
        { json: "동대구-대구", js: "동대구-대구", typ: r("삭도_Value") },
        { json: "삼랑진-원동", js: "삼랑진-원동", typ: r("삭도_Value") },
        { json: "원동-삼랑진", js: "원동-삼랑진", typ: r("삭도_Value") },
        { json: "사상-부산진", js: "사상-부산진", typ: r("강삭철도_Value") },
        { json: "부산진-부산진", js: "부산진-부산진", typ: r("삭도_Value") },
        { json: "조치원-내판", js: "조치원-내판", typ: r("삭도_Value") },
        { json: "내판-조치원", js: "내판-조치원", typ: r("삭도_Value") },
        { json: "시흥연-금천구", js: "시흥연-금천구", typ: r("삭도_Value") },
        { json: "금천구-시흥연", js: "금천구-시흥연", typ: r("삭도_Value") },
        { json: "서정리-송탄", js: "서정리-송탄", typ: r("삭도_Value") },
        { json: "약목", js: "약목", typ: r("삭도_Value") },
        { json: "제목 없는 폴더", js: "제목 없는 폴더", typ: r("강삭철도_Value") },
    ], false),
    "경원선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "왕십리-청량리", js: "왕십리-청량리", typ: r("삭도_Value") },
    ], false),
    "한국철도공사_경의선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "행신-강매", js: "행신-강매", typ: r("삭도_Value") },
        { json: "화전-강매", js: "화전-강매", typ: r("삭도_Value") },
        { json: "행신-능곡", js: "행신-능곡", typ: r("삭도_Value") },
        { json: "능곡-행신", js: "능곡-행신", typ: r("삭도_Value") },
        { json: "강매-화전", js: "강매-화전", typ: r("삭도_Value") },
        { json: "서울-신촌", js: "서울-신촌", typ: r("삭도_Value") },
        { json: "가좌-신촌", js: "가좌-신촌", typ: r("삭도_Value") },
        { json: "가좌-디엠시", js: "가좌-디엠시", typ: r("삭도_Value") },
        { json: "수색-디엠시", js: "수색-디엠시", typ: r("삭도_Value") },
        { json: "화전-수색", js: "화전-수색", typ: r("삭도_Value") },
        { json: "수색-화전", js: "수색-화전", typ: r("삭도_Value") },
    ], false),
    "경전선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "한림정-낙동강", js: "한림정-낙동강", typ: r("삭도_Value") },
        { json: "낙동강-한림정", js: "낙동강-한림정", typ: r("삭도_Value") },
    ], false),
    "경춘선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "신내-망우", js: "신내-망우", typ: r("삭도_Value") },
        { json: "상봉-망우", js: "상봉-망우", typ: r("삭도_Value") },
    ], false),
    "동해선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "범일-부산진", js: "범일-부산진", typ: r("삭도_Value") },
        { json: "부산진-범일", js: "부산진-범일", typ: r("삭도_Value") },
        { json: "거제해-부전", js: "거제해-부전", typ: r("삭도_Value") },
    ], false),
    "장항선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "신창-온양온", js: "신창-온양온", typ: r("삭도_Value") },
        { json: "온양온-신창", js: "온양온-신창", typ: r("삭도_Value") },
    ], false),
    "Purple중앙선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "봉양-제천조", js: "봉양-제천조", typ: r("삭도_Value") },
        { json: "제천조-제천", js: "제천조-제천", typ: r("삭도_Value") },
        { json: "제천-제천조", js: "제천-제천조", typ: r("삭도_Value") },
        { json: "제천조-봉양", js: "제천조-봉양", typ: r("삭도_Value") },
        { json: "상봉-중랑", js: "상봉-중랑", typ: r("삭도_Value") },
        { json: "망우-상봉", js: "망우-상봉", typ: r("삭도_Value") },
        { json: "청량리-회기", js: "청량리-회기", typ: r("삭도_Value") },
    ], false),
    "Tentacled고속선": o([
        { json: "주식회사 SR", js: "주식회사 SR", typ: r("고속선_주식회사Sr") },
        { json: "한국철도공사", js: "한국철도공사", typ: r("Indecent한국철도공사") },
    ], false),
    "고속선_주식회사Sr": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "수서평택고속선", js: "수서평택고속선", typ: r("수서평택고속선") },
    ], false),
    "수서평택고속선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "S수서-S성남", js: "S수서-S성남", typ: r("강삭철도_Value") },
        { json: "S동탄-S용인", js: "S동탄-S용인", typ: r("강삭철도_Value") },
        { json: "S용인-S동탄", js: "S용인-S동탄", typ: r("강삭철도_Value") },
        { json: "S성남-S수서", js: "S성남-S수서", typ: r("삭도_Value") },
        { json: "S성남-S용인", js: "S성남-S용인", typ: r("삭도_Value") },
        { json: "S용인-S성남", js: "S용인-S성남", typ: r("강삭철도_Value") },
    ], false),
    "Indecent한국철도공사": o([
        { json: "경부고속선", js: "경부고속선", typ: r("Purple경부고속선") },
        { json: "호남고속선", js: "호남고속선", typ: r("강삭철도_Value") },
    ], false),
    "Purple경부고속선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "광명-시흥연", js: "광명-시흥연", typ: r("강삭철도_Value") },
        { json: "시흥연-광명", js: "시흥연-광명", typ: r("강삭철도_Value") },
        { json: "신경분-신경주", js: "신경분-신경주", typ: r("삭도_Value") },
        { json: "신경주-신경분", js: "신경주-신경분", typ: r("삭도_Value") },
        { json: "신경주-울산", js: "신경주-울산", typ: r("삭도_Value") },
        { json: "울산-신경주", js: "울산-신경주", typ: r("삭도_Value") },
    ], false),
    "국철_궤도선": o([
        { json: "한국철도기술연구원", js: "한국철도기술연구원", typ: r("강삭철도_Value") },
    ], false),
    "국철_기타": o([
        { json: "한국철도기술연구원", js: "한국철도기술연구원", typ: r("한국철도기술연구원") },
    ], false),
    "한국철도기술연구원": o([
        { json: "철도종합시험선로", js: "철도종합시험선로", typ: r("강삭철도_Value") },
    ], false),
    "국철_도시철도": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("Hilarious한국철도공사") },
    ], false),
    "Hilarious한국철도공사": o([
        { json: "안산선", js: "안산선", typ: r("강삭철도_Value") },
    ], false),
    "Purple버스": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("버스_한국철도공사") },
    ], false),
    "버스_한국철도공사": o([
        { json: "KTX 리무진 광명도심공항선", js: "KTX 리무진 광명도심공항선", typ: r("Ktx리무진광명도심공항선") },
    ], false),
    "Ktx리무진광명도심공항선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "공항T2-공항T2", js: "공항T2-공항T2", typ: r("삭도_Value") },
        { json: "공항T2-인천국", js: "공항T2-인천국", typ: r("삭도_Value") },
        { json: "인천국-공항T2", js: "인천국-공항T2", typ: r("삭도_Value") },
    ], false),
    "Tentacled전용선": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("Ambitious한국철도공사") },
    ], false),
    "Ambitious한국철도공사": o([
        { json: "호남선", js: "호남선", typ: r("Purple호남선") },
    ], false),
    "Purple호남선": o([
        { json: "와룡", js: "와룡", typ: r("삭도_Value") },
    ], false),
    "Fluffy준고속선": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("준고속선_한국철도공사") },
    ], false),
    "준고속선_한국철도공사": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "중앙선", js: "중앙선", typ: r("강삭철도_Value") },
        { json: "원주강릉선", js: "원주강릉선", typ: r("강삭철도_Value") },
        { json: "호남선", js: "호남선", typ: r("강삭철도_Value") },
        { json: "전라선", js: "전라선", typ: r("강삭철도_Value") },
        { json: "중부내륙선", js: "중부내륙선", typ: r("강삭철도_Value") },
        { json: "대구선", js: "대구선", typ: r("강삭철도_Value") },
    ], false),
    "Indecent지선": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("Cunning한국철도공사") },
        { json: "서해철도 주식회사", js: "서해철도 주식회사", typ: m(r("삭도_Value")) },
    ], false),
    "Cunning한국철도공사": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "구로삼각선", js: "구로삼각선", typ: r("삭도_Value") },
        { json: "월곶시흥선", js: "월곶시흥선", typ: r("강삭철도_Value") },
        { json: "시흥기지선", js: "시흥기지선", typ: r("삭도_Value") },
        { json: "안산입고선", js: "안산입고선", typ: r("삭도_Value") },
        { json: "서울교외선", js: "서울교외선", typ: r("서울교외선") },
        { json: "안산출고선", js: "안산출고선", typ: r("삭도_Value") },
        { json: "정선선", js: "정선선", typ: r("삭도_Value") },
        { json: "북평선", js: "북평선", typ: r("강삭철도_Value") },
        { json: "묵호항선", js: "묵호항선", typ: r("강삭철도_Value") },
        { json: "문경선", js: "문경선", typ: r("강삭철도_Value") },
        { json: "함백선", js: "함백선", typ: r("강삭철도_Value") },
        { json: "여천선", js: "여천선", typ: r("강삭철도_Value") },
        { json: "옥구선", js: "옥구선", typ: r("삭도_Value") },
        { json: "진해선", js: "진해선", typ: r("강삭철도_Value") },
        { json: "평내기지선", js: "평내기지선", typ: r("강삭철도_Value") },
        { json: "신광양항선", js: "신광양항선", typ: r("강삭철도_Value") },
        { json: "광양항선", js: "광양항선", typ: r("강삭철도_Value") },
        { json: "광양제철선", js: "광양제철선", typ: r("광양제철선") },
        { json: "사천선", js: "사천선", typ: r("강삭철도_Value") },
        { json: "군산항선", js: "군산항선", typ: r("강삭철도_Value") },
        { json: "강릉기지선", js: "강릉기지선", typ: r("삭도_Value") },
        { json: "제천조차장선", js: "제천조차장선", typ: r("제천조차장선") },
        { json: "용문기지선", js: "용문기지선", typ: r("강삭철도_Value") },
        { json: "우암선", js: "우암선", typ: r("강삭철도_Value") },
        { json: "부전선", js: "부전선", typ: r("강삭철도_Value") },
        { json: "가야선", js: "가야선", typ: r("강삭철도_Value") },
        { json: "온산선", js: "온산선", typ: r("강삭철도_Value") },
        { json: "울산신항선", js: "울산신항선", typ: r("강삭철도_Value") },
        { json: "울산기지선", js: "울산기지선", typ: r("강삭철도_Value") },
        { json: "울산항선", js: "울산항선", typ: r("강삭철도_Value") },
        { json: "괴동선", js: "괴동선", typ: r("강삭철도_Value") },
        { json: "삼척선", js: "삼척선", typ: r("강삭철도_Value") },
        { json: "영일만항선", js: "영일만항선", typ: r("강삭철도_Value") },
        { json: "건천연결선", js: "건천연결선", typ: r("강삭철도_Value") },
        { json: "용산삼각선", js: "용산삼각선", typ: r("삭도_Value") },
        { json: "구로기지선", js: "구로기지선", typ: r("강삭철도_Value") },
        { json: "남부화물기지선", js: "남부화물기지선", typ: r("강삭철도_Value") },
        { json: "병점기지선", js: "병점기지선", typ: r("강삭철도_Value") },
        { json: "천안직결선", js: "천안직결선", typ: r("Purple천안직결선") },
        { json: "양산화물선", js: "양산화물선", typ: r("강삭철도_Value") },
        { json: "대구북연결선", js: "대구북연결선", typ: r("강삭철도_Value") },
        { json: "평택삼각선", js: "평택삼각선", typ: r("삭도_Value") },
        { json: "부강화물선", js: "부강화물선", typ: r("강삭철도_Value") },
        { json: "신동화물선", js: "신동화물선", typ: r("강삭철도_Value") },
        { json: "부산신항 남선", js: "부산신항 남선", typ: r("강삭철도_Value") },
        { json: "부산신항 북선", js: "부산신항 북선", typ: r("강삭철도_Value") },
        { json: "부산신항선", js: "부산신항선", typ: r("강삭철도_Value") },
        { json: "수인선", js: "수인선", typ: r("Purple수인선") },
        { json: "분당기지선", js: "분당기지선", typ: r("강삭철도_Value") },
        { json: "익산삼각선", js: "익산삼각선", typ: r("삭도_Value") },
        { json: "대전선", js: "대전선", typ: r("삭도_Value") },
        { json: "강경선", js: "강경선", typ: r("강삭철도_Value") },
        { json: "안평화물선", js: "안평화물선", typ: r("강삭철도_Value") },
        { json: "대불선", js: "대불선", typ: r("강삭철도_Value") },
        { json: "전경삼각선", js: "전경삼각선", typ: r("삭도_Value") },
        { json: "북전주선", js: "북전주선", typ: r("강삭철도_Value") },
        { json: "덕산선", js: "덕산선", typ: r("강삭철도_Value") },
        { json: "미전선", js: "미전선", typ: r("강삭철도_Value") },
        { json: "부발기지선", js: "부발기지선", typ: r("강삭철도_Value") },
        { json: "광주기지선", js: "광주기지선", typ: r("삭도_Value") },
        { json: "망우선", js: "망우선", typ: r("삭도_Value") },
        { json: "평택선", js: "평택선", typ: r("강삭철도_Value") },
        { json: "광주선", js: "광주선", typ: r("강삭철도_Value") },
        { json: "북송정삼각선", js: "북송정삼각선", typ: r("삭도_Value") },
        { json: "용산선", js: "용산선", typ: r("강삭철도_Value") },
        { json: "수색객차출발선", js: "수색객차출발선", typ: r("강삭철도_Value") },
        { json: "수식직결선", js: "수식직결선", typ: r("강삭철도_Value") },
        { json: "고양기지선", js: "고양기지선", typ: r("강삭철도_Value") },
        { json: "문산기지선", js: "문산기지선", typ: r("강삭철도_Value") },
        { json: "성북기지선", js: "성북기지선", typ: r("삭도_Value") },
        { json: "이문기지선", js: "이문기지선", typ: r("강삭철도_Value") },
        { json: "광명기지선", js: "광명기지선", typ: m(r("삭도_Value")) },
        { json: "시흥연결선", js: "시흥연결선", typ: r("강삭철도_Value") },
        { json: "대전북연결선", js: "대전북연결선", typ: r("강삭철도_Value") },
        { json: "대전남연결선", js: "대전남연결선", typ: r("강삭철도_Value") },
        { json: "영동정비기지선", js: "영동정비기지선", typ: r("강삭철도_Value") },
        { json: "신동연결선", js: "신동연결선", typ: r("강삭철도_Value") },
        { json: "오송정비기지선", js: "오송정비기지선", typ: r("강삭철도_Value") },
        { json: "부산북연결선", js: "부산북연결선", typ: r("강삭철도_Value") },
        { json: "대구남연결선", js: "대구남연결선", typ: r("삭도_Value") },
        { json: "익산남연결선", js: "익산남연결선", typ: r("강삭철도_Value") },
        { json: "광주송정북연결선", js: "광주송정북연결선", typ: r("강삭철도_Value") },
        { json: "장생포선", js: "장생포선", typ: r("강삭철도_Value") },
        { json: "영천삼각선", js: "영천삼각선", typ: r("삭도_Value") },
        { json: "강릉삼각선", js: "강릉삼각선", typ: r("삭도_Value") },
        { json: "익산북연결선", js: "익산북연결선", typ: r("강삭철도_Value") },
        { json: "경부고속선", js: "경부고속선", typ: r("Fluffy경부고속선") },
    ], false),
    "Fluffy경부고속선": o([
        { json: "시흥연-광명", js: "시흥연-광명", typ: r("삭도_Value") },
    ], false),
    "광양제철선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "초남-황길", js: "초남-황길", typ: r("삭도_Value") },
        { json: "광양-초남", js: "광양-초남", typ: r("삭도_Value") },
    ], false),
    "서울교외선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "대곡-능곡", js: "대곡-능곡", typ: r("삭도_Value") },
    ], false),
    "Purple수인선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "중앙-한대앞", js: "중앙-한대앞", typ: r("삭도_Value") },
        { json: "한대앞-중앙", js: "한대앞-중앙", typ: r("삭도_Value") },
    ], false),
    "제천조차장선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "제천조-제천", js: "제천조-제천", typ: r("삭도_Value") },
    ], false),
    "Purple천안직결선": o([
        { json: "Placemark", js: "Placemark", typ: r("강삭철도_Placemark") },
        { json: "천안-두정", js: "천안-두정", typ: r("삭도_Value") },
        { json: "두정-천안", js: "두정-천안", typ: r("삭도_Value") },
    ], false),
    "Indecent궤도선": o([
        { json: "인천교통공사", js: "인천교통공사", typ: r("삭도_Value") },
        { json: "순천에코트랜스", js: "순천에코트랜스", typ: r("강삭철도_Value") },
        { json: "해운대블루라인 주식회사", js: "해운대블루라인 주식회사", typ: r("강삭철도_Value") },
    ], false),
    "영업_기타": o([
        { json: "공항철도", js: "공항철도", typ: r("Purple공항철도") },
        { json: "신분당선주식회사", js: "신분당선주식회사", typ: m(r("강삭철도_Value")) },
        { json: "경기철도주식회사", js: "경기철도주식회사", typ: r("경기철도주식회사") },
        { json: "새서울철도 주식회사", js: "새서울철도 주식회사", typ: r("새서울철도주식회사") },
        { json: "한국철도공사 철도관광사업법인 코레일관광개발", js: "한국철도공사 철도관광사업법인 코레일관광개발", typ: r("삭도_Value") },
        { json: "도계광업소", js: "도계광업소", typ: r("삭도_Value") },
    ], false),
    "경기철도주식회사": o([
        { json: "Placemark", js: "Placemark", typ: r("강삭철도_Placemark") },
        { json: "신분당선", js: "신분당선", typ: r("강삭철도_Value") },
    ], false),
    "Purple공항철도": o([
        { json: "수색직결선", js: "수색직결선", typ: r("강삭철도_Value") },
        { json: "인천국제공항철도", js: "인천국제공항철도", typ: r("인천국제공항철도") },
        { json: "용유차량삼각선", js: "용유차량삼각선", typ: r("강삭철도_Value") },
        { json: "용유차량기지선", js: "용유차량기지선", typ: r("강삭철도_Value") },
    ], false),
    "인천국제공항철도": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "계양-김포공", js: "계양-김포공", typ: r("삭도_Value") },
    ], false),
    "새서울철도주식회사": o([
        { json: "신분당선", js: "신분당선", typ: r("강삭철도_Value") },
    ], false),
    "Tentacled도시철도": o([
        { json: "인천교통공사", js: "인천교통공사", typ: r("Fluffy인천교통공사") },
        { json: "김포골드라인운영주식회사", js: "김포골드라인운영주식회사", typ: r("김포골드라인운영주식회사") },
        { json: "서울시메트로 9호선", js: "서울시메트로 9호선", typ: r("Fluffy서울시메트로9호선") },
        { json: "남서울경전철 주식회사", js: "남서울경전철 주식회사", typ: r("도시철도_남서울경전철주식회사") },
        { json: "서울교통공사", js: "서울교통공사", typ: r("도시철도_서울교통공사") },
        { json: "주식회사 우진메트로", js: "주식회사 우진메트로", typ: r("도시철도_주식회사우진메트로") },
        { json: "우이신설경전철 주식회사", js: "우이신설경전철 주식회사", typ: r("도시철도_우이신설경전철주식회사") },
        { json: "대전교통공사", js: "대전교통공사", typ: r("도시철도_대전교통공사") },
        { json: "대구도시철도공사", js: "대구도시철도공사", typ: r("Fluffy대구도시철도공사") },
        { json: "용인경량전철주식회사", js: "용인경량전철주식회사", typ: r("도시철도_용인경량전철주식회사") },
        { json: "한국철도공사", js: "한국철도공사", typ: r("Magenta한국철도공사") },
        { json: "부산교통공사", js: "부산교통공사", typ: r("Fluffy부산교통공사") },
        { json: "부산-김해경전철운영주식회사", js: "부산-김해경전철운영주식회사", typ: r("도시철도_부산김해경전철운영주식회사") },
        { json: "광주광역시도시철도공사", js: "광주광역시도시철도공사", typ: r("광주광역시도시철도공사") },
        { json: "에스지레일 주식회사", js: "에스지레일 주식회사", typ: r("강삭철도_Value") },
        { json: "하남도시공사", js: "하남도시공사", typ: r("도시철도_하남도시공사") },
    ], false),
    "광주광역시도시철도공사": o([
        { json: "Placemark", js: "Placemark", typ: r("강삭철도_Placemark") },
        { json: "광주 도시철도 1호선", js: "광주 도시철도 1호선", typ: r("강삭철도_Value") },
    ], false),
    "김포골드라인운영주식회사": o([
        { json: "김포골드라인", js: "김포골드라인", typ: r("강삭철도_Value") },
    ], false),
    "도시철도_남서울경전철주식회사": o([
        { json: "서울 경전철 신림선", js: "서울 경전철 신림선", typ: r("강삭철도_Value") },
    ], false),
    "Fluffy대구도시철도공사": o([
        { json: "대구 도시철도 3호선", js: "대구 도시철도 3호선", typ: r("강삭철도_Value") },
        { json: "대구 도시철도 1호선", js: "대구 도시철도 1호선", typ: r("강삭철도_Value") },
        { json: "대구 도시철도 2호선", js: "대구 도시철도 2호선", typ: r("대구도시철도2호선") },
    ], false),
    "대구도시철도2호선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "청라언덕-명덕", js: "청라언덕-명덕", typ: r("삭도_Value") },
        { json: "명덕-청라언덕", js: "명덕-청라언덕", typ: r("삭도_Value") },
    ], false),
    "도시철도_대전교통공사": o([
        { json: "Placemark", js: "Placemark", typ: r("강삭철도_Placemark") },
        { json: "대전 도시철도 1호선", js: "대전 도시철도 1호선", typ: r("강삭철도_Value") },
    ], false),
    "도시철도_부산김해경전철운영주식회사": o([
        { json: "부산김해경전철", js: "부산김해경전철", typ: r("강삭철도_Value") },
    ], false),
    "Fluffy부산교통공사": o([
        { json: "Placemark", js: "Placemark", typ: r("강삭철도_Placemark") },
        { json: "부산 도시철도 1호선", js: "부산 도시철도 1호선", typ: r("부산도시철도1호선") },
        { json: "부산 도시철도 2호선", js: "부산 도시철도 2호선", typ: r("강삭철도_Value") },
        { json: "부산 도시철도 3호선", js: "부산 도시철도 3호선", typ: r("강삭철도_Value") },
        { json: "부산 도시철도 4호선", js: "부산 도시철도 4호선", typ: r("강삭철도_Value") },
    ], false),
    "부산도시철도1호선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "부산진-부산진", js: "부산진-부산진", typ: r("삭도_Value") },
    ], false),
    "도시철도_서울교통공사": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "서울교통공사 1호선", js: "서울교통공사 1호선", typ: r("강삭철도_Value") },
        { json: "서울교통공사 6호선", js: "서울교통공사 6호선", typ: r("강삭철도_Value") },
        { json: "서울교통공사 5호선", js: "서울교통공사 5호선", typ: r("강삭철도_Value") },
        { json: "서울교통공사 5호선 강동삼각선", js: "서울교통공사 5호선 강동삼각선", typ: r("삭도_Value") },
        { json: "서울교통공사 5호선 마천지선", js: "서울교통공사 5호선 마천지선", typ: r("강삭철도_Value") },
        { json: "서울교통공사 2호선 신정지선", js: "서울교통공사 2호선 신정지선", typ: r("강삭철도_Value") },
        { json: "서울교통공사 2호선", js: "서울교통공사 2호선", typ: r("강삭철도_Value") },
        { json: "서울교통공사 2호선 성수지선", js: "서울교통공사 2호선 성수지선", typ: r("강삭철도_Value") },
        { json: "삼송지축선", js: "삼송지축선", typ: r("삭도_Value") },
        { json: "서울교통공사 7호선", js: "서울교통공사 7호선", typ: r("강삭철도_Value") },
        { json: "서울교통공사 4호선 창동기지선", js: "서울교통공사 4호선 창동기지선", typ: r("강삭철도_Value") },
        { json: "서울교통공사 4호선 노원창동선", js: "서울교통공사 4호선 노원창동선", typ: r("강삭철도_Value") },
        { json: "서울교통공사 4호선", js: "서울교통공사 4호선", typ: r("강삭철도_Value") },
        { json: "진접선", js: "진접선", typ: r("강삭철도_Value") },
        { json: "서울교통공사 3호선", js: "서울교통공사 3호선", typ: r("강삭철도_Value") },
        { json: "서울교통공사 3호선 수서기지선", js: "서울교통공사 3호선 수서기지선", typ: r("강삭철도_Value") },
        { json: "서울교통공사 3호선 수서삼각선", js: "서울교통공사 3호선 수서삼각선", typ: r("삭도_Value") },
        { json: "서울교통공사 8호선", js: "서울교통공사 8호선", typ: r("강삭철도_Value") },
        { json: "서울교통공사 3호선 지축기지선", js: "서울교통공사 3호선 지축기지선", typ: r("강삭철도_Value") },
        { json: "하남선", js: "하남선", typ: r("강삭철도_Value") },
    ], false),
    "Fluffy서울시메트로9호선": o([
        { json: "서울시메트로 9호선", js: "서울시메트로 9호선", typ: r("인천국제공항철도") },
    ], false),
    "도시철도_용인경량전철주식회사": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "용인경전철", js: "용인경전철", typ: r("강삭철도_Value") },
    ], false),
    "도시철도_우이신설경전철주식회사": o([
        { json: "서울 경전철 우이신설선", js: "서울 경전철 우이신설선", typ: r("강삭철도_Value") },
    ], false),
    "Fluffy인천교통공사": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "인천공항 자기부상철도", js: "인천공항 자기부상철도", typ: r("강삭철도_Value") },
        { json: "인천 도시철도 2호선", js: "인천 도시철도 2호선", typ: r("강삭철도_Value") },
        { json: "서울교통공사 7호선", js: "서울교통공사 7호선", typ: r("강삭철도_Value") },
        { json: "인천 도시철도 1호선", js: "인천 도시철도 1호선", typ: r("인천도시철도1호선") },
    ], false),
    "인천도시철도1호선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "송도달빛축제공원-1호선종점", js: "송도달빛축제공원-1호선종점", typ: r("삭도_Value") },
        { json: "계양-1호선종점", js: "계양-1호선종점", typ: r("삭도_Value") },
    ], false),
    "도시철도_주식회사우진메트로": o([
        { json: "Placemark", js: "Placemark", typ: r("강삭철도_Placemark") },
        { json: "의정부경전철", js: "의정부경전철", typ: r("강삭철도_Value") },
    ], false),
    "도시철도_하남도시공사": o([
        { json: "하남선", js: "하남선", typ: r("강삭철도_Value") },
    ], false),
    "Magenta한국철도공사": o([
        { json: "일산선", js: "일산선", typ: r("강삭철도_Value") },
        { json: "삼송지축선", js: "삼송지축선", typ: r("삭도_Value") },
        { json: "분당선", js: "분당선", typ: r("강삭철도_Value") },
        { json: "과천선", js: "과천선", typ: r("강삭철도_Value") },
    ], false),
    "영업_열차페리": o([
        { json: "기타", js: "기타", typ: m(r("삭도_Value")) },
    ], false),
    "Sticky전용선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "한국철도공사", js: "한국철도공사", typ: r("Frisky한국철도공사") },
        { json: "주식회사 강원랜드", js: "주식회사 강원랜드", typ: r("전용선_주식회사강원랜드") },
    ], false),
    "전용선_주식회사강원랜드": o([
        { json: "하이원추추파크 전용선", js: "하이원추추파크 전용선", typ: r("강삭철도_Value") },
    ], false),
    "Frisky한국철도공사": o([
        { json: "경인선", js: "경인선", typ: r("Purple경인선") },
        { json: "북평선", js: "북평선", typ: r("삭도_Value") },
        { json: "영동선", js: "영동선", typ: r("영동선") },
        { json: "진해선", js: "진해선", typ: r("Purple진해선") },
        { json: "삼척선", js: "삼척선", typ: r("삭도_Value") },
        { json: "북전주선", js: "북전주선", typ: r("Purple북전주선") },
        { json: "대구선", js: "대구선", typ: r("삭도_Value") },
        { json: "경부선", js: "경부선", typ: r("Fluffy경부선") },
        { json: "남부화물기지선", js: "남부화물기지선", typ: r("남부화물기지선") },
        { json: "박물관", js: "박물관", typ: r("강삭철도_Value") },
        { json: "수색객차출발선", js: "수색객차출발선", typ: r("수색객차출발선") },
        { json: "중앙선", js: "중앙선", typ: r("Fluffy중앙선") },
        { json: "문경선", js: "문경선", typ: r("문경선") },
        { json: "경북선", js: "경북선", typ: r("경북선") },
        { json: "태백선", js: "태백선", typ: r("태백선") },
        { json: "호남선", js: "호남선", typ: r("Fluffy호남선") },
        { json: "오송정비기지선", js: "오송정비기지선", typ: r("강삭철도_Value") },
        { json: "괴동선", js: "괴동선", typ: r("삭도_Value") },
        { json: "정선선", js: "정선선", typ: r("삭도_Value") },
        { json: "온산선", js: "온산선", typ: r("삭도_Value") },
    ], false),
    "Fluffy경부선": o([
        { json: "Placemark", js: "Placemark", typ: r("강삭철도_Placemark") },
        { json: "의왕", js: "의왕", typ: r("삭도_Value") },
        { json: "대전조", js: "대전조", typ: r("삭도_Value") },
    ], false),
    "경북선": o([
        { json: "옥산", js: "옥산", typ: r("강삭철도_Value") },
    ], false),
    "Purple경인선": o([
        { json: "Placemark", js: "Placemark", typ: r("강삭철도_Placemark") },
        { json: "인천", js: "인천", typ: r("강삭철도_Value") },
    ], false),
    "남부화물기지선": o([
        { json: "오봉", js: "오봉", typ: r("강삭철도_Value") },
    ], false),
    "문경선": o([
        { json: "주평", js: "주평", typ: r("강삭철도_Value") },
    ], false),
    "Purple북전주선": o([
        { json: "Placemark", js: "Placemark", typ: r("강삭철도_Placemark") },
        { json: "북전주", js: "북전주", typ: r("강삭철도_Value") },
    ], false),
    "수색객차출발선": o([
        { json: "수색", js: "수색", typ: r("강삭철도_Value") },
    ], false),
    "영동선": o([
        { json: "Placemark", js: "Placemark", typ: r("강삭철도_Placemark") },
        { json: "옥계", js: "옥계", typ: r("삭도_Value") },
        { json: "동백산", js: "동백산", typ: r("강삭철도_Value") },
    ], false),
    "Fluffy중앙선": o([
        { json: "팔당", js: "팔당", typ: r("삭도_Value") },
        { json: "도담", js: "도담", typ: r("강삭철도_Value") },
        { json: "삼곡", js: "삼곡", typ: r("삭도_Value") },
    ], false),
    "Purple진해선": o([
        { json: "진해", js: "진해", typ: r("강삭철도_Value") },
    ], false),
    "태백선": o([
        { json: "입석리", js: "입석리", typ: r("강삭철도_Value") },
        { json: "쌍룡", js: "쌍룡", typ: r("삭도_Value") },
    ], false),
    "Fluffy호남선": o([
        { json: "광주송", js: "광주송", typ: r("삭도_Value") },
        { json: "노령", js: "노령", typ: r("삭도_Value") },
    ], false),
    "Rok폐지": o([
        { json: "국철", js: "국철", typ: r("Sticky국철") },
        { json: "사철", js: "사철", typ: r("폐지_사철") },
        { json: "삭도", js: "삭도", typ: r("폐지_삭도") },
        { json: "공영교통", js: "공영교통", typ: r("Fluffy공영교통") },
        { json: "궤도선", js: "궤도선", typ: r("Ambitious궤도선") },
        { json: "전용선", js: "전용선", typ: r("Indecent전용선") },
        { json: "열차페리", js: "열차페리", typ: r("버스_Class") },
        { json: "도시철도", js: "도시철도", typ: r("Sticky도시철도") },
        { json: "기타", js: "기타", typ: r("폐지_기타") },
        { json: "지선", js: "지선", typ: r("Ambitious지선") },
    ], false),
    "Fluffy공영교통": o([
        { json: "궤도선", js: "궤도선", typ: r("Hilarious궤도선") },
    ], false),
    "Hilarious궤도선": o([
        { json: "서울특별시", js: "서울특별시", typ: r("강삭철도_Value") },
    ], false),
    "Sticky국철": o([
        { json: "지선", js: "지선", typ: r("Hilarious지선") },
        { json: "간선", js: "간선", typ: r("Indigo간선") },
        { json: "궤도선", js: "궤도선", typ: m(r("삭도_Value")) },
        { json: "전용선", js: "전용선", typ: r("Indigo전용선") },
        { json: "버스", js: "버스", typ: r("국철_Class") },
    ], false),
    "Indigo간선": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("Mischievous한국철도공사") },
        { json: "조선총독부 교통국", js: "조선총독부 교통국", typ: r("전용선_조선총독부교통국") },
        { json: "철도청", js: "철도청", typ: r("간선_철도청") },
    ], false),
    "간선_철도청": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "수려선", js: "수려선", typ: r("강삭철도_Value") },
    ], false),
    "Mischievous한국철도공사": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "영동선", js: "영동선", typ: r("강삭철도_Value") },
        { json: "태백선", js: "태백선", typ: r("강삭철도_Value") },
        { json: "경북선", js: "경북선", typ: r("삭도_Value") },
        { json: "충북선", js: "충북선", typ: r("충북선") },
        { json: "경춘선", js: "경춘선", typ: r("강삭철도_Value") },
        { json: "구 경춘선", js: "구 경춘선", typ: r("강삭철도_Value") },
        { json: "중앙선", js: "중앙선", typ: r("강삭철도_Value") },
        { json: "함백선", js: "함백선", typ: r("삭도_Value") },
        { json: "동해남부선", js: "동해남부선", typ: r("강삭철도_Value") },
        { json: "경부선", js: "경부선", typ: r("강삭철도_Value") },
        { json: "호남선", js: "호남선", typ: r("강삭철도_Value") },
        { json: "전라선", js: "전라선", typ: r("전라선") },
        { json: "장항선", js: "장항선", typ: r("강삭철도_Value") },
        { json: "경전선", js: "경전선", typ: r("강삭철도_Value") },
        { json: "경의선", js: "경의선", typ: r("강삭철도_Value") },
        { json: "경원선", js: "경원선", typ: r("강삭철도_Value") },
        { json: "경인선", js: "경인선", typ: r("삭도_Value") },
    ], false),
    "전라선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "죽림온", js: "죽림온", typ: r("삭도_Value") },
    ], false),
    "충북선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "청주", js: "청주", typ: r("강삭철도_Value") },
    ], false),
    "Indigo전용선": o([
        { json: "대한석탄공사", js: "대한석탄공사", typ: r("전용선_대한석탄공사") },
    ], false),
    "전용선_대한석탄공사": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "화순선", js: "화순선", typ: r("강삭철도_Value") },
    ], false),
    "Hilarious지선": o([
        { json: "철도청", js: "철도청", typ: r("지선_철도청") },
        { json: "한국철도공사", js: "한국철도공사", typ: r("Braggadocious한국철도공사") },
        { json: "대한석탄공사", js: "대한석탄공사", typ: r("삭도_Value") },
        { json: "한국중부발전", js: "한국중부발전", typ: r("한국중부발전") },
        { json: "조선총독부 교통국", js: "조선총독부 교통국", typ: r("삭도_Value") },
        { json: "교통부", js: "교통부", typ: r("삭도_Value") },
        { json: "조선총독부 철도국", js: "조선총독부 철도국", typ: r("삭도_Value") },
    ], false),
    "지선_철도청": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "우암선", js: "우암선", typ: r("삭도_Value") },
    ], false),
    "한국중부발전": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "서천화력선", js: "서천화력선", typ: r("삭도_Value") },
    ], false),
    "Braggadocious한국철도공사": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "여천선", js: "여천선", typ: r("삭도_Value") },
        { json: "옥구선", js: "옥구선", typ: r("삭도_Value") },
        { json: "진해선", js: "진해선", typ: r("강삭철도_Value") },
        { json: "광양제철선", js: "광양제철선", typ: r("삭도_Value") },
        { json: "사천선", js: "사천선", typ: r("삭도_Value") },
        { json: "제천조차장선", js: "제천조차장선", typ: r("삭도_Value") },
        { json: "가야선", js: "가야선", typ: r("삭도_Value") },
        { json: "부전선", js: "부전선", typ: r("삭도_Value") },
        { json: "울산항선", js: "울산항선", typ: r("강삭철도_Value") },
        { json: "장생포선", js: "장생포선", typ: r("강삭철도_Value") },
        { json: "금장삼각선", js: "금장삼각선", typ: r("강삭철도_Value") },
        { json: "천안직결선", js: "천안직결선", typ: r("Fluffy천안직결선") },
        { json: "수인선", js: "수인선", typ: r("강삭철도_Value") },
        { json: "장항선", js: "장항선", typ: r("강삭철도_Value") },
        { json: "군산화물선", js: "군산화물선", typ: r("강삭철도_Value") },
        { json: "장항화물선", js: "장항화물선", typ: r("강삭철도_Value") },
        { json: "남포선", js: "남포선", typ: r("강삭철도_Value") },
        { json: "덕산선", js: "덕산선", typ: r("강삭철도_Value") },
        { json: "경전선", js: "경전선", typ: r("강삭철도_Value") },
        { json: "광주선", js: "광주선", typ: r("삭도_Value") },
        { json: "수색객차출발선", js: "수색객차출발선", typ: r("강삭철도_Value") },
        { json: "서울교외선", js: "서울교외선", typ: r("강삭철도_Value") },
        { json: "망우선", js: "망우선", typ: r("삭도_Value") },
        { json: "대구선", js: "대구선", typ: r("삭도_Value") },
    ], false),
    "Fluffy천안직결선": o([
        { json: "두정-천안", js: "두정-천안", typ: r("삭도_Value") },
    ], false),
    "Ambitious궤도선": o([
        { json: "함평궤도주식회사", js: "함평궤도주식회사", typ: r("삭도_Value") },
        { json: "서울특별시", js: "서울특별시", typ: r("궤도선_서울특별시") },
        { json: "남선합동전기 주식회사", js: "남선합동전기 주식회사", typ: r("강삭철도_Value") },
        { json: "제주도순환궤도", js: "제주도순환궤도", typ: r("강삭철도_Value") },
    ], false),
    "궤도선_서울특별시": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "서울전차 의주로선", js: "서울전차 의주로선", typ: r("삭도_Value") },
        { json: "서울전차 창경원선", js: "서울전차 창경원선", typ: r("삭도_Value") },
    ], false),
    "폐지_기타": o([
        { json: "공항철도", js: "공항철도", typ: r("Fluffy공항철도") },
        { json: "국립중앙과학관", js: "국립중앙과학관", typ: r("강삭철도_Value") },
        { json: "도계광업소", js: "도계광업소", typ: r("삭도_Value") },
    ], false),
    "Fluffy공항철도": o([
        { json: "인천국제공항철도", js: "인천국제공항철도", typ: r("삭도_Value") },
    ], false),
    "Sticky도시철도": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("한국철도공사_1") },
        { json: "서울교통공사", js: "서울교통공사", typ: m(r("삭도_Value")) },
    ], false),
    "한국철도공사_1": o([
        { json: "분당선", js: "분당선", typ: r("삭도_Value") },
    ], false),
    "폐지_사철": o([
        { json: "경성전기주식회사", js: "경성전기주식회사", typ: r("강삭철도_Value") },
        { json: "조선철도주식회사", js: "조선철도주식회사", typ: r("삭도_Value") },
        { json: "궤도선", js: "궤도선", typ: m(r("삭도_Value")) },
        { json: "조선경남철도주식회사", js: "조선경남철도주식회사", typ: r("삭도_Value") },
        { json: "버스", js: "버스", typ: r("버스_Class") },
    ], false),
    "버스_Class": o([
        { json: "조선경남철도주식회사", js: "조선경남철도주식회사", typ: r("강삭철도_Value") },
    ], false),
    "폐지_삭도": o([
        { json: "Placemark", js: "Placemark", typ: r("강삭철도_Placemark") },
        { json: "조선전업주식회사", js: "조선전업주식회사", typ: r("삭도_Value") },
        { json: "송도해상케이블카", js: "송도해상케이블카", typ: r("삭도_Value") },
        { json: "보문산 케이블카", js: "보문산 케이블카", typ: r("삭도_Value") },
    ], false),
    "Indecent전용선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "한국철도공사", js: "한국철도공사", typ: r("한국철도공사_2") },
        { json: "도계광업소", js: "도계광업소", typ: r("삭도_Value") },
        { json: "주식회사 삼척탄좌개발", js: "주식회사 삼척탄좌개발", typ: r("삭도_Value") },
        { json: "서울특별시", js: "서울특별시", typ: r("전용선_서울특별시") },
        { json: "철도청", js: "철도청", typ: r("전용선_철도청") },
        { json: "궤도선", js: "궤도선", typ: r("Cunning궤도선") },
        { json: "조선총독부 철도국", js: "조선총독부 철도국", typ: r("삭도_Value") },
        { json: "북한 철도성", js: "북한 철도성", typ: r("Ambitious북한철도성") },
    ], false),
    "Cunning궤도선": o([
        { json: "조선총독부 철도국", js: "조선총독부 철도국", typ: r("삭도_Value") },
        { json: "북한 철도성", js: "북한 철도성", typ: r("Ambitious북한철도성") },
    ], false),
    "Ambitious북한철도성": o([
        { json: "평라선", js: "평라선", typ: r("삭도_Value") },
    ], false),
    "전용선_서울특별시": o([
        { json: "경성궤도 본선", js: "경성궤도 본선", typ: r("삭도_Value") },
    ], false),
    "전용선_철도청": o([
        { json: "문현선", js: "문현선", typ: r("삭도_Value") },
        { json: "동해남부선", js: "동해남부선", typ: r("강삭철도_Value") },
        { json: "경부선", js: "경부선", typ: r("삭도_Value") },
        { json: "전라선", js: "전라선", typ: r("삭도_Value") },
        { json: "동해북부선", js: "동해북부선", typ: r("삭도_Value") },
        { json: "안성선", js: "안성선", typ: r("삭도_Value") },
    ], false),
    "한국철도공사_2": o([
        { json: "경부선", js: "경부선", typ: r("Tentacled경부선") },
        { json: "수인선", js: "수인선", typ: r("Fluffy수인선") },
        { json: "경인선", js: "경인선", typ: r("Fluffy경인선") },
        { json: "영동선", js: "영동선", typ: r("강삭철도_Value") },
        { json: "묵호항선", js: "묵호항선", typ: r("삭도_Value") },
        { json: "경북선", js: "경북선", typ: r("강삭철도_Value") },
        { json: "충북선", js: "충북선", typ: r("강삭철도_Value") },
        { json: "진해선", js: "진해선", typ: r("Fluffy진해선") },
        { json: "여천선", js: "여천선", typ: r("삭도_Value") },
        { json: "중앙선", js: "중앙선", typ: r("Tentacled중앙선") },
        { json: "동해남부선", js: "동해남부선", typ: r("강삭철도_Value") },
        { json: "삼척선", js: "삼척선", typ: r("삭도_Value") },
        { json: "호남선", js: "호남선", typ: r("강삭철도_Value") },
        { json: "북전주선", js: "북전주선", typ: r("Fluffy북전주선") },
        { json: "군산화물선", js: "군산화물선", typ: r("강삭철도_Value") },
        { json: "장항화물선", js: "장항화물선", typ: r("강삭철도_Value") },
        { json: "경전선", js: "경전선", typ: r("강삭철도_Value") },
        { json: "덕산선", js: "덕산선", typ: r("삭도_Value") },
        { json: "광주선", js: "광주선", typ: r("강삭철도_Value") },
        { json: "경의선", js: "경의선", typ: r("삭도_Value") },
        { json: "서울교외선", js: "서울교외선", typ: r("강삭철도_Value") },
        { json: "경원선", js: "경원선", typ: r("강삭철도_Value") },
        { json: "구 대구선", js: "구 대구선", typ: r("삭도_Value") },
        { json: "대구선", js: "대구선", typ: r("강삭철도_Value") },
        { json: "전라선", js: "전라선", typ: r("강삭철도_Value") },
        { json: "장항선", js: "장항선", typ: r("강삭철도_Value") },
        { json: "경춘선", js: "경춘선", typ: r("강삭철도_Value") },
        { json: "동해북부선", js: "동해북부선", typ: r("삭도_Value") },
        { json: "구 경춘선", js: "구 경춘선", typ: r("삭도_Value") },
    ], false),
    "Tentacled경부선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "부산진", js: "부산진", typ: r("삭도_Value") },
    ], false),
    "Fluffy경인선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "인천", js: "인천", typ: r("강삭철도_Value") },
    ], false),
    "Fluffy북전주선": o([
        { json: "북전주", js: "북전주", typ: r("강삭철도_Value") },
    ], false),
    "Fluffy수인선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "학익", js: "학익", typ: r("강삭철도_Value") },
        { json: "소래", js: "소래", typ: r("강삭철도_Value") },
    ], false),
    "Tentacled중앙선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("강삭철도_Placemark")) },
        { json: "영천", js: "영천", typ: r("삭도_Value") },
    ], false),
    "Fluffy진해선": o([
        { json: "Placemark", js: "Placemark", typ: r("강삭철도_Placemark") },
        { json: "진해", js: "진해", typ: r("강삭철도_Value") },
    ], false),
    "Ambitious지선": o([
        { json: "궤도선", js: "궤도선", typ: r("국철_Class") },
    ], false),
    "DocumentPoint": o([
        { json: "영업시설", js: "영업시설", typ: r("영업시설") },
        { json: "건널목", js: "건널목", typ: r("건널목") },
        { json: "전기시설", js: "전기시설", typ: r("전기시설") },
    ], false),
    "건널목": o([
        { json: "영업중", js: "영업중", typ: r("건널목_영업중") },
        { json: "폐지", js: "폐지", typ: r("건널목_폐지") },
    ], false),
    "건널목_영업중": o([
        { json: "국유철도", js: "국유철도", typ: r("Purple국유철도") },
        { json: "주식회사 강원랜드", js: "주식회사 강원랜드", typ: r("영업중_주식회사강원랜드") },
    ], false),
    "Purple국유철도": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("한국철도공사_3") },
    ], false),
    "한국철도공사_3": o([
        { json: "대불선", js: "대불선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "경인선", js: "경인선", typ: r("동탄인덕원선") },
        { json: "군산항선", js: "군산항선", typ: r("동탄인덕원선") },
        { json: "울산신항선", js: "울산신항선", typ: r("동탄인덕원선") },
        { json: "대구선", js: "대구선", typ: r("동탄인덕원선") },
        { json: "대전선", js: "대전선", typ: r("동탄인덕원선") },
        { json: "옥구선", js: "옥구선", typ: r("동탄인덕원선") },
        { json: "북전주선", js: "북전주선", typ: r("동탄인덕원선") },
        { json: "중앙선", js: "중앙선", typ: r("동탄인덕원선") },
        { json: "태백선", js: "태백선", typ: r("동탄인덕원선") },
        { json: "영동선", js: "영동선", typ: r("동탄인덕원선") },
        { json: "용산삼각선", js: "용산삼각선", typ: r("동탄인덕원선") },
        { json: "우암선", js: "우암선", typ: r("동탄인덕원선") },
        { json: "울산항선", js: "울산항선", typ: r("동탄인덕원선") },
        { json: "대전철도차량정비단선", js: "대전철도차량정비단선", typ: r("동탄인덕원선") },
        { json: "진해선", js: "진해선", typ: r("동탄인덕원선") },
        { json: "장항선", js: "장항선", typ: r("동탄인덕원선") },
        { json: "군산화물선", js: "군산화물선", typ: r("동탄인덕원선") },
        { json: "경원선", js: "경원선", typ: r("동탄인덕원선") },
        { json: "경부선", js: "경부선", typ: r("동탄인덕원선") },
        { json: "경의선", js: "경의선", typ: r("동탄인덕원선") },
        { json: "서울교외선", js: "서울교외선", typ: r("동탄인덕원선") },
        { json: "호남선", js: "호남선", typ: r("동탄인덕원선") },
        { json: "덕산선", js: "덕산선", typ: r("동탄인덕원선") },
        { json: "경전선", js: "경전선", typ: r("동탄인덕원선") },
        { json: "광주선", js: "광주선", typ: r("동탄인덕원선") },
        { json: "북송정삼각선", js: "북송정삼각선", typ: r("동탄인덕원선") },
        { json: "오송선", js: "오송선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "충북선", js: "충북선", typ: r("동탄인덕원선") },
        { json: "구 경춘선", js: "구 경춘선", typ: r("동탄인덕원선") },
        { json: "동해선", js: "동해선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "함백선", js: "함백선", typ: r("동탄인덕원선") },
        { json: "북평선", js: "북평선", typ: r("동탄인덕원선") },
        { json: "삼척선", js: "삼척선", typ: r("동탄인덕원선") },
        { json: "정선선", js: "정선선", typ: r("동탄인덕원선") },
        { json: "경북선", js: "경북선", typ: r("동탄인덕원선") },
        { json: "문경선", js: "문경선", typ: r("동탄인덕원선") },
        { json: "장생포선", js: "장생포선", typ: r("동탄인덕원선") },
        { json: "괴동선", js: "괴동선", typ: r("동탄인덕원선") },
        { json: "강경선", js: "강경선", typ: r("동탄인덕원선") },
        { json: "온산선", js: "온산선", typ: r("동탄인덕원선") },
        { json: "사천선", js: "사천선", typ: r("동탄인덕원선") },
    ], false),
    "동탄인덕원선": o([
        { json: "Placemark", js: "Placemark", typ: a(r("PurplePlacemark")) },
    ], false),
    "PurplePlacemark": o([
        { json: "@id", js: "@id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "LookAt", js: "LookAt", typ: r("LookAt") },
        { json: "styleUrl", js: "styleUrl", typ: "" },
        { json: "Region", js: "Region", typ: u(undefined, r("Region")) },
        { json: "Point", js: "Point", typ: r("PlacemarkPoint") },
    ], false),
    "LookAt": o([
        { json: "longitude", js: "longitude", typ: "" },
        { json: "latitude", js: "latitude", typ: "" },
        { json: "altitude", js: "altitude", typ: "" },
        { json: "heading", js: "heading", typ: "" },
        { json: "tilt", js: "tilt", typ: "" },
        { json: "range", js: "range", typ: "" },
    ], false),
    "PlacemarkPoint": o([
        { json: "coordinates", js: "coordinates", typ: "" },
    ], false),
    "수도권광역급행철도_B노선기지선": o([
        { json: "Placemark", js: "Placemark", typ: r("PurplePlacemark") },
    ], false),
    "영업중_주식회사강원랜드": o([
        { json: "하이원추추파크 전용선", js: "하이원추추파크 전용선", typ: r("동탄인덕원선") },
    ], false),
    "건널목_폐지": o([
        { json: "국유철도", js: "국유철도", typ: r("Fluffy국유철도") },
        { json: "대한석탄공사", js: "대한석탄공사", typ: r("폐지_대한석탄공사") },
    ], false),
    "Fluffy국유철도": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("한국철도공사_4") },
    ], false),
    "한국철도공사_4": o([
        { json: "대전선", js: "대전선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "경부선", js: "경부선", typ: r("동탄인덕원선") },
        { json: "장항선", js: "장항선", typ: r("동탄인덕원선") },
        { json: "장항화물선", js: "장항화물선", typ: r("동탄인덕원선") },
        { json: "경원선", js: "경원선", typ: r("동탄인덕원선") },
        { json: "경의선", js: "경의선", typ: r("동탄인덕원선") },
        { json: "서울교외선", js: "서울교외선", typ: r("동탄인덕원선") },
        { json: "경인선", js: "경인선", typ: r("동탄인덕원선") },
        { json: "호남선", js: "호남선", typ: r("동탄인덕원선") },
        { json: "전라선", js: "전라선", typ: r("동탄인덕원선") },
        { json: "미전선", js: "미전선", typ: r("동탄인덕원선") },
        { json: "경전선", js: "경전선", typ: r("동탄인덕원선") },
        { json: "광주선", js: "광주선", typ: r("동탄인덕원선") },
        { json: "북송정삼각선", js: "북송정삼각선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "오송선", js: "오송선", typ: r("동탄인덕원선") },
        { json: "충북선", js: "충북선", typ: r("동탄인덕원선") },
        { json: "구 경춘선", js: "구 경춘선", typ: r("동탄인덕원선") },
        { json: "경춘선", js: "경춘선", typ: r("동탄인덕원선") },
        { json: "중앙선", js: "중앙선", typ: r("동탄인덕원선") },
        { json: "동해남부선", js: "동해남부선", typ: r("동탄인덕원선") },
        { json: "태백선", js: "태백선", typ: r("동탄인덕원선") },
        { json: "영동선", js: "영동선", typ: r("동탄인덕원선") },
        { json: "북평선", js: "북평선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "정선선", js: "정선선", typ: r("동탄인덕원선") },
        { json: "경북선", js: "경북선", typ: r("동탄인덕원선") },
        { json: "대구선", js: "대구선", typ: r("동탄인덕원선") },
        { json: "주인선", js: "주인선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "금장삼각선", js: "금장삼각선", typ: r("동탄인덕원선") },
        { json: "우암선", js: "우암선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "진해선", js: "진해선", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "폐지_대한석탄공사": o([
        { json: "화순선", js: "화순선", typ: r("동탄인덕원선") },
    ], false),
    "영업시설": o([
        { json: "영업중", js: "영업중", typ: r("영업시설_영업중") },
        { json: "폐지", js: "폐지", typ: r("영업시설_폐지") },
        { json: "개업예정", js: "개업예정", typ: r("개업예정") },
    ], false),
    "개업예정": o([
        { json: "공영교통", js: "공영교통", typ: r("개업예정_공영교통") },
        { json: "신분당선", js: "신분당선", typ: r("동탄인덕원선") },
        { json: "공항철도", js: "공항철도", typ: r("개업예정_공항철도") },
        { json: "지티엑스에이운영 주식회사", js: "지티엑스에이운영 주식회사", typ: m(r("동탄인덕원선")) },
        { json: "국유철도", js: "국유철도", typ: r("개업예정_국유철도") },
        { json: "수도권 광역급행철도 B노선", js: "수도권 광역급행철도 B노선", typ: r("동탄인덕원선") },
        { json: "수도권 광역급행철도 B노선 연결선", js: "수도권 광역급행철도 B노선 연결선", typ: r("동탄인덕원선") },
        { json: "수도권 광역급행철도 B노선 기지선", js: "수도권 광역급행철도 B노선 기지선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "수도권 광역급행철도 C노선", js: "수도권 광역급행철도 C노선", typ: r("동탄인덕원선") },
        { json: "수도권 광역급행철도 C노선 기지선", js: "수도권 광역급행철도 C노선 기지선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "신안산선", js: "신안산선", typ: r("동탄인덕원선") },
        { json: "별내선", js: "별내선", typ: r("동탄인덕원선") },
        { json: "남양주도시공사", js: "남양주도시공사", typ: r("개업예정_남양주도시공사") },
        { json: "신안산선 지선", js: "신안산선 지선", typ: r("동탄인덕원선") },
        { json: "서해철도 주식회사", js: "서해철도 주식회사", typ: r("개업예정_서해철도주식회사") },
        { json: "판교 랜드마크 트램", js: "판교 랜드마크 트램", typ: r("동탄인덕원선") },
        { json: "판교 랜드마크 트램 기지선", js: "판교 랜드마크 트램 기지선", typ: r("동탄인덕원선") },
        { json: "동탄인덕원선", js: "동탄인덕원선", typ: r("동탄인덕원선") },
        { json: "동탄인덕원선 지선", js: "동탄인덕원선 지선", typ: r("동탄인덕원선") },
        { json: "동북선도시철도주식회사", js: "동북선도시철도주식회사", typ: r("동북선도시철도주식회사") },
        { json: "주식회사 SR", js: "주식회사 SR", typ: r("개업예정_주식회사Sr") },
        { json: "서울 경전철 위례선", js: "서울 경전철 위례선", typ: r("동탄인덕원선") },
        { json: "서울 경전철 위례선 지선", js: "서울 경전철 위례선 지선", typ: r("동탄인덕원선") },
        { json: "강화석모해상케이블카 주식회사", js: "강화석모해상케이블카 주식회사", typ: r("강화석모해상케이블카주식회사") },
        { json: "포항영일만해양케이블카 주식회사", js: "포항영일만해양케이블카 주식회사", typ: r("포항영일만해양케이블카주식회사") },
        { json: "옥정포천선", js: "옥정포천선", typ: r("동탄인덕원선") },
        { json: "부산 도시철도 오륙도선", js: "부산 도시철도 오륙도선", typ: r("동탄인덕원선") },
        { json: "부산 도시철도 C-Bay Park선", js: "부산 도시철도 C-Bay Park선", typ: r("동탄인덕원선") },
        { json: "창원도시철도", js: "창원도시철도", typ: r("동탄인덕원선") },
    ], false),
    "강화석모해상케이블카주식회사": o([
        { json: "강화석모해상케이블카", js: "강화석모해상케이블카", typ: r("동탄인덕원선") },
    ], false),
    "개업예정_공영교통": o([
        { json: "인천교통공사", js: "인천교통공사", typ: r("공영교통_인천교통공사") },
        { json: "광주교통공사", js: "광주교통공사", typ: m(r("동탄인덕원선")) },
        { json: "서울교통공사", js: "서울교통공사", typ: r("Purple서울교통공사") },
        { json: "부산교통공사", js: "부산교통공사", typ: r("공영교통_부산교통공사") },
        { json: "대전교통공사", js: "대전교통공사", typ: r("Purple대전교통공사") },
    ], false),
    "Purple대전교통공사": o([
        { json: "대전 도시철도 1호선", js: "대전 도시철도 1호선", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "공영교통_부산교통공사": o([
        { json: "Placemark", js: "Placemark", typ: a(r("PurplePlacemark")) },
        { json: "부산 도시철도 사상하단선", js: "부산 도시철도 사상하단선", typ: r("동탄인덕원선") },
        { json: "부산 도시철도 사상하단선 기지선", js: "부산 도시철도 사상하단선 기지선", typ: r("동탄인덕원선") },
        { json: "부산 도시철도 2호선", js: "부산 도시철도 2호선", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "Purple서울교통공사": o([
        { json: "별내선", js: "별내선", typ: r("동탄인덕원선") },
        { json: "서울교통공사 8호선", js: "서울교통공사 8호선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "진접기지선", js: "진접기지선", typ: r("동탄인덕원선") },
        { json: "진접삼각선", js: "진접삼각선", typ: r("동탄인덕원선") },
        { json: "도봉산옥정선", js: "도봉산옥정선", typ: r("동탄인덕원선") },
        { json: "서울교통공사 7호선", js: "서울교통공사 7호선", typ: r("동탄인덕원선") },
        { json: "서울시메트로 9호선", js: "서울시메트로 9호선", typ: r("동탄인덕원선") },
        { json: "옥정포천선", js: "옥정포천선", typ: r("동탄인덕원선") },
    ], false),
    "공영교통_인천교통공사": o([
        { json: "인천 도시철도 1호선", js: "인천 도시철도 1호선", typ: r("동탄인덕원선") },
    ], false),
    "개업예정_공항철도": o([
        { json: "인천국제공항철도", js: "인천국제공항철도", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "개업예정_국유철도": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("한국철도공사_5") },
        { json: "대구도시철도공사", js: "대구도시철도공사", typ: r("국유철도_대구도시철도공사") },
    ], false),
    "국유철도_대구도시철도공사": o([
        { json: "대구 도시철도 1호선", js: "대구 도시철도 1호선", typ: r("동탄인덕원선") },
    ], false),
    "한국철도공사_5": o([
        { json: "Placemark", js: "Placemark", typ: r("PurplePlacemark") },
        { json: "경춘선", js: "경춘선", typ: r("동탄인덕원선") },
        { json: "중앙선", js: "중앙선", typ: r("동탄인덕원선") },
        { json: "동해북부선", js: "동해북부선", typ: r("동탄인덕원선") },
        { json: "동해선", js: "동해선", typ: r("동탄인덕원선") },
        { json: "부전마산선", js: "부전마산선", typ: r("동탄인덕원선") },
        { json: "부산신항선", js: "부산신항선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "경전선", js: "경전선", typ: r("동탄인덕원선") },
        { json: "서해선", js: "서해선", typ: r("동탄인덕원선") },
        { json: "경부선", js: "경부선", typ: r("동탄인덕원선") },
        { json: "중부내륙선", js: "중부내륙선", typ: r("동탄인덕원선") },
        { json: "월곶판교선", js: "월곶판교선", typ: r("동탄인덕원선") },
        { json: "여주원주선", js: "여주원주선", typ: r("동탄인덕원선") },
        { json: "충북선", js: "충북선", typ: r("동탄인덕원선") },
        { json: "호남고속선", js: "호남고속선", typ: r("동탄인덕원선") },
        { json: "경강선", js: "경강선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "화성고속연결선", js: "화성고속연결선", typ: r("동탄인덕원선") },
        { json: "경부고속선", js: "경부고속선", typ: r("동탄인덕원선") },
        { json: "평택고속연결선", js: "평택고속연결선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "보성목포선", js: "보성목포선", typ: r("동탄인덕원선") },
        { json: "춘천속초선", js: "춘천속초선", typ: r("동탄인덕원선") },
        { json: "평택선", js: "평택선", typ: r("동탄인덕원선") },
        { json: "수인선", js: "수인선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "경원선", js: "경원선", typ: r("동탄인덕원선") },
        { json: "호남선", js: "호남선", typ: r("동탄인덕원선") },
        { json: "장항선", js: "장항선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "과천선", js: "과천선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "경의선", js: "경의선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "소사원시선", js: "소사원시선", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "개업예정_남양주도시공사": o([
        { json: "별내선", js: "별내선", typ: r("동탄인덕원선") },
        { json: "진접선", js: "진접선", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "동북선도시철도주식회사": o([
        { json: "서울 경전철 동북선", js: "서울 경전철 동북선", typ: r("동탄인덕원선") },
    ], false),
    "개업예정_서해철도주식회사": o([
        { json: "신안산선 지선", js: "신안산선 지선", typ: r("동탄인덕원선") },
    ], false),
    "개업예정_주식회사Sr": o([
        { json: "평택고속연결선", js: "평택고속연결선", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "포항영일만해양케이블카주식회사": o([
        { json: "포항 영일만 해양 케이블카", js: "포항 영일만 해양 케이블카", typ: r("동탄인덕원선") },
    ], false),
    "영업시설_영업중": o([
        { json: "국유철도", js: "국유철도", typ: r("Tentacled국유철도") },
        { json: "주식회사 강원랜드", js: "주식회사 강원랜드", typ: m(r("동탄인덕원선")) },
        { json: "공영교통", js: "공영교통", typ: r("영업중_공영교통") },
        { json: "코레일관광개발 주식회사", js: "코레일관광개발 주식회사", typ: r("코레일관광개발주식회사") },
        { json: "서울시메트로9호선", js: "서울시메트로9호선", typ: r("서울시메트로9호선") },
        { json: "새서울철도 주식회사", js: "새서울철도 주식회사", typ: r("주식회사") },
        { json: "신분당선주식회사", js: "신분당선주식회사", typ: r("신분당선주식회사") },
        { json: "경기철도주식회사", js: "경기철도주식회사", typ: r("주식회사") },
        { json: "부산-김해경전철운영주식회사", js: "부산-김해경전철운영주식회사", typ: r("영업중_부산김해경전철운영주식회사") },
        { json: "코레일네트웍스 주식회사", js: "코레일네트웍스 주식회사", typ: r("코레일네트웍스주식회사") },
        { json: "공항철도", js: "공항철도", typ: r("영업중_공항철도") },
        { json: "용인경량전철주식회사", js: "용인경량전철주식회사", typ: r("영업중_용인경량전철주식회사") },
        { json: "주식회사 우진메트로", js: "주식회사 우진메트로", typ: r("영업중_주식회사우진메트로") },
        { json: "우이신설경전철 주식회사", js: "우이신설경전철 주식회사", typ: r("영업중_우이신설경전철주식회사") },
        { json: "주식회사 SR", js: "주식회사 SR", typ: r("영업중_주식회사Sr") },
        { json: "한국철도기술연구원", js: "한국철도기술연구원", typ: m(r("동탄인덕원선")) },
        { json: "서부광역철도 주식회사", js: "서부광역철도 주식회사", typ: r("영업중_서부광역철도주식회사") },
        { json: "서해철도 주식회사", js: "서해철도 주식회사", typ: m(r("수도권광역급행철도_B노선기지선")) },
        { json: "남서울경전철 주식회사", js: "남서울경전철 주식회사", typ: r("영업중_남서울경전철주식회사") },
        { json: "하남도시공사", js: "하남도시공사", typ: r("영업중_하남도시공사") },
        { json: "남양주도시공사", js: "남양주도시공사", typ: r("영업중_남양주도시공사") },
        { json: "김포골드라인운영주식회사", js: "김포골드라인운영주식회사", typ: m(r("동탄인덕원선")) },
        { json: "지티엑스에이운영 주식회사", js: "지티엑스에이운영 주식회사", typ: r("지티엑스에이운영주식회사") },
        { json: "교육부", js: "교육부", typ: r("교육부") },
        { json: "주식회사 파라다이스호텔 부산", js: "주식회사 파라다이스호텔 부산", typ: r("씨월드고속훼리주식회사") },
        { json: "주식회사 신세계조선호텔", js: "주식회사 신세계조선호텔", typ: r("씨월드고속훼리주식회사") },
        { json: "주식회사 온양관광호텔", js: "주식회사 온양관광호텔", typ: r("씨월드고속훼리주식회사") },
        { json: "해운대블루라인 주식회사", js: "해운대블루라인 주식회사", typ: m(r("동탄인덕원선")) },
        { json: "대한석탄공사", js: "대한석탄공사", typ: r("영업중_대한석탄공사") },
        { json: "호텔금오산 주식회사", js: "호텔금오산 주식회사", typ: r("호텔금오산주식회사") },
        { json: "한국삭도공업주식회사", js: "한국삭도공업주식회사", typ: r("한국삭도공업주식회사") },
        { json: "내장산개발 주식회사", js: "내장산개발 주식회사", typ: r("내장산개발주식회사") },
        { json: "양지대둔산삭도 유한회사", js: "양지대둔산삭도 유한회사", typ: r("양지대둔산삭도유한회사") },
        { json: "경상북도 울릉군", js: "경상북도 울릉군", typ: r("경상북도울릉군") },
        { json: "삼진관광개발 주식회사", js: "삼진관광개발 주식회사", typ: r("삼진관광개발주식회사") },
        { json: "사천바다케이블카 주식회사", js: "사천바다케이블카 주식회사", typ: r("사천바다케이블카주식회사") },
        { json: "한국방송공사", js: "한국방송공사", typ: r("한국방송공사") },
        { json: "목포해상케이블카 주식회사", js: "목포해상케이블카 주식회사", typ: r("목포해상케이블카주식회사") },
        { json: "강원도 삼척시", js: "강원도 삼척시", typ: r("강원도삼척시") },
        { json: "설악케이블카 주식회사", js: "설악케이블카 주식회사", typ: r("설악케이블카주식회사") },
        { json: "송도해상케이블카 주식회사", js: "송도해상케이블카 주식회사", typ: r("송도해상케이블카주식회사") },
        { json: "대덕개발 주식회사", js: "대덕개발 주식회사", typ: r("대덕개발주식회사") },
        { json: "여수해상케이블카 주식회사", js: "여수해상케이블카 주식회사", typ: r("여수해상케이블카주식회사") },
        { json: "영남알프스얼음골케이블카 주식회사", js: "영남알프스얼음골케이블카 주식회사", typ: r("영남알프스얼음골케이블카주식회사") },
        { json: "청풍호반케이블카 주식회사", js: "청풍호반케이블카 주식회사", typ: r("청풍호반케이블카주식회사") },
        { json: "통영관광개발공사", js: "통영관광개발공사", typ: r("통영관광개발공사") },
        { json: "한림팩 주식회사", js: "한림팩 주식회사", typ: r("한림팩주식회사") },
        { json: "부산시설공단", js: "부산시설공단", typ: r("부산시설공단") },
        { json: "명량해상케이블카", js: "명량해상케이블카", typ: r("동탄인덕원선") },
        { json: "제부도해상케이블카 주식회사", js: "제부도해상케이블카 주식회사", typ: r("제부도해상케이블카주식회사") },
        { json: "거제 케이블카 주식회사", js: "거제 케이블카 주식회사", typ: r("거제케이블카주식회사") },
        { json: "강원도 화천군", js: "강원도 화천군", typ: r("강원도화천군") },
        { json: "주식회사 소노인터네셔널", js: "주식회사 소노인터네셔널", typ: r("주식회사소노인터네셔널") },
        { json: "주식회사 에이치제이매그놀리아용평호텔앤리조트", js: "주식회사 에이치제이매그놀리아용평호텔앤리조트", typ: r("주식회사에이치제이매그놀리아용평호텔앤리조트") },
        { json: "재단법인 송암스페이스센터", js: "재단법인 송암스페이스센터", typ: r("재단법인송암스페이스센터") },
        { json: "주식회사 울진케이블카", js: "주식회사 울진케이블카", typ: r("주식회사울진케이블카") },
        { json: "하동케이블카 주식회사", js: "하동케이블카 주식회사", typ: r("하동케이블카주식회사") },
        { json: "순천에코트랜스", js: "순천에코트랜스", typ: r("순천에코트랜스") },
        { json: "JR 큐슈 고속선 주식회사", js: "JR 큐슈 고속선 주식회사", typ: r("Jr큐슈고속선주식회사") },
        { json: "간푸 페리 주식회사", js: "간푸 페리 주식회사", typ: r("간푸페리주식회사") },
        { json: "미래고속 주식회사", js: "미래고속 주식회사", typ: r("미래고속주식회사") },
        { json: "부관훼리 주식회사", js: "부관훼리 주식회사", typ: r("부관훼리주식회사") },
        { json: "태성해운 주식회사", js: "태성해운 주식회사", typ: r("씨월드고속훼리주식회사") },
        { json: "씨월드고속훼리 주식회사", js: "씨월드고속훼리 주식회사", typ: r("씨월드고속훼리주식회사") },
        { json: "내각 보안성 제23국 지하철도 운영관리국", js: "내각 보안성 제23국 지하철도 운영관리국", typ: r("영업중_내각보안성제23국지하철도운영관리국") },
        { json: "북한 철도성", js: "북한 철도성", typ: r("영업중_북한철도성") },
        { json: "평양시 려객운수종합기업소", js: "평양시 려객운수종합기업소", typ: r("영업중_평양시려객운수종합기업소") },
        { json: "교육기관", js: "교육기관", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "조선인민군", js: "조선인민군", typ: r("조선인민군") },
        { json: "함경북도 청진시", js: "함경북도 청진시", typ: r("함경북도청진시") },
        { json: "조선총독부 철도국", js: "조선총독부 철도국", typ: r("영업중_조선총독부철도국") },
        { json: "강원도 원산시", js: "강원도 원산시", typ: r("강원도원산시") },
        { json: "천지삭도", js: "천지삭도", typ: r("동탄인덕원선") },
        { json: "향도봉호", js: "향도봉호", typ: r("동탄인덕원선") },
    ], false),
    "Jr큐슈고속선주식회사": o([
        { json: "비틀", js: "비틀", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "간푸페리주식회사": o([
        { json: "간푸 페리", js: "간푸 페리", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "강원도삼척시": o([
        { json: "삼척해상케이블카", js: "삼척해상케이블카", typ: r("동탄인덕원선") },
    ], false),
    "강원도원산시": o([
        { json: "원산 궤도전차", js: "원산 궤도전차", typ: r("동탄인덕원선") },
    ], false),
    "강원도화천군": o([
        { json: "백암산 케이블카", js: "백암산 케이블카", typ: r("동탄인덕원선") },
    ], false),
    "거제케이블카주식회사": o([
        { json: "거제 파노라마 케이블카", js: "거제 파노라마 케이블카", typ: r("동탄인덕원선") },
    ], false),
    "주식회사": o([
        { json: "신분당선", js: "신분당선", typ: r("동탄인덕원선") },
    ], false),
    "경상북도울릉군": o([
        { json: "독도전망대 케이블카", js: "독도전망대 케이블카", typ: r("동탄인덕원선") },
    ], false),
    "영업중_공영교통": o([
        { json: "서울교통공사", js: "서울교통공사", typ: r("Fluffy서울교통공사") },
        { json: "인천교통공사", js: "인천교통공사", typ: m(r("동탄인덕원선")) },
        { json: "대전교통공사", js: "대전교통공사", typ: r("Fluffy대전교통공사") },
        { json: "광주교통공사", js: "광주교통공사", typ: r("광주교통공사") },
        { json: "부산교통공사", js: "부산교통공사", typ: m(r("동탄인덕원선")) },
    ], false),
    "광주교통공사": o([
        { json: "광주교통공사 1호선", js: "광주교통공사 1호선", typ: r("동탄인덕원선") },
    ], false),
    "Fluffy대전교통공사": o([
        { json: "대전 도시철도 1호선", js: "대전 도시철도 1호선", typ: r("동탄인덕원선") },
    ], false),
    "Fluffy서울교통공사": o([
        { json: "서울교통공사 3호선", js: "서울교통공사 3호선", typ: r("동탄인덕원선") },
        { json: "서울교통공사 5호선", js: "서울교통공사 5호선", typ: r("동탄인덕원선") },
        { json: "서울교통공사 5호선 마천지선", js: "서울교통공사 5호선 마천지선", typ: r("동탄인덕원선") },
        { json: "서울교통공사 6호선", js: "서울교통공사 6호선", typ: r("동탄인덕원선") },
        { json: "서울교통공사 7호선", js: "서울교통공사 7호선", typ: r("동탄인덕원선") },
        { json: "서울교통공사 8호선", js: "서울교통공사 8호선", typ: r("동탄인덕원선") },
        { json: "서울시메트로 9호선", js: "서울시메트로 9호선", typ: r("동탄인덕원선") },
        { json: "서울교통공사 2호선 성수지선", js: "서울교통공사 2호선 성수지선", typ: r("동탄인덕원선") },
        { json: "서울교통공사 2호선 신정지선", js: "서울교통공사 2호선 신정지선", typ: r("동탄인덕원선") },
        { json: "서울교통공사 3호선 지축기지선", js: "서울교통공사 3호선 지축기지선", typ: r("동탄인덕원선") },
        { json: "서울교통공사 3호선 수서기지선", js: "서울교통공사 3호선 수서기지선", typ: r("동탄인덕원선") },
        { json: "하남선", js: "하남선", typ: r("동탄인덕원선") },
        { json: "진접선", js: "진접선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "서울교통공사 4호선 창동기지선", js: "서울교통공사 4호선 창동기지선", typ: r("동탄인덕원선") },
        { json: "서울교통공사 4호선 노원창동선", js: "서울교통공사 4호선 노원창동선", typ: r("동탄인덕원선") },
        { json: "삼송지축선", js: "삼송지축선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "서울교통공사 3호선 수서삼각선", js: "서울교통공사 3호선 수서삼각선", typ: r("동탄인덕원선") },
        { json: "서울교통공사 5호선 강동삼각선", js: "서울교통공사 5호선 강동삼각선", typ: r("동탄인덕원선") },
        { json: "서울교통공사 1호선", js: "서울교통공사 1호선", typ: r("동탄인덕원선") },
        { json: "서울교통공사 2호선", js: "서울교통공사 2호선", typ: r("동탄인덕원선") },
        { json: "서울교통공사 4호선", js: "서울교통공사 4호선", typ: r("동탄인덕원선") },
        { json: "과천선", js: "과천선", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "영업중_공항철도": o([
        { json: "인천국제공항철도", js: "인천국제공항철도", typ: r("동탄인덕원선") },
        { json: "용유차량기지선", js: "용유차량기지선", typ: r("동탄인덕원선") },
        { json: "용유차량삼각선", js: "용유차량삼각선", typ: r("동탄인덕원선") },
        { json: "수색직결선", js: "수색직결선", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "교육부": o([
        { json: "교육기관", js: "교육기관", typ: r("동탄인덕원선") },
    ], false),
    "Tentacled국유철도": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("한국철도공사_6") },
        { json: "대구도시철도공사", js: "대구도시철도공사", typ: m(r("동탄인덕원선")) },
        { json: "철도청", js: "철도청", typ: r("Purple철도청") },
    ], false),
    "Purple철도청": o([
        { json: "북전주선", js: "북전주선", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "한국철도공사_6": o([
        { json: "가야선", js: "가야선", typ: r("동탄인덕원선") },
        { json: "강경선", js: "강경선", typ: r("동탄인덕원선") },
        { json: "경부고속선", js: "경부고속선", typ: r("동탄인덕원선") },
        { json: "경부선", js: "경부선", typ: r("동탄인덕원선") },
        { json: "장항선", js: "장항선", typ: r("동탄인덕원선") },
        { json: "경북선", js: "경북선", typ: r("동탄인덕원선") },
        { json: "경원선", js: "경원선", typ: r("동탄인덕원선") },
        { json: "경의선", js: "경의선", typ: r("동탄인덕원선") },
        { json: "경인선", js: "경인선", typ: r("동탄인덕원선") },
        { json: "경전선", js: "경전선", typ: r("동탄인덕원선") },
        { json: "경춘선", js: "경춘선", typ: r("동탄인덕원선") },
        { json: "광양제철선", js: "광양제철선", typ: r("동탄인덕원선") },
        { json: "괴동선", js: "괴동선", typ: r("동탄인덕원선") },
        { json: "군산화물선", js: "군산화물선", typ: r("동탄인덕원선") },
        { json: "대구선", js: "대구선", typ: r("동탄인덕원선") },
        { json: "대불선", js: "대불선", typ: r("동탄인덕원선") },
        { json: "동해선", js: "동해선", typ: r("동탄인덕원선") },
        { json: "문경선", js: "문경선", typ: r("동탄인덕원선") },
        { json: "부강화물선", js: "부강화물선", typ: r("동탄인덕원선") },
        { json: "부산신항선", js: "부산신항선", typ: r("동탄인덕원선") },
        { json: "부산신항 북선", js: "부산신항 북선", typ: r("동탄인덕원선") },
        { json: "부산신항 남선", js: "부산신항 남선", typ: r("동탄인덕원선") },
        { json: "분당선", js: "분당선", typ: r("동탄인덕원선") },
        { json: "삼척선", js: "삼척선", typ: r("동탄인덕원선") },
        { json: "서울교외선", js: "서울교외선", typ: r("동탄인덕원선") },
        { json: "수인선", js: "수인선", typ: r("동탄인덕원선") },
        { json: "신광양항선", js: "신광양항선", typ: r("동탄인덕원선") },
        { json: "신동화물선", js: "신동화물선", typ: r("동탄인덕원선") },
        { json: "안산선", js: "안산선", typ: r("동탄인덕원선") },
        { json: "영동선", js: "영동선", typ: r("동탄인덕원선") },
        { json: "옥구선", js: "옥구선", typ: r("동탄인덕원선") },
        { json: "우암선", js: "우암선", typ: r("동탄인덕원선") },
        { json: "일산선", js: "일산선", typ: r("동탄인덕원선") },
        { json: "전라선", js: "전라선", typ: r("동탄인덕원선") },
        { json: "정선선", js: "정선선", typ: r("동탄인덕원선") },
        { json: "중앙선", js: "중앙선", typ: r("동탄인덕원선") },
        { json: "진해선", js: "진해선", typ: r("동탄인덕원선") },
        { json: "충북선", js: "충북선", typ: r("동탄인덕원선") },
        { json: "태백선", js: "태백선", typ: r("동탄인덕원선") },
        { json: "호남선", js: "호남선", typ: r("동탄인덕원선") },
        { json: "사업소", js: "사업소", typ: r("동탄인덕원선") },
        { json: "과천선", js: "과천선", typ: r("동탄인덕원선") },
        { json: "KTX 리무진 광명도심공항선", js: "KTX 리무진 광명도심공항선", typ: r("동탄인덕원선") },
        { json: "용산선", js: "용산선", typ: r("동탄인덕원선") },
        { json: "광주선", js: "광주선", typ: r("동탄인덕원선") },
        { json: "광명주박기지선", js: "광명주박기지선", typ: r("동탄인덕원선") },
        { json: "병점기지선", js: "병점기지선", typ: r("동탄인덕원선") },
        { json: "남부화물기지선", js: "남부화물기지선", typ: r("동탄인덕원선") },
        { json: "구로삼각선", js: "구로삼각선", typ: r("동탄인덕원선") },
        { json: "천안직결선", js: "천안직결선", typ: r("동탄인덕원선") },
        { json: "오송선", js: "오송선", typ: r("동탄인덕원선") },
        { json: "오송정비기지선", js: "오송정비기지선", typ: r("동탄인덕원선") },
        { json: "대전선", js: "대전선", typ: r("동탄인덕원선") },
        { json: "영동정비기지선", js: "영동정비기지선", typ: r("동탄인덕원선") },
        { json: "미전선", js: "미전선", typ: r("동탄인덕원선") },
        { json: "양산화물선", js: "양산화물선", typ: r("동탄인덕원선") },
        { json: "부전선", js: "부전선", typ: r("동탄인덕원선") },
        { json: "온산선", js: "온산선", typ: r("동탄인덕원선") },
        { json: "장생포선", js: "장생포선", typ: r("동탄인덕원선") },
        { json: "울산항선", js: "울산항선", typ: r("동탄인덕원선") },
        { json: "북영주삼각선", js: "북영주삼각선", typ: r("동탄인덕원선") },
        { json: "북평선", js: "북평선", typ: r("동탄인덕원선") },
        { json: "묵호항선", js: "묵호항선", typ: r("동탄인덕원선") },
        { json: "망우선", js: "망우선", typ: r("동탄인덕원선") },
        { json: "고양기지선", js: "고양기지선", typ: r("동탄인덕원선") },
        { json: "수색객차출발선", js: "수색객차출발선", typ: r("동탄인덕원선") },
        { json: "문산기지선", js: "문산기지선", typ: r("동탄인덕원선") },
        { json: "장성화물선", js: "장성화물선", typ: r("동탄인덕원선") },
        { json: "북송정삼각선", js: "북송정삼각선", typ: r("동탄인덕원선") },
        { json: "전경삼각선", js: "전경삼각선", typ: r("동탄인덕원선") },
        { json: "덕산선", js: "덕산선", typ: r("동탄인덕원선") },
        { json: "구로기지선", js: "구로기지선", typ: r("동탄인덕원선") },
        { json: "경강선", js: "경강선", typ: r("동탄인덕원선") },
        { json: "부발기지선", js: "부발기지선", typ: r("동탄인덕원선") },
        { json: "소사원시선", js: "소사원시선", typ: r("동탄인덕원선") },
        { json: "영일만항선", js: "영일만항선", typ: r("동탄인덕원선") },
        { json: "평택선", js: "평택선", typ: r("동탄인덕원선") },
        { json: "여천선", js: "여천선", typ: r("동탄인덕원선") },
        { json: "함백선", js: "함백선", typ: r("동탄인덕원선") },
        { json: "사천선", js: "사천선", typ: r("동탄인덕원선") },
        { json: "시흥기지선", js: "시흥기지선", typ: r("동탄인덕원선") },
        { json: "월곶시흥선", js: "월곶시흥선", typ: r("동탄인덕원선") },
        { json: "분당기지선", js: "분당기지선", typ: r("동탄인덕원선") },
        { json: "용산삼각선", js: "용산삼각선", typ: r("동탄인덕원선") },
        { json: "평내기지선", js: "평내기지선", typ: r("동탄인덕원선") },
        { json: "제천조차장선", js: "제천조차장선", typ: r("동탄인덕원선") },
        { json: "영천삼각선", js: "영천삼각선", typ: r("동탄인덕원선") },
        { json: "용문기지선", js: "용문기지선", typ: r("동탄인덕원선") },
        { json: "태백삼각선", js: "태백삼각선", typ: r("동탄인덕원선") },
        { json: "울산기지선", js: "울산기지선", typ: r("동탄인덕원선") },
        { json: "울산신항선", js: "울산신항선", typ: r("동탄인덕원선") },
        { json: "원주강릉선", js: "원주강릉선", typ: r("동탄인덕원선") },
        { json: "동해북부선", js: "동해북부선", typ: r("동탄인덕원선") },
        { json: "안산입고선", js: "안산입고선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "중부내륙선", js: "중부내륙선", typ: r("동탄인덕원선") },
        { json: "익산삼각선", js: "익산삼각선", typ: r("동탄인덕원선") },
        { json: "강릉삼각선", js: "강릉삼각선", typ: r("동탄인덕원선") },
        { json: "박물관", js: "박물관", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "평택직결선", js: "평택직결선", typ: r("동탄인덕원선") },
        { json: "삼송지축선", js: "삼송지축선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "성북기지선", js: "성북기지선", typ: r("동탄인덕원선") },
        { json: "안산출고선", js: "안산출고선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "수색직결선", js: "수색직결선", typ: r("동탄인덕원선") },
        { json: "이문기지선", js: "이문기지선", typ: r("동탄인덕원선") },
        { json: "숙성기지선", js: "숙성기지선", typ: r("동탄인덕원선") },
        { json: "호남고속선", js: "호남고속선", typ: r("동탄인덕원선") },
        { json: "신동연결선", js: "신동연결선", typ: r("동탄인덕원선") },
        { json: "경주삼각선", js: "경주삼각선", typ: r("동탄인덕원선") },
        { json: "대전철도차량정비단선", js: "대전철도차량정비단선", typ: r("동탄인덕원선") },
        { json: "강릉기지선", js: "강릉기지선", typ: r("동탄인덕원선") },
        { json: "분당연결선", js: "분당연결선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "대전북연결선", js: "대전북연결선", typ: r("동탄인덕원선") },
        { json: "대전남연결선", js: "대전남연결선", typ: r("동탄인덕원선") },
        { json: "부산북연결선", js: "부산북연결선", typ: r("동탄인덕원선") },
        { json: "익산남연결선", js: "익산남연결선", typ: r("동탄인덕원선") },
        { json: "포항영덕 대행버스", js: "포항영덕 대행버스", typ: r("동탄인덕원선") },
        { json: "익산북연결선", js: "익산북연결선", typ: r("동탄인덕원선") },
        { json: "광주송정북연결선", js: "광주송정북연결선", typ: r("동탄인덕원선") },
        { json: "군산항선", js: "군산항선", typ: r("동탄인덕원선") },
        { json: "광주기지선", js: "광주기지선", typ: r("동탄인덕원선") },
        { json: "평택삼각선", js: "평택삼각선", typ: r("동탄인덕원선") },
        { json: "건천연결선", js: "건천연결선", typ: r("동탄인덕원선") },
        { json: "광양항선", js: "광양항선", typ: r("동탄인덕원선") },
        { json: "북전주선", js: "북전주선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "대구북연결선", js: "대구북연결선", typ: r("동탄인덕원선") },
        { json: "대구남연결선", js: "대구남연결선", typ: r("동탄인덕원선") },
        { json: "시흥연결선", js: "시흥연결선", typ: r("동탄인덕원선") },
    ], false),
    "영업중_남서울경전철주식회사": o([
        { json: "서울 경전철 신림선", js: "서울 경전철 신림선", typ: r("동탄인덕원선") },
    ], false),
    "영업중_남양주도시공사": o([
        { json: "진접선", js: "진접선", typ: r("동탄인덕원선") },
    ], false),
    "영업중_내각보안성제23국지하철도운영관리국": o([
        { json: "Placemark", js: "Placemark", typ: r("PurplePlacemark") },
        { json: "평양 지하철도 혁신선", js: "평양 지하철도 혁신선", typ: r("동탄인덕원선") },
        { json: "평양 지하철도 천리마선", js: "평양 지하철도 천리마선", typ: r("동탄인덕원선") },
        { json: "평양 지하철도 만경대선", js: "평양 지하철도 만경대선", typ: r("동탄인덕원선") },
        { json: "사업소", js: "사업소", typ: r("교육기관") },
        { json: "교육기관", js: "교육기관", typ: r("교육기관") },
        { json: "병원", js: "병원", typ: r("교육기관") },
    ], false),
    "내장산개발주식회사": o([
        { json: "내장산 케이블카", js: "내장산 케이블카", typ: r("동탄인덕원선") },
    ], false),
    "대덕개발주식회사": o([
        { json: "앞산 케이블카", js: "앞산 케이블카", typ: r("동탄인덕원선") },
    ], false),
    "영업중_대한석탄공사": o([
        { json: "도계광업소 강삭철도", js: "도계광업소 강삭철도", typ: r("동탄인덕원선") },
    ], false),
    "목포해상케이블카주식회사": o([
        { json: "목포해상케이블카", js: "목포해상케이블카", typ: r("동탄인덕원선") },
    ], false),
    "미래고속주식회사": o([
        { json: "코비", js: "코비", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "부관훼리주식회사": o([
        { json: "부관훼리", js: "부관훼리", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "영업중_부산김해경전철운영주식회사": o([
        { json: "부산김해경전철", js: "부산김해경전철", typ: r("동탄인덕원선") },
    ], false),
    "부산시설공단": o([
        { json: "금강공원 케이블카", js: "금강공원 케이블카", typ: r("동탄인덕원선") },
    ], false),
    "영업중_북한철도성": o([
        { json: "경원선", js: "경원선", typ: r("동탄인덕원선") },
        { json: "강원선", js: "강원선", typ: r("동탄인덕원선") },
        { json: "천내선", js: "천내선", typ: r("동탄인덕원선") },
        { json: "금강산청년선", js: "금강산청년선", typ: r("동탄인덕원선") },
        { json: "청년이천선", js: "청년이천선", typ: r("동탄인덕원선") },
        { json: "경의선", js: "경의선", typ: r("동탄인덕원선") },
        { json: "황해청년선", js: "황해청년선", typ: r("동탄인덕원선") },
        { json: "배천선", js: "배천선", typ: r("동탄인덕원선") },
        { json: "옹진선", js: "옹진선", typ: r("동탄인덕원선") },
        { json: "부포선", js: "부포선", typ: r("동탄인덕원선") },
        { json: "송림선", js: "송림선", typ: r("동탄인덕원선") },
        { json: "장연선", js: "장연선", typ: r("동탄인덕원선") },
        { json: "은률선", js: "은률선", typ: r("동탄인덕원선") },
        { json: "서해갑문선", js: "서해갑문선", typ: r("동탄인덕원선") },
        { json: "평남선", js: "평남선", typ: r("동탄인덕원선") },
        { json: "도지리선", js: "도지리선", typ: r("동탄인덕원선") },
        { json: "대안선", js: "대안선", typ: r("동탄인덕원선") },
        { json: "보산선", js: "보산선", typ: r("동탄인덕원선") },
        { json: "후산선", js: "후산선", typ: r("동탄인덕원선") },
        { json: "룡강선", js: "룡강선", typ: r("동탄인덕원선") },
        { json: "강안선", js: "강안선", typ: r("동탄인덕원선") },
        { json: "안주탄광선", js: "안주탄광선", typ: r("동탄인덕원선") },
        { json: "개천선", js: "개천선", typ: r("동탄인덕원선") },
        { json: "구봉산선", js: "구봉산선", typ: r("동탄인덕원선") },
        { json: "박천선", js: "박천선", typ: r("동탄인덕원선") },
        { json: "평북선", js: "평북선", typ: r("동탄인덕원선") },
        { json: "수풍선", js: "수풍선", typ: r("동탄인덕원선") },
        { json: "압록강선", js: "압록강선", typ: r("동탄인덕원선") },
        { json: "철산선", js: "철산선", typ: r("동탄인덕원선") },
        { json: "백마선", js: "백마선", typ: r("동탄인덕원선") },
        { json: "다사도선", js: "다사도선", typ: r("동탄인덕원선") },
        { json: "덕현선", js: "덕현선", typ: r("동탄인덕원선") },
        { json: "구성선", js: "구성선", typ: r("동탄인덕원선") },
        { json: "청년팔원선", js: "청년팔원선", typ: r("동탄인덕원선") },
        { json: "녕변선", js: "녕변선", typ: r("동탄인덕원선") },
        { json: "평덕선", js: "평덕선", typ: r("동탄인덕원선") },
        { json: "남흥선", js: "남흥선", typ: r("동탄인덕원선") },
        { json: "마평선", js: "마평선", typ: r("동탄인덕원선") },
        { json: "룡성선", js: "룡성선", typ: r("동탄인덕원선") },
        { json: "명당선", js: "명당선", typ: r("동탄인덕원선") },
        { json: "령대선", js: "령대선", typ: r("동탄인덕원선") },
        { json: "재동선", js: "재동선", typ: r("동탄인덕원선") },
        { json: "득장선", js: "득장선", typ: r("동탄인덕원선") },
        { json: "명학선", js: "명학선", typ: r("동탄인덕원선") },
        { json: "시정선", js: "시정선", typ: r("동탄인덕원선") },
        { json: "평라선", js: "평라선", typ: r("동탄인덕원선") },
        { json: "대건선", js: "대건선", typ: r("동탄인덕원선") },
        { json: "직동탄광선", js: "직동탄광선", typ: r("동탄인덕원선") },
        { json: "모학선", js: "모학선", typ: r("동탄인덕원선") },
        { json: "은산선", js: "은산선", typ: r("동탄인덕원선") },
        { json: "성산인입선", js: "성산인입선", typ: r("동탄인덕원선") },
        { json: "만포선", js: "만포선", typ: r("동탄인덕원선") },
        { json: "대각선", js: "대각선", typ: r("동탄인덕원선") },
        { json: "준혁선", js: "준혁선", typ: r("동탄인덕원선") },
        { json: "조양탄광선", js: "조양탄광선", typ: r("동탄인덕원선") },
        { json: "개천탄광선", js: "개천탄광선", typ: r("동탄인덕원선") },
        { json: "룡암선", js: "룡암선", typ: r("동탄인덕원선") },
        { json: "룡문탄광선", js: "룡문탄광선", typ: r("동탄인덕원선") },
        { json: "강계선", js: "강계선", typ: r("동탄인덕원선") },
        { json: "고원탄광선", js: "고원탄광선", typ: r("동탄인덕원선") },
        { json: "천성탄광선", js: "천성탄광선", typ: r("동탄인덕원선") },
        { json: "금야선", js: "금야선", typ: r("동탄인덕원선") },
        { json: "신흥선", js: "신흥선", typ: r("동탄인덕원선") },
        { json: "장진선", js: "장진선", typ: r("동탄인덕원선") },
        { json: "서호선", js: "서호선", typ: r("동탄인덕원선") },
        { json: "창흥선", js: "창흥선", typ: r("동탄인덕원선") },
        { json: "덕성선", js: "덕성선", typ: r("동탄인덕원선") },
        { json: "리원선", js: "리원선", typ: r("동탄인덕원선") },
        { json: "두언선", js: "두언선", typ: r("동탄인덕원선") },
        { json: "허천선", js: "허천선", typ: r("동탄인덕원선") },
        { json: "만덕선", js: "만덕선", typ: r("동탄인덕원선") },
        { json: "금골선", js: "금골선", typ: r("동탄인덕원선") },
        { json: "일탄선", js: "일탄선", typ: r("동탄인덕원선") },
        { json: "청진조차장선", js: "청진조차장선", typ: r("동탄인덕원선") },
        { json: "강덕선", js: "강덕선", typ: r("동탄인덕원선") },
        { json: "청진항선", js: "청진항선", typ: r("동탄인덕원선") },
        { json: "라진항선", js: "라진항선", typ: r("동탄인덕원선") },
        { json: "백두산청년선", js: "백두산청년선", typ: r("동탄인덕원선") },
        { json: "회령탄광선", js: "회령탄광선", typ: r("동탄인덕원선") },
        { json: "함북선", js: "함북선", typ: r("동탄인덕원선") },
        { json: "세천선", js: "세천선", typ: r("동탄인덕원선") },
        { json: "동포선", js: "동포선", typ: r("동탄인덕원선") },
        { json: "남양국경선", js: "남양국경선", typ: r("동탄인덕원선") },
        { json: "고건원선", js: "고건원선", typ: r("동탄인덕원선") },
        { json: "회암선", js: "회암선", typ: r("동탄인덕원선") },
        { json: "춘두선", js: "춘두선", typ: r("동탄인덕원선") },
        { json: "적지선", js: "적지선", typ: r("동탄인덕원선") },
        { json: "두만강선", js: "두만강선", typ: r("동탄인덕원선") },
        { json: "승리선", js: "승리선", typ: r("동탄인덕원선") },
        { json: "백무선", js: "백무선", typ: r("동탄인덕원선") },
        { json: "무산선", js: "무산선", typ: r("동탄인덕원선") },
        { json: "운봉선", js: "운봉선", typ: r("동탄인덕원선") },
        { json: "북부내륙선", js: "북부내륙선", typ: r("동탄인덕원선") },
        { json: "삼지연선", js: "삼지연선", typ: r("동탄인덕원선") },
        { json: "고참탄광선", js: "고참탄광선", typ: r("동탄인덕원선") },
        { json: "대향선", js: "대향선", typ: r("동탄인덕원선") },
        { json: "문천항선", js: "문천항선", typ: r("동탄인덕원선") },
        { json: "송도원선", js: "송도원선", typ: r("동탄인덕원선") },
        { json: "원산항선", js: "원산항선", typ: r("동탄인덕원선") },
        { json: "봉천탄광선", js: "봉천탄광선", typ: r("동탄인덕원선") },
        { json: "운하선", js: "운하선", typ: r("동탄인덕원선") },
        { json: "평양화전선", js: "평양화전선", typ: r("동탄인덕원선") },
        { json: "솔골탄광선", js: "솔골탄광선", typ: r("동탄인덕원선") },
        { json: "관하선", js: "관하선", typ: r("동탄인덕원선") },
        { json: "잉포선", js: "잉포선", typ: r("동탄인덕원선") },
        { json: "덕남선", js: "덕남선", typ: r("동탄인덕원선") },
        { json: "장상선", js: "장상선", typ: r("동탄인덕원선") },
        { json: "봉산선", js: "봉산선", typ: r("동탄인덕원선") },
        { json: "안골선", js: "안골선", typ: r("동탄인덕원선") },
        { json: "신성선", js: "신성선", typ: r("동탄인덕원선") },
        { json: "서창선", js: "서창선", typ: r("동탄인덕원선") },
        { json: "회둔선", js: "회둔선", typ: r("동탄인덕원선") },
        { json: "형봉선", js: "형봉선", typ: r("동탄인덕원선") },
        { json: "대관리선", js: "대관리선", typ: r("동탄인덕원선") },
        { json: "석하선", js: "석하선", typ: r("동탄인덕원선") },
        { json: "정도선", js: "정도선", typ: r("동탄인덕원선") },
        { json: "사업소", js: "사업소", typ: r("동탄인덕원선") },
        { json: "남포지선", js: "남포지선", typ: r("동탄인덕원선") },
        { json: "비날론선", js: "비날론선", typ: r("동탄인덕원선") },
        { json: "무산광산선", js: "무산광산선", typ: r("동탄인덕원선") },
        { json: "오시천선", js: "오시천선", typ: r("동탄인덕원선") },
        { json: "락랑선", js: "락랑선", typ: r("동탄인덕원선") },
        { json: "청화력선", js: "청화력선", typ: r("동탄인덕원선") },
        { json: "고비선", js: "고비선", typ: r("동탄인덕원선") },
        { json: "독골선", js: "독골선", typ: r("동탄인덕원선") },
        { json: "화풍선", js: "화풍선", typ: r("동탄인덕원선") },
        { json: "삼천포지선", js: "삼천포지선", typ: r("동탄인덕원선") },
        { json: "동해북부선", js: "동해북부선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "온포선", js: "온포선", typ: r("동탄인덕원선") },
        { json: "송평선", js: "송평선", typ: r("동탄인덕원선") },
        { json: "박물관", js: "박물관", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "병원", js: "병원", typ: r("교육기관") },
        { json: "향산선", js: "향산선", typ: r("동탄인덕원선") },
        { json: "추평선", js: "추평선", typ: r("동탄인덕원선") },
        { json: "곡하선", js: "곡하선", typ: r("동탄인덕원선") },
        { json: "봉화선", js: "봉화선", typ: r("동탄인덕원선") },
        { json: "진흥선", js: "진흥선", typ: r("동탄인덕원선") },
        { json: "산음선", js: "산음선", typ: r("동탄인덕원선") },
        { json: "보통강삼각선", js: "보통강삼각선", typ: r("동탄인덕원선") },
        { json: "남포항선", js: "남포항선", typ: r("동탄인덕원선") },
        { json: "털섬항선", js: "털섬항선", typ: r("동탄인덕원선") },
        { json: "원산화물선", js: "원산화물선", typ: r("동탄인덕원선") },
        { json: "신송도원선", js: "신송도원선", typ: r("동탄인덕원선") },
        { json: "량진선", js: "량진선", typ: r("동탄인덕원선") },
        { json: "황주삼각선", js: "황주삼각선", typ: r("동탄인덕원선") },
        { json: "봉학선", js: "봉학선", typ: r("동탄인덕원선") },
        { json: "장선강선", js: "장선강선", typ: r("동탄인덕원선") },
        { json: "봉창선", js: "봉창선", typ: r("동탄인덕원선") },
        { json: "동평양삼각선", js: "동평양삼각선", typ: r("동탄인덕원선") },
        { json: "북창삼각선", js: "북창삼각선", typ: r("동탄인덕원선") },
        { json: "향원삼각선", js: "향원삼각선", typ: r("동탄인덕원선") },
        { json: "향원선", js: "향원선", typ: r("동탄인덕원선") },
        { json: "고원교외선", js: "고원교외선", typ: r("동탄인덕원선") },
        { json: "흥남항선", js: "흥남항선", typ: r("동탄인덕원선") },
        { json: "송평부두선", js: "송평부두선", typ: r("동탄인덕원선") },
        { json: "풍덕선", js: "풍덕선", typ: r("동탄인덕원선") },
        { json: "대택선", js: "대택선", typ: r("동탄인덕원선") },
        { json: "바라놉스키-하산 선", js: "바라놉스키-하산 선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "펑상 철로", js: "펑상 철로", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "선단 철로", js: "선단 철로", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "창투 철로", js: "창투 철로", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "려호선", js: "려호선", typ: r("동탄인덕원선") },
        { json: "신흥동선", js: "신흥동선", typ: r("동탄인덕원선") },
        { json: "신온선", js: "신온선", typ: r("동탄인덕원선") },
    ], false),
    "사천바다케이블카주식회사": o([
        { json: "사천바다케이블카", js: "사천바다케이블카", typ: r("동탄인덕원선") },
    ], false),
    "삼진관광개발주식회사": o([
        { json: "두륜산 케이블카", js: "두륜산 케이블카", typ: r("동탄인덕원선") },
    ], false),
    "영업중_서부광역철도주식회사": o([
        { json: "소사대곡선", js: "소사대곡선", typ: r("동탄인덕원선") },
    ], false),
    "서울시메트로9호선": o([
        { json: "서울시메트로 9호선", js: "서울시메트로 9호선", typ: r("동탄인덕원선") },
    ], false),
    "설악케이블카주식회사": o([
        { json: "설악 케이블카", js: "설악 케이블카", typ: r("동탄인덕원선") },
    ], false),
    "송도해상케이블카주식회사": o([
        { json: "송도해상케이블카", js: "송도해상케이블카", typ: r("동탄인덕원선") },
    ], false),
    "순천에코트랜스": o([
        { json: "순천만PRT", js: "순천만PRT", typ: r("동탄인덕원선") },
    ], false),
    "신분당선주식회사": o([
        { json: "신분당선", js: "신분당선", typ: r("동탄인덕원선") },
        { json: "분당연결선", js: "분당연결선", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "씨월드고속훼리주식회사": o([
        { json: "사업소", js: "사업소", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "양지대둔산삭도유한회사": o([
        { json: "대둔산 케이블카", js: "대둔산 케이블카", typ: r("동탄인덕원선") },
    ], false),
    "여수해상케이블카주식회사": o([
        { json: "여수해상케이블카", js: "여수해상케이블카", typ: r("동탄인덕원선") },
    ], false),
    "영남알프스얼음골케이블카주식회사": o([
        { json: "영남알프스 얼음골 케이블카", js: "영남알프스 얼음골 케이블카", typ: r("동탄인덕원선") },
    ], false),
    "영업중_용인경량전철주식회사": o([
        { json: "용인경전철", js: "용인경전철", typ: r("동탄인덕원선") },
    ], false),
    "영업중_우이신설경전철주식회사": o([
        { json: "서울 경전철 우이신설선", js: "서울 경전철 우이신설선", typ: r("동탄인덕원선") },
    ], false),
    "재단법인송암스페이스센터": o([
        { json: "송암 스페이스센터 케이블카", js: "송암 스페이스센터 케이블카", typ: r("동탄인덕원선") },
    ], false),
    "제부도해상케이블카주식회사": o([
        { json: "제부도 해상케이블카", js: "제부도 해상케이블카", typ: r("동탄인덕원선") },
    ], false),
    "조선인민군": o([
        { json: "평양 궤도전차 금수산선", js: "평양 궤도전차 금수산선", typ: r("동탄인덕원선") },
    ], false),
    "영업중_조선총독부철도국": o([
        { json: "룡암선", js: "룡암선", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "영업중_주식회사Sr": o([
        { json: "수서평택고속선", js: "수서평택고속선", typ: r("동탄인덕원선") },
        { json: "수도권 광역급행철도 A노선", js: "수도권 광역급행철도 A노선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "사업소", js: "사업소", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "주식회사소노인터네셔널": o([
        { json: "춘천 삼악산 호수 케이블카", js: "춘천 삼악산 호수 케이블카", typ: r("동탄인덕원선") },
    ], false),
    "주식회사에이치제이매그놀리아용평호텔앤리조트": o([
        { json: "발왕산 관광케이블카", js: "발왕산 관광케이블카", typ: r("동탄인덕원선") },
    ], false),
    "영업중_주식회사우진메트로": o([
        { json: "의정부경전철", js: "의정부경전철", typ: r("동탄인덕원선") },
    ], false),
    "주식회사울진케이블카": o([
        { json: "왕피천 케이블카", js: "왕피천 케이블카", typ: r("동탄인덕원선") },
    ], false),
    "지티엑스에이운영주식회사": o([
        { json: "수도권 광역급행철도 A노선", js: "수도권 광역급행철도 A노선", typ: r("동탄인덕원선") },
    ], false),
    "청풍호반케이블카주식회사": o([
        { json: "청풍호반케이블카", js: "청풍호반케이블카", typ: r("동탄인덕원선") },
    ], false),
    "코레일관광개발주식회사": o([
        { json: "섬진강 기차마을 관광철도", js: "섬진강 기차마을 관광철도", typ: r("동탄인덕원선") },
    ], false),
    "코레일네트웍스주식회사": o([
        { json: "KTX 셔틀버스 광명 사당선", js: "KTX 셔틀버스 광명 사당선", typ: r("동탄인덕원선") },
    ], false),
    "통영관광개발공사": o([
        { json: "통영 케이블카", js: "통영 케이블카", typ: r("동탄인덕원선") },
    ], false),
    "영업중_평양시려객운수종합기업소": o([
        { json: "평양 궤도전차 1호선", js: "평양 궤도전차 1호선", typ: r("동탄인덕원선") },
        { json: "평양 궤도전차 3호선", js: "평양 궤도전차 3호선", typ: r("동탄인덕원선") },
        { json: "평양 궤도전차 2호선", js: "평양 궤도전차 2호선", typ: r("동탄인덕원선") },
        { json: "사업소", js: "사업소", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "영업중_하남도시공사": o([
        { json: "하남선", js: "하남선", typ: r("동탄인덕원선") },
    ], false),
    "하동케이블카주식회사": o([
        { json: "하동 플라이웨이 케이블카", js: "하동 플라이웨이 케이블카", typ: r("동탄인덕원선") },
    ], false),
    "한국방송공사": o([
        { json: "관악산 케이블카", js: "관악산 케이블카", typ: r("동탄인덕원선") },
    ], false),
    "한국삭도공업주식회사": o([
        { json: "남산 케이블카", js: "남산 케이블카", typ: r("동탄인덕원선") },
    ], false),
    "한림팩주식회사": o([
        { json: "대구 팔공산 케이블카", js: "대구 팔공산 케이블카", typ: r("동탄인덕원선") },
    ], false),
    "함경북도청진시": o([
        { json: "청진 궤도전차", js: "청진 궤도전차", typ: r("동탄인덕원선") },
    ], false),
    "호텔금오산주식회사": o([
        { json: "금오산 케이블카", js: "금오산 케이블카", typ: r("동탄인덕원선") },
    ], false),
    "영업시설_폐지": o([
        { json: "국유철도", js: "국유철도", typ: r("Sticky국유철도") },
        { json: "교통부", js: "교통부", typ: r("교통부") },
        { json: "한국중부발전주식회사", js: "한국중부발전주식회사", typ: r("한국중부발전주식회사") },
        { json: "주식회사 강원랜드", js: "주식회사 강원랜드", typ: r("폐지_주식회사강원랜드") },
        { json: "조선총독부 철도국", js: "조선총독부 철도국", typ: r("폐지_조선총독부철도국") },
        { json: "북한 철도성", js: "북한 철도성", typ: r("폐지_북한철도성") },
        { json: "경성전기주식회사", js: "경성전기주식회사", typ: r("Purple경성전기주식회사") },
        { json: "조선총독부 교통국", js: "조선총독부 교통국", typ: r("폐지_조선총독부교통국") },
        { json: "함평궤도주식회사", js: "함평궤도주식회사", typ: r("함평궤도주식회사") },
        { json: "조선경남철도주식회사", js: "조선경남철도주식회사", typ: r("조선경남철도주식회사") },
        { json: "조선철도주식회사", js: "조선철도주식회사", typ: r("폐지_조선철도주식회사") },
        { json: "제주도순환궤도", js: "제주도순환궤도", typ: r("제주도순환궤도") },
        { json: "국립중앙과학관", js: "국립중앙과학관", typ: r("국립중앙과학관") },
        { json: "주식회사 포스코", js: "주식회사 포스코", typ: r("주식회사포스코") },
        { json: "가와사키 기선 주식회사", js: "가와사키 기선 주식회사", typ: r("가와사키기선주식회사") },
        { json: "김제궤도 주식회사", js: "김제궤도 주식회사", typ: r("김제궤도주식회사") },
        { json: "왜관궤도 주식회사", js: "왜관궤도 주식회사", typ: r("왜관궤도주식회사") },
        { json: "한국전력주식회사", js: "한국전력주식회사", typ: m(r("동탄인덕원선")) },
        { json: "남선합동전기 주식회사", js: "남선합동전기 주식회사", typ: m(r("동탄인덕원선")) },
        { json: "재조선미육군사령부군정청 운수부", js: "재조선미육군사령부군정청 운수부", typ: r("재조선미육군사령부군정청운수부") },
        { json: "교육기관", js: "교육기관", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "경부철도주식회사", js: "경부철도주식회사", typ: r("경부철도주식회사") },
        { json: "미쓰비시 제강 주식회사", js: "미쓰비시 제강 주식회사", typ: r("씨월드고속훼리주식회사") },
        { json: "남만주철도 주식회사", js: "남만주철도 주식회사", typ: r("남만주철도주식회사") },
        { json: "대한석탄공사", js: "대한석탄공사", typ: m(r("동탄인덕원선")) },
        { json: "주식회사 삼척탄좌개발", js: "주식회사 삼척탄좌개발", typ: r("주식회사삼척탄좌개발") },
        { json: "조선전업주식회사", js: "조선전업주식회사", typ: r("조선전업주식회사") },
        { json: "보문산 케이블카", js: "보문산 케이블카", typ: r("보문산케이블카") },
        { json: "송도해상케이블카", js: "송도해상케이블카", typ: r("송도해상케이블카") },
        { json: "농림부 산림국", js: "농림부 산림국", typ: r("농림부산림국") },
        { json: "운수성 철도국", js: "운수성 철도국", typ: m(r("수도권광역급행철도_B노선기지선")) },
        { json: "조선와사전기 주식회사", js: "조선와사전기 주식회사", typ: r("조선와사전기주식회사") },
        { json: "경춘철도주식회사", js: "경춘철도주식회사", typ: r("경춘철도주식회사") },
        { json: "사업소", js: "사업소", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "서울특별시", js: "서울특별시", typ: r("폐지_서울특별시") },
        { json: "한성전기회사", js: "한성전기회사", typ: r("한성전기회사") },
        { json: "경성궤도주식회사", js: "경성궤도주식회사", typ: r("경성궤도주식회사") },
        { json: "남조선철도주식회사", js: "남조선철도주식회사", typ: r("남조선철도주식회사") },
        { json: "함경북도", js: "함경북도", typ: r("함경북도") },
        { json: "생기령점토석탄주식회사", js: "생기령점토석탄주식회사", typ: r("생기령점토석탄주식회사") },
        { json: "영무궤도", js: "영무궤도", typ: r("영무궤도") },
        { json: "강서궤도", js: "강서궤도", typ: r("강서궤도") },
        { json: "미쓰비시 석탄 광업 주식회사", js: "미쓰비시 석탄 광업 주식회사", typ: r("미쓰비시석탄광업주식회사") },
        { json: "개천철도주식회사", js: "개천철도주식회사", typ: r("개천철도주식회사") },
        { json: "도문철도주식회사", js: "도문철도주식회사", typ: r("도문철도주식회사") },
        { json: "조선평안철도 주식회사", js: "조선평안철도 주식회사", typ: r("조선평안철도주식회사") },
        { json: "신흥철도주식회사", js: "신흥철도주식회사", typ: m(r("동탄인덕원선")) },
        { json: "평양시 려객운수종합기업소", js: "평양시 려객운수종합기업소", typ: r("폐지_평양시려객운수종합기업소") },
        { json: "북선척식철도주식회사", js: "북선척식철도주식회사", typ: r("북선척식철도주식회사") },
        { json: "동만주철도 주식회사", js: "동만주철도 주식회사", typ: r("동만주철도주식회사") },
    ], false),
    "가와사키기선주식회사": o([
        { json: "관여연락선", js: "관여연락선", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "강서궤도": o([
        { json: "강서궤도", js: "강서궤도", typ: r("동탄인덕원선") },
    ], false),
    "개천철도주식회사": o([
        { json: "개천선", js: "개천선", typ: r("동탄인덕원선") },
    ], false),
    "경부철도주식회사": o([
        { json: "경인선", js: "경인선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "경부선", js: "경부선", typ: r("동탄인덕원선") },
    ], false),
    "경성궤도주식회사": o([
        { json: "Placemark", js: "Placemark", typ: a(r("PurplePlacemark")) },
        { json: "경성궤도 본선", js: "경성궤도 본선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "경성궤도 광장리선", js: "경성궤도 광장리선", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "Purple경성전기주식회사": o([
        { json: "금강산선", js: "금강산선", typ: r("동탄인덕원선") },
        { json: "서울전차 서대문선", js: "서울전차 서대문선", typ: r("동탄인덕원선") },
        { json: "서울전차 영천선", js: "서울전차 영천선", typ: r("동탄인덕원선") },
        { json: "서울전차 마포선", js: "서울전차 마포선", typ: r("동탄인덕원선") },
        { json: "서울전차 의주로선", js: "서울전차 의주로선", typ: r("동탄인덕원선") },
        { json: "서울전차 세종로선", js: "서울전차 세종로선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "서울전차 효자동선", js: "서울전차 효자동선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "서울전차 광화문선", js: "서울전차 광화문선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "서울전차 안국동선", js: "서울전차 안국동선", typ: r("동탄인덕원선") },
        { json: "서울전차 종로선", js: "서울전차 종로선", typ: r("동탄인덕원선") },
        { json: "서울전차 청량리선", js: "서울전차 청량리선", typ: r("동탄인덕원선") },
        { json: "서울전차 석산선", js: "서울전차 석산선", typ: r("동탄인덕원선") },
        { json: "서울전차 경용선", js: "서울전차 경용선", typ: r("동탄인덕원선") },
        { json: "서울전차 노량진선", js: "서울전차 노량진선", typ: r("동탄인덕원선") },
        { json: "서울전차 구용산선", js: "서울전차 구용산선", typ: r("동탄인덕원선") },
        { json: "경성전차 강안선", js: "경성전차 강안선", typ: r("동탄인덕원선") },
        { json: "서울전차 을지로선", js: "서울전차 을지로선", typ: r("동탄인덕원선") },
        { json: "서울전차 창경원선", js: "서울전차 창경원선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "서울전차 충무로선", js: "서울전차 충무로선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "서울전차 장충단선", js: "서울전차 장충단선", typ: r("동탄인덕원선") },
        { json: "서울전차 왕십리선", js: "서울전차 왕십리선", typ: r("동탄인덕원선") },
        { json: "서울전차 용산역전선", js: "서울전차 용산역전선", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "경춘철도주식회사": o([
        { json: "구 경춘선", js: "구 경춘선", typ: r("동탄인덕원선") },
    ], false),
    "교통부": o([
        { json: "경원선", js: "경원선", typ: r("동탄인덕원선") },
        { json: "경전선", js: "경전선", typ: r("동탄인덕원선") },
        { json: "구 경춘선", js: "구 경춘선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "신촌연결선", js: "신촌연결선", typ: r("동탄인덕원선") },
        { json: "박물관", js: "박물관", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "우암선", js: "우암선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "구 대구선", js: "구 대구선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "경부선", js: "경부선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "동촌연결선", js: "동촌연결선", typ: r("동탄인덕원선") },
        { json: "서울교외선", js: "서울교외선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "동해북부선", js: "동해북부선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "토해선", js: "토해선", typ: r("동탄인덕원선") },
    ], false),
    "국립중앙과학관": o([
        { json: "대전자기부상시험선", js: "대전자기부상시험선", typ: r("동탄인덕원선") },
    ], false),
    "Sticky국유철도": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("한국철도공사_7") },
        { json: "철도청", js: "철도청", typ: r("Fluffy철도청") },
    ], false),
    "Fluffy철도청": o([
        { json: "문경선", js: "문경선", typ: r("동탄인덕원선") },
        { json: "화순선", js: "화순선", typ: r("동탄인덕원선") },
        { json: "전라선", js: "전라선", typ: r("동탄인덕원선") },
        { json: "충북선", js: "충북선", typ: r("동탄인덕원선") },
        { json: "경전선", js: "경전선", typ: r("동탄인덕원선") },
        { json: "구 대구선", js: "구 대구선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "수인선", js: "수인선", typ: r("동탄인덕원선") },
        { json: "경춘선", js: "경춘선", typ: r("동탄인덕원선") },
        { json: "구 경춘선", js: "구 경춘선", typ: r("동탄인덕원선") },
        { json: "마산항제1부두선", js: "마산항제1부두선", typ: r("동탄인덕원선") },
        { json: "진해선", js: "진해선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "김포선", js: "김포선", typ: r("동탄인덕원선") },
        { json: "당인리선", js: "당인리선", typ: r("동탄인덕원선") },
        { json: "수려선", js: "수려선", typ: r("동탄인덕원선") },
        { json: "안성선", js: "안성선", typ: r("동탄인덕원선") },
        { json: "광주선", js: "광주선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "경부선", js: "경부선", typ: r("동탄인덕원선") },
        { json: "경북선", js: "경북선", typ: r("동탄인덕원선") },
        { json: "호남선", js: "호남선", typ: r("동탄인덕원선") },
        { json: "정선선", js: "정선선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "진삼선", js: "진삼선", typ: r("동탄인덕원선") },
        { json: "영동선", js: "영동선", typ: r("동탄인덕원선") },
        { json: "용산선", js: "용산선", typ: r("동탄인덕원선") },
        { json: "장항선", js: "장항선", typ: r("동탄인덕원선") },
        { json: "장항화물선", js: "장항화물선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "오정선", js: "오정선", typ: r("동탄인덕원선") },
        { json: "비인선", js: "비인선", typ: r("동탄인덕원선") },
        { json: "동해남부선", js: "동해남부선", typ: r("동탄인덕원선") },
        { json: "서청주선", js: "서청주선", typ: r("동탄인덕원선") },
        { json: "옥구선", js: "옥구선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "회동선", js: "회동선", typ: r("동탄인덕원선") },
        { json: "망우선", js: "망우선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "남부순환선", js: "남부순환선", typ: r("동탄인덕원선") },
        { json: "병원", js: "병원", typ: r("동탄인덕원선") },
        { json: "박물관", js: "박물관", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "교육기관", js: "교육기관", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "경인선", js: "경인선", typ: r("동탄인덕원선") },
        { json: "충남선", js: "충남선", typ: r("동탄인덕원선") },
        { json: "사업소", js: "사업소", typ: r("동탄인덕원선") },
        { json: "중앙선", js: "중앙선", typ: r("동탄인덕원선") },
        { json: "단양탄광선", js: "단양탄광선", typ: r("동탄인덕원선") },
        { json: "문현선", js: "문현선", typ: r("동탄인덕원선") },
        { json: "우암선", js: "우암선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "옥서삼각선", js: "옥서삼각선", typ: r("동탄인덕원선") },
        { json: "경의선", js: "경의선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "수색객차출발선", js: "수색객차출발선", typ: r("동탄인덕원선") },
        { json: "울산선", js: "울산선", typ: r("동탄인덕원선") },
        { json: "장생포선", js: "장생포선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "울산항선", js: "울산항선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "동해북부선", js: "동해북부선", typ: r("동탄인덕원선") },
    ], false),
    "한국철도공사_7": o([
        { json: "가야선", js: "가야선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "경부고속선", js: "경부고속선", typ: r("동탄인덕원선") },
        { json: "경전선", js: "경전선", typ: r("동탄인덕원선") },
        { json: "남포선", js: "남포선", typ: r("동탄인덕원선") },
        { json: "대구선", js: "대구선", typ: r("동탄인덕원선") },
        { json: "동해남부선", js: "동해남부선", typ: r("동탄인덕원선") },
        { json: "문경선", js: "문경선", typ: r("동탄인덕원선") },
        { json: "장항선", js: "장항선", typ: r("동탄인덕원선") },
        { json: "장항화물선", js: "장항화물선", typ: r("동탄인덕원선") },
        { json: "중앙선", js: "중앙선", typ: r("동탄인덕원선") },
        { json: "태백선", js: "태백선", typ: r("동탄인덕원선") },
        { json: "화순선", js: "화순선", typ: r("동탄인덕원선") },
        { json: "경의선", js: "경의선", typ: r("동탄인덕원선") },
        { json: "금장삼각선", js: "금장삼각선", typ: r("동탄인덕원선") },
        { json: "옥구선", js: "옥구선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "경춘선", js: "경춘선", typ: r("동탄인덕원선") },
        { json: "가은선", js: "가은선", typ: r("동탄인덕원선") },
        { json: "구 경춘선", js: "구 경춘선", typ: r("동탄인덕원선") },
        { json: "구 대구선", js: "구 대구선", typ: r("동탄인덕원선") },
        { json: "경부선", js: "경부선", typ: r("동탄인덕원선") },
        { json: "경북선", js: "경북선", typ: r("동탄인덕원선") },
        { json: "호남선", js: "호남선", typ: r("동탄인덕원선") },
        { json: "충북선", js: "충북선", typ: r("동탄인덕원선") },
        { json: "정선선", js: "정선선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "전라선", js: "전라선", typ: r("동탄인덕원선") },
        { json: "영동선", js: "영동선", typ: r("동탄인덕원선") },
        { json: "효창선", js: "효창선", typ: r("동탄인덕원선") },
        { json: "마산항제1부두선", js: "마산항제1부두선", typ: r("동탄인덕원선") },
        { json: "정양선", js: "정양선", typ: r("동탄인덕원선") },
        { json: "경원선", js: "경원선", typ: r("동탄인덕원선") },
        { json: "병원", js: "병원", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "광양제철선", js: "광양제철선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "분당선", js: "분당선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "진해선", js: "진해선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "영천삼각선", js: "영천삼각선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "구 대전남연결선", js: "구 대전남연결선", typ: r("동탄인덕원선") },
        { json: "사업소", js: "사업소", typ: r("동탄인덕원선") },
    ], false),
    "김제궤도주식회사": o([
        { json: "김제궤도", js: "김제궤도", typ: r("동탄인덕원선") },
    ], false),
    "남만주철도주식회사": o([
        { json: "사업소", js: "사업소", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "경부선", js: "경부선", typ: r("동탄인덕원선") },
        { json: "라진항선", js: "라진항선", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "남조선철도주식회사": o([
        { json: "경전선", js: "경전선", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "농림부산림국": o([
        { json: "가곡천 산림철도", js: "가곡천 산림철도", typ: r("동탄인덕원선") },
    ], false),
    "도문철도주식회사": o([
        { json: "함북선", js: "함북선", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "동만주철도주식회사": o([
        { json: "동만주철도 본선", js: "동만주철도 본선", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "미쓰비시석탄광업주식회사": o([
        { json: "미쓰비시 광업 대보탄갱선", js: "미쓰비시 광업 대보탄갱선", typ: r("동탄인덕원선") },
    ], false),
    "보문산케이블카": o([
        { json: "보문산 케이블카", js: "보문산 케이블카", typ: r("동탄인덕원선") },
    ], false),
    "북선척식철도주식회사": o([
        { json: "무산선", js: "무산선", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "폐지_북한철도성": o([
        { json: "금강산선", js: "금강산선", typ: r("동탄인덕원선") },
        { json: "청년이천선", js: "청년이천선", typ: r("동탄인덕원선") },
        { json: "황해청년선", js: "황해청년선", typ: r("동탄인덕원선") },
        { json: "장방삼각선", js: "장방삼각선", typ: r("동탄인덕원선") },
        { json: "배천선", js: "배천선", typ: r("동탄인덕원선") },
        { json: "옹진선", js: "옹진선", typ: r("동탄인덕원선") },
        { json: "부포선", js: "부포선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "은률선", js: "은률선", typ: r("동탄인덕원선") },
        { json: "도지리선", js: "도지리선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "평북선", js: "평북선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "평라선", js: "평라선", typ: r("동탄인덕원선") },
        { json: "직동탄광선", js: "직동탄광선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "신창삼각선", js: "신창삼각선", typ: r("동탄인덕원선") },
        { json: "신흥선", js: "신흥선", typ: r("동탄인덕원선") },
        { json: "허천선", js: "허천선", typ: r("동탄인덕원선") },
        { json: "청진조차장선", js: "청진조차장선", typ: r("동탄인덕원선") },
        { json: "회령탄광선", js: "회령탄광선", typ: r("동탄인덕원선") },
        { json: "삼지연선", js: "삼지연선", typ: r("동탄인덕원선") },
        { json: "보천선", js: "보천선", typ: r("동탄인덕원선") },
        { json: "성평선", js: "성평선", typ: r("동탄인덕원선") },
        { json: "금강산청년선", js: "금강산청년선", typ: r("동탄인덕원선") },
        { json: "평남선", js: "평남선", typ: r("동탄인덕원선") },
        { json: "서해리선", js: "서해리선", typ: r("동탄인덕원선") },
        { json: "덕달선", js: "덕달선", typ: r("동탄인덕원선") },
        { json: "운산선", js: "운산선", typ: r("동탄인덕원선") },
        { json: "잠진리선", js: "잠진리선", typ: r("동탄인덕원선") },
        { json: "남동선", js: "남동선", typ: r("동탄인덕원선") },
        { json: "구 은률선", js: "구 은률선", typ: r("동탄인덕원선") },
        { json: "박천선", js: "박천선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "삼등탄광선", js: "삼등탄광선", typ: r("동탄인덕원선") },
        { json: "안주탄광선", js: "안주탄광선", typ: r("동탄인덕원선") },
        { json: "화풍선", js: "화풍선", typ: r("동탄인덕원선") },
        { json: "청남선", js: "청남선", typ: r("동탄인덕원선") },
        { json: "개천선", js: "개천선", typ: r("동탄인덕원선") },
        { json: "하성선", js: "하성선", typ: r("동탄인덕원선") },
        { json: "장연선", js: "장연선", typ: r("동탄인덕원선") },
        { json: "일탄선", js: "일탄선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "백두산청년선", js: "백두산청년선", typ: r("동탄인덕원선") },
        { json: "백무선", js: "백무선", typ: r("동탄인덕원선") },
        { json: "함북선", js: "함북선", typ: r("동탄인덕원선") },
        { json: "사해선", js: "사해선", typ: r("동탄인덕원선") },
        { json: "내토선", js: "내토선", typ: r("동탄인덕원선") },
        { json: "경원선", js: "경원선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "병원", js: "병원", typ: r("교육기관") },
        { json: "다사도선", js: "다사도선", typ: r("동탄인덕원선") },
        { json: "북부내륙선", js: "북부내륙선", typ: r("교육기관") },
        { json: "강계선", js: "강계선", typ: r("동탄인덕원선") },
        { json: "만포선", js: "만포선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "구장삼각선", js: "구장삼각선", typ: r("동탄인덕원선") },
        { json: "청년팔원선", js: "청년팔원선", typ: r("동탄인덕원선") },
        { json: "경의선", js: "경의선", typ: r("동탄인덕원선") },
        { json: "삼천포지선", js: "삼천포지선", typ: r("동탄인덕원선") },
        { json: "화풍삼각선", js: "화풍삼각선", typ: r("동탄인덕원선") },
        { json: "배골선", js: "배골선", typ: r("동탄인덕원선") },
        { json: "매하선", js: "매하선", typ: r("동탄인덕원선") },
        { json: "청단삼각선", js: "청단삼각선", typ: r("동탄인덕원선") },
        { json: "문천항선", js: "문천항선", typ: r("동탄인덕원선") },
        { json: "고비선", js: "고비선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "천성탄광선", js: "천성탄광선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "평양 덕산선", js: "평양 덕산선", typ: r("동탄인덕원선") },
        { json: "평덕선", js: "평덕선", typ: r("동탄인덕원선") },
        { json: "수화선", js: "수화선", typ: r("동탄인덕원선") },
        { json: "서호선", js: "서호선", typ: r("동탄인덕원선") },
        { json: "청암삼각선", js: "청암삼각선", typ: r("동탄인덕원선") },
        { json: "장진선", js: "장진선", typ: r("동탄인덕원선") },
        { json: "장풍선", js: "장풍선", typ: r("동탄인덕원선") },
        { json: "무산선", js: "무산선", typ: r("동탄인덕원선") },
        { json: "서상삼각선", js: "서상삼각선", typ: r("동탄인덕원선") },
        { json: "남양삼각선", js: "남양삼각선", typ: r("동탄인덕원선") },
        { json: "온성선", js: "온성선", typ: r("동탄인덕원선") },
        { json: "회암선", js: "회암선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "남라진선", js: "남라진선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "송림선", js: "송림선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "청진항선", js: "청진항선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "사업소", js: "사업소", typ: r("동탄인덕원선") },
        { json: "문덕삼각선", js: "문덕삼각선", typ: r("동탄인덕원선") },
        { json: "선봉항선", js: "선봉항선", typ: r("동탄인덕원선") },
    ], false),
    "생기령점토석탄주식회사": o([
        { json: "생기령 점토궤도", js: "생기령 점토궤도", typ: r("동탄인덕원선") },
    ], false),
    "폐지_서울특별시": o([
        { json: "서울전차 서대문선", js: "서울전차 서대문선", typ: r("동탄인덕원선") },
        { json: "서울전차 영천선", js: "서울전차 영천선", typ: r("동탄인덕원선") },
        { json: "서울전차 마포선", js: "서울전차 마포선", typ: r("동탄인덕원선") },
        { json: "서울전차 의주로선", js: "서울전차 의주로선", typ: r("동탄인덕원선") },
        { json: "서울전차 세종로선", js: "서울전차 세종로선", typ: r("동탄인덕원선") },
        { json: "서울전차 효자동선", js: "서울전차 효자동선", typ: r("동탄인덕원선") },
        { json: "서울전차 광화문선", js: "서울전차 광화문선", typ: r("동탄인덕원선") },
        { json: "서울전차 종로선", js: "서울전차 종로선", typ: r("동탄인덕원선") },
        { json: "서울전차 청량리선", js: "서울전차 청량리선", typ: r("동탄인덕원선") },
        { json: "서울전차 종로삼각선", js: "서울전차 종로삼각선", typ: r("동탄인덕원선") },
        { json: "서울전차 경용선", js: "서울전차 경용선", typ: r("동탄인덕원선") },
        { json: "서울전차 노량진선", js: "서울전차 노량진선", typ: r("동탄인덕원선") },
        { json: "서울전차 영등포선", js: "서울전차 영등포선", typ: r("동탄인덕원선") },
        { json: "서울전차 구용산선", js: "서울전차 구용산선", typ: r("동탄인덕원선") },
        { json: "서울전차 을지로선", js: "서울전차 을지로선", typ: r("동탄인덕원선") },
        { json: "서울전차 동대문삼각선", js: "서울전차 동대문삼각선", typ: r("동탄인덕원선") },
        { json: "서울전차 을지로삼각선", js: "서울전차 을지로삼각선", typ: r("동탄인덕원선") },
        { json: "서울전차 돈암동선", js: "서울전차 돈암동선", typ: r("동탄인덕원선") },
        { json: "서울전차 창경원선", js: "서울전차 창경원선", typ: r("동탄인덕원선") },
        { json: "서울전차 충무로선", js: "서울전차 충무로선", typ: r("동탄인덕원선") },
        { json: "서울전차 왕십리선", js: "서울전차 왕십리선", typ: r("동탄인덕원선") },
        { json: "서울전차 마포차고선", js: "서울전차 마포차고선", typ: r("동탄인덕원선") },
        { json: "서울전차 영등포차고선", js: "서울전차 영등포차고선", typ: r("동탄인덕원선") },
        { json: "서울전차 삼각지차고선", js: "서울전차 삼각지차고선", typ: r("동탄인덕원선") },
        { json: "서울전차 동대문차고선", js: "서울전차 동대문차고선", typ: r("동탄인덕원선") },
        { json: "사업소", js: "사업소", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "경성궤도 본선", js: "경성궤도 본선", typ: r("동탄인덕원선") },
        { json: "경성궤도 광장리선", js: "경성궤도 광장리선", typ: r("동탄인덕원선") },
        { json: "서울전차 용산역전선", js: "서울전차 용산역전선", typ: r("동탄인덕원선") },
    ], false),
    "송도해상케이블카": o([
        { json: "(구)송도해상케이블카", js: "(구)송도해상케이블카", typ: r("동탄인덕원선") },
    ], false),
    "영무궤도": o([
        { json: "영무궤도", js: "영무궤도", typ: r("교육기관") },
    ], false),
    "왜관궤도주식회사": o([
        { json: "왜관궤도", js: "왜관궤도", typ: r("동탄인덕원선") },
    ], false),
    "재조선미육군사령부군정청운수부": o([
        { json: "병원", js: "병원", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "제주도순환궤도": o([
        { json: "제주도순환궤도", js: "제주도순환궤도", typ: r("동탄인덕원선") },
        { json: "제주도순환궤도 지선", js: "제주도순환궤도 지선", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "조선경남철도주식회사": o([
        { json: "안성선", js: "안성선", typ: r("동탄인덕원선") },
        { json: "장항화물선", js: "장항화물선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "장항-군산 연락선", js: "장항-군산 연락선", typ: r("동탄인덕원선") },
        { json: "장항선", js: "장항선", typ: r("동탄인덕원선") },
        { json: "조선경남철도 승합자동차선", js: "조선경남철도 승합자동차선", typ: r("동탄인덕원선") },
    ], false),
    "조선와사전기주식회사": o([
        { json: "부산전차 광복동선", js: "부산전차 광복동선", typ: r("동탄인덕원선") },
    ], false),
    "조선전업주식회사": o([
        { json: "영월광업소 삭도", js: "영월광업소 삭도", typ: r("동탄인덕원선") },
    ], false),
    "폐지_조선철도주식회사": o([
        { json: "경북선", js: "경북선", typ: r("동탄인덕원선") },
        { json: "구 경북선", js: "구 경북선", typ: r("동탄인덕원선") },
        { json: "수인선", js: "수인선", typ: r("동탄인덕원선") },
        { json: "구 은률선", js: "구 은률선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "사해선", js: "사해선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "평덕선", js: "평덕선", typ: r("동탄인덕원선") },
        { json: "장진선", js: "장진선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "무산선", js: "무산선", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "폐지_조선총독부교통국": o([
        { json: "Placemark", js: "Placemark", typ: r("PurplePlacemark") },
        { json: "군산화물선", js: "군산화물선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "당인리선", js: "당인리선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "구 광주선", js: "구 광주선", typ: r("동탄인덕원선") },
        { json: "경부선", js: "경부선", typ: r("동탄인덕원선") },
        { json: "경원선", js: "경원선", typ: r("동탄인덕원선") },
        { json: "전라선", js: "전라선", typ: r("동탄인덕원선") },
        { json: "경의선", js: "경의선", typ: r("동탄인덕원선") },
        { json: "용산선", js: "용산선", typ: r("동탄인덕원선") },
        { json: "동해중부선", js: "동해중부선", typ: r("동탄인덕원선") },
        { json: "대삼선", js: "대삼선", typ: r("동탄인덕원선") },
        { json: "동해북부선", js: "동해북부선", typ: r("동탄인덕원선") },
        { json: "동해남부선", js: "동해남부선", typ: r("동탄인덕원선") },
        { json: "경전선", js: "경전선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "함북선", js: "함북선", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "폐지_조선총독부철도국": o([
        { json: "중앙선", js: "중앙선", typ: r("동탄인덕원선") },
        { json: "대구선", js: "대구선", typ: r("동탄인덕원선") },
        { json: "군산화물선", js: "군산화물선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "경부선", js: "경부선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "경의선", js: "경의선", typ: r("동탄인덕원선") },
        { json: "신촌연결선", js: "신촌연결선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "병원", js: "병원", typ: r("교육기관") },
        { json: "사업소", js: "사업소", typ: r("동탄인덕원선") },
        { json: "전라선", js: "전라선", typ: r("동탄인덕원선") },
        { json: "동해남부선", js: "동해남부선", typ: r("동탄인덕원선") },
        { json: "구 대구선", js: "구 대구선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "마포지선궤도", js: "마포지선궤도", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "월미도지선", js: "월미도지선", typ: r("동탄인덕원선") },
        { json: "조선총독부 철도국 자동차 곡순선", js: "조선총독부 철도국 자동차 곡순선", typ: r("동탄인덕원선") },
        { json: "조선총독부 철도국 자동차 동복선", js: "조선총독부 철도국 자동차 동복선", typ: r("동탄인덕원선") },
        { json: "조선총독부 철도국 자동차 화순선", js: "조선총독부 철도국 자동차 화순선", typ: r("동탄인덕원선") },
        { json: "조선총독부 철도국 자동차 광려본선", js: "조선총독부 철도국 자동차 광려본선", typ: r("동탄인덕원선") },
        { json: "평라선", js: "평라선", typ: r("동탄인덕원선") },
        { json: "강덕선", js: "강덕선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "벽란도지선", js: "벽란도지선", typ: r("동탄인덕원선") },
        { json: "신안주지선", js: "신안주지선", typ: r("동탄인덕원선") },
        { json: "함북선", js: "함북선", typ: r("동탄인덕원선") },
        { json: "강안선", js: "강안선", typ: r("수도권광역급행철도_B노선기지선") },
        { json: "조선총독부 철도국 연락자동차 청진웅기선", js: "조선총독부 철도국 연락자동차 청진웅기선", typ: r("동탄인덕원선") },
        { json: "조선총독부 철도국 연락자동차 종성경원선", js: "조선총독부 철도국 연락자동차 종성경원선", typ: r("동탄인덕원선") },
        { json: "조선총독부 철도국 연락자동차 종성온성선", js: "조선총독부 철도국 연락자동차 종성온성선", typ: r("동탄인덕원선") },
        { json: "조선총독부 철도국 정기항로 웅기청진선", js: "조선총독부 철도국 정기항로 웅기청진선", typ: r("동탄인덕원선") },
        { json: "조선총독부 철도국 연락자동차 경원훈춘선", js: "조선총독부 철도국 연락자동차 경원훈춘선", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "조선평안철도주식회사": o([
        { json: "평남선", js: "평남선", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "폐지_주식회사강원랜드": o([
        { json: "하이원추추파크 전용선", js: "하이원추추파크 전용선", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "주식회사삼척탄좌개발": o([
        { json: "정암탄광 전용철도", js: "정암탄광 전용철도", typ: r("동탄인덕원선") },
    ], false),
    "주식회사포스코": o([
        { json: "괴동선", js: "괴동선", typ: r("수도권광역급행철도_B노선기지선") },
    ], false),
    "폐지_평양시려객운수종합기업소": o([
        { json: "평양 궤도전차 1호선", js: "평양 궤도전차 1호선", typ: r("동탄인덕원선") },
    ], false),
    "한국중부발전주식회사": o([
        { json: "서천화력선", js: "서천화력선", typ: r("동탄인덕원선") },
    ], false),
    "한성전기회사": o([
        { json: "서울전차 의주로선", js: "서울전차 의주로선", typ: r("동탄인덕원선") },
    ], false),
    "함경북도": o([
        { json: "경성 라남 수압궤도", js: "경성 라남 수압궤도", typ: r("동탄인덕원선") },
    ], false),
    "함평궤도주식회사": o([
        { json: "함평궤도", js: "함평궤도", typ: r("동탄인덕원선") },
    ], false),
    "전기시설": o([
        { json: "폐지", js: "폐지", typ: r("전기시설_폐지") },
        { json: "영업중", js: "영업중", typ: r("전기시설_영업중") },
    ], false),
    "전기시설_영업중": o([
        { json: "한국중부발전주식회사", js: "한국중부발전주식회사", typ: r("씨월드고속훼리주식회사") },
    ], false),
    "전기시설_폐지": o([
        { json: "경성전기주식회사", js: "경성전기주식회사", typ: r("Fluffy경성전기주식회사") },
    ], false),
    "Fluffy경성전기주식회사": o([
        { json: "사업소", js: "사업소", typ: r("동탄인덕원선") },
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

