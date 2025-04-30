import { parseXml } from "./parseXml.ts"
import { Document } from "./types.ts"

export const parse =
(xml: Parameters<typeof parseXml>[0]) => {
    const json = parseXml(xml)
    return json.kml.Document as Document
}
