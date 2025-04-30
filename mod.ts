import { parse } from "./src/parse.ts"

using file = await Deno.open("./static/k.kml")

const k = parse(file)

console.log(
    k
    .Folder!.find(x=>x.name=="Path")!
    .Folder!.find(x=>x.name=="ASIA")!
    .Folder!.find(x=>x.name=="ROK")!
    .Folder!.find(x=>x.name=="미래")!
    .Folder!.find(x=>x.name=="도시철도")!
    .Folder!.find(x=>x.name=="한국철도공사")!
    .Placemark!.find(x=>x.name=="월곶판교선")!
)
