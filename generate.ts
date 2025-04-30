import { parse } from "./src/deps.ts"
import {
    quicktype,
    InputData,
    jsonInputForTargetLanguage,
} from "https://esm.sh/quicktype-core@23.1.1"

using file = await Deno.open("./static/k.kml")

const json = parse(file)

const qt =
(lang: "ts") =>
async (data: unknown) => {
    const jsonInput = jsonInputForTargetLanguage(lang)
    await jsonInput.addSource({
        name: "Kml",
        samples: [JSON.stringify(data)],
    })

    const inputData = new InputData()
    inputData.addInput(jsonInput)

    const result = await quicktype({
        lang,
        inputData,
    })

    return result.lines.join("\n")
}


console.log(await qt("ts")(json))
