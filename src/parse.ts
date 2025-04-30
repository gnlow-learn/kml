import { Convert, Kml } from "../dist/Convert.ts"
import { parseXml } from "./parseXml.ts"

export { type Kml }

export const parse =
(xml: Parameters<typeof parseXml>[0]) => {
    const json = parseXml(xml)
    return Convert.toKml(JSON.stringify(json))
}
