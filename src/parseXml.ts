import { parse } from "https://esm.sh/jsr/@libs/xml@6.0.4"

export const parseXml =
(xml: Parameters<typeof parse>[0]) => {
    const json = parse(xml)
    const jsonStr = JSON.stringify(json)

    return JSON.parse(jsonStr, (key, value) => {
        if (value.Folder) {
            let { Folder, ...rest } = value
            if (!Array.isArray(Folder)) {
                Folder = [Folder]
            }
            return {
                ...rest,
                ...Object.fromEntries(
                    Folder.map(({ name, ...rest }: any) => [
                        name,
                        rest,
                    ])
                ),
            }
        } else {
            return value
        }
    })
}
