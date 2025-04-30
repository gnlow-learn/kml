import { parse } from "./src/parse.ts"

using file = await Deno.open("./static/k.kml")

const k = parse(file)

console.log(
    k.kml.Document.Folder.map(x => x.name)
)
