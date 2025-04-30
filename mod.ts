import { parse } from "./src/parse.ts"

using file = await Deno.open("./static/k.kml")

const k = parse(file)

console.log(
    k.kml.Document.Path.ASIA
    .ROK.미래.도시철도.한국철도공사.월곶판교선
    .styleUrl
)
