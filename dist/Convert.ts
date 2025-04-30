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
    강삭철도: Purple강삭철도;
    삭도:   Purple삭도;
}

export interface Purple강삭철도 {
    향도봉호: PuneHedgehog;
}

export interface PuneHedgehog {
    styleUrl:   string;
    Region:     Region;
    LineString: LineString;
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
    경의선:    Purple기타;
    평라선:    PuneHedgehog;
    평북선:    Purple기타;
    평덕선:    Purple기타;
    평남선:    Purple기타;
    강원선:    Purple기타;
    개천선:    Purple기타;
    금강산청년선: Purple기타;
    동해북부선:  Purple동해북부선;
    남양국경선:  PuneHedgehog;
    두만강선:   Purple기타;
    만포선:    Purple기타;
    무산선:    Purple기타;
    배천선:    Purple기타;
    백두산청년선: PuneHedgehog;
    백마선:    Purple기타;
    백무선:    PuneHedgehog;
    북부내륙선:  Purple기타;
    경원선:    Purple기타;
    함북선:    Purple기타;
    황해청년선:  Purple기타;
    은률선:    PuneHedgehog;
    룡성선:    Purple기타;
    서해갑문선:  Purple기타;
}

export interface Purple기타 {
    styleUrl:   string;
    LineString: LineString;
}

export interface Purple동해북부선 {
    "군분선-감호": Purple기타;
}

export interface 국철_북한철도성 {
    진흥선: Purple기타;
}

export interface Purple지선 {
    "북한 철도성": Fluffy북한철도성;
}

export interface Fluffy북한철도성 {
    모학선:    PuneHedgehog;
    신흥선:    PuneHedgehog;
    청진조차장선: { [key: string]: PuneHedgehog };
    신온선:    신온선;
    털섬항선:   PuneHedgehog;
    강계선:    Purple기타;
    강덕선:    PuneHedgehog;
    강안선:    PuneHedgehog;
    고건원선:   Purple기타;
    고비선:    Purple기타;
    고원탄광선:  Purple기타;
    고참탄광선:  Purple기타;
    곡하선:    PuneHedgehog;
    금골선:    Purple기타;
    남포지선:   Purple기타;
    남흥선:    PuneHedgehog;
    다사도선:   Purple기타;
    대각선:    PuneHedgehog;
    대건선:    Purple기타;
    봉창선:    Purple봉창선;
    대안선:    Purple기타;
    덕성선:    Purple기타;
    덕현선:    Purple기타;
    도지리선:   Purple기타;
    두언선:    Purple기타;
    득장선:    Purple기타;
    라진항선:   PuneHedgehog;
    락랑선:    Purple기타;
    려호선:    PuneHedgehog;
    룡문탄광선:  Purple기타;
    룡암선:    Purple기타;
    리원선:    Purple기타;
    마평선:    Purple기타;
    만덕선:    Purple기타;
    명당선:    Purple기타;
    문천항선:   Purple기타;
    장연선:    Purple기타;
    봉산선:    Purple기타;
    봉천탄광선:  PuneHedgehog;
    부포선:    Purple기타;
    비날론선:   PuneHedgehog;
    산음선:    PuneHedgehog;
    삼지연선:   PuneHedgehog;
    서호선:    Purple기타;
    석하선:    Purple기타;
    성산인입선:  Purple성산인입선;
    세천선:    PuneHedgehog;
    솔골탄광선:  Purple기타;
    신송도원선:  PuneHedgehog;
    송도원선:   PuneHedgehog;
    송림선:    Purple기타;
    수풍선:    PuneHedgehog;
    청년팔원선:  Purple기타;
    신흥동선:   PuneHedgehog;
    덕남선:    Purple기타;
    신성선:    Purple기타;
    풍덕선:    PuneHedgehog;
    안골선:    Purple기타;
    오시천선:   Purple기타;
    옹진선:    Purple기타;
    원산항선:   PuneHedgehog;
    일탄선:    Purple기타;
    잉포선:    Purple기타;
    장상선:    PuneHedgehog;
    장진선:    Purple기타;
    재동선:    Purple기타;
    정도선:    Purple기타;
    조양탄광선:  Purple기타;
    준혁선:    Purple기타;
    창흥선:    Purple기타;
    철산선:    Purple기타;
    청년이천선:  Purple기타;
    청진항선:   PuneHedgehog;
    춘두선:    PuneHedgehog;
    향산선:    PuneHedgehog;
    향원선:    PuneHedgehog;
    허천선:    Purple기타;
    형봉선:    Purple기타;
    회둔선:    PuneHedgehog;
    회령탄광선:  Purple기타;
    흥남항선:   Purple기타;
    고원교외선:  Purple기타;
    봉학선:    PuneHedgehog;
    개천탄광선:  Purple기타;
    동평양삼각선: PuneHedgehog;
    관하선:    Purple기타;
    구봉산선:   Purple기타;
    구성선:    Purple기타;
    금야선:    Purple기타;
    남포항선:   Purple기타;
    녕변선:    Purple기타;
    대관리선:   Purple기타;
    대택선:    Purple기타;
    대향선:    Purple기타;
    독골선:    Purple기타;
    동포선:    Purple기타;
    명학선:    PuneHedgehog;
    량진선:    Purple기타;
    령대선:    Purple기타;
    룡강선:    Purple기타;
    무산광산선:  PuneHedgehog;
    박천선:    Purple기타;
    보통강삼각선: Purple기타;
    보산선:    Purple기타;
    봉화선:    PuneHedgehog;
    북창삼각선:  PuneHedgehog;
    삼천포지선:  Purple기타;
    서창선:    Purple기타;
    황주삼각선:  PuneHedgehog;
    송평부두선:  PuneHedgehog;
    송평선:    PuneHedgehog;
    압록강선:   Purple기타;
    승리선:    Purple기타;
    시정선:    Purple기타;
    안주탄광선:  Purple기타;
    온포선:    Purple기타;
    운봉선:    PuneHedgehog;
    운하선:    Purple기타;
    원산화물선:  PuneHedgehog;
    은산선:    Purple기타;
    장선강선:   PuneHedgehog;
    적지선:    PuneHedgehog;
    직동탄광선:  Purple기타;
    천내선:    PuneHedgehog;
    천성탄광선:  Purple기타;
    화풍선:    Purple기타;
    청암삼각선:  PuneHedgehog;
    청화력선:   PuneHedgehog;
    추평선:    PuneHedgehog;
    평양화전선:  Purple기타;
    향원삼각선:  PuneHedgehog;
    회암선:    PuneHedgehog;
    후산선:    Purple기타;
}

export interface Purple봉창선 {
    봉창: PuneHedgehog;
}

export interface Purple성산인입선 {
    매봉: Purple기타;
}

export interface 신온선 {
    신온: PuneHedgehog;
}

export interface Purple궤도선 {
    "함경북도 청진시": 궤도선_함경북도청진시;
}

export interface 궤도선_함경북도청진시 {
    "청진 궤도전차": PuneHedgehog;
}

export interface Purple도시철도 {
    "내각 보안성 제23국 지하철도 운영관리국": 도시철도_내각보안성제23국지하철도운영관리국;
    "평양시 려객운수종합기업소":          { [key: string]: PuneHedgehog };
    "강원도 원산시":                도시철도_강원도원산시;
    "평안남도 평성시":               평안남도평성시;
}

export interface 도시철도_강원도원산시 {
    "원산 궤도전차": Purple기타;
}

export interface 도시철도_내각보안성제23국지하철도운영관리국 {
    "평양 지하철도 천리마선": Purple기타;
    "평양 지하철도 만경대선": PuneHedgehog;
    "평양 지하철도 혁신선":  Purple기타;
}

export interface 평안남도평성시 {
    "평성 궤도전차": Purple기타;
}

export interface Purple삭도 {
    천지삭도: PuneHedgehog;
}

export interface Purple전용선 {
    "북한 철도성":        Sticky북한철도성;
    기타:              PuneHedgehog;
    궤도선:             Fluffy궤도선;
    "평양시 려객운수종합기업소": 전용선_평양시려객운수종합기업소;
}

export interface Fluffy궤도선 {
    "북한 철도성": Tentacled북한철도성;
    기타:       궤도선_기타;
}

export interface 궤도선_기타 {
    신대택: PuneHedgehog;
}

export interface Tentacled북한철도성 {
    백무선:    Purple백무선;
    백두산청년선: Purple백두산청년선;
}

export interface Purple백두산청년선 {
    남중: PuneHedgehog;
}

export interface Purple백무선 {
    삼유: Purple기타;
    굴송: Purple기타;
    도내: Purple기타;
    연암: Purple기타;
}

export interface Sticky북한철도성 {
    경의선:    { [key: string]: PuneHedgehog };
    평남선:    { [key: string]: PuneHedgehog };
    배천선:    Purple배천선;
    평덕선:    { [key: string]: PuneHedgehog };
    강원선:    { [key: string]: PuneHedgehog };
    평북선:    Purple평북선;
    평라선:    Purple평라선;
    평양화전선:  Purple평양화전선;
    만포선:    Purple만포선;
    룡성선:    Purple룡성선;
    비날론선:   PuneHedgehog;
    흥남항선:   Purple흥남항선;
    창흥선:    Purple창흥선;
    승리선:    Purple승리선;
    라진항선:   Purple라진항선;
    세천선:    Purple세천선;
    관하선:    Purple관하선;
    대건선:    Purple대건선;
    청년팔원선:  PuneHedgehog;
    향원선:    향원선;
    강계선:    강계선;
    두언선:    { [key: string]: PuneHedgehog };
    허천선:    Purple허천선;
    운하선:    Purple운하선;
    모학선:    Purple모학선;
    회둔선:    회둔선;
    덕현선:    Purple덕현선;
    회령탄광선:  Purple회령탄광선;
    은률선:    PuneHedgehog;
    분강선:    분강선;
    회암선:    Purple회암선;
    춘두선:    Purple춘두선;
    무산선:    Purple무산선;
    함북선:    Purple함북선;
    백무선:    Fluffy백무선;
    백두산청년선: { [key: string]: PuneHedgehog };
    삼지연선:   삼지연선;
    강안선:    Purple강안선;
    옹진선:    Purple옹진선;
    마평선:    Purple마평선;
    백마선:    Purple기타;
    청진조차장선: Purple청진조차장선;
    금골선:    금골선;
    수풍선:    Purple수풍선;
    봉천탄광선:  PuneHedgehog;
    명당선:    Purple명당선;
    경원선:    Purple경원선;
    솔골탄광선:  Purple솔골탄광선;
    룡암선:    북한철도성_룡암선;
    추평선:    추평선;
    개천선:    Purple개천선;
    보산선:    Purple보산선;
    남흥선:    PuneHedgehog;
    덕성선:    Purple덕성선;
    일탄선:    Purple일탄선;
    득장선:    Purple득장선;
    도지리선:   { [key: string]: PuneHedgehog };
    삼천포지선:  삼천포지선;
    신흥선:    북한철도성_신흥선;
    리원철산선:  리원철산선;
    봉학선:    Purple봉학선;
    남포지선:   남포지선;
    봉산선:    Purple봉산선;
    털섬항선:   Purple털섬항선;
    북부내륙선:  Purple북부내륙선;
    남포항선:   PuneHedgehog;
    재동선:    Purple재동선;
    다사도선:   Purple다사도선;
    철산선:    Purple철산선;
    부포선:    Purple부포선;
    대안선:    Purple대안선;
    량진선:    량진선;
    만덕선:    Purple만덕선;
    성산인입선:  Fluffy성산인입선;
    송림선:    Purple송림선;
    강덕선:    Purple강덕선;
    금강산청년선: Purple금강산청년선;
    직동탄광선:  Purple직동탄광선;
    천내선:    Purple천내선;
    장선강선:   장선강선;
    청년이천선:  Purple청년이천선;
    황해청년선:  Purple황해청년선;
    송평부두선:  PuneHedgehog;
    고참탄광선:  PuneHedgehog;
    원산항:    PuneHedgehog;
    안주탄광선:  PuneHedgehog;
    조양탄광선:  PuneHedgehog;
    룡문탄광선:  PuneHedgehog;
    문천항선:   PuneHedgehog;
    만포청년:   PuneHedgehog;
    서창선:    PuneHedgehog;
    구봉산선:   PuneHedgehog;
}

export interface 강계선 {
    남문: PuneHedgehog;
}

export interface Purple강덕선 {
    강덕: PuneHedgehog;
}

export interface Purple강안선 {
    강안: PuneHedgehog;
}

export interface Purple개천선 {
    개천: PuneHedgehog;
}

export interface Purple경원선 {
    고산:   PuneHedgehog;
    전탄:   PuneHedgehog;
    세포청년: PuneHedgehog;
}

export interface Purple관하선 {
    관하: PuneHedgehog;
}

export interface Purple금강산청년선 {
    두포: PuneHedgehog;
}

export interface 금골선 {
    "대흥 분기": PuneHedgehog;
    신덕:      PuneHedgehog;
    백금산:     PuneHedgehog;
    금골:      PuneHedgehog;
}

export interface 남포지선 {
    남포: PuneHedgehog;
}

export interface Purple다사도선 {
    "룡암포 수산사업소": Purple기타;
    북중기계련합기업소:   PuneHedgehog;
}

export interface Purple대건선 {
    북창공군기지: PuneHedgehog;
}

export interface Purple대안선 {
    대안화물: PuneHedgehog;
    대안:   PuneHedgehog;
}

export interface Purple덕성선 {
    상리: PuneHedgehog;
}

export interface Purple덕현선 {
    정광: PuneHedgehog;
    수진: Purple기타;
    덕현: PuneHedgehog;
}

export interface Purple득장선 {
    북창: PuneHedgehog;
}

export interface Purple라진항선 {
    라진항: PuneHedgehog;
    라진:  PuneHedgehog;
}

export interface 량진선 {
    량진: PuneHedgehog;
}

export interface Purple룡성선 {
    룡성베어링공장: PuneHedgehog;
    룡성:      PuneHedgehog;
}

export interface 북한철도성_룡암선 {
    동룡굴: PuneHedgehog;
}

export interface 리원철산선 {
    라흥: PuneHedgehog;
}

export interface Purple마평선 {
    훤화: PuneHedgehog;
}

export interface Purple만덕선 {
    부동: PuneHedgehog;
}

export interface Purple만포선 {
    강계:          PuneHedgehog;
    람전:          PuneHedgehog;
    성간:          Purple기타;
    중성간:         PuneHedgehog;
    공인:          PuneHedgehog;
    운송:          PuneHedgehog;
    전천:          PuneHedgehog;
    묘향산:         PuneHedgehog;
    은정:          PuneHedgehog;
    천동:          PuneHedgehog;
    룡원리:         PuneHedgehog;
    "1월18일기계공장": PuneHedgehog;
    고인:          Purple기타;
}

export interface Purple명당선 {
    명당: PuneHedgehog;
}

export interface Purple모학선 {
    순천화학련합기업소: PuneHedgehog;
    모학:        PuneHedgehog;
}

export interface Purple무산선 {
    무수: PuneHedgehog;
}

export interface Purple배천선 {
    연안: PuneHedgehog;
    홍현: PuneHedgehog;
    청단: PuneHedgehog;
}

export interface Fluffy백무선 {
    굴송:  PuneHedgehog;
    삼유:  PuneHedgehog;
    무산:  PuneHedgehog;
    유평동: Purple기타;
    연암:  PuneHedgehog;
}

export interface Purple보산선 {
    강서화물: PuneHedgehog;
}

export interface Purple봉산선 {
    서봉산: PuneHedgehog;
    봉산:  PuneHedgehog;
}

export interface Purple봉학선 {
    손구동: PuneHedgehog;
}

export interface Purple부포선 {
    강령: PuneHedgehog;
}

export interface Purple북부내륙선 {
    문악:   Purple기타;
    후주청년: PuneHedgehog;
    로탄:   Purple기타;
}

export interface 분강선 {
    "녕변 원자력 연구소": Purple기타;
}

export interface 삼지연선 {
    위연청년: PuneHedgehog;
}

export interface 삼천포지선 {
    서시: PuneHedgehog;
}

export interface Fluffy성산인입선 {
    매봉: PuneHedgehog;
}

export interface Purple세천선 {
    중봉: PuneHedgehog;
}

export interface Purple솔골탄광선 {
    솔골: PuneHedgehog;
}

export interface Purple송림선 {
    송림: PuneHedgehog;
}

export interface Purple수풍선 {
    수풍: PuneHedgehog;
}

export interface Purple승리선 {
    승리화학연합기업소: PuneHedgehog;
    승리:        PuneHedgehog;
}

export interface 북한철도성_신흥선 {
    신흥: PuneHedgehog;
}

export interface Purple옹진선 {
    왕신:  PuneHedgehog;
    옹진:  PuneHedgehog;
    서해주: PuneHedgehog;
}

export interface Purple운하선 {
    구오: PuneHedgehog;
}

export interface Purple일탄선 {
    화대: PuneHedgehog;
}

export interface 장선강선 {
    장선강: PuneHedgehog;
}

export interface Purple재동선 {
    재동: PuneHedgehog;
}

export interface Purple직동탄광선 {
    부산리: PuneHedgehog;
}

export interface Purple창흥선 {
    련흥: PuneHedgehog;
    창흥: PuneHedgehog;
}

export interface Purple천내선 {
    천내: PuneHedgehog;
}

export interface Purple철산선 {
    서해위성발사장: PuneHedgehog;
}

export interface Purple청년이천선 {
    평산: PuneHedgehog;
    정봉: PuneHedgehog;
}

export interface Purple청진조차장선 {
    "129호 공장": Purple기타;
}

export interface 추평선 {
    추평2동: PuneHedgehog;
}

export interface Purple춘두선 {
    춘두: PuneHedgehog;
}

export interface Purple털섬항선 {
    털섬항: PuneHedgehog;
}

export interface Purple평라선 {
    장평:         Purple기타;
    김책항:        PuneHedgehog;
    상룡전:        PuneHedgehog;
    함흥:         PuneHedgehog;
    함흥조차장:      PuneHedgehog;
    청진화력발전소:    PuneHedgehog;
    평성:         PuneHedgehog;
    청암:         PuneHedgehog;
    강상리:        PuneHedgehog;
    신포:         PuneHedgehog;
    륙대동:        Purple기타;
    풍어:         PuneHedgehog;
    청진조선소련합기업소: PuneHedgehog;
    청진화학섬유공장:   PuneHedgehog;
    길주청년:       PuneHedgehog;
    김책:         Purple기타;
    수덕:         PuneHedgehog;
    선덕비행장선:     Purple기타;
    금야:         PuneHedgehog;
    락원:         PuneHedgehog;
    리원:         PuneHedgehog;
    승암:         PuneHedgehog;
    관해:         PuneHedgehog;
    해군동해사령부:    PuneHedgehog;
    중호:         PuneHedgehog;
    김책수산사업소:    PuneHedgehog;
    정평:         PuneHedgehog;
    중이:         PuneHedgehog;
    거차:         PuneHedgehog;
    성내:         PuneHedgehog;
    부래산:        PuneHedgehog;
    함주:         PuneHedgehog;
    홍원:         PuneHedgehog;
    양화:         Purple기타;
    어랑:         PuneHedgehog;
    경성:         PuneHedgehog;
    라남:         PuneHedgehog;
    운포:         PuneHedgehog;
}

export interface Purple평북선 {
    백운:    PuneHedgehog;
    구성:    PuneHedgehog;
    청수:    PuneHedgehog;
    판막:    PuneHedgehog;
    방현:    PuneHedgehog;
    방현비행장: PuneHedgehog;
}

export interface Purple평양화전선 {
    평천: PuneHedgehog;
}

export interface Purple함북선 {
    풍산:       PuneHedgehog;
    부령:       PuneHedgehog;
    고무산시멘트공장: PuneHedgehog;
    하면:       PuneHedgehog;
    온성:       PuneHedgehog;
}

export interface 향원선 {
    신향원: PuneHedgehog;
}

export interface Purple허천선 {
    단천청년: PuneHedgehog;
    동대:   PuneHedgehog;
    상농:   PuneHedgehog;
    추동:   PuneHedgehog;
}

export interface Purple황해청년선 {
    학현: PuneHedgehog;
    하성: PuneHedgehog;
    신원: PuneHedgehog;
}

export interface 회둔선 {
    회둔: PuneHedgehog;
}

export interface Purple회령탄광선 {
    영수: PuneHedgehog;
}

export interface Purple회암선 {
    회암: PuneHedgehog;
    은덕: PuneHedgehog;
}

export interface Purple흥남항선 {
    룡성:  PuneHedgehog;
    흥남항: PuneHedgehog;
}

export interface 전용선_평양시려객운수종합기업소 {
    "평양 궤도전차 2호선": PuneHedgehog;
}

export interface Dprk폐지 {
    전용선:  Fluffy전용선;
    국철:   Fluffy국철;
    도시철도: Fluffy도시철도;
    사철:   Purple사철;
    지선:   Tentacled지선;
    궤도선:  Sticky궤도선;
    공영교통: Purple공영교통;
    열차페리: Purple열차페리;
}

export interface Purple공영교통 {
    궤도선: Tentacled궤도선;
}

export interface Tentacled궤도선 {
    함경북도: 궤도선_함경북도;
}

export interface 궤도선_함경북도 {
    "경성 라남 수압궤도": Purple기타;
}

export interface Fluffy국철 {
    간선: Fluffy간선;
    지선: Fluffy지선;
    버스: Purple버스;
}

export interface Fluffy간선 {
    "북한 철도성": Indigo북한철도성;
    북선척식철도:   북선척식철도;
}

export interface 북선척식철도 {
    무산선: Purple기타;
}

export interface Indigo북한철도성 {
    경의선:       PuneHedgehog;
    평라선:       PuneHedgehog;
    동해북부선:     Fluffy동해북부선;
    금강산청년선:    { [key: string]: PuneHedgehog };
    두만강선:      Purple두만강선;
    배천선:       PuneHedgehog;
    백두산청년선:    PuneHedgehog;
    백무선:       Purple기타;
    북부내륙선:     Purple기타;
    경원선:       Fluffy경원선;
    함북선:       PuneHedgehog;
    황해청년선:     Purple기타;
    토해선:       Purple기타;
    개천선:       Purple기타;
    "구 은률선":   Purple기타;
    은률선:       PuneHedgehog;
    남동선:       Purple기타;
    남양삼각선:     PuneHedgehog;
    평남선:       Purple기타;
    만포선:       PuneHedgehog;
    평덕선:       PuneHedgehog;
    무산선:       PuneHedgehog;
    룡성선:       PuneHedgehog;
    "차오카이 철로": PuneHedgehog;
    강원선:       Purple기타;
}

export interface Fluffy경원선 {
    "원산-갈마": Purple기타;
    가곡:      PuneHedgehog;
    삼방:      PuneHedgehog;
    세포청년:    PuneHedgehog;
}

export interface Fluffy동해북부선 {
    "군분선-감호": PuneHedgehog;
}

export interface Purple두만강선 {
    두만강: PuneHedgehog;
}

export interface Purple버스 {
    "조선총독부 철도국": Purple조선총독부철도국;
}

export interface Purple조선총독부철도국 {
    "조선총독부 철도국 연락자동차 종성경원선": PuneHedgehog;
    "조선총독부 철도국 연락자동차 청진웅기선": Purple기타;
    "조선총독부 철도국 연락자동차 종성온성선": Purple기타;
}

export interface Fluffy지선 {
    "북한 철도성":    Indecent북한철도성;
    "조선총독부 철도국": Fluffy조선총독부철도국;
}

export interface Indecent북한철도성 {
    박천선:      Purple기타;
    성산인입선:    Fluffy성산인입선;
    수화선:      Purple기타;
    옹진선:      Purple기타;
    청년이천선:    Fluffy청년이천선;
    "평양 덕산선": PuneHedgehog;
    신창삼각선:    PuneHedgehog;
    구성선:      Purple기타;
    구장삼각선:    PuneHedgehog;
    대택선:      PuneHedgehog;
    청단삼각선:    PuneHedgehog;
    덕달선:      Purple기타;
    덕현선:      PuneHedgehog;
    득장선:      PuneHedgehog;
    룡강선:      Purple기타;
    강계선:      Purple기타;
    매하선:      Purple기타;
    보천선:      Purple기타;
    서해리선:     Purple기타;
    잠진리선:     PuneHedgehog;
    부포선:      PuneHedgehog;
    삼등탄광선:    Purple기타;
    삼지연선:     PuneHedgehog;
    삼천포지선:    PuneHedgehog;
    서상삼각선:    PuneHedgehog;
    성평선:      PuneHedgehog;
    신흥선:      PuneHedgehog;
    장풍선:      Purple기타;
    안주탄광선:    Purple기타;
    문덕삼각선:    PuneHedgehog;
    온성선:      Purple기타;
    운산선:      Purple기타;
    장방삼각선:    PuneHedgehog;
    장진선:      PuneHedgehog;
    천내선:      Purple기타;
    장선강선:     Purple기타;
    청남선:      Purple기타;
    화풍선:      PuneHedgehog;
    화풍삼각선:    PuneHedgehog;
    고건원선:     PuneHedgehog;
    회령탄광선:    PuneHedgehog;
    강덕선:      PuneHedgehog;
    서호선:      Purple기타;
    장연선:      PuneHedgehog;
    원산항선:     PuneHedgehog;
    선봉항선:     PuneHedgehog;
    허천선:      PuneHedgehog;
    룡암선:      PuneHedgehog;
}

export interface Fluffy청년이천선 {
    송정: PuneHedgehog;
}

export interface Fluffy조선총독부철도국 {
    벽란도지선: Purple기타;
}

export interface Sticky궤도선 {
    강서궤도:        궤도선_강서궤도;
    생기령점토석탄주식회사: 궤도선_생기령점토석탄주식회사;
    주을삼림궤도:      주을삼림궤도;
}

export interface 궤도선_강서궤도 {
    강서궤도: Purple기타;
}

export interface 궤도선_생기령점토석탄주식회사 {
    "생기령 점토궤도": Purple기타;
}

export interface 주을삼림궤도 {
    주을삼림궤도: PuneHedgehog;
}

export interface Fluffy도시철도 {
    "평양시 려객운수종합기업소": 도시철도_평양시려객운수종합기업소;
}

export interface 도시철도_평양시려객운수종합기업소 {
    "평양 궤도전차 1호선": Purple기타;
}

export interface Purple사철 {
    조선철도주식회사:     { [key: string]: PuneHedgehog };
    "동만주철도 주식회사": 사철_동만주철도주식회사;
}

export interface 사철_동만주철도주식회사 {
    "동만주철도 본선": PuneHedgehog;
}

export interface Purple열차페리 {
    국철: 열차페리_국철;
}

export interface 열차페리_국철 {
    "조선총독부 철도국": 국철_조선총독부철도국;
}

export interface 국철_조선총독부철도국 {
    "조선총독부 철도국 정기항로 웅기청진선": Purple기타;
}

export interface Fluffy전용선 {
    "북한 철도성":          Ambitious북한철도성;
    궤도선:               Indigo궤도선;
    기타:                Purple기타;
    조선철도주식회사:          전용선_조선철도주식회사;
    "미쓰비시 석탄 광업 주식회사": 궤도선_미쓰비시석탄광업주식회사;
}

export interface Indigo궤도선 {
    "북한 철도성":          Hilarious북한철도성;
    "미쓰비시 석탄 광업 주식회사": 궤도선_미쓰비시석탄광업주식회사;
    한국철도공사:            궤도선_한국철도공사;
    영림창:               Purple기타;
}

export interface 궤도선_미쓰비시석탄광업주식회사 {
    "미쓰비시 광업 대보탄갱선": Purple기타;
}

export interface Hilarious북한철도성 {
    백무선:   Tentacled백무선;
    함북선:   Fluffy함북선;
    강원선:   Purple강원선;
    회령탄광선: Fluffy회령탄광선;
    평남선:   Purple평남선;
    경의선:   Purple경의선;
    안주탄광선: Purple안주탄광선;
    평덕선:   Purple평덕선;
    평라선:   리원철산선;
    룡암선:   Purple기타;
}

export interface Purple강원선 {
    원산: PuneHedgehog;
}

export interface Purple경의선 {
    신의주청년: Purple기타;
}

export interface Tentacled백무선 {
    굴송:  PuneHedgehog;
    연사:  Purple기타;
    삼유:  PuneHedgehog;
    도내:  PuneHedgehog;
    삼사:  PuneHedgehog;
    유평동: Purple기타;
    하황토: Purple기타;
    천수:  PuneHedgehog;
}

export interface Purple안주탄광선 {
    안주탄광궤도: Purple기타;
}

export interface Purple평남선 {
    조선탄광경편선: PuneHedgehog;
}

export interface Purple평덕선 {
    사동:  Purple기타;
    승호리: PuneHedgehog;
}

export interface Fluffy함북선 {
    부령: PuneHedgehog;
    금생: Purple기타;
    회령: Purple기타;
    풍산: PuneHedgehog;
    풍인: PuneHedgehog;
}

export interface Fluffy회령탄광선 {
    신계림: PuneHedgehog;
}

export interface 궤도선_한국철도공사 {
    호남선: Purple호남선;
}

export interface Purple호남선 {
    황등: PuneHedgehog;
}

export interface Ambitious북한철도성 {
    금강산청년선:    Fluffy금강산청년선;
    경의선:       Fluffy경의선;
    평덕선:       PuneHedgehog;
    백무선:       Sticky백무선;
    백마선:       백마선;
    평남선:       Fluffy평남선;
    룡성선:       Fluffy룡성선;
    장선강선:      장선강선;
    백두산청년선:    Fluffy백두산청년선;
    라진항선:      Fluffy라진항선;
    함북선:       Tentacled함북선;
    평라선:       { [key: string]: PuneHedgehog };
    대건선:       Fluffy대건선;
    만포선:       Fluffy만포선;
    남흥선:       Purple남흥선;
    강덕선:       Purple강덕선;
    봉산선:       Fluffy봉산선;
    "구 은률선":   Purple구은률선;
    구성선:       Purple구성선;
    평북선:       Fluffy평북선;
    다사도선:      Fluffy다사도선;
    대각선:       Purple대각선;
    대안선:       Fluffy대안선;
    덕성선:       Fluffy덕성선;
    두언선:       Purple기타;
    룡강선:       Purple룡강선;
    보천선:       Purple보천선;
    은률선:       Purple은률선;
    옹진선:       Fluffy옹진선;
    잠진리선:      Purple잠진리선;
    부포선:       Fluffy부포선;
    북부내륙선:     Fluffy북부내륙선;
    삼지연선:      삼지연선;
    송림선:       Purple송림선;
    강원선:       Fluffy강원선;
    경원선:       Tentacled경원선;
    천내선:       Purple천내선;
    추평선:       추평선;
    황해청년선:     Fluffy황해청년선;
    회령탄광선:     Purple회령탄광선;
    박천선:       Purple박천선;
    비날론선:      PuneHedgehog;
    마평선:       PuneHedgehog;
    청년팔원선:     PuneHedgehog;
    원산항:       PuneHedgehog;
    고참탄광선:     PuneHedgehog;
    "차오카이 철로": PuneHedgehog;
}

export interface Fluffy강원선 {
    갈마: PuneHedgehog;
}

export interface Tentacled경원선 {
    안변: PuneHedgehog;
    고산: PuneHedgehog;
    전탄: PuneHedgehog;
}

export interface Fluffy경의선 {
    신안주:    PuneHedgehog;
    청계:     Purple기타;
    황주공군기지: PuneHedgehog;
    손하:     PuneHedgehog;
    평산:     PuneHedgehog;
    정방:     PuneHedgehog;
    평양:     PuneHedgehog;
    순안:     PuneHedgehog;
    대동강:    PuneHedgehog;
    서포:     PuneHedgehog;
    서평양:    PuneHedgehog;
    사리원청년:  PuneHedgehog;
    어파:     PuneHedgehog;
    동사리원:   PuneHedgehog;
    신의주청년:  PuneHedgehog;
}

export interface Purple구은률선 {
    삼강: PuneHedgehog;
}

export interface Purple구성선 {
    연중: PuneHedgehog;
    신룡: Purple기타;
}

export interface Fluffy금강산청년선 {
    두포:    PuneHedgehog;
    금강산청년: PuneHedgehog;
}

export interface Purple남흥선 {
    남흥: PuneHedgehog;
}

export interface Fluffy다사도선 {
    룡암포: PuneHedgehog;
}

export interface Purple대각선 {
    대각: Purple기타;
}

export interface Fluffy대건선 {
    무진대: Purple기타;
}

export interface Fluffy대안선 {
    대안: PuneHedgehog;
}

export interface Fluffy덕성선 {
    북청: PuneHedgehog;
}

export interface Fluffy라진항선 {
    라진항: PuneHedgehog;
}

export interface Purple룡강선 {
    룡호: PuneHedgehog;
}

export interface Fluffy룡성선 {
    룡성: PuneHedgehog;
}

export interface Fluffy만포선 {
    천동: PuneHedgehog;
    고인: Purple기타;
    성간: Purple기타;
}

export interface Purple박천선 {
    박천자갈선: PuneHedgehog;
}

export interface Fluffy백두산청년선 {
    생장: PuneHedgehog;
    령하: Purple기타;
}

export interface 백마선 {
    백마:    PuneHedgehog;
    석하:    PuneHedgehog;
    백마자갈선: PuneHedgehog;
}

export interface Sticky백무선 {
    천수: PuneHedgehog;
    연사: PuneHedgehog;
    굴송: PuneHedgehog;
}

export interface Purple보천선 {
    량강대평: Purple기타;
}

export interface Fluffy봉산선 {
    서봉산: Purple기타;
}

export interface Fluffy부포선 {
    부포: PuneHedgehog;
}

export interface Fluffy북부내륙선 {
    후주청년: PuneHedgehog;
    문악:   PuneHedgehog;
}

export interface Fluffy옹진선 {
    왕신: PuneHedgehog;
}

export interface Purple은률선 {
    철광: PuneHedgehog;
    운성: PuneHedgehog;
}

export interface Purple잠진리선 {
    잠진리: PuneHedgehog;
}

export interface Fluffy평남선 {
    "온천 비행장": PuneHedgehog;
}

export interface Fluffy평북선 {
    백운: Purple기타;
    서부: PuneHedgehog;
}

export interface Tentacled함북선 {
    "웅상 목재가공공업구": PuneHedgehog;
    금생:           Purple기타;
    회령:           PuneHedgehog;
    학송:           PuneHedgehog;
    신학포:          PuneHedgehog;
    훈융:           PuneHedgehog;
    선봉:           PuneHedgehog;
}

export interface Fluffy황해청년선 {
    하성: PuneHedgehog;
}

export interface 전용선_조선철도주식회사 {
    사해선: Purple사해선;
}

export interface Purple사해선 {
    구하성: PuneHedgehog;
}

export interface Tentacled지선 {
    "미쓰비시 석탄 광업 주식회사": 궤도선_미쓰비시석탄광업주식회사;
    "압록강 임시가선":        Purple기타;
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
    삭도:   미래_삭도;
    기타:   미래_기타;
}

export interface 미래_국철 {
    간선:   Tentacled간선;
    지선:   Sticky지선;
    준고속선: Purple준고속선;
    고속선:  Purple고속선;
}

export interface Tentacled간선 {
    한국철도공사:   Purple한국철도공사;
    "북한 철도성": Cunning북한철도성;
}

export interface Cunning북한철도성 {
    경원선: Purple기타;
}

export interface Purple한국철도공사 {
    충북선:   Purple충북선;
    경부선:   병원_Class;
    경원선:   Purple기타;
    보성목포선: Purple기타;
    중부내륙선: Purple기타;
    여주원주선: Purple기타;
    동해북부선: Purple기타;
    춘천속초선: Purple기타;
    동해선:   Purple기타;
}

export interface 병원_Class {
}

export interface Purple충북선 {
    청주공항: PuneHedgehog;
}

export interface Purple고속선 {
    한국철도공사: Fluffy한국철도공사;
}

export interface Fluffy한국철도공사 {
    호남고속선: Purple기타;
}

export interface Purple준고속선 {
    한국철도공사: Tentacled한국철도공사;
}

export interface Tentacled한국철도공사 {
    서해선: Purple기타;
    중앙선: PuneHedgehog;
}

export interface Sticky지선 {
    한국철도공사: Sticky한국철도공사;
}

export interface Sticky한국철도공사 {
    군산항선:       Purple군산항선;
    부전선:        Purple부전선;
    대전철도차량정비단선: PuneHedgehog;
    평택선:        Purple기타;
    평택고속연결선:    Purple기타;
    화성고속연결선:    Purple기타;
}

export interface Purple군산항선 {
    군산항: Purple기타;
}

export interface Purple부전선 {
    "부전-가야": 부전가야;
}

export interface 부전가야 {
    _전동차: PuneHedgehog;
}

export interface 미래_궤도선 {
    인천교통공사:  Purple인천교통공사;
    순천에코트랜스: Purple순천에코트랜스;
}

export interface Purple순천에코트랜스 {
    순천만PRT: PuneHedgehog;
}

export interface Purple인천교통공사 {
    월미바다열차: PuneHedgehog;
}

export interface 미래_기타 {
    신분당선: Purple기타;
}

export interface 미래_도시철도 {
    인천교통공사:           Fluffy인천교통공사;
    "우이신설경전철 주식회사":   Purple우이신설경전철주식회사;
    동북선도시철도주식회사:      도시철도_동북선도시철도주식회사;
    대구도시철도공사:         Purple대구도시철도공사;
    "서울시메트로 9호선":     Purple서울시메트로9호선;
    부산교통공사:           Purple부산교통공사;
    한국철도공사:           { [key: string]: Purple기타 };
    광주광역시도시철도공사:      Purple광주광역시도시철도공사;
    서울교통공사:           { [key: string]: Purple기타 };
    "에스지레일 주식회사":     { [key: string]: Purple기타 };
    "넥스트레인 주식회사":     넥스트레인주식회사;
    옥정포천선:            PuneHedgehog;
    "서울 경전철 위례선":     Purple기타;
    "서울 경전철 위례선 지선":  PuneHedgehog;
    별내선:              PuneHedgehog;
    동탄인덕원선:           Purple기타;
    "동탄인덕원선 지선":      PuneHedgehog;
    "판교 랜드마크 트램 기지선": PuneHedgehog;
}

export interface Purple광주광역시도시철도공사 {
    "광주 도시철도 2호선":    PuneHedgehog;
    "광주 도시철도 2호선 지선": Purple기타;
}

export interface 넥스트레인주식회사 {
    "신안산선 지선": PuneHedgehog;
    신안산선:      Purple기타;
}

export interface Purple대구도시철도공사 {
    "대구 도시철도 1호선": 대구도시철도1호선;
}

export interface 대구도시철도1호선 {
    "안심-하양": Purple기타;
}

export interface 도시철도_동북선도시철도주식회사 {
    "서울 경전철 동북선": Purple기타;
}

export interface Purple부산교통공사 {
    "양산 도시철도":           Purple기타;
    "부산 도시철도 사상하단선":     Purple기타;
    "부산 도시철도 사상하단선 기지선": PuneHedgehog;
}

export interface Purple서울시메트로9호선 {
    "서울시메트로 9호선": Fluffy서울시메트로9호선;
}

export interface Fluffy서울시메트로9호선 {
    고덕강일: Purple기타;
}

export interface Purple우이신설경전철주식회사 {
    "서울 경전철 우이신설선": PuneHedgehog;
}

export interface Fluffy인천교통공사 {
    "서울교통공사 7호선":  서울교통공사7호선;
    "인천 도시철도 1호선": Purple기타;
}

export interface 서울교통공사7호선 {
    "석남-7호선종점": Purple기타;
}

export interface 미래_삭도 {
    "강화석모해상케이블카 주식회사":  삭도_강화석모해상케이블카주식회사;
    "포항영일만해양케이블카 주식회사": 삭도_포항영일만해양케이블카주식회사;
}

export interface 삭도_강화석모해상케이블카주식회사 {
    강화석모해상케이블카: PuneHedgehog;
}

export interface 삭도_포항영일만해양케이블카주식회사 {
    "포항 영일만 해양 케이블카": PuneHedgehog;
}

export interface 미성선 {
    국철:            미성선_국철;
    도시철도:          미성선_도시철도;
    "단양석탄공업 주식회사": 단양석탄공업주식회사;
    철도청:           미성선_철도청;
    사철:            미성선_사철;
    궤도선:           미성선_궤도선;
    전용선:           미성선_전용선;
}

export interface 미성선_국철 {
    지선:          Indigo지선;
    철도청:         { [key: string]: Purple기타 };
    한국철도공사:      국철_한국철도공사;
    "조선총독부 교통국": 국철_조선총독부교통국;
    고속선:         Fluffy고속선;
}

export interface Fluffy고속선 {
    한국철도공사: Indigo한국철도공사;
}

export interface Indigo한국철도공사 {
    경부고속선: Purple경부고속선;
}

export interface Purple경부고속선 {
    "광명-화성IEC": Purple기타;
}

export interface 국철_조선총독부교통국 {
    동해중부선: PuneHedgehog;
    대삼선:   Purple기타;
    경전서부선: Purple기타;
}

export interface Indigo지선 {
    철도청: Purple철도청;
}

export interface Purple철도청 {
    회동선: Purple기타;
}

export interface 국철_한국철도공사 {
    영동선:   Purple영동선;
    호남선:   Fluffy호남선;
    동해북부선: Purple기타;
}

export interface Purple영동선 {
    "법전-춘양": Purple기타;
    "양원-승부": PuneHedgehog;
}

export interface Fluffy호남선 {
    "1960년이전_계획선?": PuneHedgehog;
}

export interface 미성선_궤도선 {
    서울특별시: Purple서울특별시;
}

export interface Purple서울특별시 {
    "서울전차 덕소선": Purple기타;
}

export interface 단양석탄공업주식회사 {
    "단양석탄공업 전용철도": Purple기타;
}

export interface 미성선_도시철도 {
    창원도시철도: { [key: string]: Purple기타 };
    부산교통공사: Fluffy부산교통공사;
}

export interface Fluffy부산교통공사 {
    "부산 도시철도 2호선": Purple부산도시철도2호선;
}

export interface Purple부산도시철도2호선 {
    북부: Purple기타;
}

export interface 미성선_사철 {
    궤도선: Indecent궤도선;
}

export interface Indecent궤도선 {
    "김제궤도 주식회사": Purple김제궤도주식회사;
}

export interface Purple김제궤도주식회사 {
    김제궤도: PuneHedgehog;
}

export interface 미성선_전용선 {
    "조선총독부 교통국": 전용선_조선총독부교통국;
}

export interface 전용선_조선총독부교통국 {
    동해중부선: Purple동해중부선;
}

export interface Purple동해중부선 {
    청하자갈선: PuneHedgehog;
}

export interface 미성선_철도청 {
    단양탄광선: Purple기타;
}

export interface Rok영업 {
    국철:   Tentacled국철;
    궤도선:  Ambitious궤도선;
    도시철도: Tentacled도시철도;
    기타:   영업_기타;
    간선:   영업_간선;
    삭도:   Fluffy삭도;
    강삭철도: Fluffy강삭철도;
    열차페리: 영업_열차페리;
    전용선:  Sticky전용선;
}

export interface 영업_간선 {
    "서해철도 주식회사":   간선_서해철도주식회사;
    "서부광역철도 주식회사": 간선_서부광역철도주식회사;
    한국철도공사:        Indecent한국철도공사;
}

export interface 간선_서부광역철도주식회사 {
    소사대곡선: Purple소사대곡선;
}

export interface Purple소사대곡선 {
    "신능곡-신김포":  Purple기타;
    "신김포-신능곡":  Purple기타;
    "신대곡종점-대곡": PuneHedgehog;
    "신김포-원종":   Purple기타;
    "신소사-부천종":  PuneHedgehog;
    "원종-부천종":   PuneHedgehog;
}

export interface 간선_서해철도주식회사 {
    소사원시선: Purple소사원시선;
    소사대곡선: 서해철도주식회사_소사대곡선;
}

export interface 서해철도주식회사_소사대곡선 {
    "신소사-부천종": PuneHedgehog;
}

export interface Purple소사원시선 {
    "소사원시선종점-원시": 소사원시선종점원시;
    "신신현-하중":     PuneHedgehog;
    "선부-신초지":     PuneHedgehog;
    "선부-달미":      PuneHedgehog;
    "달미-시흥능":     PuneHedgehog;
    "시흥능-시흥청":    PuneHedgehog;
    "시흥청-하중":     PuneHedgehog;
    "신신현-신신천":    Purple기타;
    "신신천-시흥대":    PuneHedgehog;
    "시흥대-소새울":    PuneHedgehog;
    "소새울-신소사":    PuneHedgehog;
    "시우-원시":      PuneHedgehog;
    "시우-신초지":     PuneHedgehog;
}

export interface 소사원시선종점원시 {
    원시: PuneHedgehog;
}

export interface Indecent한국철도공사 {
    소사대곡선: 한국철도공사_소사대곡선;
}

export interface 한국철도공사_소사대곡선 {
    "대곡-능곡":   소사대곡선_대곡능곡;
    "신김포-신능곡": PuneHedgehog;
}

export interface 소사대곡선_대곡능곡 {
    서해선: PuneHedgehog;
}

export interface Fluffy강삭철도 {
    "주식회사 강원랜드": 강삭철도_주식회사강원랜드;
}

export interface 강삭철도_주식회사강원랜드 {
    "하이원추추파크 인클라인 트레인": PuneHedgehog;
}

export interface Tentacled국철 {
    간선:   Sticky간선;
    지선:   Indecent지선;
    버스:   Fluffy버스;
    도시철도: 국철_도시철도;
    준고속선: Fluffy준고속선;
    궤도선:  Hilarious궤도선;
    고속선:  Tentacled고속선;
    기타:   국철_기타;
    전용선:  Tentacled전용선;
}

export interface Sticky간선 {
    한국철도공사: Hilarious한국철도공사;
}

export interface Hilarious한국철도공사 {
    호남선:   Tentacled호남선;
    경인선:   { [key: string]: PuneHedgehog };
    영동선:   Fluffy영동선;
    경북선:   Purple경북선;
    태백선:   Purple태백선;
    충북선:   Fluffy충북선;
    경춘선:   Purple경춘선;
    중앙선:   PuneHedgehog;
    원주강릉선: 원주강릉선;
    동해선:   PuneHedgehog;
    경부선:   Purple경부선;
    경강선:   Purple경강선;
    전라선:   PuneHedgehog;
    장항선:   Purple장항선;
    경전선:   Purple경전선;
    중부내륙선: Purple중부내륙선;
    동해북부선: Tentacled동해북부선;
    경의선:   PuneHedgehog;
    경원선:   Sticky경원선;
    대구선:   Purple대구선;
}

export interface Purple경강선 {
    "신판교-신이매":   PuneHedgehog;
    "신이매-삼동":    Purple기타;
    "삼동-경광주":    Purple기타;
    "초월-경광주":    Purple기타;
    "곤지암-도예촌":   Purple기타;
    "도예촌-이천":    Purple기타;
    "이천-부발":     Purple기타;
    "세종릉-여주":    Purple기타;
    "곤지암-초월":    Purple기타;
    "부발-세종릉":    Purple기타;
    "여주-경강선종점":  PuneHedgehog;
    "신판교종점-신판교": PuneHedgehog;
    "야탑-삼동":     PuneHedgehog;
}

export interface Purple경부선 {
    "노량진-대방":   PuneHedgehog;
    "신도림-구로":   PuneHedgehog;
    "영등포-신도림":  PuneHedgehog;
    "신길-영등포":   PuneHedgehog;
    "용산-노량진":   PuneHedgehog;
    "대방-신길":    PuneHedgehog;
    "노량진-용산":   노량진용산;
    "가산디-구로":   PuneHedgehog;
    "구로-가산디":   PuneHedgehog;
    "서울-용산":    서울용산;
    "용산-서울":    용산서울;
    "천안-두정":    천안두정;
    "두정-직산":    Purple기타;
    "직산-성환":    Purple기타;
    "성환-평택":    Purple기타;
    "직산-두정":    Purple기타;
    "대신-김천":    Purple기타;
    "김천-대신":    Purple기타;
    "동대구-대구":   Purple기타;
    "삼랑진-원동":   Purple기타;
    "원동-삼랑진":   Purple기타;
    "사상-부산진":   사상부산진;
    "부산진-부산진":  부산진부산진;
    "조치원-내판":   Purple기타;
    "내판-조치원":   Purple기타;
    "시흥연-금천구":  금천구시흥연;
    "금천구-시흥연":  금천구시흥연;
    "서정리-송탄":   PuneHedgehog;
    약목:         PuneHedgehog;
    "제목 없는 폴더": 제목없는폴더;
    "병점-세마":    PuneHedgehog;
    "세마-오산대":   PuneHedgehog;
    "오산대-오산":   PuneHedgehog;
    "오산-진위":    Purple기타;
    "진위-송탄":    Purple기타;
    "송탄-서정리":   PuneHedgehog;
    "서정리-지제":   Purple기타;
    "지제-평택":    Purple기타;
    "평택-성환":    Purple기타;
    "성환-직산":    Purple기타;
    "평택-지제":    Purple기타;
    "지제-서정리":   Purple기타;
    "송탄-진위":    Purple기타;
    "진위-오산":    Purple기타;
    "오산-오산대":   PuneHedgehog;
    "오산대-세마":   PuneHedgehog;
    "세마-병점":    PuneHedgehog;
    용산:         PuneHedgehog;
    서울:         PuneHedgehog;
    "남영-용산":    PuneHedgehog;
    "남영-지하서":   PuneHedgehog;
    "구로-신도림":   PuneHedgehog;
    "가산디-독산":   PuneHedgehog;
    "독산-금천구":   PuneHedgehog;
    "금천구-석수":   PuneHedgehog;
    "석수-관악":    PuneHedgehog;
    "관악-안양":    PuneHedgehog;
    "안양-명학":    PuneHedgehog;
    "명학-금정":    PuneHedgehog;
    "금정-군포":    PuneHedgehog;
    "군포-당정":    PuneHedgehog;
    "당정-의왕":    PuneHedgehog;
    "의왕-성균관":   Purple기타;
    "성균관-화서":   PuneHedgehog;
    "화서-수원":    PuneHedgehog;
    "수원-세류":    PuneHedgehog;
    "세류-병점":    Purple기타;
    "병점-세류":    Purple기타;
    "세류-수원":    PuneHedgehog;
    "수원-화서":    PuneHedgehog;
    "화서-성균관":   PuneHedgehog;
    "성균관-의왕":   Purple기타;
    "의왕-당정":    PuneHedgehog;
    "당정-군포":    PuneHedgehog;
    "군포-금정":    PuneHedgehog;
    "금정-명학":    PuneHedgehog;
    "명학-안양":    PuneHedgehog;
    "안양-관악":    PuneHedgehog;
    "관악-석수":    PuneHedgehog;
    "석수-금천구":   PuneHedgehog;
    "금천구-독산":   PuneHedgehog;
    "독산-가산디":   PuneHedgehog;
    금정:         PuneHedgehog;
    "안양-금천구":   Purple기타;
    "금천구-안양":   Purple기타;
    "영등포-노량진":  Purple기타;
    "금천구-영등포":  Purple기타;
    "안양-군포":    Purple기타;
    "군포-의왕":    Purple기타;
    "평택-서정리":   Purple기타;
    "송탄-오산":    Purple기타;
    "오산-병점":    Purple기타;
    "병점-수원":    Purple기타;
    "수원-의왕":    Purple기타;
    "회덕-대전조":   Purple기타;
    "대전조-대전":   Purple기타;
    "부강-매포":    Purple기타;
    "매포-신탄진":   Purple기타;
    "서창-조치원":   PuneHedgehog;
    "대전-대전조":   Purple기타;
    "대전조-회덕":   Purple기타;
    "회덕-신탄진":   Purple기타;
    "신탄진-매포":   Purple기타;
    "매포-부강":    Purple기타;
    "조치원-서창":   PuneHedgehog;
    "천안-소정리":   Purple기타;
    "소정리-전의":   Purple기타;
    "전의-전동":    Purple기타;
    "전동-서창":    Purple기타;
    "내판-부강":    Purple기타;
    "옥천-세천":    Purple기타;
    "세천-대전":    Purple기타;
    "이원-옥천":    Purple기타;
    "각계-심천":    Purple기타;
    "옥천-이원":    Purple기타;
    "심천-각계":    Purple기타;
    "각계-영동":    Purple기타;
    "영동-각계":    Purple기타;
    "심천-지탄":    Purple기타;
    "지탄-이원":    Purple기타;
    "대전-세천":    Purple기타;
    "세천-옥천":    Purple기타;
    "황간-영동":    Purple기타;
    "영동-황간":    Purple기타;
    "직지사-신암":   Purple기타;
    "신암-직지사":   Purple기타;
    "추풍령-신암":   Purple기타;
    "황간-추풍령":   Purple기타;
    "김천-직지사":   Purple기타;
    "신암-추풍령":   Purple기타;
    "직지사-김천":   Purple기타;
    김천:         PuneHedgehog;
    "구미-사곡":    Purple기타;
    "사곡-약목":    Purple기타;
    "약목-사곡":    Purple기타;
    "왜관-약목":    Purple기타;
    "약목-왜관":    Purple기타;
    "대구-동대구":   Purple기타;
    "가천-고모":    PuneHedgehog;
    "고모-동대구":   Purple기타;
    "동대구-고모":   Purple기타;
    "고모-가천":    PuneHedgehog;
    "청도-남성현":   Purple기타;
    "경산-가천":    Purple기타;
    "가천-경산":    Purple기타;
    "남성현-청도":   Purple기타;
    "삼성-경산":    Purple기타;
    "삼랑진-미전":   PuneHedgehog;
    "물금-원동":    Purple기타;
    "원동-물금":    Purple기타;
    "부산-부산진":   PuneHedgehog;
    "부산진-사상":   Purple기타;
    "부산-경부선종점": PuneHedgehog;
    부산:         PuneHedgehog;
    부곡차량:       PuneHedgehog;
    의왕:         PuneHedgehog;
    대구차량:       PuneHedgehog;
    동대구:        PuneHedgehog;
    "신거-청도":    Purple기타;
    대전조차량:      PuneHedgehog;
    대전조차장:      PuneHedgehog;
    김천차량:       PuneHedgehog;
    "대신-아포":    Purple기타;
    "아포-구미":    Purple기타;
    "연화-왜관":    Purple기타;
    "신동-연화":    Purple기타;
    "지천-신동":    Purple기타;
    "신동-지천":    Purple기타;
    "대구-서대구":   Purple기타;
    "서대구-대구":   Purple기타;
    "서대구-지천":   Purple기타;
    "지천-서대구":   Purple기타;
    "남성현-삼성":   Purple기타;
    "삼성-남성현":   Purple기타;
    "청도-신거":    Purple기타;
    "상동-신거":    Purple기타;
    "미전-밀양":    Purple기타;
    "화명-물금":    Purple기타;
    "화명-구포":    Purple기타;
    "구포-사상":    Purple기타;
}

export interface 금천구시흥연 {
    _공항선: PuneHedgehog;
}

export interface 노량진용산 {
    "1": PuneHedgehog;
    _1선: PuneHedgehog;
}

export interface 부산진부산진 {
    국철: PuneHedgehog;
}

export interface 사상부산진 {
    _화물: Purple기타;
}

export interface 서울용산 {
    _1번: PuneHedgehog;
}

export interface 용산서울 {
    _강릉선: PuneHedgehog;
}

export interface 제목없는폴더 {
    밀양강철교:   PuneHedgehog;
    "밀양-상동": Purple기타;
}

export interface 천안두정 {
    "1": PuneHedgehog;
}

export interface Purple경북선 {
    "김천-옥산": Purple기타;
    "옥산-청리": Purple기타;
    "청리-상주": Purple기타;
    "상주-백원": Purple기타;
    "백원-함창": Purple기타;
    "함창-백원": Purple기타;
    "백원-상주": Purple기타;
    "상주-청리": Purple기타;
    "청리-옥산": Purple기타;
    "옥산-김천": Purple기타;
    "함창-점촌": Purple기타;
    "점촌-용궁": Purple기타;
    "용궁-개포": Purple기타;
    "개포-예천": Purple기타;
    "예천-어등": Purple기타;
    "어등-영주": Purple기타;
    "영주-어등": Purple기타;
    "어등-예천": Purple기타;
    "예천-개포": Purple기타;
    "개포-용궁": Purple기타;
    "용궁-점촌": PuneHedgehog;
    "점촌-함창": PuneHedgehog;
    영주:      PuneHedgehog;
}

export interface Sticky경원선 {
    "왕십리-청량리":   왕십리청량리;
    "용산-이촌":     PuneHedgehog;
    "응봉-왕십리":    PuneHedgehog;
    "청량리-왕십리":   PuneHedgehog;
    "응봉-옥수":     PuneHedgehog;
    "회기-외대앞":    PuneHedgehog;
    "방학-도봉":     PuneHedgehog;
    "의정부-회룡":    PuneHedgehog;
    "회룡-망월사":    PuneHedgehog;
    "망월사-도봉산":   PuneHedgehog;
    "도봉산-도봉":    PuneHedgehog;
    "방학-창동":     PuneHedgehog;
    "창동-녹천":     PuneHedgehog;
    "녹천-월계":     PuneHedgehog;
    "월계-광운대":    PuneHedgehog;
    "광운대-석계":    PuneHedgehog;
    "석계-신이문":    PuneHedgehog;
    "신이문-외대앞":   PuneHedgehog;
    "외대앞-회기":    PuneHedgehog;
    "회기-1지청":    PuneHedgehog;
    "의정부-가능":    PuneHedgehog;
    "가능-녹양":     PuneHedgehog;
    "녹양-양주":     PuneHedgehog;
    "양주-마전":     PuneHedgehog;
    "덕계-덕정":     PuneHedgehog;
    "덕정-지행":     Purple기타;
    "지행-동두중":    PuneHedgehog;
    "동두중-보산":    PuneHedgehog;
    "보산-동두천":    PuneHedgehog;
    "덕계-마전":     Purple기타;
    "1지청-회기":    PuneHedgehog;
    "연천-신망리":    Purple기타;
    "대광리-신탄리":   Purple기타;
    "신탄리-백마고":   Purple기타;
    "신망리-대광리":   Purple기타;
    "백마고-경원선종점": PuneHedgehog;
    "서빙고-이촌":    PuneHedgehog;
    "한남-서빙고":    PuneHedgehog;
    "옥수-한남":     PuneHedgehog;
}

export interface 왕십리청량리 {
    _분당: PuneHedgehog;
}

export interface Purple경전선 {
    "한림정-낙동강": 낙동강한림정;
    "낙동강-한림정": 낙동강한림정;
    "순천-원창":   Purple기타;
    "원창-구룡":   Purple기타;
    "구룡-벌교":   Purple기타;
    "벌교-조성":   Purple기타;
    "조성-예당":   Purple기타;
    "예당-득량":   Purple기타;
    "득량-보성":   Purple기타;
    "보성-광곡":   Purple기타;
    "광곡-보성":   Purple기타;
    "보성-득량":   Purple기타;
    "득량-예당":   Purple기타;
    "예당-조성":   Purple기타;
    "조성-벌교":   Purple기타;
    "벌교-구룡":   Purple기타;
    "구룡-원창":   Purple기타;
    "원창-순천":   Purple기타;
    "광곡-명봉":   Purple기타;
    "명봉-이양":   Purple기타;
    "이양-능주":   Purple기타;
    "능주-화순":   Purple기타;
    "화순-남평":   Purple기타;
    "남평-효천":   Purple기타;
    "효천-서광주":  Purple기타;
    "서광주-동송정": Purple기타;
    "동송정-북송분": PuneHedgehog;
    "북송분-동송정": PuneHedgehog;
    "동송정-서광주": Purple기타;
    "서광주-효천":  Purple기타;
    "효천-남평":   Purple기타;
    "남평-화순":   Purple기타;
    "화순-능주":   Purple기타;
    "능주-이양":   Purple기타;
    "이양-명봉":   Purple기타;
    "명봉-광곡":   Purple기타;
    "북송분-광주송": PuneHedgehog;
    "평화-순천":   Purple기타;
    "광양-평화":   Purple기타;
    "진상-광양":   Purple기타;
    "횡천-하동":   Purple기타;
    "진상-하동":   Purple기타;
    "낙동강-삼랑진": PuneHedgehog;
    "삼랑진-낙동강": PuneHedgehog;
    "횡천-북천":   Purple기타;
    "북천-완사":   Purple기타;
    "한림정-진영":  Purple기타;
    "창원중-진례":  Purple기타;
    "진례-진영":   Purple기타;
    "중리-함안":   Purple기타;
    "중리-마산":   Purple기타;
    "마산-창원":   Purple기타;
    "창원-용강":   Purple기타;
    "용강-창원중":  Purple기타;
    "함안-군북":   Purple기타;
    "군북-반성":   Purple기타;
    "반성-진주":   Purple기타;
    "완사-진주":   Purple기타;
}

export interface 낙동강한림정 {
    _경전: Purple기타;
}

export interface Purple경춘선 {
    "신내-망우":    PuneHedgehog;
    "상봉-망우":    상봉망우;
    "갈매-신내":    PuneHedgehog;
    "별내-갈매":    PuneHedgehog;
    "청평-상천":    Purple기타;
    "상천-가평":    Purple기타;
    "가평-굴봉산":   Purple기타;
    "굴봉산-백양리":  PuneHedgehog;
    "백양리-강촌":   Purple기타;
    "강촌-김유정":   Purple기타;
    "김유정-남춘천":  Purple기타;
    "남춘천-춘천":   PuneHedgehog;
    "대성리-마석":   Purple기타;
    "마석-천마산":   PuneHedgehog;
    "천마산-평내호":  Purple기타;
    "평내호-금곡":   Purple기타;
    "금곡-사릉":    Purple기타;
    "사릉-퇴계원":   Purple기타;
    "퇴계원-별내":   PuneHedgehog;
    "춘천-경춘선종점": PuneHedgehog;
    "대성리-청평":   Purple기타;
}

export interface 상봉망우 {
    _경춘: PuneHedgehog;
}

export interface Purple대구선 {
    "금호-북영분": PuneHedgehog;
    "금호-하양":  PuneHedgehog;
    "하양-청천":  Purple기타;
    "청천-금강":  Purple기타;
    "금강-청천":  Purple기타;
    "청천-하양":  Purple기타;
    "하양-금호":  PuneHedgehog;
    "북영분-영천": PuneHedgehog;
    "영천-북영분": PuneHedgehog;
    "북영분-금호": PuneHedgehog;
    "가천-금강":  Purple기타;
    "금강-가천":  Purple기타;
}

export interface Tentacled동해북부선 {
    "제진-군분선":     Purple기타;
    "동해북부선시점-제진": PuneHedgehog;
}

export interface Fluffy영동선 {
    "영주-북주분":  PuneHedgehog;
    "북주분-문단":  Purple기타;
    "문단-봉화":   Purple기타;
    "봉화-거촌":   Purple기타;
    "거촌-봉성":   Purple기타;
    "봉성-법전":   Purple기타;
    "법전-봉성":   Purple기타;
    "봉성-거촌":   Purple기타;
    "거촌-봉화":   Purple기타;
    "봉화-문단":   Purple기타;
    "문단-북주분":  Purple기타;
    "법전-춘양":   Purple기타;
    "춘양-녹동":   Purple기타;
    "녹동-임기":   Purple기타;
    "임기-현동":   Purple기타;
    "현동-분천":   Purple기타;
    "분천-비동":   Purple기타;
    "양원-비동":   PuneHedgehog;
    "비동-분천":   Purple기타;
    "분천-현동":   Purple기타;
    "현동-임기":   Purple기타;
    "임기-녹동":   Purple기타;
    "녹동-춘양":   Purple기타;
    "춘양-법전":   Purple기타;
    "양원-승부":   Purple기타;
    "승부-석포":   Purple기타;
    "석포-승부":   Purple기타;
    "솔안-동백산":  Purple기타;
    "도계솔-솔안":  Purple기타;
    "솔안-도계솔":  Purple기타;
    "동백산-솔안":  Purple기타;
    "동백산-백산":  PuneHedgehog;
    "백산-동백산":  PuneHedgehog;
    "백산-철암":   Purple기타;
    "철암-백산":   Purple기타;
    "철암-동점":   Purple기타;
    "동점-철암":   Purple기타;
    "동점-석포":   Purple기타;
    "석포-동점":   Purple기타;
    "도계솔-도계":  PuneHedgehog;
    "도계-도계솔":  PuneHedgehog;
    "도계-고사리":  Purple기타;
    "고사리-하고사": PuneHedgehog;
    "하고사-고사리": PuneHedgehog;
    "고사리-도계":  Purple기타;
    "하고사-마차리": Purple기타;
    "마차리-신기":  Purple기타;
    "신기-상정":   Purple기타;
    "상정-미로":   Purple기타;
    "미로-도경리":  Purple기타;
    "도경리-미로":  Purple기타;
    "미로-상정":   Purple기타;
    "상정-신기":   Purple기타;
    "신기-마차리":  Purple기타;
    "마차리-하고사": Purple기타;
    "도경리-동해":  Purple기타;
    "동해-묵호":   Purple기타;
    "묵호-망상":   Purple기타;
    "망상해-옥계":  Purple기타;
    "옥계-정동진":  Purple기타;
    "정동진-안인":  Purple기타;
    "안인-정동진":  Purple기타;
    "정동진-옥계":  Purple기타;
    "옥계-망상해":  Purple기타;
    "망상해-망상":  PuneHedgehog;
    "망상-묵호":   Purple기타;
    "묵호-동해":   Purple기타;
    "동해-도경리":  Purple기타;
    "안인-청량C":  PuneHedgehog;
    "청량C-청량신": PuneHedgehog;
    동백산:       PuneHedgehog;
    "승부-양원":   Purple기타;
    "청량C-안인":  PuneHedgehog;
}

export interface 원주강릉선 {
    "대관령-남강릉":    PuneHedgehog;
    "만종-횡성":      PuneHedgehog;
    "강릉-청량신":     Purple기타;
    "서원주-만종":     Purple기타;
    "강릉-원주강릉선종점": PuneHedgehog;
    "강릉분-남강릉":    PuneHedgehog;
    "강릉분-청량B":    PuneHedgehog;
    "청량B-청량신":    PuneHedgehog;
    "서원주-동화":     PuneHedgehog;
}

export interface Purple장항선 {
    "신창-온양온":  Purple기타;
    "온양온-신창":  온양온신창;
    "대야-군산분":  PuneHedgehog;
    "익산-목천신":  PuneHedgehog;
    "대야-목천신":  Purple기타;
    "장항-군산":   Purple기타;
    "군산분-군산":  Purple기타;
    "판교-웅천":   Purple기타;
    "판교-서천":   Purple기타;
    "서천-장항":   Purple기타;
    "남포-웅천":   Purple기타;
    "신성-광천":   Purple기타;
    "광천-원죽":   Purple기타;
    "원죽-청소":   Purple기타;
    "청소-주포":   Purple기타;
    "남포-대천":   Purple기타;
    "대천-주포":   Purple기타;
    "주포-청소":   Purple기타;
    "청소-원죽":   Purple기타;
    "원죽-광천":   Purple기타;
    "광천-신성":   Purple기타;
    "신성-홍성":   Purple기타;
    "도고온-신창":  Purple기타;
    "신창-도고온":  Purple기타;
    "예산-신례원":  Purple기타;
    "신례원-도고온": Purple기타;
    "화양-삽교":   Purple기타;
    "홍성-화양":   Purple기타;
    "삽교-예산":   Purple기타;
    천안차량:      PuneHedgehog;
    "아산-쌍용나":  PuneHedgehog;
    "쌍용나-봉명":  PuneHedgehog;
    "봉명-천안":   PuneHedgehog;
    신창:        PuneHedgehog;
    "아산-탕정":   PuneHedgehog;
    "탕정-배방":   Purple기타;
    "아산풍-아산":  PuneHedgehog;
    "아산풍-온양온": PuneHedgehog;
}

export interface 온양온신창 {
    _장항: PuneHedgehog;
}

export interface Purple중부내륙선 {
    "아미-부발": Purple기타;
    "아미-가남": PuneHedgehog;
    "가남-아미": PuneHedgehog;
    "금가-충주": PuneHedgehog;
    "부발-아미": Purple기타;
}

export interface Fluffy충북선 {
    "청주-오송":   Purple기타;
    "오송-조치원":  Purple기타;
    "청주-오근장":  Purple기타;
    "오근장-청주공": PuneHedgehog;
    "청주공-내수":  Purple기타;
    "내수-증평":   Purple기타;
    "보천-음성":   Purple기타;
    "달천-충주":   Purple기타;
    "목행-동량":   Purple기타;
    "동량-삼탄":   Purple기타;
    "삼탄-공전":   Purple기타;
    "공전-봉양":   Purple기타;
    "음성-보천":   Purple기타;
    "주덕-소이":   Purple기타;
    "달천-주덕":   Purple기타;
    "충주-달천":   Purple기타;
    "동량-목행":   Purple기타;
    "삼탄-동량":   Purple기타;
    "공전-삼탄":   Purple기타;
    "봉양-공전":   Purple기타;
    "목행-충주":   Purple기타;
    "소이-음성":   Purple기타;
    "보천-도안":   Purple기타;
    "도안-증평":   Purple기타;
}

export interface Purple태백선 {
    "제천-입석리":  Purple기타;
    "입석리-쌍룡":  Purple기타;
    "쌍룡-연당":   Purple기타;
    "연당-청령포":  Purple기타;
    "청령포-영월":  PuneHedgehog;
    "영월-청령포":  Purple기타;
    "청령포-연당":  Purple기타;
    "연당-쌍룡":   Purple기타;
    "쌍룡-입석리":  Purple기타;
    "입석리-제천":  Purple기타;
    "연하-석항":   Purple기타;
    "석항-예미":   PuneHedgehog;
    "예미-석항":   Purple기타;
    "석항-연하":   Purple기타;
    "예미-조동":   Purple기타;
    "조동-자미원":  Purple기타;
    "자미원-민둥산": Purple기타;
    "민둥산-자미원": Purple기타;
    "사북-고한":   Purple기타;
    "고한-추전":   Purple기타;
    "추전-태백":   Purple기타;
    "태백-추전":   Purple기타;
    "추전-고한":   Purple기타;
    "고한-사북":   Purple기타;
    "사북-민둥산":  Purple기타;
    "태백분-문곡":  Purple기타;
    "문곡-태백":   PuneHedgehog;
    "태백-문곡":   Purple기타;
    "문곡-태백분":  Purple기타;
    "동백산-태백분": PuneHedgehog;
    "태백분-동백산": PuneHedgehog;
    "탄부-연하":   Purple기타;
    "영월-탄부":   PuneHedgehog;
    "연하-탄부":   Purple기타;
    "탄부-영월":   PuneHedgehog;
    입석리:       PuneHedgehog;
    "자미원-조동":  Purple기타;
    "민둥산-사북":  Purple기타;
}

export interface Tentacled호남선 {
    "익산-익산분":   PuneHedgehog;
    "계룡-흑석리":   Purple기타;
    "가수원-서대전":  Purple기타;
    "개태사-계룡":   Purple기타;
    "용동-함열":    Purple기타;
    "황등-익산":    Purple기타;
    "익산-황등":    Purple기타;
    "용동-강경":    Purple기타;
    "강경-채운":    Purple기타;
    "채운-논산":    Purple기타;
    "서대전-대전조":  Purple기타;
    "흑석리-계룡":   Purple기타;
    "서대전-가수원":  Purple기타;
    "계룡-개태사":   Purple기타;
    "채운-강경":    Purple기타;
    "강경-용동":    Purple기타;
    "함열-용동":    Purple기타;
    "익산분-부용":   Purple기타;
    "부용-익산분":   Purple기타;
    "익산분-익산":   PuneHedgehog;
    "초강-신태인":   Purple기타;
    "안평-장성":    Purple기타;
    "하남-임곡":    Purple기타;
    "신태인-초강":   Purple기타;
    "광주송-노안":   Purple기타;
    "나주-다시":    PuneHedgehog;
    "함평-고막원":   Purple기타;
    "노안-나주":    PuneHedgehog;
    "목포-호남선종점": PuneHedgehog;
    "고막원-함평":   Purple기타;
    "노안-광주송":   PuneHedgehog;
    목포:         PuneHedgehog;
    목포차량:       PuneHedgehog;
    "다시-나주":    PuneHedgehog;
    "나주-노안":    PuneHedgehog;
    익산:         PuneHedgehog;
    익산차량:       PuneHedgehog;
    "대전조-서대전":  Purple기타;
    "흑석리-가수원":  Purple기타;
    "개태사-연산":   Purple기타;
    "부황-연산":    Purple기타;
    "황등-함열":    Purple기타;
    "부황-논산":    PuneHedgehog;
    "와룡-부용":    Purple기타;
    "김제-와룡":    Purple기타;
    "김제-감곡":    Purple기타;
    "감곡-신태인":   Purple기타;
    "초강-정읍":    Purple기타;
    "정읍-천원":    Purple기타;
    "천원-노령":    Purple기타;
    "노령-백양사":   Purple기타;
    "백양사-안평":   Purple기타;
    "임곡-장성":    Purple기타;
    "북송정-하남":   PuneHedgehog;
    "북송정-광주송":  PuneHedgehog;
    "무안-함평":    Purple기타;
    "무안-몽탄":    Purple기타;
    "임성리-일로":   Purple기타;
    "목포-임성리":   Purple기타;
    "몽탄-일로":    Purple기타;
}

export interface Tentacled고속선 {
    "주식회사 SR": 고속선_주식회사Sr;
    한국철도공사:    Ambitious한국철도공사;
}

export interface 고속선_주식회사Sr {
    수서평택고속선: PuneHedgehog;
}

export interface Ambitious한국철도공사 {
    경부고속선: Fluffy경부고속선;
    호남고속선: 호남고속선;
}

export interface Fluffy경부고속선 {
    "광명-시흥연":      PuneHedgehog;
    "시흥연-광명":      PuneHedgehog;
    "신경분-신경주":     Purple기타;
    "신경주-신경분":     Purple기타;
    "신경주-울산":      Purple기타;
    "울산-신경주":      Purple기타;
    약목기지:          PuneHedgehog;
    광명:            PuneHedgehog;
    "화성IEC-광명":    Purple기타;
    "SR분-고덕IEC":   Purple기타;
    "광명-화성IEC":    Purple기타;
    "화성IEC-고덕IEC": Purple기타;
    "고덕IEC-화성IEC": Purple기타;
    "고덕IEC-SR분":   Purple기타;
    "SR분-천안아":     Purple기타;
    "천안아-SR분":     Purple기타;
    "천안아-오송":      Purple기타;
    "오송-천안아":      Purple기타;
    "오송-신탄진IEC":   Purple기타;
    "대전북-오송":      Purple기타;
    "신탄진IEC-오송":   Purple기타;
    "오송-대전북":      Purple기타;
    "대전남-영동IEC":   Purple기타;
    "영동IEC-대전남":   Purple기타;
    김천기지:          PuneHedgehog;
    김천IEC:         PuneHedgehog;
    영동IEC:         PuneHedgehog;
    신탄진IEC:        PuneHedgehog;
    화성IEC:         PuneHedgehog;
    화성기지:          PuneHedgehog;
    고덕IEC:         PuneHedgehog;
    "영동IEC-김천IEC": Purple기타;
    "김천IEC-영동IEC": Purple기타;
    "김천IEC-김천구":   Purple기타;
    "김천구-김천IEC":   Purple기타;
    칠곡IEC:         PuneHedgehog;
    "신동연-칠곡IEC":   Purple기타;
    "칠곡IEC-신동연":   Purple기타;
    "칠곡IEC-김천구":   Purple기타;
    "김천구-칠곡IEC":   Purple기타;
    "신동연-대구북":     Purple기타;
    "대구북-신동연":     Purple기타;
    고모IEC:         PuneHedgehog;
    "대구남-고모IEC":   Purple기타;
    "고모IEC-대구남":   Purple기타;
    "고모IEC-신경분":   Purple기타;
    "신경분-고모IEC":   Purple기타;
    신경주:           PuneHedgehog;
    노포IEC:         PuneHedgehog;
    "부전지-노포IEC":   Purple기타;
    "노포IEC-울산":    Purple기타;
    "울산-노포IEC":    Purple기타;
    "부전지-부산북":     Purple기타;
    "부산북-부전지":     Purple기타;
    "노포IEC-부전지":   Purple기타;
}

export interface 호남고속선 {
    "오송-영곡IEC":  Purple기타;
    "영곡IEC-오송":  Purple기타;
    영곡IEC:       PuneHedgehog;
    "공주-영곡IEC":  Purple기타;
    "영곡IEC-공주":  Purple기타;
    용동IEC:       PuneHedgehog;
    "용동IEC-공주":  Purple기타;
    "공주-용동IEC":  Purple기타;
    "용동IEC-익산북": Purple기타;
    "익산북-용동IEC": Purple기타;
    "익산남-정읍":    Purple기타;
    모암IEC:       PuneHedgehog;
    "모암IEC-광북연": Purple기타;
    "모암IEC-정읍":  Purple기타;
    "정읍-모암IEC":  Purple기타;
    "광북연-모암IEC": Purple기타;
    "정읍-익산남":    Purple기타;
}

export interface Hilarious궤도선 {
    한국철도기술연구원: 궤도선_한국철도기술연구원;
}

export interface 궤도선_한국철도기술연구원 {
    "K-AGT시험선": PuneHedgehog;
}

export interface 국철_기타 {
    한국철도기술연구원: 기타_한국철도기술연구원;
}

export interface 기타_한국철도기술연구원 {
    철도종합시험선로: 철도종합시험선로;
}

export interface 철도종합시험선로 {
    "시험1-시험2":   PuneHedgehog;
    "시험3-시험4":   Purple기타;
    "시험2-시험3":   Purple기타;
    "시험4-시험선종점": PuneHedgehog;
}

export interface 국철_도시철도 {
    한국철도공사: Cunning한국철도공사;
}

export interface Cunning한국철도공사 {
    안산선: 안산선;
}

export interface 안산선 {
    "산본-금정":   PuneHedgehog;
    "금정-산본":   PuneHedgehog;
    "오이도-정왕":  PuneHedgehog;
    "정왕-신길온":  PuneHedgehog;
    "신길온-안산":  PuneHedgehog;
    "안산-초지":   PuneHedgehog;
    "초지-고잔":   PuneHedgehog;
    "고잔-중앙":   PuneHedgehog;
    "중앙-한대앞":  PuneHedgehog;
    "한대앞-상록수": PuneHedgehog;
    "상록수-반월":  Purple기타;
    "반월-대야미":  PuneHedgehog;
    "대야미-수리산": PuneHedgehog;
    "수리산-산본":  PuneHedgehog;
    금정:        PuneHedgehog;
}

export interface Fluffy버스 {
    한국철도공사: 버스_한국철도공사;
}

export interface 버스_한국철도공사 {
    "KTX 리무진 광명도심공항선": Ktx리무진광명도심공항선;
}

export interface Ktx리무진광명도심공항선 {
    "공항T2-공항T2": 공항_T2공항_T2;
    "공항T2-인천국":  공항_T2공항_T2;
    "인천국-공항T2":  공항_T2공항_T2;
    "송도교-인천국":   Purple기타;
    "인천국-송도교":   Purple기타;
    "송도교-광명":    Purple기타;
    "광명-송도교":    Purple기타;
}

export interface 공항_T2공항_T2 {
    _공항버스: Purple기타;
}

export interface Tentacled전용선 {
    한국철도공사: Magenta한국철도공사;
}

export interface Magenta한국철도공사 {
    호남선: Sticky호남선;
}

export interface Sticky호남선 {
    와룡: 와룡;
}

export interface 와룡 {
    석공전용선: PuneHedgehog;
}

export interface Fluffy준고속선 {
    한국철도공사: Frisky한국철도공사;
}

export interface Frisky한국철도공사 {
    중앙선:   Purple기타;
    원주강릉선: { [key: string]: Purple기타 };
    호남선:   Indigo호남선;
    전라선:   Purple전라선;
    중부내륙선: { [key: string]: Purple기타 };
    대구선:   { [key: string]: Purple기타 };
}

export interface Purple전라선 {
    "동산-삼례":  PuneHedgehog;
    "동산-전주":  PuneHedgehog;
    "봉천-임실":  PuneHedgehog;
    "곡성-압록":  Purple기타;
    "압록-구례구": Purple기타;
    "옹정-금지":  PuneHedgehog;
    "서도-오수":  PuneHedgehog;
    "오수-서도":  PuneHedgehog;
    "오수-봉천":  PuneHedgehog;
    "봉천-오수":  PuneHedgehog;
    "죽림온-관촌": Purple기타;
    "관촌-죽림온": Purple기타;
    "전주-신리":  PuneHedgehog;
    "신리-전주":  PuneHedgehog;
    "동익산-삼례": Purple기타;
    "삼례-동익산": Purple기타;
    "전주-동산":  PuneHedgehog;
    "괴목-봉덕":  Purple기타;
    "순천-동운":  Purple기타;
    "동운-개운":  Purple기타;
    "개운-괴목":  Purple기타;
    "동운-순천":  Purple기타;
    "괴목-개운":  Purple기타;
    "여천-덕양":  PuneHedgehog;
    "덕양-율촌":  Purple기타;
    "덕양-여천":  PuneHedgehog;
    "율촌-성산":  PuneHedgehog;
    "성산-율촌":  PuneHedgehog;
    "율촌-덕양":  Purple기타;
    "봉덕-구례구": PuneHedgehog;
}

export interface Indigo호남선 {
    "다시-고막원": Purple기타;
    "고막원-함평": PuneHedgehog;
    "고막원-다시": Purple기타;
    "다시-나주":  Purple기타;
    "노안-광주송": Purple기타;
    "함평-고막원": PuneHedgehog;
    "광주송-노안": Purple기타;
    "나주-다시":  Purple기타;
    "노안-나주":  Purple기타;
    "나주-노안":  Purple기타;
}

export interface Indecent지선 {
    한국철도공사:      Mischievous한국철도공사;
    "서해철도 주식회사": 지선_서해철도주식회사;
}

export interface 지선_서해철도주식회사 {
    안산입고선: Purple안산입고선;
    안산출고선: 안산출고선;
}

export interface Purple안산입고선 {
    "시우-안산": PuneHedgehog;
}

export interface 안산출고선 {
    "안산-시우": PuneHedgehog;
}

export interface Mischievous한국철도공사 {
    구로삼각선:      구로삼각선;
    월곶시흥선:      { [key: string]: PuneHedgehog };
    시흥기지선:      시흥기지선;
    안산입고선:      Purple안산입고선;
    서울교외선:      Purple서울교외선;
    안산출고선:      안산출고선;
    정선선:        Purple기타;
    북평선:        Purple북평선;
    묵호항선:       Purple묵호항선;
    문경선:        Purple문경선;
    함백선:        { [key: string]: Purple기타 };
    여천선:        Purple여천선;
    옥구선:        Purple옥구선;
    진해선:        Purple진해선;
    평내기지선:      PuneHedgehog;
    신광양항선:      Purple신광양항선;
    광양항선:       Purple광양항선;
    광양제철선:      Purple광양제철선;
    사천선:        Purple사천선;
    군산항선:       Fluffy군산항선;
    강릉기지선:      강릉기지선;
    제천조차장선:     Purple제천조차장선;
    용문기지선:      Purple용문기지선;
    우암선:        Purple우암선;
    부전선:        { [key: string]: PuneHedgehog };
    가야선:        Purple가야선;
    온산선:        Purple온산선;
    울산신항선:      Purple울산신항선;
    울산기지선:      { [key: string]: PuneHedgehog };
    울산항선:       한국철도공사_울산항선;
    괴동선:        Purple괴동선;
    삼척선:        Purple삼척선;
    영일만항선:      Purple영일만항선;
    건천연결선:      { [key: string]: PuneHedgehog };
    용산삼각선:      용산삼각선;
    구로기지선:      { [key: string]: PuneHedgehog };
    남부화물기지선:    Purple남부화물기지선;
    병점기지선:      { [key: string]: PuneHedgehog };
    천안직결선:      Purple천안직결선;
    양산화물선:      Purple양산화물선;
    대구북연결선:     { [key: string]: Purple기타 };
    평택삼각선:      Purple평택삼각선;
    부강화물선:      { [key: string]: PuneHedgehog };
    신동화물선:      Purple신동화물선;
    "부산신항 남선":  부산신항남선;
    "부산신항 북선":  부산신항북선;
    부산신항선:      { [key: string]: Purple기타 };
    수인선:        Purple수인선;
    분당기지선:      PuneHedgehog;
    익산삼각선:      익산삼각선;
    대전선:        Purple대전선;
    강경선:        Purple강경선;
    안평화물선:      안평화물선;
    대불선:        Purple대불선;
    전경삼각선:      Purple전경삼각선;
    북전주선:       Purple북전주선;
    덕산선:        Purple덕산선;
    미전선:        { [key: string]: PuneHedgehog };
    부발기지선:      { [key: string]: PuneHedgehog };
    광주기지선:      PuneHedgehog;
    망우선:        Purple망우선;
    평택선:        Purple평택선;
    광주선:        Purple광주선;
    북송정삼각선:     Purple북송정삼각선;
    용산선:        { [key: string]: PuneHedgehog };
    수색객차출발선:    { [key: string]: PuneHedgehog };
    수식직결선:      { [key: string]: PuneHedgehog };
    고양기지선:      고양기지선;
    문산기지선:      { [key: string]: PuneHedgehog };
    성북기지선:      성북기지선;
    이문기지선:      { [key: string]: PuneHedgehog };
    광명기지선:      { [key: string]: 광명기지선 };
    시흥연결선:      시흥연결선;
    대전북연결선:     { [key: string]: PuneHedgehog };
    대전남연결선:     { [key: string]: Purple기타 };
    영동정비기지선:    { [key: string]: PuneHedgehog };
    신동연결선:      { [key: string]: PuneHedgehog };
    오송정비기지선:    { [key: string]: PuneHedgehog };
    부산북연결선:     { [key: string]: Purple기타 };
    대구남연결선:     대구남연결선;
    익산남연결선:     { [key: string]: PuneHedgehog };
    광주송정북연결선:   { [key: string]: Purple기타 };
    장생포선:       장생포선;
    영천삼각선:      Purple영천삼각선;
    강릉삼각선:      강릉삼각선;
    익산북연결선:     { [key: string]: PuneHedgehog };
    경부고속선:      Tentacled경부고속선;
    태백삼각선:      PuneHedgehog;
    오송선:        Purple기타;
    경주삼각선:      PuneHedgehog;
    대전철도차량정비단선: Purple기타;
    분당연결선:      PuneHedgehog;
}

export interface Purple가야선 {
    "사상-주례": PuneHedgehog;
    "주례-가야": Purple기타;
    "가야-주례": Purple기타;
    "주례-사상": PuneHedgehog;
    "범일-가야": PuneHedgehog;
    부산기:     PuneHedgehog;
}

export interface Purple강경선 {
    "연무대-채운":    Purple기타;
    "연무대-강경선종점": PuneHedgehog;
}

export interface 강릉기지선 {
    "강릉분-강릉기": PuneHedgehog;
}

export interface 강릉삼각선 {
    "청량B-청량C": PuneHedgehog;
}

export interface Tentacled경부고속선 {
    "시흥연-광명": 금천구시흥연;
}

export interface 고양기지선 {
    고양기:      PuneHedgehog;
    "화전-행신":  Purple기타;
    "행신-고양기": PuneHedgehog;
    "화전-고양기": Purple기타;
    "고양기-화전": Purple기타;
}

export interface 광명기지선 {
    _반대선: PuneHedgehog;
}

export interface Purple광양제철선 {
    "초남-황길":    Purple기타;
    "광양-초남":    Purple기타;
    "태금-황길":    Purple기타;
    "황길-초남":    Purple기타;
    "태금-광양제철선": PuneHedgehog;
    "황길-태금":    Purple기타;
    태금:         PuneHedgehog;
}

export interface Purple광양항선 {
    "광양항-황길":     Purple기타;
    "광양항-광양항선종점": PuneHedgehog;
    "황길-광양항":     PuneHedgehog;
}

export interface Purple광주선 {
    광주차량:       PuneHedgehog;
    "극락강-광주":   Purple기타;
    "광주-광주선종점": PuneHedgehog;
    "광주-극락강":   Purple기타;
    광주:         PuneHedgehog;
    "동송정-극락강":  Purple기타;
    "극락강-동송정":  Purple기타;
}

export interface Purple괴동선 {
    "효자-괴동":  Purple기타;
    "괴동-효자":  Purple기타;
    "괴동-제철":  PuneHedgehog;
    "효자-신부조": Purple기타;
    "신부조-효자": Purple기타;
}

export interface 구로삼각선 {
    "구일-금천구": PuneHedgehog;
}

export interface Fluffy군산항선 {
    "군산옥-대야":     Purple기타;
    "군산항선종점-군산항": PuneHedgehog;
    "군산항-군산옥":    Purple기타;
    군산항:          PuneHedgehog;
}

export interface Purple남부화물기지선 {
    "의왕-오봉":        Purple기타;
    "오봉-의왕":        Purple기타;
    "오봉-남부화물기지선종점": PuneHedgehog;
    오봉:             PuneHedgehog;
}

export interface 대구남연결선 {
    "대구남-동대구": Purple기타;
}

export interface Purple대불선 {
    "대불-일로":    Purple기타;
    "대불-대불선종점": PuneHedgehog;
}

export interface Purple대전선 {
    "서대전-대전": Purple기타;
}

export interface Purple덕산선 {
    "용강-덕산":    Purple기타;
    "덕산-용강":    Purple기타;
    "덕산-덕산선종점": PuneHedgehog;
}

export interface Purple망우선 {
    "상봉-광운대": Purple기타;
}

export interface Purple묵호항선 {
    "묵호항-동해": Purple기타;
    "묵호항-묵호": PuneHedgehog;
    묵호항:      PuneHedgehog;
}

export interface Purple문경선 {
    "점촌-주평":  Purple기타;
    주평:       PuneHedgehog;
    "주평-문경선": PuneHedgehog;
}

export interface 부산신항남선 {
    "남철송-부산항":    Purple기타;
    "남철송-신항남선종점": PuneHedgehog;
}

export interface 부산신항북선 {
    "북철송-신항북선종점": PuneHedgehog;
    "북철송-부산항":    Purple기타;
}

export interface Purple북송정삼각선 {
    "북송분-북송정": PuneHedgehog;
}

export interface Purple북전주선 {
    "동산-북전주": PuneHedgehog;
    동산:       PuneHedgehog;
}

export interface Purple북평선 {
    "삼화-북평선종점": PuneHedgehog;
    "동해-삼화":    Purple기타;
}

export interface Purple사천선 {
    "사천-진주": PuneHedgehog;
}

export interface Purple삼척선 {
    "삼척해-삼척": Purple기타;
    "추암-동해":  Purple기타;
    "추암-삼척해": PuneHedgehog;
}

export interface Purple서울교외선 {
    "대곡-능곡":  서울교외선_대곡능곡;
    "대정-대곡":  PuneHedgehog;
    "온릉-송추":  Purple기타;
    "장흥-일영":  PuneHedgehog;
    "일영-벽제":  Purple기타;
    "대정-원릉":  Purple기타;
    "원릉-삼릉":  PuneHedgehog;
    "삼릉-벽제":  Purple기타;
    "벽제-일영":  Purple기타;
    "일영-장흥":  PuneHedgehog;
    "의정부-송추": Purple기타;
    "온릉-장흥":  PuneHedgehog;
}

export interface 서울교외선_대곡능곡 {
    _교외선: PuneHedgehog;
}

export interface 성북기지선 {
    "성북차-광운대": PuneHedgehog;
}

export interface Purple수인선 {
    "중앙-한대앞":    중앙한대앞;
    "한대앞-중앙":    중앙한대앞;
    "오이도-달월":    PuneHedgehog;
    "달월-월곶":     PuneHedgehog;
    "인천논-호구포":   PuneHedgehog;
    "호구포-남동인":   PuneHedgehog;
    "숭의-신포":     PuneHedgehog;
    "신포-신인천":    PuneHedgehog;
    "숭의-인하대":    PuneHedgehog;
    "인하대-학익":    PuneHedgehog;
    "학익-송도":     PuneHedgehog;
    "송도-연수":     PuneHedgehog;
    "연수-원인재":    PuneHedgehog;
    "원인재-남동인":   PuneHedgehog;
    "인천논-소래포":   PuneHedgehog;
    "소래포-월곶":    PuneHedgehog;
    "신인천-수인선종점": PuneHedgehog;
    "안산-초지":     PuneHedgehog;
    "초지-고잔":     PuneHedgehog;
    "정왕-신길온":    PuneHedgehog;
    "신길온-안산":    PuneHedgehog;
    "오이도-정왕":    PuneHedgehog;
    "고잔-중앙":     PuneHedgehog;
    "사리-한대앞":    PuneHedgehog;
    "한대앞-사리":    PuneHedgehog;
    "신수원-고색":    PuneHedgehog;
    "어천-야목":     PuneHedgehog;
    "야목-사리":     Purple기타;
    "고색-오목천":    PuneHedgehog;
    "오목천-어천":    Purple기타;
}

export interface 중앙한대앞 {
    _수인: PuneHedgehog;
}

export interface 시흥기지선 {
    "오이도-시흥기": PuneHedgehog;
}

export interface 시흥연결선 {
    "시흥연-금천구": PuneHedgehog;
}

export interface Purple신광양항선 {
    "신광양-신광양항선종점": PuneHedgehog;
    "초남-신광양":      Purple기타;
}

export interface Purple신동화물선 {
    "신동화-신동화물선종점": PuneHedgehog;
    "신동화-신동":      Purple기타;
}

export interface 안평화물선 {
    "장성화-안평":      Purple기타;
    "장성화-장성화물선종점": PuneHedgehog;
}

export interface Purple양산화물선 {
    양산화:           PuneHedgehog;
    "양산화-물금":      Purple기타;
    "물금-양산화":      Purple기타;
    "양산화-양산화물선종점": PuneHedgehog;
}

export interface Purple여천선 {
    "적량-여천선": PuneHedgehog;
    "덕양-흥국사": Purple기타;
    "흥국사-적량": Purple기타;
}

export interface Purple영일만항선 {
    "영일만-영일만항선종점": PuneHedgehog;
    "포항-영일만":      Purple기타;
}

export interface Purple영천삼각선 {
    "북영천-북영분": PuneHedgehog;
}

export interface Purple옥구선 {
    "옥구-군산옥": Purple기타;
}

export interface Purple온산선 {
    "온산-온산선종점": PuneHedgehog;
    "온산-남창":    Purple기타;
}

export interface Purple용문기지선 {
    "용문차-용문": PuneHedgehog;
    "용문-용문차": Purple기타;
    용문차:      PuneHedgehog;
}

export interface 용산삼각선 {
    "노량진-이촌": PuneHedgehog;
}

export interface Purple우암선 {
    "부산진-우암":    PuneHedgehog;
    "우암-신선대":    Purple기타;
    "신선대-우암선종점": PuneHedgehog;
}

export interface Purple울산신항선 {
    "울산신항선종점-울산신": PuneHedgehog;
    "용암-망양":       Purple기타;
    "울산신-용암":      Purple기타;
}

export interface 한국철도공사_울산항선 {
    "울산항-울산항선종점": PuneHedgehog;
    "태화강-울산항":    Purple기타;
}

export interface 익산삼각선 {
    "동익산-목천신": Purple기타;
}

export interface 장생포선 {
    "태화강-장생포": Purple기타;
}

export interface Purple전경삼각선 {
    "평화-성산": PuneHedgehog;
}

export interface Purple제천조차장선 {
    "제천조-제천": 제천조제천;
    제천:       PuneHedgehog;
    제천조:      PuneHedgehog;
}

export interface 제천조제천 {
    _단행: PuneHedgehog;
}

export interface Purple진해선 {
    "남창원-신창원": Purple기타;
    "진해-경화":   PuneHedgehog;
    "성주사-남창원": Purple기타;
    "창원-신창원":  Purple기타;
    "경화-성주사":  Purple기타;
    "신창원-창원":  Purple기타;
    "신창원-남창원": Purple기타;
    "진해-통해":   PuneHedgehog;
    신창원:       PuneHedgehog;
}

export interface Purple천안직결선 {
    "천안-두정": 온양온신창;
    "두정-천안": 온양온신창;
    천안:      PuneHedgehog;
}

export interface Purple평택삼각선 {
    "1지제-신대신": PuneHedgehog;
}

export interface Purple평택선 {
    "신대신-창내신": Purple기타;
    "평택-신대신":  PuneHedgehog;
    "신대신-평택":  PuneHedgehog;
}

export interface Ambitious궤도선 {
    인천교통공사:         Tentacled인천교통공사;
    순천에코트랜스:        Fluffy순천에코트랜스;
    "해운대블루라인 주식회사": 궤도선_해운대블루라인주식회사;
}

export interface Fluffy순천에코트랜스 {
    순천만PRT: Purple기타;
}

export interface Tentacled인천교통공사 {
    월미바다열차: Purple기타;
}

export interface 궤도선_해운대블루라인주식회사 {
    "해운대 해변열차":  Purple기타;
    "해운대 스카이캡슐": PuneHedgehog;
}

export interface 영업_기타 {
    공항철도:                      Purple공항철도;
    신분당선주식회사:                  기타_신분당선주식회사;
    경기철도주식회사:                  기타_경기철도주식회사;
    "새서울철도 주식회사":              기타_새서울철도주식회사;
    "한국철도공사 철도관광사업법인 코레일관광개발": 한국철도공사철도관광사업법인코레일관광개발;
    도계광업소:                     Purple도계광업소;
}

export interface 기타_경기철도주식회사 {
    신분당선: PuneHedgehog;
}

export interface Purple공항철도 {
    수색직결선:    { [key: string]: PuneHedgehog };
    인천국제공항철도: Purple인천국제공항철도;
    용유차량삼각선:  { [key: string]: PuneHedgehog };
    용유차량기지선:  { [key: string]: PuneHedgehog };
}

export interface Purple인천국제공항철도 {
    "계양-김포공":      Purple기타;
    "용유분-인천국":     PuneHedgehog;
    "공항T2-용유분":    PuneHedgehog;
    "공항T2-공항T2종점": PuneHedgehog;
    "서울공-공덕공":     Purple기타;
    "검암-청라":       Purple기타;
    "홍대공-공덕공":     PuneHedgehog;
    "디엠공-홍대공":     Purple기타;
    "공항연-디엠공":     Purple기타;
    "마곡나-공항연":     Purple기타;
    "김포공-마곡나":     PuneHedgehog;
    "검암-계양":       Purple기타;
    "영종-청라":       Purple기타;
    "운서-영종":       Purple기타;
    "공항화-운서":      Purple기타;
    "인천국-공항화":     PuneHedgehog;
    "서울공-공항서울종점":  PuneHedgehog;
    "청라-검암":       PuneHedgehog;
    "계양-검암":       PuneHedgehog;
}

export interface Purple도계광업소 {
    "도계광업소 강삭철도": PuneHedgehog;
}

export interface 기타_새서울철도주식회사 {
    신분당선: { [key: string]: PuneHedgehog };
}

export interface 기타_신분당선주식회사 {
    신분당선:  신분당선주식회사_신분당선;
    분당연결선: { [key: string]: PuneHedgehog };
}

export interface 신분당선주식회사_신분당선 {
    "미금-분당연결선분기":   PuneHedgehog;
    "신논현-강남":       PuneHedgehog;
    "양재-양재시민의숲":    PuneHedgehog;
    "양재시민의숲-청계산입구": PuneHedgehog;
    "청계산입구-판교":     Purple기타;
    "분당연결선분기-정자":   PuneHedgehog;
    "정자-판교주박기지":    PuneHedgehog;
    "판교주박기지-판교":    PuneHedgehog;
    "강남-양재":        PuneHedgehog;
}

export interface 한국철도공사철도관광사업법인코레일관광개발 {
    "섬진강 기차마을 관광철도": Purple기타;
}

export interface Tentacled도시철도 {
    인천교통공사:           Sticky인천교통공사;
    김포골드라인운영주식회사:     도시철도_김포골드라인운영주식회사;
    "서울시메트로 9호선":     Tentacled서울시메트로9호선;
    "남서울경전철 주식회사":    도시철도_남서울경전철주식회사;
    서울교통공사:           Purple서울교통공사;
    "주식회사 우진메트로":     도시철도_주식회사우진메트로;
    "우이신설경전철 주식회사":   Fluffy우이신설경전철주식회사;
    대전교통공사:           도시철도_대전교통공사;
    대구도시철도공사:         Fluffy대구도시철도공사;
    용인경량전철주식회사:       도시철도_용인경량전철주식회사;
    한국철도공사:           Braggadocious한국철도공사;
    부산교통공사:           Tentacled부산교통공사;
    "부산-김해경전철운영주식회사": 도시철도_부산김해경전철운영주식회사;
    광주광역시도시철도공사:      Fluffy광주광역시도시철도공사;
    "에스지레일 주식회사":     에스지레일주식회사;
    하남도시공사:           도시철도_하남도시공사;
}

export interface Fluffy광주광역시도시철도공사 {
    "광주 도시철도 1호선": PuneHedgehog;
}

export interface 도시철도_김포골드라인운영주식회사 {
    김포골드라인: Purple김포골드라인;
}

export interface Purple김포골드라인 {
    "김포한강차량기지-양촌": PuneHedgehog;
    "양촌-구래":       PuneHedgehog;
    "구래-마산":       PuneHedgehog;
    "마산-장기":       PuneHedgehog;
    "장기-운양":       PuneHedgehog;
    "운양-걸포북변":     Purple기타;
    "걸포북변-사우":     PuneHedgehog;
    "사우-풍무":       PuneHedgehog;
    "풍무-고촌":       Purple기타;
    "고촌-김포공항":     Purple기타;
}

export interface 도시철도_남서울경전철주식회사 {
    "서울 경전철 신림선": { [key: string]: PuneHedgehog };
}

export interface Fluffy대구도시철도공사 {
    "대구 도시철도 3호선": { [key: string]: PuneHedgehog };
    "대구 도시철도 1호선": { [key: string]: PuneHedgehog };
    "대구 도시철도 2호선": 대구도시철도2호선;
}

export interface 대구도시철도2호선 {
    "청라언덕-명덕":    명덕청라언덕;
    "명덕-청라언덕":    명덕청라언덕;
    "문양차량사업소-다사": PuneHedgehog;
    "다사-문양차량사업소": PuneHedgehog;
    문양차량사업소:      PuneHedgehog;
    "계명대-성서산단":   PuneHedgehog;
    "성서산단-이곡":    PuneHedgehog;
    "이곡-용산":      PuneHedgehog;
    "용산-죽전":      PuneHedgehog;
    "죽전-감삼":      PuneHedgehog;
    "감삼-죽전":      PuneHedgehog;
    "죽전-용산":      PuneHedgehog;
    "용산-이곡":      PuneHedgehog;
    "이곡-성서산단":    PuneHedgehog;
    "성서산단-계명대":   PuneHedgehog;
    "계명대-강창":     PuneHedgehog;
    "강창-대실":      PuneHedgehog;
    "대실-다사":      PuneHedgehog;
    "다사-문양":      PuneHedgehog;
    "문양-문양차량사업소": PuneHedgehog;
    "감삼-두류":      PuneHedgehog;
    "두류-내당":      PuneHedgehog;
    "내당-반고개":     PuneHedgehog;
    "반고개-청라언덕":   PuneHedgehog;
    "청라언덕-반월당":   PuneHedgehog;
    "반월당-경대병원":   PuneHedgehog;
    "경대병원-대구은행":  PuneHedgehog;
    "대구은행-범어":    PuneHedgehog;
    "범어-수성구청":    PuneHedgehog;
    "수성구청-만촌":    PuneHedgehog;
    "만촌-담티":      PuneHedgehog;
    "담티-연호":      PuneHedgehog;
    "연호-대공원":     PuneHedgehog;
    "정평-임당":      PuneHedgehog;
    "임당-영남대":     PuneHedgehog;
    "대공원-연호":     PuneHedgehog;
    "연호-담티":      PuneHedgehog;
    "담티-만촌":      PuneHedgehog;
    "만촌-수성구청":    PuneHedgehog;
    "수성구청-범어":    PuneHedgehog;
    "범어-대구은행":    PuneHedgehog;
    "대구은행-경대병원":  PuneHedgehog;
    "경대병원-반월당":   PuneHedgehog;
    "반월당-청라언덕":   PuneHedgehog;
    "청라언덕-반고개":   PuneHedgehog;
    "반고개-내당":     PuneHedgehog;
    "내당-두류":      PuneHedgehog;
    "두류-감삼":      PuneHedgehog;
    "영남대종점-영남대":  PuneHedgehog;
    "대공원-고산":     PuneHedgehog;
    "고산-신매":      PuneHedgehog;
    "사월-신매":      PuneHedgehog;
    "신매-사월":      PuneHedgehog;
    "사월-정평":      PuneHedgehog;
}

export interface 명덕청라언덕 {
    연결선: PuneHedgehog;
}

export interface 도시철도_대전교통공사 {
    "대전 도시철도 1호선": PuneHedgehog;
}

export interface 도시철도_부산김해경전철운영주식회사 {
    부산김해경전철: { [key: string]: PuneHedgehog };
}

export interface Tentacled부산교통공사 {
    "부산 도시철도 1호선": PuneHedgehog;
    "부산 도시철도 2호선": Fluffy부산도시철도2호선;
    "부산 도시철도 3호선": 부산도시철도3호선;
    "부산 도시철도 4호선": { [key: string]: PuneHedgehog };
}

export interface Fluffy부산도시철도2호선 {
    "광안-금련산":        PuneHedgehog;
    "동백-해운대":        PuneHedgehog;
    "해운대-중동":        PuneHedgehog;
    "중동-장산":         PuneHedgehog;
    "민락-센텀시티":       PuneHedgehog;
    "센텀시티-민락":       PuneHedgehog;
    "남양산-양산":        PuneHedgehog;
    "증산-부산대양산캠퍼스":   PuneHedgehog;
    "부산대양산캠퍼스-남양산":  PuneHedgehog;
    "증산-호포":         Purple기타;
    "양산-양산인상선":      PuneHedgehog;
    "양산-양산종합운동장":    PuneHedgehog;
    "율리-화명":         PuneHedgehog;
    "화명-수정":         PuneHedgehog;
    "덕천-구명":         PuneHedgehog;
    "구명-구남":         PuneHedgehog;
    "구남-모라":         PuneHedgehog;
    "모라-모덕":         PuneHedgehog;
    "모덕-덕포":         PuneHedgehog;
    "덕포-사상":         PuneHedgehog;
    "사상-감전":         PuneHedgehog;
    "감전-주례":         PuneHedgehog;
    "주례-냉정":         PuneHedgehog;
    "서면-전포":         PuneHedgehog;
    "전포-국제금융센터부산은행": PuneHedgehog;
    "국제금융센터부산은행-문현": PuneHedgehog;
    "문현-지게골":        PuneHedgehog;
    "지게골-못골":        PuneHedgehog;
    "못골-대연":         PuneHedgehog;
    "대연-경성대부경대":     PuneHedgehog;
    "서면-부암":         PuneHedgehog;
    "부암-가야":         PuneHedgehog;
    "가야-동의대":        PuneHedgehog;
    "동의대-개금":        PuneHedgehog;
    "개금-냉정":         PuneHedgehog;
    "덕천-수정":         PuneHedgehog;
    "율리-동원":         PuneHedgehog;
    "동원-금곡":         PuneHedgehog;
    "금곡-호포":         PuneHedgehog;
    "경성대부경대-남천":     PuneHedgehog;
    "남천-금련산":        PuneHedgehog;
    "수영-민락":         PuneHedgehog;
    "민락-수영":         PuneHedgehog;
    "광안-수영":         PuneHedgehog;
    "수영-광안":         PuneHedgehog;
    "벡스코-동백":        PuneHedgehog;
    "센텀시티-시립미술관":    PuneHedgehog;
    "호포차량사업소-호포":    PuneHedgehog;
    호포차량사업소:         PuneHedgehog;
    호포차량기지:          PuneHedgehog;
    "장산-장산주박기지":     PuneHedgehog;
    장산주박기지:          PuneHedgehog;
}

export interface 부산도시철도3호선 {
    "대저차량사업소-대저": PuneHedgehog;
    "대저-체육공원":    PuneHedgehog;
    "체육공원-강서구청":  PuneHedgehog;
    "강서구청-구포":    PuneHedgehog;
    "구포-덕천":      PuneHedgehog;
    "숙등-남산정":     PuneHedgehog;
    "남산정-만덕":     PuneHedgehog;
    "만덕-미남":      Purple기타;
    "미남-만덕":      Purple기타;
    "만덕-남산정":     PuneHedgehog;
    "숙등-덕천":      PuneHedgehog;
    "미남-사직":      PuneHedgehog;
    "사직-종합운동장":   PuneHedgehog;
    "종합운동장-거제":   PuneHedgehog;
    "거제-연산":      PuneHedgehog;
    "연산-물만골":     PuneHedgehog;
    "사직-미남":      PuneHedgehog;
    "망미-수영":      PuneHedgehog;
    "수영-망미":      PuneHedgehog;
    "망미-배산":      PuneHedgehog;
    "배산-물만골":     PuneHedgehog;
    수영:           PuneHedgehog;
    "수영-광안":      PuneHedgehog;
    "광안-수영":      PuneHedgehog;
    대저차량사업소:      PuneHedgehog;
}

export interface Purple서울교통공사 {
    "서울교통공사 1호선":       { [key: string]: PuneHedgehog };
    "서울교통공사 6호선":       PuneHedgehog;
    "서울교통공사 5호선":       { [key: string]: PuneHedgehog };
    "서울교통공사 5호선 강동삼각선": Purple서울교통공사5호선강동삼각선;
    "서울교통공사 5호선 마천지선":  { [key: string]: PuneHedgehog };
    "서울교통공사 2호선 신정지선":  { [key: string]: PuneHedgehog };
    "서울교통공사 2호선":       { [key: string]: PuneHedgehog };
    "서울교통공사 2호선 성수지선":  { [key: string]: PuneHedgehog };
    삼송지축선:              Purple삼송지축선;
    "서울교통공사 7호선":       { [key: string]: PuneHedgehog };
    "서울교통공사 4호선 창동기지선": PuneHedgehog;
    "서울교통공사 4호선 노원창동선": { [key: string]: PuneHedgehog };
    "서울교통공사 4호선":       PuneHedgehog;
    진접선:                Purple진접선;
    "서울교통공사 3호선":       PuneHedgehog;
    "서울교통공사 3호선 수서기지선": { [key: string]: PuneHedgehog };
    "서울교통공사 3호선 수서삼각선": 서울교통공사3호선수서삼각선;
    "서울교통공사 8호선":       { [key: string]: PuneHedgehog };
    "서울교통공사 3호선 지축기지선": { [key: string]: PuneHedgehog };
    하남선:                { [key: string]: PuneHedgehog };
}

export interface Purple삼송지축선 {
    "삼송-지축기": PuneHedgehog;
}

export interface 서울교통공사3호선수서삼각선 {
    "수서기-가락시": PuneHedgehog;
}

export interface Purple서울교통공사5호선강동삼각선 {
    "길동-강동삼각선분기": PuneHedgehog;
}

export interface Purple진접선 {
    "풍양-별가람":   Purple기타;
    당고개:        PuneHedgehog;
    "오남-풍양":    PuneHedgehog;
    "진접선종점-진접": PuneHedgehog;
    "진접-오남":    PuneHedgehog;
}

export interface Tentacled서울시메트로9호선 {
    "서울시메트로 9호선": Sticky서울시메트로9호선;
}

export interface Sticky서울시메트로9호선 {
    "계양-김포공":       계양김포공;
    "국회의사당-여의도":    PuneHedgehog;
    "여의도-국회의사당":    PuneHedgehog;
    "국회의사당-당산":     PuneHedgehog;
    "당산-국회의사당":     PuneHedgehog;
    "당산-선유도":       PuneHedgehog;
    "선유도-당산":       PuneHedgehog;
    "여의도-샛강":       PuneHedgehog;
    "샛강-노량진":       PuneHedgehog;
    "노량진-노들":       PuneHedgehog;
    "노들-흑석":        PuneHedgehog;
    "구반포-신반포":      PuneHedgehog;
    "신반포-고속터미널":    PuneHedgehog;
    "봉은사-종합운동장":    PuneHedgehog;
    "봉은사-삼성중앙":     PuneHedgehog;
    "삼성중앙-선정릉":     PuneHedgehog;
    "선정릉-언주":       PuneHedgehog;
    "언주-신논현":       PuneHedgehog;
    "신논현-사평":       PuneHedgehog;
    "사평-고속터미널":     PuneHedgehog;
    "구반포-동작":       PuneHedgehog;
    "동작-흑석":        PuneHedgehog;
    "삼전-석촌고분":      PuneHedgehog;
    "석촌고분-석촌":      PuneHedgehog;
    "석촌-송파나루":      PuneHedgehog;
    "송파나루-한성백제":    PuneHedgehog;
    "한성백제-올림픽공원":   PuneHedgehog;
    "올림픽공원-둔촌오륜":   PuneHedgehog;
    "둔촌오륜-중앙보훈병원":  PuneHedgehog;
    "중앙보훈병원-둔촌오륜":  PuneHedgehog;
    "둔촌오륜-올림픽공원":   PuneHedgehog;
    "올림픽공원-한성백제":   PuneHedgehog;
    "한성백제-송파나루":    PuneHedgehog;
    "송파나루-석촌":      PuneHedgehog;
    "석촌-석촌고분":      PuneHedgehog;
    "석촌고분-삼전":      PuneHedgehog;
    "삼전-종합운동장":     PuneHedgehog;
    "개화-김포공항":      Purple기타;
    "김포공항-공항시장":    PuneHedgehog;
    "공항시장-신방화":     PuneHedgehog;
    "신방화-마곡나루":     PuneHedgehog;
    "마곡나루-양천향교":    PuneHedgehog;
    "양천향교-가양":      PuneHedgehog;
    "등촌-염창":        PuneHedgehog;
    "염창-신목동":       PuneHedgehog;
    "신목동-선유도":      PuneHedgehog;
    "등촌-증미":        PuneHedgehog;
    "증미-가양":        PuneHedgehog;
    "김포차량사업소-개화":   PuneHedgehog;
    "김포공항-김포차량사업소": PuneHedgehog;
    "중앙보훈병원-종점":    PuneHedgehog;
}

export interface 계양김포공 {
    _9호선: PuneHedgehog;
}

export interface 에스지레일주식회사 {
    "수도권 광역급행철도 A노선": PuneHedgehog;
}

export interface 도시철도_용인경량전철주식회사 {
    용인경전철: PuneHedgehog;
}

export interface Fluffy우이신설경전철주식회사 {
    "서울 경전철 우이신설선": { [key: string]: PuneHedgehog };
}

export interface Sticky인천교통공사 {
    "인천공항 자기부상철도": 인천공항자기부상철도;
    "인천 도시철도 2호선": PuneHedgehog;
    "서울교통공사 7호선":  { [key: string]: PuneHedgehog };
    "인천 도시철도 1호선": 인천도시철도1호선;
}

export interface 인천도시철도1호선 {
    "송도달빛축제공원-1호선종점":  송도달빛축제공원1호선종점;
    "계양-1호선종점":        계양1호선종점;
    "박촌-귤현차량사업소":      PuneHedgehog;
    "계양-귤현":           PuneHedgehog;
    "귤현-박촌":           PuneHedgehog;
    "박촌-임학":           PuneHedgehog;
    "임학-계산":           PuneHedgehog;
    "계산-경인교대":         PuneHedgehog;
    "경인교대-작전":         PuneHedgehog;
    "작전-갈산":           PuneHedgehog;
    "갈산-부평구청":         PuneHedgehog;
    "부평구청-부평시장":       PuneHedgehog;
    "부평시장-부평":         PuneHedgehog;
    "부평-동수":           PuneHedgehog;
    "동수-부평삼거리":        PuneHedgehog;
    "국제업무지구-센트럴파크":    PuneHedgehog;
    "센트럴파크-인천대입구":     PuneHedgehog;
    "인천대입구-지식정보단지":    PuneHedgehog;
    "지식정보단지-테크노파크":    PuneHedgehog;
    "테크노파크-캠퍼스타운":     PuneHedgehog;
    "캠퍼스타운-동막":        PuneHedgehog;
    "동막-동춘":           PuneHedgehog;
    "동춘-원인재":          PuneHedgehog;
    "원인재-신연수":         PuneHedgehog;
    "신연수-선학":          PuneHedgehog;
    "선학-문학경기장":        PuneHedgehog;
    "문학경기장-인천터미널":     PuneHedgehog;
    "인천터미널-예술회관":      PuneHedgehog;
    "예술회관-인천시청":       PuneHedgehog;
    "인천시청-간석오거리":      PuneHedgehog;
    "간석오거리-부평삼거리":     PuneHedgehog;
    "박촌-귤현":           PuneHedgehog;
    "송도달빛축제공원-국제업무지구": PuneHedgehog;
    "동암-간석오거리":        PuneHedgehog;
}

export interface 계양1호선종점 {
    계양: PuneHedgehog;
}

export interface 송도달빛축제공원1호선종점 {
    송도: PuneHedgehog;
}

export interface 인천공항자기부상철도 {
    "워터파크-파라다이스시티": Purple기타;
    "용유기지-용유":      PuneHedgehog;
    "용유-워터파크":      PuneHedgehog;
    "합동청사-장기주차장":   PuneHedgehog;
    "장기주차장-인천국제공항": PuneHedgehog;
    "파라다이스시티-합동청사": PuneHedgehog;
    "인천국제공항-종점":    PuneHedgehog;
}

export interface 도시철도_주식회사우진메트로 {
    의정부경전철: PuneHedgehog;
}

export interface 도시철도_하남도시공사 {
    하남선: { [key: string]: PuneHedgehog };
}

export interface Braggadocious한국철도공사 {
    일산선:   { [key: string]: PuneHedgehog };
    삼송지축선: Purple삼송지축선;
    분당선:   Purple분당선;
    과천선:   { [key: string]: PuneHedgehog };
}

export interface Purple분당선 {
    "왕십리-서울숲":   PuneHedgehog;
    "서울숲-로데오":   PuneHedgehog;
    "로데오-강남구":   PuneHedgehog;
    "강남구-선정릉":   PuneHedgehog;
    "선정릉-선릉":    PuneHedgehog;
    "선릉-한티":     PuneHedgehog;
    "수서-복정":     Purple기타;
    "복정-가천대":    PuneHedgehog;
    "가천대-태평":    PuneHedgehog;
    "태평-모란":     PuneHedgehog;
    "모란-야탑":     PuneHedgehog;
    "야탑-이매":     PuneHedgehog;
    "미금-오리":     PuneHedgehog;
    "오리-죽전":     PuneHedgehog;
    "죽전-보정":     PuneHedgehog;
    "청명-영통":     PuneHedgehog;
    "영통-망포":     PuneHedgehog;
    "망포-매탄권":    PuneHedgehog;
    "매탄권-수원시":   PuneHedgehog;
    "신수원-매교":    PuneHedgehog;
    "매교-수원시":    PuneHedgehog;
    "청명-상갈":     PuneHedgehog;
    "상갈-기흥":     PuneHedgehog;
    "기흥-신갈":     PuneHedgehog;
    "신갈-구성":     PuneHedgehog;
    "구성-보정":     PuneHedgehog;
    "죽전-오리":     PuneHedgehog;
    "미금-정자":     PuneHedgehog;
    "정자-수내":     PuneHedgehog;
    "수내-서현":     PuneHedgehog;
    "서현-이매":     PuneHedgehog;
    "수서-대모산":    PuneHedgehog;
    "대모산-개포동":   PuneHedgehog;
    "개포동-구룡역":   PuneHedgehog;
    "구룡역-도곡":    PuneHedgehog;
    "도곡-한티":     PuneHedgehog;
    "로데오-서울숲":   PuneHedgehog;
    "분당선시점-왕십리": PuneHedgehog;
    "야탑-삼동":     PuneHedgehog;
}

export interface Fluffy삭도 {
    "청풍호반케이블카 주식회사":           삭도_청풍호반케이블카주식회사;
    "삼진관광개발 주식회사":             삭도_삼진관광개발주식회사;
    "거제 케이블카 주식회사":            삭도_거제케이블카주식회사;
    통영관광개발공사:                  삭도_통영관광개발공사;
    "송도해상케이블카 주식회사":           삭도_송도해상케이블카주식회사;
    "제부도해상케이블카 주식회사":          삭도_제부도해상케이블카주식회사;
    "양지대둔산삭도 유한회사":            삭도_양지대둔산삭도유한회사;
    한국방송공사:                    삭도_한국방송공사;
    "영남알프스얼음골케이블카 주식회사":       삭도_영남알프스얼음골케이블카주식회사;
    "한림팩 주식회사":                삭도_한림팩주식회사;
    "호텔금오산 주식회사":              삭도_호텔금오산주식회사;
    "사천바다케이블카 주식회사":           삭도_사천바다케이블카주식회사;
    "내장산개발 주식회사":              삭도_내장산개발주식회사;
    "설악케이블카 주식회사":             삭도_설악케이블카주식회사;
    "목포해상케이블카 주식회사":           삭도_목포해상케이블카주식회사;
    "강원도 화천군":                 삭도_강원도화천군;
    "주식회사 소노인터네셔널":            삭도_주식회사소노인터네셔널;
    "여수해상케이블카 주식회사":           삭도_여수해상케이블카주식회사;
    부산시설공단:                    삭도_부산시설공단;
    "재단법인 송암스페이스센터":           삭도_재단법인송암스페이스센터;
    "주식회사 에이치제이매그놀리아용평호텔앤리조트": 삭도_주식회사에이치제이매그놀리아용평호텔앤리조트;
    "주식회사 울진케이블카":             삭도_주식회사울진케이블카;
    "하동케이블카 주식회사":             삭도_하동케이블카주식회사;
    한국삭도공업주식회사:                삭도_한국삭도공업주식회사;
    "대덕개발 주식회사":               삭도_대덕개발주식회사;
    "경상북도 울릉군":                삭도_경상북도울릉군;
}

export interface 삭도_강원도화천군 {
    "백암산 케이블카": PuneHedgehog;
}

export interface 삭도_거제케이블카주식회사 {
    "거제 파노라마 케이블카": PuneHedgehog;
}

export interface 삭도_경상북도울릉군 {
    "독도전망대 케이블카": PuneHedgehog;
}

export interface 삭도_내장산개발주식회사 {
    "내장산 케이블카": PuneHedgehog;
}

export interface 삭도_대덕개발주식회사 {
    "앞산 케이블카": PuneHedgehog;
}

export interface 삭도_목포해상케이블카주식회사 {
    목포해상케이블카: Purple기타;
}

export interface 삭도_부산시설공단 {
    "금강공원 케이블카": PuneHedgehog;
}

export interface 삭도_사천바다케이블카주식회사 {
    사천바다케이블카: PuneHedgehog;
}

export interface 삭도_삼진관광개발주식회사 {
    "두륜산 케이블카": PuneHedgehog;
}

export interface 삭도_설악케이블카주식회사 {
    "설악 케이블카": PuneHedgehog;
}

export interface 삭도_송도해상케이블카주식회사 {
    송도해상케이블카: PuneHedgehog;
}

export interface 삭도_양지대둔산삭도유한회사 {
    "대둔산 케이블카": PuneHedgehog;
}

export interface 삭도_여수해상케이블카주식회사 {
    여수해상케이블카: PuneHedgehog;
}

export interface 삭도_영남알프스얼음골케이블카주식회사 {
    "영남알프스 얼음골 케이블카": PuneHedgehog;
}

export interface 삭도_재단법인송암스페이스센터 {
    "송암 스페이스센터 케이블카": PuneHedgehog;
}

export interface 삭도_제부도해상케이블카주식회사 {
    "제부도 해상케이블카": PuneHedgehog;
}

export interface 삭도_주식회사소노인터네셔널 {
    "춘천 삼악산 호수 케이블카": Purple기타;
}

export interface 삭도_주식회사에이치제이매그놀리아용평호텔앤리조트 {
    "발왕산 관광케이블카": Purple기타;
}

export interface 삭도_주식회사울진케이블카 {
    "왕피천 케이블카": PuneHedgehog;
}

export interface 삭도_청풍호반케이블카주식회사 {
    청풍호반케이블카: PuneHedgehog;
}

export interface 삭도_통영관광개발공사 {
    "통영 케이블카": PuneHedgehog;
}

export interface 삭도_하동케이블카주식회사 {
    "하동 플라이웨이 케이블카": PuneHedgehog;
}

export interface 삭도_한국방송공사 {
    "관악산 케이블카": PuneHedgehog;
}

export interface 삭도_한국삭도공업주식회사 {
    "남산 케이블카": PuneHedgehog;
}

export interface 삭도_한림팩주식회사 {
    "대구 팔공산 케이블카": PuneHedgehog;
}

export interface 삭도_호텔금오산주식회사 {
    "금오산 케이블카": PuneHedgehog;
}

export interface 영업_열차페리 {
    기타: 열차페리_기타;
}

export interface 열차페리_기타 {
    "부관훼리 주식회사": 기타_부관훼리주식회사;
    "미래고속 주식회사": 기타_미래고속주식회사;
}

export interface 기타_미래고속주식회사 {
    코비: Purple기타;
}

export interface 기타_부관훼리주식회사 {
    부관훼리: Purple기타;
}

export interface Sticky전용선 {
    한국철도공사:      한국철도공사_1;
    "주식회사 강원랜드": 전용선_주식회사강원랜드;
    탄광궤도:        PuneHedgehog;
}

export interface 전용선_주식회사강원랜드 {
    "하이원추추파크 전용선": Purple하이원추추파크전용선;
}

export interface Purple하이원추추파크전용선 {
    "심포리-흥전":  Purple기타;
    추추스테이션:    PuneHedgehog;
    "나한정-흥전":  PuneHedgehog;
    "도계솔-나한정": PuneHedgehog;
    레일바이크:     Purple기타;
}

export interface 한국철도공사_1 {
    경인선:     Purple경인선;
    북평선:     Fluffy북평선;
    영동선:     Tentacled영동선;
    진해선:     Fluffy진해선;
    삼척선:     Fluffy삼척선;
    북전주선:    Fluffy북전주선;
    대구선:     Fluffy대구선;
    경부선:     Fluffy경부선;
    남부화물기지선: Fluffy남부화물기지선;
    박물관:     Purple박물관;
    수색객차출발선: Purple수색객차출발선;
    중앙선:     Purple중앙선;
    문경선:     Fluffy문경선;
    경북선:     Fluffy경북선;
    태백선:     Fluffy태백선;
    호남선:     Indecent호남선;
    오송정비기지선: Purple오송정비기지선;
    괴동선:     Fluffy괴동선;
    정선선:     Purple정선선;
    온산선:     Fluffy온산선;
}

export interface Fluffy경부선 {
    의왕:        의왕;
    대전조:       대전조;
    "심천-영동기지": PuneHedgehog;
}

export interface 대전조 {
    동양시멘트선: PuneHedgehog;
}

export interface 의왕 {
    터미널선: PuneHedgehog;
}

export interface Fluffy경북선 {
    옥산: 옥산;
}

export interface 옥산 {
    한국철도차량: PuneHedgehog;
}

export interface Purple경인선 {
    인천:    { [key: string]: PuneHedgehog };
    경기화학선: Purple기타;
}

export interface Fluffy괴동선 {
    괴동: PuneHedgehog;
}

export interface Fluffy남부화물기지선 {
    오봉: { [key: string]: PuneHedgehog };
}

export interface Fluffy대구선 {
    K2인입선: Purple기타;
}

export interface Fluffy문경선 {
    주평: 주평;
}

export interface 주평 {
    쌍용양회: PuneHedgehog;
}

export interface Purple박물관 {
    철도박물관: PuneHedgehog;
}

export interface Fluffy북전주선 {
    북전주:   { [key: string]: PuneHedgehog };
    한솔CSN: PuneHedgehog;
}

export interface Fluffy북평선 {
    동해양회: PuneHedgehog;
}

export interface Fluffy삼척선 {
    삼표시멘트: PuneHedgehog;
}

export interface Purple수색객차출발선 {
    수색: 수색;
}

export interface 수색 {
    동화벌크: PuneHedgehog;
}

export interface Tentacled영동선 {
    옥계:  옥계;
    동백산: 동백산;
    철암:  Purple기타;
}

export interface 동백산 {
    경동탄광선: PuneHedgehog;
}

export interface 옥계 {
    당청출입선: Purple기타;
}

export interface Purple오송정비기지선 {
    오송: PuneHedgehog;
}

export interface Fluffy온산선 {
    "온산-온산선종점": PuneHedgehog;
}

export interface Purple정선선 {
    쇄재자갈선: PuneHedgehog;
}

export interface Purple중앙선 {
    팔당: 팔당;
    도담: { [key: string]: PuneHedgehog };
    삼곡: 삼곡;
}

export interface 삼곡 {
    한일현대시멘트: Purple기타;
}

export interface 팔당 {
    쌍용전용: PuneHedgehog;
}

export interface Fluffy진해선 {
    진해: 진해;
}

export interface 진해 {
    비료선: Purple기타;
}

export interface Fluffy태백선 {
    입석리: 입석리;
    쌍룡:  쌍룡;
}

export interface 쌍룡 {
    쌍용시멘트: PuneHedgehog;
}

export interface 입석리 {
    현대:  Purple기타;
    아세아: PuneHedgehog;
}

export interface Indecent호남선 {
    광주송: 광주송;
    노령:  노령;
}

export interface 광주송 {
    광주도시철도1호선: PuneHedgehog;
}

export interface 노령 {
    다원시스: PuneHedgehog;
}

export interface Rok폐지 {
    국철:   Sticky국철;
    사철:   Fluffy사철;
    삭도:   폐지_삭도;
    공영교통: Fluffy공영교통;
    궤도선:  Frisky궤도선;
    전용선:  Indecent전용선;
    열차페리: Fluffy열차페리;
    도시철도: Sticky도시철도;
    기타:   폐지_기타;
    지선:   Ambitious지선;
}

export interface Fluffy공영교통 {
    궤도선: Cunning궤도선;
}

export interface Cunning궤도선 {
    서울특별시: Fluffy서울특별시;
}

export interface Fluffy서울특별시 {
    "경성궤도 본선":      PuneHedgehog;
    "경성궤도 광장리선":    Purple기타;
    "경성궤도 동독도화물지선": PuneHedgehog;
}

export interface Sticky국철 {
    지선:  Hilarious지선;
    간선:  Indigo간선;
    궤도선: Magenta궤도선;
    전용선: Indigo전용선;
    버스:  Tentacled버스;
}

export interface Indigo간선 {
    한국철도공사:      한국철도공사_2;
    "조선총독부 교통국": 간선_조선총독부교통국;
    철도청:         간선_철도청;
}

export interface 간선_조선총독부교통국 {
    동해중부선: Fluffy동해중부선;
}

export interface Fluffy동해중부선 {
    학산: Purple기타;
}

export interface 간선_철도청 {
    수려선: PuneHedgehog;
}

export interface 한국철도공사_2 {
    영동선:     Sticky영동선;
    태백선:     Tentacled태백선;
    경북선:     Tentacled경북선;
    충북선:     Tentacled충북선;
    경춘선:     PuneHedgehog;
    "구 경춘선": Purple기타;
    중앙선:     Fluffy중앙선;
    함백선:     Purple함백선;
    동해남부선:   한국철도공사_동해남부선;
    경부선:     Purple기타;
    호남선:     Hilarious호남선;
    전라선:     Fluffy전라선;
    장항선:     Fluffy장항선;
    경전선:     Fluffy경전선;
    경의선:     Tentacled경의선;
    경원선:     PuneHedgehog;
    경인선:     PuneHedgehog;
    동해북부선:   Purple기타;
}

export interface Tentacled경북선 {
    "예천-어등": PuneHedgehog;
}

export interface Tentacled경의선 {
    "운천-문산":   PuneHedgehog;
    "도라산-임진강": Purple기타;
    "가좌-신촌":   PuneHedgehog;
    "금촌-금릉":   PuneHedgehog;
}

export interface Fluffy경전선 {
    진주차량:     PuneHedgehog;
    "횡천-하동":  Purple기타;
    "횡천-양보":  PuneHedgehog;
    "양보-횡천":  Purple기타;
    "다솔사-북천": Purple기타;
    "북천-양보":  Purple기타;
    "북천-다솔사": PuneHedgehog;
    "양보-북천":  PuneHedgehog;
    "다솔사-완사": Purple기타;
    "완사-유수":  Purple기타;
    "진주-유수":  Purple기타;
    "진상-하동":  Purple기타;
    "옥곡-골약":  Purple기타;
    "옥곡-진상":  Purple기타;
    "하동-횡천":  PuneHedgehog;
    "골약-광양":  Purple기타;
    횡천:       PuneHedgehog;
    낙동강:      PuneHedgehog;
    "능주-이양":  PuneHedgehog;
}

export interface 한국철도공사_동해남부선 {
    "선암-덕하":  PuneHedgehog;
    "덕하-남창":  Purple기타;
    "기장-일광":  PuneHedgehog;
    부전:       Purple기타;
    "재송-수영":  PuneHedgehog;
    "수영-송정":  PuneHedgehog;
    "송정-기장":  PuneHedgehog;
    "좌천-월내":  Purple기타;
    "일광-좌천":  Purple기타;
    좌천_운행선변경: PuneHedgehog;
    "월내-서생":  PuneHedgehog;
    "남창-서생":  Purple기타;
    "남창-덕하":  PuneHedgehog;
    "부조-신부조": PuneHedgehog;
    "신부조-부조": PuneHedgehog;
    "부조-양자동": PuneHedgehog;
    "양자동-부조": PuneHedgehog;
    "안강-사방":  Purple기타;
    "사방-안강":  PuneHedgehog;
    "양자동-안강": Purple기타;
    "안강-양자동": PuneHedgehog;
    "사방-청령":  PuneHedgehog;
    "청령-사방":  PuneHedgehog;
    "청령-나원":  PuneHedgehog;
    "나원-청령":  Purple기타;
    "?":      PuneHedgehog;
    "부조-효자":  PuneHedgehog;
    "효문-태화강": PuneHedgehog;
    "호계-효문":  Purple기타;
    "태화강-효문": PuneHedgehog;
    "효문-호계":  PuneHedgehog;
    "모화-호계":  Purple기타;
    "호계-모화":  PuneHedgehog;
    "입실-모화":  Purple기타;
    "모화-입실":  Purple기타;
    "죽동-입실":  Purple기타;
    "입실-죽동":  PuneHedgehog;
    "불국사-죽동": Purple기타;
    "죽동-불국사": PuneHedgehog;
    "동방-불국사": Purple기타;
    "불국사-동방": PuneHedgehog;
    "경주-동방":  Purple기타;
    "동방-경주":  Purple기타;
    "경주-나원":  Purple기타;
    "나원-경주":  PuneHedgehog;
    효자:       PuneHedgehog;
    "효자-포항":  Purple기타;
    경주:       PuneHedgehog;
    경주차량:     PuneHedgehog;
    "안강-부조":  Purple기타;
    입실:       PuneHedgehog;
    "효문-병영":  Purple기타;
    "선암-효문":  Purple기타;
    사방:       Purple기타;
}

export interface Sticky영동선 {
    "옥계-망상해": PuneHedgehog;
    심포리:      PuneHedgehog;
    나한정:      PuneHedgehog;
    흥전:       PuneHedgehog;
    "통리-심포리": PuneHedgehog;
    경포대:      Purple기타;
    영동선종점:    PuneHedgehog;
}

export interface Fluffy장항선 {
    "간치-웅천":   Purple기타;
    "웅천-남포":   Purple기타;
    "판교-간치":   PuneHedgehog;
    간치:        PuneHedgehog;
    "주포-남포":   Purple기타;
    "간치-장항":   Purple기타;
    학성:        PuneHedgehog;
    "삽교-신성":   Purple기타;
    "삽교-화양":   PuneHedgehog;
    "천안-온양온":  Purple기타;
    "온양온-신례원": PuneHedgehog;
    간치_전차대:    PuneHedgehog;
    "천안-쌍용나":  PuneHedgehog;
    장항화물:      PuneHedgehog;
}

export interface Fluffy전라선 {
    죽림온:           죽림온;
    "경전북부선-":      PuneHedgehog;
    "주생-금지":       Purple기타;
    "신성-주생":       Purple기타;
    "금지-곡성":       Purple기타;
    "신리-관촌":       Purple기타;
    "아중-신리":       Purple기타;
    "관촌-산성":       Purple기타;
    "북전주-신리":      Purple기타;
    "익산-동익산":      Purple기타;
    "삼례-동산":       PuneHedgehog;
    "남관-관촌":       PuneHedgehog;
    "만성-여수":       PuneHedgehog;
    여수:            PuneHedgehog;
    "성산-율촌":       Purple기타;
    "순천-성산":       Purple기타;
    "덕양-만성":       Purple기타;
    "구례구-동순천":     Purple기타;
    "압록-구례구":      Purple기타;
    "동순천-순천":      PuneHedgehog;
    경전북부선:         PuneHedgehog;
    "가정-압록":       PuneHedgehog;
    "?":           PuneHedgehog;
    "아중-신리 레일바이크": PuneHedgehog;
    "전주-아중":       PuneHedgehog;
    "동산-전주":       PuneHedgehog;
    "동산-신리":       PuneHedgehog;
}

export interface 죽림온 {
    피난선: PuneHedgehog;
}

export interface Fluffy중앙선 {
    "업동-망호":       Purple기타;
    동교:            Purple기타;
    팔당:            PuneHedgehog;
    "덕소-팔당":       Purple기타;
    "도농-덕소":       Purple기타;
    "팔당-국수":       Purple기타;
    "국수-양평":       Purple기타;
    능내:            PuneHedgehog;
    "양평-원덕":       Purple기타;
    "원덕-용문":       Purple기타;
    "지평-양동":       Purple기타;
    "양동-동화":       Purple기타;
    "만종-동화":       Purple기타;
    "구학-봉양":       Purple기타;
    봉양:            PuneHedgehog;
    "창교-신림":       Purple기타;
    "치악-창교":       Purple기타;
    "연교-구학":       Purple기타;
    "신림-연교":       Purple기타;
    "유교-반곡":       Purple기타;
    "원주-유교":       Purple기타;
    "금교-치악":       PuneHedgehog;
    "반곡-금교":       Purple기타;
    원주:            PuneHedgehog;
    "봉양-제천조":      Purple기타;
    "제천조-봉양":      PuneHedgehog;
    "제천-제천조-_화물":  PuneHedgehog;
    "도담-단성":       Purple기타;
    "단양-단성":       Purple기타;
    단성:            PuneHedgehog;
    "단성-죽령":       Purple기타;
    "삼곡-도담":       Purple기타;
    "고명-삼곡":       Purple기타;
    "제천-고명":       PuneHedgehog;
    "도담-단양":       Purple기타;
    "풍기-희방사":      Purple기타;
    "풍기-안정":       Purple기타;
    "희방사-죽령":      Purple기타;
    "안정-북영주":      Purple기타;
    영주:            Purple기타;
    "옹천-문수":       Purple기타;
    "승문-옹천":       Purple기타;
    "문수-영주":       Purple기타;
    "마사-이하":       Purple기타;
    "이하-서지":       PuneHedgehog;
    "무릉-운산":       Purple기타;
    "운산-단촌":       Purple기타;
    "옹천-마사":       Purple기타;
    "서지-안동":       Purple기타;
    "안동-무릉":       Purple기타;
    "무릉-망호":       PuneHedgehog;
    "업동-단촌":       PuneHedgehog;
    "영천-북영천":      PuneHedgehog;
    "송포-임포":       Purple기타;
    "영천-송포":       Purple기타;
    "모량-율동":       Purple기타;
    "건천-모량":       Purple기타;
    "율동-서경주":      Purple기타;
    "아화-건천":       Purple기타;
    "임포-아화":       Purple기타;
    임포:            PuneHedgehog;
    "경주신호장-경주":    PuneHedgehog;
    경주삼각선:         PuneHedgehog;
    "서경주-경주":      Purple기타;
    "도담-단양 운행선변경": PuneHedgehog;
    "만종-원주":       Purple기타;
    "건천-나원":       Purple기타;
    "용문-지평":       Purple기타;
    "의성-업동":       PuneHedgehog;
}

export interface Tentacled충북선 {
    청주:              { [key: string]: PuneHedgehog };
    "달천-주덕":         PuneHedgehog;
    음성:              Purple기타;
    충주:              PuneHedgehog;
    "동량 - 삼탄":       Purple기타;
    "공전 - 봉양":       PuneHedgehog;
    "증평 - 보천":       Purple기타;
    "보천 - 음성":       PuneHedgehog;
    "1969-19801017": Purple기타;
    오근장:             Purple기타;
    "내수 - 증평":       PuneHedgehog;
    "음성 - 소이":       PuneHedgehog;
}

export interface Tentacled태백선 {
    "입석리-제천": Purple기타;
    영월:       PuneHedgehog;
    "청령포-영월": Purple기타;
    고한:       PuneHedgehog;
    "쌍룡-연당":  PuneHedgehog;
    예미:       PuneHedgehog;
    태백:       PuneHedgehog;
}

export interface Purple함백선 {
    예미: PuneHedgehog;
}

export interface Hilarious호남선 {
    "서대전-가수원": PuneHedgehog;
    서대전:       PuneHedgehog;
    "가수원-흑석리": Purple기타;
    "흑석리-원정":  PuneHedgehog;
    "계룡-흑석리":  PuneHedgehog;
    "개태사-연산":  PuneHedgehog;
    부황:        Purple기타;
    "논산-채운":   PuneHedgehog;
    "강경-용동":   PuneHedgehog;
    "용동-함열":   PuneHedgehog;
    "김제-와룡":   PuneHedgehog;
    부용:        PuneHedgehog;
    "부용-익산분":  PuneHedgehog;
    "와룡-김제":   Purple기타;
    김제:        PuneHedgehog;
    "감곡-신태인":  Purple기타;
    정읍:        Purple기타;
    초강:        Purple기타;
    노령:        Purple기타;
    "백양사-안평":  Purple기타;
    하남:        Purple기타;
    "광주송-노안":  Purple기타;
    "나주-다시":   Purple기타;
    노안:        Purple기타;
    "고막원-무안":  Purple기타;
    "임성리-목포":  Purple기타;
    "몽탄-임성리":  Purple기타;
    "무안-몽탄":   PuneHedgehog;
    다시:        PuneHedgehog;
    "옥정-임곡":   PuneHedgehog;
}

export interface Magenta궤도선 {
    "농림부 산림국":   궤도선_농림부산림국;
    "조선총독부 농림성": 조선총독부농림성;
}

export interface 궤도선_농림부산림국 {
    "가곡천 산림철도": Purple기타;
}

export interface 조선총독부농림성 {
    "마읍천 산림철도": Purple기타;
}

export interface Tentacled버스 {
    "조선총독부 철도국": Tentacled조선총독부철도국;
}

export interface Tentacled조선총독부철도국 {
    "조선총독부 철도국 자동차 광려본선":    PuneHedgehog;
    "조선총독부 철도국 자동차 화순선":     PuneHedgehog;
    "조선총독부 철도국 자동차 동복선":     PuneHedgehog;
    "조선총독부 철도국 자동차 곡순선":     PuneHedgehog;
    "조선총독부 철도국 연락자동차 경원훈춘선": Purple기타;
}

export interface Indigo전용선 {
    대한석탄공사: 전용선_대한석탄공사;
}

export interface 전용선_대한석탄공사 {
    화순선:                Purple화순선;
    "함백탄광 전용철도 단곡 삭도":  PuneHedgehog;
    "함백탄광 전용철도 선탄강삭철도": PuneHedgehog;
    "함백탄광 전용철도":        Purple기타;
    "함태탄광 전용철도":        PuneHedgehog;
}

export interface Purple화순선 {
    화순:      PuneHedgehog;
    "복암-화순": Purple기타;
}

export interface Hilarious지선 {
    철도청:         Fluffy철도청;
    한국철도공사:      한국철도공사_3;
    대한석탄공사:      지선_대한석탄공사;
    한국중부발전:      한국중부발전;
    "조선총독부 교통국": 지선_조선총독부교통국;
    교통부:         지선_교통부;
    "조선총독부 철도국": Sticky조선총독부철도국;
}

export interface 지선_교통부 {
    동촌연결선: PuneHedgehog;
}

export interface 지선_대한석탄공사 {
    "은성탄광 전용철도": Purple기타;
}

export interface 지선_조선총독부교통국 {
    경전서부선: Purple기타;
}

export interface Sticky조선총독부철도국 {
    월미도지선: Purple기타;
}

export interface Fluffy철도청 {
    우암선:   Fluffy우암선;
    김포선:   Purple기타;
    서청주선:  Purple기타;
    진삼선:   Purple기타;
    주인선:   Purple기타;
    문현선:   PuneHedgehog;
    울산선:   PuneHedgehog;
    오정선:   PuneHedgehog;
    옥서삼각선: PuneHedgehog;
    당인리선:  PuneHedgehog;
    신촌연결선: PuneHedgehog;
    안성선:   Purple기타;
}

export interface Fluffy우암선 {
    "부전-우암": Purple기타;
}

export interface 한국중부발전 {
    서천화력선: Purple기타;
}

export interface 한국철도공사_3 {
    여천선:        Fluffy여천선;
    옥구선:        Purple옥구선;
    진해선:        Tentacled진해선;
    광양제철선:      Fluffy광양제철선;
    사천선:        Purple사천선;
    제천조차장선:     Fluffy제천조차장선;
    가야선:        Fluffy가야선;
    부전선:        Fluffy부전선;
    울산항선:       PuneHedgehog;
    장생포선:       { [key: string]: PuneHedgehog };
    금장삼각선:      { [key: string]: PuneHedgehog };
    천안직결선:      Fluffy천안직결선;
    수인선:        Purple기타;
    장항선:        Tentacled장항선;
    군산화물선:      한국철도공사_군산화물선;
    장항화물선:      Purple장항화물선;
    남포선:        Purple남포선;
    덕산선:        { [key: string]: PuneHedgehog };
    경전선:        PuneHedgehog;
    광주선:        Fluffy광주선;
    수색객차출발선:    Fluffy수색객차출발선;
    서울교외선:      Fluffy서울교외선;
    망우선:        Fluffy망우선;
    대구선:        Purple기타;
    가은선:        Purple기타;
    문경선:        PuneHedgehog;
    북영주삼각선:     PuneHedgehog;
    마산항제1부두선:   Purple기타;
    "구 대구선":    PuneHedgehog;
    영천삼각선:      PuneHedgehog;
    "구 대전남연결선": Purple기타;
    정양선:        Purple기타;
}

export interface Fluffy가야선 {
    "주례-가야": PuneHedgehog;
}

export interface Fluffy광양제철선 {
    "광양-초남": PuneHedgehog;
}

export interface Fluffy광주선 {
    "구 광주": Purple기타;
}

export interface 한국철도공사_군산화물선 {
    "군산화-군산화물선종점": PuneHedgehog;
    "개정-군산분":      Purple기타;
    "군산화-개정":      Purple기타;
    군산항:           PuneHedgehog;
    군산분:           PuneHedgehog;
}

export interface Purple남포선 {
    옥마:      PuneHedgehog;
    "남포-옥마": Purple기타;
}

export interface Fluffy망우선 {
    이문: PuneHedgehog;
}

export interface Fluffy부전선 {
    "부전-가야": PuneHedgehog;
}

export interface Fluffy서울교외선 {
    일영: PuneHedgehog;
}

export interface Fluffy수색객차출발선 {
    수색: PuneHedgehog;
}

export interface Fluffy여천선 {
    "덕양-흥국사": PuneHedgehog;
}

export interface Tentacled장항선 {
    "군산분-구대야": PuneHedgehog;
    "구대야-임피":  Purple기타;
    "구대야-군산분": PuneHedgehog;
    "익산-오산리":  PuneHedgehog;
    "오산리-임피":  Purple기타;
    "임피-구대야":  PuneHedgehog;
}

export interface Purple장항화물선 {
    장항화:      PuneHedgehog;
    "장항-장항화": Purple기타;
}

export interface Fluffy제천조차장선 {
    "제천조-제천": PuneHedgehog;
}

export interface Tentacled진해선 {
    "신창원-창원":  PuneHedgehog;
    "신창원-성주사": Purple기타;
}

export interface Fluffy천안직결선 {
    "두정-천안": 온양온신창;
}

export interface Frisky궤도선 {
    함평궤도주식회사:      궤도선_함평궤도주식회사;
    서울특별시:         Tentacled서울특별시;
    "남선합동전기 주식회사": 남선합동전기주식회사;
    제주도순환궤도:       궤도선_제주도순환궤도;
}

export interface 남선합동전기주식회사 {
    "부산전차 광복동선": Purple기타;
    "부산전차 영도선":  PuneHedgehog;
    "부산전차 대청정선": PuneHedgehog;
    "부산전차 장수선":  PuneHedgehog;
}

export interface Tentacled서울특별시 {
    "서울전차 의주로선":   PuneHedgehog;
    "서울전차 창경원선":   PuneHedgehog;
    "서울전차 동대문차고선": PuneHedgehog;
    "서울전차 삼각지차고선": PuneHedgehog;
    "서울전차 마포차고선":  PuneHedgehog;
    "서울전차 장춘단선":   PuneHedgehog;
    "서울전차 충무로선":   PuneHedgehog;
    "서울전차 왕십리선":   PuneHedgehog;
    "서울전차 종로삼각선":  PuneHedgehog;
    "서울전차 강안선":    PuneHedgehog;
    "서울전차 돈암동선":   PuneHedgehog;
    "서울전차 마포선":    PuneHedgehog;
    "서울전차 서대문선":   PuneHedgehog;
    "서울전차 영천선":    PuneHedgehog;
    "서울전차 석산선":    PuneHedgehog;
    "서울전차 노량진선":   PuneHedgehog;
    "서울전차 을지로선":   PuneHedgehog;
    "서울전차 을지로삼각선": PuneHedgehog;
    "서울전차 동대문삼각선": PuneHedgehog;
    "서울전차 영등포차고선": PuneHedgehog;
    "서울전차 영등포선":   Purple기타;
    "서울전차 구용산선":   PuneHedgehog;
    "서울전차 청량리선":   PuneHedgehog;
    "서울전차 종로선":    PuneHedgehog;
    "서울전차 경용선":    Purple기타;
    "서울전차 광화문선":   PuneHedgehog;
    "서울전차 세종로선":   PuneHedgehog;
    "서울전차 안국동선":   PuneHedgehog;
    "서울전차 효자동선":   PuneHedgehog;
}

export interface 궤도선_제주도순환궤도 {
    제주도순환궤도: Purple기타;
}

export interface 궤도선_함평궤도주식회사 {
    함평궤도: Purple기타;
}

export interface 폐지_기타 {
    공항철도:    Fluffy공항철도;
    국립중앙과학관: 기타_국립중앙과학관;
    도계광업소:   Fluffy도계광업소;
}

export interface Fluffy공항철도 {
    인천국제공항철도: Fluffy인천국제공항철도;
}

export interface Fluffy인천국제공항철도 {
    "구 공항연결선": PuneHedgehog;
}

export interface 기타_국립중앙과학관 {
    대전자기부상시험선: PuneHedgehog;
}

export interface Fluffy도계광업소 {
    "도계광업소 삭도": PuneHedgehog;
}

export interface Sticky도시철도 {
    한국철도공사: 한국철도공사_4;
    서울교통공사: Fluffy서울교통공사;
}

export interface Fluffy서울교통공사 {
    "서울교통공사 3호선 수서기지선": Purple서울교통공사3호선수서기지선;
    "서울교통공사 4호선 창동기지선": Purple서울교통공사4호선창동기지선;
}

export interface Purple서울교통공사3호선수서기지선 {
    "수서기-수서": PuneHedgehog;
}

export interface Purple서울교통공사4호선창동기지선 {
    창동기지: PuneHedgehog;
}

export interface 한국철도공사_4 {
    분당선: Fluffy분당선;
}

export interface Fluffy분당선 {
    "수서-수서기": PuneHedgehog;
}

export interface Fluffy사철 {
    경성전기주식회사:   사철_경성전기주식회사;
    조선철도주식회사:   사철_조선철도주식회사;
    궤도선:        Mischievous궤도선;
    조선경남철도주식회사: 사철_조선경남철도주식회사;
    버스:         사철_버스;
}

export interface 사철_경성전기주식회사 {
    금강산선: PuneHedgehog;
}

export interface Mischievous궤도선 {
    "왜관궤도 주식회사": 궤도선_왜관궤도주식회사;
    "김제궤도 주식회사": Fluffy김제궤도주식회사;
}

export interface Fluffy김제궤도주식회사 {
    김제궤도: Purple기타;
}

export interface 궤도선_왜관궤도주식회사 {
    왜관궤도: PuneHedgehog;
}

export interface 사철_버스 {
    조선경남철도주식회사: 버스_조선경남철도주식회사;
}

export interface 버스_조선경남철도주식회사 {
    "조선경남철도 승합자동차선": Purple기타;
}

export interface 사철_조선경남철도주식회사 {
    장항항선: PuneHedgehog;
}

export interface 사철_조선철도주식회사 {
    "구 경북선": Purple기타;
}

export interface 폐지_삭도 {
    조선전업주식회사:   삭도_조선전업주식회사;
    송도해상케이블카:   삭도_송도해상케이블카;
    "보문산 케이블카": 삭도_보문산케이블카;
    "화천댐 삭도":   PuneHedgehog;
}

export interface 삭도_보문산케이블카 {
    "보문산 케이블카": PuneHedgehog;
}

export interface 삭도_송도해상케이블카 {
    "(구)송도해상케이블카": PuneHedgehog;
}

export interface 삭도_조선전업주식회사 {
    "영월광업소 삭도": Purple기타;
}

export interface Fluffy열차페리 {
    조선경남철도주식회사: 열차페리_조선경남철도주식회사;
}

export interface 열차페리_조선경남철도주식회사 {
    "장항-군산 연락선": PuneHedgehog;
}

export interface Indecent전용선 {
    한국철도공사:        한국철도공사_5;
    도계광업소:         전용선_도계광업소;
    "주식회사 삼척탄좌개발": 전용선_주식회사삼척탄좌개발;
    서울특별시:         전용선_서울특별시;
    철도청:           전용선_철도청;
    궤도선:           Braggadocious궤도선;
    "조선총독부 철도국":   전용선_조선총독부철도국;
    "북한 철도성":      Frisky북한철도성;
    "진해 웅동수원지":    Purple기타;
    섬진강댐가설철도:      PuneHedgehog;
    기타:            PuneHedgehog;
}

export interface Braggadocious궤도선 {
    "조선총독부 철도국": 궤도선_조선총독부철도국;
    "북한 철도성":    Magenta북한철도성;
}

export interface Magenta북한철도성 {
    평라선: Fluffy평라선;
}

export interface Fluffy평라선 {
    "룡현 석탄궤도": PuneHedgehog;
}

export interface 궤도선_조선총독부철도국 {
    마포지선궤도: PuneHedgehog;
}

export interface 전용선_도계광업소 {
    전용궤도: PuneHedgehog;
}

export interface Frisky북한철도성 {
    평라선: Tentacled평라선;
}

export interface Tentacled평라선 {
    경성사리선: PuneHedgehog;
}

export interface 전용선_서울특별시 {
    "경성궤도 본선": 서울특별시_경성궤도본선;
}

export interface 서울특별시_경성궤도본선 {
    자갈선: PuneHedgehog;
}

export interface 전용선_조선총독부철도국 {
    용산선: PuneHedgehog;
}

export interface 전용선_주식회사삼척탄좌개발 {
    "정암탄광 전용철도": PuneHedgehog;
}

export interface 전용선_철도청 {
    문현선:   Purple문현선;
    동해남부선: Purple동해남부선;
    경부선:   Tentacled경부선;
    전라선:   Tentacled전라선;
    동해북부선: Sticky동해북부선;
    안성선:   Purple안성선;
}

export interface Tentacled경부선 {
    황간흑연채취선: Purple기타;
}

export interface Purple동해남부선 {
    원리신호소: Purple기타;
    수영:    PuneHedgehog;
}

export interface Sticky동해북부선 {
    양양철광지선: Purple기타;
}

export interface Purple문현선 {
    조선방직: PuneHedgehog;
}

export interface Purple안성선 {
    입장사리선: PuneHedgehog;
}

export interface Tentacled전라선 {
    신월비행장: Purple기타;
}

export interface 한국철도공사_5 {
    경부선:     Sticky경부선;
    수인선:     Fluffy수인선;
    경인선:     Fluffy경인선;
    영동선:     Indigo영동선;
    묵호항선:    Fluffy묵호항선;
    경북선:     { [key: string]: PuneHedgehog };
    충북선:     Sticky충북선;
    진해선:     Sticky진해선;
    여천선:     Tentacled여천선;
    중앙선:     Tentacled중앙선;
    동해남부선:   { [key: string]: PuneHedgehog };
    삼척선:     Tentacled삼척선;
    호남선:     Ambitious호남선;
    북전주선:    Tentacled북전주선;
    군산화물선:   { [key: string]: PuneHedgehog };
    장항화물선:   { [key: string]: PuneHedgehog };
    경전선:     Tentacled경전선;
    덕산선:     Fluffy덕산선;
    광주선:     { [key: string]: PuneHedgehog };
    경의선:     Sticky경의선;
    서울교외선:   { [key: string]: PuneHedgehog };
    경원선:     Indigo경원선;
    "구 대구선": Purple구대구선;
    대구선:     { [key: string]: PuneHedgehog };
    전라선:     { [key: string]: PuneHedgehog };
    장항선:     { [key: string]: PuneHedgehog };
    경춘선:     { [key: string]: PuneHedgehog };
    동해북부선:   Indigo동해북부선;
    "구 경춘선": Purple구경춘선;
}

export interface Sticky경부선 {
    부산진:            부산진;
    밀양자갈선:          PuneHedgehog;
    대성연탄선:          PuneHedgehog;
    영등포:            PuneHedgehog;
    안양자갈선:          PuneHedgehog;
    부강:             PuneHedgehog;
    신탄진자갈선:         PuneHedgehog;
    연초제조장선:         PuneHedgehog;
    추풍령자갈선:         PuneHedgehog;
    약목:             PuneHedgehog;
    "밀양자갈선~1930이전": PuneHedgehog;
    심천사리선:          PuneHedgehog;
    상동자갈선:          PuneHedgehog;
    대성사리선:          PuneHedgehog;
    밀양사리선:          PuneHedgehog;
    구포:             PuneHedgehog;
}

export interface 부산진 {
    동아제분선: PuneHedgehog;
}

export interface Indigo경원선 {
    창동:     PuneHedgehog;
    양주:     Purple기타;
    서빙고사리선: PuneHedgehog;
    대성리사리선: PuneHedgehog;
}

export interface Sticky경의선 {
    능곡: PuneHedgehog;
}

export interface Fluffy경인선 {
    인천:     { [key: string]: PuneHedgehog };
    경기화학선:  PuneHedgehog;
    제일제당공업: PuneHedgehog;
    천왕기지:   PuneHedgehog;
}

export interface Tentacled경전선 {
    중리:    PuneHedgehog;
    이양사리선: PuneHedgehog;
}

export interface Purple구경춘선 {
    신공덕: PuneHedgehog;
}

export interface Purple구대구선 {
    K2인입선: PuneHedgehog;
}

export interface Fluffy덕산선 {
    덕산선종점: PuneHedgehog;
}

export interface Indigo동해북부선 {
    문암사리선: PuneHedgehog;
}

export interface Fluffy묵호항선 {
    묵호항: PuneHedgehog;
}

export interface Tentacled북전주선 {
    북전주: 북전주;
}

export interface 북전주 {
    한일선: PuneHedgehog;
}

export interface Tentacled삼척선 {
    삼척화력선: PuneHedgehog;
}

export interface Fluffy수인선 {
    학익:   PuneHedgehog;
    소래:   소래;
    군자염전: PuneHedgehog;
}

export interface 소래 {
    소래염전: PuneHedgehog;
}

export interface Tentacled여천선 {
    "흥국사-적량": PuneHedgehog;
}

export interface Indigo영동선 {
    동해:      PuneHedgehog;
    신기:      PuneHedgehog;
    "신기-상정": PuneHedgehog;
    미로:      PuneHedgehog;
    분천자갈선:   PuneHedgehog;
    나한정자갈선:  PuneHedgehog;
}

export interface Tentacled중앙선 {
    영천:    영천;
    양평자갈선: PuneHedgehog;
    안정자갈선: PuneHedgehog;
    용문사리선: PuneHedgehog;
    봉양사리선: PuneHedgehog;
    안정사리선: PuneHedgehog;
    평은자갈선: PuneHedgehog;
    운산사리선: PuneHedgehog;
    우보사리선: PuneHedgehog;
}

export interface 영천 {
    무연탄하화선: PuneHedgehog;
}

export interface Sticky진해선 {
    진해:     { [key: string]: PuneHedgehog };
    성주사사리선: PuneHedgehog;
}

export interface Sticky충북선 {
    주덕: PuneHedgehog;
    달천: PuneHedgehog;
    충주: PuneHedgehog;
    음성: PuneHedgehog;
}

export interface Ambitious호남선 {
    서대전:   PuneHedgehog;
    가수원:   PuneHedgehog;
    논산:    Purple기타;
    정읍:    PuneHedgehog;
    삼학도선:  PuneHedgehog;
    다시사리선: PuneHedgehog;
}

export interface Ambitious지선 {
    궤도선: 지선_궤도선;
}

export interface 지선_궤도선 {
    "조선총독부 철도국": 궤도선_조선총독부철도국;
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
    한국철도공사: 한국철도공사_6;
}

export interface 한국철도공사_6 {
    대불선:        Fluffy대불선;
    경인선:        { [key: string]: TartuGecko };
    군산항선:       { [key: string]: TartuGecko };
    울산신항선:      Fluffy울산신항선;
    대구선:        { [key: string]: TartuGecko };
    대전선:        { [key: string]: TartuGecko };
    옥구선:        { [key: string]: TartuGecko };
    북전주선:       { [key: string]: TartuGecko };
    중앙선:        { [key: string]: TartuGecko };
    태백선:        { [key: string]: TartuGecko };
    영동선:        { [key: string]: TartuGecko };
    용산삼각선:      { [key: string]: TartuGecko };
    우암선:        { [key: string]: TartuGecko };
    울산항선:       { [key: string]: TartuGecko };
    대전철도차량정비단선: { [key: string]: TartuGecko };
    진해선:        { [key: string]: TartuGecko };
    장항선:        Sticky장항선;
    군산화물선:      { [key: string]: TartuGecko };
    경원선:        { [key: string]: TartuGecko };
    경부선:        Indigo경부선;
    경의선:        { [key: string]: TartuGecko };
    서울교외선:      { [key: string]: TartuGecko };
    호남선:        { [key: string]: TartuGecko };
    덕산선:        { [key: string]: TartuGecko };
    경전선:        { [key: string]: TartuGecko };
    광주선:        Tentacled광주선;
    북송정삼각선:     Fluffy북송정삼각선;
    오송선:        Purple오송선;
    충북선:        { [key: string]: TartuGecko };
    "구 경춘선":    Fluffy구경춘선;
    동해선:        Purple동해선;
    함백선:        Fluffy함백선;
    북평선:        { [key: string]: TartuGecko };
    삼척선:        Sticky삼척선;
    정선선:        { [key: string]: TartuGecko };
    경북선:        { [key: string]: TartuGecko };
    문경선:        { [key: string]: TartuGecko };
    장생포선:       { [key: string]: TartuGecko };
    괴동선:        Tentacled괴동선;
    강경선:        { [key: string]: TartuGecko };
    온산선:        Tentacled온산선;
    사천선:        { [key: string]: TartuGecko };
}

export interface TartuGecko {
    "@id":       string;
    description: string;
    LookAt:      LookAt;
    styleUrl:    string;
    Region?:     Region;
    Point:       PurplePoint;
}

export interface LookAt {
    longitude: string;
    latitude:  string;
    altitude:  string;
    heading:   string;
    tilt:      string;
    range:     string;
}

export interface PurplePoint {
    coordinates: string;
}

export interface Indigo경부선 {
    눈들:  TartuGecko;
    풍성:  TartuGecko;
    광암:  TartuGecko;
    오류:  TartuGecko;
    송곡:  TartuGecko;
    청남:  TartuGecko;
    대자동: TartuGecko;
    단애:  TartuGecko;
    상봉:  TartuGecko;
    신안1: TartuGecko;
    신안:  TartuGecko;
    연화:  TartuGecko;
}

export interface Tentacled광주선 {
    부동:  TartuGecko;
    우산:  TartuGecko;
    운남:  TartuGecko;
    신가:  TartuGecko;
    경기장: TartuGecko;
    재매:  TartuGecko;
}

export interface Tentacled괴동선 {
    지곡: TartuGecko;
    효자: TartuGecko;
    송동: TartuGecko;
}

export interface Fluffy구경춘선 {
    갈매3: TartuGecko;
    화접:  TartuGecko;
}

export interface Fluffy대불선 {
    대불공단: TartuGecko;
}

export interface Purple동해선 {
    범천: TartuGecko;
}

export interface Fluffy북송정삼각선 {
    소촌:  TartuGecko;
    신역2: TartuGecko;
}

export interface Sticky삼척선 {
    나안: TartuGecko;
    삼척: TartuGecko;
}

export interface Purple오송선 {
    신안1: TartuGecko;
}

export interface Tentacled온산선 {
    온산: TartuGecko;
    대정: TartuGecko;
    달포: TartuGecko;
}

export interface Fluffy울산신항선 {
    모래:  TartuGecko;
    광석:  TartuGecko;
    용연:  TartuGecko;
    철송장: TartuGecko;
}

export interface Sticky장항선 {
    소반: TartuGecko;
    신촌: TartuGecko;
    신진: TartuGecko;
    옹암: TartuGecko;
    양촌: TartuGecko;
    석포: TartuGecko;
    원죽: TartuGecko;
    진죽: TartuGecko;
    광산: TartuGecko;
    신동: TartuGecko;
    보령: TartuGecko;
    능동: TartuGecko;
    통사: TartuGecko;
    우산: TartuGecko;
}

export interface Fluffy함백선 {
    길운: TartuGecko;
    조동: TartuGecko;
}

export interface 영업중_주식회사강원랜드 {
    "하이원추추파크 전용선": { [key: string]: TartuGecko };
}

export interface 건널목_폐지 {
    국유철도:   Fluffy국유철도;
    대한석탄공사: Purple대한석탄공사;
}

export interface Fluffy국유철도 {
    한국철도공사: 한국철도공사_7;
}

export interface 한국철도공사_7 {
    대전선:     Fluffy대전선;
    경부선:     { [key: string]: TartuGecko };
    장항선:     { [key: string]: TartuGecko };
    장항화물선:   Fluffy장항화물선;
    경원선:     { [key: string]: TartuGecko };
    경의선:     { [key: string]: TartuGecko };
    서울교외선:   { [key: string]: TartuGecko };
    경인선:     { [key: string]: TartuGecko };
    호남선:     { [key: string]: TartuGecko };
    전라선:     { [key: string]: TartuGecko };
    미전선:     Purple미전선;
    경전선:     { [key: string]: TartuGecko };
    광주선:     Sticky광주선;
    북송정삼각선:  Tentacled북송정삼각선;
    오송선:     { [key: string]: TartuGecko };
    충북선:     { [key: string]: TartuGecko };
    "구 경춘선": { [key: string]: TartuGecko };
    경춘선:     { [key: string]: TartuGecko };
    중앙선:     { [key: string]: TartuGecko };
    동해남부선:   { [key: string]: TartuGecko };
    태백선:     { [key: string]: TartuGecko };
    영동선:     { [key: string]: TartuGecko };
    북평선:     Tentacled북평선;
    정선선:     Fluffy정선선;
    경북선:     { [key: string]: TartuGecko };
    대구선:     { [key: string]: TartuGecko };
    주인선:     주인선;
    금장삼각선:   { [key: string]: TartuGecko };
    우암선:     Tentacled우암선;
    진해선:     Indigo진해선;
}

export interface Sticky광주선 {
    우석:  TartuGecko;
    죽림:  TartuGecko;
    부광주: TartuGecko;
}

export interface Fluffy대전선 {
    홍도1: TartuGecko;
}

export interface Purple미전선 {
    송지:   TartuGecko;
    낙동강2: TartuGecko;
}

export interface Tentacled북송정삼각선 {
    신역1: TartuGecko;
}

export interface Tentacled북평선 {
    제철2: TartuGecko;
}

export interface Tentacled우암선 {
    쿨스: TartuGecko;
}

export interface Fluffy장항화물선 {
    수동: TartuGecko;
    성주: TartuGecko;
    창신: TartuGecko;
    삼선: TartuGecko;
    군장: TartuGecko;
    항만: TartuGecko;
    한솔: TartuGecko;
}

export interface Fluffy정선선 {
    장열2: TartuGecko;
    가평:  TartuGecko;
}

export interface 주인선 {
    석정: TartuGecko;
}

export interface Indigo진해선 {
    소계: TartuGecko;
}

export interface Purple대한석탄공사 {
    화순선: Fluffy화순선;
}

export interface Fluffy화순선 {
    복암:  TartuGecko;
    동암:  TartuGecko;
    정동:  TartuGecko;
    능소:  TartuGecko;
    대암:  TartuGecko;
    충의:  TartuGecko;
    다지:  TartuGecko;
    광덕:  TartuGecko;
    만연:  TartuGecko;
    삼천리: TartuGecko;
    서양:  TartuGecko;
    벽라:  TartuGecko;
}

export interface 영업시설 {
    영업중:  영업시설_영업중;
    폐지:   영업시설_폐지;
    개업예정: 개업예정;
}

export interface 개업예정 {
    공영교통:                  개업예정_공영교통;
    신분당선:                  { [key: string]: TartuGecko };
    공항철도:                  개업예정_공항철도;
    "지티엑스에이운영 주식회사":       { [key: string]: { [key: string]: TartuGecko } };
    국유철도:                  개업예정_국유철도;
    "수도권 광역급행철도 B노선":      { [key: string]: TartuGecko };
    "수도권 광역급행철도 B노선 연결선":  수도권광역급행철도B노선연결선;
    "수도권 광역급행철도 B노선 기지선":  수도권광역급행철도B노선기지선;
    "수도권 광역급행철도 C노선":      { [key: string]: TartuGecko };
    "수도권 광역급행철도 C노선 기지선":  수도권광역급행철도C노선기지선;
    신안산선:                  { [key: string]: TartuGecko };
    별내선:                   개업예정_별내선;
    남양주도시공사:               개업예정_남양주도시공사;
    "신안산선 지선":             개업예정_신안산선지선;
    "서해철도 주식회사":           개업예정_서해철도주식회사;
    "판교 랜드마크 트램":          { [key: string]: TartuGecko };
    "판교 랜드마크 트램 기지선":      { [key: string]: TartuGecko };
    동탄인덕원선:                { [key: string]: TartuGecko };
    "동탄인덕원선 지선":           { [key: string]: TartuGecko };
    동북선도시철도주식회사:           개업예정_동북선도시철도주식회사;
    "주식회사 SR":             개업예정_주식회사Sr;
    "서울 경전철 위례선":          { [key: string]: TartuGecko };
    "서울 경전철 위례선 지선":       서울경전철위례선지선;
    "강화석모해상케이블카 주식회사":     개업예정_강화석모해상케이블카주식회사;
    "포항영일만해양케이블카 주식회사":    개업예정_포항영일만해양케이블카주식회사;
    옥정포천선:                 개업예정_옥정포천선;
    "부산 도시철도 오륙도선":        { [key: string]: TartuGecko };
    "부산 도시철도 C-Bay Park선": { [key: string]: TartuGecko };
    창원도시철도:                { [key: string]: TartuGecko };
}

export interface 개업예정_강화석모해상케이블카주식회사 {
    강화석모해상케이블카: { [key: string]: TartuGecko };
}

export interface 개업예정_공영교통 {
    인천교통공사: 공영교통_인천교통공사;
    광주교통공사: { [key: string]: { [key: string]: TartuGecko } };
    서울교통공사: Tentacled서울교통공사;
    부산교통공사: 공영교통_부산교통공사;
    대전교통공사: Purple대전교통공사;
}

export interface Purple대전교통공사 {
    "대전 도시철도 1호선": 대전도시철도1호선;
}

export interface 대전도시철도1호선 {
    용두: TartuGecko;
}

export interface 공영교통_부산교통공사 {
    "부산 도시철도 사상하단선":     { [key: string]: TartuGecko };
    "부산 도시철도 사상하단선 기지선": { [key: string]: TartuGecko };
    "부산 도시철도 2호선":       Tentacled부산도시철도2호선;
    노포:                  TartuGecko;
    양산02:                TartuGecko;
    양산03:                TartuGecko;
    양산04:                TartuGecko;
    양산종합운동장:             TartuGecko;
    양산06:                TartuGecko;
    양산07:                TartuGecko;
    동면차량사업소:             TartuGecko;
}

export interface Tentacled부산도시철도2호선 {
    양산종합운동장: TartuGecko;
}

export interface Tentacled서울교통공사 {
    별내선:          서울교통공사_별내선;
    "서울교통공사 8호선": 서울교통공사8호선;
    진접기지선:        진접기지선;
    진접삼각선:        진접삼각선;
    도봉산옥정선:       도봉산옥정선;
    "서울교통공사 7호선": { [key: string]: TartuGecko };
    "서울시메트로 9호선": { [key: string]: TartuGecko };
    옥정포천선:        서울교통공사_옥정포천선;
}

export interface 도봉산옥정선 {
    신곡:  TartuGecko;
    탑석:  TartuGecko;
    금오:  TartuGecko;
    고읍:  TartuGecko;
    도봉산: TartuGecko;
    장암:  TartuGecko;
}

export interface 서울교통공사_별내선 {
    암사역사공원: TartuGecko;
    암사:     TartuGecko;
}

export interface 서울교통공사8호선 {
    남위례: TartuGecko;
}

export interface 서울교통공사_옥정포천선 {
    고읍:   TartuGecko;
    옥정중앙: TartuGecko;
}

export interface 진접기지선 {
    진접:      TartuGecko;
    진접차량사업소: TartuGecko;
}

export interface 진접삼각선 {
    진접차량사업소: TartuGecko;
    오남:      TartuGecko;
}

export interface 공영교통_인천교통공사 {
    "인천 도시철도 1호선": { [key: string]: TartuGecko };
}

export interface 개업예정_공항철도 {
    인천국제공항철도: Tentacled인천국제공항철도;
}

export interface Tentacled인천국제공항철도 {
    고양: TartuGecko;
}

export interface 개업예정_국유철도 {
    한국철도공사:   한국철도공사_8;
    대구도시철도공사: 국유철도_대구도시철도공사;
}

export interface 국유철도_대구도시철도공사 {
    "대구 도시철도 1호선": { [key: string]: TartuGecko };
}

export interface 한국철도공사_8 {
    경춘선:     Fluffy경춘선;
    중앙선:     Sticky중앙선;
    동해북부선:   { [key: string]: TartuGecko };
    동해선:     Fluffy동해선;
    부전마산선:   부전마산선;
    부산신항선:   Purple부산신항선;
    경전선:     { [key: string]: TartuGecko };
    서해선:     서해선;
    경부선:     Indecent경부선;
    중부내륙선:   Fluffy중부내륙선;
    월곶판교선:   { [key: string]: TartuGecko };
    여주원주선:   여주원주선;
    충북선:     { [key: string]: TartuGecko };
    호남고속선:   { [key: string]: TartuGecko };
    경강선:     Fluffy경강선;
    화성고속연결선: 화성고속연결선;
    경부고속선:   Sticky경부고속선;
    평택고속연결선: 한국철도공사_평택고속연결선;
    보성목포선:   보성목포선;
    춘천속초선:   춘천속초선;
    평택선:     Fluffy평택선;
    수인선:     Tentacled수인선;
    경원선:     { [key: string]: TartuGecko };
    호남선:     Cunning호남선;
    장항선:     Indigo장항선;
    과천선:     한국철도공사_과천선;
    경의선:     Indigo경의선;
    소사원시선:   한국철도공사_소사원시선;
    무릉:      TartuGecko;
}

export interface Fluffy경강선 {
    성남: TartuGecko;
}

export interface Sticky경부고속선 {
    화성고속연결선분기: TartuGecko;
    부전:        TartuGecko;
}

export interface Indecent경부선 {
    왜관공단: TartuGecko;
    부성:   TartuGecko;
    북삼:   TartuGecko;
    원대:   TartuGecko;
    덕암:   TartuGecko;
}

export interface Indigo경의선 {
    향동: TartuGecko;
}

export interface Fluffy경춘선 {
    왕숙:   TartuGecko;
    갈매분기: TartuGecko;
}

export interface 한국철도공사_과천선 {
    과천정보지식단지: TartuGecko;
}

export interface Fluffy동해선 {
    삼척: TartuGecko;
    근덕: TartuGecko;
    임원: TartuGecko;
    원남: TartuGecko;
    기성: TartuGecko;
    병곡: TartuGecko;
    원덕: TartuGecko;
    북면: TartuGecko;
    죽변: TartuGecko;
    울진: TartuGecko;
    후포: TartuGecko;
    영해: TartuGecko;
    매원: TartuGecko;
    평해: TartuGecko;
}

export interface 보성목포선 {
    보성분기: TartuGecko;
    신보성:  TartuGecko;
    해남:   TartuGecko;
    영암:   TartuGecko;
    임성리:  TartuGecko;
    장동:   TartuGecko;
    장흥:   TartuGecko;
    강진:   TartuGecko;
}

export interface Purple부산신항선 {
    칠산: TartuGecko;
}

export interface 부전마산선 {
    김해공항:   TartuGecko;
    에코델타시티: TartuGecko;
    가락:     TartuGecko;
    칠산:     TartuGecko;
    장유:     TartuGecko;
    신월:     TartuGecko;
    신진례:    TartuGecko;
    부전:     TartuGecko;
    사상:     TartuGecko;
}

export interface 서해선 {
    송산:   TartuGecko;
    홍성:   TartuGecko;
    인주:   TartuGecko;
    합덕:   TartuGecko;
    신삽교:  TartuGecko;
    USKR: TartuGecko;
    화성시청: TartuGecko;
    향남:   TartuGecko;
    안중:   TartuGecko;
}

export interface 한국철도공사_소사원시선 {
    하중: TartuGecko;
}

export interface Tentacled수인선 {
    학익: TartuGecko;
}

export interface 여주원주선 {
    여주:  TartuGecko;
    서원주: TartuGecko;
}

export interface Indigo장항선 {
    아산풍기: TartuGecko;
}

export interface Fluffy중부내륙선 {
    살미:  TartuGecko;
    연풍:  TartuGecko;
    문경:  TartuGecko;
    수안보: TartuGecko;
}

export interface Sticky중앙선 {
    구리분기: TartuGecko;
    군위:   TartuGecko;
}

export interface 춘천속초선 {
    춘천: TartuGecko;
    화천: TartuGecko;
    양구: TartuGecko;
    인제: TartuGecko;
    백담: TartuGecko;
    속초: TartuGecko;
}

export interface 한국철도공사_평택고속연결선 {
    서정리: TartuGecko;
}

export interface Fluffy평택선 {
    포승: TartuGecko;
    현덕: TartuGecko;
    안중: TartuGecko;
}

export interface Cunning호남선 {
    오정: TartuGecko;
    중촌: TartuGecko;
    용두: TartuGecko;
    문화: TartuGecko;
    도마: TartuGecko;
}

export interface 화성고속연결선 {
    어천:        TartuGecko;
    화성고속연결선분기: TartuGecko;
}

export interface 개업예정_남양주도시공사 {
    별내선: 남양주도시공사_별내선;
    진접선: Fluffy진접선;
}

export interface 남양주도시공사_별내선 {
    동구릉: TartuGecko;
    다산:  TartuGecko;
    별내:  TartuGecko;
}

export interface Fluffy진접선 {
    풍양: TartuGecko;
}

export interface 개업예정_동북선도시철도주식회사 {
    "서울 경전철 동북선": { [key: string]: TartuGecko };
}

export interface 개업예정_별내선 {
    장자호수공원: TartuGecko;
    구리:     TartuGecko;
}

export interface 서울경전철위례선지선 {
    위례108: TartuGecko;
    위례111: TartuGecko;
    복정:    TartuGecko;
}

export interface 개업예정_서해철도주식회사 {
    "신안산선 지선": 서해철도주식회사_신안산선지선;
}

export interface 서해철도주식회사_신안산선지선 {
    시흥능곡: TartuGecko;
    달미:   TartuGecko;
    선부:   TartuGecko;
    초지:   TartuGecko;
    시우:   TartuGecko;
    원시:   TartuGecko;
}

export interface 수도권광역급행철도B노선기지선 {
    마석: TartuGecko;
}

export interface 수도권광역급행철도B노선연결선 {
    상봉:   TartuGecko;
    구리분기: TartuGecko;
}

export interface 수도권광역급행철도C노선기지선 {
    덕정: TartuGecko;
}

export interface 개업예정_신안산선지선 {
    광명:      TartuGecko;
    매화:      TartuGecko;
    시흥시청:    TartuGecko;
    국제테마파크:  TartuGecko;
    송산:      TartuGecko;
    학온:      TartuGecko;
    송산차량사업소: TartuGecko;
}

export interface 개업예정_옥정포천선 {
    율정:     TartuGecko;
    소흘:     TartuGecko;
    대진대:    TartuGecko;
    어룡:     TartuGecko;
    포천:     TartuGecko;
    포천차량기지: TartuGecko;
}

export interface 개업예정_주식회사Sr {
    평택고속연결선: 주식회사Sr평택고속연결선;
}

export interface 주식회사Sr평택고속연결선 {
    SR평택지제: TartuGecko;
}

export interface 개업예정_포항영일만해양케이블카주식회사 {
    "포항 영일만 해양 케이블카": { [key: string]: TartuGecko };
}

export interface 영업시설_영업중 {
    국유철도:                      Tentacled국유철도;
    "주식회사 강원랜드":               { [key: string]: { [key: string]: TartuGecko } };
    공영교통:                      영업중_공영교통;
    "코레일관광개발 주식회사":            코레일관광개발주식회사;
    서울시메트로9호선:                 서울시메트로9호선;
    "새서울철도 주식회사":              영업중_새서울철도주식회사;
    신분당선주식회사:                  영업중_신분당선주식회사;
    경기철도주식회사:                  영업중_경기철도주식회사;
    "부산-김해경전철운영주식회사":          영업중_부산김해경전철운영주식회사;
    "코레일네트웍스 주식회사":            코레일네트웍스주식회사;
    공항철도:                      영업중_공항철도;
    용인경량전철주식회사:                영업중_용인경량전철주식회사;
    "주식회사 우진메트로":              영업중_주식회사우진메트로;
    "우이신설경전철 주식회사":            영업중_우이신설경전철주식회사;
    "주식회사 SR":                 영업중_주식회사Sr;
    한국철도기술연구원:                 영업중_한국철도기술연구원;
    "서부광역철도 주식회사":             영업중_서부광역철도주식회사;
    "서해철도 주식회사":               영업중_서해철도주식회사;
    "남서울경전철 주식회사":             영업중_남서울경전철주식회사;
    하남도시공사:                    영업중_하남도시공사;
    남양주도시공사:                   영업중_남양주도시공사;
    김포골드라인운영주식회사:              영업중_김포골드라인운영주식회사;
    "지티엑스에이운영 주식회사":           지티엑스에이운영주식회사;
    교육부:                       교육부;
    "주식회사 파라다이스호텔 부산":         주식회사파라다이스호텔부산;
    "주식회사 신세계조선호텔":            주식회사신세계조선호텔;
    "주식회사 온양관광호텔":             주식회사온양관광호텔;
    "해운대블루라인 주식회사":            영업중_해운대블루라인주식회사;
    대한석탄공사:                    영업중_대한석탄공사;
    "호텔금오산 주식회사":              영업중_호텔금오산주식회사;
    한국삭도공업주식회사:                영업중_한국삭도공업주식회사;
    "내장산개발 주식회사":              영업중_내장산개발주식회사;
    "양지대둔산삭도 유한회사":            영업중_양지대둔산삭도유한회사;
    "경상북도 울릉군":                영업중_경상북도울릉군;
    "삼진관광개발 주식회사":             영업중_삼진관광개발주식회사;
    "사천바다케이블카 주식회사":           영업중_사천바다케이블카주식회사;
    한국방송공사:                    영업중_한국방송공사;
    "목포해상케이블카 주식회사":           영업중_목포해상케이블카주식회사;
    "강원도 삼척시":                 강원도삼척시;
    "설악케이블카 주식회사":             영업중_설악케이블카주식회사;
    "송도해상케이블카 주식회사":           영업중_송도해상케이블카주식회사;
    "대덕개발 주식회사":               영업중_대덕개발주식회사;
    "여수해상케이블카 주식회사":           영업중_여수해상케이블카주식회사;
    "영남알프스얼음골케이블카 주식회사":       영업중_영남알프스얼음골케이블카주식회사;
    "청풍호반케이블카 주식회사":           영업중_청풍호반케이블카주식회사;
    통영관광개발공사:                  영업중_통영관광개발공사;
    "한림팩 주식회사":                영업중_한림팩주식회사;
    부산시설공단:                    영업중_부산시설공단;
    명량해상케이블카:                  명량해상케이블카;
    "제부도해상케이블카 주식회사":          영업중_제부도해상케이블카주식회사;
    "거제 케이블카 주식회사":            영업중_거제케이블카주식회사;
    "강원도 화천군":                 영업중_강원도화천군;
    "주식회사 소노인터네셔널":            영업중_주식회사소노인터네셔널;
    "주식회사 에이치제이매그놀리아용평호텔앤리조트": 영업중_주식회사에이치제이매그놀리아용평호텔앤리조트;
    "재단법인 송암스페이스센터":           영업중_재단법인송암스페이스센터;
    "주식회사 울진케이블카":             영업중_주식회사울진케이블카;
    "하동케이블카 주식회사":             영업중_하동케이블카주식회사;
    순천에코트랜스:                   영업중_순천에코트랜스;
    "JR 큐슈 고속선 주식회사":          Jr큐슈고속선주식회사;
    "간푸 페리 주식회사":              간푸페리주식회사;
    "미래고속 주식회사":               영업중_미래고속주식회사;
    "부관훼리 주식회사":               영업중_부관훼리주식회사;
    "태성해운 주식회사":               태성해운주식회사;
    "씨월드고속훼리 주식회사":            씨월드고속훼리주식회사;
    "내각 보안성 제23국 지하철도 운영관리국":  영업중_내각보안성제23국지하철도운영관리국;
    "북한 철도성":                  영업중_북한철도성;
    "평양시 려객운수종합기업소":           영업중_평양시려객운수종합기업소;
    교육기관:                      영업중_교육기관;
    조선인민군:                     조선인민군;
    "함경북도 청진시":                영업중_함경북도청진시;
    "조선총독부 철도국":               영업중_조선총독부철도국;
    "강원도 원산시":                 영업중_강원도원산시;
    천지삭도:                      { [key: string]: TartuGecko };
    향도봉호:                      향도봉호;
}

export interface Jr큐슈고속선주식회사 {
    비틀: 비틀;
}

export interface 비틀 {
    부산항: TartuGecko;
}

export interface 간푸페리주식회사 {
    "간푸 페리": 비틀;
}

export interface 강원도삼척시 {
    삼척해상케이블카: 삼척해상케이블카;
}

export interface 삼척해상케이블카 {
    용화: TartuGecko;
    장호: TartuGecko;
}

export interface 영업중_강원도원산시 {
    "원산 궤도전차": { [key: string]: TartuGecko };
}

export interface 영업중_강원도화천군 {
    "백암산 케이블카": 케이블카;
}

export interface 케이블카 {
    하부: TartuGecko;
    상부: TartuGecko;
}

export interface 영업중_거제케이블카주식회사 {
    "거제 파노라마 케이블카": 거제파노라마케이블카;
}

export interface 거제파노라마케이블카 {
    사계: TartuGecko;
    윤슬: TartuGecko;
}

export interface 영업중_경기철도주식회사 {
    신분당선: 경기철도주식회사_신분당선;
}

export interface 경기철도주식회사_신분당선 {
    동천:   TartuGecko;
    수지구청: TartuGecko;
    성복:   TartuGecko;
    상현:   TartuGecko;
    광교중앙: TartuGecko;
    광교:   TartuGecko;
    미금:   TartuGecko;
}

export interface 영업중_경상북도울릉군 {
    "독도전망대 케이블카": 케이블카;
}

export interface 영업중_공영교통 {
    서울교통공사: Sticky서울교통공사;
    인천교통공사: { [key: string]: { [key: string]: TartuGecko } };
    대전교통공사: Fluffy대전교통공사;
    광주교통공사: 광주교통공사;
    부산교통공사: { [key: string]: { [key: string]: TartuGecko } };
}

export interface 광주교통공사 {
    "광주교통공사 1호선": { [key: string]: TartuGecko };
}

export interface Fluffy대전교통공사 {
    "대전 도시철도 1호선": { [key: string]: TartuGecko };
}

export interface Sticky서울교통공사 {
    "서울교통공사 3호선":       { [key: string]: TartuGecko };
    "서울교통공사 5호선":       { [key: string]: TartuGecko };
    "서울교통공사 5호선 마천지선":  서울교통공사5호선마천지선;
    "서울교통공사 6호선":       { [key: string]: TartuGecko };
    "서울교통공사 7호선":       { [key: string]: TartuGecko };
    "서울교통공사 8호선":       { [key: string]: TartuGecko };
    "서울시메트로 9호선":       { [key: string]: TartuGecko };
    "서울교통공사 2호선 성수지선":  서울교통공사2호선성수지선;
    "서울교통공사 2호선 신정지선":  { [key: string]: TartuGecko };
    "서울교통공사 3호선 지축기지선": { [key: string]: TartuGecko };
    "서울교통공사 3호선 수서기지선": Fluffy서울교통공사3호선수서기지선;
    하남선:                { [key: string]: TartuGecko };
    진접선:                Tentacled진접선;
    "서울교통공사 4호선 창동기지선": Fluffy서울교통공사4호선창동기지선;
    "서울교통공사 4호선 노원창동선": 서울교통공사4호선노원창동선;
    삼송지축선:              Fluffy삼송지축선;
    "서울교통공사 3호선 수서삼각선": { [key: string]: TartuGecko };
    "서울교통공사 5호선 강동삼각선": Fluffy서울교통공사5호선강동삼각선;
    "서울교통공사 1호선":       { [key: string]: TartuGecko };
    "서울교통공사 2호선":       { [key: string]: TartuGecko };
    "서울교통공사 4호선":       { [key: string]: TartuGecko };
    과천선:                서울교통공사_과천선;
}

export interface 서울교통공사_과천선 {
    남태령: TartuGecko;
}

export interface Fluffy삼송지축선 {
    지축차량사업소: TartuGecko;
}

export interface 서울교통공사2호선성수지선 {
    성수:      TartuGecko;
    군자차량사업소: TartuGecko;
    용답:      TartuGecko;
    신답:      TartuGecko;
    용두:      TartuGecko;
    신설동:     TartuGecko;
}

export interface Fluffy서울교통공사3호선수서기지선 {
    수서차량사업소: TartuGecko;
    수서:      TartuGecko;
}

export interface 서울교통공사4호선노원창동선 {
    노원:   TartuGecko;
    창동기지: TartuGecko;
}

export interface Fluffy서울교통공사4호선창동기지선 {
    창동:   TartuGecko;
    창동기지: TartuGecko;
}

export interface Fluffy서울교통공사5호선강동삼각선 {
    강동삼각선분기: TartuGecko;
    길동:      TartuGecko;
}

export interface 서울교통공사5호선마천지선 {
    둔촌동:     TartuGecko;
    올림픽공원:   TartuGecko;
    방이:      TartuGecko;
    오금:      TartuGecko;
    개롱:      TartuGecko;
    거여:      TartuGecko;
    마천:      TartuGecko;
    강동삼각선분기: TartuGecko;
    강동:      TartuGecko;
}

export interface Tentacled진접선 {
    당고개: TartuGecko;
}

export interface 영업중_공항철도 {
    인천국제공항철도: { [key: string]: TartuGecko };
    용유차량기지선:  { [key: string]: TartuGecko };
    용유차량삼각선:  { [key: string]: TartuGecko };
    수색직결선:    공항철도_수색직결선;
}

export interface 공항철도_수색직결선 {
    공항철도직결선분기: TartuGecko;
}

export interface 영업중_교육기관 {
    평양교통운수종합대학: TartuGecko;
}

export interface 교육부 {
    교육기관: { [key: string]: TartuGecko };
}

export interface Tentacled국유철도 {
    한국철도공사:   한국철도공사_9;
    대구도시철도공사: { [key: string]: { [key: string]: TartuGecko } };
    철도청:      Tentacled철도청;
}

export interface Tentacled철도청 {
    북전주선: 철도청_북전주선;
}

export interface 철도청_북전주선 {
    동산: TartuGecko;
}

export interface 한국철도공사_9 {
    가야선:               Tentacled가야선;
    강경선:               Fluffy강경선;
    경부고속선:             { [key: string]: TartuGecko };
    경부선:               { [key: string]: TartuGecko };
    장항선:               { [key: string]: TartuGecko };
    경북선:               Sticky경북선;
    경원선:               { [key: string]: TartuGecko };
    경의선:               { [key: string]: TartuGecko };
    경인선:               { [key: string]: TartuGecko };
    경전선:               { [key: string]: TartuGecko };
    경춘선:               { [key: string]: TartuGecko };
    광양제철선:             Tentacled광양제철선;
    괴동선:               Sticky괴동선;
    군산화물선:             { [key: string]: TartuGecko };
    대구선:               Tentacled대구선;
    대불선:               Tentacled대불선;
    동해선:               { [key: string]: TartuGecko };
    문경선:               Tentacled문경선;
    부강화물선:             부강화물선;
    부산신항선:             Fluffy부산신항선;
    "부산신항 북선":         { [key: string]: TartuGecko };
    "부산신항 남선":         { [key: string]: TartuGecko };
    분당선:               { [key: string]: TartuGecko };
    삼척선:               Indigo삼척선;
    서울교외선:             Tentacled서울교외선;
    수인선:               { [key: string]: TartuGecko };
    신광양항선:             Fluffy신광양항선;
    신동화물선:             Fluffy신동화물선;
    안산선:               { [key: string]: TartuGecko };
    영동선:               { [key: string]: TartuGecko };
    옥구선:               Fluffy옥구선;
    우암선:               { [key: string]: TartuGecko };
    일산선:               일산선;
    전라선:               { [key: string]: TartuGecko };
    정선선:               { [key: string]: TartuGecko };
    중앙선:               { [key: string]: TartuGecko };
    진해선:               Indecent진해선;
    충북선:               { [key: string]: TartuGecko };
    태백선:               { [key: string]: TartuGecko };
    호남선:               { [key: string]: TartuGecko };
    사업소:               { [key: string]: TartuGecko };
    과천선:               { [key: string]: TartuGecko };
    "KTX 리무진 광명도심공항선": { [key: string]: TartuGecko };
    용산선:               한국철도공사_용산선;
    광주선:               { [key: string]: TartuGecko };
    광명주박기지선:           광명주박기지선;
    병점기지선:             { [key: string]: TartuGecko };
    남부화물기지선:           Tentacled남부화물기지선;
    구로삼각선:             { [key: string]: TartuGecko };
    천안직결선:             Tentacled천안직결선;
    오송선:               Fluffy오송선;
    오송정비기지선:           Fluffy오송정비기지선;
    대전선:               Tentacled대전선;
    영동정비기지선:           { [key: string]: TartuGecko };
    미전선:               Fluffy미전선;
    양산화물선:             Fluffy양산화물선;
    부전선:               Tentacled부전선;
    온산선:               Sticky온산선;
    장생포선:              { [key: string]: TartuGecko };
    울산항선:              { [key: string]: TartuGecko };
    북영주삼각선:            { [key: string]: TartuGecko };
    북평선:               Sticky북평선;
    묵호항선:              Tentacled묵호항선;
    망우선:               Tentacled망우선;
    고양기지선:             { [key: string]: TartuGecko };
    수색객차출발선:           Tentacled수색객차출발선;
    문산기지선:             문산기지선;
    장성화물선:             장성화물선;
    북송정삼각선:            { [key: string]: TartuGecko };
    전경삼각선:             Fluffy전경삼각선;
    덕산선:               Tentacled덕산선;
    구로기지선:             구로기지선;
    경강선:               { [key: string]: TartuGecko };
    부발기지선:             부발기지선;
    소사원시선:             { [key: string]: TartuGecko };
    영일만항선:             Fluffy영일만항선;
    평택선:               Tentacled평택선;
    여천선:               Sticky여천선;
    함백선:               Tentacled함백선;
    사천선:               Fluffy사천선;
    시흥기지선:             { [key: string]: TartuGecko };
    월곶시흥선:             월곶시흥선;
    분당기지선:             분당기지선;
    용산삼각선:             { [key: string]: TartuGecko };
    평내기지선:             { [key: string]: TartuGecko };
    제천조차장선:            Tentacled제천조차장선;
    영천삼각선:             { [key: string]: TartuGecko };
    용문기지선:             Fluffy용문기지선;
    태백삼각선:             { [key: string]: TartuGecko };
    울산기지선:             { [key: string]: TartuGecko };
    울산신항선:             Tentacled울산신항선;
    원주강릉선:             { [key: string]: TartuGecko };
    동해북부선:             Indecent동해북부선;
    안산입고선:             한국철도공사_안산출고선;
    중부내륙선:             { [key: string]: TartuGecko };
    익산삼각선:             { [key: string]: TartuGecko };
    강릉삼각선:             { [key: string]: TartuGecko };
    박물관:               교통부_박물관;
    평택직결선:             평택직결선;
    삼송지축선:             Tentacled삼송지축선;
    성북기지선:             { [key: string]: TartuGecko };
    안산출고선:             한국철도공사_안산출고선;
    수색직결선:             한국철도공사_수색직결선;
    이문기지선:             { [key: string]: TartuGecko };
    숙성기지선:             숙성기지선;
    호남고속선:             { [key: string]: TartuGecko };
    신동연결선:             { [key: string]: TartuGecko };
    경주삼각선:             { [key: string]: TartuGecko };
    대전철도차량정비단선:        { [key: string]: TartuGecko };
    강릉기지선:             { [key: string]: TartuGecko };
    분당연결선:             한국철도공사_분당연결선;
    대전북연결선:            { [key: string]: TartuGecko };
    대전남연결선:            대전남연결선;
    부산북연결선:            부산북연결선;
    익산남연결선:            { [key: string]: TartuGecko };
    "포항영덕 대행버스":       { [key: string]: TartuGecko };
    익산북연결선:            익산북연결선;
    광주송정북연결선:          { [key: string]: TartuGecko };
    군산항선:              { [key: string]: TartuGecko };
    광주기지선:             { [key: string]: TartuGecko };
    평택삼각선:             Fluffy평택삼각선;
    건천연결선:             건천연결선;
    광양항선:              Fluffy광양항선;
    북전주선:              Sticky북전주선;
    대구북연결선:            대구북연결선;
    대구남연결선:            { [key: string]: TartuGecko };
    시흥연결선:             { [key: string]: TartuGecko };
}

export interface Tentacled가야선 {
    사상:   TartuGecko;
    범일:   TartuGecko;
    가야:   TartuGecko;
    부산기지: TartuGecko;
}

export interface Fluffy강경선 {
    채운:  TartuGecko;
    강경:  TartuGecko;
    연무대: TartuGecko;
}

export interface 건천연결선 {
    신경주분기: TartuGecko;
    모량:    TartuGecko;
}

export interface Sticky경북선 {
    김천: TartuGecko;
    개포: TartuGecko;
    용궁: TartuGecko;
    점촌: TartuGecko;
    함창: TartuGecko;
    백원: TartuGecko;
    어등: TartuGecko;
    영주: TartuGecko;
    청리: TartuGecko;
    예천: TartuGecko;
    상주: TartuGecko;
    옥산: TartuGecko;
}

export interface 광명주박기지선 {
    광명:   TartuGecko;
    광명기지: TartuGecko;
}

export interface Tentacled광양제철선 {
    초남: TartuGecko;
    광양: TartuGecko;
    황길: TartuGecko;
    태금: TartuGecko;
}

export interface Fluffy광양항선 {
    광양항: TartuGecko;
    황길:  TartuGecko;
}

export interface Sticky괴동선 {
    효자: TartuGecko;
    부조: TartuGecko;
    괴동: TartuGecko;
}

export interface 구로기지선 {
    구로:      TartuGecko;
    구로차량사업소: TartuGecko;
}

export interface Tentacled남부화물기지선 {
    의왕: TartuGecko;
    오봉: TartuGecko;
}

export interface 대구북연결선 {
    대구북연결선분기: TartuGecko;
    대구:       TartuGecko;
}

export interface Tentacled대구선 {
    가천:    TartuGecko;
    영천:    TartuGecko;
    북영천분기: TartuGecko;
    금강:    TartuGecko;
    금호:    TartuGecko;
    청천:    TartuGecko;
    하양:    TartuGecko;
}

export interface Tentacled대불선 {
    일로: TartuGecko;
    대불: TartuGecko;
}

export interface 대전남연결선 {
    대전:       TartuGecko;
    대전남연결선분기: TartuGecko;
}

export interface Tentacled대전선 {
    대전:  TartuGecko;
    서대전: TartuGecko;
}

export interface Tentacled덕산선 {
    용강: TartuGecko;
    창원: TartuGecko;
    덕산: TartuGecko;
}

export interface Indecent동해북부선 {
    군사분계선: TartuGecko;
    제진:    TartuGecko;
}

export interface Tentacled망우선 {
    망우:  TartuGecko;
    광운대: TartuGecko;
}

export interface Tentacled묵호항선 {
    동해:  TartuGecko;
    묵호:  TartuGecko;
    묵호항: TartuGecko;
}

export interface Tentacled문경선 {
    점촌: TartuGecko;
    주평: TartuGecko;
}

export interface 문산기지선 {
    문산:      TartuGecko;
    문산차량사업소: TartuGecko;
}

export interface Fluffy미전선 {
    미전:  TartuGecko;
    낙동강: TartuGecko;
}

export interface 교통부_박물관 {
    철도박물관: TartuGecko;
}

export interface 부강화물선 {
    부강화물: TartuGecko;
    부강:   TartuGecko;
}

export interface 부발기지선 {
    부발:      TartuGecko;
    부발차량사업소: TartuGecko;
}

export interface 부산북연결선 {
    부산:       TartuGecko;
    부산북연결선분기: TartuGecko;
}

export interface Fluffy부산신항선 {
    장유:   TartuGecko;
    부산신항: TartuGecko;
    진례:   TartuGecko;
}

export interface Tentacled부전선 {
    가야:       TartuGecko;
    부전:       TartuGecko;
    부산전동차유치선: TartuGecko;
}

export interface Sticky북전주선 {
    북전주: TartuGecko;
}

export interface Sticky북평선 {
    동해: TartuGecko;
    삼화: TartuGecko;
}

export interface 분당기지선 {
    죽전:   TartuGecko;
    분당기지: TartuGecko;
}

export interface 한국철도공사_분당연결선 {
    미금분기: TartuGecko;
}

export interface Fluffy사천선 {
    진주: TartuGecko;
    사천: TartuGecko;
}

export interface Tentacled삼송지축선 {
    삼송: TartuGecko;
}

export interface Indigo삼척선 {
    삼척:   TartuGecko;
    동해:   TartuGecko;
    삼척해변: TartuGecko;
    추암:   TartuGecko;
}

export interface Tentacled서울교외선 {
    의정부: TartuGecko;
    능곡:  TartuGecko;
    대곡:  TartuGecko;
    일영:  TartuGecko;
    송추:  TartuGecko;
    대정:  TartuGecko;
    삼릉:  TartuGecko;
    벽제:  TartuGecko;
    온릉:  TartuGecko;
    원릉:  TartuGecko;
    장흥:  TartuGecko;
}

export interface Tentacled수색객차출발선 {
    가좌:      TartuGecko;
    수색:      TartuGecko;
    수색차량사업소: TartuGecko;
}

export interface 한국철도공사_수색직결선 {
    수색:      TartuGecko;
    수색연결선분기: TartuGecko;
}

export interface 숙성기지선 {
    창내:   TartuGecko;
    미군기지: TartuGecko;
}

export interface Fluffy신광양항선 {
    신광양항: TartuGecko;
    초남:   TartuGecko;
}

export interface Fluffy신동화물선 {
    신동화물: TartuGecko;
    신동:   TartuGecko;
}

export interface 한국철도공사_안산출고선 {
    안산: TartuGecko;
}

export interface Fluffy양산화물선 {
    물금:   TartuGecko;
    양산화물: TartuGecko;
}

export interface Sticky여천선 {
    덕양:  TartuGecko;
    흥국사: TartuGecko;
    적량:  TartuGecko;
}

export interface Fluffy영일만항선 {
    포항:   TartuGecko;
    영일만항: TartuGecko;
}

export interface Fluffy오송선 {
    서창: TartuGecko;
    오송: TartuGecko;
}

export interface Fluffy오송정비기지선 {
    오송기지: TartuGecko;
    오송:   TartuGecko;
}

export interface Fluffy옥구선 {
    옥구:   TartuGecko;
    군산옥산: TartuGecko;
}

export interface Sticky온산선 {
    남창: TartuGecko;
    온산: TartuGecko;
}

export interface Fluffy용문기지선 {
    용문:   TartuGecko;
    용문기지: TartuGecko;
}

export interface 한국철도공사_용산선 {
    홍대입구:  TartuGecko;
    공덕:    TartuGecko;
    가좌:    TartuGecko;
    효창공원앞: TartuGecko;
    용산:    TartuGecko;
    서강대:   TartuGecko;
}

export interface Tentacled울산신항선 {
    망양:   TartuGecko;
    용암:   TartuGecko;
    울산신항: TartuGecko;
}

export interface 월곶시흥선 {
    월곶:   TartuGecko;
    시흥기지: TartuGecko;
}

export interface 익산북연결선 {
    익산:       TartuGecko;
    익산북연결선분기: TartuGecko;
}

export interface 일산선 {
    대곡:  TartuGecko;
    삼송:  TartuGecko;
    지축:  TartuGecko;
    대화:  TartuGecko;
    주엽:  TartuGecko;
    정발산: TartuGecko;
    마두:  TartuGecko;
    백석:  TartuGecko;
    화정:  TartuGecko;
    원흥:  TartuGecko;
    원당:  TartuGecko;
}

export interface 장성화물선 {
    안평:   TartuGecko;
    장성화물: TartuGecko;
}

export interface Fluffy전경삼각선 {
    평화: TartuGecko;
    성산: TartuGecko;
}

export interface Tentacled제천조차장선 {
    제천:    TartuGecko;
    제천조차장: TartuGecko;
}

export interface Indecent진해선 {
    경화:  TartuGecko;
    성주사: TartuGecko;
    창원:  TartuGecko;
    진해:  TartuGecko;
    통해:  TartuGecko;
    남창원: TartuGecko;
    신창원: TartuGecko;
}

export interface Tentacled천안직결선 {
    천안: TartuGecko;
    두정: TartuGecko;
}

export interface Fluffy평택삼각선 {
    신대:   TartuGecko;
    평택지제: TartuGecko;
}

export interface Tentacled평택선 {
    평택: TartuGecko;
    창내: TartuGecko;
    신대: TartuGecko;
}

export interface 평택직결선 {
    평택: TartuGecko;
    신대: TartuGecko;
}

export interface Tentacled함백선 {
    예미: TartuGecko;
    조동: TartuGecko;
    함백: TartuGecko;
}

export interface 영업중_김포골드라인운영주식회사 {
    김포골드라인:        Fluffy김포골드라인;
    "김포골드라인 대행버스": 김포골드라인대행버스;
}

export interface Fluffy김포골드라인 {
    김포한강차량기지: TartuGecko;
    양촌:       TartuGecko;
    구래:       TartuGecko;
    마산:       TartuGecko;
    운양:       TartuGecko;
    걸포북변:     TartuGecko;
    사우:       TartuGecko;
    풍무:       TartuGecko;
    고촌:       TartuGecko;
    김포공항:     TartuGecko;
    장기:       TartuGecko;
}

export interface 김포골드라인대행버스 {
    양촌:    TartuGecko;
    더럭스나인: TartuGecko;
    구래:    TartuGecko;
    디원시티:  TartuGecko;
}

export interface 영업중_남서울경전철주식회사 {
    "서울 경전철 신림선": { [key: string]: TartuGecko };
}

export interface 영업중_남양주도시공사 {
    진접선: Sticky진접선;
}

export interface Sticky진접선 {
    별내별가람: TartuGecko;
    오남:    TartuGecko;
    진접:    TartuGecko;
}

export interface 영업중_내각보안성제23국지하철도운영관리국 {
    "평양 지하철도 혁신선":  평양지하철도혁신선;
    "평양 지하철도 천리마선": 평양지하철도천리마선;
    "평양 지하철도 만경대선": 평양지하철도만경대선;
    사업소:            병원_Class;
    교육기관:           병원_Class;
    병원:             병원_Class;
    "지하철도 수리관리소":   TartuGecko;
}

export interface 평양지하철도만경대선 {
    영광: TartuGecko;
    부흥: TartuGecko;
    봉화: TartuGecko;
}

export interface 평양지하철도천리마선 {
    붉은별: TartuGecko;
    전우:  TartuGecko;
    개선:  TartuGecko;
    통일:  TartuGecko;
    승리:  TartuGecko;
    봉화:  TartuGecko;
}

export interface 평양지하철도혁신선 {
    락원:  TartuGecko;
    광명:  TartuGecko;
    삼흥:  TartuGecko;
    전승:  TartuGecko;
    혁신:  TartuGecko;
    건설:  TartuGecko;
    황금벌: TartuGecko;
    건국:  TartuGecko;
    광복:  TartuGecko;
}

export interface 영업중_내장산개발주식회사 {
    "내장산 케이블카": 케이블카;
}

export interface 영업중_대덕개발주식회사 {
    "앞산 케이블카": 앞산케이블카;
}

export interface 앞산케이블카 {
    산록: TartuGecko;
    산정: TartuGecko;
}

export interface 영업중_대한석탄공사 {
    "도계광업소 강삭철도": { [key: string]: TartuGecko };
}

export interface 명량해상케이블카 {
    진도: TartuGecko;
    해남: TartuGecko;
}

export interface 영업중_목포해상케이블카주식회사 {
    목포해상케이블카: { [key: string]: TartuGecko };
}

export interface 영업중_미래고속주식회사 {
    코비: 비틀;
}

export interface 영업중_부관훼리주식회사 {
    부관훼리: 비틀;
}

export interface 영업중_부산김해경전철운영주식회사 {
    부산김해경전철: { [key: string]: TartuGecko };
}

export interface 영업중_부산시설공단 {
    "금강공원 케이블카": 케이블카;
}

export interface 영업중_북한철도성 {
    경원선:          { [key: string]: TartuGecko };
    강원선:          Tentacled강원선;
    천내선:          Fluffy천내선;
    금강산청년선:       { [key: string]: TartuGecko };
    청년이천선:        { [key: string]: TartuGecko };
    경의선:          { [key: string]: TartuGecko };
    황해청년선:        { [key: string]: TartuGecko };
    배천선:          Fluffy배천선;
    옹진선:          Tentacled옹진선;
    부포선:          Tentacled부포선;
    송림선:          { [key: string]: TartuGecko };
    장연선:          Purple장연선;
    은률선:          { [key: string]: TartuGecko };
    서해갑문선:        { [key: string]: TartuGecko };
    평남선:          { [key: string]: TartuGecko };
    도지리선:         { [key: string]: TartuGecko };
    대안선:          Tentacled대안선;
    보산선:          Fluffy보산선;
    후산선:          후산선;
    룡강선:          Fluffy룡강선;
    강안선:          Fluffy강안선;
    안주탄광선:        Fluffy안주탄광선;
    개천선:          Fluffy개천선;
    구봉산선:         { [key: string]: TartuGecko };
    박천선:          Fluffy박천선;
    평북선:          { [key: string]: TartuGecko };
    수풍선:          Fluffy수풍선;
    압록강선:         압록강선;
    철산선:          Fluffy철산선;
    백마선:          { [key: string]: TartuGecko };
    다사도선:         { [key: string]: TartuGecko };
    덕현선:          Fluffy덕현선;
    구성선:          Fluffy구성선;
    청년팔원선:        청년팔원선;
    녕변선:          녕변선;
    평덕선:          { [key: string]: TartuGecko };
    남흥선:          Fluffy남흥선;
    마평선:          Fluffy마평선;
    룡성선:          Tentacled룡성선;
    명당선:          Fluffy명당선;
    령대선:          령대선;
    재동선:          Fluffy재동선;
    득장선:          Fluffy득장선;
    명학선:          명학선;
    시정선:          시정선;
    평라선:          { [key: string]: TartuGecko };
    대건선:          { [key: string]: TartuGecko };
    직동탄광선:        { [key: string]: TartuGecko };
    모학선:          Fluffy모학선;
    은산선:          은산선;
    성산인입선:        Tentacled성산인입선;
    만포선:          { [key: string]: TartuGecko };
    대각선:          Fluffy대각선;
    준혁선:          준혁선;
    조양탄광선:        조양탄광선;
    개천탄광선:        개천탄광선;
    룡암선:          { [key: string]: TartuGecko };
    룡문탄광선:        룡문탄광선;
    강계선:          { [key: string]: TartuGecko };
    고원탄광선:        고원탄광선;
    천성탄광선:        Purple천성탄광선;
    금야선:          금야선;
    신흥선:          { [key: string]: TartuGecko };
    장진선:          { [key: string]: TartuGecko };
    서호선:          Purple서호선;
    창흥선:          Fluffy창흥선;
    덕성선:          Tentacled덕성선;
    리원선:          리원선;
    두언선:          { [key: string]: TartuGecko };
    허천선:          { [key: string]: TartuGecko };
    만덕선:          Fluffy만덕선;
    금골선:          { [key: string]: TartuGecko };
    일탄선:          Fluffy일탄선;
    청진조차장선:       { [key: string]: TartuGecko };
    강덕선:          Fluffy강덕선;
    청진항선:         { [key: string]: TartuGecko };
    라진항선:         Tentacled라진항선;
    백두산청년선:       { [key: string]: TartuGecko };
    회령탄광선:        Tentacled회령탄광선;
    함북선:          { [key: string]: TartuGecko };
    세천선:          Fluffy세천선;
    동포선:          동포선;
    남양국경선:        남양국경선;
    고건원선:         고건원선;
    회암선:          Fluffy회암선;
    춘두선:          Fluffy춘두선;
    적지선:          적지선;
    두만강선:         Fluffy두만강선;
    승리선:          Fluffy승리선;
    백무선:          { [key: string]: TartuGecko };
    무산선:          { [key: string]: TartuGecko };
    운봉선:          { [key: string]: TartuGecko };
    북부내륙선:        { [key: string]: TartuGecko };
    삼지연선:         { [key: string]: TartuGecko };
    고참탄광선:        고참탄광선;
    대향선:          { [key: string]: TartuGecko };
    문천항선:         Purple문천항선;
    송도원선:         { [key: string]: TartuGecko };
    원산항선:         원산항선;
    봉천탄광선:        봉천탄광선;
    운하선:          Fluffy운하선;
    평양화전선:        Fluffy평양화전선;
    솔골탄광선:        Fluffy솔골탄광선;
    관하선:          Fluffy관하선;
    잉포선:          잉포선;
    덕남선:          덕남선;
    장상선:          장상선;
    봉산선:          Tentacled봉산선;
    안골선:          안골선;
    신성선:          신성선;
    서창선:          서창선;
    회둔선:          { [key: string]: TartuGecko };
    형봉선:          { [key: string]: TartuGecko };
    대관리선:         대관리선;
    석하선:          { [key: string]: TartuGecko };
    정도선:          정도선;
    사업소:          { [key: string]: TartuGecko };
    남포지선:         { [key: string]: TartuGecko };
    비날론선:         { [key: string]: TartuGecko };
    무산광산선:        { [key: string]: TartuGecko };
    오시천선:         { [key: string]: TartuGecko };
    락랑선:          락랑선;
    청화력선:         { [key: string]: TartuGecko };
    고비선:          Purple고비선;
    독골선:          독골선;
    화풍선:          화풍선;
    삼천포지선:        { [key: string]: TartuGecko };
    동해북부선:        Hilarious동해북부선;
    온포선:          온포선;
    송평선:          송평선;
    박물관:          북한철도성_박물관;
    병원:           병원_Class;
    향산선:          향산선;
    추평선:          { [key: string]: TartuGecko };
    곡하선:          { [key: string]: TartuGecko };
    봉화선:          봉화선;
    진흥선:          진흥선;
    산음선:          산음선;
    보통강삼각선:       { [key: string]: TartuGecko };
    남포항선:         { [key: string]: TartuGecko };
    털섬항선:         Fluffy털섬항선;
    원산화물선:        { [key: string]: TartuGecko };
    신송도원선:        { [key: string]: TartuGecko };
    량진선:          { [key: string]: TartuGecko };
    황주삼각선:        { [key: string]: TartuGecko };
    봉학선:          Fluffy봉학선;
    장선강선:         { [key: string]: TartuGecko };
    봉창선:          Fluffy봉창선;
    동평양삼각선:       { [key: string]: TartuGecko };
    북창삼각선:        북창삼각선;
    향원삼각선:        { [key: string]: TartuGecko };
    향원선:          { [key: string]: TartuGecko };
    고원교외선:        고원교외선;
    흥남항선:         Fluffy흥남항선;
    송평부두선:        송평부두선;
    풍덕선:          풍덕선;
    대택선:          { [key: string]: TartuGecko };
    "바라놉스키-하산 선": 바라놉스키하산선;
    "펑상 철로":      펑상철로;
    "선단 철로":      선단철로;
    "창투 철로":      창투철로;
    려호선:          { [key: string]: TartuGecko };
    신흥동선:         { [key: string]: TartuGecko };
    신온선:          { [key: string]: TartuGecko };
}

export interface Fluffy강덕선 {
    남강덕: TartuGecko;
    강덕:  TartuGecko;
    삼립:  TartuGecko;
    수성:  TartuGecko;
    근동:  TartuGecko;
}

export interface Fluffy강안선 {
    강안:    TartuGecko;
    신의주청년: TartuGecko;
}

export interface Tentacled강원선 {
    세길:        TartuGecko;
    문천:        TartuGecko;
    옥평:        TartuGecko;
    룡담:        TartuGecko;
    전탄:        TartuGecko;
    고원:        TartuGecko;
    원산:        TartuGecko;
    "송도원선 분기": TartuGecko;
}

export interface Fluffy개천선 {
    개천:    TartuGecko;
    운흥리:   TartuGecko;
    연풍:    TartuGecko;
    북송리:   TartuGecko;
    안주:    TartuGecko;
    신안주청년: TartuGecko;
}

export interface 개천탄광선 {
    자작: TartuGecko;
    전진: TartuGecko;
}

export interface 고건원선 {
    고건원: TartuGecko;
    신건:  TartuGecko;
    정남:  TartuGecko;
    유수:  TartuGecko;
    림대:  TartuGecko;
}

export interface Purple고비선 {
    립석리: TartuGecko;
    고비:  TartuGecko;
    신승호: TartuGecko;
    삼청:  TartuGecko;
}

export interface 고원교외선 {
    신상평: TartuGecko;
    고원:  TartuGecko;
}

export interface 고원탄광선 {
    둔전: TartuGecko;
    수동: TartuGecko;
    덕사: TartuGecko;
    장동: TartuGecko;
}

export interface 고참탄광선 {
    명천:  TartuGecko;
    신명천: TartuGecko;
}

export interface Fluffy관하선 {
    북창: TartuGecko;
    관하: TartuGecko;
}

export interface Fluffy구성선 {
    구성:   TartuGecko;
    동산:   TartuGecko;
    어미현:  TartuGecko;
    룡풍:   TartuGecko;
    산성:   TartuGecko;
    태천:   TartuGecko;
    연중:   TartuGecko;
    신룡:   TartuGecko;
    대장:   TartuGecko;
    팔원청년: TartuGecko;
}

export interface 금야선 {
    금야: TartuGecko;
    풍남: TartuGecko;
}

export interface 남양국경선 {
    남양: TartuGecko;
    국경: TartuGecko;
}

export interface Fluffy남흥선 {
    맹중리: TartuGecko;
    송도:  TartuGecko;
    남흥:  TartuGecko;
    동남흥: TartuGecko;
}

export interface 녕변선 {
    팔원청년: TartuGecko;
    분강:   TartuGecko;
}

export interface Fluffy대각선 {
    천동: TartuGecko;
    대각: TartuGecko;
}

export interface 대관리선 {
    신온:  TartuGecko;
    대관리: TartuGecko;
}

export interface Tentacled대안선 {
    강서:   TartuGecko;
    대안:   TartuGecko;
    대안화물: TartuGecko;
}

export interface 덕남선 {
    남덕천: TartuGecko;
    덕남:  TartuGecko;
}

export interface Tentacled덕성선 {
    신북청: TartuGecko;
    봉흥:  TartuGecko;
    북청:  TartuGecko;
    라하:  TartuGecko;
    덕성:  TartuGecko;
    주의동: TartuGecko;
    양승:  TartuGecko;
    도평:  TartuGecko;
    삼기:  TartuGecko;
    송중:  TartuGecko;
    상일:  TartuGecko;
    상리:  TartuGecko;
}

export interface Fluffy덕현선 {
    남신의주: TartuGecko;
    정문리:  TartuGecko;
    의주:   TartuGecko;
    수진:   TartuGecko;
    정광:   TartuGecko;
    덕현:   TartuGecko;
}

export interface 독골선 {
    삼청: TartuGecko;
    독골: TartuGecko;
}

export interface 동포선 {
    종성:  TartuGecko;
    공수덕: TartuGecko;
    동포:  TartuGecko;
}

export interface Hilarious동해북부선 {
    감호: TartuGecko;
}

export interface Fluffy두만강선 {
    물골:  TartuGecko;
    적지:  TartuGecko;
    두만강: TartuGecko;
}

export interface Fluffy득장선 {
    북창:       TartuGecko;
    양촌:       TartuGecko;
    룡산:       TartuGecko;
    득장:       TartuGecko;
    석산:       TartuGecko;
    "명학선 분기": TartuGecko;
}

export interface Tentacled라진항선 {
    라진:  TartuGecko;
    라진항: TartuGecko;
}

export interface 락랑선 {
    력포:          TartuGecko;
    락랑:          TartuGecko;
    "동평양 화력발전소": TartuGecko;
}

export interface 령대선 {
    원창:   TartuGecko;
    령대:   TartuGecko;
    령대탄광: TartuGecko;
}

export interface Fluffy룡강선 {
    마영: TartuGecko;
    룡월: TartuGecko;
    후산: TartuGecko;
    룡호: TartuGecko;
    룡강: TartuGecko;
}

export interface 룡문탄광선 {
    어룡:   TartuGecko;
    룡문탄광: TartuGecko;
}

export interface Tentacled룡성선 {
    서포:  TartuGecko;
    룡성:  TartuGecko;
    새동:  TartuGecko;
    동북리: TartuGecko;
}

export interface 리원선 {
    리원철산: TartuGecko;
    라흥:   TartuGecko;
    증산:   TartuGecko;
    차호:   TartuGecko;
}

export interface Fluffy마평선 {
    연중: TartuGecko;
    훤화: TartuGecko;
    마평: TartuGecko;
}

export interface Fluffy만덕선 {
    만덕: TartuGecko;
    부동: TartuGecko;
    허천: TartuGecko;
}

export interface Fluffy명당선 {
    청룡: TartuGecko;
    리현: TartuGecko;
    대원: TartuGecko;
    명당: TartuGecko;
    상원: TartuGecko;
}

export interface 명학선 {
    "명학선 분기": TartuGecko;
    명학:       TartuGecko;
}

export interface Fluffy모학선 {
    대건: TartuGecko;
    모학: TartuGecko;
}

export interface Purple문천항선 {
    옥평:  TartuGecko;
    고암:  TartuGecko;
    룡탄:  TartuGecko;
    답촌리: TartuGecko;
}

export interface 바라놉스키하산선 {
    두만강: TartuGecko;
}

export interface 북한철도성_박물관 {
    조선철도박물관: TartuGecko;
}

export interface Fluffy박천선 {
    박천:  TartuGecko;
    맹중리: TartuGecko;
}

export interface Fluffy배천선 {
    장방: TartuGecko;
    갈산: TartuGecko;
    청단: TartuGecko;
    천태: TartuGecko;
    풍천: TartuGecko;
    오현: TartuGecko;
    연안: TartuGecko;
    온정: TartuGecko;
    홍현: TartuGecko;
    배천: TartuGecko;
    은빛: TartuGecko;
}

export interface Fluffy보산선 {
    보산:   TartuGecko;
    강서:   TartuGecko;
    강서화물: TartuGecko;
}

export interface Tentacled봉산선 {
    봉산:  TartuGecko;
    서봉산: TartuGecko;
}

export interface Fluffy봉창선 {
    신봉창: TartuGecko;
    한경:  TartuGecko;
}

export interface 봉천탄광선 {
    봉천:   TartuGecko;
    봉천탄광: TartuGecko;
}

export interface Fluffy봉학선 {
    봉학:  TartuGecko;
    손구동: TartuGecko;
}

export interface 봉화선 {
    "봉화선 분기": TartuGecko;
    봉화:       TartuGecko;
}

export interface Tentacled부포선 {
    신강령: TartuGecko;
    강령:  TartuGecko;
    향죽:  TartuGecko;
    부포:  TartuGecko;
}

export interface 북창삼각선 {
    옥천: TartuGecko;
    양촌: TartuGecko;
}

export interface 산음선 {
    산음:       TartuGecko;
    "55호 관저": TartuGecko;
    룡성:       TartuGecko;
}

export interface 서창선 {
    덕천:  TartuGecko;
    서덕천: TartuGecko;
    철기산: TartuGecko;
    서창:  TartuGecko;
}

export interface Purple서호선 {
    서함흥: TartuGecko;
    사포:  TartuGecko;
    비날론: TartuGecko;
    운중:  TartuGecko;
    룡성:  TartuGecko;
    하덕:  TartuGecko;
    서호:  TartuGecko;
    성천강: TartuGecko;
    상수:  TartuGecko;
}

export interface 선단철로 {
    신의주청년: TartuGecko;
}

export interface Tentacled성산인입선 {
    학산: TartuGecko;
    매봉: TartuGecko;
}

export interface Fluffy세천선 {
    신학포: TartuGecko;
    세천:  TartuGecko;
    중봉:  TartuGecko;
}

export interface Fluffy솔골탄광선 {
    송남청년: TartuGecko;
    솔골:   TartuGecko;
}

export interface 송평부두선 {
    송평:   TartuGecko;
    송평부두: TartuGecko;
}

export interface 송평선 {
    강덕: TartuGecko;
    송평: TartuGecko;
}

export interface Fluffy수풍선 {
    부풍: TartuGecko;
    수풍: TartuGecko;
}

export interface Fluffy승리선 {
    선봉: TartuGecko;
    승리: TartuGecko;
}

export interface 시정선 {
    간리: TartuGecko;
    시정: TartuGecko;
}

export interface 신성선 {
    서덕천: TartuGecko;
    신성:  TartuGecko;
}

export interface 안골선 {
    문악: TartuGecko;
    안골: TartuGecko;
}

export interface Fluffy안주탄광선 {
    문덕:  TartuGecko;
    성법:  TartuGecko;
    청남:  TartuGecko;
    삼천포: TartuGecko;
}

export interface 압록강선 {
    부풍:  TartuGecko;
    압록강: TartuGecko;
}

export interface 온포선 {
    "온포선 분기": TartuGecko;
    온포:       TartuGecko;
}

export interface Tentacled옹진선 {
    동해주: TartuGecko;
    왕신:  TartuGecko;
    서해주: TartuGecko;
    문정:  TartuGecko;
    서석:  TartuGecko;
    벽성:  TartuGecko;
    자양:  TartuGecko;
    신강령: TartuGecko;
    옹진:  TartuGecko;
    장둔:  TartuGecko;
}

export interface Fluffy운하선 {
    만포청년: TartuGecko;
    운하:   TartuGecko;
    구오:   TartuGecko;
}

export interface 원산항선 {
    갈마:  TartuGecko;
    원산항: TartuGecko;
}

export interface 은산선 {
    대건: TartuGecko;
    학산: TartuGecko;
    은산: TartuGecko;
}

export interface Fluffy일탄선 {
    로동: TartuGecko;
    일탄: TartuGecko;
    화대: TartuGecko;
    덕신: TartuGecko;
}

export interface 잉포선 {
    구현: TartuGecko;
    잉포: TartuGecko;
}

export interface 장상선 {
    향장: TartuGecko;
    장상: TartuGecko;
}

export interface Purple장연선 {
    수교:   TartuGecko;
    송화온천: TartuGecko;
    락연:   TartuGecko;
    장연:   TartuGecko;
    락도:   TartuGecko;
}

export interface Fluffy재동선 {
    구정: TartuGecko;
    재동: TartuGecko;
}

export interface 적지선 {
    홍의: TartuGecko;
    적지: TartuGecko;
}

export interface 정도선 {
    왕신:  TartuGecko;
    정도:  TartuGecko;
    해주항: TartuGecko;
}

export interface 조양탄광선 {
    개천:   TartuGecko;
    구읍:   TartuGecko;
    석간:   TartuGecko;
    조양탄광: TartuGecko;
}

export interface 준혁선 {
    개천:  TartuGecko;
    준혁리: TartuGecko;
}

export interface 진흥선 {
    룡암포: TartuGecko;
    진흥:  TartuGecko;
}

export interface 창투철로 {
    국경: TartuGecko;
}

export interface Fluffy창흥선 {
    창흥: TartuGecko;
    련흥: TartuGecko;
    호전: TartuGecko;
}

export interface Fluffy천내선 {
    천내: TartuGecko;
    룡담: TartuGecko;
}

export interface Purple천성탄광선 {
    수양:         TartuGecko;
    망일리:        TartuGecko;
    천성:         TartuGecko;
    "천성탄광선 분기": TartuGecko;
}

export interface Fluffy철산선 {
    동림:  TartuGecko;
    철산:  TartuGecko;
    동창리: TartuGecko;
}

export interface 청년팔원선 {
    팔원청년: TartuGecko;
    녕변:   TartuGecko;
    하초:   TartuGecko;
    사오:   TartuGecko;
    묵시:   TartuGecko;
    구장청년: TartuGecko;
}

export interface Fluffy춘두선 {
    송학: TartuGecko;
    춘두: TartuGecko;
}

export interface Fluffy털섬항선 {
    정도:  TartuGecko;
    털섬항: TartuGecko;
}

export interface 펑상철로 {
    청수: TartuGecko;
}

export interface Fluffy평양화전선 {
    보통강: TartuGecko;
    평천:  TartuGecko;
}

export interface 풍덕선 {
    "풍덕선 분기": TartuGecko;
    풍덕:       TartuGecko;
}

export interface 향산선 {
    "향산선 분기": TartuGecko;
    향산:       TartuGecko;
}

export interface 화풍선 {
    청남:   TartuGecko;
    립석탄광: TartuGecko;
    태향:   TartuGecko;
    평남서호: TartuGecko;
}

export interface Tentacled회령탄광선 {
    유선:   TartuGecko;
    회령청년: TartuGecko;
    봉의:   TartuGecko;
}

export interface Fluffy회암선 {
    학송: TartuGecko;
    회암: TartuGecko;
    오봉: TartuGecko;
    은덕: TartuGecko;
}

export interface 후산선 {
    양막: TartuGecko;
    후산: TartuGecko;
}

export interface Fluffy흥남항선 {
    룡성:  TartuGecko;
    흥남항: TartuGecko;
    흥남:  TartuGecko;
}

export interface 영업중_사천바다케이블카주식회사 {
    사천바다케이블카: 사천바다케이블카;
}

export interface 사천바다케이블카 {
    초양: TartuGecko;
    대방: TartuGecko;
    각산: TartuGecko;
}

export interface 영업중_삼진관광개발주식회사 {
    "두륜산 케이블카": 케이블카;
}

export interface 영업중_새서울철도주식회사 {
    신분당선: 새서울철도주식회사_신분당선;
}

export interface 새서울철도주식회사_신분당선 {
    신사:  TartuGecko;
    논현:  TartuGecko;
    신논현: TartuGecko;
}

export interface 영업중_서부광역철도주식회사 {
    소사대곡선: Fluffy소사대곡선;
}

export interface Fluffy소사대곡선 {
    소사:      TartuGecko;
    부천종합운동장: TartuGecko;
    원종:      TartuGecko;
    김포공항:    TartuGecko;
    능곡:      TartuGecko;
    대곡:      TartuGecko;
}

export interface 서울시메트로9호선 {
    "서울시메트로 9호선": { [key: string]: TartuGecko };
}

export interface 영업중_서해철도주식회사 {
    안산입고선: 서해철도주식회사_안산출고선;
    소사원시선: Fluffy소사원시선;
    안산출고선: 서해철도주식회사_안산출고선;
}

export interface Fluffy소사원시선 {
    "소사원시선 시점": TartuGecko;
}

export interface 서해철도주식회사_안산출고선 {
    시우: TartuGecko;
}

export interface 영업중_설악케이블카주식회사 {
    "설악 케이블카": { [key: string]: TartuGecko };
}

export interface 영업중_송도해상케이블카주식회사 {
    송도해상케이블카: { [key: string]: TartuGecko };
}

export interface 영업중_순천에코트랜스 {
    순천만PRT: { [key: string]: TartuGecko };
}

export interface 영업중_신분당선주식회사 {
    신분당선:  { [key: string]: TartuGecko };
    분당연결선: 신분당선주식회사_분당연결선;
}

export interface 신분당선주식회사_분당연결선 {
    분당연결선분기: TartuGecko;
}

export interface 씨월드고속훼리주식회사 {
    사업소: 제주도순환궤도지선_Class;
}

export interface 제주도순환궤도지선_Class {
    제주: TartuGecko;
}

export interface 영업중_양지대둔산삭도유한회사 {
    "대둔산 케이블카": 케이블카;
}

export interface 영업중_여수해상케이블카주식회사 {
    여수해상케이블카: 여수해상케이블카;
}

export interface 여수해상케이블카 {
    해야: TartuGecko;
    놀아: TartuGecko;
}

export interface 영업중_영남알프스얼음골케이블카주식회사 {
    "영남알프스 얼음골 케이블카": 케이블카;
}

export interface 영업중_용인경량전철주식회사 {
    용인경전철: { [key: string]: TartuGecko };
}

export interface 영업중_우이신설경전철주식회사 {
    "서울 경전철 우이신설선": { [key: string]: TartuGecko };
}

export interface 영업중_재단법인송암스페이스센터 {
    "송암 스페이스센터 케이블카": { [key: string]: TartuGecko };
}

export interface 영업중_제부도해상케이블카주식회사 {
    "제부도 해상케이블카": { [key: string]: TartuGecko };
}

export interface 조선인민군 {
    "평양 궤도전차 금수산선": { [key: string]: TartuGecko };
}

export interface 영업중_조선총독부철도국 {
    룡암선: 조선총독부철도국_룡암선;
}

export interface 조선총독부철도국_룡암선 {
    동룡굴: TartuGecko;
}

export interface 영업중_주식회사Sr {
    수서평택고속선:          { [key: string]: TartuGecko };
    "수도권 광역급행철도 A노선": 수도권광역급행철도A노선;
    사업소:              주식회사Sr사업소;
}

export interface 주식회사Sr사업소 {
    SR본사: TartuGecko;
}

export interface 수도권광역급행철도A노선 {
    SR동탄: TartuGecko;
}

export interface 영업중_주식회사소노인터네셔널 {
    "춘천 삼악산 호수 케이블카": { [key: string]: TartuGecko };
}

export interface 주식회사신세계조선호텔 {
    사업소: 주식회사신세계조선호텔_사업소;
}

export interface 주식회사신세계조선호텔_사업소 {
    "웨스틴 조선호텔 서울": TartuGecko;
}

export interface 영업중_주식회사에이치제이매그놀리아용평호텔앤리조트 {
    "발왕산 관광케이블카": { [key: string]: TartuGecko };
}

export interface 주식회사온양관광호텔 {
    사업소: 주식회사온양관광호텔_사업소;
}

export interface 주식회사온양관광호텔_사업소 {
    온양관광호텔: TartuGecko;
}

export interface 영업중_주식회사우진메트로 {
    의정부경전철: { [key: string]: TartuGecko };
}

export interface 영업중_주식회사울진케이블카 {
    "왕피천 케이블카": { [key: string]: TartuGecko };
}

export interface 주식회사파라다이스호텔부산 {
    사업소: 주식회사파라다이스호텔부산_사업소;
}

export interface 주식회사파라다이스호텔부산_사업소 {
    "파라다이스호텔 부산": TartuGecko;
}

export interface 지티엑스에이운영주식회사 {
    "수도권 광역급행철도 A노선": { [key: string]: TartuGecko };
}

export interface 영업중_청풍호반케이블카주식회사 {
    청풍호반케이블카: { [key: string]: TartuGecko };
}

export interface 코레일관광개발주식회사 {
    "섬진강 기차마을 관광철도": 섬진강기차마을관광철도;
}

export interface 섬진강기차마을관광철도 {
    곡성: TartuGecko;
    가정: TartuGecko;
    침곡: TartuGecko;
}

export interface 코레일네트웍스주식회사 {
    "KTX 셔틀버스 광명 사당선": { [key: string]: TartuGecko };
}

export interface 태성해운주식회사 {
    사업소: 태성해운주식회사_사업소;
}

export interface 태성해운주식회사_사업소 {
    울릉도: TartuGecko;
}

export interface 영업중_통영관광개발공사 {
    "통영 케이블카": 케이블카;
}

export interface 영업중_평양시려객운수종합기업소 {
    "평양 궤도전차 1호선": { [key: string]: TartuGecko };
    "평양 궤도전차 3호선": { [key: string]: TartuGecko };
    "평양 궤도전차 2호선": 평양궤도전차2호선;
    사업소:           평양시려객운수종합기업소_사업소;
}

export interface 평양시려객운수종합기업소_사업소 {
    평양무궤도전차공장: TartuGecko;
}

export interface 평양궤도전차2호선 {
    문수궤도전차사업소: TartuGecko;
    문수:        TartuGecko;
    락랑:        TartuGecko;
    토성:        TartuGecko;
}

export interface 영업중_하남도시공사 {
    하남선: { [key: string]: TartuGecko };
}

export interface 영업중_하동케이블카주식회사 {
    "하동 플라이웨이 케이블카": 케이블카;
}

export interface 영업중_한국방송공사 {
    "관악산 케이블카": 케이블카;
}

export interface 영업중_한국삭도공업주식회사 {
    "남산 케이블카": 케이블카;
}

export interface 영업중_한국철도기술연구원 {
    "K-AGT시험선": KAgT시험선;
    철도종합시험선로:   { [key: string]: TartuGecko };
}

export interface KAgT시험선 {
    삼성현: TartuGecko;
    갓바위: TartuGecko;
    미래:  TartuGecko;
    첨단:  TartuGecko;
}

export interface 영업중_한림팩주식회사 {
    "대구 팔공산 케이블카": 케이블카;
}

export interface 영업중_함경북도청진시 {
    "청진 궤도전차": { [key: string]: TartuGecko };
}

export interface 영업중_해운대블루라인주식회사 {
    "해운대 해변열차":  { [key: string]: TartuGecko };
    "해운대 스카이캡슐": 해운대스카이캡슐;
}

export interface 해운대스카이캡슐 {
    미포:  TartuGecko;
    청사포: TartuGecko;
}

export interface 향도봉호 {
    향도: TartuGecko;
    백두: TartuGecko;
}

export interface 영업중_호텔금오산주식회사 {
    "금오산 케이블카": 케이블카;
}

export interface 영업시설_폐지 {
    국유철도:               Sticky국유철도;
    교통부:                폐지_교통부;
    한국중부발전주식회사:         폐지_한국중부발전주식회사;
    "주식회사 강원랜드":        폐지_주식회사강원랜드;
    "조선총독부 철도국":        폐지_조선총독부철도국;
    "북한 철도성":           폐지_북한철도성;
    경성전기주식회사:           Purple경성전기주식회사;
    "조선총독부 교통국":        폐지_조선총독부교통국;
    함평궤도주식회사:           폐지_함평궤도주식회사;
    조선경남철도주식회사:         폐지_조선경남철도주식회사;
    조선철도주식회사:           폐지_조선철도주식회사;
    제주도순환궤도:            폐지_제주도순환궤도;
    국립중앙과학관:            폐지_국립중앙과학관;
    "주식회사 포스코":         주식회사포스코;
    "가와사키 기선 주식회사":     가와사키기선주식회사;
    "김제궤도 주식회사":        폐지_김제궤도주식회사;
    "왜관궤도 주식회사":        폐지_왜관궤도주식회사;
    한국전력주식회사:           { [key: string]: { [key: string]: TartuGecko } };
    "남선합동전기 주식회사":      { [key: string]: { [key: string]: TartuGecko } };
    "재조선미육군사령부군정청 운수부": 재조선미육군사령부군정청운수부;
    교육기관:               폐지_교육기관;
    경부철도주식회사:           경부철도주식회사;
    "미쓰비시 제강 주식회사":     미쓰비시제강주식회사;
    "남만주철도 주식회사":       남만주철도주식회사;
    대한석탄공사:             Fluffy대한석탄공사;
    "주식회사 삼척탄좌개발":      폐지_주식회사삼척탄좌개발;
    조선전업주식회사:           폐지_조선전업주식회사;
    "보문산 케이블카":         폐지_보문산케이블카;
    송도해상케이블카:           폐지_송도해상케이블카;
    "농림부 산림국":          폐지_농림부산림국;
    "운수성 철도국":          { [key: string]: 운수성철도국 };
    "조선와사전기 주식회사":      조선와사전기주식회사;
    경춘철도주식회사:           경춘철도주식회사;
    사업소:                폐지_사업소;
    서울특별시:              폐지_서울특별시;
    한성전기회사:             한성전기회사;
    경성궤도주식회사:           경성궤도주식회사;
    남조선철도주식회사:          남조선철도주식회사;
    함경북도:               폐지_함경북도;
    생기령점토석탄주식회사:        폐지_생기령점토석탄주식회사;
    영무궤도:               영무궤도;
    강서궤도:               폐지_강서궤도;
    "미쓰비시 석탄 광업 주식회사":  폐지_미쓰비시석탄광업주식회사;
    개천철도주식회사:           개천철도주식회사;
    도문철도주식회사:           도문철도주식회사;
    "조선평안철도 주식회사":      조선평안철도주식회사;
    신흥철도주식회사:           신흥철도주식회사;
    "평양시 려객운수종합기업소":    폐지_평양시려객운수종합기업소;
    북선척식철도주식회사:         북선척식철도주식회사;
    "동만주철도 주식회사":       폐지_동만주철도주식회사;
}

export interface 가와사키기선주식회사 {
    관여연락선: 관여연락선;
}

export interface 관여연락선 {
    여수항: TartuGecko;
}

export interface 폐지_강서궤도 {
    강서궤도: 강서궤도_강서궤도;
}

export interface 강서궤도_강서궤도 {
    기양: TartuGecko;
    강서: TartuGecko;
}

export interface 개천철도주식회사 {
    개천선: { [key: string]: TartuGecko };
}

export interface 경부철도주식회사 {
    경인선: 경부철도주식회사_경인선;
    경부선: 경부철도주식회사_경부선;
}

export interface 경부철도주식회사_경부선 {
    미륵: TartuGecko;
    평촌: TartuGecko;
    용호: TartuGecko;
    진위: TartuGecko;
}

export interface 경부철도주식회사_경인선 {
    우각동: TartuGecko;
}

export interface 경성궤도주식회사 {
    "경성궤도 본선":   경성궤도주식회사_경성궤도본선;
    "경성궤도 광장리선": 경성궤도주식회사_경성궤도광장리선;
    동뚝:          TartuGecko;
    화물지선종점:      TartuGecko;
}

export interface 경성궤도주식회사_경성궤도광장리선 {
    도교: TartuGecko;
}

export interface 경성궤도주식회사_경성궤도본선 {
    후원: TartuGecko;
}

export interface Purple경성전기주식회사 {
    금강산선:         금강산선;
    "서울전차 서대문선":  { [key: string]: TartuGecko };
    "서울전차 영천선":   { [key: string]: TartuGecko };
    "서울전차 마포선":   { [key: string]: TartuGecko };
    "서울전차 의주로선":  { [key: string]: TartuGecko };
    "서울전차 세종로선":  서울전차세종로선;
    "서울전차 효자동선":  서울전차효자동선;
    "서울전차 광화문선":  서울전차광화문선;
    "서울전차 안국동선":  { [key: string]: TartuGecko };
    "서울전차 종로선":   { [key: string]: TartuGecko };
    "서울전차 청량리선":  { [key: string]: TartuGecko };
    "서울전차 석산선":   서울전차석산선;
    "서울전차 경용선":   { [key: string]: TartuGecko };
    "서울전차 노량진선":  { [key: string]: TartuGecko };
    "서울전차 구용산선":  { [key: string]: TartuGecko };
    "경성전차 강안선":   { [key: string]: TartuGecko };
    "서울전차 을지로선":  { [key: string]: TartuGecko };
    "서울전차 창경원선":  서울전차창경원선;
    "서울전차 충무로선":  서울전차충무로선;
    "서울전차 장충단선":  { [key: string]: TartuGecko };
    "서울전차 왕십리선":  { [key: string]: TartuGecko };
    "서울전차 용산역전선": 서울전차용산역전선;
}

export interface 금강산선 {
    기성:  TartuGecko;
    현리:  TartuGecko;
    도파:  TartuGecko;
    화계:  TartuGecko;
    오량:  TartuGecko;
    단발령: TartuGecko;
    말휘리: TartuGecko;
    병무:  TartuGecko;
    내금강: TartuGecko;
}

export interface 서울전차광화문선 {
    체신국앞: TartuGecko;
}

export interface 서울전차석산선 {
    동묘앞: TartuGecko;
    석산:  TartuGecko;
}

export interface 서울전차세종로선 {
    태평로2가: TartuGecko;
}

export interface 서울전차용산역전선 {
    철도관사앞: TartuGecko;
}

export interface 서울전차창경원선 {
    대학병원앞: TartuGecko;
}

export interface 서울전차충무로선 {
    충무로5가: TartuGecko;
}

export interface 서울전차효자동선 {
    진명여고: TartuGecko;
}

export interface 경춘철도주식회사 {
    "구 경춘선": 경춘철도주식회사_구경춘선;
}

export interface 경춘철도주식회사_구경춘선 {
    태릉: TartuGecko;
    묵동: TartuGecko;
}

export interface 폐지_교육기관 {
    철도관리양성소: TartuGecko;
}

export interface 폐지_교통부 {
    경원선:     교통부_경원선;
    경전선:     교통부_경전선;
    "구 경춘선": 교통부_구경춘선;
    신촌연결선:   교통부_신촌연결선;
    박물관:     교통부_박물관;
    우암선:     교통부_우암선;
    "구 대구선": 교통부_구대구선;
    경부선:     교통부_경부선;
    동촌연결선:   { [key: string]: TartuGecko };
    서울교외선:   교통부_서울교외선;
    동해북부선:   교통부_동해북부선;
    토해선:     토해선;
}

export interface 교통부_경부선 {
    신천신호소: TartuGecko;
}

export interface 교통부_경원선 {
    철원:  TartuGecko;
    월정리: TartuGecko;
}

export interface 교통부_경전선 {
    송지: TartuGecko;
    생림: TartuGecko;
}

export interface 교통부_구경춘선 {
    고상전: TartuGecko;
}

export interface 교통부_구대구선 {
    신대신호소: TartuGecko;
}

export interface 교통부_동해북부선 {
    초구: TartuGecko;
}

export interface 교통부_서울교외선 {
    가능: TartuGecko;
}

export interface 교통부_신촌연결선 {
    서강: TartuGecko;
    신촌: TartuGecko;
}

export interface 교통부_우암선 {
    적기부두: TartuGecko;
}

export interface 토해선 {
    성호:  TartuGecko;
    예성강: TartuGecko;
    토성:  TartuGecko;
    배천:  TartuGecko;
}

export interface 폐지_국립중앙과학관 {
    대전자기부상시험선: { [key: string]: TartuGecko };
}

export interface Sticky국유철도 {
    한국철도공사: 한국철도공사_10;
    철도청:    Sticky철도청;
}

export interface Sticky철도청 {
    문경선:      철도청_문경선;
    화순선:      철도청_화순선;
    전라선:      Sticky전라선;
    충북선:      철도청_충북선;
    경전선:      철도청_경전선;
    "구 대구선":  철도청_구대구선;
    수인선:      철도청_수인선;
    경춘선:      철도청_경춘선;
    "구 경춘선":  철도청_구경춘선;
    마산항제1부두선: 철도청_마산항제1부두선;
    진해선:      철도청_진해선;
    김포선:      김포선;
    당인리선:     { [key: string]: TartuGecko };
    수려선:      { [key: string]: TartuGecko };
    안성선:      Fluffy안성선;
    광주선:      철도청_광주선;
    경부선:      Hilarious경부선;
    경북선:      철도청_경북선;
    호남선:      철도청_호남선;
    정선선:      철도청_정선선;
    진삼선:      진삼선;
    영동선:      철도청_영동선;
    용산선:      철도청_용산선;
    장항선:      철도청_장항선;
    장항화물선:    철도청_장항화물선;
    오정선:      오정선;
    비인선:      비인선;
    동해남부선:    Fluffy동해남부선;
    서청주선:     서청주선;
    옥구선:      철도청_옥구선;
    회동선:      회동선;
    망우선:      철도청_망우선;
    남부순환선:    남부순환선;
    병원:       { [key: string]: TartuGecko };
    박물관:      철도청_박물관;
    교육기관:     철도청_교육기관;
    경인선:      철도청_경인선;
    충남선:      충남선;
    사업소:      { [key: string]: TartuGecko };
    중앙선:      철도청_중앙선;
    단양탄광선:    단양탄광선;
    문현선:      Fluffy문현선;
    우암선:      Sticky우암선;
    옥서삼각선:    옥서삼각선;
    경의선:      철도청_경의선;
    수색객차출발선:  { [key: string]: TartuGecko };
    울산선:      울산선;
    장생포선:     장생포선_Class;
    울산항선:     장생포선_Class;
    동해북부선:    Ambitious동해북부선;
}

export interface Hilarious경부선 {
    증약:   TartuGecko;
    가풍:   TartuGecko;
    미륵:   TartuGecko;
    박람회:  TartuGecko;
    안양풀장: TartuGecko;
    초량:   TartuGecko;
    부산:   TartuGecko;
    엑스포:  TartuGecko;
    오정:   TartuGecko;
}

export interface 철도청_경북선 {
    반구:  TartuGecko;
    미룡:  TartuGecko;
    장산:  TartuGecko;
    보문:  TartuGecko;
    미산:  TartuGecko;
    고평:  TartuGecko;
    동예천: TartuGecko;
    가동:  TartuGecko;
    율현:  TartuGecko;
    송암:  TartuGecko;
    산양:  TartuGecko;
    아천:  TartuGecko;
    점촌:  TartuGecko;
}

export interface 철도청_경의선 {
    능화신호소: TartuGecko;
}

export interface 철도청_경인선 {
    "구로 신호소": TartuGecko;
    주안:       TartuGecko;
    인천:       TartuGecko;
}

export interface 철도청_경전선 {
    합성:  TartuGecko;
    내동:  TartuGecko;
    구마산: TartuGecko;
    수덕:  TartuGecko;
}

export interface 철도청_경춘선 {
    의암:   TartuGecko;
    답내:   TartuGecko;
    청평호반: TartuGecko;
    상색:   TartuGecko;
    갈매:   TartuGecko;
}

export interface 철도청_광주선 {
    북광주: TartuGecko;
}

export interface 철도청_교육기관 {
    철도전문대학: TartuGecko;
}

export interface 철도청_구경춘선 {
    월곡: TartuGecko;
    성동: TartuGecko;
}

export interface 철도청_구대구선 {
    신평: TartuGecko;
}

export interface 김포선 {
    부천: TartuGecko;
    약대: TartuGecko;
    김포: TartuGecko;
}

export interface 남부순환선 {
    오봉:  TartuGecko;
    청계리: TartuGecko;
    과천:  TartuGecko;
    염곡:  TartuGecko;
    영동:  TartuGecko;
    송파:  TartuGecko;
    강동:  TartuGecko;
    토평:  TartuGecko;
    도농:  TartuGecko;
}

export interface 단양탄광선 {
    도담: TartuGecko;
    사평: TartuGecko;
}

export interface Fluffy동해남부선 {
    병영:  TartuGecko;
    울산:  TartuGecko;
    달리:  TartuGecko;
    황성:  TartuGecko;
    남울산: TartuGecko;
}

export interface Ambitious동해북부선 {
    양양:  TartuGecko;
    낙산사: TartuGecko;
    대포:  TartuGecko;
    속초:  TartuGecko;
    천진리: TartuGecko;
    문암:  TartuGecko;
    공현진: TartuGecko;
    간성:  TartuGecko;
    거진:  TartuGecko;
    현내:  TartuGecko;
}

export interface 철도청_마산항제1부두선 {
    교원:  TartuGecko;
    신마산: TartuGecko;
}

export interface 철도청_망우선 {
    이문: TartuGecko;
}

export interface 철도청_문경선 {
    진남: TartuGecko;
    불정: TartuGecko;
    점촌: TartuGecko;
}

export interface Fluffy문현선 {
    부산: TartuGecko;
    우암: TartuGecko;
}

export interface 철도청_박물관 {
    철도기념관: TartuGecko;
}

export interface 비인선 {
    서천: TartuGecko;
    종천: TartuGecko;
    비인: TartuGecko;
    선동: TartuGecko;
}

export interface 서청주선 {
    서청주: TartuGecko;
    청주:  TartuGecko;
}

export interface 철도청_수인선 {
    중앙: TartuGecko;
    고잔: TartuGecko;
    원곡: TartuGecko;
    신길: TartuGecko;
    군자: TartuGecko;
    야목: TartuGecko;
    성두: TartuGecko;
    수원: TartuGecko;
}

export interface Fluffy안성선 {
    천안: TartuGecko;
    석교: TartuGecko;
    성거: TartuGecko;
    입장: TartuGecko;
    고지: TartuGecko;
    미양: TartuGecko;
    안성: TartuGecko;
    신부: TartuGecko;
}

export interface 철도청_영동선 {
    경포대: TartuGecko;
    평릉:  TartuGecko;
}

export interface 오정선 {
    서대전: TartuGecko;
    오정:  TartuGecko;
}

export interface 철도청_옥구선 {
    상평: TartuGecko;
}

export interface 옥서삼각선 {
    옥마: TartuGecko;
    옥서: TartuGecko;
}

export interface 철도청_용산선 {
    효창: TartuGecko;
    동막: TartuGecko;
}

export interface Sticky우암선 {
    부전: TartuGecko;
}

export interface 울산선 {
    달리: TartuGecko;
    야음: TartuGecko;
}

export interface 장생포선_Class {
    야음: TartuGecko;
}

export interface 철도청_장항선 {
    세교: TartuGecko;
    옥서: TartuGecko;
    신곡: TartuGecko;
}

export interface 철도청_장항화물선 {
    구절: TartuGecko;
}

export interface Sticky전라선 {
    산성: TartuGecko;
    오류: TartuGecko;
    남관: TartuGecko;
    덕진: TartuGecko;
    상동: TartuGecko;
    학구: TartuGecko;
    내구: TartuGecko;
    전주: TartuGecko;
}

export interface 철도청_정선선 {
    외반점: TartuGecko;
}

export interface 철도청_중앙선 {
    단양:  TartuGecko;
    서경주: TartuGecko;
}

export interface 진삼선 {
    예하:  TartuGecko;
    선진:  TartuGecko;
    죽림:  TartuGecko;
    삼천포: TartuGecko;
    노룡:  TartuGecko;
    금문:  TartuGecko;
    사천:  TartuGecko;
    개양:  TartuGecko;
}

export interface 철도청_진해선 {
    상남: TartuGecko;
}

export interface 충남선 {
    논산: TartuGecko;
    정지: TartuGecko;
    석성: TartuGecko;
    능산: TartuGecko;
    부여: TartuGecko;
}

export interface 철도청_충북선 {
    충주: TartuGecko;
    증평: TartuGecko;
    산척: TartuGecko;
    정하: TartuGecko;
    금암: TartuGecko;
    문암: TartuGecko;
    상당: TartuGecko;
    정봉: TartuGecko;
}

export interface 철도청_호남선 {
    동목포: TartuGecko;
    명산:  TartuGecko;
    영산포: TartuGecko;
    신흥리: TartuGecko;
    채화:  TartuGecko;
    학교:  TartuGecko;
}

export interface 철도청_화순선 {
    복암:  TartuGecko;
    남화순: TartuGecko;
}

export interface 회동선 {
    회동: TartuGecko;
    세대: TartuGecko;
}

export interface 한국철도공사_10 {
    가야선:        Sticky가야선;
    경부고속선:      { [key: string]: TartuGecko };
    경전선:        { [key: string]: TartuGecko };
    남포선:        Fluffy남포선;
    대구선:        Sticky대구선;
    동해남부선:      { [key: string]: TartuGecko };
    문경선:        Sticky문경선;
    장항선:        { [key: string]: TartuGecko };
    장항화물선:      Tentacled장항화물선;
    중앙선:        { [key: string]: TartuGecko };
    태백선:        Sticky태백선;
    화순선:        한국철도공사_화순선;
    경의선:        Indecent경의선;
    금장삼각선:      금장삼각선;
    옥구선:        Tentacled옥구선;
    경춘선:        Tentacled경춘선;
    가은선:        가은선;
    "구 경춘선":    { [key: string]: TartuGecko };
    "구 대구선":    Fluffy구대구선;
    경부선:        Ambitious경부선;
    경북선:        Indigo경북선;
    호남선:        Magenta호남선;
    충북선:        Indigo충북선;
    정선선:        Tentacled정선선;
    전라선:        { [key: string]: TartuGecko };
    영동선:        Indecent영동선;
    효창선:        효창선;
    마산항제1부두선:   한국철도공사_마산항제1부두선;
    정양선:        정양선;
    경원선:        { [key: string]: TartuGecko };
    병원:         한국철도공사_병원;
    광양제철선:      Sticky광양제철선;
    분당선:        Tentacled분당선;
    진해선:        Hilarious진해선;
    영천삼각선:      Fluffy영천삼각선;
    "구 대전남연결선": 구대전남연결선;
    사업소:        { [key: string]: TartuGecko };
}

export interface Sticky가야선 {
    주례: TartuGecko;
}

export interface 가은선 {
    가은:  TartuGecko;
    구랑리: TartuGecko;
    진남:  TartuGecko;
}

export interface Ambitious경부선 {
    대성: TartuGecko;
    이원: TartuGecko;
    대신: TartuGecko;
}

export interface Indigo경북선 {
    양정: TartuGecko;
    두원: TartuGecko;
    이방: TartuGecko;
    지내: TartuGecko;
}

export interface Indecent경의선 {
    장단:     TartuGecko;
    "구 강매": TartuGecko;
}

export interface Tentacled경춘선 {
    평내:  TartuGecko;
    남춘천: TartuGecko;
    김유정: TartuGecko;
    강촌:  TartuGecko;
    백양리: TartuGecko;
    경강:  TartuGecko;
    가평:  TartuGecko;
    청평:  TartuGecko;
    금곡:  TartuGecko;
    사릉:  TartuGecko;
}

export interface Sticky광양제철선 {
    광양: TartuGecko;
}

export interface Fluffy구대구선 {
    반야월: TartuGecko;
    동촌:  TartuGecko;
    동대구: TartuGecko;
    대구:  TartuGecko;
}

export interface 구대전남연결선 {
    옥천:       TartuGecko;
    대전북연결선분기: TartuGecko;
}

export interface 금장삼각선 {
    서경주: TartuGecko;
    나원:  TartuGecko;
}

export interface Fluffy남포선 {
    남포: TartuGecko;
    옥마: TartuGecko;
}

export interface Sticky대구선 {
    봉정:    TartuGecko;
    금호:    TartuGecko;
    북영천분기: TartuGecko;
}

export interface 한국철도공사_마산항제1부두선 {
    마산항: TartuGecko;
    마산:  TartuGecko;
}

export interface Sticky문경선 {
    신현: TartuGecko;
    문경: TartuGecko;
    마성: TartuGecko;
}

export interface 한국철도공사_병원 {
    용산철도병원: TartuGecko;
}

export interface Tentacled분당선 {
    보정: TartuGecko;
}

export interface Indecent영동선 {
    시동:  TartuGecko;
    심포리: TartuGecko;
    영주:  TartuGecko;
}

export interface Fluffy영천삼각선 {
    북영천분기: TartuGecko;
}

export interface Tentacled옥구선 {
    군산화물: TartuGecko;
}

export interface Tentacled장항화물선 {
    장항화물: TartuGecko;
    장항:   TartuGecko;
}

export interface Tentacled정선선 {
    신치: TartuGecko;
}

export interface 정양선 {
    정양: TartuGecko;
    영월: TartuGecko;
}

export interface Hilarious진해선 {
    성주사: TartuGecko;
}

export interface Indigo충북선 {
    미호: TartuGecko;
    원박: TartuGecko;
    청주: TartuGecko;
}

export interface Sticky태백선 {
    송학: TartuGecko;
    장락: TartuGecko;
}

export interface Magenta호남선 {
    옥정:  TartuGecko;
    신흥리: TartuGecko;
    다산:  TartuGecko;
    신도:  TartuGecko;
    원정:  TartuGecko;
    일로:  TartuGecko;
    고막원: TartuGecko;
    나주:  TartuGecko;
    노안:  TartuGecko;
    안평:  TartuGecko;
    노령:  TartuGecko;
}

export interface 한국철도공사_화순선 {
    화순: TartuGecko;
    장동: TartuGecko;
}

export interface 효창선 {
    용산: TartuGecko;
    효창: TartuGecko;
}

export interface 폐지_김제궤도주식회사 {
    김제궤도: 김제궤도;
}

export interface 김제궤도 {
    김제:   TartuGecko;
    김제읍내: TartuGecko;
    죽산:   TartuGecko;
    동진강안: TartuGecko;
}

export interface 남만주철도주식회사 {
    사업소:  남만주철도주식회사_사업소;
    경부선:  { [key: string]: TartuGecko };
    라진항선: 남만주철도주식회사_라진항선;
}

export interface 남만주철도주식회사_라진항선 {
    라진부두: TartuGecko;
}

export interface 남만주철도주식회사_사업소 {
    남대문기관고: TartuGecko;
}

export interface 남조선철도주식회사 {
    경전선: 남조선철도주식회사_경전선;
}

export interface 남조선철도주식회사_경전선 {
    신음: TartuGecko;
}

export interface 폐지_농림부산림국 {
    "가곡천 산림철도": { [key: string]: TartuGecko };
}

export interface Fluffy대한석탄공사 {
    "은성탄광 전용철도":        은성탄광전용철도;
    "함백탄광 전용철도":        { [key: string]: TartuGecko };
    "함백탄광 전용철도 단곡 삭도":  { [key: string]: TartuGecko };
    "함백탄광 전용철도 선탄강삭철도": { [key: string]: TartuGecko };
    "함태탄광 전용철도":        { [key: string]: TartuGecko };
    "도계광업소 삭도":         { [key: string]: TartuGecko };
}

export interface 은성탄광전용철도 {
    점촌:   TartuGecko;
    주평:   TartuGecko;
    불정:   TartuGecko;
    구랑리:  TartuGecko;
    은성탄광: TartuGecko;
}

export interface 도문철도주식회사 {
    함북선: 도문철도주식회사_함북선;
}

export interface 도문철도주식회사_함북선 {
    강안: TartuGecko;
}

export interface 폐지_동만주철도주식회사 {
    "동만주철도 본선": 동만주철도본선;
}

export interface 동만주철도본선 {
    훈융: TartuGecko;
}

export interface 폐지_미쓰비시석탄광업주식회사 {
    "미쓰비시 광업 대보탄갱선": 미쓰비시광업대보탄갱선;
}

export interface 미쓰비시광업대보탄갱선 {
    대평:   TartuGecko;
    대보탄광: TartuGecko;
}

export interface 미쓰비시제강주식회사 {
    사업소: 미쓰비시제강주식회사_사업소;
}

export interface 미쓰비시제강주식회사_사업소 {
    "미쓰비시 제강 인천제작소": TartuGecko;
}

export interface 폐지_보문산케이블카 {
    "보문산 케이블카": 케이블카;
}

export interface 북선척식철도주식회사 {
    무산선: 북선척식철도주식회사_무산선;
}

export interface 북선척식철도주식회사_무산선 {
    무산강안: TartuGecko;
}

export interface 폐지_북한철도성 {
    금강산선:     { [key: string]: TartuGecko };
    청년이천선:    Tentacled청년이천선;
    황해청년선:    Tentacled황해청년선;
    장방삼각선:    장방삼각선;
    배천선:      Tentacled배천선;
    옹진선:      Sticky옹진선;
    부포선:      Sticky부포선;
    은률선:      Fluffy은률선;
    도지리선:     도지리선;
    평북선:      Tentacled평북선;
    평라선:      Sticky평라선;
    직동탄광선:    Fluffy직동탄광선;
    신창삼각선:    신창삼각선;
    신흥선:      { [key: string]: TartuGecko };
    허천선:      Fluffy허천선;
    청진조차장선:   Fluffy청진조차장선;
    회령탄광선:    Sticky회령탄광선;
    삼지연선:     { [key: string]: TartuGecko };
    보천선:      Fluffy보천선;
    성평선:      { [key: string]: TartuGecko };
    금강산청년선:   Tentacled금강산청년선;
    평남선:      Tentacled평남선;
    서해리선:     서해리선;
    덕달선:      덕달선;
    운산선:      운산선;
    잠진리선:     Fluffy잠진리선;
    남동선:      남동선;
    "구 은률선":  Fluffy구은률선;
    박천선:      Tentacled박천선;
    삼등탄광선:    삼등탄광선;
    안주탄광선:    { [key: string]: TartuGecko };
    화풍선:      { [key: string]: TartuGecko };
    청남선:      청남선;
    개천선:      { [key: string]: TartuGecko };
    하성선:      하성선;
    장연선:      Fluffy장연선;
    일탄선:      Tentacled일탄선;
    백두산청년선:   Tentacled백두산청년선;
    백무선:      Indigo백무선;
    함북선:      { [key: string]: TartuGecko };
    사해선:      북한철도성_사해선;
    내토선:      내토선;
    경원선:      Indecent경원선;
    병원:       병원_Class;
    다사도선:     Tentacled다사도선;
    북부내륙선:    병원_Class;
    강계선:      { [key: string]: TartuGecko };
    만포선:      Tentacled만포선;
    구장삼각선:    { [key: string]: TartuGecko };
    청년팔원선:    { [key: string]: TartuGecko };
    경의선:      Hilarious경의선;
    삼천포지선:    { [key: string]: TartuGecko };
    화풍삼각선:    { [key: string]: TartuGecko };
    배골선:      배골선;
    매하선:      매하선;
    청단삼각선:    { [key: string]: TartuGecko };
    문천항선:     Fluffy문천항선;
    고비선:      Fluffy고비선;
    천성탄광선:    Fluffy천성탄광선;
    "평양 덕산선": 평양덕산선;
    평덕선:      Fluffy평덕선;
    수화선:      수화선;
    서호선:      Fluffy서호선;
    청암삼각선:    { [key: string]: TartuGecko };
    장진선:      북한철도성_장진선;
    장풍선:      장풍선;
    무산선:      Fluffy무산선;
    서상삼각선:    서상삼각선;
    남양삼각선:    남양삼각선;
    온성선:      온성선;
    회암선:      Tentacled회암선;
    남라진선:     남라진선;
    송림선:      Fluffy송림선;
    청진항선:     청진항선;
    사업소:      { [key: string]: TartuGecko };
    문덕삼각선:    { [key: string]: TartuGecko };
    선봉항선:     선봉항선;
}

export interface Indecent경원선 {
    원산: TartuGecko;
}

export interface Hilarious경의선 {
    립암:      TartuGecko;
    "문덕 분기": TartuGecko;
    석암:      TartuGecko;
    서평양:     TartuGecko;
}

export interface Fluffy고비선 {
    "승호 분기": TartuGecko;
}

export interface Fluffy구은률선 {
    사리원:  TartuGecko;
    서사리원: TartuGecko;
    미곡:   TartuGecko;
    서종:   TartuGecko;
    삼강:   TartuGecko;
    금산:   TartuGecko;
}

export interface Tentacled금강산청년선 {
    신대리: TartuGecko;
    고성:  TartuGecko;
}

export interface 남동선 {
    평남온천: TartuGecko;
    안석:   TartuGecko;
    풍정:   TartuGecko;
    이압:   TartuGecko;
    락생:   TartuGecko;
    석다:   TartuGecko;
    한천:   TartuGecko;
    대풍:   TartuGecko;
    염전:   TartuGecko;
    만풍:   TartuGecko;
    남동포:  TartuGecko;
}

export interface 남라진선 {
    라진: TartuGecko;
}

export interface 남양삼각선 {
    국경:         TartuGecko;
    "남양삼각선 분기": TartuGecko;
}

export interface 내토선 {
    화산: TartuGecko;
    내토: TartuGecko;
}

export interface Tentacled다사도선 {
    덕봉: TartuGecko;
    북중: TartuGecko;
}

export interface 덕달선 {
    덕달:         TartuGecko;
    화양:         TartuGecko;
    청단:         TartuGecko;
    "청단삼각선 분기": TartuGecko;
}

export interface 도지리선 {
    남포: TartuGecko;
}

export interface Tentacled만포선 {
    "구장삼각선 분기": TartuGecko;
}

export interface 매하선 {
    금천:  TartuGecko;
    매하동: TartuGecko;
}

export interface Fluffy무산선 {
    창렬: TartuGecko;
    금패: TartuGecko;
}

export interface Fluffy문천항선 {
    옥정:  TartuGecko;
    신흥리: TartuGecko;
}

export interface Tentacled박천선 {
    일원: TartuGecko;
}

export interface 배골선 {
    평산: TartuGecko;
    배골: TartuGecko;
}

export interface Tentacled배천선 {
    화산:         TartuGecko;
    심계:         TartuGecko;
    무구:         TartuGecko;
    갈산:         TartuGecko;
    "장방삼각선 분기": TartuGecko;
    "청단 분기":    TartuGecko;
}

export interface Tentacled백두산청년선 {
    합수: TartuGecko;
    봉암: TartuGecko;
}

export interface Indigo백무선 {
    굴송:  TartuGecko;
    상경평: TartuGecko;
    하경평: TartuGecko;
    유평동: TartuGecko;
    상단:  TartuGecko;
    삼사:  TartuGecko;
}

export interface Fluffy보천선 {
    가림:  TartuGecko;
    보천:  TartuGecko;
    곤장덕: TartuGecko;
    내곡:  TartuGecko;
    온수:  TartuGecko;
    대진:  TartuGecko;
    려수:  TartuGecko;
    평물:  TartuGecko;
}

export interface Sticky부포선 {
    룡연: TartuGecko;
}

export interface 북한철도성_사해선 {
    신원:  TartuGecko;
    미력:  TartuGecko;
    장수산: TartuGecko;
    화산:  TartuGecko;
    석탄:  TartuGecko;
    광탄:  TartuGecko;
    삼강:  TartuGecko;
}

export interface 삼등탄광선 {
    삼등: TartuGecko;
    대리: TartuGecko;
}

export interface 서상삼각선 {
    서상:         TartuGecko;
    "서상삼각선 분기": TartuGecko;
}

export interface 서해리선 {
    룡정: TartuGecko;
    철광: TartuGecko;
}

export interface Fluffy서호선 {
    영대:  TartuGecko;
    룡흥:  TartuGecko;
    신구룡: TartuGecko;
    구룡:  TartuGecko;
    축항:  TartuGecko;
    동흥남: TartuGecko;
    내호:  TartuGecko;
    서함흥: TartuGecko;
    함흥:  TartuGecko;
}

export interface 선봉항선 {
    선봉:  TartuGecko;
    선봉항: TartuGecko;
}

export interface Fluffy송림선 {
    송림: TartuGecko;
}

export interface 수화선 {
    남덕천: TartuGecko;
    수화:  TartuGecko;
}

export interface 신창삼각선 {
    신창:         TartuGecko;
    "신창심각선 분기": TartuGecko;
}

export interface 온성선 {
    온성: TartuGecko;
    온탄: TartuGecko;
    주원: TartuGecko;
}

export interface Sticky옹진선 {
    랭정:  TartuGecko;
    국봉:  TartuGecko;
    청양:  TartuGecko;
    해주:  TartuGecko;
    서해주: TartuGecko;
}

export interface 운산선 {
    북신현:  TartuGecko;
    로현:   TartuGecko;
    상서:   TartuGecko;
    운대산:  TartuGecko;
    평북운산: TartuGecko;
    방어:   TartuGecko;
    삼산:   TartuGecko;
}

export interface Fluffy은률선 {
    문화:   TartuGecko;
    창촌:   TartuGecko;
    황해룡문: TartuGecko;
    신천온천: TartuGecko;
    신천:   TartuGecko;
    삼천온천: TartuGecko;
    궁흥:   TartuGecko;
    야촌:   TartuGecko;
}

export interface Tentacled일탄선 {
    로동: TartuGecko;
}

export interface Fluffy잠진리선 {
    강선:  TartuGecko;
    잠진리: TartuGecko;
}

export interface 장방삼각선 {
    매화:         TartuGecko;
    "장방삼각선 분기": TartuGecko;
}

export interface Fluffy장연선 {
    락산: TartuGecko;
    락도: TartuGecko;
}

export interface 북한철도성_장진선 {
    오로: TartuGecko;
    동정: TartuGecko;
}

export interface 장풍선 {
    풍상: TartuGecko;
    장풍: TartuGecko;
}

export interface Fluffy직동탄광선 {
    부흥: TartuGecko;
}

export interface Fluffy천성탄광선 {
    "신창심각선 분기": TartuGecko;
}

export interface 청남선 {
    "룡림 분기":  TartuGecko;
    룡림:       TartuGecko;
    칠리:       TartuGecko;
    원흥:       TartuGecko;
    창동:       TartuGecko;
    "청남선 분기": TartuGecko;
}

export interface Tentacled청년이천선 {
    하안:      TartuGecko;
    "평산 분기": TartuGecko;
}

export interface Fluffy청진조차장선 {
    강덕: TartuGecko;
    송향: TartuGecko;
}

export interface 청진항선 {
    청진: TartuGecko;
}

export interface Tentacled평남선 {
    대성: TartuGecko;
    진지: TartuGecko;
    대보: TartuGecko;
    해산: TartuGecko;
}

export interface Fluffy평덕선 {
    순덕: TartuGecko;
    구단: TartuGecko;
}

export interface Sticky평라선 {
    륙대동:     TartuGecko;
    려호:      TartuGecko;
    삼호:      TartuGecko;
    속후:      TartuGecko;
    로동:      TartuGecko;
    배산점:     TartuGecko;
    향동:      TartuGecko;
    중호:      TartuGecko;
    "청암 분기": TartuGecko;
    함흥:      TartuGecko;
    청진:      TartuGecko;
}

export interface Tentacled평북선 {
    고안: TartuGecko;
}

export interface 평양덕산선 {
    송가: TartuGecko;
    덕산: TartuGecko;
}

export interface 하성선 {
    신덕:  TartuGecko;
    구하성: TartuGecko;
    신원:  TartuGecko;
}

export interface Fluffy허천선 {
    장덕:  TartuGecko;
    포치리: TartuGecko;
    동대:  TartuGecko;
}

export interface Tentacled황해청년선 {
    매화: TartuGecko;
    염탄: TartuGecko;
    영양: TartuGecko;
}

export interface Sticky회령탄광선 {
    명유:  TartuGecko;
    신계림: TartuGecko;
}

export interface Tentacled회암선 {
    은덕천: TartuGecko;
}

export interface 폐지_사업소 {
    서울역그릴: TartuGecko;
}

export interface 폐지_생기령점토석탄주식회사 {
    "생기령 점토궤도": 생기령점토궤도;
}

export interface 생기령점토궤도 {
    경성:  TartuGecko;
    생기령: TartuGecko;
}

export interface 폐지_서울특별시 {
    "서울전차 서대문선":   { [key: string]: TartuGecko };
    "서울전차 영천선":    { [key: string]: TartuGecko };
    "서울전차 마포선":    { [key: string]: TartuGecko };
    "서울전차 의주로선":   { [key: string]: TartuGecko };
    "서울전차 세종로선":   { [key: string]: TartuGecko };
    "서울전차 효자동선":   { [key: string]: TartuGecko };
    "서울전차 광화문선":   { [key: string]: TartuGecko };
    "서울전차 종로선":    { [key: string]: TartuGecko };
    "서울전차 청량리선":   { [key: string]: TartuGecko };
    "서울전차 종로삼각선":  { [key: string]: TartuGecko };
    "서울전차 경용선":    { [key: string]: TartuGecko };
    "서울전차 노량진선":   { [key: string]: TartuGecko };
    "서울전차 영등포선":   { [key: string]: TartuGecko };
    "서울전차 구용산선":   { [key: string]: TartuGecko };
    "서울전차 을지로선":   { [key: string]: TartuGecko };
    "서울전차 동대문삼각선": { [key: string]: TartuGecko };
    "서울전차 을지로삼각선": { [key: string]: TartuGecko };
    "서울전차 돈암동선":   { [key: string]: TartuGecko };
    "서울전차 창경원선":   { [key: string]: TartuGecko };
    "서울전차 충무로선":   { [key: string]: TartuGecko };
    "서울전차 왕십리선":   { [key: string]: TartuGecko };
    "서울전차 마포차고선":  { [key: string]: TartuGecko };
    "서울전차 영등포차고선": { [key: string]: TartuGecko };
    "서울전차 삼각지차고선": { [key: string]: TartuGecko };
    "서울전차 동대문차고선": { [key: string]: TartuGecko };
    사업소:           서울특별시_사업소;
    "경성궤도 본선":     { [key: string]: TartuGecko };
    "경성궤도 광장리선":   서울특별시_경성궤도광장리선;
    "서울전차 용산역전선":  { [key: string]: TartuGecko };
}

export interface 서울특별시_경성궤도광장리선 {
    상후원: TartuGecko;
    화양:  TartuGecko;
    모진:  TartuGecko;
    구의:  TartuGecko;
    광장:  TartuGecko;
}

export interface 서울특별시_사업소 {
    서울특별시전차운수사업소: TartuGecko;
}

export interface 폐지_송도해상케이블카 {
    "(구)송도해상케이블카": { [key: string]: TartuGecko };
}

export interface 신흥철도주식회사 {
    장진선: 신흥철도주식회사_장진선;
    신흥선: 신흥철도주식회사_신흥선;
}

export interface 신흥철도주식회사_신흥선 {
    흑수: TartuGecko;
    호안: TartuGecko;
}

export interface 신흥철도주식회사_장진선 {
    신대: TartuGecko;
    중남: TartuGecko;
    구진: TartuGecko;
}

export interface 영무궤도 {
    영무궤도: 병원_Class;
}

export interface 폐지_왜관궤도주식회사 {
    왜관궤도: 왜관궤도;
}

export interface 왜관궤도 {
    왜관:   TartuGecko;
    낙동강안: TartuGecko;
}

export interface 운수성철도국 {
    부산: TartuGecko;
}

export interface 재조선미육군사령부군정청운수부 {
    병원: 재조선미육군사령부군정청운수부_병원;
}

export interface 재조선미육군사령부군정청운수부_병원 {
    부산철도의무실: TartuGecko;
}

export interface 폐지_제주도순환궤도 {
    제주도순환궤도:      제주도순환궤도_제주도순환궤도;
    "제주도순환궤도 지선": 제주도순환궤도지선_Class;
}

export interface 제주도순환궤도_제주도순환궤도 {
    제주: TartuGecko;
    김녕: TartuGecko;
    조천: TartuGecko;
    사수: TartuGecko;
}

export interface 폐지_조선경남철도주식회사 {
    안성선:             조선경남철도주식회사_안성선;
    장항화물선:           조선경남철도주식회사_장항화물선;
    "장항-군산 연락선":     { [key: string]: TartuGecko };
    장항선:             조선경남철도주식회사_장항선;
    "조선경남철도 승합자동차선": { [key: string]: TartuGecko };
}

export interface 조선경남철도주식회사_안성선 {
    마전:   TartuGecko;
    삼죽:   TartuGecko;
    죽산:   TartuGecko;
    매산:   TartuGecko;
    장호원:  TartuGecko;
    용월:   TartuGecko;
    죽산읍내: TartuGecko;
    주천:   TartuGecko;
    행죽:   TartuGecko;
    대서:   TartuGecko;
    안성읍내: TartuGecko;
}

export interface 조선경남철도주식회사_장항선 {
    기동: TartuGecko;
    온동: TartuGecko;
}

export interface 조선경남철도주식회사_장항화물선 {
    장항잔교: TartuGecko;
}

export interface 조선와사전기주식회사 {
    "부산전차 광복동선": { [key: string]: TartuGecko };
}

export interface 폐지_조선전업주식회사 {
    "영월광업소 삭도": { [key: string]: TartuGecko };
}

export interface 폐지_조선철도주식회사 {
    경북선:     조선철도주식회사_경북선;
    "구 경북선": 구경북선;
    수인선:     조선철도주식회사_수인선;
    "구 은률선": 조선철도주식회사_구은률선;
    사해선:     Fluffy사해선;
    평덕선:     조선철도주식회사_평덕선;
    장진선:     조선철도주식회사_장진선;
    무산선:     조선철도주식회사_무산선;
}

export interface 조선철도주식회사_경북선 {
    도암: TartuGecko;
    남산: TartuGecko;
}

export interface 구경북선 {
    명동:   TartuGecko;
    경북풍산: TartuGecko;
    호명:   TartuGecko;
    안동:   TartuGecko;
    고평:   TartuGecko;
}

export interface 조선철도주식회사_구은률선 {
    양산: TartuGecko;
}

export interface 조선철도주식회사_무산선 {
    신참: TartuGecko;
}

export interface Fluffy사해선 {
    은정: TartuGecko;
}

export interface 조선철도주식회사_수인선 {
    문학: TartuGecko;
    오목: TartuGecko;
    빈정: TartuGecko;
}

export interface 조선철도주식회사_장진선 {
    동양: TartuGecko;
}

export interface 조선철도주식회사_평덕선 {
    사동:  TartuGecko;
    선교리: TartuGecko;
}

export interface 폐지_조선총독부교통국 {
    군산화물선:   조선총독부교통국_군산화물선;
    당인리선:    당인리선;
    "구 광주선": 구광주선;
    경부선:     조선총독부교통국_경부선;
    경원선:     { [key: string]: TartuGecko };
    전라선:     { [key: string]: TartuGecko };
    경의선:     조선총독부교통국_경의선;
    용산선:     { [key: string]: TartuGecko };
    동해중부선:   Tentacled동해중부선;
    대삼선:     대삼선;
    동해북부선:   { [key: string]: TartuGecko };
    동해남부선:   조선총독부교통국_동해남부선;
    경전선:     조선총독부교통국_경전선;
    함북선:     조선총독부교통국_함북선;
    망월:      TartuGecko;
}

export interface 조선총독부교통국_경부선 {
    부산잔교: TartuGecko;
    유천:   TartuGecko;
}

export interface 조선총독부교통국_경의선 {
    서소문: TartuGecko;
    아현리: TartuGecko;
    수정:  TartuGecko;
    당령:  TartuGecko;
}

export interface 조선총독부교통국_경전선 {
    벽도: TartuGecko;
}

export interface 구광주선 {
    광주: TartuGecko;
    담양: TartuGecko;
    장산: TartuGecko;
    마항: TartuGecko;
    순창: TartuGecko;
    대가: TartuGecko;
    금지: TartuGecko;
}

export interface 조선총독부교통국_군산화물선 {
    군산부두: TartuGecko;
}

export interface 당인리선 {
    세교리: TartuGecko;
}

export interface 대삼선 {
    대전:  TartuGecko;
    진주:  TartuGecko;
    삼천포: TartuGecko;
}

export interface 조선총독부교통국_동해남부선 {
    포항: TartuGecko;
    부조: TartuGecko;
    금장: TartuGecko;
}

export interface Tentacled동해중부선 {
    흥해: TartuGecko;
    청하: TartuGecko;
    포항: TartuGecko;
    학산: TartuGecko;
}

export interface 조선총독부교통국_함북선 {
    소암: TartuGecko;
}

export interface 폐지_조선총독부철도국 {
    중앙선:                     조선총독부철도국_중앙선;
    대구선:                     조선총독부철도국_대구선;
    군산화물선:                   조선총독부철도국_군산화물선;
    경부선:                     조선총독부철도국_경부선;
    경의선:                     조선총독부철도국_경의선;
    신촌연결선:                   조선총독부철도국_신촌연결선;
    병원:                      병원_Class;
    사업소:                     { [key: string]: TartuGecko };
    전라선:                     조선총독부철도국_전라선;
    동해남부선:                   조선총독부철도국_동해남부선;
    "구 대구선":                 조선총독부철도국_구대구선;
    마포지선궤도:                  마포지선궤도;
    월미도지선:                   월미도지선;
    "조선총독부 철도국 자동차 곡순선":     { [key: string]: TartuGecko };
    "조선총독부 철도국 자동차 동복선":     조선총독부철도국자동차동복선;
    "조선총독부 철도국 자동차 화순선":     조선총독부철도국자동차화순선;
    "조선총독부 철도국 자동차 광려본선":    { [key: string]: TartuGecko };
    평라선:                     조선총독부철도국_평라선;
    강덕선:                     조선총독부철도국_강덕선;
    벽란도지선:                   벽란도지선;
    신안주지선:                   { [key: string]: TartuGecko };
    함북선:                     { [key: string]: TartuGecko };
    강안선:                     조선총독부철도국_강안선;
    "조선총독부 철도국 연락자동차 청진웅기선": 조선총독부철도국연락자동차청진웅기선;
    "조선총독부 철도국 연락자동차 종성경원선": { [key: string]: TartuGecko };
    "조선총독부 철도국 연락자동차 종성온성선": 조선총독부철도국연락자동차종성온성선;
    "조선총독부 철도국 정기항로 웅기청진선":  조선총독부철도국정기항로웅기청진선;
    "조선총독부 철도국 연락자동차 경원훈춘선": 조선총독부철도국연락자동차경원훈춘선;
}

export interface 조선총독부철도국_강덕선 {
    강덕: TartuGecko;
}

export interface 조선총독부철도국_강안선 {
    빈정: TartuGecko;
}

export interface 조선총독부철도국_경부선 {
    금오산: TartuGecko;
}

export interface 조선총독부철도국_경의선 {
    연희: TartuGecko;
    임진: TartuGecko;
}

export interface 조선총독부철도국_구대구선 {
    반야월: TartuGecko;
}

export interface 조선총독부철도국_군산화물선 {
    군산항: TartuGecko;
}

export interface 조선총독부철도국_대구선 {
    하양: TartuGecko;
    영천: TartuGecko;
}

export interface 조선총독부철도국_동해남부선 {
    울산:  TartuGecko;
    병영:  TartuGecko;
    호계:  TartuGecko;
    모화:  TartuGecko;
    입실:  TartuGecko;
    불국사: TartuGecko;
    동방:  TartuGecko;
    서면:  TartuGecko;
}

export interface 마포지선궤도 {
    마포물양장: TartuGecko;
}

export interface 벽란도지선 {
    토성:     TartuGecko;
    벽란도물양장: TartuGecko;
}

export interface 조선총독부철도국_신촌연결선 {
    연희: TartuGecko;
}

export interface 월미도지선 {
    인천:         TartuGecko;
    "월미도 가상륙장": TartuGecko;
}

export interface 조선총독부철도국_전라선 {
    이리:  TartuGecko;
    구이리: TartuGecko;
    대장:  TartuGecko;
    삼례:  TartuGecko;
    전주:  TartuGecko;
    동산:  TartuGecko;
}

export interface 조선총독부철도국연락자동차경원훈춘선 {
    경원읍내: TartuGecko;
}

export interface 조선총독부철도국연락자동차종성온성선 {
    종성: TartuGecko;
    온성: TartuGecko;
}

export interface 조선총독부철도국연락자동차청진웅기선 {
    이진: TartuGecko;
    청진: TartuGecko;
    라진: TartuGecko;
    웅기: TartuGecko;
}

export interface 조선총독부철도국자동차동복선 {
    구암교: TartuGecko;
    묘치:  TartuGecko;
    동복:  TartuGecko;
}

export interface 조선총독부철도국자동차화순선 {
    화순읍: TartuGecko;
    화순:  TartuGecko;
}

export interface 조선총독부철도국정기항로웅기청진선 {
    웅기: TartuGecko;
    라진: TartuGecko;
    청진: TartuGecko;
}

export interface 조선총독부철도국_중앙선 {
    임포:         TartuGecko;
    서악:         TartuGecko;
    경주신호장:      TartuGecko;
    모량:         TartuGecko;
    "경주 제2신호장": TartuGecko;
    건천:         TartuGecko;
    아화:         TartuGecko;
    영천:         TartuGecko;
}

export interface 조선총독부철도국_평라선 {
    흥남본정: TartuGecko;
    의호:   TartuGecko;
}

export interface 조선평안철도주식회사 {
    평남선: 조선평안철도주식회사_평남선;
}

export interface 조선평안철도주식회사_평남선 {
    조촌: TartuGecko;
}

export interface 폐지_주식회사강원랜드 {
    "하이원추추파크 전용선": Fluffy하이원추추파크전용선;
}

export interface Fluffy하이원추추파크전용선 {
    통리: TartuGecko;
}

export interface 폐지_주식회사삼척탄좌개발 {
    "정암탄광 전용철도": 정암탄광전용철도;
}

export interface 정암탄광전용철도 {
    고한:   TartuGecko;
    정암탄광: TartuGecko;
}

export interface 주식회사포스코 {
    괴동선: 주식회사포스코_괴동선;
}

export interface 주식회사포스코_괴동선 {
    제철: TartuGecko;
}

export interface 폐지_평양시려객운수종합기업소 {
    "평양 궤도전차 1호선": 평양궤도전차1호선;
}

export interface 평양궤도전차1호선 {
    선교:        TartuGecko;
    송신:        TartuGecko;
    송신궤도전차사업소: TartuGecko;
}

export interface 폐지_한국중부발전주식회사 {
    서천화력선: 서천화력선;
}

export interface 서천화력선 {
    동백정: TartuGecko;
    춘장대: TartuGecko;
    원두:  TartuGecko;
    간치:  TartuGecko;
}

export interface 한성전기회사 {
    "서울전차 의주로선": { [key: string]: TartuGecko };
}

export interface 폐지_함경북도 {
    "경성 라남 수압궤도": 경성라남수압궤도;
}

export interface 경성라남수압궤도 {
    청진항: TartuGecko;
    청진역: TartuGecko;
    신향:  TartuGecko;
    경성:  TartuGecko;
    수성:  TartuGecko;
    수성역: TartuGecko;
    입암:  TartuGecko;
}

export interface 폐지_함평궤도주식회사 {
    함평궤도: 함평궤도;
}

export interface 함평궤도 {
    학교: TartuGecko;
    함평: TartuGecko;
    화산: TartuGecko;
}

export interface 전기시설 {
    폐지:  전기시설_폐지;
    영업중: 전기시설_영업중;
}

export interface 전기시설_영업중 {
    한국중부발전주식회사: 영업중_한국중부발전주식회사;
}

export interface 영업중_한국중부발전주식회사 {
    사업소: 한국중부발전주식회사_사업소;
}

export interface 한국중부발전주식회사_사업소 {
    서울화력발전소: TartuGecko;
}

export interface 전기시설_폐지 {
    경성전기주식회사: Fluffy경성전기주식회사;
}

export interface Fluffy경성전기주식회사 {
    사업소: { [key: string]: TartuGecko };
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
        { json: "강삭철도", js: "강삭철도", typ: r("Purple강삭철도") },
        { json: "삭도", js: "삭도", typ: r("Purple삭도") },
    ], false),
    "Purple강삭철도": o([
        { json: "향도봉호", js: "향도봉호", typ: r("PuneHedgehog") },
    ], false),
    "PuneHedgehog": o([
        { json: "styleUrl", js: "styleUrl", typ: "" },
        { json: "Region", js: "Region", typ: r("Region") },
        { json: "LineString", js: "LineString", typ: r("LineString") },
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
        { json: "경의선", js: "경의선", typ: r("Purple기타") },
        { json: "평라선", js: "평라선", typ: r("PuneHedgehog") },
        { json: "평북선", js: "평북선", typ: r("Purple기타") },
        { json: "평덕선", js: "평덕선", typ: r("Purple기타") },
        { json: "평남선", js: "평남선", typ: r("Purple기타") },
        { json: "강원선", js: "강원선", typ: r("Purple기타") },
        { json: "개천선", js: "개천선", typ: r("Purple기타") },
        { json: "금강산청년선", js: "금강산청년선", typ: r("Purple기타") },
        { json: "동해북부선", js: "동해북부선", typ: r("Purple동해북부선") },
        { json: "남양국경선", js: "남양국경선", typ: r("PuneHedgehog") },
        { json: "두만강선", js: "두만강선", typ: r("Purple기타") },
        { json: "만포선", js: "만포선", typ: r("Purple기타") },
        { json: "무산선", js: "무산선", typ: r("Purple기타") },
        { json: "배천선", js: "배천선", typ: r("Purple기타") },
        { json: "백두산청년선", js: "백두산청년선", typ: r("PuneHedgehog") },
        { json: "백마선", js: "백마선", typ: r("Purple기타") },
        { json: "백무선", js: "백무선", typ: r("PuneHedgehog") },
        { json: "북부내륙선", js: "북부내륙선", typ: r("Purple기타") },
        { json: "경원선", js: "경원선", typ: r("Purple기타") },
        { json: "함북선", js: "함북선", typ: r("Purple기타") },
        { json: "황해청년선", js: "황해청년선", typ: r("Purple기타") },
        { json: "은률선", js: "은률선", typ: r("PuneHedgehog") },
        { json: "룡성선", js: "룡성선", typ: r("Purple기타") },
        { json: "서해갑문선", js: "서해갑문선", typ: r("Purple기타") },
    ], false),
    "Purple기타": o([
        { json: "styleUrl", js: "styleUrl", typ: "" },
        { json: "LineString", js: "LineString", typ: r("LineString") },
    ], false),
    "Purple동해북부선": o([
        { json: "군분선-감호", js: "군분선-감호", typ: r("Purple기타") },
    ], false),
    "국철_북한철도성": o([
        { json: "진흥선", js: "진흥선", typ: r("Purple기타") },
    ], false),
    "Purple지선": o([
        { json: "북한 철도성", js: "북한 철도성", typ: r("Fluffy북한철도성") },
    ], false),
    "Fluffy북한철도성": o([
        { json: "모학선", js: "모학선", typ: r("PuneHedgehog") },
        { json: "신흥선", js: "신흥선", typ: r("PuneHedgehog") },
        { json: "청진조차장선", js: "청진조차장선", typ: m(r("PuneHedgehog")) },
        { json: "신온선", js: "신온선", typ: r("신온선") },
        { json: "털섬항선", js: "털섬항선", typ: r("PuneHedgehog") },
        { json: "강계선", js: "강계선", typ: r("Purple기타") },
        { json: "강덕선", js: "강덕선", typ: r("PuneHedgehog") },
        { json: "강안선", js: "강안선", typ: r("PuneHedgehog") },
        { json: "고건원선", js: "고건원선", typ: r("Purple기타") },
        { json: "고비선", js: "고비선", typ: r("Purple기타") },
        { json: "고원탄광선", js: "고원탄광선", typ: r("Purple기타") },
        { json: "고참탄광선", js: "고참탄광선", typ: r("Purple기타") },
        { json: "곡하선", js: "곡하선", typ: r("PuneHedgehog") },
        { json: "금골선", js: "금골선", typ: r("Purple기타") },
        { json: "남포지선", js: "남포지선", typ: r("Purple기타") },
        { json: "남흥선", js: "남흥선", typ: r("PuneHedgehog") },
        { json: "다사도선", js: "다사도선", typ: r("Purple기타") },
        { json: "대각선", js: "대각선", typ: r("PuneHedgehog") },
        { json: "대건선", js: "대건선", typ: r("Purple기타") },
        { json: "봉창선", js: "봉창선", typ: r("Purple봉창선") },
        { json: "대안선", js: "대안선", typ: r("Purple기타") },
        { json: "덕성선", js: "덕성선", typ: r("Purple기타") },
        { json: "덕현선", js: "덕현선", typ: r("Purple기타") },
        { json: "도지리선", js: "도지리선", typ: r("Purple기타") },
        { json: "두언선", js: "두언선", typ: r("Purple기타") },
        { json: "득장선", js: "득장선", typ: r("Purple기타") },
        { json: "라진항선", js: "라진항선", typ: r("PuneHedgehog") },
        { json: "락랑선", js: "락랑선", typ: r("Purple기타") },
        { json: "려호선", js: "려호선", typ: r("PuneHedgehog") },
        { json: "룡문탄광선", js: "룡문탄광선", typ: r("Purple기타") },
        { json: "룡암선", js: "룡암선", typ: r("Purple기타") },
        { json: "리원선", js: "리원선", typ: r("Purple기타") },
        { json: "마평선", js: "마평선", typ: r("Purple기타") },
        { json: "만덕선", js: "만덕선", typ: r("Purple기타") },
        { json: "명당선", js: "명당선", typ: r("Purple기타") },
        { json: "문천항선", js: "문천항선", typ: r("Purple기타") },
        { json: "장연선", js: "장연선", typ: r("Purple기타") },
        { json: "봉산선", js: "봉산선", typ: r("Purple기타") },
        { json: "봉천탄광선", js: "봉천탄광선", typ: r("PuneHedgehog") },
        { json: "부포선", js: "부포선", typ: r("Purple기타") },
        { json: "비날론선", js: "비날론선", typ: r("PuneHedgehog") },
        { json: "산음선", js: "산음선", typ: r("PuneHedgehog") },
        { json: "삼지연선", js: "삼지연선", typ: r("PuneHedgehog") },
        { json: "서호선", js: "서호선", typ: r("Purple기타") },
        { json: "석하선", js: "석하선", typ: r("Purple기타") },
        { json: "성산인입선", js: "성산인입선", typ: r("Purple성산인입선") },
        { json: "세천선", js: "세천선", typ: r("PuneHedgehog") },
        { json: "솔골탄광선", js: "솔골탄광선", typ: r("Purple기타") },
        { json: "신송도원선", js: "신송도원선", typ: r("PuneHedgehog") },
        { json: "송도원선", js: "송도원선", typ: r("PuneHedgehog") },
        { json: "송림선", js: "송림선", typ: r("Purple기타") },
        { json: "수풍선", js: "수풍선", typ: r("PuneHedgehog") },
        { json: "청년팔원선", js: "청년팔원선", typ: r("Purple기타") },
        { json: "신흥동선", js: "신흥동선", typ: r("PuneHedgehog") },
        { json: "덕남선", js: "덕남선", typ: r("Purple기타") },
        { json: "신성선", js: "신성선", typ: r("Purple기타") },
        { json: "풍덕선", js: "풍덕선", typ: r("PuneHedgehog") },
        { json: "안골선", js: "안골선", typ: r("Purple기타") },
        { json: "오시천선", js: "오시천선", typ: r("Purple기타") },
        { json: "옹진선", js: "옹진선", typ: r("Purple기타") },
        { json: "원산항선", js: "원산항선", typ: r("PuneHedgehog") },
        { json: "일탄선", js: "일탄선", typ: r("Purple기타") },
        { json: "잉포선", js: "잉포선", typ: r("Purple기타") },
        { json: "장상선", js: "장상선", typ: r("PuneHedgehog") },
        { json: "장진선", js: "장진선", typ: r("Purple기타") },
        { json: "재동선", js: "재동선", typ: r("Purple기타") },
        { json: "정도선", js: "정도선", typ: r("Purple기타") },
        { json: "조양탄광선", js: "조양탄광선", typ: r("Purple기타") },
        { json: "준혁선", js: "준혁선", typ: r("Purple기타") },
        { json: "창흥선", js: "창흥선", typ: r("Purple기타") },
        { json: "철산선", js: "철산선", typ: r("Purple기타") },
        { json: "청년이천선", js: "청년이천선", typ: r("Purple기타") },
        { json: "청진항선", js: "청진항선", typ: r("PuneHedgehog") },
        { json: "춘두선", js: "춘두선", typ: r("PuneHedgehog") },
        { json: "향산선", js: "향산선", typ: r("PuneHedgehog") },
        { json: "향원선", js: "향원선", typ: r("PuneHedgehog") },
        { json: "허천선", js: "허천선", typ: r("Purple기타") },
        { json: "형봉선", js: "형봉선", typ: r("Purple기타") },
        { json: "회둔선", js: "회둔선", typ: r("PuneHedgehog") },
        { json: "회령탄광선", js: "회령탄광선", typ: r("Purple기타") },
        { json: "흥남항선", js: "흥남항선", typ: r("Purple기타") },
        { json: "고원교외선", js: "고원교외선", typ: r("Purple기타") },
        { json: "봉학선", js: "봉학선", typ: r("PuneHedgehog") },
        { json: "개천탄광선", js: "개천탄광선", typ: r("Purple기타") },
        { json: "동평양삼각선", js: "동평양삼각선", typ: r("PuneHedgehog") },
        { json: "관하선", js: "관하선", typ: r("Purple기타") },
        { json: "구봉산선", js: "구봉산선", typ: r("Purple기타") },
        { json: "구성선", js: "구성선", typ: r("Purple기타") },
        { json: "금야선", js: "금야선", typ: r("Purple기타") },
        { json: "남포항선", js: "남포항선", typ: r("Purple기타") },
        { json: "녕변선", js: "녕변선", typ: r("Purple기타") },
        { json: "대관리선", js: "대관리선", typ: r("Purple기타") },
        { json: "대택선", js: "대택선", typ: r("Purple기타") },
        { json: "대향선", js: "대향선", typ: r("Purple기타") },
        { json: "독골선", js: "독골선", typ: r("Purple기타") },
        { json: "동포선", js: "동포선", typ: r("Purple기타") },
        { json: "명학선", js: "명학선", typ: r("PuneHedgehog") },
        { json: "량진선", js: "량진선", typ: r("Purple기타") },
        { json: "령대선", js: "령대선", typ: r("Purple기타") },
        { json: "룡강선", js: "룡강선", typ: r("Purple기타") },
        { json: "무산광산선", js: "무산광산선", typ: r("PuneHedgehog") },
        { json: "박천선", js: "박천선", typ: r("Purple기타") },
        { json: "보통강삼각선", js: "보통강삼각선", typ: r("Purple기타") },
        { json: "보산선", js: "보산선", typ: r("Purple기타") },
        { json: "봉화선", js: "봉화선", typ: r("PuneHedgehog") },
        { json: "북창삼각선", js: "북창삼각선", typ: r("PuneHedgehog") },
        { json: "삼천포지선", js: "삼천포지선", typ: r("Purple기타") },
        { json: "서창선", js: "서창선", typ: r("Purple기타") },
        { json: "황주삼각선", js: "황주삼각선", typ: r("PuneHedgehog") },
        { json: "송평부두선", js: "송평부두선", typ: r("PuneHedgehog") },
        { json: "송평선", js: "송평선", typ: r("PuneHedgehog") },
        { json: "압록강선", js: "압록강선", typ: r("Purple기타") },
        { json: "승리선", js: "승리선", typ: r("Purple기타") },
        { json: "시정선", js: "시정선", typ: r("Purple기타") },
        { json: "안주탄광선", js: "안주탄광선", typ: r("Purple기타") },
        { json: "온포선", js: "온포선", typ: r("Purple기타") },
        { json: "운봉선", js: "운봉선", typ: r("PuneHedgehog") },
        { json: "운하선", js: "운하선", typ: r("Purple기타") },
        { json: "원산화물선", js: "원산화물선", typ: r("PuneHedgehog") },
        { json: "은산선", js: "은산선", typ: r("Purple기타") },
        { json: "장선강선", js: "장선강선", typ: r("PuneHedgehog") },
        { json: "적지선", js: "적지선", typ: r("PuneHedgehog") },
        { json: "직동탄광선", js: "직동탄광선", typ: r("Purple기타") },
        { json: "천내선", js: "천내선", typ: r("PuneHedgehog") },
        { json: "천성탄광선", js: "천성탄광선", typ: r("Purple기타") },
        { json: "화풍선", js: "화풍선", typ: r("Purple기타") },
        { json: "청암삼각선", js: "청암삼각선", typ: r("PuneHedgehog") },
        { json: "청화력선", js: "청화력선", typ: r("PuneHedgehog") },
        { json: "추평선", js: "추평선", typ: r("PuneHedgehog") },
        { json: "평양화전선", js: "평양화전선", typ: r("Purple기타") },
        { json: "향원삼각선", js: "향원삼각선", typ: r("PuneHedgehog") },
        { json: "회암선", js: "회암선", typ: r("PuneHedgehog") },
        { json: "후산선", js: "후산선", typ: r("Purple기타") },
    ], false),
    "Purple봉창선": o([
        { json: "봉창", js: "봉창", typ: r("PuneHedgehog") },
    ], false),
    "Purple성산인입선": o([
        { json: "매봉", js: "매봉", typ: r("Purple기타") },
    ], false),
    "신온선": o([
        { json: "신온", js: "신온", typ: r("PuneHedgehog") },
    ], false),
    "Purple궤도선": o([
        { json: "함경북도 청진시", js: "함경북도 청진시", typ: r("궤도선_함경북도청진시") },
    ], false),
    "궤도선_함경북도청진시": o([
        { json: "청진 궤도전차", js: "청진 궤도전차", typ: r("PuneHedgehog") },
    ], false),
    "Purple도시철도": o([
        { json: "내각 보안성 제23국 지하철도 운영관리국", js: "내각 보안성 제23국 지하철도 운영관리국", typ: r("도시철도_내각보안성제23국지하철도운영관리국") },
        { json: "평양시 려객운수종합기업소", js: "평양시 려객운수종합기업소", typ: m(r("PuneHedgehog")) },
        { json: "강원도 원산시", js: "강원도 원산시", typ: r("도시철도_강원도원산시") },
        { json: "평안남도 평성시", js: "평안남도 평성시", typ: r("평안남도평성시") },
    ], false),
    "도시철도_강원도원산시": o([
        { json: "원산 궤도전차", js: "원산 궤도전차", typ: r("Purple기타") },
    ], false),
    "도시철도_내각보안성제23국지하철도운영관리국": o([
        { json: "평양 지하철도 천리마선", js: "평양 지하철도 천리마선", typ: r("Purple기타") },
        { json: "평양 지하철도 만경대선", js: "평양 지하철도 만경대선", typ: r("PuneHedgehog") },
        { json: "평양 지하철도 혁신선", js: "평양 지하철도 혁신선", typ: r("Purple기타") },
    ], false),
    "평안남도평성시": o([
        { json: "평성 궤도전차", js: "평성 궤도전차", typ: r("Purple기타") },
    ], false),
    "Purple삭도": o([
        { json: "천지삭도", js: "천지삭도", typ: r("PuneHedgehog") },
    ], false),
    "Purple전용선": o([
        { json: "북한 철도성", js: "북한 철도성", typ: r("Sticky북한철도성") },
        { json: "기타", js: "기타", typ: r("PuneHedgehog") },
        { json: "궤도선", js: "궤도선", typ: r("Fluffy궤도선") },
        { json: "평양시 려객운수종합기업소", js: "평양시 려객운수종합기업소", typ: r("전용선_평양시려객운수종합기업소") },
    ], false),
    "Fluffy궤도선": o([
        { json: "북한 철도성", js: "북한 철도성", typ: r("Tentacled북한철도성") },
        { json: "기타", js: "기타", typ: r("궤도선_기타") },
    ], false),
    "궤도선_기타": o([
        { json: "신대택", js: "신대택", typ: r("PuneHedgehog") },
    ], false),
    "Tentacled북한철도성": o([
        { json: "백무선", js: "백무선", typ: r("Purple백무선") },
        { json: "백두산청년선", js: "백두산청년선", typ: r("Purple백두산청년선") },
    ], false),
    "Purple백두산청년선": o([
        { json: "남중", js: "남중", typ: r("PuneHedgehog") },
    ], false),
    "Purple백무선": o([
        { json: "삼유", js: "삼유", typ: r("Purple기타") },
        { json: "굴송", js: "굴송", typ: r("Purple기타") },
        { json: "도내", js: "도내", typ: r("Purple기타") },
        { json: "연암", js: "연암", typ: r("Purple기타") },
    ], false),
    "Sticky북한철도성": o([
        { json: "경의선", js: "경의선", typ: m(r("PuneHedgehog")) },
        { json: "평남선", js: "평남선", typ: m(r("PuneHedgehog")) },
        { json: "배천선", js: "배천선", typ: r("Purple배천선") },
        { json: "평덕선", js: "평덕선", typ: m(r("PuneHedgehog")) },
        { json: "강원선", js: "강원선", typ: m(r("PuneHedgehog")) },
        { json: "평북선", js: "평북선", typ: r("Purple평북선") },
        { json: "평라선", js: "평라선", typ: r("Purple평라선") },
        { json: "평양화전선", js: "평양화전선", typ: r("Purple평양화전선") },
        { json: "만포선", js: "만포선", typ: r("Purple만포선") },
        { json: "룡성선", js: "룡성선", typ: r("Purple룡성선") },
        { json: "비날론선", js: "비날론선", typ: r("PuneHedgehog") },
        { json: "흥남항선", js: "흥남항선", typ: r("Purple흥남항선") },
        { json: "창흥선", js: "창흥선", typ: r("Purple창흥선") },
        { json: "승리선", js: "승리선", typ: r("Purple승리선") },
        { json: "라진항선", js: "라진항선", typ: r("Purple라진항선") },
        { json: "세천선", js: "세천선", typ: r("Purple세천선") },
        { json: "관하선", js: "관하선", typ: r("Purple관하선") },
        { json: "대건선", js: "대건선", typ: r("Purple대건선") },
        { json: "청년팔원선", js: "청년팔원선", typ: r("PuneHedgehog") },
        { json: "향원선", js: "향원선", typ: r("향원선") },
        { json: "강계선", js: "강계선", typ: r("강계선") },
        { json: "두언선", js: "두언선", typ: m(r("PuneHedgehog")) },
        { json: "허천선", js: "허천선", typ: r("Purple허천선") },
        { json: "운하선", js: "운하선", typ: r("Purple운하선") },
        { json: "모학선", js: "모학선", typ: r("Purple모학선") },
        { json: "회둔선", js: "회둔선", typ: r("회둔선") },
        { json: "덕현선", js: "덕현선", typ: r("Purple덕현선") },
        { json: "회령탄광선", js: "회령탄광선", typ: r("Purple회령탄광선") },
        { json: "은률선", js: "은률선", typ: r("PuneHedgehog") },
        { json: "분강선", js: "분강선", typ: r("분강선") },
        { json: "회암선", js: "회암선", typ: r("Purple회암선") },
        { json: "춘두선", js: "춘두선", typ: r("Purple춘두선") },
        { json: "무산선", js: "무산선", typ: r("Purple무산선") },
        { json: "함북선", js: "함북선", typ: r("Purple함북선") },
        { json: "백무선", js: "백무선", typ: r("Fluffy백무선") },
        { json: "백두산청년선", js: "백두산청년선", typ: m(r("PuneHedgehog")) },
        { json: "삼지연선", js: "삼지연선", typ: r("삼지연선") },
        { json: "강안선", js: "강안선", typ: r("Purple강안선") },
        { json: "옹진선", js: "옹진선", typ: r("Purple옹진선") },
        { json: "마평선", js: "마평선", typ: r("Purple마평선") },
        { json: "백마선", js: "백마선", typ: r("Purple기타") },
        { json: "청진조차장선", js: "청진조차장선", typ: r("Purple청진조차장선") },
        { json: "금골선", js: "금골선", typ: r("금골선") },
        { json: "수풍선", js: "수풍선", typ: r("Purple수풍선") },
        { json: "봉천탄광선", js: "봉천탄광선", typ: r("PuneHedgehog") },
        { json: "명당선", js: "명당선", typ: r("Purple명당선") },
        { json: "경원선", js: "경원선", typ: r("Purple경원선") },
        { json: "솔골탄광선", js: "솔골탄광선", typ: r("Purple솔골탄광선") },
        { json: "룡암선", js: "룡암선", typ: r("북한철도성_룡암선") },
        { json: "추평선", js: "추평선", typ: r("추평선") },
        { json: "개천선", js: "개천선", typ: r("Purple개천선") },
        { json: "보산선", js: "보산선", typ: r("Purple보산선") },
        { json: "남흥선", js: "남흥선", typ: r("PuneHedgehog") },
        { json: "덕성선", js: "덕성선", typ: r("Purple덕성선") },
        { json: "일탄선", js: "일탄선", typ: r("Purple일탄선") },
        { json: "득장선", js: "득장선", typ: r("Purple득장선") },
        { json: "도지리선", js: "도지리선", typ: m(r("PuneHedgehog")) },
        { json: "삼천포지선", js: "삼천포지선", typ: r("삼천포지선") },
        { json: "신흥선", js: "신흥선", typ: r("북한철도성_신흥선") },
        { json: "리원철산선", js: "리원철산선", typ: r("리원철산선") },
        { json: "봉학선", js: "봉학선", typ: r("Purple봉학선") },
        { json: "남포지선", js: "남포지선", typ: r("남포지선") },
        { json: "봉산선", js: "봉산선", typ: r("Purple봉산선") },
        { json: "털섬항선", js: "털섬항선", typ: r("Purple털섬항선") },
        { json: "북부내륙선", js: "북부내륙선", typ: r("Purple북부내륙선") },
        { json: "남포항선", js: "남포항선", typ: r("PuneHedgehog") },
        { json: "재동선", js: "재동선", typ: r("Purple재동선") },
        { json: "다사도선", js: "다사도선", typ: r("Purple다사도선") },
        { json: "철산선", js: "철산선", typ: r("Purple철산선") },
        { json: "부포선", js: "부포선", typ: r("Purple부포선") },
        { json: "대안선", js: "대안선", typ: r("Purple대안선") },
        { json: "량진선", js: "량진선", typ: r("량진선") },
        { json: "만덕선", js: "만덕선", typ: r("Purple만덕선") },
        { json: "성산인입선", js: "성산인입선", typ: r("Fluffy성산인입선") },
        { json: "송림선", js: "송림선", typ: r("Purple송림선") },
        { json: "강덕선", js: "강덕선", typ: r("Purple강덕선") },
        { json: "금강산청년선", js: "금강산청년선", typ: r("Purple금강산청년선") },
        { json: "직동탄광선", js: "직동탄광선", typ: r("Purple직동탄광선") },
        { json: "천내선", js: "천내선", typ: r("Purple천내선") },
        { json: "장선강선", js: "장선강선", typ: r("장선강선") },
        { json: "청년이천선", js: "청년이천선", typ: r("Purple청년이천선") },
        { json: "황해청년선", js: "황해청년선", typ: r("Purple황해청년선") },
        { json: "송평부두선", js: "송평부두선", typ: r("PuneHedgehog") },
        { json: "고참탄광선", js: "고참탄광선", typ: r("PuneHedgehog") },
        { json: "원산항", js: "원산항", typ: r("PuneHedgehog") },
        { json: "안주탄광선", js: "안주탄광선", typ: r("PuneHedgehog") },
        { json: "조양탄광선", js: "조양탄광선", typ: r("PuneHedgehog") },
        { json: "룡문탄광선", js: "룡문탄광선", typ: r("PuneHedgehog") },
        { json: "문천항선", js: "문천항선", typ: r("PuneHedgehog") },
        { json: "만포청년", js: "만포청년", typ: r("PuneHedgehog") },
        { json: "서창선", js: "서창선", typ: r("PuneHedgehog") },
        { json: "구봉산선", js: "구봉산선", typ: r("PuneHedgehog") },
    ], false),
    "강계선": o([
        { json: "남문", js: "남문", typ: r("PuneHedgehog") },
    ], false),
    "Purple강덕선": o([
        { json: "강덕", js: "강덕", typ: r("PuneHedgehog") },
    ], false),
    "Purple강안선": o([
        { json: "강안", js: "강안", typ: r("PuneHedgehog") },
    ], false),
    "Purple개천선": o([
        { json: "개천", js: "개천", typ: r("PuneHedgehog") },
    ], false),
    "Purple경원선": o([
        { json: "고산", js: "고산", typ: r("PuneHedgehog") },
        { json: "전탄", js: "전탄", typ: r("PuneHedgehog") },
        { json: "세포청년", js: "세포청년", typ: r("PuneHedgehog") },
    ], false),
    "Purple관하선": o([
        { json: "관하", js: "관하", typ: r("PuneHedgehog") },
    ], false),
    "Purple금강산청년선": o([
        { json: "두포", js: "두포", typ: r("PuneHedgehog") },
    ], false),
    "금골선": o([
        { json: "대흥 분기", js: "대흥 분기", typ: r("PuneHedgehog") },
        { json: "신덕", js: "신덕", typ: r("PuneHedgehog") },
        { json: "백금산", js: "백금산", typ: r("PuneHedgehog") },
        { json: "금골", js: "금골", typ: r("PuneHedgehog") },
    ], false),
    "남포지선": o([
        { json: "남포", js: "남포", typ: r("PuneHedgehog") },
    ], false),
    "Purple다사도선": o([
        { json: "룡암포 수산사업소", js: "룡암포 수산사업소", typ: r("Purple기타") },
        { json: "북중기계련합기업소", js: "북중기계련합기업소", typ: r("PuneHedgehog") },
    ], false),
    "Purple대건선": o([
        { json: "북창공군기지", js: "북창공군기지", typ: r("PuneHedgehog") },
    ], false),
    "Purple대안선": o([
        { json: "대안화물", js: "대안화물", typ: r("PuneHedgehog") },
        { json: "대안", js: "대안", typ: r("PuneHedgehog") },
    ], false),
    "Purple덕성선": o([
        { json: "상리", js: "상리", typ: r("PuneHedgehog") },
    ], false),
    "Purple덕현선": o([
        { json: "정광", js: "정광", typ: r("PuneHedgehog") },
        { json: "수진", js: "수진", typ: r("Purple기타") },
        { json: "덕현", js: "덕현", typ: r("PuneHedgehog") },
    ], false),
    "Purple득장선": o([
        { json: "북창", js: "북창", typ: r("PuneHedgehog") },
    ], false),
    "Purple라진항선": o([
        { json: "라진항", js: "라진항", typ: r("PuneHedgehog") },
        { json: "라진", js: "라진", typ: r("PuneHedgehog") },
    ], false),
    "량진선": o([
        { json: "량진", js: "량진", typ: r("PuneHedgehog") },
    ], false),
    "Purple룡성선": o([
        { json: "룡성베어링공장", js: "룡성베어링공장", typ: r("PuneHedgehog") },
        { json: "룡성", js: "룡성", typ: r("PuneHedgehog") },
    ], false),
    "북한철도성_룡암선": o([
        { json: "동룡굴", js: "동룡굴", typ: r("PuneHedgehog") },
    ], false),
    "리원철산선": o([
        { json: "라흥", js: "라흥", typ: r("PuneHedgehog") },
    ], false),
    "Purple마평선": o([
        { json: "훤화", js: "훤화", typ: r("PuneHedgehog") },
    ], false),
    "Purple만덕선": o([
        { json: "부동", js: "부동", typ: r("PuneHedgehog") },
    ], false),
    "Purple만포선": o([
        { json: "강계", js: "강계", typ: r("PuneHedgehog") },
        { json: "람전", js: "람전", typ: r("PuneHedgehog") },
        { json: "성간", js: "성간", typ: r("Purple기타") },
        { json: "중성간", js: "중성간", typ: r("PuneHedgehog") },
        { json: "공인", js: "공인", typ: r("PuneHedgehog") },
        { json: "운송", js: "운송", typ: r("PuneHedgehog") },
        { json: "전천", js: "전천", typ: r("PuneHedgehog") },
        { json: "묘향산", js: "묘향산", typ: r("PuneHedgehog") },
        { json: "은정", js: "은정", typ: r("PuneHedgehog") },
        { json: "천동", js: "천동", typ: r("PuneHedgehog") },
        { json: "룡원리", js: "룡원리", typ: r("PuneHedgehog") },
        { json: "1월18일기계공장", js: "1월18일기계공장", typ: r("PuneHedgehog") },
        { json: "고인", js: "고인", typ: r("Purple기타") },
    ], false),
    "Purple명당선": o([
        { json: "명당", js: "명당", typ: r("PuneHedgehog") },
    ], false),
    "Purple모학선": o([
        { json: "순천화학련합기업소", js: "순천화학련합기업소", typ: r("PuneHedgehog") },
        { json: "모학", js: "모학", typ: r("PuneHedgehog") },
    ], false),
    "Purple무산선": o([
        { json: "무수", js: "무수", typ: r("PuneHedgehog") },
    ], false),
    "Purple배천선": o([
        { json: "연안", js: "연안", typ: r("PuneHedgehog") },
        { json: "홍현", js: "홍현", typ: r("PuneHedgehog") },
        { json: "청단", js: "청단", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy백무선": o([
        { json: "굴송", js: "굴송", typ: r("PuneHedgehog") },
        { json: "삼유", js: "삼유", typ: r("PuneHedgehog") },
        { json: "무산", js: "무산", typ: r("PuneHedgehog") },
        { json: "유평동", js: "유평동", typ: r("Purple기타") },
        { json: "연암", js: "연암", typ: r("PuneHedgehog") },
    ], false),
    "Purple보산선": o([
        { json: "강서화물", js: "강서화물", typ: r("PuneHedgehog") },
    ], false),
    "Purple봉산선": o([
        { json: "서봉산", js: "서봉산", typ: r("PuneHedgehog") },
        { json: "봉산", js: "봉산", typ: r("PuneHedgehog") },
    ], false),
    "Purple봉학선": o([
        { json: "손구동", js: "손구동", typ: r("PuneHedgehog") },
    ], false),
    "Purple부포선": o([
        { json: "강령", js: "강령", typ: r("PuneHedgehog") },
    ], false),
    "Purple북부내륙선": o([
        { json: "문악", js: "문악", typ: r("Purple기타") },
        { json: "후주청년", js: "후주청년", typ: r("PuneHedgehog") },
        { json: "로탄", js: "로탄", typ: r("Purple기타") },
    ], false),
    "분강선": o([
        { json: "녕변 원자력 연구소", js: "녕변 원자력 연구소", typ: r("Purple기타") },
    ], false),
    "삼지연선": o([
        { json: "위연청년", js: "위연청년", typ: r("PuneHedgehog") },
    ], false),
    "삼천포지선": o([
        { json: "서시", js: "서시", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy성산인입선": o([
        { json: "매봉", js: "매봉", typ: r("PuneHedgehog") },
    ], false),
    "Purple세천선": o([
        { json: "중봉", js: "중봉", typ: r("PuneHedgehog") },
    ], false),
    "Purple솔골탄광선": o([
        { json: "솔골", js: "솔골", typ: r("PuneHedgehog") },
    ], false),
    "Purple송림선": o([
        { json: "송림", js: "송림", typ: r("PuneHedgehog") },
    ], false),
    "Purple수풍선": o([
        { json: "수풍", js: "수풍", typ: r("PuneHedgehog") },
    ], false),
    "Purple승리선": o([
        { json: "승리화학연합기업소", js: "승리화학연합기업소", typ: r("PuneHedgehog") },
        { json: "승리", js: "승리", typ: r("PuneHedgehog") },
    ], false),
    "북한철도성_신흥선": o([
        { json: "신흥", js: "신흥", typ: r("PuneHedgehog") },
    ], false),
    "Purple옹진선": o([
        { json: "왕신", js: "왕신", typ: r("PuneHedgehog") },
        { json: "옹진", js: "옹진", typ: r("PuneHedgehog") },
        { json: "서해주", js: "서해주", typ: r("PuneHedgehog") },
    ], false),
    "Purple운하선": o([
        { json: "구오", js: "구오", typ: r("PuneHedgehog") },
    ], false),
    "Purple일탄선": o([
        { json: "화대", js: "화대", typ: r("PuneHedgehog") },
    ], false),
    "장선강선": o([
        { json: "장선강", js: "장선강", typ: r("PuneHedgehog") },
    ], false),
    "Purple재동선": o([
        { json: "재동", js: "재동", typ: r("PuneHedgehog") },
    ], false),
    "Purple직동탄광선": o([
        { json: "부산리", js: "부산리", typ: r("PuneHedgehog") },
    ], false),
    "Purple창흥선": o([
        { json: "련흥", js: "련흥", typ: r("PuneHedgehog") },
        { json: "창흥", js: "창흥", typ: r("PuneHedgehog") },
    ], false),
    "Purple천내선": o([
        { json: "천내", js: "천내", typ: r("PuneHedgehog") },
    ], false),
    "Purple철산선": o([
        { json: "서해위성발사장", js: "서해위성발사장", typ: r("PuneHedgehog") },
    ], false),
    "Purple청년이천선": o([
        { json: "평산", js: "평산", typ: r("PuneHedgehog") },
        { json: "정봉", js: "정봉", typ: r("PuneHedgehog") },
    ], false),
    "Purple청진조차장선": o([
        { json: "129호 공장", js: "129호 공장", typ: r("Purple기타") },
    ], false),
    "추평선": o([
        { json: "추평2동", js: "추평2동", typ: r("PuneHedgehog") },
    ], false),
    "Purple춘두선": o([
        { json: "춘두", js: "춘두", typ: r("PuneHedgehog") },
    ], false),
    "Purple털섬항선": o([
        { json: "털섬항", js: "털섬항", typ: r("PuneHedgehog") },
    ], false),
    "Purple평라선": o([
        { json: "장평", js: "장평", typ: r("Purple기타") },
        { json: "김책항", js: "김책항", typ: r("PuneHedgehog") },
        { json: "상룡전", js: "상룡전", typ: r("PuneHedgehog") },
        { json: "함흥", js: "함흥", typ: r("PuneHedgehog") },
        { json: "함흥조차장", js: "함흥조차장", typ: r("PuneHedgehog") },
        { json: "청진화력발전소", js: "청진화력발전소", typ: r("PuneHedgehog") },
        { json: "평성", js: "평성", typ: r("PuneHedgehog") },
        { json: "청암", js: "청암", typ: r("PuneHedgehog") },
        { json: "강상리", js: "강상리", typ: r("PuneHedgehog") },
        { json: "신포", js: "신포", typ: r("PuneHedgehog") },
        { json: "륙대동", js: "륙대동", typ: r("Purple기타") },
        { json: "풍어", js: "풍어", typ: r("PuneHedgehog") },
        { json: "청진조선소련합기업소", js: "청진조선소련합기업소", typ: r("PuneHedgehog") },
        { json: "청진화학섬유공장", js: "청진화학섬유공장", typ: r("PuneHedgehog") },
        { json: "길주청년", js: "길주청년", typ: r("PuneHedgehog") },
        { json: "김책", js: "김책", typ: r("Purple기타") },
        { json: "수덕", js: "수덕", typ: r("PuneHedgehog") },
        { json: "선덕비행장선", js: "선덕비행장선", typ: r("Purple기타") },
        { json: "금야", js: "금야", typ: r("PuneHedgehog") },
        { json: "락원", js: "락원", typ: r("PuneHedgehog") },
        { json: "리원", js: "리원", typ: r("PuneHedgehog") },
        { json: "승암", js: "승암", typ: r("PuneHedgehog") },
        { json: "관해", js: "관해", typ: r("PuneHedgehog") },
        { json: "해군동해사령부", js: "해군동해사령부", typ: r("PuneHedgehog") },
        { json: "중호", js: "중호", typ: r("PuneHedgehog") },
        { json: "김책수산사업소", js: "김책수산사업소", typ: r("PuneHedgehog") },
        { json: "정평", js: "정평", typ: r("PuneHedgehog") },
        { json: "중이", js: "중이", typ: r("PuneHedgehog") },
        { json: "거차", js: "거차", typ: r("PuneHedgehog") },
        { json: "성내", js: "성내", typ: r("PuneHedgehog") },
        { json: "부래산", js: "부래산", typ: r("PuneHedgehog") },
        { json: "함주", js: "함주", typ: r("PuneHedgehog") },
        { json: "홍원", js: "홍원", typ: r("PuneHedgehog") },
        { json: "양화", js: "양화", typ: r("Purple기타") },
        { json: "어랑", js: "어랑", typ: r("PuneHedgehog") },
        { json: "경성", js: "경성", typ: r("PuneHedgehog") },
        { json: "라남", js: "라남", typ: r("PuneHedgehog") },
        { json: "운포", js: "운포", typ: r("PuneHedgehog") },
    ], false),
    "Purple평북선": o([
        { json: "백운", js: "백운", typ: r("PuneHedgehog") },
        { json: "구성", js: "구성", typ: r("PuneHedgehog") },
        { json: "청수", js: "청수", typ: r("PuneHedgehog") },
        { json: "판막", js: "판막", typ: r("PuneHedgehog") },
        { json: "방현", js: "방현", typ: r("PuneHedgehog") },
        { json: "방현비행장", js: "방현비행장", typ: r("PuneHedgehog") },
    ], false),
    "Purple평양화전선": o([
        { json: "평천", js: "평천", typ: r("PuneHedgehog") },
    ], false),
    "Purple함북선": o([
        { json: "풍산", js: "풍산", typ: r("PuneHedgehog") },
        { json: "부령", js: "부령", typ: r("PuneHedgehog") },
        { json: "고무산시멘트공장", js: "고무산시멘트공장", typ: r("PuneHedgehog") },
        { json: "하면", js: "하면", typ: r("PuneHedgehog") },
        { json: "온성", js: "온성", typ: r("PuneHedgehog") },
    ], false),
    "향원선": o([
        { json: "신향원", js: "신향원", typ: r("PuneHedgehog") },
    ], false),
    "Purple허천선": o([
        { json: "단천청년", js: "단천청년", typ: r("PuneHedgehog") },
        { json: "동대", js: "동대", typ: r("PuneHedgehog") },
        { json: "상농", js: "상농", typ: r("PuneHedgehog") },
        { json: "추동", js: "추동", typ: r("PuneHedgehog") },
    ], false),
    "Purple황해청년선": o([
        { json: "학현", js: "학현", typ: r("PuneHedgehog") },
        { json: "하성", js: "하성", typ: r("PuneHedgehog") },
        { json: "신원", js: "신원", typ: r("PuneHedgehog") },
    ], false),
    "회둔선": o([
        { json: "회둔", js: "회둔", typ: r("PuneHedgehog") },
    ], false),
    "Purple회령탄광선": o([
        { json: "영수", js: "영수", typ: r("PuneHedgehog") },
    ], false),
    "Purple회암선": o([
        { json: "회암", js: "회암", typ: r("PuneHedgehog") },
        { json: "은덕", js: "은덕", typ: r("PuneHedgehog") },
    ], false),
    "Purple흥남항선": o([
        { json: "룡성", js: "룡성", typ: r("PuneHedgehog") },
        { json: "흥남항", js: "흥남항", typ: r("PuneHedgehog") },
    ], false),
    "전용선_평양시려객운수종합기업소": o([
        { json: "평양 궤도전차 2호선", js: "평양 궤도전차 2호선", typ: r("PuneHedgehog") },
    ], false),
    "Dprk폐지": o([
        { json: "전용선", js: "전용선", typ: r("Fluffy전용선") },
        { json: "국철", js: "국철", typ: r("Fluffy국철") },
        { json: "도시철도", js: "도시철도", typ: r("Fluffy도시철도") },
        { json: "사철", js: "사철", typ: r("Purple사철") },
        { json: "지선", js: "지선", typ: r("Tentacled지선") },
        { json: "궤도선", js: "궤도선", typ: r("Sticky궤도선") },
        { json: "공영교통", js: "공영교통", typ: r("Purple공영교통") },
        { json: "열차페리", js: "열차페리", typ: r("Purple열차페리") },
    ], false),
    "Purple공영교통": o([
        { json: "궤도선", js: "궤도선", typ: r("Tentacled궤도선") },
    ], false),
    "Tentacled궤도선": o([
        { json: "함경북도", js: "함경북도", typ: r("궤도선_함경북도") },
    ], false),
    "궤도선_함경북도": o([
        { json: "경성 라남 수압궤도", js: "경성 라남 수압궤도", typ: r("Purple기타") },
    ], false),
    "Fluffy국철": o([
        { json: "간선", js: "간선", typ: r("Fluffy간선") },
        { json: "지선", js: "지선", typ: r("Fluffy지선") },
        { json: "버스", js: "버스", typ: r("Purple버스") },
    ], false),
    "Fluffy간선": o([
        { json: "북한 철도성", js: "북한 철도성", typ: r("Indigo북한철도성") },
        { json: "북선척식철도", js: "북선척식철도", typ: r("북선척식철도") },
    ], false),
    "북선척식철도": o([
        { json: "무산선", js: "무산선", typ: r("Purple기타") },
    ], false),
    "Indigo북한철도성": o([
        { json: "경의선", js: "경의선", typ: r("PuneHedgehog") },
        { json: "평라선", js: "평라선", typ: r("PuneHedgehog") },
        { json: "동해북부선", js: "동해북부선", typ: r("Fluffy동해북부선") },
        { json: "금강산청년선", js: "금강산청년선", typ: m(r("PuneHedgehog")) },
        { json: "두만강선", js: "두만강선", typ: r("Purple두만강선") },
        { json: "배천선", js: "배천선", typ: r("PuneHedgehog") },
        { json: "백두산청년선", js: "백두산청년선", typ: r("PuneHedgehog") },
        { json: "백무선", js: "백무선", typ: r("Purple기타") },
        { json: "북부내륙선", js: "북부내륙선", typ: r("Purple기타") },
        { json: "경원선", js: "경원선", typ: r("Fluffy경원선") },
        { json: "함북선", js: "함북선", typ: r("PuneHedgehog") },
        { json: "황해청년선", js: "황해청년선", typ: r("Purple기타") },
        { json: "토해선", js: "토해선", typ: r("Purple기타") },
        { json: "개천선", js: "개천선", typ: r("Purple기타") },
        { json: "구 은률선", js: "구 은률선", typ: r("Purple기타") },
        { json: "은률선", js: "은률선", typ: r("PuneHedgehog") },
        { json: "남동선", js: "남동선", typ: r("Purple기타") },
        { json: "남양삼각선", js: "남양삼각선", typ: r("PuneHedgehog") },
        { json: "평남선", js: "평남선", typ: r("Purple기타") },
        { json: "만포선", js: "만포선", typ: r("PuneHedgehog") },
        { json: "평덕선", js: "평덕선", typ: r("PuneHedgehog") },
        { json: "무산선", js: "무산선", typ: r("PuneHedgehog") },
        { json: "룡성선", js: "룡성선", typ: r("PuneHedgehog") },
        { json: "차오카이 철로", js: "차오카이 철로", typ: r("PuneHedgehog") },
        { json: "강원선", js: "강원선", typ: r("Purple기타") },
    ], false),
    "Fluffy경원선": o([
        { json: "원산-갈마", js: "원산-갈마", typ: r("Purple기타") },
        { json: "가곡", js: "가곡", typ: r("PuneHedgehog") },
        { json: "삼방", js: "삼방", typ: r("PuneHedgehog") },
        { json: "세포청년", js: "세포청년", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy동해북부선": o([
        { json: "군분선-감호", js: "군분선-감호", typ: r("PuneHedgehog") },
    ], false),
    "Purple두만강선": o([
        { json: "두만강", js: "두만강", typ: r("PuneHedgehog") },
    ], false),
    "Purple버스": o([
        { json: "조선총독부 철도국", js: "조선총독부 철도국", typ: r("Purple조선총독부철도국") },
    ], false),
    "Purple조선총독부철도국": o([
        { json: "조선총독부 철도국 연락자동차 종성경원선", js: "조선총독부 철도국 연락자동차 종성경원선", typ: r("PuneHedgehog") },
        { json: "조선총독부 철도국 연락자동차 청진웅기선", js: "조선총독부 철도국 연락자동차 청진웅기선", typ: r("Purple기타") },
        { json: "조선총독부 철도국 연락자동차 종성온성선", js: "조선총독부 철도국 연락자동차 종성온성선", typ: r("Purple기타") },
    ], false),
    "Fluffy지선": o([
        { json: "북한 철도성", js: "북한 철도성", typ: r("Indecent북한철도성") },
        { json: "조선총독부 철도국", js: "조선총독부 철도국", typ: r("Fluffy조선총독부철도국") },
    ], false),
    "Indecent북한철도성": o([
        { json: "박천선", js: "박천선", typ: r("Purple기타") },
        { json: "성산인입선", js: "성산인입선", typ: r("Fluffy성산인입선") },
        { json: "수화선", js: "수화선", typ: r("Purple기타") },
        { json: "옹진선", js: "옹진선", typ: r("Purple기타") },
        { json: "청년이천선", js: "청년이천선", typ: r("Fluffy청년이천선") },
        { json: "평양 덕산선", js: "평양 덕산선", typ: r("PuneHedgehog") },
        { json: "신창삼각선", js: "신창삼각선", typ: r("PuneHedgehog") },
        { json: "구성선", js: "구성선", typ: r("Purple기타") },
        { json: "구장삼각선", js: "구장삼각선", typ: r("PuneHedgehog") },
        { json: "대택선", js: "대택선", typ: r("PuneHedgehog") },
        { json: "청단삼각선", js: "청단삼각선", typ: r("PuneHedgehog") },
        { json: "덕달선", js: "덕달선", typ: r("Purple기타") },
        { json: "덕현선", js: "덕현선", typ: r("PuneHedgehog") },
        { json: "득장선", js: "득장선", typ: r("PuneHedgehog") },
        { json: "룡강선", js: "룡강선", typ: r("Purple기타") },
        { json: "강계선", js: "강계선", typ: r("Purple기타") },
        { json: "매하선", js: "매하선", typ: r("Purple기타") },
        { json: "보천선", js: "보천선", typ: r("Purple기타") },
        { json: "서해리선", js: "서해리선", typ: r("Purple기타") },
        { json: "잠진리선", js: "잠진리선", typ: r("PuneHedgehog") },
        { json: "부포선", js: "부포선", typ: r("PuneHedgehog") },
        { json: "삼등탄광선", js: "삼등탄광선", typ: r("Purple기타") },
        { json: "삼지연선", js: "삼지연선", typ: r("PuneHedgehog") },
        { json: "삼천포지선", js: "삼천포지선", typ: r("PuneHedgehog") },
        { json: "서상삼각선", js: "서상삼각선", typ: r("PuneHedgehog") },
        { json: "성평선", js: "성평선", typ: r("PuneHedgehog") },
        { json: "신흥선", js: "신흥선", typ: r("PuneHedgehog") },
        { json: "장풍선", js: "장풍선", typ: r("Purple기타") },
        { json: "안주탄광선", js: "안주탄광선", typ: r("Purple기타") },
        { json: "문덕삼각선", js: "문덕삼각선", typ: r("PuneHedgehog") },
        { json: "온성선", js: "온성선", typ: r("Purple기타") },
        { json: "운산선", js: "운산선", typ: r("Purple기타") },
        { json: "장방삼각선", js: "장방삼각선", typ: r("PuneHedgehog") },
        { json: "장진선", js: "장진선", typ: r("PuneHedgehog") },
        { json: "천내선", js: "천내선", typ: r("Purple기타") },
        { json: "장선강선", js: "장선강선", typ: r("Purple기타") },
        { json: "청남선", js: "청남선", typ: r("Purple기타") },
        { json: "화풍선", js: "화풍선", typ: r("PuneHedgehog") },
        { json: "화풍삼각선", js: "화풍삼각선", typ: r("PuneHedgehog") },
        { json: "고건원선", js: "고건원선", typ: r("PuneHedgehog") },
        { json: "회령탄광선", js: "회령탄광선", typ: r("PuneHedgehog") },
        { json: "강덕선", js: "강덕선", typ: r("PuneHedgehog") },
        { json: "서호선", js: "서호선", typ: r("Purple기타") },
        { json: "장연선", js: "장연선", typ: r("PuneHedgehog") },
        { json: "원산항선", js: "원산항선", typ: r("PuneHedgehog") },
        { json: "선봉항선", js: "선봉항선", typ: r("PuneHedgehog") },
        { json: "허천선", js: "허천선", typ: r("PuneHedgehog") },
        { json: "룡암선", js: "룡암선", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy청년이천선": o([
        { json: "송정", js: "송정", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy조선총독부철도국": o([
        { json: "벽란도지선", js: "벽란도지선", typ: r("Purple기타") },
    ], false),
    "Sticky궤도선": o([
        { json: "강서궤도", js: "강서궤도", typ: r("궤도선_강서궤도") },
        { json: "생기령점토석탄주식회사", js: "생기령점토석탄주식회사", typ: r("궤도선_생기령점토석탄주식회사") },
        { json: "주을삼림궤도", js: "주을삼림궤도", typ: r("주을삼림궤도") },
    ], false),
    "궤도선_강서궤도": o([
        { json: "강서궤도", js: "강서궤도", typ: r("Purple기타") },
    ], false),
    "궤도선_생기령점토석탄주식회사": o([
        { json: "생기령 점토궤도", js: "생기령 점토궤도", typ: r("Purple기타") },
    ], false),
    "주을삼림궤도": o([
        { json: "주을삼림궤도", js: "주을삼림궤도", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy도시철도": o([
        { json: "평양시 려객운수종합기업소", js: "평양시 려객운수종합기업소", typ: r("도시철도_평양시려객운수종합기업소") },
    ], false),
    "도시철도_평양시려객운수종합기업소": o([
        { json: "평양 궤도전차 1호선", js: "평양 궤도전차 1호선", typ: r("Purple기타") },
    ], false),
    "Purple사철": o([
        { json: "조선철도주식회사", js: "조선철도주식회사", typ: m(r("PuneHedgehog")) },
        { json: "동만주철도 주식회사", js: "동만주철도 주식회사", typ: r("사철_동만주철도주식회사") },
    ], false),
    "사철_동만주철도주식회사": o([
        { json: "동만주철도 본선", js: "동만주철도 본선", typ: r("PuneHedgehog") },
    ], false),
    "Purple열차페리": o([
        { json: "국철", js: "국철", typ: r("열차페리_국철") },
    ], false),
    "열차페리_국철": o([
        { json: "조선총독부 철도국", js: "조선총독부 철도국", typ: r("국철_조선총독부철도국") },
    ], false),
    "국철_조선총독부철도국": o([
        { json: "조선총독부 철도국 정기항로 웅기청진선", js: "조선총독부 철도국 정기항로 웅기청진선", typ: r("Purple기타") },
    ], false),
    "Fluffy전용선": o([
        { json: "북한 철도성", js: "북한 철도성", typ: r("Ambitious북한철도성") },
        { json: "궤도선", js: "궤도선", typ: r("Indigo궤도선") },
        { json: "기타", js: "기타", typ: r("Purple기타") },
        { json: "조선철도주식회사", js: "조선철도주식회사", typ: r("전용선_조선철도주식회사") },
        { json: "미쓰비시 석탄 광업 주식회사", js: "미쓰비시 석탄 광업 주식회사", typ: r("궤도선_미쓰비시석탄광업주식회사") },
    ], false),
    "Indigo궤도선": o([
        { json: "북한 철도성", js: "북한 철도성", typ: r("Hilarious북한철도성") },
        { json: "미쓰비시 석탄 광업 주식회사", js: "미쓰비시 석탄 광업 주식회사", typ: r("궤도선_미쓰비시석탄광업주식회사") },
        { json: "한국철도공사", js: "한국철도공사", typ: r("궤도선_한국철도공사") },
        { json: "영림창", js: "영림창", typ: r("Purple기타") },
    ], false),
    "궤도선_미쓰비시석탄광업주식회사": o([
        { json: "미쓰비시 광업 대보탄갱선", js: "미쓰비시 광업 대보탄갱선", typ: r("Purple기타") },
    ], false),
    "Hilarious북한철도성": o([
        { json: "백무선", js: "백무선", typ: r("Tentacled백무선") },
        { json: "함북선", js: "함북선", typ: r("Fluffy함북선") },
        { json: "강원선", js: "강원선", typ: r("Purple강원선") },
        { json: "회령탄광선", js: "회령탄광선", typ: r("Fluffy회령탄광선") },
        { json: "평남선", js: "평남선", typ: r("Purple평남선") },
        { json: "경의선", js: "경의선", typ: r("Purple경의선") },
        { json: "안주탄광선", js: "안주탄광선", typ: r("Purple안주탄광선") },
        { json: "평덕선", js: "평덕선", typ: r("Purple평덕선") },
        { json: "평라선", js: "평라선", typ: r("리원철산선") },
        { json: "룡암선", js: "룡암선", typ: r("Purple기타") },
    ], false),
    "Purple강원선": o([
        { json: "원산", js: "원산", typ: r("PuneHedgehog") },
    ], false),
    "Purple경의선": o([
        { json: "신의주청년", js: "신의주청년", typ: r("Purple기타") },
    ], false),
    "Tentacled백무선": o([
        { json: "굴송", js: "굴송", typ: r("PuneHedgehog") },
        { json: "연사", js: "연사", typ: r("Purple기타") },
        { json: "삼유", js: "삼유", typ: r("PuneHedgehog") },
        { json: "도내", js: "도내", typ: r("PuneHedgehog") },
        { json: "삼사", js: "삼사", typ: r("PuneHedgehog") },
        { json: "유평동", js: "유평동", typ: r("Purple기타") },
        { json: "하황토", js: "하황토", typ: r("Purple기타") },
        { json: "천수", js: "천수", typ: r("PuneHedgehog") },
    ], false),
    "Purple안주탄광선": o([
        { json: "안주탄광궤도", js: "안주탄광궤도", typ: r("Purple기타") },
    ], false),
    "Purple평남선": o([
        { json: "조선탄광경편선", js: "조선탄광경편선", typ: r("PuneHedgehog") },
    ], false),
    "Purple평덕선": o([
        { json: "사동", js: "사동", typ: r("Purple기타") },
        { json: "승호리", js: "승호리", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy함북선": o([
        { json: "부령", js: "부령", typ: r("PuneHedgehog") },
        { json: "금생", js: "금생", typ: r("Purple기타") },
        { json: "회령", js: "회령", typ: r("Purple기타") },
        { json: "풍산", js: "풍산", typ: r("PuneHedgehog") },
        { json: "풍인", js: "풍인", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy회령탄광선": o([
        { json: "신계림", js: "신계림", typ: r("PuneHedgehog") },
    ], false),
    "궤도선_한국철도공사": o([
        { json: "호남선", js: "호남선", typ: r("Purple호남선") },
    ], false),
    "Purple호남선": o([
        { json: "황등", js: "황등", typ: r("PuneHedgehog") },
    ], false),
    "Ambitious북한철도성": o([
        { json: "금강산청년선", js: "금강산청년선", typ: r("Fluffy금강산청년선") },
        { json: "경의선", js: "경의선", typ: r("Fluffy경의선") },
        { json: "평덕선", js: "평덕선", typ: r("PuneHedgehog") },
        { json: "백무선", js: "백무선", typ: r("Sticky백무선") },
        { json: "백마선", js: "백마선", typ: r("백마선") },
        { json: "평남선", js: "평남선", typ: r("Fluffy평남선") },
        { json: "룡성선", js: "룡성선", typ: r("Fluffy룡성선") },
        { json: "장선강선", js: "장선강선", typ: r("장선강선") },
        { json: "백두산청년선", js: "백두산청년선", typ: r("Fluffy백두산청년선") },
        { json: "라진항선", js: "라진항선", typ: r("Fluffy라진항선") },
        { json: "함북선", js: "함북선", typ: r("Tentacled함북선") },
        { json: "평라선", js: "평라선", typ: m(r("PuneHedgehog")) },
        { json: "대건선", js: "대건선", typ: r("Fluffy대건선") },
        { json: "만포선", js: "만포선", typ: r("Fluffy만포선") },
        { json: "남흥선", js: "남흥선", typ: r("Purple남흥선") },
        { json: "강덕선", js: "강덕선", typ: r("Purple강덕선") },
        { json: "봉산선", js: "봉산선", typ: r("Fluffy봉산선") },
        { json: "구 은률선", js: "구 은률선", typ: r("Purple구은률선") },
        { json: "구성선", js: "구성선", typ: r("Purple구성선") },
        { json: "평북선", js: "평북선", typ: r("Fluffy평북선") },
        { json: "다사도선", js: "다사도선", typ: r("Fluffy다사도선") },
        { json: "대각선", js: "대각선", typ: r("Purple대각선") },
        { json: "대안선", js: "대안선", typ: r("Fluffy대안선") },
        { json: "덕성선", js: "덕성선", typ: r("Fluffy덕성선") },
        { json: "두언선", js: "두언선", typ: r("Purple기타") },
        { json: "룡강선", js: "룡강선", typ: r("Purple룡강선") },
        { json: "보천선", js: "보천선", typ: r("Purple보천선") },
        { json: "은률선", js: "은률선", typ: r("Purple은률선") },
        { json: "옹진선", js: "옹진선", typ: r("Fluffy옹진선") },
        { json: "잠진리선", js: "잠진리선", typ: r("Purple잠진리선") },
        { json: "부포선", js: "부포선", typ: r("Fluffy부포선") },
        { json: "북부내륙선", js: "북부내륙선", typ: r("Fluffy북부내륙선") },
        { json: "삼지연선", js: "삼지연선", typ: r("삼지연선") },
        { json: "송림선", js: "송림선", typ: r("Purple송림선") },
        { json: "강원선", js: "강원선", typ: r("Fluffy강원선") },
        { json: "경원선", js: "경원선", typ: r("Tentacled경원선") },
        { json: "천내선", js: "천내선", typ: r("Purple천내선") },
        { json: "추평선", js: "추평선", typ: r("추평선") },
        { json: "황해청년선", js: "황해청년선", typ: r("Fluffy황해청년선") },
        { json: "회령탄광선", js: "회령탄광선", typ: r("Purple회령탄광선") },
        { json: "박천선", js: "박천선", typ: r("Purple박천선") },
        { json: "비날론선", js: "비날론선", typ: r("PuneHedgehog") },
        { json: "마평선", js: "마평선", typ: r("PuneHedgehog") },
        { json: "청년팔원선", js: "청년팔원선", typ: r("PuneHedgehog") },
        { json: "원산항", js: "원산항", typ: r("PuneHedgehog") },
        { json: "고참탄광선", js: "고참탄광선", typ: r("PuneHedgehog") },
        { json: "차오카이 철로", js: "차오카이 철로", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy강원선": o([
        { json: "갈마", js: "갈마", typ: r("PuneHedgehog") },
    ], false),
    "Tentacled경원선": o([
        { json: "안변", js: "안변", typ: r("PuneHedgehog") },
        { json: "고산", js: "고산", typ: r("PuneHedgehog") },
        { json: "전탄", js: "전탄", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy경의선": o([
        { json: "신안주", js: "신안주", typ: r("PuneHedgehog") },
        { json: "청계", js: "청계", typ: r("Purple기타") },
        { json: "황주공군기지", js: "황주공군기지", typ: r("PuneHedgehog") },
        { json: "손하", js: "손하", typ: r("PuneHedgehog") },
        { json: "평산", js: "평산", typ: r("PuneHedgehog") },
        { json: "정방", js: "정방", typ: r("PuneHedgehog") },
        { json: "평양", js: "평양", typ: r("PuneHedgehog") },
        { json: "순안", js: "순안", typ: r("PuneHedgehog") },
        { json: "대동강", js: "대동강", typ: r("PuneHedgehog") },
        { json: "서포", js: "서포", typ: r("PuneHedgehog") },
        { json: "서평양", js: "서평양", typ: r("PuneHedgehog") },
        { json: "사리원청년", js: "사리원청년", typ: r("PuneHedgehog") },
        { json: "어파", js: "어파", typ: r("PuneHedgehog") },
        { json: "동사리원", js: "동사리원", typ: r("PuneHedgehog") },
        { json: "신의주청년", js: "신의주청년", typ: r("PuneHedgehog") },
    ], false),
    "Purple구은률선": o([
        { json: "삼강", js: "삼강", typ: r("PuneHedgehog") },
    ], false),
    "Purple구성선": o([
        { json: "연중", js: "연중", typ: r("PuneHedgehog") },
        { json: "신룡", js: "신룡", typ: r("Purple기타") },
    ], false),
    "Fluffy금강산청년선": o([
        { json: "두포", js: "두포", typ: r("PuneHedgehog") },
        { json: "금강산청년", js: "금강산청년", typ: r("PuneHedgehog") },
    ], false),
    "Purple남흥선": o([
        { json: "남흥", js: "남흥", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy다사도선": o([
        { json: "룡암포", js: "룡암포", typ: r("PuneHedgehog") },
    ], false),
    "Purple대각선": o([
        { json: "대각", js: "대각", typ: r("Purple기타") },
    ], false),
    "Fluffy대건선": o([
        { json: "무진대", js: "무진대", typ: r("Purple기타") },
    ], false),
    "Fluffy대안선": o([
        { json: "대안", js: "대안", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy덕성선": o([
        { json: "북청", js: "북청", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy라진항선": o([
        { json: "라진항", js: "라진항", typ: r("PuneHedgehog") },
    ], false),
    "Purple룡강선": o([
        { json: "룡호", js: "룡호", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy룡성선": o([
        { json: "룡성", js: "룡성", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy만포선": o([
        { json: "천동", js: "천동", typ: r("PuneHedgehog") },
        { json: "고인", js: "고인", typ: r("Purple기타") },
        { json: "성간", js: "성간", typ: r("Purple기타") },
    ], false),
    "Purple박천선": o([
        { json: "박천자갈선", js: "박천자갈선", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy백두산청년선": o([
        { json: "생장", js: "생장", typ: r("PuneHedgehog") },
        { json: "령하", js: "령하", typ: r("Purple기타") },
    ], false),
    "백마선": o([
        { json: "백마", js: "백마", typ: r("PuneHedgehog") },
        { json: "석하", js: "석하", typ: r("PuneHedgehog") },
        { json: "백마자갈선", js: "백마자갈선", typ: r("PuneHedgehog") },
    ], false),
    "Sticky백무선": o([
        { json: "천수", js: "천수", typ: r("PuneHedgehog") },
        { json: "연사", js: "연사", typ: r("PuneHedgehog") },
        { json: "굴송", js: "굴송", typ: r("PuneHedgehog") },
    ], false),
    "Purple보천선": o([
        { json: "량강대평", js: "량강대평", typ: r("Purple기타") },
    ], false),
    "Fluffy봉산선": o([
        { json: "서봉산", js: "서봉산", typ: r("Purple기타") },
    ], false),
    "Fluffy부포선": o([
        { json: "부포", js: "부포", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy북부내륙선": o([
        { json: "후주청년", js: "후주청년", typ: r("PuneHedgehog") },
        { json: "문악", js: "문악", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy옹진선": o([
        { json: "왕신", js: "왕신", typ: r("PuneHedgehog") },
    ], false),
    "Purple은률선": o([
        { json: "철광", js: "철광", typ: r("PuneHedgehog") },
        { json: "운성", js: "운성", typ: r("PuneHedgehog") },
    ], false),
    "Purple잠진리선": o([
        { json: "잠진리", js: "잠진리", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy평남선": o([
        { json: "온천 비행장", js: "온천 비행장", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy평북선": o([
        { json: "백운", js: "백운", typ: r("Purple기타") },
        { json: "서부", js: "서부", typ: r("PuneHedgehog") },
    ], false),
    "Tentacled함북선": o([
        { json: "웅상 목재가공공업구", js: "웅상 목재가공공업구", typ: r("PuneHedgehog") },
        { json: "금생", js: "금생", typ: r("Purple기타") },
        { json: "회령", js: "회령", typ: r("PuneHedgehog") },
        { json: "학송", js: "학송", typ: r("PuneHedgehog") },
        { json: "신학포", js: "신학포", typ: r("PuneHedgehog") },
        { json: "훈융", js: "훈융", typ: r("PuneHedgehog") },
        { json: "선봉", js: "선봉", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy황해청년선": o([
        { json: "하성", js: "하성", typ: r("PuneHedgehog") },
    ], false),
    "전용선_조선철도주식회사": o([
        { json: "사해선", js: "사해선", typ: r("Purple사해선") },
    ], false),
    "Purple사해선": o([
        { json: "구하성", js: "구하성", typ: r("PuneHedgehog") },
    ], false),
    "Tentacled지선": o([
        { json: "미쓰비시 석탄 광업 주식회사", js: "미쓰비시 석탄 광업 주식회사", typ: r("궤도선_미쓰비시석탄광업주식회사") },
        { json: "압록강 임시가선", js: "압록강 임시가선", typ: r("Purple기타") },
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
        { json: "삭도", js: "삭도", typ: r("미래_삭도") },
        { json: "기타", js: "기타", typ: r("미래_기타") },
    ], false),
    "미래_국철": o([
        { json: "간선", js: "간선", typ: r("Tentacled간선") },
        { json: "지선", js: "지선", typ: r("Sticky지선") },
        { json: "준고속선", js: "준고속선", typ: r("Purple준고속선") },
        { json: "고속선", js: "고속선", typ: r("Purple고속선") },
    ], false),
    "Tentacled간선": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("Purple한국철도공사") },
        { json: "북한 철도성", js: "북한 철도성", typ: r("Cunning북한철도성") },
    ], false),
    "Cunning북한철도성": o([
        { json: "경원선", js: "경원선", typ: r("Purple기타") },
    ], false),
    "Purple한국철도공사": o([
        { json: "충북선", js: "충북선", typ: r("Purple충북선") },
        { json: "경부선", js: "경부선", typ: r("병원_Class") },
        { json: "경원선", js: "경원선", typ: r("Purple기타") },
        { json: "보성목포선", js: "보성목포선", typ: r("Purple기타") },
        { json: "중부내륙선", js: "중부내륙선", typ: r("Purple기타") },
        { json: "여주원주선", js: "여주원주선", typ: r("Purple기타") },
        { json: "동해북부선", js: "동해북부선", typ: r("Purple기타") },
        { json: "춘천속초선", js: "춘천속초선", typ: r("Purple기타") },
        { json: "동해선", js: "동해선", typ: r("Purple기타") },
    ], false),
    "병원_Class": o([
    ], false),
    "Purple충북선": o([
        { json: "청주공항", js: "청주공항", typ: r("PuneHedgehog") },
    ], false),
    "Purple고속선": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("Fluffy한국철도공사") },
    ], false),
    "Fluffy한국철도공사": o([
        { json: "호남고속선", js: "호남고속선", typ: r("Purple기타") },
    ], false),
    "Purple준고속선": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("Tentacled한국철도공사") },
    ], false),
    "Tentacled한국철도공사": o([
        { json: "서해선", js: "서해선", typ: r("Purple기타") },
        { json: "중앙선", js: "중앙선", typ: r("PuneHedgehog") },
    ], false),
    "Sticky지선": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("Sticky한국철도공사") },
    ], false),
    "Sticky한국철도공사": o([
        { json: "군산항선", js: "군산항선", typ: r("Purple군산항선") },
        { json: "부전선", js: "부전선", typ: r("Purple부전선") },
        { json: "대전철도차량정비단선", js: "대전철도차량정비단선", typ: r("PuneHedgehog") },
        { json: "평택선", js: "평택선", typ: r("Purple기타") },
        { json: "평택고속연결선", js: "평택고속연결선", typ: r("Purple기타") },
        { json: "화성고속연결선", js: "화성고속연결선", typ: r("Purple기타") },
    ], false),
    "Purple군산항선": o([
        { json: "군산항", js: "군산항", typ: r("Purple기타") },
    ], false),
    "Purple부전선": o([
        { json: "부전-가야", js: "부전-가야", typ: r("부전가야") },
    ], false),
    "부전가야": o([
        { json: "_전동차", js: "_전동차", typ: r("PuneHedgehog") },
    ], false),
    "미래_궤도선": o([
        { json: "인천교통공사", js: "인천교통공사", typ: r("Purple인천교통공사") },
        { json: "순천에코트랜스", js: "순천에코트랜스", typ: r("Purple순천에코트랜스") },
    ], false),
    "Purple순천에코트랜스": o([
        { json: "순천만PRT", js: "순천만PRT", typ: r("PuneHedgehog") },
    ], false),
    "Purple인천교통공사": o([
        { json: "월미바다열차", js: "월미바다열차", typ: r("PuneHedgehog") },
    ], false),
    "미래_기타": o([
        { json: "신분당선", js: "신분당선", typ: r("Purple기타") },
    ], false),
    "미래_도시철도": o([
        { json: "인천교통공사", js: "인천교통공사", typ: r("Fluffy인천교통공사") },
        { json: "우이신설경전철 주식회사", js: "우이신설경전철 주식회사", typ: r("Purple우이신설경전철주식회사") },
        { json: "동북선도시철도주식회사", js: "동북선도시철도주식회사", typ: r("도시철도_동북선도시철도주식회사") },
        { json: "대구도시철도공사", js: "대구도시철도공사", typ: r("Purple대구도시철도공사") },
        { json: "서울시메트로 9호선", js: "서울시메트로 9호선", typ: r("Purple서울시메트로9호선") },
        { json: "부산교통공사", js: "부산교통공사", typ: r("Purple부산교통공사") },
        { json: "한국철도공사", js: "한국철도공사", typ: m(r("Purple기타")) },
        { json: "광주광역시도시철도공사", js: "광주광역시도시철도공사", typ: r("Purple광주광역시도시철도공사") },
        { json: "서울교통공사", js: "서울교통공사", typ: m(r("Purple기타")) },
        { json: "에스지레일 주식회사", js: "에스지레일 주식회사", typ: m(r("Purple기타")) },
        { json: "넥스트레인 주식회사", js: "넥스트레인 주식회사", typ: r("넥스트레인주식회사") },
        { json: "옥정포천선", js: "옥정포천선", typ: r("PuneHedgehog") },
        { json: "서울 경전철 위례선", js: "서울 경전철 위례선", typ: r("Purple기타") },
        { json: "서울 경전철 위례선 지선", js: "서울 경전철 위례선 지선", typ: r("PuneHedgehog") },
        { json: "별내선", js: "별내선", typ: r("PuneHedgehog") },
        { json: "동탄인덕원선", js: "동탄인덕원선", typ: r("Purple기타") },
        { json: "동탄인덕원선 지선", js: "동탄인덕원선 지선", typ: r("PuneHedgehog") },
        { json: "판교 랜드마크 트램 기지선", js: "판교 랜드마크 트램 기지선", typ: r("PuneHedgehog") },
    ], false),
    "Purple광주광역시도시철도공사": o([
        { json: "광주 도시철도 2호선", js: "광주 도시철도 2호선", typ: r("PuneHedgehog") },
        { json: "광주 도시철도 2호선 지선", js: "광주 도시철도 2호선 지선", typ: r("Purple기타") },
    ], false),
    "넥스트레인주식회사": o([
        { json: "신안산선 지선", js: "신안산선 지선", typ: r("PuneHedgehog") },
        { json: "신안산선", js: "신안산선", typ: r("Purple기타") },
    ], false),
    "Purple대구도시철도공사": o([
        { json: "대구 도시철도 1호선", js: "대구 도시철도 1호선", typ: r("대구도시철도1호선") },
    ], false),
    "대구도시철도1호선": o([
        { json: "안심-하양", js: "안심-하양", typ: r("Purple기타") },
    ], false),
    "도시철도_동북선도시철도주식회사": o([
        { json: "서울 경전철 동북선", js: "서울 경전철 동북선", typ: r("Purple기타") },
    ], false),
    "Purple부산교통공사": o([
        { json: "양산 도시철도", js: "양산 도시철도", typ: r("Purple기타") },
        { json: "부산 도시철도 사상하단선", js: "부산 도시철도 사상하단선", typ: r("Purple기타") },
        { json: "부산 도시철도 사상하단선 기지선", js: "부산 도시철도 사상하단선 기지선", typ: r("PuneHedgehog") },
    ], false),
    "Purple서울시메트로9호선": o([
        { json: "서울시메트로 9호선", js: "서울시메트로 9호선", typ: r("Fluffy서울시메트로9호선") },
    ], false),
    "Fluffy서울시메트로9호선": o([
        { json: "고덕강일", js: "고덕강일", typ: r("Purple기타") },
    ], false),
    "Purple우이신설경전철주식회사": o([
        { json: "서울 경전철 우이신설선", js: "서울 경전철 우이신설선", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy인천교통공사": o([
        { json: "서울교통공사 7호선", js: "서울교통공사 7호선", typ: r("서울교통공사7호선") },
        { json: "인천 도시철도 1호선", js: "인천 도시철도 1호선", typ: r("Purple기타") },
    ], false),
    "서울교통공사7호선": o([
        { json: "석남-7호선종점", js: "석남-7호선종점", typ: r("Purple기타") },
    ], false),
    "미래_삭도": o([
        { json: "강화석모해상케이블카 주식회사", js: "강화석모해상케이블카 주식회사", typ: r("삭도_강화석모해상케이블카주식회사") },
        { json: "포항영일만해양케이블카 주식회사", js: "포항영일만해양케이블카 주식회사", typ: r("삭도_포항영일만해양케이블카주식회사") },
    ], false),
    "삭도_강화석모해상케이블카주식회사": o([
        { json: "강화석모해상케이블카", js: "강화석모해상케이블카", typ: r("PuneHedgehog") },
    ], false),
    "삭도_포항영일만해양케이블카주식회사": o([
        { json: "포항 영일만 해양 케이블카", js: "포항 영일만 해양 케이블카", typ: r("PuneHedgehog") },
    ], false),
    "미성선": o([
        { json: "국철", js: "국철", typ: r("미성선_국철") },
        { json: "도시철도", js: "도시철도", typ: r("미성선_도시철도") },
        { json: "단양석탄공업 주식회사", js: "단양석탄공업 주식회사", typ: r("단양석탄공업주식회사") },
        { json: "철도청", js: "철도청", typ: r("미성선_철도청") },
        { json: "사철", js: "사철", typ: r("미성선_사철") },
        { json: "궤도선", js: "궤도선", typ: r("미성선_궤도선") },
        { json: "전용선", js: "전용선", typ: r("미성선_전용선") },
    ], false),
    "미성선_국철": o([
        { json: "지선", js: "지선", typ: r("Indigo지선") },
        { json: "철도청", js: "철도청", typ: m(r("Purple기타")) },
        { json: "한국철도공사", js: "한국철도공사", typ: r("국철_한국철도공사") },
        { json: "조선총독부 교통국", js: "조선총독부 교통국", typ: r("국철_조선총독부교통국") },
        { json: "고속선", js: "고속선", typ: r("Fluffy고속선") },
    ], false),
    "Fluffy고속선": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("Indigo한국철도공사") },
    ], false),
    "Indigo한국철도공사": o([
        { json: "경부고속선", js: "경부고속선", typ: r("Purple경부고속선") },
    ], false),
    "Purple경부고속선": o([
        { json: "광명-화성IEC", js: "광명-화성IEC", typ: r("Purple기타") },
    ], false),
    "국철_조선총독부교통국": o([
        { json: "동해중부선", js: "동해중부선", typ: r("PuneHedgehog") },
        { json: "대삼선", js: "대삼선", typ: r("Purple기타") },
        { json: "경전서부선", js: "경전서부선", typ: r("Purple기타") },
    ], false),
    "Indigo지선": o([
        { json: "철도청", js: "철도청", typ: r("Purple철도청") },
    ], false),
    "Purple철도청": o([
        { json: "회동선", js: "회동선", typ: r("Purple기타") },
    ], false),
    "국철_한국철도공사": o([
        { json: "영동선", js: "영동선", typ: r("Purple영동선") },
        { json: "호남선", js: "호남선", typ: r("Fluffy호남선") },
        { json: "동해북부선", js: "동해북부선", typ: r("Purple기타") },
    ], false),
    "Purple영동선": o([
        { json: "법전-춘양", js: "법전-춘양", typ: r("Purple기타") },
        { json: "양원-승부", js: "양원-승부", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy호남선": o([
        { json: "1960년이전_계획선?", js: "1960년이전_계획선?", typ: r("PuneHedgehog") },
    ], false),
    "미성선_궤도선": o([
        { json: "서울특별시", js: "서울특별시", typ: r("Purple서울특별시") },
    ], false),
    "Purple서울특별시": o([
        { json: "서울전차 덕소선", js: "서울전차 덕소선", typ: r("Purple기타") },
    ], false),
    "단양석탄공업주식회사": o([
        { json: "단양석탄공업 전용철도", js: "단양석탄공업 전용철도", typ: r("Purple기타") },
    ], false),
    "미성선_도시철도": o([
        { json: "창원도시철도", js: "창원도시철도", typ: m(r("Purple기타")) },
        { json: "부산교통공사", js: "부산교통공사", typ: r("Fluffy부산교통공사") },
    ], false),
    "Fluffy부산교통공사": o([
        { json: "부산 도시철도 2호선", js: "부산 도시철도 2호선", typ: r("Purple부산도시철도2호선") },
    ], false),
    "Purple부산도시철도2호선": o([
        { json: "북부", js: "북부", typ: r("Purple기타") },
    ], false),
    "미성선_사철": o([
        { json: "궤도선", js: "궤도선", typ: r("Indecent궤도선") },
    ], false),
    "Indecent궤도선": o([
        { json: "김제궤도 주식회사", js: "김제궤도 주식회사", typ: r("Purple김제궤도주식회사") },
    ], false),
    "Purple김제궤도주식회사": o([
        { json: "김제궤도", js: "김제궤도", typ: r("PuneHedgehog") },
    ], false),
    "미성선_전용선": o([
        { json: "조선총독부 교통국", js: "조선총독부 교통국", typ: r("전용선_조선총독부교통국") },
    ], false),
    "전용선_조선총독부교통국": o([
        { json: "동해중부선", js: "동해중부선", typ: r("Purple동해중부선") },
    ], false),
    "Purple동해중부선": o([
        { json: "청하자갈선", js: "청하자갈선", typ: r("PuneHedgehog") },
    ], false),
    "미성선_철도청": o([
        { json: "단양탄광선", js: "단양탄광선", typ: r("Purple기타") },
    ], false),
    "Rok영업": o([
        { json: "국철", js: "국철", typ: r("Tentacled국철") },
        { json: "궤도선", js: "궤도선", typ: r("Ambitious궤도선") },
        { json: "도시철도", js: "도시철도", typ: r("Tentacled도시철도") },
        { json: "기타", js: "기타", typ: r("영업_기타") },
        { json: "간선", js: "간선", typ: r("영업_간선") },
        { json: "삭도", js: "삭도", typ: r("Fluffy삭도") },
        { json: "강삭철도", js: "강삭철도", typ: r("Fluffy강삭철도") },
        { json: "열차페리", js: "열차페리", typ: r("영업_열차페리") },
        { json: "전용선", js: "전용선", typ: r("Sticky전용선") },
    ], false),
    "영업_간선": o([
        { json: "서해철도 주식회사", js: "서해철도 주식회사", typ: r("간선_서해철도주식회사") },
        { json: "서부광역철도 주식회사", js: "서부광역철도 주식회사", typ: r("간선_서부광역철도주식회사") },
        { json: "한국철도공사", js: "한국철도공사", typ: r("Indecent한국철도공사") },
    ], false),
    "간선_서부광역철도주식회사": o([
        { json: "소사대곡선", js: "소사대곡선", typ: r("Purple소사대곡선") },
    ], false),
    "Purple소사대곡선": o([
        { json: "신능곡-신김포", js: "신능곡-신김포", typ: r("Purple기타") },
        { json: "신김포-신능곡", js: "신김포-신능곡", typ: r("Purple기타") },
        { json: "신대곡종점-대곡", js: "신대곡종점-대곡", typ: r("PuneHedgehog") },
        { json: "신김포-원종", js: "신김포-원종", typ: r("Purple기타") },
        { json: "신소사-부천종", js: "신소사-부천종", typ: r("PuneHedgehog") },
        { json: "원종-부천종", js: "원종-부천종", typ: r("PuneHedgehog") },
    ], false),
    "간선_서해철도주식회사": o([
        { json: "소사원시선", js: "소사원시선", typ: r("Purple소사원시선") },
        { json: "소사대곡선", js: "소사대곡선", typ: r("서해철도주식회사_소사대곡선") },
    ], false),
    "서해철도주식회사_소사대곡선": o([
        { json: "신소사-부천종", js: "신소사-부천종", typ: r("PuneHedgehog") },
    ], false),
    "Purple소사원시선": o([
        { json: "소사원시선종점-원시", js: "소사원시선종점-원시", typ: r("소사원시선종점원시") },
        { json: "신신현-하중", js: "신신현-하중", typ: r("PuneHedgehog") },
        { json: "선부-신초지", js: "선부-신초지", typ: r("PuneHedgehog") },
        { json: "선부-달미", js: "선부-달미", typ: r("PuneHedgehog") },
        { json: "달미-시흥능", js: "달미-시흥능", typ: r("PuneHedgehog") },
        { json: "시흥능-시흥청", js: "시흥능-시흥청", typ: r("PuneHedgehog") },
        { json: "시흥청-하중", js: "시흥청-하중", typ: r("PuneHedgehog") },
        { json: "신신현-신신천", js: "신신현-신신천", typ: r("Purple기타") },
        { json: "신신천-시흥대", js: "신신천-시흥대", typ: r("PuneHedgehog") },
        { json: "시흥대-소새울", js: "시흥대-소새울", typ: r("PuneHedgehog") },
        { json: "소새울-신소사", js: "소새울-신소사", typ: r("PuneHedgehog") },
        { json: "시우-원시", js: "시우-원시", typ: r("PuneHedgehog") },
        { json: "시우-신초지", js: "시우-신초지", typ: r("PuneHedgehog") },
    ], false),
    "소사원시선종점원시": o([
        { json: "원시", js: "원시", typ: r("PuneHedgehog") },
    ], false),
    "Indecent한국철도공사": o([
        { json: "소사대곡선", js: "소사대곡선", typ: r("한국철도공사_소사대곡선") },
    ], false),
    "한국철도공사_소사대곡선": o([
        { json: "대곡-능곡", js: "대곡-능곡", typ: r("소사대곡선_대곡능곡") },
        { json: "신김포-신능곡", js: "신김포-신능곡", typ: r("PuneHedgehog") },
    ], false),
    "소사대곡선_대곡능곡": o([
        { json: "서해선", js: "서해선", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy강삭철도": o([
        { json: "주식회사 강원랜드", js: "주식회사 강원랜드", typ: r("강삭철도_주식회사강원랜드") },
    ], false),
    "강삭철도_주식회사강원랜드": o([
        { json: "하이원추추파크 인클라인 트레인", js: "하이원추추파크 인클라인 트레인", typ: r("PuneHedgehog") },
    ], false),
    "Tentacled국철": o([
        { json: "간선", js: "간선", typ: r("Sticky간선") },
        { json: "지선", js: "지선", typ: r("Indecent지선") },
        { json: "버스", js: "버스", typ: r("Fluffy버스") },
        { json: "도시철도", js: "도시철도", typ: r("국철_도시철도") },
        { json: "준고속선", js: "준고속선", typ: r("Fluffy준고속선") },
        { json: "궤도선", js: "궤도선", typ: r("Hilarious궤도선") },
        { json: "고속선", js: "고속선", typ: r("Tentacled고속선") },
        { json: "기타", js: "기타", typ: r("국철_기타") },
        { json: "전용선", js: "전용선", typ: r("Tentacled전용선") },
    ], false),
    "Sticky간선": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("Hilarious한국철도공사") },
    ], false),
    "Hilarious한국철도공사": o([
        { json: "호남선", js: "호남선", typ: r("Tentacled호남선") },
        { json: "경인선", js: "경인선", typ: m(r("PuneHedgehog")) },
        { json: "영동선", js: "영동선", typ: r("Fluffy영동선") },
        { json: "경북선", js: "경북선", typ: r("Purple경북선") },
        { json: "태백선", js: "태백선", typ: r("Purple태백선") },
        { json: "충북선", js: "충북선", typ: r("Fluffy충북선") },
        { json: "경춘선", js: "경춘선", typ: r("Purple경춘선") },
        { json: "중앙선", js: "중앙선", typ: r("PuneHedgehog") },
        { json: "원주강릉선", js: "원주강릉선", typ: r("원주강릉선") },
        { json: "동해선", js: "동해선", typ: r("PuneHedgehog") },
        { json: "경부선", js: "경부선", typ: r("Purple경부선") },
        { json: "경강선", js: "경강선", typ: r("Purple경강선") },
        { json: "전라선", js: "전라선", typ: r("PuneHedgehog") },
        { json: "장항선", js: "장항선", typ: r("Purple장항선") },
        { json: "경전선", js: "경전선", typ: r("Purple경전선") },
        { json: "중부내륙선", js: "중부내륙선", typ: r("Purple중부내륙선") },
        { json: "동해북부선", js: "동해북부선", typ: r("Tentacled동해북부선") },
        { json: "경의선", js: "경의선", typ: r("PuneHedgehog") },
        { json: "경원선", js: "경원선", typ: r("Sticky경원선") },
        { json: "대구선", js: "대구선", typ: r("Purple대구선") },
    ], false),
    "Purple경강선": o([
        { json: "신판교-신이매", js: "신판교-신이매", typ: r("PuneHedgehog") },
        { json: "신이매-삼동", js: "신이매-삼동", typ: r("Purple기타") },
        { json: "삼동-경광주", js: "삼동-경광주", typ: r("Purple기타") },
        { json: "초월-경광주", js: "초월-경광주", typ: r("Purple기타") },
        { json: "곤지암-도예촌", js: "곤지암-도예촌", typ: r("Purple기타") },
        { json: "도예촌-이천", js: "도예촌-이천", typ: r("Purple기타") },
        { json: "이천-부발", js: "이천-부발", typ: r("Purple기타") },
        { json: "세종릉-여주", js: "세종릉-여주", typ: r("Purple기타") },
        { json: "곤지암-초월", js: "곤지암-초월", typ: r("Purple기타") },
        { json: "부발-세종릉", js: "부발-세종릉", typ: r("Purple기타") },
        { json: "여주-경강선종점", js: "여주-경강선종점", typ: r("PuneHedgehog") },
        { json: "신판교종점-신판교", js: "신판교종점-신판교", typ: r("PuneHedgehog") },
        { json: "야탑-삼동", js: "야탑-삼동", typ: r("PuneHedgehog") },
    ], false),
    "Purple경부선": o([
        { json: "노량진-대방", js: "노량진-대방", typ: r("PuneHedgehog") },
        { json: "신도림-구로", js: "신도림-구로", typ: r("PuneHedgehog") },
        { json: "영등포-신도림", js: "영등포-신도림", typ: r("PuneHedgehog") },
        { json: "신길-영등포", js: "신길-영등포", typ: r("PuneHedgehog") },
        { json: "용산-노량진", js: "용산-노량진", typ: r("PuneHedgehog") },
        { json: "대방-신길", js: "대방-신길", typ: r("PuneHedgehog") },
        { json: "노량진-용산", js: "노량진-용산", typ: r("노량진용산") },
        { json: "가산디-구로", js: "가산디-구로", typ: r("PuneHedgehog") },
        { json: "구로-가산디", js: "구로-가산디", typ: r("PuneHedgehog") },
        { json: "서울-용산", js: "서울-용산", typ: r("서울용산") },
        { json: "용산-서울", js: "용산-서울", typ: r("용산서울") },
        { json: "천안-두정", js: "천안-두정", typ: r("천안두정") },
        { json: "두정-직산", js: "두정-직산", typ: r("Purple기타") },
        { json: "직산-성환", js: "직산-성환", typ: r("Purple기타") },
        { json: "성환-평택", js: "성환-평택", typ: r("Purple기타") },
        { json: "직산-두정", js: "직산-두정", typ: r("Purple기타") },
        { json: "대신-김천", js: "대신-김천", typ: r("Purple기타") },
        { json: "김천-대신", js: "김천-대신", typ: r("Purple기타") },
        { json: "동대구-대구", js: "동대구-대구", typ: r("Purple기타") },
        { json: "삼랑진-원동", js: "삼랑진-원동", typ: r("Purple기타") },
        { json: "원동-삼랑진", js: "원동-삼랑진", typ: r("Purple기타") },
        { json: "사상-부산진", js: "사상-부산진", typ: r("사상부산진") },
        { json: "부산진-부산진", js: "부산진-부산진", typ: r("부산진부산진") },
        { json: "조치원-내판", js: "조치원-내판", typ: r("Purple기타") },
        { json: "내판-조치원", js: "내판-조치원", typ: r("Purple기타") },
        { json: "시흥연-금천구", js: "시흥연-금천구", typ: r("금천구시흥연") },
        { json: "금천구-시흥연", js: "금천구-시흥연", typ: r("금천구시흥연") },
        { json: "서정리-송탄", js: "서정리-송탄", typ: r("PuneHedgehog") },
        { json: "약목", js: "약목", typ: r("PuneHedgehog") },
        { json: "제목 없는 폴더", js: "제목 없는 폴더", typ: r("제목없는폴더") },
        { json: "병점-세마", js: "병점-세마", typ: r("PuneHedgehog") },
        { json: "세마-오산대", js: "세마-오산대", typ: r("PuneHedgehog") },
        { json: "오산대-오산", js: "오산대-오산", typ: r("PuneHedgehog") },
        { json: "오산-진위", js: "오산-진위", typ: r("Purple기타") },
        { json: "진위-송탄", js: "진위-송탄", typ: r("Purple기타") },
        { json: "송탄-서정리", js: "송탄-서정리", typ: r("PuneHedgehog") },
        { json: "서정리-지제", js: "서정리-지제", typ: r("Purple기타") },
        { json: "지제-평택", js: "지제-평택", typ: r("Purple기타") },
        { json: "평택-성환", js: "평택-성환", typ: r("Purple기타") },
        { json: "성환-직산", js: "성환-직산", typ: r("Purple기타") },
        { json: "평택-지제", js: "평택-지제", typ: r("Purple기타") },
        { json: "지제-서정리", js: "지제-서정리", typ: r("Purple기타") },
        { json: "송탄-진위", js: "송탄-진위", typ: r("Purple기타") },
        { json: "진위-오산", js: "진위-오산", typ: r("Purple기타") },
        { json: "오산-오산대", js: "오산-오산대", typ: r("PuneHedgehog") },
        { json: "오산대-세마", js: "오산대-세마", typ: r("PuneHedgehog") },
        { json: "세마-병점", js: "세마-병점", typ: r("PuneHedgehog") },
        { json: "용산", js: "용산", typ: r("PuneHedgehog") },
        { json: "서울", js: "서울", typ: r("PuneHedgehog") },
        { json: "남영-용산", js: "남영-용산", typ: r("PuneHedgehog") },
        { json: "남영-지하서", js: "남영-지하서", typ: r("PuneHedgehog") },
        { json: "구로-신도림", js: "구로-신도림", typ: r("PuneHedgehog") },
        { json: "가산디-독산", js: "가산디-독산", typ: r("PuneHedgehog") },
        { json: "독산-금천구", js: "독산-금천구", typ: r("PuneHedgehog") },
        { json: "금천구-석수", js: "금천구-석수", typ: r("PuneHedgehog") },
        { json: "석수-관악", js: "석수-관악", typ: r("PuneHedgehog") },
        { json: "관악-안양", js: "관악-안양", typ: r("PuneHedgehog") },
        { json: "안양-명학", js: "안양-명학", typ: r("PuneHedgehog") },
        { json: "명학-금정", js: "명학-금정", typ: r("PuneHedgehog") },
        { json: "금정-군포", js: "금정-군포", typ: r("PuneHedgehog") },
        { json: "군포-당정", js: "군포-당정", typ: r("PuneHedgehog") },
        { json: "당정-의왕", js: "당정-의왕", typ: r("PuneHedgehog") },
        { json: "의왕-성균관", js: "의왕-성균관", typ: r("Purple기타") },
        { json: "성균관-화서", js: "성균관-화서", typ: r("PuneHedgehog") },
        { json: "화서-수원", js: "화서-수원", typ: r("PuneHedgehog") },
        { json: "수원-세류", js: "수원-세류", typ: r("PuneHedgehog") },
        { json: "세류-병점", js: "세류-병점", typ: r("Purple기타") },
        { json: "병점-세류", js: "병점-세류", typ: r("Purple기타") },
        { json: "세류-수원", js: "세류-수원", typ: r("PuneHedgehog") },
        { json: "수원-화서", js: "수원-화서", typ: r("PuneHedgehog") },
        { json: "화서-성균관", js: "화서-성균관", typ: r("PuneHedgehog") },
        { json: "성균관-의왕", js: "성균관-의왕", typ: r("Purple기타") },
        { json: "의왕-당정", js: "의왕-당정", typ: r("PuneHedgehog") },
        { json: "당정-군포", js: "당정-군포", typ: r("PuneHedgehog") },
        { json: "군포-금정", js: "군포-금정", typ: r("PuneHedgehog") },
        { json: "금정-명학", js: "금정-명학", typ: r("PuneHedgehog") },
        { json: "명학-안양", js: "명학-안양", typ: r("PuneHedgehog") },
        { json: "안양-관악", js: "안양-관악", typ: r("PuneHedgehog") },
        { json: "관악-석수", js: "관악-석수", typ: r("PuneHedgehog") },
        { json: "석수-금천구", js: "석수-금천구", typ: r("PuneHedgehog") },
        { json: "금천구-독산", js: "금천구-독산", typ: r("PuneHedgehog") },
        { json: "독산-가산디", js: "독산-가산디", typ: r("PuneHedgehog") },
        { json: "금정", js: "금정", typ: r("PuneHedgehog") },
        { json: "안양-금천구", js: "안양-금천구", typ: r("Purple기타") },
        { json: "금천구-안양", js: "금천구-안양", typ: r("Purple기타") },
        { json: "영등포-노량진", js: "영등포-노량진", typ: r("Purple기타") },
        { json: "금천구-영등포", js: "금천구-영등포", typ: r("Purple기타") },
        { json: "안양-군포", js: "안양-군포", typ: r("Purple기타") },
        { json: "군포-의왕", js: "군포-의왕", typ: r("Purple기타") },
        { json: "평택-서정리", js: "평택-서정리", typ: r("Purple기타") },
        { json: "송탄-오산", js: "송탄-오산", typ: r("Purple기타") },
        { json: "오산-병점", js: "오산-병점", typ: r("Purple기타") },
        { json: "병점-수원", js: "병점-수원", typ: r("Purple기타") },
        { json: "수원-의왕", js: "수원-의왕", typ: r("Purple기타") },
        { json: "회덕-대전조", js: "회덕-대전조", typ: r("Purple기타") },
        { json: "대전조-대전", js: "대전조-대전", typ: r("Purple기타") },
        { json: "부강-매포", js: "부강-매포", typ: r("Purple기타") },
        { json: "매포-신탄진", js: "매포-신탄진", typ: r("Purple기타") },
        { json: "서창-조치원", js: "서창-조치원", typ: r("PuneHedgehog") },
        { json: "대전-대전조", js: "대전-대전조", typ: r("Purple기타") },
        { json: "대전조-회덕", js: "대전조-회덕", typ: r("Purple기타") },
        { json: "회덕-신탄진", js: "회덕-신탄진", typ: r("Purple기타") },
        { json: "신탄진-매포", js: "신탄진-매포", typ: r("Purple기타") },
        { json: "매포-부강", js: "매포-부강", typ: r("Purple기타") },
        { json: "조치원-서창", js: "조치원-서창", typ: r("PuneHedgehog") },
        { json: "천안-소정리", js: "천안-소정리", typ: r("Purple기타") },
        { json: "소정리-전의", js: "소정리-전의", typ: r("Purple기타") },
        { json: "전의-전동", js: "전의-전동", typ: r("Purple기타") },
        { json: "전동-서창", js: "전동-서창", typ: r("Purple기타") },
        { json: "내판-부강", js: "내판-부강", typ: r("Purple기타") },
        { json: "옥천-세천", js: "옥천-세천", typ: r("Purple기타") },
        { json: "세천-대전", js: "세천-대전", typ: r("Purple기타") },
        { json: "이원-옥천", js: "이원-옥천", typ: r("Purple기타") },
        { json: "각계-심천", js: "각계-심천", typ: r("Purple기타") },
        { json: "옥천-이원", js: "옥천-이원", typ: r("Purple기타") },
        { json: "심천-각계", js: "심천-각계", typ: r("Purple기타") },
        { json: "각계-영동", js: "각계-영동", typ: r("Purple기타") },
        { json: "영동-각계", js: "영동-각계", typ: r("Purple기타") },
        { json: "심천-지탄", js: "심천-지탄", typ: r("Purple기타") },
        { json: "지탄-이원", js: "지탄-이원", typ: r("Purple기타") },
        { json: "대전-세천", js: "대전-세천", typ: r("Purple기타") },
        { json: "세천-옥천", js: "세천-옥천", typ: r("Purple기타") },
        { json: "황간-영동", js: "황간-영동", typ: r("Purple기타") },
        { json: "영동-황간", js: "영동-황간", typ: r("Purple기타") },
        { json: "직지사-신암", js: "직지사-신암", typ: r("Purple기타") },
        { json: "신암-직지사", js: "신암-직지사", typ: r("Purple기타") },
        { json: "추풍령-신암", js: "추풍령-신암", typ: r("Purple기타") },
        { json: "황간-추풍령", js: "황간-추풍령", typ: r("Purple기타") },
        { json: "김천-직지사", js: "김천-직지사", typ: r("Purple기타") },
        { json: "신암-추풍령", js: "신암-추풍령", typ: r("Purple기타") },
        { json: "직지사-김천", js: "직지사-김천", typ: r("Purple기타") },
        { json: "김천", js: "김천", typ: r("PuneHedgehog") },
        { json: "구미-사곡", js: "구미-사곡", typ: r("Purple기타") },
        { json: "사곡-약목", js: "사곡-약목", typ: r("Purple기타") },
        { json: "약목-사곡", js: "약목-사곡", typ: r("Purple기타") },
        { json: "왜관-약목", js: "왜관-약목", typ: r("Purple기타") },
        { json: "약목-왜관", js: "약목-왜관", typ: r("Purple기타") },
        { json: "대구-동대구", js: "대구-동대구", typ: r("Purple기타") },
        { json: "가천-고모", js: "가천-고모", typ: r("PuneHedgehog") },
        { json: "고모-동대구", js: "고모-동대구", typ: r("Purple기타") },
        { json: "동대구-고모", js: "동대구-고모", typ: r("Purple기타") },
        { json: "고모-가천", js: "고모-가천", typ: r("PuneHedgehog") },
        { json: "청도-남성현", js: "청도-남성현", typ: r("Purple기타") },
        { json: "경산-가천", js: "경산-가천", typ: r("Purple기타") },
        { json: "가천-경산", js: "가천-경산", typ: r("Purple기타") },
        { json: "남성현-청도", js: "남성현-청도", typ: r("Purple기타") },
        { json: "삼성-경산", js: "삼성-경산", typ: r("Purple기타") },
        { json: "삼랑진-미전", js: "삼랑진-미전", typ: r("PuneHedgehog") },
        { json: "물금-원동", js: "물금-원동", typ: r("Purple기타") },
        { json: "원동-물금", js: "원동-물금", typ: r("Purple기타") },
        { json: "부산-부산진", js: "부산-부산진", typ: r("PuneHedgehog") },
        { json: "부산진-사상", js: "부산진-사상", typ: r("Purple기타") },
        { json: "부산-경부선종점", js: "부산-경부선종점", typ: r("PuneHedgehog") },
        { json: "부산", js: "부산", typ: r("PuneHedgehog") },
        { json: "부곡차량", js: "부곡차량", typ: r("PuneHedgehog") },
        { json: "의왕", js: "의왕", typ: r("PuneHedgehog") },
        { json: "대구차량", js: "대구차량", typ: r("PuneHedgehog") },
        { json: "동대구", js: "동대구", typ: r("PuneHedgehog") },
        { json: "신거-청도", js: "신거-청도", typ: r("Purple기타") },
        { json: "대전조차량", js: "대전조차량", typ: r("PuneHedgehog") },
        { json: "대전조차장", js: "대전조차장", typ: r("PuneHedgehog") },
        { json: "김천차량", js: "김천차량", typ: r("PuneHedgehog") },
        { json: "대신-아포", js: "대신-아포", typ: r("Purple기타") },
        { json: "아포-구미", js: "아포-구미", typ: r("Purple기타") },
        { json: "연화-왜관", js: "연화-왜관", typ: r("Purple기타") },
        { json: "신동-연화", js: "신동-연화", typ: r("Purple기타") },
        { json: "지천-신동", js: "지천-신동", typ: r("Purple기타") },
        { json: "신동-지천", js: "신동-지천", typ: r("Purple기타") },
        { json: "대구-서대구", js: "대구-서대구", typ: r("Purple기타") },
        { json: "서대구-대구", js: "서대구-대구", typ: r("Purple기타") },
        { json: "서대구-지천", js: "서대구-지천", typ: r("Purple기타") },
        { json: "지천-서대구", js: "지천-서대구", typ: r("Purple기타") },
        { json: "남성현-삼성", js: "남성현-삼성", typ: r("Purple기타") },
        { json: "삼성-남성현", js: "삼성-남성현", typ: r("Purple기타") },
        { json: "청도-신거", js: "청도-신거", typ: r("Purple기타") },
        { json: "상동-신거", js: "상동-신거", typ: r("Purple기타") },
        { json: "미전-밀양", js: "미전-밀양", typ: r("Purple기타") },
        { json: "화명-물금", js: "화명-물금", typ: r("Purple기타") },
        { json: "화명-구포", js: "화명-구포", typ: r("Purple기타") },
        { json: "구포-사상", js: "구포-사상", typ: r("Purple기타") },
    ], false),
    "금천구시흥연": o([
        { json: "_공항선", js: "_공항선", typ: r("PuneHedgehog") },
    ], false),
    "노량진용산": o([
        { json: "1", js: "1", typ: r("PuneHedgehog") },
        { json: "_1선", js: "_1선", typ: r("PuneHedgehog") },
    ], false),
    "부산진부산진": o([
        { json: "국철", js: "국철", typ: r("PuneHedgehog") },
    ], false),
    "사상부산진": o([
        { json: "_화물", js: "_화물", typ: r("Purple기타") },
    ], false),
    "서울용산": o([
        { json: "_1번", js: "_1번", typ: r("PuneHedgehog") },
    ], false),
    "용산서울": o([
        { json: "_강릉선", js: "_강릉선", typ: r("PuneHedgehog") },
    ], false),
    "제목없는폴더": o([
        { json: "밀양강철교", js: "밀양강철교", typ: r("PuneHedgehog") },
        { json: "밀양-상동", js: "밀양-상동", typ: r("Purple기타") },
    ], false),
    "천안두정": o([
        { json: "1", js: "1", typ: r("PuneHedgehog") },
    ], false),
    "Purple경북선": o([
        { json: "김천-옥산", js: "김천-옥산", typ: r("Purple기타") },
        { json: "옥산-청리", js: "옥산-청리", typ: r("Purple기타") },
        { json: "청리-상주", js: "청리-상주", typ: r("Purple기타") },
        { json: "상주-백원", js: "상주-백원", typ: r("Purple기타") },
        { json: "백원-함창", js: "백원-함창", typ: r("Purple기타") },
        { json: "함창-백원", js: "함창-백원", typ: r("Purple기타") },
        { json: "백원-상주", js: "백원-상주", typ: r("Purple기타") },
        { json: "상주-청리", js: "상주-청리", typ: r("Purple기타") },
        { json: "청리-옥산", js: "청리-옥산", typ: r("Purple기타") },
        { json: "옥산-김천", js: "옥산-김천", typ: r("Purple기타") },
        { json: "함창-점촌", js: "함창-점촌", typ: r("Purple기타") },
        { json: "점촌-용궁", js: "점촌-용궁", typ: r("Purple기타") },
        { json: "용궁-개포", js: "용궁-개포", typ: r("Purple기타") },
        { json: "개포-예천", js: "개포-예천", typ: r("Purple기타") },
        { json: "예천-어등", js: "예천-어등", typ: r("Purple기타") },
        { json: "어등-영주", js: "어등-영주", typ: r("Purple기타") },
        { json: "영주-어등", js: "영주-어등", typ: r("Purple기타") },
        { json: "어등-예천", js: "어등-예천", typ: r("Purple기타") },
        { json: "예천-개포", js: "예천-개포", typ: r("Purple기타") },
        { json: "개포-용궁", js: "개포-용궁", typ: r("Purple기타") },
        { json: "용궁-점촌", js: "용궁-점촌", typ: r("PuneHedgehog") },
        { json: "점촌-함창", js: "점촌-함창", typ: r("PuneHedgehog") },
        { json: "영주", js: "영주", typ: r("PuneHedgehog") },
    ], false),
    "Sticky경원선": o([
        { json: "왕십리-청량리", js: "왕십리-청량리", typ: r("왕십리청량리") },
        { json: "용산-이촌", js: "용산-이촌", typ: r("PuneHedgehog") },
        { json: "응봉-왕십리", js: "응봉-왕십리", typ: r("PuneHedgehog") },
        { json: "청량리-왕십리", js: "청량리-왕십리", typ: r("PuneHedgehog") },
        { json: "응봉-옥수", js: "응봉-옥수", typ: r("PuneHedgehog") },
        { json: "회기-외대앞", js: "회기-외대앞", typ: r("PuneHedgehog") },
        { json: "방학-도봉", js: "방학-도봉", typ: r("PuneHedgehog") },
        { json: "의정부-회룡", js: "의정부-회룡", typ: r("PuneHedgehog") },
        { json: "회룡-망월사", js: "회룡-망월사", typ: r("PuneHedgehog") },
        { json: "망월사-도봉산", js: "망월사-도봉산", typ: r("PuneHedgehog") },
        { json: "도봉산-도봉", js: "도봉산-도봉", typ: r("PuneHedgehog") },
        { json: "방학-창동", js: "방학-창동", typ: r("PuneHedgehog") },
        { json: "창동-녹천", js: "창동-녹천", typ: r("PuneHedgehog") },
        { json: "녹천-월계", js: "녹천-월계", typ: r("PuneHedgehog") },
        { json: "월계-광운대", js: "월계-광운대", typ: r("PuneHedgehog") },
        { json: "광운대-석계", js: "광운대-석계", typ: r("PuneHedgehog") },
        { json: "석계-신이문", js: "석계-신이문", typ: r("PuneHedgehog") },
        { json: "신이문-외대앞", js: "신이문-외대앞", typ: r("PuneHedgehog") },
        { json: "외대앞-회기", js: "외대앞-회기", typ: r("PuneHedgehog") },
        { json: "회기-1지청", js: "회기-1지청", typ: r("PuneHedgehog") },
        { json: "의정부-가능", js: "의정부-가능", typ: r("PuneHedgehog") },
        { json: "가능-녹양", js: "가능-녹양", typ: r("PuneHedgehog") },
        { json: "녹양-양주", js: "녹양-양주", typ: r("PuneHedgehog") },
        { json: "양주-마전", js: "양주-마전", typ: r("PuneHedgehog") },
        { json: "덕계-덕정", js: "덕계-덕정", typ: r("PuneHedgehog") },
        { json: "덕정-지행", js: "덕정-지행", typ: r("Purple기타") },
        { json: "지행-동두중", js: "지행-동두중", typ: r("PuneHedgehog") },
        { json: "동두중-보산", js: "동두중-보산", typ: r("PuneHedgehog") },
        { json: "보산-동두천", js: "보산-동두천", typ: r("PuneHedgehog") },
        { json: "덕계-마전", js: "덕계-마전", typ: r("Purple기타") },
        { json: "1지청-회기", js: "1지청-회기", typ: r("PuneHedgehog") },
        { json: "연천-신망리", js: "연천-신망리", typ: r("Purple기타") },
        { json: "대광리-신탄리", js: "대광리-신탄리", typ: r("Purple기타") },
        { json: "신탄리-백마고", js: "신탄리-백마고", typ: r("Purple기타") },
        { json: "신망리-대광리", js: "신망리-대광리", typ: r("Purple기타") },
        { json: "백마고-경원선종점", js: "백마고-경원선종점", typ: r("PuneHedgehog") },
        { json: "서빙고-이촌", js: "서빙고-이촌", typ: r("PuneHedgehog") },
        { json: "한남-서빙고", js: "한남-서빙고", typ: r("PuneHedgehog") },
        { json: "옥수-한남", js: "옥수-한남", typ: r("PuneHedgehog") },
    ], false),
    "왕십리청량리": o([
        { json: "_분당", js: "_분당", typ: r("PuneHedgehog") },
    ], false),
    "Purple경전선": o([
        { json: "한림정-낙동강", js: "한림정-낙동강", typ: r("낙동강한림정") },
        { json: "낙동강-한림정", js: "낙동강-한림정", typ: r("낙동강한림정") },
        { json: "순천-원창", js: "순천-원창", typ: r("Purple기타") },
        { json: "원창-구룡", js: "원창-구룡", typ: r("Purple기타") },
        { json: "구룡-벌교", js: "구룡-벌교", typ: r("Purple기타") },
        { json: "벌교-조성", js: "벌교-조성", typ: r("Purple기타") },
        { json: "조성-예당", js: "조성-예당", typ: r("Purple기타") },
        { json: "예당-득량", js: "예당-득량", typ: r("Purple기타") },
        { json: "득량-보성", js: "득량-보성", typ: r("Purple기타") },
        { json: "보성-광곡", js: "보성-광곡", typ: r("Purple기타") },
        { json: "광곡-보성", js: "광곡-보성", typ: r("Purple기타") },
        { json: "보성-득량", js: "보성-득량", typ: r("Purple기타") },
        { json: "득량-예당", js: "득량-예당", typ: r("Purple기타") },
        { json: "예당-조성", js: "예당-조성", typ: r("Purple기타") },
        { json: "조성-벌교", js: "조성-벌교", typ: r("Purple기타") },
        { json: "벌교-구룡", js: "벌교-구룡", typ: r("Purple기타") },
        { json: "구룡-원창", js: "구룡-원창", typ: r("Purple기타") },
        { json: "원창-순천", js: "원창-순천", typ: r("Purple기타") },
        { json: "광곡-명봉", js: "광곡-명봉", typ: r("Purple기타") },
        { json: "명봉-이양", js: "명봉-이양", typ: r("Purple기타") },
        { json: "이양-능주", js: "이양-능주", typ: r("Purple기타") },
        { json: "능주-화순", js: "능주-화순", typ: r("Purple기타") },
        { json: "화순-남평", js: "화순-남평", typ: r("Purple기타") },
        { json: "남평-효천", js: "남평-효천", typ: r("Purple기타") },
        { json: "효천-서광주", js: "효천-서광주", typ: r("Purple기타") },
        { json: "서광주-동송정", js: "서광주-동송정", typ: r("Purple기타") },
        { json: "동송정-북송분", js: "동송정-북송분", typ: r("PuneHedgehog") },
        { json: "북송분-동송정", js: "북송분-동송정", typ: r("PuneHedgehog") },
        { json: "동송정-서광주", js: "동송정-서광주", typ: r("Purple기타") },
        { json: "서광주-효천", js: "서광주-효천", typ: r("Purple기타") },
        { json: "효천-남평", js: "효천-남평", typ: r("Purple기타") },
        { json: "남평-화순", js: "남평-화순", typ: r("Purple기타") },
        { json: "화순-능주", js: "화순-능주", typ: r("Purple기타") },
        { json: "능주-이양", js: "능주-이양", typ: r("Purple기타") },
        { json: "이양-명봉", js: "이양-명봉", typ: r("Purple기타") },
        { json: "명봉-광곡", js: "명봉-광곡", typ: r("Purple기타") },
        { json: "북송분-광주송", js: "북송분-광주송", typ: r("PuneHedgehog") },
        { json: "평화-순천", js: "평화-순천", typ: r("Purple기타") },
        { json: "광양-평화", js: "광양-평화", typ: r("Purple기타") },
        { json: "진상-광양", js: "진상-광양", typ: r("Purple기타") },
        { json: "횡천-하동", js: "횡천-하동", typ: r("Purple기타") },
        { json: "진상-하동", js: "진상-하동", typ: r("Purple기타") },
        { json: "낙동강-삼랑진", js: "낙동강-삼랑진", typ: r("PuneHedgehog") },
        { json: "삼랑진-낙동강", js: "삼랑진-낙동강", typ: r("PuneHedgehog") },
        { json: "횡천-북천", js: "횡천-북천", typ: r("Purple기타") },
        { json: "북천-완사", js: "북천-완사", typ: r("Purple기타") },
        { json: "한림정-진영", js: "한림정-진영", typ: r("Purple기타") },
        { json: "창원중-진례", js: "창원중-진례", typ: r("Purple기타") },
        { json: "진례-진영", js: "진례-진영", typ: r("Purple기타") },
        { json: "중리-함안", js: "중리-함안", typ: r("Purple기타") },
        { json: "중리-마산", js: "중리-마산", typ: r("Purple기타") },
        { json: "마산-창원", js: "마산-창원", typ: r("Purple기타") },
        { json: "창원-용강", js: "창원-용강", typ: r("Purple기타") },
        { json: "용강-창원중", js: "용강-창원중", typ: r("Purple기타") },
        { json: "함안-군북", js: "함안-군북", typ: r("Purple기타") },
        { json: "군북-반성", js: "군북-반성", typ: r("Purple기타") },
        { json: "반성-진주", js: "반성-진주", typ: r("Purple기타") },
        { json: "완사-진주", js: "완사-진주", typ: r("Purple기타") },
    ], false),
    "낙동강한림정": o([
        { json: "_경전", js: "_경전", typ: r("Purple기타") },
    ], false),
    "Purple경춘선": o([
        { json: "신내-망우", js: "신내-망우", typ: r("PuneHedgehog") },
        { json: "상봉-망우", js: "상봉-망우", typ: r("상봉망우") },
        { json: "갈매-신내", js: "갈매-신내", typ: r("PuneHedgehog") },
        { json: "별내-갈매", js: "별내-갈매", typ: r("PuneHedgehog") },
        { json: "청평-상천", js: "청평-상천", typ: r("Purple기타") },
        { json: "상천-가평", js: "상천-가평", typ: r("Purple기타") },
        { json: "가평-굴봉산", js: "가평-굴봉산", typ: r("Purple기타") },
        { json: "굴봉산-백양리", js: "굴봉산-백양리", typ: r("PuneHedgehog") },
        { json: "백양리-강촌", js: "백양리-강촌", typ: r("Purple기타") },
        { json: "강촌-김유정", js: "강촌-김유정", typ: r("Purple기타") },
        { json: "김유정-남춘천", js: "김유정-남춘천", typ: r("Purple기타") },
        { json: "남춘천-춘천", js: "남춘천-춘천", typ: r("PuneHedgehog") },
        { json: "대성리-마석", js: "대성리-마석", typ: r("Purple기타") },
        { json: "마석-천마산", js: "마석-천마산", typ: r("PuneHedgehog") },
        { json: "천마산-평내호", js: "천마산-평내호", typ: r("Purple기타") },
        { json: "평내호-금곡", js: "평내호-금곡", typ: r("Purple기타") },
        { json: "금곡-사릉", js: "금곡-사릉", typ: r("Purple기타") },
        { json: "사릉-퇴계원", js: "사릉-퇴계원", typ: r("Purple기타") },
        { json: "퇴계원-별내", js: "퇴계원-별내", typ: r("PuneHedgehog") },
        { json: "춘천-경춘선종점", js: "춘천-경춘선종점", typ: r("PuneHedgehog") },
        { json: "대성리-청평", js: "대성리-청평", typ: r("Purple기타") },
    ], false),
    "상봉망우": o([
        { json: "_경춘", js: "_경춘", typ: r("PuneHedgehog") },
    ], false),
    "Purple대구선": o([
        { json: "금호-북영분", js: "금호-북영분", typ: r("PuneHedgehog") },
        { json: "금호-하양", js: "금호-하양", typ: r("PuneHedgehog") },
        { json: "하양-청천", js: "하양-청천", typ: r("Purple기타") },
        { json: "청천-금강", js: "청천-금강", typ: r("Purple기타") },
        { json: "금강-청천", js: "금강-청천", typ: r("Purple기타") },
        { json: "청천-하양", js: "청천-하양", typ: r("Purple기타") },
        { json: "하양-금호", js: "하양-금호", typ: r("PuneHedgehog") },
        { json: "북영분-영천", js: "북영분-영천", typ: r("PuneHedgehog") },
        { json: "영천-북영분", js: "영천-북영분", typ: r("PuneHedgehog") },
        { json: "북영분-금호", js: "북영분-금호", typ: r("PuneHedgehog") },
        { json: "가천-금강", js: "가천-금강", typ: r("Purple기타") },
        { json: "금강-가천", js: "금강-가천", typ: r("Purple기타") },
    ], false),
    "Tentacled동해북부선": o([
        { json: "제진-군분선", js: "제진-군분선", typ: r("Purple기타") },
        { json: "동해북부선시점-제진", js: "동해북부선시점-제진", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy영동선": o([
        { json: "영주-북주분", js: "영주-북주분", typ: r("PuneHedgehog") },
        { json: "북주분-문단", js: "북주분-문단", typ: r("Purple기타") },
        { json: "문단-봉화", js: "문단-봉화", typ: r("Purple기타") },
        { json: "봉화-거촌", js: "봉화-거촌", typ: r("Purple기타") },
        { json: "거촌-봉성", js: "거촌-봉성", typ: r("Purple기타") },
        { json: "봉성-법전", js: "봉성-법전", typ: r("Purple기타") },
        { json: "법전-봉성", js: "법전-봉성", typ: r("Purple기타") },
        { json: "봉성-거촌", js: "봉성-거촌", typ: r("Purple기타") },
        { json: "거촌-봉화", js: "거촌-봉화", typ: r("Purple기타") },
        { json: "봉화-문단", js: "봉화-문단", typ: r("Purple기타") },
        { json: "문단-북주분", js: "문단-북주분", typ: r("Purple기타") },
        { json: "법전-춘양", js: "법전-춘양", typ: r("Purple기타") },
        { json: "춘양-녹동", js: "춘양-녹동", typ: r("Purple기타") },
        { json: "녹동-임기", js: "녹동-임기", typ: r("Purple기타") },
        { json: "임기-현동", js: "임기-현동", typ: r("Purple기타") },
        { json: "현동-분천", js: "현동-분천", typ: r("Purple기타") },
        { json: "분천-비동", js: "분천-비동", typ: r("Purple기타") },
        { json: "양원-비동", js: "양원-비동", typ: r("PuneHedgehog") },
        { json: "비동-분천", js: "비동-분천", typ: r("Purple기타") },
        { json: "분천-현동", js: "분천-현동", typ: r("Purple기타") },
        { json: "현동-임기", js: "현동-임기", typ: r("Purple기타") },
        { json: "임기-녹동", js: "임기-녹동", typ: r("Purple기타") },
        { json: "녹동-춘양", js: "녹동-춘양", typ: r("Purple기타") },
        { json: "춘양-법전", js: "춘양-법전", typ: r("Purple기타") },
        { json: "양원-승부", js: "양원-승부", typ: r("Purple기타") },
        { json: "승부-석포", js: "승부-석포", typ: r("Purple기타") },
        { json: "석포-승부", js: "석포-승부", typ: r("Purple기타") },
        { json: "솔안-동백산", js: "솔안-동백산", typ: r("Purple기타") },
        { json: "도계솔-솔안", js: "도계솔-솔안", typ: r("Purple기타") },
        { json: "솔안-도계솔", js: "솔안-도계솔", typ: r("Purple기타") },
        { json: "동백산-솔안", js: "동백산-솔안", typ: r("Purple기타") },
        { json: "동백산-백산", js: "동백산-백산", typ: r("PuneHedgehog") },
        { json: "백산-동백산", js: "백산-동백산", typ: r("PuneHedgehog") },
        { json: "백산-철암", js: "백산-철암", typ: r("Purple기타") },
        { json: "철암-백산", js: "철암-백산", typ: r("Purple기타") },
        { json: "철암-동점", js: "철암-동점", typ: r("Purple기타") },
        { json: "동점-철암", js: "동점-철암", typ: r("Purple기타") },
        { json: "동점-석포", js: "동점-석포", typ: r("Purple기타") },
        { json: "석포-동점", js: "석포-동점", typ: r("Purple기타") },
        { json: "도계솔-도계", js: "도계솔-도계", typ: r("PuneHedgehog") },
        { json: "도계-도계솔", js: "도계-도계솔", typ: r("PuneHedgehog") },
        { json: "도계-고사리", js: "도계-고사리", typ: r("Purple기타") },
        { json: "고사리-하고사", js: "고사리-하고사", typ: r("PuneHedgehog") },
        { json: "하고사-고사리", js: "하고사-고사리", typ: r("PuneHedgehog") },
        { json: "고사리-도계", js: "고사리-도계", typ: r("Purple기타") },
        { json: "하고사-마차리", js: "하고사-마차리", typ: r("Purple기타") },
        { json: "마차리-신기", js: "마차리-신기", typ: r("Purple기타") },
        { json: "신기-상정", js: "신기-상정", typ: r("Purple기타") },
        { json: "상정-미로", js: "상정-미로", typ: r("Purple기타") },
        { json: "미로-도경리", js: "미로-도경리", typ: r("Purple기타") },
        { json: "도경리-미로", js: "도경리-미로", typ: r("Purple기타") },
        { json: "미로-상정", js: "미로-상정", typ: r("Purple기타") },
        { json: "상정-신기", js: "상정-신기", typ: r("Purple기타") },
        { json: "신기-마차리", js: "신기-마차리", typ: r("Purple기타") },
        { json: "마차리-하고사", js: "마차리-하고사", typ: r("Purple기타") },
        { json: "도경리-동해", js: "도경리-동해", typ: r("Purple기타") },
        { json: "동해-묵호", js: "동해-묵호", typ: r("Purple기타") },
        { json: "묵호-망상", js: "묵호-망상", typ: r("Purple기타") },
        { json: "망상해-옥계", js: "망상해-옥계", typ: r("Purple기타") },
        { json: "옥계-정동진", js: "옥계-정동진", typ: r("Purple기타") },
        { json: "정동진-안인", js: "정동진-안인", typ: r("Purple기타") },
        { json: "안인-정동진", js: "안인-정동진", typ: r("Purple기타") },
        { json: "정동진-옥계", js: "정동진-옥계", typ: r("Purple기타") },
        { json: "옥계-망상해", js: "옥계-망상해", typ: r("Purple기타") },
        { json: "망상해-망상", js: "망상해-망상", typ: r("PuneHedgehog") },
        { json: "망상-묵호", js: "망상-묵호", typ: r("Purple기타") },
        { json: "묵호-동해", js: "묵호-동해", typ: r("Purple기타") },
        { json: "동해-도경리", js: "동해-도경리", typ: r("Purple기타") },
        { json: "안인-청량C", js: "안인-청량C", typ: r("PuneHedgehog") },
        { json: "청량C-청량신", js: "청량C-청량신", typ: r("PuneHedgehog") },
        { json: "동백산", js: "동백산", typ: r("PuneHedgehog") },
        { json: "승부-양원", js: "승부-양원", typ: r("Purple기타") },
        { json: "청량C-안인", js: "청량C-안인", typ: r("PuneHedgehog") },
    ], false),
    "원주강릉선": o([
        { json: "대관령-남강릉", js: "대관령-남강릉", typ: r("PuneHedgehog") },
        { json: "만종-횡성", js: "만종-횡성", typ: r("PuneHedgehog") },
        { json: "강릉-청량신", js: "강릉-청량신", typ: r("Purple기타") },
        { json: "서원주-만종", js: "서원주-만종", typ: r("Purple기타") },
        { json: "강릉-원주강릉선종점", js: "강릉-원주강릉선종점", typ: r("PuneHedgehog") },
        { json: "강릉분-남강릉", js: "강릉분-남강릉", typ: r("PuneHedgehog") },
        { json: "강릉분-청량B", js: "강릉분-청량B", typ: r("PuneHedgehog") },
        { json: "청량B-청량신", js: "청량B-청량신", typ: r("PuneHedgehog") },
        { json: "서원주-동화", js: "서원주-동화", typ: r("PuneHedgehog") },
    ], false),
    "Purple장항선": o([
        { json: "신창-온양온", js: "신창-온양온", typ: r("Purple기타") },
        { json: "온양온-신창", js: "온양온-신창", typ: r("온양온신창") },
        { json: "대야-군산분", js: "대야-군산분", typ: r("PuneHedgehog") },
        { json: "익산-목천신", js: "익산-목천신", typ: r("PuneHedgehog") },
        { json: "대야-목천신", js: "대야-목천신", typ: r("Purple기타") },
        { json: "장항-군산", js: "장항-군산", typ: r("Purple기타") },
        { json: "군산분-군산", js: "군산분-군산", typ: r("Purple기타") },
        { json: "판교-웅천", js: "판교-웅천", typ: r("Purple기타") },
        { json: "판교-서천", js: "판교-서천", typ: r("Purple기타") },
        { json: "서천-장항", js: "서천-장항", typ: r("Purple기타") },
        { json: "남포-웅천", js: "남포-웅천", typ: r("Purple기타") },
        { json: "신성-광천", js: "신성-광천", typ: r("Purple기타") },
        { json: "광천-원죽", js: "광천-원죽", typ: r("Purple기타") },
        { json: "원죽-청소", js: "원죽-청소", typ: r("Purple기타") },
        { json: "청소-주포", js: "청소-주포", typ: r("Purple기타") },
        { json: "남포-대천", js: "남포-대천", typ: r("Purple기타") },
        { json: "대천-주포", js: "대천-주포", typ: r("Purple기타") },
        { json: "주포-청소", js: "주포-청소", typ: r("Purple기타") },
        { json: "청소-원죽", js: "청소-원죽", typ: r("Purple기타") },
        { json: "원죽-광천", js: "원죽-광천", typ: r("Purple기타") },
        { json: "광천-신성", js: "광천-신성", typ: r("Purple기타") },
        { json: "신성-홍성", js: "신성-홍성", typ: r("Purple기타") },
        { json: "도고온-신창", js: "도고온-신창", typ: r("Purple기타") },
        { json: "신창-도고온", js: "신창-도고온", typ: r("Purple기타") },
        { json: "예산-신례원", js: "예산-신례원", typ: r("Purple기타") },
        { json: "신례원-도고온", js: "신례원-도고온", typ: r("Purple기타") },
        { json: "화양-삽교", js: "화양-삽교", typ: r("Purple기타") },
        { json: "홍성-화양", js: "홍성-화양", typ: r("Purple기타") },
        { json: "삽교-예산", js: "삽교-예산", typ: r("Purple기타") },
        { json: "천안차량", js: "천안차량", typ: r("PuneHedgehog") },
        { json: "아산-쌍용나", js: "아산-쌍용나", typ: r("PuneHedgehog") },
        { json: "쌍용나-봉명", js: "쌍용나-봉명", typ: r("PuneHedgehog") },
        { json: "봉명-천안", js: "봉명-천안", typ: r("PuneHedgehog") },
        { json: "신창", js: "신창", typ: r("PuneHedgehog") },
        { json: "아산-탕정", js: "아산-탕정", typ: r("PuneHedgehog") },
        { json: "탕정-배방", js: "탕정-배방", typ: r("Purple기타") },
        { json: "아산풍-아산", js: "아산풍-아산", typ: r("PuneHedgehog") },
        { json: "아산풍-온양온", js: "아산풍-온양온", typ: r("PuneHedgehog") },
    ], false),
    "온양온신창": o([
        { json: "_장항", js: "_장항", typ: r("PuneHedgehog") },
    ], false),
    "Purple중부내륙선": o([
        { json: "아미-부발", js: "아미-부발", typ: r("Purple기타") },
        { json: "아미-가남", js: "아미-가남", typ: r("PuneHedgehog") },
        { json: "가남-아미", js: "가남-아미", typ: r("PuneHedgehog") },
        { json: "금가-충주", js: "금가-충주", typ: r("PuneHedgehog") },
        { json: "부발-아미", js: "부발-아미", typ: r("Purple기타") },
    ], false),
    "Fluffy충북선": o([
        { json: "청주-오송", js: "청주-오송", typ: r("Purple기타") },
        { json: "오송-조치원", js: "오송-조치원", typ: r("Purple기타") },
        { json: "청주-오근장", js: "청주-오근장", typ: r("Purple기타") },
        { json: "오근장-청주공", js: "오근장-청주공", typ: r("PuneHedgehog") },
        { json: "청주공-내수", js: "청주공-내수", typ: r("Purple기타") },
        { json: "내수-증평", js: "내수-증평", typ: r("Purple기타") },
        { json: "보천-음성", js: "보천-음성", typ: r("Purple기타") },
        { json: "달천-충주", js: "달천-충주", typ: r("Purple기타") },
        { json: "목행-동량", js: "목행-동량", typ: r("Purple기타") },
        { json: "동량-삼탄", js: "동량-삼탄", typ: r("Purple기타") },
        { json: "삼탄-공전", js: "삼탄-공전", typ: r("Purple기타") },
        { json: "공전-봉양", js: "공전-봉양", typ: r("Purple기타") },
        { json: "음성-보천", js: "음성-보천", typ: r("Purple기타") },
        { json: "주덕-소이", js: "주덕-소이", typ: r("Purple기타") },
        { json: "달천-주덕", js: "달천-주덕", typ: r("Purple기타") },
        { json: "충주-달천", js: "충주-달천", typ: r("Purple기타") },
        { json: "동량-목행", js: "동량-목행", typ: r("Purple기타") },
        { json: "삼탄-동량", js: "삼탄-동량", typ: r("Purple기타") },
        { json: "공전-삼탄", js: "공전-삼탄", typ: r("Purple기타") },
        { json: "봉양-공전", js: "봉양-공전", typ: r("Purple기타") },
        { json: "목행-충주", js: "목행-충주", typ: r("Purple기타") },
        { json: "소이-음성", js: "소이-음성", typ: r("Purple기타") },
        { json: "보천-도안", js: "보천-도안", typ: r("Purple기타") },
        { json: "도안-증평", js: "도안-증평", typ: r("Purple기타") },
    ], false),
    "Purple태백선": o([
        { json: "제천-입석리", js: "제천-입석리", typ: r("Purple기타") },
        { json: "입석리-쌍룡", js: "입석리-쌍룡", typ: r("Purple기타") },
        { json: "쌍룡-연당", js: "쌍룡-연당", typ: r("Purple기타") },
        { json: "연당-청령포", js: "연당-청령포", typ: r("Purple기타") },
        { json: "청령포-영월", js: "청령포-영월", typ: r("PuneHedgehog") },
        { json: "영월-청령포", js: "영월-청령포", typ: r("Purple기타") },
        { json: "청령포-연당", js: "청령포-연당", typ: r("Purple기타") },
        { json: "연당-쌍룡", js: "연당-쌍룡", typ: r("Purple기타") },
        { json: "쌍룡-입석리", js: "쌍룡-입석리", typ: r("Purple기타") },
        { json: "입석리-제천", js: "입석리-제천", typ: r("Purple기타") },
        { json: "연하-석항", js: "연하-석항", typ: r("Purple기타") },
        { json: "석항-예미", js: "석항-예미", typ: r("PuneHedgehog") },
        { json: "예미-석항", js: "예미-석항", typ: r("Purple기타") },
        { json: "석항-연하", js: "석항-연하", typ: r("Purple기타") },
        { json: "예미-조동", js: "예미-조동", typ: r("Purple기타") },
        { json: "조동-자미원", js: "조동-자미원", typ: r("Purple기타") },
        { json: "자미원-민둥산", js: "자미원-민둥산", typ: r("Purple기타") },
        { json: "민둥산-자미원", js: "민둥산-자미원", typ: r("Purple기타") },
        { json: "사북-고한", js: "사북-고한", typ: r("Purple기타") },
        { json: "고한-추전", js: "고한-추전", typ: r("Purple기타") },
        { json: "추전-태백", js: "추전-태백", typ: r("Purple기타") },
        { json: "태백-추전", js: "태백-추전", typ: r("Purple기타") },
        { json: "추전-고한", js: "추전-고한", typ: r("Purple기타") },
        { json: "고한-사북", js: "고한-사북", typ: r("Purple기타") },
        { json: "사북-민둥산", js: "사북-민둥산", typ: r("Purple기타") },
        { json: "태백분-문곡", js: "태백분-문곡", typ: r("Purple기타") },
        { json: "문곡-태백", js: "문곡-태백", typ: r("PuneHedgehog") },
        { json: "태백-문곡", js: "태백-문곡", typ: r("Purple기타") },
        { json: "문곡-태백분", js: "문곡-태백분", typ: r("Purple기타") },
        { json: "동백산-태백분", js: "동백산-태백분", typ: r("PuneHedgehog") },
        { json: "태백분-동백산", js: "태백분-동백산", typ: r("PuneHedgehog") },
        { json: "탄부-연하", js: "탄부-연하", typ: r("Purple기타") },
        { json: "영월-탄부", js: "영월-탄부", typ: r("PuneHedgehog") },
        { json: "연하-탄부", js: "연하-탄부", typ: r("Purple기타") },
        { json: "탄부-영월", js: "탄부-영월", typ: r("PuneHedgehog") },
        { json: "입석리", js: "입석리", typ: r("PuneHedgehog") },
        { json: "자미원-조동", js: "자미원-조동", typ: r("Purple기타") },
        { json: "민둥산-사북", js: "민둥산-사북", typ: r("Purple기타") },
    ], false),
    "Tentacled호남선": o([
        { json: "익산-익산분", js: "익산-익산분", typ: r("PuneHedgehog") },
        { json: "계룡-흑석리", js: "계룡-흑석리", typ: r("Purple기타") },
        { json: "가수원-서대전", js: "가수원-서대전", typ: r("Purple기타") },
        { json: "개태사-계룡", js: "개태사-계룡", typ: r("Purple기타") },
        { json: "용동-함열", js: "용동-함열", typ: r("Purple기타") },
        { json: "황등-익산", js: "황등-익산", typ: r("Purple기타") },
        { json: "익산-황등", js: "익산-황등", typ: r("Purple기타") },
        { json: "용동-강경", js: "용동-강경", typ: r("Purple기타") },
        { json: "강경-채운", js: "강경-채운", typ: r("Purple기타") },
        { json: "채운-논산", js: "채운-논산", typ: r("Purple기타") },
        { json: "서대전-대전조", js: "서대전-대전조", typ: r("Purple기타") },
        { json: "흑석리-계룡", js: "흑석리-계룡", typ: r("Purple기타") },
        { json: "서대전-가수원", js: "서대전-가수원", typ: r("Purple기타") },
        { json: "계룡-개태사", js: "계룡-개태사", typ: r("Purple기타") },
        { json: "채운-강경", js: "채운-강경", typ: r("Purple기타") },
        { json: "강경-용동", js: "강경-용동", typ: r("Purple기타") },
        { json: "함열-용동", js: "함열-용동", typ: r("Purple기타") },
        { json: "익산분-부용", js: "익산분-부용", typ: r("Purple기타") },
        { json: "부용-익산분", js: "부용-익산분", typ: r("Purple기타") },
        { json: "익산분-익산", js: "익산분-익산", typ: r("PuneHedgehog") },
        { json: "초강-신태인", js: "초강-신태인", typ: r("Purple기타") },
        { json: "안평-장성", js: "안평-장성", typ: r("Purple기타") },
        { json: "하남-임곡", js: "하남-임곡", typ: r("Purple기타") },
        { json: "신태인-초강", js: "신태인-초강", typ: r("Purple기타") },
        { json: "광주송-노안", js: "광주송-노안", typ: r("Purple기타") },
        { json: "나주-다시", js: "나주-다시", typ: r("PuneHedgehog") },
        { json: "함평-고막원", js: "함평-고막원", typ: r("Purple기타") },
        { json: "노안-나주", js: "노안-나주", typ: r("PuneHedgehog") },
        { json: "목포-호남선종점", js: "목포-호남선종점", typ: r("PuneHedgehog") },
        { json: "고막원-함평", js: "고막원-함평", typ: r("Purple기타") },
        { json: "노안-광주송", js: "노안-광주송", typ: r("PuneHedgehog") },
        { json: "목포", js: "목포", typ: r("PuneHedgehog") },
        { json: "목포차량", js: "목포차량", typ: r("PuneHedgehog") },
        { json: "다시-나주", js: "다시-나주", typ: r("PuneHedgehog") },
        { json: "나주-노안", js: "나주-노안", typ: r("PuneHedgehog") },
        { json: "익산", js: "익산", typ: r("PuneHedgehog") },
        { json: "익산차량", js: "익산차량", typ: r("PuneHedgehog") },
        { json: "대전조-서대전", js: "대전조-서대전", typ: r("Purple기타") },
        { json: "흑석리-가수원", js: "흑석리-가수원", typ: r("Purple기타") },
        { json: "개태사-연산", js: "개태사-연산", typ: r("Purple기타") },
        { json: "부황-연산", js: "부황-연산", typ: r("Purple기타") },
        { json: "황등-함열", js: "황등-함열", typ: r("Purple기타") },
        { json: "부황-논산", js: "부황-논산", typ: r("PuneHedgehog") },
        { json: "와룡-부용", js: "와룡-부용", typ: r("Purple기타") },
        { json: "김제-와룡", js: "김제-와룡", typ: r("Purple기타") },
        { json: "김제-감곡", js: "김제-감곡", typ: r("Purple기타") },
        { json: "감곡-신태인", js: "감곡-신태인", typ: r("Purple기타") },
        { json: "초강-정읍", js: "초강-정읍", typ: r("Purple기타") },
        { json: "정읍-천원", js: "정읍-천원", typ: r("Purple기타") },
        { json: "천원-노령", js: "천원-노령", typ: r("Purple기타") },
        { json: "노령-백양사", js: "노령-백양사", typ: r("Purple기타") },
        { json: "백양사-안평", js: "백양사-안평", typ: r("Purple기타") },
        { json: "임곡-장성", js: "임곡-장성", typ: r("Purple기타") },
        { json: "북송정-하남", js: "북송정-하남", typ: r("PuneHedgehog") },
        { json: "북송정-광주송", js: "북송정-광주송", typ: r("PuneHedgehog") },
        { json: "무안-함평", js: "무안-함평", typ: r("Purple기타") },
        { json: "무안-몽탄", js: "무안-몽탄", typ: r("Purple기타") },
        { json: "임성리-일로", js: "임성리-일로", typ: r("Purple기타") },
        { json: "목포-임성리", js: "목포-임성리", typ: r("Purple기타") },
        { json: "몽탄-일로", js: "몽탄-일로", typ: r("Purple기타") },
    ], false),
    "Tentacled고속선": o([
        { json: "주식회사 SR", js: "주식회사 SR", typ: r("고속선_주식회사Sr") },
        { json: "한국철도공사", js: "한국철도공사", typ: r("Ambitious한국철도공사") },
    ], false),
    "고속선_주식회사Sr": o([
        { json: "수서평택고속선", js: "수서평택고속선", typ: r("PuneHedgehog") },
    ], false),
    "Ambitious한국철도공사": o([
        { json: "경부고속선", js: "경부고속선", typ: r("Fluffy경부고속선") },
        { json: "호남고속선", js: "호남고속선", typ: r("호남고속선") },
    ], false),
    "Fluffy경부고속선": o([
        { json: "광명-시흥연", js: "광명-시흥연", typ: r("PuneHedgehog") },
        { json: "시흥연-광명", js: "시흥연-광명", typ: r("PuneHedgehog") },
        { json: "신경분-신경주", js: "신경분-신경주", typ: r("Purple기타") },
        { json: "신경주-신경분", js: "신경주-신경분", typ: r("Purple기타") },
        { json: "신경주-울산", js: "신경주-울산", typ: r("Purple기타") },
        { json: "울산-신경주", js: "울산-신경주", typ: r("Purple기타") },
        { json: "약목기지", js: "약목기지", typ: r("PuneHedgehog") },
        { json: "광명", js: "광명", typ: r("PuneHedgehog") },
        { json: "화성IEC-광명", js: "화성IEC-광명", typ: r("Purple기타") },
        { json: "SR분-고덕IEC", js: "SR분-고덕IEC", typ: r("Purple기타") },
        { json: "광명-화성IEC", js: "광명-화성IEC", typ: r("Purple기타") },
        { json: "화성IEC-고덕IEC", js: "화성IEC-고덕IEC", typ: r("Purple기타") },
        { json: "고덕IEC-화성IEC", js: "고덕IEC-화성IEC", typ: r("Purple기타") },
        { json: "고덕IEC-SR분", js: "고덕IEC-SR분", typ: r("Purple기타") },
        { json: "SR분-천안아", js: "SR분-천안아", typ: r("Purple기타") },
        { json: "천안아-SR분", js: "천안아-SR분", typ: r("Purple기타") },
        { json: "천안아-오송", js: "천안아-오송", typ: r("Purple기타") },
        { json: "오송-천안아", js: "오송-천안아", typ: r("Purple기타") },
        { json: "오송-신탄진IEC", js: "오송-신탄진IEC", typ: r("Purple기타") },
        { json: "대전북-오송", js: "대전북-오송", typ: r("Purple기타") },
        { json: "신탄진IEC-오송", js: "신탄진IEC-오송", typ: r("Purple기타") },
        { json: "오송-대전북", js: "오송-대전북", typ: r("Purple기타") },
        { json: "대전남-영동IEC", js: "대전남-영동IEC", typ: r("Purple기타") },
        { json: "영동IEC-대전남", js: "영동IEC-대전남", typ: r("Purple기타") },
        { json: "김천기지", js: "김천기지", typ: r("PuneHedgehog") },
        { json: "김천IEC", js: "김천IEC", typ: r("PuneHedgehog") },
        { json: "영동IEC", js: "영동IEC", typ: r("PuneHedgehog") },
        { json: "신탄진IEC", js: "신탄진IEC", typ: r("PuneHedgehog") },
        { json: "화성IEC", js: "화성IEC", typ: r("PuneHedgehog") },
        { json: "화성기지", js: "화성기지", typ: r("PuneHedgehog") },
        { json: "고덕IEC", js: "고덕IEC", typ: r("PuneHedgehog") },
        { json: "영동IEC-김천IEC", js: "영동IEC-김천IEC", typ: r("Purple기타") },
        { json: "김천IEC-영동IEC", js: "김천IEC-영동IEC", typ: r("Purple기타") },
        { json: "김천IEC-김천구", js: "김천IEC-김천구", typ: r("Purple기타") },
        { json: "김천구-김천IEC", js: "김천구-김천IEC", typ: r("Purple기타") },
        { json: "칠곡IEC", js: "칠곡IEC", typ: r("PuneHedgehog") },
        { json: "신동연-칠곡IEC", js: "신동연-칠곡IEC", typ: r("Purple기타") },
        { json: "칠곡IEC-신동연", js: "칠곡IEC-신동연", typ: r("Purple기타") },
        { json: "칠곡IEC-김천구", js: "칠곡IEC-김천구", typ: r("Purple기타") },
        { json: "김천구-칠곡IEC", js: "김천구-칠곡IEC", typ: r("Purple기타") },
        { json: "신동연-대구북", js: "신동연-대구북", typ: r("Purple기타") },
        { json: "대구북-신동연", js: "대구북-신동연", typ: r("Purple기타") },
        { json: "고모IEC", js: "고모IEC", typ: r("PuneHedgehog") },
        { json: "대구남-고모IEC", js: "대구남-고모IEC", typ: r("Purple기타") },
        { json: "고모IEC-대구남", js: "고모IEC-대구남", typ: r("Purple기타") },
        { json: "고모IEC-신경분", js: "고모IEC-신경분", typ: r("Purple기타") },
        { json: "신경분-고모IEC", js: "신경분-고모IEC", typ: r("Purple기타") },
        { json: "신경주", js: "신경주", typ: r("PuneHedgehog") },
        { json: "노포IEC", js: "노포IEC", typ: r("PuneHedgehog") },
        { json: "부전지-노포IEC", js: "부전지-노포IEC", typ: r("Purple기타") },
        { json: "노포IEC-울산", js: "노포IEC-울산", typ: r("Purple기타") },
        { json: "울산-노포IEC", js: "울산-노포IEC", typ: r("Purple기타") },
        { json: "부전지-부산북", js: "부전지-부산북", typ: r("Purple기타") },
        { json: "부산북-부전지", js: "부산북-부전지", typ: r("Purple기타") },
        { json: "노포IEC-부전지", js: "노포IEC-부전지", typ: r("Purple기타") },
    ], false),
    "호남고속선": o([
        { json: "오송-영곡IEC", js: "오송-영곡IEC", typ: r("Purple기타") },
        { json: "영곡IEC-오송", js: "영곡IEC-오송", typ: r("Purple기타") },
        { json: "영곡IEC", js: "영곡IEC", typ: r("PuneHedgehog") },
        { json: "공주-영곡IEC", js: "공주-영곡IEC", typ: r("Purple기타") },
        { json: "영곡IEC-공주", js: "영곡IEC-공주", typ: r("Purple기타") },
        { json: "용동IEC", js: "용동IEC", typ: r("PuneHedgehog") },
        { json: "용동IEC-공주", js: "용동IEC-공주", typ: r("Purple기타") },
        { json: "공주-용동IEC", js: "공주-용동IEC", typ: r("Purple기타") },
        { json: "용동IEC-익산북", js: "용동IEC-익산북", typ: r("Purple기타") },
        { json: "익산북-용동IEC", js: "익산북-용동IEC", typ: r("Purple기타") },
        { json: "익산남-정읍", js: "익산남-정읍", typ: r("Purple기타") },
        { json: "모암IEC", js: "모암IEC", typ: r("PuneHedgehog") },
        { json: "모암IEC-광북연", js: "모암IEC-광북연", typ: r("Purple기타") },
        { json: "모암IEC-정읍", js: "모암IEC-정읍", typ: r("Purple기타") },
        { json: "정읍-모암IEC", js: "정읍-모암IEC", typ: r("Purple기타") },
        { json: "광북연-모암IEC", js: "광북연-모암IEC", typ: r("Purple기타") },
        { json: "정읍-익산남", js: "정읍-익산남", typ: r("Purple기타") },
    ], false),
    "Hilarious궤도선": o([
        { json: "한국철도기술연구원", js: "한국철도기술연구원", typ: r("궤도선_한국철도기술연구원") },
    ], false),
    "궤도선_한국철도기술연구원": o([
        { json: "K-AGT시험선", js: "K-AGT시험선", typ: r("PuneHedgehog") },
    ], false),
    "국철_기타": o([
        { json: "한국철도기술연구원", js: "한국철도기술연구원", typ: r("기타_한국철도기술연구원") },
    ], false),
    "기타_한국철도기술연구원": o([
        { json: "철도종합시험선로", js: "철도종합시험선로", typ: r("철도종합시험선로") },
    ], false),
    "철도종합시험선로": o([
        { json: "시험1-시험2", js: "시험1-시험2", typ: r("PuneHedgehog") },
        { json: "시험3-시험4", js: "시험3-시험4", typ: r("Purple기타") },
        { json: "시험2-시험3", js: "시험2-시험3", typ: r("Purple기타") },
        { json: "시험4-시험선종점", js: "시험4-시험선종점", typ: r("PuneHedgehog") },
    ], false),
    "국철_도시철도": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("Cunning한국철도공사") },
    ], false),
    "Cunning한국철도공사": o([
        { json: "안산선", js: "안산선", typ: r("안산선") },
    ], false),
    "안산선": o([
        { json: "산본-금정", js: "산본-금정", typ: r("PuneHedgehog") },
        { json: "금정-산본", js: "금정-산본", typ: r("PuneHedgehog") },
        { json: "오이도-정왕", js: "오이도-정왕", typ: r("PuneHedgehog") },
        { json: "정왕-신길온", js: "정왕-신길온", typ: r("PuneHedgehog") },
        { json: "신길온-안산", js: "신길온-안산", typ: r("PuneHedgehog") },
        { json: "안산-초지", js: "안산-초지", typ: r("PuneHedgehog") },
        { json: "초지-고잔", js: "초지-고잔", typ: r("PuneHedgehog") },
        { json: "고잔-중앙", js: "고잔-중앙", typ: r("PuneHedgehog") },
        { json: "중앙-한대앞", js: "중앙-한대앞", typ: r("PuneHedgehog") },
        { json: "한대앞-상록수", js: "한대앞-상록수", typ: r("PuneHedgehog") },
        { json: "상록수-반월", js: "상록수-반월", typ: r("Purple기타") },
        { json: "반월-대야미", js: "반월-대야미", typ: r("PuneHedgehog") },
        { json: "대야미-수리산", js: "대야미-수리산", typ: r("PuneHedgehog") },
        { json: "수리산-산본", js: "수리산-산본", typ: r("PuneHedgehog") },
        { json: "금정", js: "금정", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy버스": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("버스_한국철도공사") },
    ], false),
    "버스_한국철도공사": o([
        { json: "KTX 리무진 광명도심공항선", js: "KTX 리무진 광명도심공항선", typ: r("Ktx리무진광명도심공항선") },
    ], false),
    "Ktx리무진광명도심공항선": o([
        { json: "공항T2-공항T2", js: "공항T2-공항T2", typ: r("공항_T2공항_T2") },
        { json: "공항T2-인천국", js: "공항T2-인천국", typ: r("공항_T2공항_T2") },
        { json: "인천국-공항T2", js: "인천국-공항T2", typ: r("공항_T2공항_T2") },
        { json: "송도교-인천국", js: "송도교-인천국", typ: r("Purple기타") },
        { json: "인천국-송도교", js: "인천국-송도교", typ: r("Purple기타") },
        { json: "송도교-광명", js: "송도교-광명", typ: r("Purple기타") },
        { json: "광명-송도교", js: "광명-송도교", typ: r("Purple기타") },
    ], false),
    "공항_T2공항_T2": o([
        { json: "_공항버스", js: "_공항버스", typ: r("Purple기타") },
    ], false),
    "Tentacled전용선": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("Magenta한국철도공사") },
    ], false),
    "Magenta한국철도공사": o([
        { json: "호남선", js: "호남선", typ: r("Sticky호남선") },
    ], false),
    "Sticky호남선": o([
        { json: "와룡", js: "와룡", typ: r("와룡") },
    ], false),
    "와룡": o([
        { json: "석공전용선", js: "석공전용선", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy준고속선": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("Frisky한국철도공사") },
    ], false),
    "Frisky한국철도공사": o([
        { json: "중앙선", js: "중앙선", typ: r("Purple기타") },
        { json: "원주강릉선", js: "원주강릉선", typ: m(r("Purple기타")) },
        { json: "호남선", js: "호남선", typ: r("Indigo호남선") },
        { json: "전라선", js: "전라선", typ: r("Purple전라선") },
        { json: "중부내륙선", js: "중부내륙선", typ: m(r("Purple기타")) },
        { json: "대구선", js: "대구선", typ: m(r("Purple기타")) },
    ], false),
    "Purple전라선": o([
        { json: "동산-삼례", js: "동산-삼례", typ: r("PuneHedgehog") },
        { json: "동산-전주", js: "동산-전주", typ: r("PuneHedgehog") },
        { json: "봉천-임실", js: "봉천-임실", typ: r("PuneHedgehog") },
        { json: "곡성-압록", js: "곡성-압록", typ: r("Purple기타") },
        { json: "압록-구례구", js: "압록-구례구", typ: r("Purple기타") },
        { json: "옹정-금지", js: "옹정-금지", typ: r("PuneHedgehog") },
        { json: "서도-오수", js: "서도-오수", typ: r("PuneHedgehog") },
        { json: "오수-서도", js: "오수-서도", typ: r("PuneHedgehog") },
        { json: "오수-봉천", js: "오수-봉천", typ: r("PuneHedgehog") },
        { json: "봉천-오수", js: "봉천-오수", typ: r("PuneHedgehog") },
        { json: "죽림온-관촌", js: "죽림온-관촌", typ: r("Purple기타") },
        { json: "관촌-죽림온", js: "관촌-죽림온", typ: r("Purple기타") },
        { json: "전주-신리", js: "전주-신리", typ: r("PuneHedgehog") },
        { json: "신리-전주", js: "신리-전주", typ: r("PuneHedgehog") },
        { json: "동익산-삼례", js: "동익산-삼례", typ: r("Purple기타") },
        { json: "삼례-동익산", js: "삼례-동익산", typ: r("Purple기타") },
        { json: "전주-동산", js: "전주-동산", typ: r("PuneHedgehog") },
        { json: "괴목-봉덕", js: "괴목-봉덕", typ: r("Purple기타") },
        { json: "순천-동운", js: "순천-동운", typ: r("Purple기타") },
        { json: "동운-개운", js: "동운-개운", typ: r("Purple기타") },
        { json: "개운-괴목", js: "개운-괴목", typ: r("Purple기타") },
        { json: "동운-순천", js: "동운-순천", typ: r("Purple기타") },
        { json: "괴목-개운", js: "괴목-개운", typ: r("Purple기타") },
        { json: "여천-덕양", js: "여천-덕양", typ: r("PuneHedgehog") },
        { json: "덕양-율촌", js: "덕양-율촌", typ: r("Purple기타") },
        { json: "덕양-여천", js: "덕양-여천", typ: r("PuneHedgehog") },
        { json: "율촌-성산", js: "율촌-성산", typ: r("PuneHedgehog") },
        { json: "성산-율촌", js: "성산-율촌", typ: r("PuneHedgehog") },
        { json: "율촌-덕양", js: "율촌-덕양", typ: r("Purple기타") },
        { json: "봉덕-구례구", js: "봉덕-구례구", typ: r("PuneHedgehog") },
    ], false),
    "Indigo호남선": o([
        { json: "다시-고막원", js: "다시-고막원", typ: r("Purple기타") },
        { json: "고막원-함평", js: "고막원-함평", typ: r("PuneHedgehog") },
        { json: "고막원-다시", js: "고막원-다시", typ: r("Purple기타") },
        { json: "다시-나주", js: "다시-나주", typ: r("Purple기타") },
        { json: "노안-광주송", js: "노안-광주송", typ: r("Purple기타") },
        { json: "함평-고막원", js: "함평-고막원", typ: r("PuneHedgehog") },
        { json: "광주송-노안", js: "광주송-노안", typ: r("Purple기타") },
        { json: "나주-다시", js: "나주-다시", typ: r("Purple기타") },
        { json: "노안-나주", js: "노안-나주", typ: r("Purple기타") },
        { json: "나주-노안", js: "나주-노안", typ: r("Purple기타") },
    ], false),
    "Indecent지선": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("Mischievous한국철도공사") },
        { json: "서해철도 주식회사", js: "서해철도 주식회사", typ: r("지선_서해철도주식회사") },
    ], false),
    "지선_서해철도주식회사": o([
        { json: "안산입고선", js: "안산입고선", typ: r("Purple안산입고선") },
        { json: "안산출고선", js: "안산출고선", typ: r("안산출고선") },
    ], false),
    "Purple안산입고선": o([
        { json: "시우-안산", js: "시우-안산", typ: r("PuneHedgehog") },
    ], false),
    "안산출고선": o([
        { json: "안산-시우", js: "안산-시우", typ: r("PuneHedgehog") },
    ], false),
    "Mischievous한국철도공사": o([
        { json: "구로삼각선", js: "구로삼각선", typ: r("구로삼각선") },
        { json: "월곶시흥선", js: "월곶시흥선", typ: m(r("PuneHedgehog")) },
        { json: "시흥기지선", js: "시흥기지선", typ: r("시흥기지선") },
        { json: "안산입고선", js: "안산입고선", typ: r("Purple안산입고선") },
        { json: "서울교외선", js: "서울교외선", typ: r("Purple서울교외선") },
        { json: "안산출고선", js: "안산출고선", typ: r("안산출고선") },
        { json: "정선선", js: "정선선", typ: r("Purple기타") },
        { json: "북평선", js: "북평선", typ: r("Purple북평선") },
        { json: "묵호항선", js: "묵호항선", typ: r("Purple묵호항선") },
        { json: "문경선", js: "문경선", typ: r("Purple문경선") },
        { json: "함백선", js: "함백선", typ: m(r("Purple기타")) },
        { json: "여천선", js: "여천선", typ: r("Purple여천선") },
        { json: "옥구선", js: "옥구선", typ: r("Purple옥구선") },
        { json: "진해선", js: "진해선", typ: r("Purple진해선") },
        { json: "평내기지선", js: "평내기지선", typ: r("PuneHedgehog") },
        { json: "신광양항선", js: "신광양항선", typ: r("Purple신광양항선") },
        { json: "광양항선", js: "광양항선", typ: r("Purple광양항선") },
        { json: "광양제철선", js: "광양제철선", typ: r("Purple광양제철선") },
        { json: "사천선", js: "사천선", typ: r("Purple사천선") },
        { json: "군산항선", js: "군산항선", typ: r("Fluffy군산항선") },
        { json: "강릉기지선", js: "강릉기지선", typ: r("강릉기지선") },
        { json: "제천조차장선", js: "제천조차장선", typ: r("Purple제천조차장선") },
        { json: "용문기지선", js: "용문기지선", typ: r("Purple용문기지선") },
        { json: "우암선", js: "우암선", typ: r("Purple우암선") },
        { json: "부전선", js: "부전선", typ: m(r("PuneHedgehog")) },
        { json: "가야선", js: "가야선", typ: r("Purple가야선") },
        { json: "온산선", js: "온산선", typ: r("Purple온산선") },
        { json: "울산신항선", js: "울산신항선", typ: r("Purple울산신항선") },
        { json: "울산기지선", js: "울산기지선", typ: m(r("PuneHedgehog")) },
        { json: "울산항선", js: "울산항선", typ: r("한국철도공사_울산항선") },
        { json: "괴동선", js: "괴동선", typ: r("Purple괴동선") },
        { json: "삼척선", js: "삼척선", typ: r("Purple삼척선") },
        { json: "영일만항선", js: "영일만항선", typ: r("Purple영일만항선") },
        { json: "건천연결선", js: "건천연결선", typ: m(r("PuneHedgehog")) },
        { json: "용산삼각선", js: "용산삼각선", typ: r("용산삼각선") },
        { json: "구로기지선", js: "구로기지선", typ: m(r("PuneHedgehog")) },
        { json: "남부화물기지선", js: "남부화물기지선", typ: r("Purple남부화물기지선") },
        { json: "병점기지선", js: "병점기지선", typ: m(r("PuneHedgehog")) },
        { json: "천안직결선", js: "천안직결선", typ: r("Purple천안직결선") },
        { json: "양산화물선", js: "양산화물선", typ: r("Purple양산화물선") },
        { json: "대구북연결선", js: "대구북연결선", typ: m(r("Purple기타")) },
        { json: "평택삼각선", js: "평택삼각선", typ: r("Purple평택삼각선") },
        { json: "부강화물선", js: "부강화물선", typ: m(r("PuneHedgehog")) },
        { json: "신동화물선", js: "신동화물선", typ: r("Purple신동화물선") },
        { json: "부산신항 남선", js: "부산신항 남선", typ: r("부산신항남선") },
        { json: "부산신항 북선", js: "부산신항 북선", typ: r("부산신항북선") },
        { json: "부산신항선", js: "부산신항선", typ: m(r("Purple기타")) },
        { json: "수인선", js: "수인선", typ: r("Purple수인선") },
        { json: "분당기지선", js: "분당기지선", typ: r("PuneHedgehog") },
        { json: "익산삼각선", js: "익산삼각선", typ: r("익산삼각선") },
        { json: "대전선", js: "대전선", typ: r("Purple대전선") },
        { json: "강경선", js: "강경선", typ: r("Purple강경선") },
        { json: "안평화물선", js: "안평화물선", typ: r("안평화물선") },
        { json: "대불선", js: "대불선", typ: r("Purple대불선") },
        { json: "전경삼각선", js: "전경삼각선", typ: r("Purple전경삼각선") },
        { json: "북전주선", js: "북전주선", typ: r("Purple북전주선") },
        { json: "덕산선", js: "덕산선", typ: r("Purple덕산선") },
        { json: "미전선", js: "미전선", typ: m(r("PuneHedgehog")) },
        { json: "부발기지선", js: "부발기지선", typ: m(r("PuneHedgehog")) },
        { json: "광주기지선", js: "광주기지선", typ: r("PuneHedgehog") },
        { json: "망우선", js: "망우선", typ: r("Purple망우선") },
        { json: "평택선", js: "평택선", typ: r("Purple평택선") },
        { json: "광주선", js: "광주선", typ: r("Purple광주선") },
        { json: "북송정삼각선", js: "북송정삼각선", typ: r("Purple북송정삼각선") },
        { json: "용산선", js: "용산선", typ: m(r("PuneHedgehog")) },
        { json: "수색객차출발선", js: "수색객차출발선", typ: m(r("PuneHedgehog")) },
        { json: "수식직결선", js: "수식직결선", typ: m(r("PuneHedgehog")) },
        { json: "고양기지선", js: "고양기지선", typ: r("고양기지선") },
        { json: "문산기지선", js: "문산기지선", typ: m(r("PuneHedgehog")) },
        { json: "성북기지선", js: "성북기지선", typ: r("성북기지선") },
        { json: "이문기지선", js: "이문기지선", typ: m(r("PuneHedgehog")) },
        { json: "광명기지선", js: "광명기지선", typ: m(r("광명기지선")) },
        { json: "시흥연결선", js: "시흥연결선", typ: r("시흥연결선") },
        { json: "대전북연결선", js: "대전북연결선", typ: m(r("PuneHedgehog")) },
        { json: "대전남연결선", js: "대전남연결선", typ: m(r("Purple기타")) },
        { json: "영동정비기지선", js: "영동정비기지선", typ: m(r("PuneHedgehog")) },
        { json: "신동연결선", js: "신동연결선", typ: m(r("PuneHedgehog")) },
        { json: "오송정비기지선", js: "오송정비기지선", typ: m(r("PuneHedgehog")) },
        { json: "부산북연결선", js: "부산북연결선", typ: m(r("Purple기타")) },
        { json: "대구남연결선", js: "대구남연결선", typ: r("대구남연결선") },
        { json: "익산남연결선", js: "익산남연결선", typ: m(r("PuneHedgehog")) },
        { json: "광주송정북연결선", js: "광주송정북연결선", typ: m(r("Purple기타")) },
        { json: "장생포선", js: "장생포선", typ: r("장생포선") },
        { json: "영천삼각선", js: "영천삼각선", typ: r("Purple영천삼각선") },
        { json: "강릉삼각선", js: "강릉삼각선", typ: r("강릉삼각선") },
        { json: "익산북연결선", js: "익산북연결선", typ: m(r("PuneHedgehog")) },
        { json: "경부고속선", js: "경부고속선", typ: r("Tentacled경부고속선") },
        { json: "태백삼각선", js: "태백삼각선", typ: r("PuneHedgehog") },
        { json: "오송선", js: "오송선", typ: r("Purple기타") },
        { json: "경주삼각선", js: "경주삼각선", typ: r("PuneHedgehog") },
        { json: "대전철도차량정비단선", js: "대전철도차량정비단선", typ: r("Purple기타") },
        { json: "분당연결선", js: "분당연결선", typ: r("PuneHedgehog") },
    ], false),
    "Purple가야선": o([
        { json: "사상-주례", js: "사상-주례", typ: r("PuneHedgehog") },
        { json: "주례-가야", js: "주례-가야", typ: r("Purple기타") },
        { json: "가야-주례", js: "가야-주례", typ: r("Purple기타") },
        { json: "주례-사상", js: "주례-사상", typ: r("PuneHedgehog") },
        { json: "범일-가야", js: "범일-가야", typ: r("PuneHedgehog") },
        { json: "부산기", js: "부산기", typ: r("PuneHedgehog") },
    ], false),
    "Purple강경선": o([
        { json: "연무대-채운", js: "연무대-채운", typ: r("Purple기타") },
        { json: "연무대-강경선종점", js: "연무대-강경선종점", typ: r("PuneHedgehog") },
    ], false),
    "강릉기지선": o([
        { json: "강릉분-강릉기", js: "강릉분-강릉기", typ: r("PuneHedgehog") },
    ], false),
    "강릉삼각선": o([
        { json: "청량B-청량C", js: "청량B-청량C", typ: r("PuneHedgehog") },
    ], false),
    "Tentacled경부고속선": o([
        { json: "시흥연-광명", js: "시흥연-광명", typ: r("금천구시흥연") },
    ], false),
    "고양기지선": o([
        { json: "고양기", js: "고양기", typ: r("PuneHedgehog") },
        { json: "화전-행신", js: "화전-행신", typ: r("Purple기타") },
        { json: "행신-고양기", js: "행신-고양기", typ: r("PuneHedgehog") },
        { json: "화전-고양기", js: "화전-고양기", typ: r("Purple기타") },
        { json: "고양기-화전", js: "고양기-화전", typ: r("Purple기타") },
    ], false),
    "광명기지선": o([
        { json: "_반대선", js: "_반대선", typ: r("PuneHedgehog") },
    ], false),
    "Purple광양제철선": o([
        { json: "초남-황길", js: "초남-황길", typ: r("Purple기타") },
        { json: "광양-초남", js: "광양-초남", typ: r("Purple기타") },
        { json: "태금-황길", js: "태금-황길", typ: r("Purple기타") },
        { json: "황길-초남", js: "황길-초남", typ: r("Purple기타") },
        { json: "태금-광양제철선", js: "태금-광양제철선", typ: r("PuneHedgehog") },
        { json: "황길-태금", js: "황길-태금", typ: r("Purple기타") },
        { json: "태금", js: "태금", typ: r("PuneHedgehog") },
    ], false),
    "Purple광양항선": o([
        { json: "광양항-황길", js: "광양항-황길", typ: r("Purple기타") },
        { json: "광양항-광양항선종점", js: "광양항-광양항선종점", typ: r("PuneHedgehog") },
        { json: "황길-광양항", js: "황길-광양항", typ: r("PuneHedgehog") },
    ], false),
    "Purple광주선": o([
        { json: "광주차량", js: "광주차량", typ: r("PuneHedgehog") },
        { json: "극락강-광주", js: "극락강-광주", typ: r("Purple기타") },
        { json: "광주-광주선종점", js: "광주-광주선종점", typ: r("PuneHedgehog") },
        { json: "광주-극락강", js: "광주-극락강", typ: r("Purple기타") },
        { json: "광주", js: "광주", typ: r("PuneHedgehog") },
        { json: "동송정-극락강", js: "동송정-극락강", typ: r("Purple기타") },
        { json: "극락강-동송정", js: "극락강-동송정", typ: r("Purple기타") },
    ], false),
    "Purple괴동선": o([
        { json: "효자-괴동", js: "효자-괴동", typ: r("Purple기타") },
        { json: "괴동-효자", js: "괴동-효자", typ: r("Purple기타") },
        { json: "괴동-제철", js: "괴동-제철", typ: r("PuneHedgehog") },
        { json: "효자-신부조", js: "효자-신부조", typ: r("Purple기타") },
        { json: "신부조-효자", js: "신부조-효자", typ: r("Purple기타") },
    ], false),
    "구로삼각선": o([
        { json: "구일-금천구", js: "구일-금천구", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy군산항선": o([
        { json: "군산옥-대야", js: "군산옥-대야", typ: r("Purple기타") },
        { json: "군산항선종점-군산항", js: "군산항선종점-군산항", typ: r("PuneHedgehog") },
        { json: "군산항-군산옥", js: "군산항-군산옥", typ: r("Purple기타") },
        { json: "군산항", js: "군산항", typ: r("PuneHedgehog") },
    ], false),
    "Purple남부화물기지선": o([
        { json: "의왕-오봉", js: "의왕-오봉", typ: r("Purple기타") },
        { json: "오봉-의왕", js: "오봉-의왕", typ: r("Purple기타") },
        { json: "오봉-남부화물기지선종점", js: "오봉-남부화물기지선종점", typ: r("PuneHedgehog") },
        { json: "오봉", js: "오봉", typ: r("PuneHedgehog") },
    ], false),
    "대구남연결선": o([
        { json: "대구남-동대구", js: "대구남-동대구", typ: r("Purple기타") },
    ], false),
    "Purple대불선": o([
        { json: "대불-일로", js: "대불-일로", typ: r("Purple기타") },
        { json: "대불-대불선종점", js: "대불-대불선종점", typ: r("PuneHedgehog") },
    ], false),
    "Purple대전선": o([
        { json: "서대전-대전", js: "서대전-대전", typ: r("Purple기타") },
    ], false),
    "Purple덕산선": o([
        { json: "용강-덕산", js: "용강-덕산", typ: r("Purple기타") },
        { json: "덕산-용강", js: "덕산-용강", typ: r("Purple기타") },
        { json: "덕산-덕산선종점", js: "덕산-덕산선종점", typ: r("PuneHedgehog") },
    ], false),
    "Purple망우선": o([
        { json: "상봉-광운대", js: "상봉-광운대", typ: r("Purple기타") },
    ], false),
    "Purple묵호항선": o([
        { json: "묵호항-동해", js: "묵호항-동해", typ: r("Purple기타") },
        { json: "묵호항-묵호", js: "묵호항-묵호", typ: r("PuneHedgehog") },
        { json: "묵호항", js: "묵호항", typ: r("PuneHedgehog") },
    ], false),
    "Purple문경선": o([
        { json: "점촌-주평", js: "점촌-주평", typ: r("Purple기타") },
        { json: "주평", js: "주평", typ: r("PuneHedgehog") },
        { json: "주평-문경선", js: "주평-문경선", typ: r("PuneHedgehog") },
    ], false),
    "부산신항남선": o([
        { json: "남철송-부산항", js: "남철송-부산항", typ: r("Purple기타") },
        { json: "남철송-신항남선종점", js: "남철송-신항남선종점", typ: r("PuneHedgehog") },
    ], false),
    "부산신항북선": o([
        { json: "북철송-신항북선종점", js: "북철송-신항북선종점", typ: r("PuneHedgehog") },
        { json: "북철송-부산항", js: "북철송-부산항", typ: r("Purple기타") },
    ], false),
    "Purple북송정삼각선": o([
        { json: "북송분-북송정", js: "북송분-북송정", typ: r("PuneHedgehog") },
    ], false),
    "Purple북전주선": o([
        { json: "동산-북전주", js: "동산-북전주", typ: r("PuneHedgehog") },
        { json: "동산", js: "동산", typ: r("PuneHedgehog") },
    ], false),
    "Purple북평선": o([
        { json: "삼화-북평선종점", js: "삼화-북평선종점", typ: r("PuneHedgehog") },
        { json: "동해-삼화", js: "동해-삼화", typ: r("Purple기타") },
    ], false),
    "Purple사천선": o([
        { json: "사천-진주", js: "사천-진주", typ: r("PuneHedgehog") },
    ], false),
    "Purple삼척선": o([
        { json: "삼척해-삼척", js: "삼척해-삼척", typ: r("Purple기타") },
        { json: "추암-동해", js: "추암-동해", typ: r("Purple기타") },
        { json: "추암-삼척해", js: "추암-삼척해", typ: r("PuneHedgehog") },
    ], false),
    "Purple서울교외선": o([
        { json: "대곡-능곡", js: "대곡-능곡", typ: r("서울교외선_대곡능곡") },
        { json: "대정-대곡", js: "대정-대곡", typ: r("PuneHedgehog") },
        { json: "온릉-송추", js: "온릉-송추", typ: r("Purple기타") },
        { json: "장흥-일영", js: "장흥-일영", typ: r("PuneHedgehog") },
        { json: "일영-벽제", js: "일영-벽제", typ: r("Purple기타") },
        { json: "대정-원릉", js: "대정-원릉", typ: r("Purple기타") },
        { json: "원릉-삼릉", js: "원릉-삼릉", typ: r("PuneHedgehog") },
        { json: "삼릉-벽제", js: "삼릉-벽제", typ: r("Purple기타") },
        { json: "벽제-일영", js: "벽제-일영", typ: r("Purple기타") },
        { json: "일영-장흥", js: "일영-장흥", typ: r("PuneHedgehog") },
        { json: "의정부-송추", js: "의정부-송추", typ: r("Purple기타") },
        { json: "온릉-장흥", js: "온릉-장흥", typ: r("PuneHedgehog") },
    ], false),
    "서울교외선_대곡능곡": o([
        { json: "_교외선", js: "_교외선", typ: r("PuneHedgehog") },
    ], false),
    "성북기지선": o([
        { json: "성북차-광운대", js: "성북차-광운대", typ: r("PuneHedgehog") },
    ], false),
    "Purple수인선": o([
        { json: "중앙-한대앞", js: "중앙-한대앞", typ: r("중앙한대앞") },
        { json: "한대앞-중앙", js: "한대앞-중앙", typ: r("중앙한대앞") },
        { json: "오이도-달월", js: "오이도-달월", typ: r("PuneHedgehog") },
        { json: "달월-월곶", js: "달월-월곶", typ: r("PuneHedgehog") },
        { json: "인천논-호구포", js: "인천논-호구포", typ: r("PuneHedgehog") },
        { json: "호구포-남동인", js: "호구포-남동인", typ: r("PuneHedgehog") },
        { json: "숭의-신포", js: "숭의-신포", typ: r("PuneHedgehog") },
        { json: "신포-신인천", js: "신포-신인천", typ: r("PuneHedgehog") },
        { json: "숭의-인하대", js: "숭의-인하대", typ: r("PuneHedgehog") },
        { json: "인하대-학익", js: "인하대-학익", typ: r("PuneHedgehog") },
        { json: "학익-송도", js: "학익-송도", typ: r("PuneHedgehog") },
        { json: "송도-연수", js: "송도-연수", typ: r("PuneHedgehog") },
        { json: "연수-원인재", js: "연수-원인재", typ: r("PuneHedgehog") },
        { json: "원인재-남동인", js: "원인재-남동인", typ: r("PuneHedgehog") },
        { json: "인천논-소래포", js: "인천논-소래포", typ: r("PuneHedgehog") },
        { json: "소래포-월곶", js: "소래포-월곶", typ: r("PuneHedgehog") },
        { json: "신인천-수인선종점", js: "신인천-수인선종점", typ: r("PuneHedgehog") },
        { json: "안산-초지", js: "안산-초지", typ: r("PuneHedgehog") },
        { json: "초지-고잔", js: "초지-고잔", typ: r("PuneHedgehog") },
        { json: "정왕-신길온", js: "정왕-신길온", typ: r("PuneHedgehog") },
        { json: "신길온-안산", js: "신길온-안산", typ: r("PuneHedgehog") },
        { json: "오이도-정왕", js: "오이도-정왕", typ: r("PuneHedgehog") },
        { json: "고잔-중앙", js: "고잔-중앙", typ: r("PuneHedgehog") },
        { json: "사리-한대앞", js: "사리-한대앞", typ: r("PuneHedgehog") },
        { json: "한대앞-사리", js: "한대앞-사리", typ: r("PuneHedgehog") },
        { json: "신수원-고색", js: "신수원-고색", typ: r("PuneHedgehog") },
        { json: "어천-야목", js: "어천-야목", typ: r("PuneHedgehog") },
        { json: "야목-사리", js: "야목-사리", typ: r("Purple기타") },
        { json: "고색-오목천", js: "고색-오목천", typ: r("PuneHedgehog") },
        { json: "오목천-어천", js: "오목천-어천", typ: r("Purple기타") },
    ], false),
    "중앙한대앞": o([
        { json: "_수인", js: "_수인", typ: r("PuneHedgehog") },
    ], false),
    "시흥기지선": o([
        { json: "오이도-시흥기", js: "오이도-시흥기", typ: r("PuneHedgehog") },
    ], false),
    "시흥연결선": o([
        { json: "시흥연-금천구", js: "시흥연-금천구", typ: r("PuneHedgehog") },
    ], false),
    "Purple신광양항선": o([
        { json: "신광양-신광양항선종점", js: "신광양-신광양항선종점", typ: r("PuneHedgehog") },
        { json: "초남-신광양", js: "초남-신광양", typ: r("Purple기타") },
    ], false),
    "Purple신동화물선": o([
        { json: "신동화-신동화물선종점", js: "신동화-신동화물선종점", typ: r("PuneHedgehog") },
        { json: "신동화-신동", js: "신동화-신동", typ: r("Purple기타") },
    ], false),
    "안평화물선": o([
        { json: "장성화-안평", js: "장성화-안평", typ: r("Purple기타") },
        { json: "장성화-장성화물선종점", js: "장성화-장성화물선종점", typ: r("PuneHedgehog") },
    ], false),
    "Purple양산화물선": o([
        { json: "양산화", js: "양산화", typ: r("PuneHedgehog") },
        { json: "양산화-물금", js: "양산화-물금", typ: r("Purple기타") },
        { json: "물금-양산화", js: "물금-양산화", typ: r("Purple기타") },
        { json: "양산화-양산화물선종점", js: "양산화-양산화물선종점", typ: r("PuneHedgehog") },
    ], false),
    "Purple여천선": o([
        { json: "적량-여천선", js: "적량-여천선", typ: r("PuneHedgehog") },
        { json: "덕양-흥국사", js: "덕양-흥국사", typ: r("Purple기타") },
        { json: "흥국사-적량", js: "흥국사-적량", typ: r("Purple기타") },
    ], false),
    "Purple영일만항선": o([
        { json: "영일만-영일만항선종점", js: "영일만-영일만항선종점", typ: r("PuneHedgehog") },
        { json: "포항-영일만", js: "포항-영일만", typ: r("Purple기타") },
    ], false),
    "Purple영천삼각선": o([
        { json: "북영천-북영분", js: "북영천-북영분", typ: r("PuneHedgehog") },
    ], false),
    "Purple옥구선": o([
        { json: "옥구-군산옥", js: "옥구-군산옥", typ: r("Purple기타") },
    ], false),
    "Purple온산선": o([
        { json: "온산-온산선종점", js: "온산-온산선종점", typ: r("PuneHedgehog") },
        { json: "온산-남창", js: "온산-남창", typ: r("Purple기타") },
    ], false),
    "Purple용문기지선": o([
        { json: "용문차-용문", js: "용문차-용문", typ: r("PuneHedgehog") },
        { json: "용문-용문차", js: "용문-용문차", typ: r("Purple기타") },
        { json: "용문차", js: "용문차", typ: r("PuneHedgehog") },
    ], false),
    "용산삼각선": o([
        { json: "노량진-이촌", js: "노량진-이촌", typ: r("PuneHedgehog") },
    ], false),
    "Purple우암선": o([
        { json: "부산진-우암", js: "부산진-우암", typ: r("PuneHedgehog") },
        { json: "우암-신선대", js: "우암-신선대", typ: r("Purple기타") },
        { json: "신선대-우암선종점", js: "신선대-우암선종점", typ: r("PuneHedgehog") },
    ], false),
    "Purple울산신항선": o([
        { json: "울산신항선종점-울산신", js: "울산신항선종점-울산신", typ: r("PuneHedgehog") },
        { json: "용암-망양", js: "용암-망양", typ: r("Purple기타") },
        { json: "울산신-용암", js: "울산신-용암", typ: r("Purple기타") },
    ], false),
    "한국철도공사_울산항선": o([
        { json: "울산항-울산항선종점", js: "울산항-울산항선종점", typ: r("PuneHedgehog") },
        { json: "태화강-울산항", js: "태화강-울산항", typ: r("Purple기타") },
    ], false),
    "익산삼각선": o([
        { json: "동익산-목천신", js: "동익산-목천신", typ: r("Purple기타") },
    ], false),
    "장생포선": o([
        { json: "태화강-장생포", js: "태화강-장생포", typ: r("Purple기타") },
    ], false),
    "Purple전경삼각선": o([
        { json: "평화-성산", js: "평화-성산", typ: r("PuneHedgehog") },
    ], false),
    "Purple제천조차장선": o([
        { json: "제천조-제천", js: "제천조-제천", typ: r("제천조제천") },
        { json: "제천", js: "제천", typ: r("PuneHedgehog") },
        { json: "제천조", js: "제천조", typ: r("PuneHedgehog") },
    ], false),
    "제천조제천": o([
        { json: "_단행", js: "_단행", typ: r("PuneHedgehog") },
    ], false),
    "Purple진해선": o([
        { json: "남창원-신창원", js: "남창원-신창원", typ: r("Purple기타") },
        { json: "진해-경화", js: "진해-경화", typ: r("PuneHedgehog") },
        { json: "성주사-남창원", js: "성주사-남창원", typ: r("Purple기타") },
        { json: "창원-신창원", js: "창원-신창원", typ: r("Purple기타") },
        { json: "경화-성주사", js: "경화-성주사", typ: r("Purple기타") },
        { json: "신창원-창원", js: "신창원-창원", typ: r("Purple기타") },
        { json: "신창원-남창원", js: "신창원-남창원", typ: r("Purple기타") },
        { json: "진해-통해", js: "진해-통해", typ: r("PuneHedgehog") },
        { json: "신창원", js: "신창원", typ: r("PuneHedgehog") },
    ], false),
    "Purple천안직결선": o([
        { json: "천안-두정", js: "천안-두정", typ: r("온양온신창") },
        { json: "두정-천안", js: "두정-천안", typ: r("온양온신창") },
        { json: "천안", js: "천안", typ: r("PuneHedgehog") },
    ], false),
    "Purple평택삼각선": o([
        { json: "1지제-신대신", js: "1지제-신대신", typ: r("PuneHedgehog") },
    ], false),
    "Purple평택선": o([
        { json: "신대신-창내신", js: "신대신-창내신", typ: r("Purple기타") },
        { json: "평택-신대신", js: "평택-신대신", typ: r("PuneHedgehog") },
        { json: "신대신-평택", js: "신대신-평택", typ: r("PuneHedgehog") },
    ], false),
    "Ambitious궤도선": o([
        { json: "인천교통공사", js: "인천교통공사", typ: r("Tentacled인천교통공사") },
        { json: "순천에코트랜스", js: "순천에코트랜스", typ: r("Fluffy순천에코트랜스") },
        { json: "해운대블루라인 주식회사", js: "해운대블루라인 주식회사", typ: r("궤도선_해운대블루라인주식회사") },
    ], false),
    "Fluffy순천에코트랜스": o([
        { json: "순천만PRT", js: "순천만PRT", typ: r("Purple기타") },
    ], false),
    "Tentacled인천교통공사": o([
        { json: "월미바다열차", js: "월미바다열차", typ: r("Purple기타") },
    ], false),
    "궤도선_해운대블루라인주식회사": o([
        { json: "해운대 해변열차", js: "해운대 해변열차", typ: r("Purple기타") },
        { json: "해운대 스카이캡슐", js: "해운대 스카이캡슐", typ: r("PuneHedgehog") },
    ], false),
    "영업_기타": o([
        { json: "공항철도", js: "공항철도", typ: r("Purple공항철도") },
        { json: "신분당선주식회사", js: "신분당선주식회사", typ: r("기타_신분당선주식회사") },
        { json: "경기철도주식회사", js: "경기철도주식회사", typ: r("기타_경기철도주식회사") },
        { json: "새서울철도 주식회사", js: "새서울철도 주식회사", typ: r("기타_새서울철도주식회사") },
        { json: "한국철도공사 철도관광사업법인 코레일관광개발", js: "한국철도공사 철도관광사업법인 코레일관광개발", typ: r("한국철도공사철도관광사업법인코레일관광개발") },
        { json: "도계광업소", js: "도계광업소", typ: r("Purple도계광업소") },
    ], false),
    "기타_경기철도주식회사": o([
        { json: "신분당선", js: "신분당선", typ: r("PuneHedgehog") },
    ], false),
    "Purple공항철도": o([
        { json: "수색직결선", js: "수색직결선", typ: m(r("PuneHedgehog")) },
        { json: "인천국제공항철도", js: "인천국제공항철도", typ: r("Purple인천국제공항철도") },
        { json: "용유차량삼각선", js: "용유차량삼각선", typ: m(r("PuneHedgehog")) },
        { json: "용유차량기지선", js: "용유차량기지선", typ: m(r("PuneHedgehog")) },
    ], false),
    "Purple인천국제공항철도": o([
        { json: "계양-김포공", js: "계양-김포공", typ: r("Purple기타") },
        { json: "용유분-인천국", js: "용유분-인천국", typ: r("PuneHedgehog") },
        { json: "공항T2-용유분", js: "공항T2-용유분", typ: r("PuneHedgehog") },
        { json: "공항T2-공항T2종점", js: "공항T2-공항T2종점", typ: r("PuneHedgehog") },
        { json: "서울공-공덕공", js: "서울공-공덕공", typ: r("Purple기타") },
        { json: "검암-청라", js: "검암-청라", typ: r("Purple기타") },
        { json: "홍대공-공덕공", js: "홍대공-공덕공", typ: r("PuneHedgehog") },
        { json: "디엠공-홍대공", js: "디엠공-홍대공", typ: r("Purple기타") },
        { json: "공항연-디엠공", js: "공항연-디엠공", typ: r("Purple기타") },
        { json: "마곡나-공항연", js: "마곡나-공항연", typ: r("Purple기타") },
        { json: "김포공-마곡나", js: "김포공-마곡나", typ: r("PuneHedgehog") },
        { json: "검암-계양", js: "검암-계양", typ: r("Purple기타") },
        { json: "영종-청라", js: "영종-청라", typ: r("Purple기타") },
        { json: "운서-영종", js: "운서-영종", typ: r("Purple기타") },
        { json: "공항화-운서", js: "공항화-운서", typ: r("Purple기타") },
        { json: "인천국-공항화", js: "인천국-공항화", typ: r("PuneHedgehog") },
        { json: "서울공-공항서울종점", js: "서울공-공항서울종점", typ: r("PuneHedgehog") },
        { json: "청라-검암", js: "청라-검암", typ: r("PuneHedgehog") },
        { json: "계양-검암", js: "계양-검암", typ: r("PuneHedgehog") },
    ], false),
    "Purple도계광업소": o([
        { json: "도계광업소 강삭철도", js: "도계광업소 강삭철도", typ: r("PuneHedgehog") },
    ], false),
    "기타_새서울철도주식회사": o([
        { json: "신분당선", js: "신분당선", typ: m(r("PuneHedgehog")) },
    ], false),
    "기타_신분당선주식회사": o([
        { json: "신분당선", js: "신분당선", typ: r("신분당선주식회사_신분당선") },
        { json: "분당연결선", js: "분당연결선", typ: m(r("PuneHedgehog")) },
    ], false),
    "신분당선주식회사_신분당선": o([
        { json: "미금-분당연결선분기", js: "미금-분당연결선분기", typ: r("PuneHedgehog") },
        { json: "신논현-강남", js: "신논현-강남", typ: r("PuneHedgehog") },
        { json: "양재-양재시민의숲", js: "양재-양재시민의숲", typ: r("PuneHedgehog") },
        { json: "양재시민의숲-청계산입구", js: "양재시민의숲-청계산입구", typ: r("PuneHedgehog") },
        { json: "청계산입구-판교", js: "청계산입구-판교", typ: r("Purple기타") },
        { json: "분당연결선분기-정자", js: "분당연결선분기-정자", typ: r("PuneHedgehog") },
        { json: "정자-판교주박기지", js: "정자-판교주박기지", typ: r("PuneHedgehog") },
        { json: "판교주박기지-판교", js: "판교주박기지-판교", typ: r("PuneHedgehog") },
        { json: "강남-양재", js: "강남-양재", typ: r("PuneHedgehog") },
    ], false),
    "한국철도공사철도관광사업법인코레일관광개발": o([
        { json: "섬진강 기차마을 관광철도", js: "섬진강 기차마을 관광철도", typ: r("Purple기타") },
    ], false),
    "Tentacled도시철도": o([
        { json: "인천교통공사", js: "인천교통공사", typ: r("Sticky인천교통공사") },
        { json: "김포골드라인운영주식회사", js: "김포골드라인운영주식회사", typ: r("도시철도_김포골드라인운영주식회사") },
        { json: "서울시메트로 9호선", js: "서울시메트로 9호선", typ: r("Tentacled서울시메트로9호선") },
        { json: "남서울경전철 주식회사", js: "남서울경전철 주식회사", typ: r("도시철도_남서울경전철주식회사") },
        { json: "서울교통공사", js: "서울교통공사", typ: r("Purple서울교통공사") },
        { json: "주식회사 우진메트로", js: "주식회사 우진메트로", typ: r("도시철도_주식회사우진메트로") },
        { json: "우이신설경전철 주식회사", js: "우이신설경전철 주식회사", typ: r("Fluffy우이신설경전철주식회사") },
        { json: "대전교통공사", js: "대전교통공사", typ: r("도시철도_대전교통공사") },
        { json: "대구도시철도공사", js: "대구도시철도공사", typ: r("Fluffy대구도시철도공사") },
        { json: "용인경량전철주식회사", js: "용인경량전철주식회사", typ: r("도시철도_용인경량전철주식회사") },
        { json: "한국철도공사", js: "한국철도공사", typ: r("Braggadocious한국철도공사") },
        { json: "부산교통공사", js: "부산교통공사", typ: r("Tentacled부산교통공사") },
        { json: "부산-김해경전철운영주식회사", js: "부산-김해경전철운영주식회사", typ: r("도시철도_부산김해경전철운영주식회사") },
        { json: "광주광역시도시철도공사", js: "광주광역시도시철도공사", typ: r("Fluffy광주광역시도시철도공사") },
        { json: "에스지레일 주식회사", js: "에스지레일 주식회사", typ: r("에스지레일주식회사") },
        { json: "하남도시공사", js: "하남도시공사", typ: r("도시철도_하남도시공사") },
    ], false),
    "Fluffy광주광역시도시철도공사": o([
        { json: "광주 도시철도 1호선", js: "광주 도시철도 1호선", typ: r("PuneHedgehog") },
    ], false),
    "도시철도_김포골드라인운영주식회사": o([
        { json: "김포골드라인", js: "김포골드라인", typ: r("Purple김포골드라인") },
    ], false),
    "Purple김포골드라인": o([
        { json: "김포한강차량기지-양촌", js: "김포한강차량기지-양촌", typ: r("PuneHedgehog") },
        { json: "양촌-구래", js: "양촌-구래", typ: r("PuneHedgehog") },
        { json: "구래-마산", js: "구래-마산", typ: r("PuneHedgehog") },
        { json: "마산-장기", js: "마산-장기", typ: r("PuneHedgehog") },
        { json: "장기-운양", js: "장기-운양", typ: r("PuneHedgehog") },
        { json: "운양-걸포북변", js: "운양-걸포북변", typ: r("Purple기타") },
        { json: "걸포북변-사우", js: "걸포북변-사우", typ: r("PuneHedgehog") },
        { json: "사우-풍무", js: "사우-풍무", typ: r("PuneHedgehog") },
        { json: "풍무-고촌", js: "풍무-고촌", typ: r("Purple기타") },
        { json: "고촌-김포공항", js: "고촌-김포공항", typ: r("Purple기타") },
    ], false),
    "도시철도_남서울경전철주식회사": o([
        { json: "서울 경전철 신림선", js: "서울 경전철 신림선", typ: m(r("PuneHedgehog")) },
    ], false),
    "Fluffy대구도시철도공사": o([
        { json: "대구 도시철도 3호선", js: "대구 도시철도 3호선", typ: m(r("PuneHedgehog")) },
        { json: "대구 도시철도 1호선", js: "대구 도시철도 1호선", typ: m(r("PuneHedgehog")) },
        { json: "대구 도시철도 2호선", js: "대구 도시철도 2호선", typ: r("대구도시철도2호선") },
    ], false),
    "대구도시철도2호선": o([
        { json: "청라언덕-명덕", js: "청라언덕-명덕", typ: r("명덕청라언덕") },
        { json: "명덕-청라언덕", js: "명덕-청라언덕", typ: r("명덕청라언덕") },
        { json: "문양차량사업소-다사", js: "문양차량사업소-다사", typ: r("PuneHedgehog") },
        { json: "다사-문양차량사업소", js: "다사-문양차량사업소", typ: r("PuneHedgehog") },
        { json: "문양차량사업소", js: "문양차량사업소", typ: r("PuneHedgehog") },
        { json: "계명대-성서산단", js: "계명대-성서산단", typ: r("PuneHedgehog") },
        { json: "성서산단-이곡", js: "성서산단-이곡", typ: r("PuneHedgehog") },
        { json: "이곡-용산", js: "이곡-용산", typ: r("PuneHedgehog") },
        { json: "용산-죽전", js: "용산-죽전", typ: r("PuneHedgehog") },
        { json: "죽전-감삼", js: "죽전-감삼", typ: r("PuneHedgehog") },
        { json: "감삼-죽전", js: "감삼-죽전", typ: r("PuneHedgehog") },
        { json: "죽전-용산", js: "죽전-용산", typ: r("PuneHedgehog") },
        { json: "용산-이곡", js: "용산-이곡", typ: r("PuneHedgehog") },
        { json: "이곡-성서산단", js: "이곡-성서산단", typ: r("PuneHedgehog") },
        { json: "성서산단-계명대", js: "성서산단-계명대", typ: r("PuneHedgehog") },
        { json: "계명대-강창", js: "계명대-강창", typ: r("PuneHedgehog") },
        { json: "강창-대실", js: "강창-대실", typ: r("PuneHedgehog") },
        { json: "대실-다사", js: "대실-다사", typ: r("PuneHedgehog") },
        { json: "다사-문양", js: "다사-문양", typ: r("PuneHedgehog") },
        { json: "문양-문양차량사업소", js: "문양-문양차량사업소", typ: r("PuneHedgehog") },
        { json: "감삼-두류", js: "감삼-두류", typ: r("PuneHedgehog") },
        { json: "두류-내당", js: "두류-내당", typ: r("PuneHedgehog") },
        { json: "내당-반고개", js: "내당-반고개", typ: r("PuneHedgehog") },
        { json: "반고개-청라언덕", js: "반고개-청라언덕", typ: r("PuneHedgehog") },
        { json: "청라언덕-반월당", js: "청라언덕-반월당", typ: r("PuneHedgehog") },
        { json: "반월당-경대병원", js: "반월당-경대병원", typ: r("PuneHedgehog") },
        { json: "경대병원-대구은행", js: "경대병원-대구은행", typ: r("PuneHedgehog") },
        { json: "대구은행-범어", js: "대구은행-범어", typ: r("PuneHedgehog") },
        { json: "범어-수성구청", js: "범어-수성구청", typ: r("PuneHedgehog") },
        { json: "수성구청-만촌", js: "수성구청-만촌", typ: r("PuneHedgehog") },
        { json: "만촌-담티", js: "만촌-담티", typ: r("PuneHedgehog") },
        { json: "담티-연호", js: "담티-연호", typ: r("PuneHedgehog") },
        { json: "연호-대공원", js: "연호-대공원", typ: r("PuneHedgehog") },
        { json: "정평-임당", js: "정평-임당", typ: r("PuneHedgehog") },
        { json: "임당-영남대", js: "임당-영남대", typ: r("PuneHedgehog") },
        { json: "대공원-연호", js: "대공원-연호", typ: r("PuneHedgehog") },
        { json: "연호-담티", js: "연호-담티", typ: r("PuneHedgehog") },
        { json: "담티-만촌", js: "담티-만촌", typ: r("PuneHedgehog") },
        { json: "만촌-수성구청", js: "만촌-수성구청", typ: r("PuneHedgehog") },
        { json: "수성구청-범어", js: "수성구청-범어", typ: r("PuneHedgehog") },
        { json: "범어-대구은행", js: "범어-대구은행", typ: r("PuneHedgehog") },
        { json: "대구은행-경대병원", js: "대구은행-경대병원", typ: r("PuneHedgehog") },
        { json: "경대병원-반월당", js: "경대병원-반월당", typ: r("PuneHedgehog") },
        { json: "반월당-청라언덕", js: "반월당-청라언덕", typ: r("PuneHedgehog") },
        { json: "청라언덕-반고개", js: "청라언덕-반고개", typ: r("PuneHedgehog") },
        { json: "반고개-내당", js: "반고개-내당", typ: r("PuneHedgehog") },
        { json: "내당-두류", js: "내당-두류", typ: r("PuneHedgehog") },
        { json: "두류-감삼", js: "두류-감삼", typ: r("PuneHedgehog") },
        { json: "영남대종점-영남대", js: "영남대종점-영남대", typ: r("PuneHedgehog") },
        { json: "대공원-고산", js: "대공원-고산", typ: r("PuneHedgehog") },
        { json: "고산-신매", js: "고산-신매", typ: r("PuneHedgehog") },
        { json: "사월-신매", js: "사월-신매", typ: r("PuneHedgehog") },
        { json: "신매-사월", js: "신매-사월", typ: r("PuneHedgehog") },
        { json: "사월-정평", js: "사월-정평", typ: r("PuneHedgehog") },
    ], false),
    "명덕청라언덕": o([
        { json: "연결선", js: "연결선", typ: r("PuneHedgehog") },
    ], false),
    "도시철도_대전교통공사": o([
        { json: "대전 도시철도 1호선", js: "대전 도시철도 1호선", typ: r("PuneHedgehog") },
    ], false),
    "도시철도_부산김해경전철운영주식회사": o([
        { json: "부산김해경전철", js: "부산김해경전철", typ: m(r("PuneHedgehog")) },
    ], false),
    "Tentacled부산교통공사": o([
        { json: "부산 도시철도 1호선", js: "부산 도시철도 1호선", typ: r("PuneHedgehog") },
        { json: "부산 도시철도 2호선", js: "부산 도시철도 2호선", typ: r("Fluffy부산도시철도2호선") },
        { json: "부산 도시철도 3호선", js: "부산 도시철도 3호선", typ: r("부산도시철도3호선") },
        { json: "부산 도시철도 4호선", js: "부산 도시철도 4호선", typ: m(r("PuneHedgehog")) },
    ], false),
    "Fluffy부산도시철도2호선": o([
        { json: "광안-금련산", js: "광안-금련산", typ: r("PuneHedgehog") },
        { json: "동백-해운대", js: "동백-해운대", typ: r("PuneHedgehog") },
        { json: "해운대-중동", js: "해운대-중동", typ: r("PuneHedgehog") },
        { json: "중동-장산", js: "중동-장산", typ: r("PuneHedgehog") },
        { json: "민락-센텀시티", js: "민락-센텀시티", typ: r("PuneHedgehog") },
        { json: "센텀시티-민락", js: "센텀시티-민락", typ: r("PuneHedgehog") },
        { json: "남양산-양산", js: "남양산-양산", typ: r("PuneHedgehog") },
        { json: "증산-부산대양산캠퍼스", js: "증산-부산대양산캠퍼스", typ: r("PuneHedgehog") },
        { json: "부산대양산캠퍼스-남양산", js: "부산대양산캠퍼스-남양산", typ: r("PuneHedgehog") },
        { json: "증산-호포", js: "증산-호포", typ: r("Purple기타") },
        { json: "양산-양산인상선", js: "양산-양산인상선", typ: r("PuneHedgehog") },
        { json: "양산-양산종합운동장", js: "양산-양산종합운동장", typ: r("PuneHedgehog") },
        { json: "율리-화명", js: "율리-화명", typ: r("PuneHedgehog") },
        { json: "화명-수정", js: "화명-수정", typ: r("PuneHedgehog") },
        { json: "덕천-구명", js: "덕천-구명", typ: r("PuneHedgehog") },
        { json: "구명-구남", js: "구명-구남", typ: r("PuneHedgehog") },
        { json: "구남-모라", js: "구남-모라", typ: r("PuneHedgehog") },
        { json: "모라-모덕", js: "모라-모덕", typ: r("PuneHedgehog") },
        { json: "모덕-덕포", js: "모덕-덕포", typ: r("PuneHedgehog") },
        { json: "덕포-사상", js: "덕포-사상", typ: r("PuneHedgehog") },
        { json: "사상-감전", js: "사상-감전", typ: r("PuneHedgehog") },
        { json: "감전-주례", js: "감전-주례", typ: r("PuneHedgehog") },
        { json: "주례-냉정", js: "주례-냉정", typ: r("PuneHedgehog") },
        { json: "서면-전포", js: "서면-전포", typ: r("PuneHedgehog") },
        { json: "전포-국제금융센터부산은행", js: "전포-국제금융센터부산은행", typ: r("PuneHedgehog") },
        { json: "국제금융센터부산은행-문현", js: "국제금융센터부산은행-문현", typ: r("PuneHedgehog") },
        { json: "문현-지게골", js: "문현-지게골", typ: r("PuneHedgehog") },
        { json: "지게골-못골", js: "지게골-못골", typ: r("PuneHedgehog") },
        { json: "못골-대연", js: "못골-대연", typ: r("PuneHedgehog") },
        { json: "대연-경성대부경대", js: "대연-경성대부경대", typ: r("PuneHedgehog") },
        { json: "서면-부암", js: "서면-부암", typ: r("PuneHedgehog") },
        { json: "부암-가야", js: "부암-가야", typ: r("PuneHedgehog") },
        { json: "가야-동의대", js: "가야-동의대", typ: r("PuneHedgehog") },
        { json: "동의대-개금", js: "동의대-개금", typ: r("PuneHedgehog") },
        { json: "개금-냉정", js: "개금-냉정", typ: r("PuneHedgehog") },
        { json: "덕천-수정", js: "덕천-수정", typ: r("PuneHedgehog") },
        { json: "율리-동원", js: "율리-동원", typ: r("PuneHedgehog") },
        { json: "동원-금곡", js: "동원-금곡", typ: r("PuneHedgehog") },
        { json: "금곡-호포", js: "금곡-호포", typ: r("PuneHedgehog") },
        { json: "경성대부경대-남천", js: "경성대부경대-남천", typ: r("PuneHedgehog") },
        { json: "남천-금련산", js: "남천-금련산", typ: r("PuneHedgehog") },
        { json: "수영-민락", js: "수영-민락", typ: r("PuneHedgehog") },
        { json: "민락-수영", js: "민락-수영", typ: r("PuneHedgehog") },
        { json: "광안-수영", js: "광안-수영", typ: r("PuneHedgehog") },
        { json: "수영-광안", js: "수영-광안", typ: r("PuneHedgehog") },
        { json: "벡스코-동백", js: "벡스코-동백", typ: r("PuneHedgehog") },
        { json: "센텀시티-시립미술관", js: "센텀시티-시립미술관", typ: r("PuneHedgehog") },
        { json: "호포차량사업소-호포", js: "호포차량사업소-호포", typ: r("PuneHedgehog") },
        { json: "호포차량사업소", js: "호포차량사업소", typ: r("PuneHedgehog") },
        { json: "호포차량기지", js: "호포차량기지", typ: r("PuneHedgehog") },
        { json: "장산-장산주박기지", js: "장산-장산주박기지", typ: r("PuneHedgehog") },
        { json: "장산주박기지", js: "장산주박기지", typ: r("PuneHedgehog") },
    ], false),
    "부산도시철도3호선": o([
        { json: "대저차량사업소-대저", js: "대저차량사업소-대저", typ: r("PuneHedgehog") },
        { json: "대저-체육공원", js: "대저-체육공원", typ: r("PuneHedgehog") },
        { json: "체육공원-강서구청", js: "체육공원-강서구청", typ: r("PuneHedgehog") },
        { json: "강서구청-구포", js: "강서구청-구포", typ: r("PuneHedgehog") },
        { json: "구포-덕천", js: "구포-덕천", typ: r("PuneHedgehog") },
        { json: "숙등-남산정", js: "숙등-남산정", typ: r("PuneHedgehog") },
        { json: "남산정-만덕", js: "남산정-만덕", typ: r("PuneHedgehog") },
        { json: "만덕-미남", js: "만덕-미남", typ: r("Purple기타") },
        { json: "미남-만덕", js: "미남-만덕", typ: r("Purple기타") },
        { json: "만덕-남산정", js: "만덕-남산정", typ: r("PuneHedgehog") },
        { json: "숙등-덕천", js: "숙등-덕천", typ: r("PuneHedgehog") },
        { json: "미남-사직", js: "미남-사직", typ: r("PuneHedgehog") },
        { json: "사직-종합운동장", js: "사직-종합운동장", typ: r("PuneHedgehog") },
        { json: "종합운동장-거제", js: "종합운동장-거제", typ: r("PuneHedgehog") },
        { json: "거제-연산", js: "거제-연산", typ: r("PuneHedgehog") },
        { json: "연산-물만골", js: "연산-물만골", typ: r("PuneHedgehog") },
        { json: "사직-미남", js: "사직-미남", typ: r("PuneHedgehog") },
        { json: "망미-수영", js: "망미-수영", typ: r("PuneHedgehog") },
        { json: "수영-망미", js: "수영-망미", typ: r("PuneHedgehog") },
        { json: "망미-배산", js: "망미-배산", typ: r("PuneHedgehog") },
        { json: "배산-물만골", js: "배산-물만골", typ: r("PuneHedgehog") },
        { json: "수영", js: "수영", typ: r("PuneHedgehog") },
        { json: "수영-광안", js: "수영-광안", typ: r("PuneHedgehog") },
        { json: "광안-수영", js: "광안-수영", typ: r("PuneHedgehog") },
        { json: "대저차량사업소", js: "대저차량사업소", typ: r("PuneHedgehog") },
    ], false),
    "Purple서울교통공사": o([
        { json: "서울교통공사 1호선", js: "서울교통공사 1호선", typ: m(r("PuneHedgehog")) },
        { json: "서울교통공사 6호선", js: "서울교통공사 6호선", typ: r("PuneHedgehog") },
        { json: "서울교통공사 5호선", js: "서울교통공사 5호선", typ: m(r("PuneHedgehog")) },
        { json: "서울교통공사 5호선 강동삼각선", js: "서울교통공사 5호선 강동삼각선", typ: r("Purple서울교통공사5호선강동삼각선") },
        { json: "서울교통공사 5호선 마천지선", js: "서울교통공사 5호선 마천지선", typ: m(r("PuneHedgehog")) },
        { json: "서울교통공사 2호선 신정지선", js: "서울교통공사 2호선 신정지선", typ: m(r("PuneHedgehog")) },
        { json: "서울교통공사 2호선", js: "서울교통공사 2호선", typ: m(r("PuneHedgehog")) },
        { json: "서울교통공사 2호선 성수지선", js: "서울교통공사 2호선 성수지선", typ: m(r("PuneHedgehog")) },
        { json: "삼송지축선", js: "삼송지축선", typ: r("Purple삼송지축선") },
        { json: "서울교통공사 7호선", js: "서울교통공사 7호선", typ: m(r("PuneHedgehog")) },
        { json: "서울교통공사 4호선 창동기지선", js: "서울교통공사 4호선 창동기지선", typ: r("PuneHedgehog") },
        { json: "서울교통공사 4호선 노원창동선", js: "서울교통공사 4호선 노원창동선", typ: m(r("PuneHedgehog")) },
        { json: "서울교통공사 4호선", js: "서울교통공사 4호선", typ: r("PuneHedgehog") },
        { json: "진접선", js: "진접선", typ: r("Purple진접선") },
        { json: "서울교통공사 3호선", js: "서울교통공사 3호선", typ: r("PuneHedgehog") },
        { json: "서울교통공사 3호선 수서기지선", js: "서울교통공사 3호선 수서기지선", typ: m(r("PuneHedgehog")) },
        { json: "서울교통공사 3호선 수서삼각선", js: "서울교통공사 3호선 수서삼각선", typ: r("서울교통공사3호선수서삼각선") },
        { json: "서울교통공사 8호선", js: "서울교통공사 8호선", typ: m(r("PuneHedgehog")) },
        { json: "서울교통공사 3호선 지축기지선", js: "서울교통공사 3호선 지축기지선", typ: m(r("PuneHedgehog")) },
        { json: "하남선", js: "하남선", typ: m(r("PuneHedgehog")) },
    ], false),
    "Purple삼송지축선": o([
        { json: "삼송-지축기", js: "삼송-지축기", typ: r("PuneHedgehog") },
    ], false),
    "서울교통공사3호선수서삼각선": o([
        { json: "수서기-가락시", js: "수서기-가락시", typ: r("PuneHedgehog") },
    ], false),
    "Purple서울교통공사5호선강동삼각선": o([
        { json: "길동-강동삼각선분기", js: "길동-강동삼각선분기", typ: r("PuneHedgehog") },
    ], false),
    "Purple진접선": o([
        { json: "풍양-별가람", js: "풍양-별가람", typ: r("Purple기타") },
        { json: "당고개", js: "당고개", typ: r("PuneHedgehog") },
        { json: "오남-풍양", js: "오남-풍양", typ: r("PuneHedgehog") },
        { json: "진접선종점-진접", js: "진접선종점-진접", typ: r("PuneHedgehog") },
        { json: "진접-오남", js: "진접-오남", typ: r("PuneHedgehog") },
    ], false),
    "Tentacled서울시메트로9호선": o([
        { json: "서울시메트로 9호선", js: "서울시메트로 9호선", typ: r("Sticky서울시메트로9호선") },
    ], false),
    "Sticky서울시메트로9호선": o([
        { json: "계양-김포공", js: "계양-김포공", typ: r("계양김포공") },
        { json: "국회의사당-여의도", js: "국회의사당-여의도", typ: r("PuneHedgehog") },
        { json: "여의도-국회의사당", js: "여의도-국회의사당", typ: r("PuneHedgehog") },
        { json: "국회의사당-당산", js: "국회의사당-당산", typ: r("PuneHedgehog") },
        { json: "당산-국회의사당", js: "당산-국회의사당", typ: r("PuneHedgehog") },
        { json: "당산-선유도", js: "당산-선유도", typ: r("PuneHedgehog") },
        { json: "선유도-당산", js: "선유도-당산", typ: r("PuneHedgehog") },
        { json: "여의도-샛강", js: "여의도-샛강", typ: r("PuneHedgehog") },
        { json: "샛강-노량진", js: "샛강-노량진", typ: r("PuneHedgehog") },
        { json: "노량진-노들", js: "노량진-노들", typ: r("PuneHedgehog") },
        { json: "노들-흑석", js: "노들-흑석", typ: r("PuneHedgehog") },
        { json: "구반포-신반포", js: "구반포-신반포", typ: r("PuneHedgehog") },
        { json: "신반포-고속터미널", js: "신반포-고속터미널", typ: r("PuneHedgehog") },
        { json: "봉은사-종합운동장", js: "봉은사-종합운동장", typ: r("PuneHedgehog") },
        { json: "봉은사-삼성중앙", js: "봉은사-삼성중앙", typ: r("PuneHedgehog") },
        { json: "삼성중앙-선정릉", js: "삼성중앙-선정릉", typ: r("PuneHedgehog") },
        { json: "선정릉-언주", js: "선정릉-언주", typ: r("PuneHedgehog") },
        { json: "언주-신논현", js: "언주-신논현", typ: r("PuneHedgehog") },
        { json: "신논현-사평", js: "신논현-사평", typ: r("PuneHedgehog") },
        { json: "사평-고속터미널", js: "사평-고속터미널", typ: r("PuneHedgehog") },
        { json: "구반포-동작", js: "구반포-동작", typ: r("PuneHedgehog") },
        { json: "동작-흑석", js: "동작-흑석", typ: r("PuneHedgehog") },
        { json: "삼전-석촌고분", js: "삼전-석촌고분", typ: r("PuneHedgehog") },
        { json: "석촌고분-석촌", js: "석촌고분-석촌", typ: r("PuneHedgehog") },
        { json: "석촌-송파나루", js: "석촌-송파나루", typ: r("PuneHedgehog") },
        { json: "송파나루-한성백제", js: "송파나루-한성백제", typ: r("PuneHedgehog") },
        { json: "한성백제-올림픽공원", js: "한성백제-올림픽공원", typ: r("PuneHedgehog") },
        { json: "올림픽공원-둔촌오륜", js: "올림픽공원-둔촌오륜", typ: r("PuneHedgehog") },
        { json: "둔촌오륜-중앙보훈병원", js: "둔촌오륜-중앙보훈병원", typ: r("PuneHedgehog") },
        { json: "중앙보훈병원-둔촌오륜", js: "중앙보훈병원-둔촌오륜", typ: r("PuneHedgehog") },
        { json: "둔촌오륜-올림픽공원", js: "둔촌오륜-올림픽공원", typ: r("PuneHedgehog") },
        { json: "올림픽공원-한성백제", js: "올림픽공원-한성백제", typ: r("PuneHedgehog") },
        { json: "한성백제-송파나루", js: "한성백제-송파나루", typ: r("PuneHedgehog") },
        { json: "송파나루-석촌", js: "송파나루-석촌", typ: r("PuneHedgehog") },
        { json: "석촌-석촌고분", js: "석촌-석촌고분", typ: r("PuneHedgehog") },
        { json: "석촌고분-삼전", js: "석촌고분-삼전", typ: r("PuneHedgehog") },
        { json: "삼전-종합운동장", js: "삼전-종합운동장", typ: r("PuneHedgehog") },
        { json: "개화-김포공항", js: "개화-김포공항", typ: r("Purple기타") },
        { json: "김포공항-공항시장", js: "김포공항-공항시장", typ: r("PuneHedgehog") },
        { json: "공항시장-신방화", js: "공항시장-신방화", typ: r("PuneHedgehog") },
        { json: "신방화-마곡나루", js: "신방화-마곡나루", typ: r("PuneHedgehog") },
        { json: "마곡나루-양천향교", js: "마곡나루-양천향교", typ: r("PuneHedgehog") },
        { json: "양천향교-가양", js: "양천향교-가양", typ: r("PuneHedgehog") },
        { json: "등촌-염창", js: "등촌-염창", typ: r("PuneHedgehog") },
        { json: "염창-신목동", js: "염창-신목동", typ: r("PuneHedgehog") },
        { json: "신목동-선유도", js: "신목동-선유도", typ: r("PuneHedgehog") },
        { json: "등촌-증미", js: "등촌-증미", typ: r("PuneHedgehog") },
        { json: "증미-가양", js: "증미-가양", typ: r("PuneHedgehog") },
        { json: "김포차량사업소-개화", js: "김포차량사업소-개화", typ: r("PuneHedgehog") },
        { json: "김포공항-김포차량사업소", js: "김포공항-김포차량사업소", typ: r("PuneHedgehog") },
        { json: "중앙보훈병원-종점", js: "중앙보훈병원-종점", typ: r("PuneHedgehog") },
    ], false),
    "계양김포공": o([
        { json: "_9호선", js: "_9호선", typ: r("PuneHedgehog") },
    ], false),
    "에스지레일주식회사": o([
        { json: "수도권 광역급행철도 A노선", js: "수도권 광역급행철도 A노선", typ: r("PuneHedgehog") },
    ], false),
    "도시철도_용인경량전철주식회사": o([
        { json: "용인경전철", js: "용인경전철", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy우이신설경전철주식회사": o([
        { json: "서울 경전철 우이신설선", js: "서울 경전철 우이신설선", typ: m(r("PuneHedgehog")) },
    ], false),
    "Sticky인천교통공사": o([
        { json: "인천공항 자기부상철도", js: "인천공항 자기부상철도", typ: r("인천공항자기부상철도") },
        { json: "인천 도시철도 2호선", js: "인천 도시철도 2호선", typ: r("PuneHedgehog") },
        { json: "서울교통공사 7호선", js: "서울교통공사 7호선", typ: m(r("PuneHedgehog")) },
        { json: "인천 도시철도 1호선", js: "인천 도시철도 1호선", typ: r("인천도시철도1호선") },
    ], false),
    "인천도시철도1호선": o([
        { json: "송도달빛축제공원-1호선종점", js: "송도달빛축제공원-1호선종점", typ: r("송도달빛축제공원1호선종점") },
        { json: "계양-1호선종점", js: "계양-1호선종점", typ: r("계양1호선종점") },
        { json: "박촌-귤현차량사업소", js: "박촌-귤현차량사업소", typ: r("PuneHedgehog") },
        { json: "계양-귤현", js: "계양-귤현", typ: r("PuneHedgehog") },
        { json: "귤현-박촌", js: "귤현-박촌", typ: r("PuneHedgehog") },
        { json: "박촌-임학", js: "박촌-임학", typ: r("PuneHedgehog") },
        { json: "임학-계산", js: "임학-계산", typ: r("PuneHedgehog") },
        { json: "계산-경인교대", js: "계산-경인교대", typ: r("PuneHedgehog") },
        { json: "경인교대-작전", js: "경인교대-작전", typ: r("PuneHedgehog") },
        { json: "작전-갈산", js: "작전-갈산", typ: r("PuneHedgehog") },
        { json: "갈산-부평구청", js: "갈산-부평구청", typ: r("PuneHedgehog") },
        { json: "부평구청-부평시장", js: "부평구청-부평시장", typ: r("PuneHedgehog") },
        { json: "부평시장-부평", js: "부평시장-부평", typ: r("PuneHedgehog") },
        { json: "부평-동수", js: "부평-동수", typ: r("PuneHedgehog") },
        { json: "동수-부평삼거리", js: "동수-부평삼거리", typ: r("PuneHedgehog") },
        { json: "국제업무지구-센트럴파크", js: "국제업무지구-센트럴파크", typ: r("PuneHedgehog") },
        { json: "센트럴파크-인천대입구", js: "센트럴파크-인천대입구", typ: r("PuneHedgehog") },
        { json: "인천대입구-지식정보단지", js: "인천대입구-지식정보단지", typ: r("PuneHedgehog") },
        { json: "지식정보단지-테크노파크", js: "지식정보단지-테크노파크", typ: r("PuneHedgehog") },
        { json: "테크노파크-캠퍼스타운", js: "테크노파크-캠퍼스타운", typ: r("PuneHedgehog") },
        { json: "캠퍼스타운-동막", js: "캠퍼스타운-동막", typ: r("PuneHedgehog") },
        { json: "동막-동춘", js: "동막-동춘", typ: r("PuneHedgehog") },
        { json: "동춘-원인재", js: "동춘-원인재", typ: r("PuneHedgehog") },
        { json: "원인재-신연수", js: "원인재-신연수", typ: r("PuneHedgehog") },
        { json: "신연수-선학", js: "신연수-선학", typ: r("PuneHedgehog") },
        { json: "선학-문학경기장", js: "선학-문학경기장", typ: r("PuneHedgehog") },
        { json: "문학경기장-인천터미널", js: "문학경기장-인천터미널", typ: r("PuneHedgehog") },
        { json: "인천터미널-예술회관", js: "인천터미널-예술회관", typ: r("PuneHedgehog") },
        { json: "예술회관-인천시청", js: "예술회관-인천시청", typ: r("PuneHedgehog") },
        { json: "인천시청-간석오거리", js: "인천시청-간석오거리", typ: r("PuneHedgehog") },
        { json: "간석오거리-부평삼거리", js: "간석오거리-부평삼거리", typ: r("PuneHedgehog") },
        { json: "박촌-귤현", js: "박촌-귤현", typ: r("PuneHedgehog") },
        { json: "송도달빛축제공원-국제업무지구", js: "송도달빛축제공원-국제업무지구", typ: r("PuneHedgehog") },
        { json: "동암-간석오거리", js: "동암-간석오거리", typ: r("PuneHedgehog") },
    ], false),
    "계양1호선종점": o([
        { json: "계양", js: "계양", typ: r("PuneHedgehog") },
    ], false),
    "송도달빛축제공원1호선종점": o([
        { json: "송도", js: "송도", typ: r("PuneHedgehog") },
    ], false),
    "인천공항자기부상철도": o([
        { json: "워터파크-파라다이스시티", js: "워터파크-파라다이스시티", typ: r("Purple기타") },
        { json: "용유기지-용유", js: "용유기지-용유", typ: r("PuneHedgehog") },
        { json: "용유-워터파크", js: "용유-워터파크", typ: r("PuneHedgehog") },
        { json: "합동청사-장기주차장", js: "합동청사-장기주차장", typ: r("PuneHedgehog") },
        { json: "장기주차장-인천국제공항", js: "장기주차장-인천국제공항", typ: r("PuneHedgehog") },
        { json: "파라다이스시티-합동청사", js: "파라다이스시티-합동청사", typ: r("PuneHedgehog") },
        { json: "인천국제공항-종점", js: "인천국제공항-종점", typ: r("PuneHedgehog") },
    ], false),
    "도시철도_주식회사우진메트로": o([
        { json: "의정부경전철", js: "의정부경전철", typ: r("PuneHedgehog") },
    ], false),
    "도시철도_하남도시공사": o([
        { json: "하남선", js: "하남선", typ: m(r("PuneHedgehog")) },
    ], false),
    "Braggadocious한국철도공사": o([
        { json: "일산선", js: "일산선", typ: m(r("PuneHedgehog")) },
        { json: "삼송지축선", js: "삼송지축선", typ: r("Purple삼송지축선") },
        { json: "분당선", js: "분당선", typ: r("Purple분당선") },
        { json: "과천선", js: "과천선", typ: m(r("PuneHedgehog")) },
    ], false),
    "Purple분당선": o([
        { json: "왕십리-서울숲", js: "왕십리-서울숲", typ: r("PuneHedgehog") },
        { json: "서울숲-로데오", js: "서울숲-로데오", typ: r("PuneHedgehog") },
        { json: "로데오-강남구", js: "로데오-강남구", typ: r("PuneHedgehog") },
        { json: "강남구-선정릉", js: "강남구-선정릉", typ: r("PuneHedgehog") },
        { json: "선정릉-선릉", js: "선정릉-선릉", typ: r("PuneHedgehog") },
        { json: "선릉-한티", js: "선릉-한티", typ: r("PuneHedgehog") },
        { json: "수서-복정", js: "수서-복정", typ: r("Purple기타") },
        { json: "복정-가천대", js: "복정-가천대", typ: r("PuneHedgehog") },
        { json: "가천대-태평", js: "가천대-태평", typ: r("PuneHedgehog") },
        { json: "태평-모란", js: "태평-모란", typ: r("PuneHedgehog") },
        { json: "모란-야탑", js: "모란-야탑", typ: r("PuneHedgehog") },
        { json: "야탑-이매", js: "야탑-이매", typ: r("PuneHedgehog") },
        { json: "미금-오리", js: "미금-오리", typ: r("PuneHedgehog") },
        { json: "오리-죽전", js: "오리-죽전", typ: r("PuneHedgehog") },
        { json: "죽전-보정", js: "죽전-보정", typ: r("PuneHedgehog") },
        { json: "청명-영통", js: "청명-영통", typ: r("PuneHedgehog") },
        { json: "영통-망포", js: "영통-망포", typ: r("PuneHedgehog") },
        { json: "망포-매탄권", js: "망포-매탄권", typ: r("PuneHedgehog") },
        { json: "매탄권-수원시", js: "매탄권-수원시", typ: r("PuneHedgehog") },
        { json: "신수원-매교", js: "신수원-매교", typ: r("PuneHedgehog") },
        { json: "매교-수원시", js: "매교-수원시", typ: r("PuneHedgehog") },
        { json: "청명-상갈", js: "청명-상갈", typ: r("PuneHedgehog") },
        { json: "상갈-기흥", js: "상갈-기흥", typ: r("PuneHedgehog") },
        { json: "기흥-신갈", js: "기흥-신갈", typ: r("PuneHedgehog") },
        { json: "신갈-구성", js: "신갈-구성", typ: r("PuneHedgehog") },
        { json: "구성-보정", js: "구성-보정", typ: r("PuneHedgehog") },
        { json: "죽전-오리", js: "죽전-오리", typ: r("PuneHedgehog") },
        { json: "미금-정자", js: "미금-정자", typ: r("PuneHedgehog") },
        { json: "정자-수내", js: "정자-수내", typ: r("PuneHedgehog") },
        { json: "수내-서현", js: "수내-서현", typ: r("PuneHedgehog") },
        { json: "서현-이매", js: "서현-이매", typ: r("PuneHedgehog") },
        { json: "수서-대모산", js: "수서-대모산", typ: r("PuneHedgehog") },
        { json: "대모산-개포동", js: "대모산-개포동", typ: r("PuneHedgehog") },
        { json: "개포동-구룡역", js: "개포동-구룡역", typ: r("PuneHedgehog") },
        { json: "구룡역-도곡", js: "구룡역-도곡", typ: r("PuneHedgehog") },
        { json: "도곡-한티", js: "도곡-한티", typ: r("PuneHedgehog") },
        { json: "로데오-서울숲", js: "로데오-서울숲", typ: r("PuneHedgehog") },
        { json: "분당선시점-왕십리", js: "분당선시점-왕십리", typ: r("PuneHedgehog") },
        { json: "야탑-삼동", js: "야탑-삼동", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy삭도": o([
        { json: "청풍호반케이블카 주식회사", js: "청풍호반케이블카 주식회사", typ: r("삭도_청풍호반케이블카주식회사") },
        { json: "삼진관광개발 주식회사", js: "삼진관광개발 주식회사", typ: r("삭도_삼진관광개발주식회사") },
        { json: "거제 케이블카 주식회사", js: "거제 케이블카 주식회사", typ: r("삭도_거제케이블카주식회사") },
        { json: "통영관광개발공사", js: "통영관광개발공사", typ: r("삭도_통영관광개발공사") },
        { json: "송도해상케이블카 주식회사", js: "송도해상케이블카 주식회사", typ: r("삭도_송도해상케이블카주식회사") },
        { json: "제부도해상케이블카 주식회사", js: "제부도해상케이블카 주식회사", typ: r("삭도_제부도해상케이블카주식회사") },
        { json: "양지대둔산삭도 유한회사", js: "양지대둔산삭도 유한회사", typ: r("삭도_양지대둔산삭도유한회사") },
        { json: "한국방송공사", js: "한국방송공사", typ: r("삭도_한국방송공사") },
        { json: "영남알프스얼음골케이블카 주식회사", js: "영남알프스얼음골케이블카 주식회사", typ: r("삭도_영남알프스얼음골케이블카주식회사") },
        { json: "한림팩 주식회사", js: "한림팩 주식회사", typ: r("삭도_한림팩주식회사") },
        { json: "호텔금오산 주식회사", js: "호텔금오산 주식회사", typ: r("삭도_호텔금오산주식회사") },
        { json: "사천바다케이블카 주식회사", js: "사천바다케이블카 주식회사", typ: r("삭도_사천바다케이블카주식회사") },
        { json: "내장산개발 주식회사", js: "내장산개발 주식회사", typ: r("삭도_내장산개발주식회사") },
        { json: "설악케이블카 주식회사", js: "설악케이블카 주식회사", typ: r("삭도_설악케이블카주식회사") },
        { json: "목포해상케이블카 주식회사", js: "목포해상케이블카 주식회사", typ: r("삭도_목포해상케이블카주식회사") },
        { json: "강원도 화천군", js: "강원도 화천군", typ: r("삭도_강원도화천군") },
        { json: "주식회사 소노인터네셔널", js: "주식회사 소노인터네셔널", typ: r("삭도_주식회사소노인터네셔널") },
        { json: "여수해상케이블카 주식회사", js: "여수해상케이블카 주식회사", typ: r("삭도_여수해상케이블카주식회사") },
        { json: "부산시설공단", js: "부산시설공단", typ: r("삭도_부산시설공단") },
        { json: "재단법인 송암스페이스센터", js: "재단법인 송암스페이스센터", typ: r("삭도_재단법인송암스페이스센터") },
        { json: "주식회사 에이치제이매그놀리아용평호텔앤리조트", js: "주식회사 에이치제이매그놀리아용평호텔앤리조트", typ: r("삭도_주식회사에이치제이매그놀리아용평호텔앤리조트") },
        { json: "주식회사 울진케이블카", js: "주식회사 울진케이블카", typ: r("삭도_주식회사울진케이블카") },
        { json: "하동케이블카 주식회사", js: "하동케이블카 주식회사", typ: r("삭도_하동케이블카주식회사") },
        { json: "한국삭도공업주식회사", js: "한국삭도공업주식회사", typ: r("삭도_한국삭도공업주식회사") },
        { json: "대덕개발 주식회사", js: "대덕개발 주식회사", typ: r("삭도_대덕개발주식회사") },
        { json: "경상북도 울릉군", js: "경상북도 울릉군", typ: r("삭도_경상북도울릉군") },
    ], false),
    "삭도_강원도화천군": o([
        { json: "백암산 케이블카", js: "백암산 케이블카", typ: r("PuneHedgehog") },
    ], false),
    "삭도_거제케이블카주식회사": o([
        { json: "거제 파노라마 케이블카", js: "거제 파노라마 케이블카", typ: r("PuneHedgehog") },
    ], false),
    "삭도_경상북도울릉군": o([
        { json: "독도전망대 케이블카", js: "독도전망대 케이블카", typ: r("PuneHedgehog") },
    ], false),
    "삭도_내장산개발주식회사": o([
        { json: "내장산 케이블카", js: "내장산 케이블카", typ: r("PuneHedgehog") },
    ], false),
    "삭도_대덕개발주식회사": o([
        { json: "앞산 케이블카", js: "앞산 케이블카", typ: r("PuneHedgehog") },
    ], false),
    "삭도_목포해상케이블카주식회사": o([
        { json: "목포해상케이블카", js: "목포해상케이블카", typ: r("Purple기타") },
    ], false),
    "삭도_부산시설공단": o([
        { json: "금강공원 케이블카", js: "금강공원 케이블카", typ: r("PuneHedgehog") },
    ], false),
    "삭도_사천바다케이블카주식회사": o([
        { json: "사천바다케이블카", js: "사천바다케이블카", typ: r("PuneHedgehog") },
    ], false),
    "삭도_삼진관광개발주식회사": o([
        { json: "두륜산 케이블카", js: "두륜산 케이블카", typ: r("PuneHedgehog") },
    ], false),
    "삭도_설악케이블카주식회사": o([
        { json: "설악 케이블카", js: "설악 케이블카", typ: r("PuneHedgehog") },
    ], false),
    "삭도_송도해상케이블카주식회사": o([
        { json: "송도해상케이블카", js: "송도해상케이블카", typ: r("PuneHedgehog") },
    ], false),
    "삭도_양지대둔산삭도유한회사": o([
        { json: "대둔산 케이블카", js: "대둔산 케이블카", typ: r("PuneHedgehog") },
    ], false),
    "삭도_여수해상케이블카주식회사": o([
        { json: "여수해상케이블카", js: "여수해상케이블카", typ: r("PuneHedgehog") },
    ], false),
    "삭도_영남알프스얼음골케이블카주식회사": o([
        { json: "영남알프스 얼음골 케이블카", js: "영남알프스 얼음골 케이블카", typ: r("PuneHedgehog") },
    ], false),
    "삭도_재단법인송암스페이스센터": o([
        { json: "송암 스페이스센터 케이블카", js: "송암 스페이스센터 케이블카", typ: r("PuneHedgehog") },
    ], false),
    "삭도_제부도해상케이블카주식회사": o([
        { json: "제부도 해상케이블카", js: "제부도 해상케이블카", typ: r("PuneHedgehog") },
    ], false),
    "삭도_주식회사소노인터네셔널": o([
        { json: "춘천 삼악산 호수 케이블카", js: "춘천 삼악산 호수 케이블카", typ: r("Purple기타") },
    ], false),
    "삭도_주식회사에이치제이매그놀리아용평호텔앤리조트": o([
        { json: "발왕산 관광케이블카", js: "발왕산 관광케이블카", typ: r("Purple기타") },
    ], false),
    "삭도_주식회사울진케이블카": o([
        { json: "왕피천 케이블카", js: "왕피천 케이블카", typ: r("PuneHedgehog") },
    ], false),
    "삭도_청풍호반케이블카주식회사": o([
        { json: "청풍호반케이블카", js: "청풍호반케이블카", typ: r("PuneHedgehog") },
    ], false),
    "삭도_통영관광개발공사": o([
        { json: "통영 케이블카", js: "통영 케이블카", typ: r("PuneHedgehog") },
    ], false),
    "삭도_하동케이블카주식회사": o([
        { json: "하동 플라이웨이 케이블카", js: "하동 플라이웨이 케이블카", typ: r("PuneHedgehog") },
    ], false),
    "삭도_한국방송공사": o([
        { json: "관악산 케이블카", js: "관악산 케이블카", typ: r("PuneHedgehog") },
    ], false),
    "삭도_한국삭도공업주식회사": o([
        { json: "남산 케이블카", js: "남산 케이블카", typ: r("PuneHedgehog") },
    ], false),
    "삭도_한림팩주식회사": o([
        { json: "대구 팔공산 케이블카", js: "대구 팔공산 케이블카", typ: r("PuneHedgehog") },
    ], false),
    "삭도_호텔금오산주식회사": o([
        { json: "금오산 케이블카", js: "금오산 케이블카", typ: r("PuneHedgehog") },
    ], false),
    "영업_열차페리": o([
        { json: "기타", js: "기타", typ: r("열차페리_기타") },
    ], false),
    "열차페리_기타": o([
        { json: "부관훼리 주식회사", js: "부관훼리 주식회사", typ: r("기타_부관훼리주식회사") },
        { json: "미래고속 주식회사", js: "미래고속 주식회사", typ: r("기타_미래고속주식회사") },
    ], false),
    "기타_미래고속주식회사": o([
        { json: "코비", js: "코비", typ: r("Purple기타") },
    ], false),
    "기타_부관훼리주식회사": o([
        { json: "부관훼리", js: "부관훼리", typ: r("Purple기타") },
    ], false),
    "Sticky전용선": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("한국철도공사_1") },
        { json: "주식회사 강원랜드", js: "주식회사 강원랜드", typ: r("전용선_주식회사강원랜드") },
        { json: "탄광궤도", js: "탄광궤도", typ: r("PuneHedgehog") },
    ], false),
    "전용선_주식회사강원랜드": o([
        { json: "하이원추추파크 전용선", js: "하이원추추파크 전용선", typ: r("Purple하이원추추파크전용선") },
    ], false),
    "Purple하이원추추파크전용선": o([
        { json: "심포리-흥전", js: "심포리-흥전", typ: r("Purple기타") },
        { json: "추추스테이션", js: "추추스테이션", typ: r("PuneHedgehog") },
        { json: "나한정-흥전", js: "나한정-흥전", typ: r("PuneHedgehog") },
        { json: "도계솔-나한정", js: "도계솔-나한정", typ: r("PuneHedgehog") },
        { json: "레일바이크", js: "레일바이크", typ: r("Purple기타") },
    ], false),
    "한국철도공사_1": o([
        { json: "경인선", js: "경인선", typ: r("Purple경인선") },
        { json: "북평선", js: "북평선", typ: r("Fluffy북평선") },
        { json: "영동선", js: "영동선", typ: r("Tentacled영동선") },
        { json: "진해선", js: "진해선", typ: r("Fluffy진해선") },
        { json: "삼척선", js: "삼척선", typ: r("Fluffy삼척선") },
        { json: "북전주선", js: "북전주선", typ: r("Fluffy북전주선") },
        { json: "대구선", js: "대구선", typ: r("Fluffy대구선") },
        { json: "경부선", js: "경부선", typ: r("Fluffy경부선") },
        { json: "남부화물기지선", js: "남부화물기지선", typ: r("Fluffy남부화물기지선") },
        { json: "박물관", js: "박물관", typ: r("Purple박물관") },
        { json: "수색객차출발선", js: "수색객차출발선", typ: r("Purple수색객차출발선") },
        { json: "중앙선", js: "중앙선", typ: r("Purple중앙선") },
        { json: "문경선", js: "문경선", typ: r("Fluffy문경선") },
        { json: "경북선", js: "경북선", typ: r("Fluffy경북선") },
        { json: "태백선", js: "태백선", typ: r("Fluffy태백선") },
        { json: "호남선", js: "호남선", typ: r("Indecent호남선") },
        { json: "오송정비기지선", js: "오송정비기지선", typ: r("Purple오송정비기지선") },
        { json: "괴동선", js: "괴동선", typ: r("Fluffy괴동선") },
        { json: "정선선", js: "정선선", typ: r("Purple정선선") },
        { json: "온산선", js: "온산선", typ: r("Fluffy온산선") },
    ], false),
    "Fluffy경부선": o([
        { json: "의왕", js: "의왕", typ: r("의왕") },
        { json: "대전조", js: "대전조", typ: r("대전조") },
        { json: "심천-영동기지", js: "심천-영동기지", typ: r("PuneHedgehog") },
    ], false),
    "대전조": o([
        { json: "동양시멘트선", js: "동양시멘트선", typ: r("PuneHedgehog") },
    ], false),
    "의왕": o([
        { json: "터미널선", js: "터미널선", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy경북선": o([
        { json: "옥산", js: "옥산", typ: r("옥산") },
    ], false),
    "옥산": o([
        { json: "한국철도차량", js: "한국철도차량", typ: r("PuneHedgehog") },
    ], false),
    "Purple경인선": o([
        { json: "인천", js: "인천", typ: m(r("PuneHedgehog")) },
        { json: "경기화학선", js: "경기화학선", typ: r("Purple기타") },
    ], false),
    "Fluffy괴동선": o([
        { json: "괴동", js: "괴동", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy남부화물기지선": o([
        { json: "오봉", js: "오봉", typ: m(r("PuneHedgehog")) },
    ], false),
    "Fluffy대구선": o([
        { json: "K2인입선", js: "K2인입선", typ: r("Purple기타") },
    ], false),
    "Fluffy문경선": o([
        { json: "주평", js: "주평", typ: r("주평") },
    ], false),
    "주평": o([
        { json: "쌍용양회", js: "쌍용양회", typ: r("PuneHedgehog") },
    ], false),
    "Purple박물관": o([
        { json: "철도박물관", js: "철도박물관", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy북전주선": o([
        { json: "북전주", js: "북전주", typ: m(r("PuneHedgehog")) },
        { json: "한솔CSN", js: "한솔CSN", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy북평선": o([
        { json: "동해양회", js: "동해양회", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy삼척선": o([
        { json: "삼표시멘트", js: "삼표시멘트", typ: r("PuneHedgehog") },
    ], false),
    "Purple수색객차출발선": o([
        { json: "수색", js: "수색", typ: r("수색") },
    ], false),
    "수색": o([
        { json: "동화벌크", js: "동화벌크", typ: r("PuneHedgehog") },
    ], false),
    "Tentacled영동선": o([
        { json: "옥계", js: "옥계", typ: r("옥계") },
        { json: "동백산", js: "동백산", typ: r("동백산") },
        { json: "철암", js: "철암", typ: r("Purple기타") },
    ], false),
    "동백산": o([
        { json: "경동탄광선", js: "경동탄광선", typ: r("PuneHedgehog") },
    ], false),
    "옥계": o([
        { json: "당청출입선", js: "당청출입선", typ: r("Purple기타") },
    ], false),
    "Purple오송정비기지선": o([
        { json: "오송", js: "오송", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy온산선": o([
        { json: "온산-온산선종점", js: "온산-온산선종점", typ: r("PuneHedgehog") },
    ], false),
    "Purple정선선": o([
        { json: "쇄재자갈선", js: "쇄재자갈선", typ: r("PuneHedgehog") },
    ], false),
    "Purple중앙선": o([
        { json: "팔당", js: "팔당", typ: r("팔당") },
        { json: "도담", js: "도담", typ: m(r("PuneHedgehog")) },
        { json: "삼곡", js: "삼곡", typ: r("삼곡") },
    ], false),
    "삼곡": o([
        { json: "한일현대시멘트", js: "한일현대시멘트", typ: r("Purple기타") },
    ], false),
    "팔당": o([
        { json: "쌍용전용", js: "쌍용전용", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy진해선": o([
        { json: "진해", js: "진해", typ: r("진해") },
    ], false),
    "진해": o([
        { json: "비료선", js: "비료선", typ: r("Purple기타") },
    ], false),
    "Fluffy태백선": o([
        { json: "입석리", js: "입석리", typ: r("입석리") },
        { json: "쌍룡", js: "쌍룡", typ: r("쌍룡") },
    ], false),
    "쌍룡": o([
        { json: "쌍용시멘트", js: "쌍용시멘트", typ: r("PuneHedgehog") },
    ], false),
    "입석리": o([
        { json: "현대", js: "현대", typ: r("Purple기타") },
        { json: "아세아", js: "아세아", typ: r("PuneHedgehog") },
    ], false),
    "Indecent호남선": o([
        { json: "광주송", js: "광주송", typ: r("광주송") },
        { json: "노령", js: "노령", typ: r("노령") },
    ], false),
    "광주송": o([
        { json: "광주도시철도1호선", js: "광주도시철도1호선", typ: r("PuneHedgehog") },
    ], false),
    "노령": o([
        { json: "다원시스", js: "다원시스", typ: r("PuneHedgehog") },
    ], false),
    "Rok폐지": o([
        { json: "국철", js: "국철", typ: r("Sticky국철") },
        { json: "사철", js: "사철", typ: r("Fluffy사철") },
        { json: "삭도", js: "삭도", typ: r("폐지_삭도") },
        { json: "공영교통", js: "공영교통", typ: r("Fluffy공영교통") },
        { json: "궤도선", js: "궤도선", typ: r("Frisky궤도선") },
        { json: "전용선", js: "전용선", typ: r("Indecent전용선") },
        { json: "열차페리", js: "열차페리", typ: r("Fluffy열차페리") },
        { json: "도시철도", js: "도시철도", typ: r("Sticky도시철도") },
        { json: "기타", js: "기타", typ: r("폐지_기타") },
        { json: "지선", js: "지선", typ: r("Ambitious지선") },
    ], false),
    "Fluffy공영교통": o([
        { json: "궤도선", js: "궤도선", typ: r("Cunning궤도선") },
    ], false),
    "Cunning궤도선": o([
        { json: "서울특별시", js: "서울특별시", typ: r("Fluffy서울특별시") },
    ], false),
    "Fluffy서울특별시": o([
        { json: "경성궤도 본선", js: "경성궤도 본선", typ: r("PuneHedgehog") },
        { json: "경성궤도 광장리선", js: "경성궤도 광장리선", typ: r("Purple기타") },
        { json: "경성궤도 동독도화물지선", js: "경성궤도 동독도화물지선", typ: r("PuneHedgehog") },
    ], false),
    "Sticky국철": o([
        { json: "지선", js: "지선", typ: r("Hilarious지선") },
        { json: "간선", js: "간선", typ: r("Indigo간선") },
        { json: "궤도선", js: "궤도선", typ: r("Magenta궤도선") },
        { json: "전용선", js: "전용선", typ: r("Indigo전용선") },
        { json: "버스", js: "버스", typ: r("Tentacled버스") },
    ], false),
    "Indigo간선": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("한국철도공사_2") },
        { json: "조선총독부 교통국", js: "조선총독부 교통국", typ: r("간선_조선총독부교통국") },
        { json: "철도청", js: "철도청", typ: r("간선_철도청") },
    ], false),
    "간선_조선총독부교통국": o([
        { json: "동해중부선", js: "동해중부선", typ: r("Fluffy동해중부선") },
    ], false),
    "Fluffy동해중부선": o([
        { json: "학산", js: "학산", typ: r("Purple기타") },
    ], false),
    "간선_철도청": o([
        { json: "수려선", js: "수려선", typ: r("PuneHedgehog") },
    ], false),
    "한국철도공사_2": o([
        { json: "영동선", js: "영동선", typ: r("Sticky영동선") },
        { json: "태백선", js: "태백선", typ: r("Tentacled태백선") },
        { json: "경북선", js: "경북선", typ: r("Tentacled경북선") },
        { json: "충북선", js: "충북선", typ: r("Tentacled충북선") },
        { json: "경춘선", js: "경춘선", typ: r("PuneHedgehog") },
        { json: "구 경춘선", js: "구 경춘선", typ: r("Purple기타") },
        { json: "중앙선", js: "중앙선", typ: r("Fluffy중앙선") },
        { json: "함백선", js: "함백선", typ: r("Purple함백선") },
        { json: "동해남부선", js: "동해남부선", typ: r("한국철도공사_동해남부선") },
        { json: "경부선", js: "경부선", typ: r("Purple기타") },
        { json: "호남선", js: "호남선", typ: r("Hilarious호남선") },
        { json: "전라선", js: "전라선", typ: r("Fluffy전라선") },
        { json: "장항선", js: "장항선", typ: r("Fluffy장항선") },
        { json: "경전선", js: "경전선", typ: r("Fluffy경전선") },
        { json: "경의선", js: "경의선", typ: r("Tentacled경의선") },
        { json: "경원선", js: "경원선", typ: r("PuneHedgehog") },
        { json: "경인선", js: "경인선", typ: r("PuneHedgehog") },
        { json: "동해북부선", js: "동해북부선", typ: r("Purple기타") },
    ], false),
    "Tentacled경북선": o([
        { json: "예천-어등", js: "예천-어등", typ: r("PuneHedgehog") },
    ], false),
    "Tentacled경의선": o([
        { json: "운천-문산", js: "운천-문산", typ: r("PuneHedgehog") },
        { json: "도라산-임진강", js: "도라산-임진강", typ: r("Purple기타") },
        { json: "가좌-신촌", js: "가좌-신촌", typ: r("PuneHedgehog") },
        { json: "금촌-금릉", js: "금촌-금릉", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy경전선": o([
        { json: "진주차량", js: "진주차량", typ: r("PuneHedgehog") },
        { json: "횡천-하동", js: "횡천-하동", typ: r("Purple기타") },
        { json: "횡천-양보", js: "횡천-양보", typ: r("PuneHedgehog") },
        { json: "양보-횡천", js: "양보-횡천", typ: r("Purple기타") },
        { json: "다솔사-북천", js: "다솔사-북천", typ: r("Purple기타") },
        { json: "북천-양보", js: "북천-양보", typ: r("Purple기타") },
        { json: "북천-다솔사", js: "북천-다솔사", typ: r("PuneHedgehog") },
        { json: "양보-북천", js: "양보-북천", typ: r("PuneHedgehog") },
        { json: "다솔사-완사", js: "다솔사-완사", typ: r("Purple기타") },
        { json: "완사-유수", js: "완사-유수", typ: r("Purple기타") },
        { json: "진주-유수", js: "진주-유수", typ: r("Purple기타") },
        { json: "진상-하동", js: "진상-하동", typ: r("Purple기타") },
        { json: "옥곡-골약", js: "옥곡-골약", typ: r("Purple기타") },
        { json: "옥곡-진상", js: "옥곡-진상", typ: r("Purple기타") },
        { json: "하동-횡천", js: "하동-횡천", typ: r("PuneHedgehog") },
        { json: "골약-광양", js: "골약-광양", typ: r("Purple기타") },
        { json: "횡천", js: "횡천", typ: r("PuneHedgehog") },
        { json: "낙동강", js: "낙동강", typ: r("PuneHedgehog") },
        { json: "능주-이양", js: "능주-이양", typ: r("PuneHedgehog") },
    ], false),
    "한국철도공사_동해남부선": o([
        { json: "선암-덕하", js: "선암-덕하", typ: r("PuneHedgehog") },
        { json: "덕하-남창", js: "덕하-남창", typ: r("Purple기타") },
        { json: "기장-일광", js: "기장-일광", typ: r("PuneHedgehog") },
        { json: "부전", js: "부전", typ: r("Purple기타") },
        { json: "재송-수영", js: "재송-수영", typ: r("PuneHedgehog") },
        { json: "수영-송정", js: "수영-송정", typ: r("PuneHedgehog") },
        { json: "송정-기장", js: "송정-기장", typ: r("PuneHedgehog") },
        { json: "좌천-월내", js: "좌천-월내", typ: r("Purple기타") },
        { json: "일광-좌천", js: "일광-좌천", typ: r("Purple기타") },
        { json: "좌천_운행선변경", js: "좌천_운행선변경", typ: r("PuneHedgehog") },
        { json: "월내-서생", js: "월내-서생", typ: r("PuneHedgehog") },
        { json: "남창-서생", js: "남창-서생", typ: r("Purple기타") },
        { json: "남창-덕하", js: "남창-덕하", typ: r("PuneHedgehog") },
        { json: "부조-신부조", js: "부조-신부조", typ: r("PuneHedgehog") },
        { json: "신부조-부조", js: "신부조-부조", typ: r("PuneHedgehog") },
        { json: "부조-양자동", js: "부조-양자동", typ: r("PuneHedgehog") },
        { json: "양자동-부조", js: "양자동-부조", typ: r("PuneHedgehog") },
        { json: "안강-사방", js: "안강-사방", typ: r("Purple기타") },
        { json: "사방-안강", js: "사방-안강", typ: r("PuneHedgehog") },
        { json: "양자동-안강", js: "양자동-안강", typ: r("Purple기타") },
        { json: "안강-양자동", js: "안강-양자동", typ: r("PuneHedgehog") },
        { json: "사방-청령", js: "사방-청령", typ: r("PuneHedgehog") },
        { json: "청령-사방", js: "청령-사방", typ: r("PuneHedgehog") },
        { json: "청령-나원", js: "청령-나원", typ: r("PuneHedgehog") },
        { json: "나원-청령", js: "나원-청령", typ: r("Purple기타") },
        { json: "?", js: "?", typ: r("PuneHedgehog") },
        { json: "부조-효자", js: "부조-효자", typ: r("PuneHedgehog") },
        { json: "효문-태화강", js: "효문-태화강", typ: r("PuneHedgehog") },
        { json: "호계-효문", js: "호계-효문", typ: r("Purple기타") },
        { json: "태화강-효문", js: "태화강-효문", typ: r("PuneHedgehog") },
        { json: "효문-호계", js: "효문-호계", typ: r("PuneHedgehog") },
        { json: "모화-호계", js: "모화-호계", typ: r("Purple기타") },
        { json: "호계-모화", js: "호계-모화", typ: r("PuneHedgehog") },
        { json: "입실-모화", js: "입실-모화", typ: r("Purple기타") },
        { json: "모화-입실", js: "모화-입실", typ: r("Purple기타") },
        { json: "죽동-입실", js: "죽동-입실", typ: r("Purple기타") },
        { json: "입실-죽동", js: "입실-죽동", typ: r("PuneHedgehog") },
        { json: "불국사-죽동", js: "불국사-죽동", typ: r("Purple기타") },
        { json: "죽동-불국사", js: "죽동-불국사", typ: r("PuneHedgehog") },
        { json: "동방-불국사", js: "동방-불국사", typ: r("Purple기타") },
        { json: "불국사-동방", js: "불국사-동방", typ: r("PuneHedgehog") },
        { json: "경주-동방", js: "경주-동방", typ: r("Purple기타") },
        { json: "동방-경주", js: "동방-경주", typ: r("Purple기타") },
        { json: "경주-나원", js: "경주-나원", typ: r("Purple기타") },
        { json: "나원-경주", js: "나원-경주", typ: r("PuneHedgehog") },
        { json: "효자", js: "효자", typ: r("PuneHedgehog") },
        { json: "효자-포항", js: "효자-포항", typ: r("Purple기타") },
        { json: "경주", js: "경주", typ: r("PuneHedgehog") },
        { json: "경주차량", js: "경주차량", typ: r("PuneHedgehog") },
        { json: "안강-부조", js: "안강-부조", typ: r("Purple기타") },
        { json: "입실", js: "입실", typ: r("PuneHedgehog") },
        { json: "효문-병영", js: "효문-병영", typ: r("Purple기타") },
        { json: "선암-효문", js: "선암-효문", typ: r("Purple기타") },
        { json: "사방", js: "사방", typ: r("Purple기타") },
    ], false),
    "Sticky영동선": o([
        { json: "옥계-망상해", js: "옥계-망상해", typ: r("PuneHedgehog") },
        { json: "심포리", js: "심포리", typ: r("PuneHedgehog") },
        { json: "나한정", js: "나한정", typ: r("PuneHedgehog") },
        { json: "흥전", js: "흥전", typ: r("PuneHedgehog") },
        { json: "통리-심포리", js: "통리-심포리", typ: r("PuneHedgehog") },
        { json: "경포대", js: "경포대", typ: r("Purple기타") },
        { json: "영동선종점", js: "영동선종점", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy장항선": o([
        { json: "간치-웅천", js: "간치-웅천", typ: r("Purple기타") },
        { json: "웅천-남포", js: "웅천-남포", typ: r("Purple기타") },
        { json: "판교-간치", js: "판교-간치", typ: r("PuneHedgehog") },
        { json: "간치", js: "간치", typ: r("PuneHedgehog") },
        { json: "주포-남포", js: "주포-남포", typ: r("Purple기타") },
        { json: "간치-장항", js: "간치-장항", typ: r("Purple기타") },
        { json: "학성", js: "학성", typ: r("PuneHedgehog") },
        { json: "삽교-신성", js: "삽교-신성", typ: r("Purple기타") },
        { json: "삽교-화양", js: "삽교-화양", typ: r("PuneHedgehog") },
        { json: "천안-온양온", js: "천안-온양온", typ: r("Purple기타") },
        { json: "온양온-신례원", js: "온양온-신례원", typ: r("PuneHedgehog") },
        { json: "간치_전차대", js: "간치_전차대", typ: r("PuneHedgehog") },
        { json: "천안-쌍용나", js: "천안-쌍용나", typ: r("PuneHedgehog") },
        { json: "장항화물", js: "장항화물", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy전라선": o([
        { json: "죽림온", js: "죽림온", typ: r("죽림온") },
        { json: "경전북부선-", js: "경전북부선-", typ: r("PuneHedgehog") },
        { json: "주생-금지", js: "주생-금지", typ: r("Purple기타") },
        { json: "신성-주생", js: "신성-주생", typ: r("Purple기타") },
        { json: "금지-곡성", js: "금지-곡성", typ: r("Purple기타") },
        { json: "신리-관촌", js: "신리-관촌", typ: r("Purple기타") },
        { json: "아중-신리", js: "아중-신리", typ: r("Purple기타") },
        { json: "관촌-산성", js: "관촌-산성", typ: r("Purple기타") },
        { json: "북전주-신리", js: "북전주-신리", typ: r("Purple기타") },
        { json: "익산-동익산", js: "익산-동익산", typ: r("Purple기타") },
        { json: "삼례-동산", js: "삼례-동산", typ: r("PuneHedgehog") },
        { json: "남관-관촌", js: "남관-관촌", typ: r("PuneHedgehog") },
        { json: "만성-여수", js: "만성-여수", typ: r("PuneHedgehog") },
        { json: "여수", js: "여수", typ: r("PuneHedgehog") },
        { json: "성산-율촌", js: "성산-율촌", typ: r("Purple기타") },
        { json: "순천-성산", js: "순천-성산", typ: r("Purple기타") },
        { json: "덕양-만성", js: "덕양-만성", typ: r("Purple기타") },
        { json: "구례구-동순천", js: "구례구-동순천", typ: r("Purple기타") },
        { json: "압록-구례구", js: "압록-구례구", typ: r("Purple기타") },
        { json: "동순천-순천", js: "동순천-순천", typ: r("PuneHedgehog") },
        { json: "경전북부선", js: "경전북부선", typ: r("PuneHedgehog") },
        { json: "가정-압록", js: "가정-압록", typ: r("PuneHedgehog") },
        { json: "?", js: "?", typ: r("PuneHedgehog") },
        { json: "아중-신리 레일바이크", js: "아중-신리 레일바이크", typ: r("PuneHedgehog") },
        { json: "전주-아중", js: "전주-아중", typ: r("PuneHedgehog") },
        { json: "동산-전주", js: "동산-전주", typ: r("PuneHedgehog") },
        { json: "동산-신리", js: "동산-신리", typ: r("PuneHedgehog") },
    ], false),
    "죽림온": o([
        { json: "피난선", js: "피난선", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy중앙선": o([
        { json: "업동-망호", js: "업동-망호", typ: r("Purple기타") },
        { json: "동교", js: "동교", typ: r("Purple기타") },
        { json: "팔당", js: "팔당", typ: r("PuneHedgehog") },
        { json: "덕소-팔당", js: "덕소-팔당", typ: r("Purple기타") },
        { json: "도농-덕소", js: "도농-덕소", typ: r("Purple기타") },
        { json: "팔당-국수", js: "팔당-국수", typ: r("Purple기타") },
        { json: "국수-양평", js: "국수-양평", typ: r("Purple기타") },
        { json: "능내", js: "능내", typ: r("PuneHedgehog") },
        { json: "양평-원덕", js: "양평-원덕", typ: r("Purple기타") },
        { json: "원덕-용문", js: "원덕-용문", typ: r("Purple기타") },
        { json: "지평-양동", js: "지평-양동", typ: r("Purple기타") },
        { json: "양동-동화", js: "양동-동화", typ: r("Purple기타") },
        { json: "만종-동화", js: "만종-동화", typ: r("Purple기타") },
        { json: "구학-봉양", js: "구학-봉양", typ: r("Purple기타") },
        { json: "봉양", js: "봉양", typ: r("PuneHedgehog") },
        { json: "창교-신림", js: "창교-신림", typ: r("Purple기타") },
        { json: "치악-창교", js: "치악-창교", typ: r("Purple기타") },
        { json: "연교-구학", js: "연교-구학", typ: r("Purple기타") },
        { json: "신림-연교", js: "신림-연교", typ: r("Purple기타") },
        { json: "유교-반곡", js: "유교-반곡", typ: r("Purple기타") },
        { json: "원주-유교", js: "원주-유교", typ: r("Purple기타") },
        { json: "금교-치악", js: "금교-치악", typ: r("PuneHedgehog") },
        { json: "반곡-금교", js: "반곡-금교", typ: r("Purple기타") },
        { json: "원주", js: "원주", typ: r("PuneHedgehog") },
        { json: "봉양-제천조", js: "봉양-제천조", typ: r("Purple기타") },
        { json: "제천조-봉양", js: "제천조-봉양", typ: r("PuneHedgehog") },
        { json: "제천-제천조-_화물", js: "제천-제천조-_화물", typ: r("PuneHedgehog") },
        { json: "도담-단성", js: "도담-단성", typ: r("Purple기타") },
        { json: "단양-단성", js: "단양-단성", typ: r("Purple기타") },
        { json: "단성", js: "단성", typ: r("PuneHedgehog") },
        { json: "단성-죽령", js: "단성-죽령", typ: r("Purple기타") },
        { json: "삼곡-도담", js: "삼곡-도담", typ: r("Purple기타") },
        { json: "고명-삼곡", js: "고명-삼곡", typ: r("Purple기타") },
        { json: "제천-고명", js: "제천-고명", typ: r("PuneHedgehog") },
        { json: "도담-단양", js: "도담-단양", typ: r("Purple기타") },
        { json: "풍기-희방사", js: "풍기-희방사", typ: r("Purple기타") },
        { json: "풍기-안정", js: "풍기-안정", typ: r("Purple기타") },
        { json: "희방사-죽령", js: "희방사-죽령", typ: r("Purple기타") },
        { json: "안정-북영주", js: "안정-북영주", typ: r("Purple기타") },
        { json: "영주", js: "영주", typ: r("Purple기타") },
        { json: "옹천-문수", js: "옹천-문수", typ: r("Purple기타") },
        { json: "승문-옹천", js: "승문-옹천", typ: r("Purple기타") },
        { json: "문수-영주", js: "문수-영주", typ: r("Purple기타") },
        { json: "마사-이하", js: "마사-이하", typ: r("Purple기타") },
        { json: "이하-서지", js: "이하-서지", typ: r("PuneHedgehog") },
        { json: "무릉-운산", js: "무릉-운산", typ: r("Purple기타") },
        { json: "운산-단촌", js: "운산-단촌", typ: r("Purple기타") },
        { json: "옹천-마사", js: "옹천-마사", typ: r("Purple기타") },
        { json: "서지-안동", js: "서지-안동", typ: r("Purple기타") },
        { json: "안동-무릉", js: "안동-무릉", typ: r("Purple기타") },
        { json: "무릉-망호", js: "무릉-망호", typ: r("PuneHedgehog") },
        { json: "업동-단촌", js: "업동-단촌", typ: r("PuneHedgehog") },
        { json: "영천-북영천", js: "영천-북영천", typ: r("PuneHedgehog") },
        { json: "송포-임포", js: "송포-임포", typ: r("Purple기타") },
        { json: "영천-송포", js: "영천-송포", typ: r("Purple기타") },
        { json: "모량-율동", js: "모량-율동", typ: r("Purple기타") },
        { json: "건천-모량", js: "건천-모량", typ: r("Purple기타") },
        { json: "율동-서경주", js: "율동-서경주", typ: r("Purple기타") },
        { json: "아화-건천", js: "아화-건천", typ: r("Purple기타") },
        { json: "임포-아화", js: "임포-아화", typ: r("Purple기타") },
        { json: "임포", js: "임포", typ: r("PuneHedgehog") },
        { json: "경주신호장-경주", js: "경주신호장-경주", typ: r("PuneHedgehog") },
        { json: "경주삼각선", js: "경주삼각선", typ: r("PuneHedgehog") },
        { json: "서경주-경주", js: "서경주-경주", typ: r("Purple기타") },
        { json: "도담-단양 운행선변경", js: "도담-단양 운행선변경", typ: r("PuneHedgehog") },
        { json: "만종-원주", js: "만종-원주", typ: r("Purple기타") },
        { json: "건천-나원", js: "건천-나원", typ: r("Purple기타") },
        { json: "용문-지평", js: "용문-지평", typ: r("Purple기타") },
        { json: "의성-업동", js: "의성-업동", typ: r("PuneHedgehog") },
    ], false),
    "Tentacled충북선": o([
        { json: "청주", js: "청주", typ: m(r("PuneHedgehog")) },
        { json: "달천-주덕", js: "달천-주덕", typ: r("PuneHedgehog") },
        { json: "음성", js: "음성", typ: r("Purple기타") },
        { json: "충주", js: "충주", typ: r("PuneHedgehog") },
        { json: "동량 - 삼탄", js: "동량 - 삼탄", typ: r("Purple기타") },
        { json: "공전 - 봉양", js: "공전 - 봉양", typ: r("PuneHedgehog") },
        { json: "증평 - 보천", js: "증평 - 보천", typ: r("Purple기타") },
        { json: "보천 - 음성", js: "보천 - 음성", typ: r("PuneHedgehog") },
        { json: "1969-19801017", js: "1969-19801017", typ: r("Purple기타") },
        { json: "오근장", js: "오근장", typ: r("Purple기타") },
        { json: "내수 - 증평", js: "내수 - 증평", typ: r("PuneHedgehog") },
        { json: "음성 - 소이", js: "음성 - 소이", typ: r("PuneHedgehog") },
    ], false),
    "Tentacled태백선": o([
        { json: "입석리-제천", js: "입석리-제천", typ: r("Purple기타") },
        { json: "영월", js: "영월", typ: r("PuneHedgehog") },
        { json: "청령포-영월", js: "청령포-영월", typ: r("Purple기타") },
        { json: "고한", js: "고한", typ: r("PuneHedgehog") },
        { json: "쌍룡-연당", js: "쌍룡-연당", typ: r("PuneHedgehog") },
        { json: "예미", js: "예미", typ: r("PuneHedgehog") },
        { json: "태백", js: "태백", typ: r("PuneHedgehog") },
    ], false),
    "Purple함백선": o([
        { json: "예미", js: "예미", typ: r("PuneHedgehog") },
    ], false),
    "Hilarious호남선": o([
        { json: "서대전-가수원", js: "서대전-가수원", typ: r("PuneHedgehog") },
        { json: "서대전", js: "서대전", typ: r("PuneHedgehog") },
        { json: "가수원-흑석리", js: "가수원-흑석리", typ: r("Purple기타") },
        { json: "흑석리-원정", js: "흑석리-원정", typ: r("PuneHedgehog") },
        { json: "계룡-흑석리", js: "계룡-흑석리", typ: r("PuneHedgehog") },
        { json: "개태사-연산", js: "개태사-연산", typ: r("PuneHedgehog") },
        { json: "부황", js: "부황", typ: r("Purple기타") },
        { json: "논산-채운", js: "논산-채운", typ: r("PuneHedgehog") },
        { json: "강경-용동", js: "강경-용동", typ: r("PuneHedgehog") },
        { json: "용동-함열", js: "용동-함열", typ: r("PuneHedgehog") },
        { json: "김제-와룡", js: "김제-와룡", typ: r("PuneHedgehog") },
        { json: "부용", js: "부용", typ: r("PuneHedgehog") },
        { json: "부용-익산분", js: "부용-익산분", typ: r("PuneHedgehog") },
        { json: "와룡-김제", js: "와룡-김제", typ: r("Purple기타") },
        { json: "김제", js: "김제", typ: r("PuneHedgehog") },
        { json: "감곡-신태인", js: "감곡-신태인", typ: r("Purple기타") },
        { json: "정읍", js: "정읍", typ: r("Purple기타") },
        { json: "초강", js: "초강", typ: r("Purple기타") },
        { json: "노령", js: "노령", typ: r("Purple기타") },
        { json: "백양사-안평", js: "백양사-안평", typ: r("Purple기타") },
        { json: "하남", js: "하남", typ: r("Purple기타") },
        { json: "광주송-노안", js: "광주송-노안", typ: r("Purple기타") },
        { json: "나주-다시", js: "나주-다시", typ: r("Purple기타") },
        { json: "노안", js: "노안", typ: r("Purple기타") },
        { json: "고막원-무안", js: "고막원-무안", typ: r("Purple기타") },
        { json: "임성리-목포", js: "임성리-목포", typ: r("Purple기타") },
        { json: "몽탄-임성리", js: "몽탄-임성리", typ: r("Purple기타") },
        { json: "무안-몽탄", js: "무안-몽탄", typ: r("PuneHedgehog") },
        { json: "다시", js: "다시", typ: r("PuneHedgehog") },
        { json: "옥정-임곡", js: "옥정-임곡", typ: r("PuneHedgehog") },
    ], false),
    "Magenta궤도선": o([
        { json: "농림부 산림국", js: "농림부 산림국", typ: r("궤도선_농림부산림국") },
        { json: "조선총독부 농림성", js: "조선총독부 농림성", typ: r("조선총독부농림성") },
    ], false),
    "궤도선_농림부산림국": o([
        { json: "가곡천 산림철도", js: "가곡천 산림철도", typ: r("Purple기타") },
    ], false),
    "조선총독부농림성": o([
        { json: "마읍천 산림철도", js: "마읍천 산림철도", typ: r("Purple기타") },
    ], false),
    "Tentacled버스": o([
        { json: "조선총독부 철도국", js: "조선총독부 철도국", typ: r("Tentacled조선총독부철도국") },
    ], false),
    "Tentacled조선총독부철도국": o([
        { json: "조선총독부 철도국 자동차 광려본선", js: "조선총독부 철도국 자동차 광려본선", typ: r("PuneHedgehog") },
        { json: "조선총독부 철도국 자동차 화순선", js: "조선총독부 철도국 자동차 화순선", typ: r("PuneHedgehog") },
        { json: "조선총독부 철도국 자동차 동복선", js: "조선총독부 철도국 자동차 동복선", typ: r("PuneHedgehog") },
        { json: "조선총독부 철도국 자동차 곡순선", js: "조선총독부 철도국 자동차 곡순선", typ: r("PuneHedgehog") },
        { json: "조선총독부 철도국 연락자동차 경원훈춘선", js: "조선총독부 철도국 연락자동차 경원훈춘선", typ: r("Purple기타") },
    ], false),
    "Indigo전용선": o([
        { json: "대한석탄공사", js: "대한석탄공사", typ: r("전용선_대한석탄공사") },
    ], false),
    "전용선_대한석탄공사": o([
        { json: "화순선", js: "화순선", typ: r("Purple화순선") },
        { json: "함백탄광 전용철도 단곡 삭도", js: "함백탄광 전용철도 단곡 삭도", typ: r("PuneHedgehog") },
        { json: "함백탄광 전용철도 선탄강삭철도", js: "함백탄광 전용철도 선탄강삭철도", typ: r("PuneHedgehog") },
        { json: "함백탄광 전용철도", js: "함백탄광 전용철도", typ: r("Purple기타") },
        { json: "함태탄광 전용철도", js: "함태탄광 전용철도", typ: r("PuneHedgehog") },
    ], false),
    "Purple화순선": o([
        { json: "화순", js: "화순", typ: r("PuneHedgehog") },
        { json: "복암-화순", js: "복암-화순", typ: r("Purple기타") },
    ], false),
    "Hilarious지선": o([
        { json: "철도청", js: "철도청", typ: r("Fluffy철도청") },
        { json: "한국철도공사", js: "한국철도공사", typ: r("한국철도공사_3") },
        { json: "대한석탄공사", js: "대한석탄공사", typ: r("지선_대한석탄공사") },
        { json: "한국중부발전", js: "한국중부발전", typ: r("한국중부발전") },
        { json: "조선총독부 교통국", js: "조선총독부 교통국", typ: r("지선_조선총독부교통국") },
        { json: "교통부", js: "교통부", typ: r("지선_교통부") },
        { json: "조선총독부 철도국", js: "조선총독부 철도국", typ: r("Sticky조선총독부철도국") },
    ], false),
    "지선_교통부": o([
        { json: "동촌연결선", js: "동촌연결선", typ: r("PuneHedgehog") },
    ], false),
    "지선_대한석탄공사": o([
        { json: "은성탄광 전용철도", js: "은성탄광 전용철도", typ: r("Purple기타") },
    ], false),
    "지선_조선총독부교통국": o([
        { json: "경전서부선", js: "경전서부선", typ: r("Purple기타") },
    ], false),
    "Sticky조선총독부철도국": o([
        { json: "월미도지선", js: "월미도지선", typ: r("Purple기타") },
    ], false),
    "Fluffy철도청": o([
        { json: "우암선", js: "우암선", typ: r("Fluffy우암선") },
        { json: "김포선", js: "김포선", typ: r("Purple기타") },
        { json: "서청주선", js: "서청주선", typ: r("Purple기타") },
        { json: "진삼선", js: "진삼선", typ: r("Purple기타") },
        { json: "주인선", js: "주인선", typ: r("Purple기타") },
        { json: "문현선", js: "문현선", typ: r("PuneHedgehog") },
        { json: "울산선", js: "울산선", typ: r("PuneHedgehog") },
        { json: "오정선", js: "오정선", typ: r("PuneHedgehog") },
        { json: "옥서삼각선", js: "옥서삼각선", typ: r("PuneHedgehog") },
        { json: "당인리선", js: "당인리선", typ: r("PuneHedgehog") },
        { json: "신촌연결선", js: "신촌연결선", typ: r("PuneHedgehog") },
        { json: "안성선", js: "안성선", typ: r("Purple기타") },
    ], false),
    "Fluffy우암선": o([
        { json: "부전-우암", js: "부전-우암", typ: r("Purple기타") },
    ], false),
    "한국중부발전": o([
        { json: "서천화력선", js: "서천화력선", typ: r("Purple기타") },
    ], false),
    "한국철도공사_3": o([
        { json: "여천선", js: "여천선", typ: r("Fluffy여천선") },
        { json: "옥구선", js: "옥구선", typ: r("Purple옥구선") },
        { json: "진해선", js: "진해선", typ: r("Tentacled진해선") },
        { json: "광양제철선", js: "광양제철선", typ: r("Fluffy광양제철선") },
        { json: "사천선", js: "사천선", typ: r("Purple사천선") },
        { json: "제천조차장선", js: "제천조차장선", typ: r("Fluffy제천조차장선") },
        { json: "가야선", js: "가야선", typ: r("Fluffy가야선") },
        { json: "부전선", js: "부전선", typ: r("Fluffy부전선") },
        { json: "울산항선", js: "울산항선", typ: r("PuneHedgehog") },
        { json: "장생포선", js: "장생포선", typ: m(r("PuneHedgehog")) },
        { json: "금장삼각선", js: "금장삼각선", typ: m(r("PuneHedgehog")) },
        { json: "천안직결선", js: "천안직결선", typ: r("Fluffy천안직결선") },
        { json: "수인선", js: "수인선", typ: r("Purple기타") },
        { json: "장항선", js: "장항선", typ: r("Tentacled장항선") },
        { json: "군산화물선", js: "군산화물선", typ: r("한국철도공사_군산화물선") },
        { json: "장항화물선", js: "장항화물선", typ: r("Purple장항화물선") },
        { json: "남포선", js: "남포선", typ: r("Purple남포선") },
        { json: "덕산선", js: "덕산선", typ: m(r("PuneHedgehog")) },
        { json: "경전선", js: "경전선", typ: r("PuneHedgehog") },
        { json: "광주선", js: "광주선", typ: r("Fluffy광주선") },
        { json: "수색객차출발선", js: "수색객차출발선", typ: r("Fluffy수색객차출발선") },
        { json: "서울교외선", js: "서울교외선", typ: r("Fluffy서울교외선") },
        { json: "망우선", js: "망우선", typ: r("Fluffy망우선") },
        { json: "대구선", js: "대구선", typ: r("Purple기타") },
        { json: "가은선", js: "가은선", typ: r("Purple기타") },
        { json: "문경선", js: "문경선", typ: r("PuneHedgehog") },
        { json: "북영주삼각선", js: "북영주삼각선", typ: r("PuneHedgehog") },
        { json: "마산항제1부두선", js: "마산항제1부두선", typ: r("Purple기타") },
        { json: "구 대구선", js: "구 대구선", typ: r("PuneHedgehog") },
        { json: "영천삼각선", js: "영천삼각선", typ: r("PuneHedgehog") },
        { json: "구 대전남연결선", js: "구 대전남연결선", typ: r("Purple기타") },
        { json: "정양선", js: "정양선", typ: r("Purple기타") },
    ], false),
    "Fluffy가야선": o([
        { json: "주례-가야", js: "주례-가야", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy광양제철선": o([
        { json: "광양-초남", js: "광양-초남", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy광주선": o([
        { json: "구 광주", js: "구 광주", typ: r("Purple기타") },
    ], false),
    "한국철도공사_군산화물선": o([
        { json: "군산화-군산화물선종점", js: "군산화-군산화물선종점", typ: r("PuneHedgehog") },
        { json: "개정-군산분", js: "개정-군산분", typ: r("Purple기타") },
        { json: "군산화-개정", js: "군산화-개정", typ: r("Purple기타") },
        { json: "군산항", js: "군산항", typ: r("PuneHedgehog") },
        { json: "군산분", js: "군산분", typ: r("PuneHedgehog") },
    ], false),
    "Purple남포선": o([
        { json: "옥마", js: "옥마", typ: r("PuneHedgehog") },
        { json: "남포-옥마", js: "남포-옥마", typ: r("Purple기타") },
    ], false),
    "Fluffy망우선": o([
        { json: "이문", js: "이문", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy부전선": o([
        { json: "부전-가야", js: "부전-가야", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy서울교외선": o([
        { json: "일영", js: "일영", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy수색객차출발선": o([
        { json: "수색", js: "수색", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy여천선": o([
        { json: "덕양-흥국사", js: "덕양-흥국사", typ: r("PuneHedgehog") },
    ], false),
    "Tentacled장항선": o([
        { json: "군산분-구대야", js: "군산분-구대야", typ: r("PuneHedgehog") },
        { json: "구대야-임피", js: "구대야-임피", typ: r("Purple기타") },
        { json: "구대야-군산분", js: "구대야-군산분", typ: r("PuneHedgehog") },
        { json: "익산-오산리", js: "익산-오산리", typ: r("PuneHedgehog") },
        { json: "오산리-임피", js: "오산리-임피", typ: r("Purple기타") },
        { json: "임피-구대야", js: "임피-구대야", typ: r("PuneHedgehog") },
    ], false),
    "Purple장항화물선": o([
        { json: "장항화", js: "장항화", typ: r("PuneHedgehog") },
        { json: "장항-장항화", js: "장항-장항화", typ: r("Purple기타") },
    ], false),
    "Fluffy제천조차장선": o([
        { json: "제천조-제천", js: "제천조-제천", typ: r("PuneHedgehog") },
    ], false),
    "Tentacled진해선": o([
        { json: "신창원-창원", js: "신창원-창원", typ: r("PuneHedgehog") },
        { json: "신창원-성주사", js: "신창원-성주사", typ: r("Purple기타") },
    ], false),
    "Fluffy천안직결선": o([
        { json: "두정-천안", js: "두정-천안", typ: r("온양온신창") },
    ], false),
    "Frisky궤도선": o([
        { json: "함평궤도주식회사", js: "함평궤도주식회사", typ: r("궤도선_함평궤도주식회사") },
        { json: "서울특별시", js: "서울특별시", typ: r("Tentacled서울특별시") },
        { json: "남선합동전기 주식회사", js: "남선합동전기 주식회사", typ: r("남선합동전기주식회사") },
        { json: "제주도순환궤도", js: "제주도순환궤도", typ: r("궤도선_제주도순환궤도") },
    ], false),
    "남선합동전기주식회사": o([
        { json: "부산전차 광복동선", js: "부산전차 광복동선", typ: r("Purple기타") },
        { json: "부산전차 영도선", js: "부산전차 영도선", typ: r("PuneHedgehog") },
        { json: "부산전차 대청정선", js: "부산전차 대청정선", typ: r("PuneHedgehog") },
        { json: "부산전차 장수선", js: "부산전차 장수선", typ: r("PuneHedgehog") },
    ], false),
    "Tentacled서울특별시": o([
        { json: "서울전차 의주로선", js: "서울전차 의주로선", typ: r("PuneHedgehog") },
        { json: "서울전차 창경원선", js: "서울전차 창경원선", typ: r("PuneHedgehog") },
        { json: "서울전차 동대문차고선", js: "서울전차 동대문차고선", typ: r("PuneHedgehog") },
        { json: "서울전차 삼각지차고선", js: "서울전차 삼각지차고선", typ: r("PuneHedgehog") },
        { json: "서울전차 마포차고선", js: "서울전차 마포차고선", typ: r("PuneHedgehog") },
        { json: "서울전차 장춘단선", js: "서울전차 장춘단선", typ: r("PuneHedgehog") },
        { json: "서울전차 충무로선", js: "서울전차 충무로선", typ: r("PuneHedgehog") },
        { json: "서울전차 왕십리선", js: "서울전차 왕십리선", typ: r("PuneHedgehog") },
        { json: "서울전차 종로삼각선", js: "서울전차 종로삼각선", typ: r("PuneHedgehog") },
        { json: "서울전차 강안선", js: "서울전차 강안선", typ: r("PuneHedgehog") },
        { json: "서울전차 돈암동선", js: "서울전차 돈암동선", typ: r("PuneHedgehog") },
        { json: "서울전차 마포선", js: "서울전차 마포선", typ: r("PuneHedgehog") },
        { json: "서울전차 서대문선", js: "서울전차 서대문선", typ: r("PuneHedgehog") },
        { json: "서울전차 영천선", js: "서울전차 영천선", typ: r("PuneHedgehog") },
        { json: "서울전차 석산선", js: "서울전차 석산선", typ: r("PuneHedgehog") },
        { json: "서울전차 노량진선", js: "서울전차 노량진선", typ: r("PuneHedgehog") },
        { json: "서울전차 을지로선", js: "서울전차 을지로선", typ: r("PuneHedgehog") },
        { json: "서울전차 을지로삼각선", js: "서울전차 을지로삼각선", typ: r("PuneHedgehog") },
        { json: "서울전차 동대문삼각선", js: "서울전차 동대문삼각선", typ: r("PuneHedgehog") },
        { json: "서울전차 영등포차고선", js: "서울전차 영등포차고선", typ: r("PuneHedgehog") },
        { json: "서울전차 영등포선", js: "서울전차 영등포선", typ: r("Purple기타") },
        { json: "서울전차 구용산선", js: "서울전차 구용산선", typ: r("PuneHedgehog") },
        { json: "서울전차 청량리선", js: "서울전차 청량리선", typ: r("PuneHedgehog") },
        { json: "서울전차 종로선", js: "서울전차 종로선", typ: r("PuneHedgehog") },
        { json: "서울전차 경용선", js: "서울전차 경용선", typ: r("Purple기타") },
        { json: "서울전차 광화문선", js: "서울전차 광화문선", typ: r("PuneHedgehog") },
        { json: "서울전차 세종로선", js: "서울전차 세종로선", typ: r("PuneHedgehog") },
        { json: "서울전차 안국동선", js: "서울전차 안국동선", typ: r("PuneHedgehog") },
        { json: "서울전차 효자동선", js: "서울전차 효자동선", typ: r("PuneHedgehog") },
    ], false),
    "궤도선_제주도순환궤도": o([
        { json: "제주도순환궤도", js: "제주도순환궤도", typ: r("Purple기타") },
    ], false),
    "궤도선_함평궤도주식회사": o([
        { json: "함평궤도", js: "함평궤도", typ: r("Purple기타") },
    ], false),
    "폐지_기타": o([
        { json: "공항철도", js: "공항철도", typ: r("Fluffy공항철도") },
        { json: "국립중앙과학관", js: "국립중앙과학관", typ: r("기타_국립중앙과학관") },
        { json: "도계광업소", js: "도계광업소", typ: r("Fluffy도계광업소") },
    ], false),
    "Fluffy공항철도": o([
        { json: "인천국제공항철도", js: "인천국제공항철도", typ: r("Fluffy인천국제공항철도") },
    ], false),
    "Fluffy인천국제공항철도": o([
        { json: "구 공항연결선", js: "구 공항연결선", typ: r("PuneHedgehog") },
    ], false),
    "기타_국립중앙과학관": o([
        { json: "대전자기부상시험선", js: "대전자기부상시험선", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy도계광업소": o([
        { json: "도계광업소 삭도", js: "도계광업소 삭도", typ: r("PuneHedgehog") },
    ], false),
    "Sticky도시철도": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("한국철도공사_4") },
        { json: "서울교통공사", js: "서울교통공사", typ: r("Fluffy서울교통공사") },
    ], false),
    "Fluffy서울교통공사": o([
        { json: "서울교통공사 3호선 수서기지선", js: "서울교통공사 3호선 수서기지선", typ: r("Purple서울교통공사3호선수서기지선") },
        { json: "서울교통공사 4호선 창동기지선", js: "서울교통공사 4호선 창동기지선", typ: r("Purple서울교통공사4호선창동기지선") },
    ], false),
    "Purple서울교통공사3호선수서기지선": o([
        { json: "수서기-수서", js: "수서기-수서", typ: r("PuneHedgehog") },
    ], false),
    "Purple서울교통공사4호선창동기지선": o([
        { json: "창동기지", js: "창동기지", typ: r("PuneHedgehog") },
    ], false),
    "한국철도공사_4": o([
        { json: "분당선", js: "분당선", typ: r("Fluffy분당선") },
    ], false),
    "Fluffy분당선": o([
        { json: "수서-수서기", js: "수서-수서기", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy사철": o([
        { json: "경성전기주식회사", js: "경성전기주식회사", typ: r("사철_경성전기주식회사") },
        { json: "조선철도주식회사", js: "조선철도주식회사", typ: r("사철_조선철도주식회사") },
        { json: "궤도선", js: "궤도선", typ: r("Mischievous궤도선") },
        { json: "조선경남철도주식회사", js: "조선경남철도주식회사", typ: r("사철_조선경남철도주식회사") },
        { json: "버스", js: "버스", typ: r("사철_버스") },
    ], false),
    "사철_경성전기주식회사": o([
        { json: "금강산선", js: "금강산선", typ: r("PuneHedgehog") },
    ], false),
    "Mischievous궤도선": o([
        { json: "왜관궤도 주식회사", js: "왜관궤도 주식회사", typ: r("궤도선_왜관궤도주식회사") },
        { json: "김제궤도 주식회사", js: "김제궤도 주식회사", typ: r("Fluffy김제궤도주식회사") },
    ], false),
    "Fluffy김제궤도주식회사": o([
        { json: "김제궤도", js: "김제궤도", typ: r("Purple기타") },
    ], false),
    "궤도선_왜관궤도주식회사": o([
        { json: "왜관궤도", js: "왜관궤도", typ: r("PuneHedgehog") },
    ], false),
    "사철_버스": o([
        { json: "조선경남철도주식회사", js: "조선경남철도주식회사", typ: r("버스_조선경남철도주식회사") },
    ], false),
    "버스_조선경남철도주식회사": o([
        { json: "조선경남철도 승합자동차선", js: "조선경남철도 승합자동차선", typ: r("Purple기타") },
    ], false),
    "사철_조선경남철도주식회사": o([
        { json: "장항항선", js: "장항항선", typ: r("PuneHedgehog") },
    ], false),
    "사철_조선철도주식회사": o([
        { json: "구 경북선", js: "구 경북선", typ: r("Purple기타") },
    ], false),
    "폐지_삭도": o([
        { json: "조선전업주식회사", js: "조선전업주식회사", typ: r("삭도_조선전업주식회사") },
        { json: "송도해상케이블카", js: "송도해상케이블카", typ: r("삭도_송도해상케이블카") },
        { json: "보문산 케이블카", js: "보문산 케이블카", typ: r("삭도_보문산케이블카") },
        { json: "화천댐 삭도", js: "화천댐 삭도", typ: r("PuneHedgehog") },
    ], false),
    "삭도_보문산케이블카": o([
        { json: "보문산 케이블카", js: "보문산 케이블카", typ: r("PuneHedgehog") },
    ], false),
    "삭도_송도해상케이블카": o([
        { json: "(구)송도해상케이블카", js: "(구)송도해상케이블카", typ: r("PuneHedgehog") },
    ], false),
    "삭도_조선전업주식회사": o([
        { json: "영월광업소 삭도", js: "영월광업소 삭도", typ: r("Purple기타") },
    ], false),
    "Fluffy열차페리": o([
        { json: "조선경남철도주식회사", js: "조선경남철도주식회사", typ: r("열차페리_조선경남철도주식회사") },
    ], false),
    "열차페리_조선경남철도주식회사": o([
        { json: "장항-군산 연락선", js: "장항-군산 연락선", typ: r("PuneHedgehog") },
    ], false),
    "Indecent전용선": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("한국철도공사_5") },
        { json: "도계광업소", js: "도계광업소", typ: r("전용선_도계광업소") },
        { json: "주식회사 삼척탄좌개발", js: "주식회사 삼척탄좌개발", typ: r("전용선_주식회사삼척탄좌개발") },
        { json: "서울특별시", js: "서울특별시", typ: r("전용선_서울특별시") },
        { json: "철도청", js: "철도청", typ: r("전용선_철도청") },
        { json: "궤도선", js: "궤도선", typ: r("Braggadocious궤도선") },
        { json: "조선총독부 철도국", js: "조선총독부 철도국", typ: r("전용선_조선총독부철도국") },
        { json: "북한 철도성", js: "북한 철도성", typ: r("Frisky북한철도성") },
        { json: "진해 웅동수원지", js: "진해 웅동수원지", typ: r("Purple기타") },
        { json: "섬진강댐가설철도", js: "섬진강댐가설철도", typ: r("PuneHedgehog") },
        { json: "기타", js: "기타", typ: r("PuneHedgehog") },
    ], false),
    "Braggadocious궤도선": o([
        { json: "조선총독부 철도국", js: "조선총독부 철도국", typ: r("궤도선_조선총독부철도국") },
        { json: "북한 철도성", js: "북한 철도성", typ: r("Magenta북한철도성") },
    ], false),
    "Magenta북한철도성": o([
        { json: "평라선", js: "평라선", typ: r("Fluffy평라선") },
    ], false),
    "Fluffy평라선": o([
        { json: "룡현 석탄궤도", js: "룡현 석탄궤도", typ: r("PuneHedgehog") },
    ], false),
    "궤도선_조선총독부철도국": o([
        { json: "마포지선궤도", js: "마포지선궤도", typ: r("PuneHedgehog") },
    ], false),
    "전용선_도계광업소": o([
        { json: "전용궤도", js: "전용궤도", typ: r("PuneHedgehog") },
    ], false),
    "Frisky북한철도성": o([
        { json: "평라선", js: "평라선", typ: r("Tentacled평라선") },
    ], false),
    "Tentacled평라선": o([
        { json: "경성사리선", js: "경성사리선", typ: r("PuneHedgehog") },
    ], false),
    "전용선_서울특별시": o([
        { json: "경성궤도 본선", js: "경성궤도 본선", typ: r("서울특별시_경성궤도본선") },
    ], false),
    "서울특별시_경성궤도본선": o([
        { json: "자갈선", js: "자갈선", typ: r("PuneHedgehog") },
    ], false),
    "전용선_조선총독부철도국": o([
        { json: "용산선", js: "용산선", typ: r("PuneHedgehog") },
    ], false),
    "전용선_주식회사삼척탄좌개발": o([
        { json: "정암탄광 전용철도", js: "정암탄광 전용철도", typ: r("PuneHedgehog") },
    ], false),
    "전용선_철도청": o([
        { json: "문현선", js: "문현선", typ: r("Purple문현선") },
        { json: "동해남부선", js: "동해남부선", typ: r("Purple동해남부선") },
        { json: "경부선", js: "경부선", typ: r("Tentacled경부선") },
        { json: "전라선", js: "전라선", typ: r("Tentacled전라선") },
        { json: "동해북부선", js: "동해북부선", typ: r("Sticky동해북부선") },
        { json: "안성선", js: "안성선", typ: r("Purple안성선") },
    ], false),
    "Tentacled경부선": o([
        { json: "황간흑연채취선", js: "황간흑연채취선", typ: r("Purple기타") },
    ], false),
    "Purple동해남부선": o([
        { json: "원리신호소", js: "원리신호소", typ: r("Purple기타") },
        { json: "수영", js: "수영", typ: r("PuneHedgehog") },
    ], false),
    "Sticky동해북부선": o([
        { json: "양양철광지선", js: "양양철광지선", typ: r("Purple기타") },
    ], false),
    "Purple문현선": o([
        { json: "조선방직", js: "조선방직", typ: r("PuneHedgehog") },
    ], false),
    "Purple안성선": o([
        { json: "입장사리선", js: "입장사리선", typ: r("PuneHedgehog") },
    ], false),
    "Tentacled전라선": o([
        { json: "신월비행장", js: "신월비행장", typ: r("Purple기타") },
    ], false),
    "한국철도공사_5": o([
        { json: "경부선", js: "경부선", typ: r("Sticky경부선") },
        { json: "수인선", js: "수인선", typ: r("Fluffy수인선") },
        { json: "경인선", js: "경인선", typ: r("Fluffy경인선") },
        { json: "영동선", js: "영동선", typ: r("Indigo영동선") },
        { json: "묵호항선", js: "묵호항선", typ: r("Fluffy묵호항선") },
        { json: "경북선", js: "경북선", typ: m(r("PuneHedgehog")) },
        { json: "충북선", js: "충북선", typ: r("Sticky충북선") },
        { json: "진해선", js: "진해선", typ: r("Sticky진해선") },
        { json: "여천선", js: "여천선", typ: r("Tentacled여천선") },
        { json: "중앙선", js: "중앙선", typ: r("Tentacled중앙선") },
        { json: "동해남부선", js: "동해남부선", typ: m(r("PuneHedgehog")) },
        { json: "삼척선", js: "삼척선", typ: r("Tentacled삼척선") },
        { json: "호남선", js: "호남선", typ: r("Ambitious호남선") },
        { json: "북전주선", js: "북전주선", typ: r("Tentacled북전주선") },
        { json: "군산화물선", js: "군산화물선", typ: m(r("PuneHedgehog")) },
        { json: "장항화물선", js: "장항화물선", typ: m(r("PuneHedgehog")) },
        { json: "경전선", js: "경전선", typ: r("Tentacled경전선") },
        { json: "덕산선", js: "덕산선", typ: r("Fluffy덕산선") },
        { json: "광주선", js: "광주선", typ: m(r("PuneHedgehog")) },
        { json: "경의선", js: "경의선", typ: r("Sticky경의선") },
        { json: "서울교외선", js: "서울교외선", typ: m(r("PuneHedgehog")) },
        { json: "경원선", js: "경원선", typ: r("Indigo경원선") },
        { json: "구 대구선", js: "구 대구선", typ: r("Purple구대구선") },
        { json: "대구선", js: "대구선", typ: m(r("PuneHedgehog")) },
        { json: "전라선", js: "전라선", typ: m(r("PuneHedgehog")) },
        { json: "장항선", js: "장항선", typ: m(r("PuneHedgehog")) },
        { json: "경춘선", js: "경춘선", typ: m(r("PuneHedgehog")) },
        { json: "동해북부선", js: "동해북부선", typ: r("Indigo동해북부선") },
        { json: "구 경춘선", js: "구 경춘선", typ: r("Purple구경춘선") },
    ], false),
    "Sticky경부선": o([
        { json: "부산진", js: "부산진", typ: r("부산진") },
        { json: "밀양자갈선", js: "밀양자갈선", typ: r("PuneHedgehog") },
        { json: "대성연탄선", js: "대성연탄선", typ: r("PuneHedgehog") },
        { json: "영등포", js: "영등포", typ: r("PuneHedgehog") },
        { json: "안양자갈선", js: "안양자갈선", typ: r("PuneHedgehog") },
        { json: "부강", js: "부강", typ: r("PuneHedgehog") },
        { json: "신탄진자갈선", js: "신탄진자갈선", typ: r("PuneHedgehog") },
        { json: "연초제조장선", js: "연초제조장선", typ: r("PuneHedgehog") },
        { json: "추풍령자갈선", js: "추풍령자갈선", typ: r("PuneHedgehog") },
        { json: "약목", js: "약목", typ: r("PuneHedgehog") },
        { json: "밀양자갈선~1930이전", js: "밀양자갈선~1930이전", typ: r("PuneHedgehog") },
        { json: "심천사리선", js: "심천사리선", typ: r("PuneHedgehog") },
        { json: "상동자갈선", js: "상동자갈선", typ: r("PuneHedgehog") },
        { json: "대성사리선", js: "대성사리선", typ: r("PuneHedgehog") },
        { json: "밀양사리선", js: "밀양사리선", typ: r("PuneHedgehog") },
        { json: "구포", js: "구포", typ: r("PuneHedgehog") },
    ], false),
    "부산진": o([
        { json: "동아제분선", js: "동아제분선", typ: r("PuneHedgehog") },
    ], false),
    "Indigo경원선": o([
        { json: "창동", js: "창동", typ: r("PuneHedgehog") },
        { json: "양주", js: "양주", typ: r("Purple기타") },
        { json: "서빙고사리선", js: "서빙고사리선", typ: r("PuneHedgehog") },
        { json: "대성리사리선", js: "대성리사리선", typ: r("PuneHedgehog") },
    ], false),
    "Sticky경의선": o([
        { json: "능곡", js: "능곡", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy경인선": o([
        { json: "인천", js: "인천", typ: m(r("PuneHedgehog")) },
        { json: "경기화학선", js: "경기화학선", typ: r("PuneHedgehog") },
        { json: "제일제당공업", js: "제일제당공업", typ: r("PuneHedgehog") },
        { json: "천왕기지", js: "천왕기지", typ: r("PuneHedgehog") },
    ], false),
    "Tentacled경전선": o([
        { json: "중리", js: "중리", typ: r("PuneHedgehog") },
        { json: "이양사리선", js: "이양사리선", typ: r("PuneHedgehog") },
    ], false),
    "Purple구경춘선": o([
        { json: "신공덕", js: "신공덕", typ: r("PuneHedgehog") },
    ], false),
    "Purple구대구선": o([
        { json: "K2인입선", js: "K2인입선", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy덕산선": o([
        { json: "덕산선종점", js: "덕산선종점", typ: r("PuneHedgehog") },
    ], false),
    "Indigo동해북부선": o([
        { json: "문암사리선", js: "문암사리선", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy묵호항선": o([
        { json: "묵호항", js: "묵호항", typ: r("PuneHedgehog") },
    ], false),
    "Tentacled북전주선": o([
        { json: "북전주", js: "북전주", typ: r("북전주") },
    ], false),
    "북전주": o([
        { json: "한일선", js: "한일선", typ: r("PuneHedgehog") },
    ], false),
    "Tentacled삼척선": o([
        { json: "삼척화력선", js: "삼척화력선", typ: r("PuneHedgehog") },
    ], false),
    "Fluffy수인선": o([
        { json: "학익", js: "학익", typ: r("PuneHedgehog") },
        { json: "소래", js: "소래", typ: r("소래") },
        { json: "군자염전", js: "군자염전", typ: r("PuneHedgehog") },
    ], false),
    "소래": o([
        { json: "소래염전", js: "소래염전", typ: r("PuneHedgehog") },
    ], false),
    "Tentacled여천선": o([
        { json: "흥국사-적량", js: "흥국사-적량", typ: r("PuneHedgehog") },
    ], false),
    "Indigo영동선": o([
        { json: "동해", js: "동해", typ: r("PuneHedgehog") },
        { json: "신기", js: "신기", typ: r("PuneHedgehog") },
        { json: "신기-상정", js: "신기-상정", typ: r("PuneHedgehog") },
        { json: "미로", js: "미로", typ: r("PuneHedgehog") },
        { json: "분천자갈선", js: "분천자갈선", typ: r("PuneHedgehog") },
        { json: "나한정자갈선", js: "나한정자갈선", typ: r("PuneHedgehog") },
    ], false),
    "Tentacled중앙선": o([
        { json: "영천", js: "영천", typ: r("영천") },
        { json: "양평자갈선", js: "양평자갈선", typ: r("PuneHedgehog") },
        { json: "안정자갈선", js: "안정자갈선", typ: r("PuneHedgehog") },
        { json: "용문사리선", js: "용문사리선", typ: r("PuneHedgehog") },
        { json: "봉양사리선", js: "봉양사리선", typ: r("PuneHedgehog") },
        { json: "안정사리선", js: "안정사리선", typ: r("PuneHedgehog") },
        { json: "평은자갈선", js: "평은자갈선", typ: r("PuneHedgehog") },
        { json: "운산사리선", js: "운산사리선", typ: r("PuneHedgehog") },
        { json: "우보사리선", js: "우보사리선", typ: r("PuneHedgehog") },
    ], false),
    "영천": o([
        { json: "무연탄하화선", js: "무연탄하화선", typ: r("PuneHedgehog") },
    ], false),
    "Sticky진해선": o([
        { json: "진해", js: "진해", typ: m(r("PuneHedgehog")) },
        { json: "성주사사리선", js: "성주사사리선", typ: r("PuneHedgehog") },
    ], false),
    "Sticky충북선": o([
        { json: "주덕", js: "주덕", typ: r("PuneHedgehog") },
        { json: "달천", js: "달천", typ: r("PuneHedgehog") },
        { json: "충주", js: "충주", typ: r("PuneHedgehog") },
        { json: "음성", js: "음성", typ: r("PuneHedgehog") },
    ], false),
    "Ambitious호남선": o([
        { json: "서대전", js: "서대전", typ: r("PuneHedgehog") },
        { json: "가수원", js: "가수원", typ: r("PuneHedgehog") },
        { json: "논산", js: "논산", typ: r("Purple기타") },
        { json: "정읍", js: "정읍", typ: r("PuneHedgehog") },
        { json: "삼학도선", js: "삼학도선", typ: r("PuneHedgehog") },
        { json: "다시사리선", js: "다시사리선", typ: r("PuneHedgehog") },
    ], false),
    "Ambitious지선": o([
        { json: "궤도선", js: "궤도선", typ: r("지선_궤도선") },
    ], false),
    "지선_궤도선": o([
        { json: "조선총독부 철도국", js: "조선총독부 철도국", typ: r("궤도선_조선총독부철도국") },
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
        { json: "한국철도공사", js: "한국철도공사", typ: r("한국철도공사_6") },
    ], false),
    "한국철도공사_6": o([
        { json: "대불선", js: "대불선", typ: r("Fluffy대불선") },
        { json: "경인선", js: "경인선", typ: m(r("TartuGecko")) },
        { json: "군산항선", js: "군산항선", typ: m(r("TartuGecko")) },
        { json: "울산신항선", js: "울산신항선", typ: r("Fluffy울산신항선") },
        { json: "대구선", js: "대구선", typ: m(r("TartuGecko")) },
        { json: "대전선", js: "대전선", typ: m(r("TartuGecko")) },
        { json: "옥구선", js: "옥구선", typ: m(r("TartuGecko")) },
        { json: "북전주선", js: "북전주선", typ: m(r("TartuGecko")) },
        { json: "중앙선", js: "중앙선", typ: m(r("TartuGecko")) },
        { json: "태백선", js: "태백선", typ: m(r("TartuGecko")) },
        { json: "영동선", js: "영동선", typ: m(r("TartuGecko")) },
        { json: "용산삼각선", js: "용산삼각선", typ: m(r("TartuGecko")) },
        { json: "우암선", js: "우암선", typ: m(r("TartuGecko")) },
        { json: "울산항선", js: "울산항선", typ: m(r("TartuGecko")) },
        { json: "대전철도차량정비단선", js: "대전철도차량정비단선", typ: m(r("TartuGecko")) },
        { json: "진해선", js: "진해선", typ: m(r("TartuGecko")) },
        { json: "장항선", js: "장항선", typ: r("Sticky장항선") },
        { json: "군산화물선", js: "군산화물선", typ: m(r("TartuGecko")) },
        { json: "경원선", js: "경원선", typ: m(r("TartuGecko")) },
        { json: "경부선", js: "경부선", typ: r("Indigo경부선") },
        { json: "경의선", js: "경의선", typ: m(r("TartuGecko")) },
        { json: "서울교외선", js: "서울교외선", typ: m(r("TartuGecko")) },
        { json: "호남선", js: "호남선", typ: m(r("TartuGecko")) },
        { json: "덕산선", js: "덕산선", typ: m(r("TartuGecko")) },
        { json: "경전선", js: "경전선", typ: m(r("TartuGecko")) },
        { json: "광주선", js: "광주선", typ: r("Tentacled광주선") },
        { json: "북송정삼각선", js: "북송정삼각선", typ: r("Fluffy북송정삼각선") },
        { json: "오송선", js: "오송선", typ: r("Purple오송선") },
        { json: "충북선", js: "충북선", typ: m(r("TartuGecko")) },
        { json: "구 경춘선", js: "구 경춘선", typ: r("Fluffy구경춘선") },
        { json: "동해선", js: "동해선", typ: r("Purple동해선") },
        { json: "함백선", js: "함백선", typ: r("Fluffy함백선") },
        { json: "북평선", js: "북평선", typ: m(r("TartuGecko")) },
        { json: "삼척선", js: "삼척선", typ: r("Sticky삼척선") },
        { json: "정선선", js: "정선선", typ: m(r("TartuGecko")) },
        { json: "경북선", js: "경북선", typ: m(r("TartuGecko")) },
        { json: "문경선", js: "문경선", typ: m(r("TartuGecko")) },
        { json: "장생포선", js: "장생포선", typ: m(r("TartuGecko")) },
        { json: "괴동선", js: "괴동선", typ: r("Tentacled괴동선") },
        { json: "강경선", js: "강경선", typ: m(r("TartuGecko")) },
        { json: "온산선", js: "온산선", typ: r("Tentacled온산선") },
        { json: "사천선", js: "사천선", typ: m(r("TartuGecko")) },
    ], false),
    "TartuGecko": o([
        { json: "@id", js: "@id", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "LookAt", js: "LookAt", typ: r("LookAt") },
        { json: "styleUrl", js: "styleUrl", typ: "" },
        { json: "Region", js: "Region", typ: u(undefined, r("Region")) },
        { json: "Point", js: "Point", typ: r("PurplePoint") },
    ], false),
    "LookAt": o([
        { json: "longitude", js: "longitude", typ: "" },
        { json: "latitude", js: "latitude", typ: "" },
        { json: "altitude", js: "altitude", typ: "" },
        { json: "heading", js: "heading", typ: "" },
        { json: "tilt", js: "tilt", typ: "" },
        { json: "range", js: "range", typ: "" },
    ], false),
    "PurplePoint": o([
        { json: "coordinates", js: "coordinates", typ: "" },
    ], false),
    "Indigo경부선": o([
        { json: "눈들", js: "눈들", typ: r("TartuGecko") },
        { json: "풍성", js: "풍성", typ: r("TartuGecko") },
        { json: "광암", js: "광암", typ: r("TartuGecko") },
        { json: "오류", js: "오류", typ: r("TartuGecko") },
        { json: "송곡", js: "송곡", typ: r("TartuGecko") },
        { json: "청남", js: "청남", typ: r("TartuGecko") },
        { json: "대자동", js: "대자동", typ: r("TartuGecko") },
        { json: "단애", js: "단애", typ: r("TartuGecko") },
        { json: "상봉", js: "상봉", typ: r("TartuGecko") },
        { json: "신안1", js: "신안1", typ: r("TartuGecko") },
        { json: "신안", js: "신안", typ: r("TartuGecko") },
        { json: "연화", js: "연화", typ: r("TartuGecko") },
    ], false),
    "Tentacled광주선": o([
        { json: "부동", js: "부동", typ: r("TartuGecko") },
        { json: "우산", js: "우산", typ: r("TartuGecko") },
        { json: "운남", js: "운남", typ: r("TartuGecko") },
        { json: "신가", js: "신가", typ: r("TartuGecko") },
        { json: "경기장", js: "경기장", typ: r("TartuGecko") },
        { json: "재매", js: "재매", typ: r("TartuGecko") },
    ], false),
    "Tentacled괴동선": o([
        { json: "지곡", js: "지곡", typ: r("TartuGecko") },
        { json: "효자", js: "효자", typ: r("TartuGecko") },
        { json: "송동", js: "송동", typ: r("TartuGecko") },
    ], false),
    "Fluffy구경춘선": o([
        { json: "갈매3", js: "갈매3", typ: r("TartuGecko") },
        { json: "화접", js: "화접", typ: r("TartuGecko") },
    ], false),
    "Fluffy대불선": o([
        { json: "대불공단", js: "대불공단", typ: r("TartuGecko") },
    ], false),
    "Purple동해선": o([
        { json: "범천", js: "범천", typ: r("TartuGecko") },
    ], false),
    "Fluffy북송정삼각선": o([
        { json: "소촌", js: "소촌", typ: r("TartuGecko") },
        { json: "신역2", js: "신역2", typ: r("TartuGecko") },
    ], false),
    "Sticky삼척선": o([
        { json: "나안", js: "나안", typ: r("TartuGecko") },
        { json: "삼척", js: "삼척", typ: r("TartuGecko") },
    ], false),
    "Purple오송선": o([
        { json: "신안1", js: "신안1", typ: r("TartuGecko") },
    ], false),
    "Tentacled온산선": o([
        { json: "온산", js: "온산", typ: r("TartuGecko") },
        { json: "대정", js: "대정", typ: r("TartuGecko") },
        { json: "달포", js: "달포", typ: r("TartuGecko") },
    ], false),
    "Fluffy울산신항선": o([
        { json: "모래", js: "모래", typ: r("TartuGecko") },
        { json: "광석", js: "광석", typ: r("TartuGecko") },
        { json: "용연", js: "용연", typ: r("TartuGecko") },
        { json: "철송장", js: "철송장", typ: r("TartuGecko") },
    ], false),
    "Sticky장항선": o([
        { json: "소반", js: "소반", typ: r("TartuGecko") },
        { json: "신촌", js: "신촌", typ: r("TartuGecko") },
        { json: "신진", js: "신진", typ: r("TartuGecko") },
        { json: "옹암", js: "옹암", typ: r("TartuGecko") },
        { json: "양촌", js: "양촌", typ: r("TartuGecko") },
        { json: "석포", js: "석포", typ: r("TartuGecko") },
        { json: "원죽", js: "원죽", typ: r("TartuGecko") },
        { json: "진죽", js: "진죽", typ: r("TartuGecko") },
        { json: "광산", js: "광산", typ: r("TartuGecko") },
        { json: "신동", js: "신동", typ: r("TartuGecko") },
        { json: "보령", js: "보령", typ: r("TartuGecko") },
        { json: "능동", js: "능동", typ: r("TartuGecko") },
        { json: "통사", js: "통사", typ: r("TartuGecko") },
        { json: "우산", js: "우산", typ: r("TartuGecko") },
    ], false),
    "Fluffy함백선": o([
        { json: "길운", js: "길운", typ: r("TartuGecko") },
        { json: "조동", js: "조동", typ: r("TartuGecko") },
    ], false),
    "영업중_주식회사강원랜드": o([
        { json: "하이원추추파크 전용선", js: "하이원추추파크 전용선", typ: m(r("TartuGecko")) },
    ], false),
    "건널목_폐지": o([
        { json: "국유철도", js: "국유철도", typ: r("Fluffy국유철도") },
        { json: "대한석탄공사", js: "대한석탄공사", typ: r("Purple대한석탄공사") },
    ], false),
    "Fluffy국유철도": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("한국철도공사_7") },
    ], false),
    "한국철도공사_7": o([
        { json: "대전선", js: "대전선", typ: r("Fluffy대전선") },
        { json: "경부선", js: "경부선", typ: m(r("TartuGecko")) },
        { json: "장항선", js: "장항선", typ: m(r("TartuGecko")) },
        { json: "장항화물선", js: "장항화물선", typ: r("Fluffy장항화물선") },
        { json: "경원선", js: "경원선", typ: m(r("TartuGecko")) },
        { json: "경의선", js: "경의선", typ: m(r("TartuGecko")) },
        { json: "서울교외선", js: "서울교외선", typ: m(r("TartuGecko")) },
        { json: "경인선", js: "경인선", typ: m(r("TartuGecko")) },
        { json: "호남선", js: "호남선", typ: m(r("TartuGecko")) },
        { json: "전라선", js: "전라선", typ: m(r("TartuGecko")) },
        { json: "미전선", js: "미전선", typ: r("Purple미전선") },
        { json: "경전선", js: "경전선", typ: m(r("TartuGecko")) },
        { json: "광주선", js: "광주선", typ: r("Sticky광주선") },
        { json: "북송정삼각선", js: "북송정삼각선", typ: r("Tentacled북송정삼각선") },
        { json: "오송선", js: "오송선", typ: m(r("TartuGecko")) },
        { json: "충북선", js: "충북선", typ: m(r("TartuGecko")) },
        { json: "구 경춘선", js: "구 경춘선", typ: m(r("TartuGecko")) },
        { json: "경춘선", js: "경춘선", typ: m(r("TartuGecko")) },
        { json: "중앙선", js: "중앙선", typ: m(r("TartuGecko")) },
        { json: "동해남부선", js: "동해남부선", typ: m(r("TartuGecko")) },
        { json: "태백선", js: "태백선", typ: m(r("TartuGecko")) },
        { json: "영동선", js: "영동선", typ: m(r("TartuGecko")) },
        { json: "북평선", js: "북평선", typ: r("Tentacled북평선") },
        { json: "정선선", js: "정선선", typ: r("Fluffy정선선") },
        { json: "경북선", js: "경북선", typ: m(r("TartuGecko")) },
        { json: "대구선", js: "대구선", typ: m(r("TartuGecko")) },
        { json: "주인선", js: "주인선", typ: r("주인선") },
        { json: "금장삼각선", js: "금장삼각선", typ: m(r("TartuGecko")) },
        { json: "우암선", js: "우암선", typ: r("Tentacled우암선") },
        { json: "진해선", js: "진해선", typ: r("Indigo진해선") },
    ], false),
    "Sticky광주선": o([
        { json: "우석", js: "우석", typ: r("TartuGecko") },
        { json: "죽림", js: "죽림", typ: r("TartuGecko") },
        { json: "부광주", js: "부광주", typ: r("TartuGecko") },
    ], false),
    "Fluffy대전선": o([
        { json: "홍도1", js: "홍도1", typ: r("TartuGecko") },
    ], false),
    "Purple미전선": o([
        { json: "송지", js: "송지", typ: r("TartuGecko") },
        { json: "낙동강2", js: "낙동강2", typ: r("TartuGecko") },
    ], false),
    "Tentacled북송정삼각선": o([
        { json: "신역1", js: "신역1", typ: r("TartuGecko") },
    ], false),
    "Tentacled북평선": o([
        { json: "제철2", js: "제철2", typ: r("TartuGecko") },
    ], false),
    "Tentacled우암선": o([
        { json: "쿨스", js: "쿨스", typ: r("TartuGecko") },
    ], false),
    "Fluffy장항화물선": o([
        { json: "수동", js: "수동", typ: r("TartuGecko") },
        { json: "성주", js: "성주", typ: r("TartuGecko") },
        { json: "창신", js: "창신", typ: r("TartuGecko") },
        { json: "삼선", js: "삼선", typ: r("TartuGecko") },
        { json: "군장", js: "군장", typ: r("TartuGecko") },
        { json: "항만", js: "항만", typ: r("TartuGecko") },
        { json: "한솔", js: "한솔", typ: r("TartuGecko") },
    ], false),
    "Fluffy정선선": o([
        { json: "장열2", js: "장열2", typ: r("TartuGecko") },
        { json: "가평", js: "가평", typ: r("TartuGecko") },
    ], false),
    "주인선": o([
        { json: "석정", js: "석정", typ: r("TartuGecko") },
    ], false),
    "Indigo진해선": o([
        { json: "소계", js: "소계", typ: r("TartuGecko") },
    ], false),
    "Purple대한석탄공사": o([
        { json: "화순선", js: "화순선", typ: r("Fluffy화순선") },
    ], false),
    "Fluffy화순선": o([
        { json: "복암", js: "복암", typ: r("TartuGecko") },
        { json: "동암", js: "동암", typ: r("TartuGecko") },
        { json: "정동", js: "정동", typ: r("TartuGecko") },
        { json: "능소", js: "능소", typ: r("TartuGecko") },
        { json: "대암", js: "대암", typ: r("TartuGecko") },
        { json: "충의", js: "충의", typ: r("TartuGecko") },
        { json: "다지", js: "다지", typ: r("TartuGecko") },
        { json: "광덕", js: "광덕", typ: r("TartuGecko") },
        { json: "만연", js: "만연", typ: r("TartuGecko") },
        { json: "삼천리", js: "삼천리", typ: r("TartuGecko") },
        { json: "서양", js: "서양", typ: r("TartuGecko") },
        { json: "벽라", js: "벽라", typ: r("TartuGecko") },
    ], false),
    "영업시설": o([
        { json: "영업중", js: "영업중", typ: r("영업시설_영업중") },
        { json: "폐지", js: "폐지", typ: r("영업시설_폐지") },
        { json: "개업예정", js: "개업예정", typ: r("개업예정") },
    ], false),
    "개업예정": o([
        { json: "공영교통", js: "공영교통", typ: r("개업예정_공영교통") },
        { json: "신분당선", js: "신분당선", typ: m(r("TartuGecko")) },
        { json: "공항철도", js: "공항철도", typ: r("개업예정_공항철도") },
        { json: "지티엑스에이운영 주식회사", js: "지티엑스에이운영 주식회사", typ: m(m(r("TartuGecko"))) },
        { json: "국유철도", js: "국유철도", typ: r("개업예정_국유철도") },
        { json: "수도권 광역급행철도 B노선", js: "수도권 광역급행철도 B노선", typ: m(r("TartuGecko")) },
        { json: "수도권 광역급행철도 B노선 연결선", js: "수도권 광역급행철도 B노선 연결선", typ: r("수도권광역급행철도B노선연결선") },
        { json: "수도권 광역급행철도 B노선 기지선", js: "수도권 광역급행철도 B노선 기지선", typ: r("수도권광역급행철도B노선기지선") },
        { json: "수도권 광역급행철도 C노선", js: "수도권 광역급행철도 C노선", typ: m(r("TartuGecko")) },
        { json: "수도권 광역급행철도 C노선 기지선", js: "수도권 광역급행철도 C노선 기지선", typ: r("수도권광역급행철도C노선기지선") },
        { json: "신안산선", js: "신안산선", typ: m(r("TartuGecko")) },
        { json: "별내선", js: "별내선", typ: r("개업예정_별내선") },
        { json: "남양주도시공사", js: "남양주도시공사", typ: r("개업예정_남양주도시공사") },
        { json: "신안산선 지선", js: "신안산선 지선", typ: r("개업예정_신안산선지선") },
        { json: "서해철도 주식회사", js: "서해철도 주식회사", typ: r("개업예정_서해철도주식회사") },
        { json: "판교 랜드마크 트램", js: "판교 랜드마크 트램", typ: m(r("TartuGecko")) },
        { json: "판교 랜드마크 트램 기지선", js: "판교 랜드마크 트램 기지선", typ: m(r("TartuGecko")) },
        { json: "동탄인덕원선", js: "동탄인덕원선", typ: m(r("TartuGecko")) },
        { json: "동탄인덕원선 지선", js: "동탄인덕원선 지선", typ: m(r("TartuGecko")) },
        { json: "동북선도시철도주식회사", js: "동북선도시철도주식회사", typ: r("개업예정_동북선도시철도주식회사") },
        { json: "주식회사 SR", js: "주식회사 SR", typ: r("개업예정_주식회사Sr") },
        { json: "서울 경전철 위례선", js: "서울 경전철 위례선", typ: m(r("TartuGecko")) },
        { json: "서울 경전철 위례선 지선", js: "서울 경전철 위례선 지선", typ: r("서울경전철위례선지선") },
        { json: "강화석모해상케이블카 주식회사", js: "강화석모해상케이블카 주식회사", typ: r("개업예정_강화석모해상케이블카주식회사") },
        { json: "포항영일만해양케이블카 주식회사", js: "포항영일만해양케이블카 주식회사", typ: r("개업예정_포항영일만해양케이블카주식회사") },
        { json: "옥정포천선", js: "옥정포천선", typ: r("개업예정_옥정포천선") },
        { json: "부산 도시철도 오륙도선", js: "부산 도시철도 오륙도선", typ: m(r("TartuGecko")) },
        { json: "부산 도시철도 C-Bay Park선", js: "부산 도시철도 C-Bay Park선", typ: m(r("TartuGecko")) },
        { json: "창원도시철도", js: "창원도시철도", typ: m(r("TartuGecko")) },
    ], false),
    "개업예정_강화석모해상케이블카주식회사": o([
        { json: "강화석모해상케이블카", js: "강화석모해상케이블카", typ: m(r("TartuGecko")) },
    ], false),
    "개업예정_공영교통": o([
        { json: "인천교통공사", js: "인천교통공사", typ: r("공영교통_인천교통공사") },
        { json: "광주교통공사", js: "광주교통공사", typ: m(m(r("TartuGecko"))) },
        { json: "서울교통공사", js: "서울교통공사", typ: r("Tentacled서울교통공사") },
        { json: "부산교통공사", js: "부산교통공사", typ: r("공영교통_부산교통공사") },
        { json: "대전교통공사", js: "대전교통공사", typ: r("Purple대전교통공사") },
    ], false),
    "Purple대전교통공사": o([
        { json: "대전 도시철도 1호선", js: "대전 도시철도 1호선", typ: r("대전도시철도1호선") },
    ], false),
    "대전도시철도1호선": o([
        { json: "용두", js: "용두", typ: r("TartuGecko") },
    ], false),
    "공영교통_부산교통공사": o([
        { json: "부산 도시철도 사상하단선", js: "부산 도시철도 사상하단선", typ: m(r("TartuGecko")) },
        { json: "부산 도시철도 사상하단선 기지선", js: "부산 도시철도 사상하단선 기지선", typ: m(r("TartuGecko")) },
        { json: "부산 도시철도 2호선", js: "부산 도시철도 2호선", typ: r("Tentacled부산도시철도2호선") },
        { json: "노포", js: "노포", typ: r("TartuGecko") },
        { json: "양산02", js: "양산02", typ: r("TartuGecko") },
        { json: "양산03", js: "양산03", typ: r("TartuGecko") },
        { json: "양산04", js: "양산04", typ: r("TartuGecko") },
        { json: "양산종합운동장", js: "양산종합운동장", typ: r("TartuGecko") },
        { json: "양산06", js: "양산06", typ: r("TartuGecko") },
        { json: "양산07", js: "양산07", typ: r("TartuGecko") },
        { json: "동면차량사업소", js: "동면차량사업소", typ: r("TartuGecko") },
    ], false),
    "Tentacled부산도시철도2호선": o([
        { json: "양산종합운동장", js: "양산종합운동장", typ: r("TartuGecko") },
    ], false),
    "Tentacled서울교통공사": o([
        { json: "별내선", js: "별내선", typ: r("서울교통공사_별내선") },
        { json: "서울교통공사 8호선", js: "서울교통공사 8호선", typ: r("서울교통공사8호선") },
        { json: "진접기지선", js: "진접기지선", typ: r("진접기지선") },
        { json: "진접삼각선", js: "진접삼각선", typ: r("진접삼각선") },
        { json: "도봉산옥정선", js: "도봉산옥정선", typ: r("도봉산옥정선") },
        { json: "서울교통공사 7호선", js: "서울교통공사 7호선", typ: m(r("TartuGecko")) },
        { json: "서울시메트로 9호선", js: "서울시메트로 9호선", typ: m(r("TartuGecko")) },
        { json: "옥정포천선", js: "옥정포천선", typ: r("서울교통공사_옥정포천선") },
    ], false),
    "도봉산옥정선": o([
        { json: "신곡", js: "신곡", typ: r("TartuGecko") },
        { json: "탑석", js: "탑석", typ: r("TartuGecko") },
        { json: "금오", js: "금오", typ: r("TartuGecko") },
        { json: "고읍", js: "고읍", typ: r("TartuGecko") },
        { json: "도봉산", js: "도봉산", typ: r("TartuGecko") },
        { json: "장암", js: "장암", typ: r("TartuGecko") },
    ], false),
    "서울교통공사_별내선": o([
        { json: "암사역사공원", js: "암사역사공원", typ: r("TartuGecko") },
        { json: "암사", js: "암사", typ: r("TartuGecko") },
    ], false),
    "서울교통공사8호선": o([
        { json: "남위례", js: "남위례", typ: r("TartuGecko") },
    ], false),
    "서울교통공사_옥정포천선": o([
        { json: "고읍", js: "고읍", typ: r("TartuGecko") },
        { json: "옥정중앙", js: "옥정중앙", typ: r("TartuGecko") },
    ], false),
    "진접기지선": o([
        { json: "진접", js: "진접", typ: r("TartuGecko") },
        { json: "진접차량사업소", js: "진접차량사업소", typ: r("TartuGecko") },
    ], false),
    "진접삼각선": o([
        { json: "진접차량사업소", js: "진접차량사업소", typ: r("TartuGecko") },
        { json: "오남", js: "오남", typ: r("TartuGecko") },
    ], false),
    "공영교통_인천교통공사": o([
        { json: "인천 도시철도 1호선", js: "인천 도시철도 1호선", typ: m(r("TartuGecko")) },
    ], false),
    "개업예정_공항철도": o([
        { json: "인천국제공항철도", js: "인천국제공항철도", typ: r("Tentacled인천국제공항철도") },
    ], false),
    "Tentacled인천국제공항철도": o([
        { json: "고양", js: "고양", typ: r("TartuGecko") },
    ], false),
    "개업예정_국유철도": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("한국철도공사_8") },
        { json: "대구도시철도공사", js: "대구도시철도공사", typ: r("국유철도_대구도시철도공사") },
    ], false),
    "국유철도_대구도시철도공사": o([
        { json: "대구 도시철도 1호선", js: "대구 도시철도 1호선", typ: m(r("TartuGecko")) },
    ], false),
    "한국철도공사_8": o([
        { json: "경춘선", js: "경춘선", typ: r("Fluffy경춘선") },
        { json: "중앙선", js: "중앙선", typ: r("Sticky중앙선") },
        { json: "동해북부선", js: "동해북부선", typ: m(r("TartuGecko")) },
        { json: "동해선", js: "동해선", typ: r("Fluffy동해선") },
        { json: "부전마산선", js: "부전마산선", typ: r("부전마산선") },
        { json: "부산신항선", js: "부산신항선", typ: r("Purple부산신항선") },
        { json: "경전선", js: "경전선", typ: m(r("TartuGecko")) },
        { json: "서해선", js: "서해선", typ: r("서해선") },
        { json: "경부선", js: "경부선", typ: r("Indecent경부선") },
        { json: "중부내륙선", js: "중부내륙선", typ: r("Fluffy중부내륙선") },
        { json: "월곶판교선", js: "월곶판교선", typ: m(r("TartuGecko")) },
        { json: "여주원주선", js: "여주원주선", typ: r("여주원주선") },
        { json: "충북선", js: "충북선", typ: m(r("TartuGecko")) },
        { json: "호남고속선", js: "호남고속선", typ: m(r("TartuGecko")) },
        { json: "경강선", js: "경강선", typ: r("Fluffy경강선") },
        { json: "화성고속연결선", js: "화성고속연결선", typ: r("화성고속연결선") },
        { json: "경부고속선", js: "경부고속선", typ: r("Sticky경부고속선") },
        { json: "평택고속연결선", js: "평택고속연결선", typ: r("한국철도공사_평택고속연결선") },
        { json: "보성목포선", js: "보성목포선", typ: r("보성목포선") },
        { json: "춘천속초선", js: "춘천속초선", typ: r("춘천속초선") },
        { json: "평택선", js: "평택선", typ: r("Fluffy평택선") },
        { json: "수인선", js: "수인선", typ: r("Tentacled수인선") },
        { json: "경원선", js: "경원선", typ: m(r("TartuGecko")) },
        { json: "호남선", js: "호남선", typ: r("Cunning호남선") },
        { json: "장항선", js: "장항선", typ: r("Indigo장항선") },
        { json: "과천선", js: "과천선", typ: r("한국철도공사_과천선") },
        { json: "경의선", js: "경의선", typ: r("Indigo경의선") },
        { json: "소사원시선", js: "소사원시선", typ: r("한국철도공사_소사원시선") },
        { json: "무릉", js: "무릉", typ: r("TartuGecko") },
    ], false),
    "Fluffy경강선": o([
        { json: "성남", js: "성남", typ: r("TartuGecko") },
    ], false),
    "Sticky경부고속선": o([
        { json: "화성고속연결선분기", js: "화성고속연결선분기", typ: r("TartuGecko") },
        { json: "부전", js: "부전", typ: r("TartuGecko") },
    ], false),
    "Indecent경부선": o([
        { json: "왜관공단", js: "왜관공단", typ: r("TartuGecko") },
        { json: "부성", js: "부성", typ: r("TartuGecko") },
        { json: "북삼", js: "북삼", typ: r("TartuGecko") },
        { json: "원대", js: "원대", typ: r("TartuGecko") },
        { json: "덕암", js: "덕암", typ: r("TartuGecko") },
    ], false),
    "Indigo경의선": o([
        { json: "향동", js: "향동", typ: r("TartuGecko") },
    ], false),
    "Fluffy경춘선": o([
        { json: "왕숙", js: "왕숙", typ: r("TartuGecko") },
        { json: "갈매분기", js: "갈매분기", typ: r("TartuGecko") },
    ], false),
    "한국철도공사_과천선": o([
        { json: "과천정보지식단지", js: "과천정보지식단지", typ: r("TartuGecko") },
    ], false),
    "Fluffy동해선": o([
        { json: "삼척", js: "삼척", typ: r("TartuGecko") },
        { json: "근덕", js: "근덕", typ: r("TartuGecko") },
        { json: "임원", js: "임원", typ: r("TartuGecko") },
        { json: "원남", js: "원남", typ: r("TartuGecko") },
        { json: "기성", js: "기성", typ: r("TartuGecko") },
        { json: "병곡", js: "병곡", typ: r("TartuGecko") },
        { json: "원덕", js: "원덕", typ: r("TartuGecko") },
        { json: "북면", js: "북면", typ: r("TartuGecko") },
        { json: "죽변", js: "죽변", typ: r("TartuGecko") },
        { json: "울진", js: "울진", typ: r("TartuGecko") },
        { json: "후포", js: "후포", typ: r("TartuGecko") },
        { json: "영해", js: "영해", typ: r("TartuGecko") },
        { json: "매원", js: "매원", typ: r("TartuGecko") },
        { json: "평해", js: "평해", typ: r("TartuGecko") },
    ], false),
    "보성목포선": o([
        { json: "보성분기", js: "보성분기", typ: r("TartuGecko") },
        { json: "신보성", js: "신보성", typ: r("TartuGecko") },
        { json: "해남", js: "해남", typ: r("TartuGecko") },
        { json: "영암", js: "영암", typ: r("TartuGecko") },
        { json: "임성리", js: "임성리", typ: r("TartuGecko") },
        { json: "장동", js: "장동", typ: r("TartuGecko") },
        { json: "장흥", js: "장흥", typ: r("TartuGecko") },
        { json: "강진", js: "강진", typ: r("TartuGecko") },
    ], false),
    "Purple부산신항선": o([
        { json: "칠산", js: "칠산", typ: r("TartuGecko") },
    ], false),
    "부전마산선": o([
        { json: "김해공항", js: "김해공항", typ: r("TartuGecko") },
        { json: "에코델타시티", js: "에코델타시티", typ: r("TartuGecko") },
        { json: "가락", js: "가락", typ: r("TartuGecko") },
        { json: "칠산", js: "칠산", typ: r("TartuGecko") },
        { json: "장유", js: "장유", typ: r("TartuGecko") },
        { json: "신월", js: "신월", typ: r("TartuGecko") },
        { json: "신진례", js: "신진례", typ: r("TartuGecko") },
        { json: "부전", js: "부전", typ: r("TartuGecko") },
        { json: "사상", js: "사상", typ: r("TartuGecko") },
    ], false),
    "서해선": o([
        { json: "송산", js: "송산", typ: r("TartuGecko") },
        { json: "홍성", js: "홍성", typ: r("TartuGecko") },
        { json: "인주", js: "인주", typ: r("TartuGecko") },
        { json: "합덕", js: "합덕", typ: r("TartuGecko") },
        { json: "신삽교", js: "신삽교", typ: r("TartuGecko") },
        { json: "USKR", js: "USKR", typ: r("TartuGecko") },
        { json: "화성시청", js: "화성시청", typ: r("TartuGecko") },
        { json: "향남", js: "향남", typ: r("TartuGecko") },
        { json: "안중", js: "안중", typ: r("TartuGecko") },
    ], false),
    "한국철도공사_소사원시선": o([
        { json: "하중", js: "하중", typ: r("TartuGecko") },
    ], false),
    "Tentacled수인선": o([
        { json: "학익", js: "학익", typ: r("TartuGecko") },
    ], false),
    "여주원주선": o([
        { json: "여주", js: "여주", typ: r("TartuGecko") },
        { json: "서원주", js: "서원주", typ: r("TartuGecko") },
    ], false),
    "Indigo장항선": o([
        { json: "아산풍기", js: "아산풍기", typ: r("TartuGecko") },
    ], false),
    "Fluffy중부내륙선": o([
        { json: "살미", js: "살미", typ: r("TartuGecko") },
        { json: "연풍", js: "연풍", typ: r("TartuGecko") },
        { json: "문경", js: "문경", typ: r("TartuGecko") },
        { json: "수안보", js: "수안보", typ: r("TartuGecko") },
    ], false),
    "Sticky중앙선": o([
        { json: "구리분기", js: "구리분기", typ: r("TartuGecko") },
        { json: "군위", js: "군위", typ: r("TartuGecko") },
    ], false),
    "춘천속초선": o([
        { json: "춘천", js: "춘천", typ: r("TartuGecko") },
        { json: "화천", js: "화천", typ: r("TartuGecko") },
        { json: "양구", js: "양구", typ: r("TartuGecko") },
        { json: "인제", js: "인제", typ: r("TartuGecko") },
        { json: "백담", js: "백담", typ: r("TartuGecko") },
        { json: "속초", js: "속초", typ: r("TartuGecko") },
    ], false),
    "한국철도공사_평택고속연결선": o([
        { json: "서정리", js: "서정리", typ: r("TartuGecko") },
    ], false),
    "Fluffy평택선": o([
        { json: "포승", js: "포승", typ: r("TartuGecko") },
        { json: "현덕", js: "현덕", typ: r("TartuGecko") },
        { json: "안중", js: "안중", typ: r("TartuGecko") },
    ], false),
    "Cunning호남선": o([
        { json: "오정", js: "오정", typ: r("TartuGecko") },
        { json: "중촌", js: "중촌", typ: r("TartuGecko") },
        { json: "용두", js: "용두", typ: r("TartuGecko") },
        { json: "문화", js: "문화", typ: r("TartuGecko") },
        { json: "도마", js: "도마", typ: r("TartuGecko") },
    ], false),
    "화성고속연결선": o([
        { json: "어천", js: "어천", typ: r("TartuGecko") },
        { json: "화성고속연결선분기", js: "화성고속연결선분기", typ: r("TartuGecko") },
    ], false),
    "개업예정_남양주도시공사": o([
        { json: "별내선", js: "별내선", typ: r("남양주도시공사_별내선") },
        { json: "진접선", js: "진접선", typ: r("Fluffy진접선") },
    ], false),
    "남양주도시공사_별내선": o([
        { json: "동구릉", js: "동구릉", typ: r("TartuGecko") },
        { json: "다산", js: "다산", typ: r("TartuGecko") },
        { json: "별내", js: "별내", typ: r("TartuGecko") },
    ], false),
    "Fluffy진접선": o([
        { json: "풍양", js: "풍양", typ: r("TartuGecko") },
    ], false),
    "개업예정_동북선도시철도주식회사": o([
        { json: "서울 경전철 동북선", js: "서울 경전철 동북선", typ: m(r("TartuGecko")) },
    ], false),
    "개업예정_별내선": o([
        { json: "장자호수공원", js: "장자호수공원", typ: r("TartuGecko") },
        { json: "구리", js: "구리", typ: r("TartuGecko") },
    ], false),
    "서울경전철위례선지선": o([
        { json: "위례108", js: "위례108", typ: r("TartuGecko") },
        { json: "위례111", js: "위례111", typ: r("TartuGecko") },
        { json: "복정", js: "복정", typ: r("TartuGecko") },
    ], false),
    "개업예정_서해철도주식회사": o([
        { json: "신안산선 지선", js: "신안산선 지선", typ: r("서해철도주식회사_신안산선지선") },
    ], false),
    "서해철도주식회사_신안산선지선": o([
        { json: "시흥능곡", js: "시흥능곡", typ: r("TartuGecko") },
        { json: "달미", js: "달미", typ: r("TartuGecko") },
        { json: "선부", js: "선부", typ: r("TartuGecko") },
        { json: "초지", js: "초지", typ: r("TartuGecko") },
        { json: "시우", js: "시우", typ: r("TartuGecko") },
        { json: "원시", js: "원시", typ: r("TartuGecko") },
    ], false),
    "수도권광역급행철도B노선기지선": o([
        { json: "마석", js: "마석", typ: r("TartuGecko") },
    ], false),
    "수도권광역급행철도B노선연결선": o([
        { json: "상봉", js: "상봉", typ: r("TartuGecko") },
        { json: "구리분기", js: "구리분기", typ: r("TartuGecko") },
    ], false),
    "수도권광역급행철도C노선기지선": o([
        { json: "덕정", js: "덕정", typ: r("TartuGecko") },
    ], false),
    "개업예정_신안산선지선": o([
        { json: "광명", js: "광명", typ: r("TartuGecko") },
        { json: "매화", js: "매화", typ: r("TartuGecko") },
        { json: "시흥시청", js: "시흥시청", typ: r("TartuGecko") },
        { json: "국제테마파크", js: "국제테마파크", typ: r("TartuGecko") },
        { json: "송산", js: "송산", typ: r("TartuGecko") },
        { json: "학온", js: "학온", typ: r("TartuGecko") },
        { json: "송산차량사업소", js: "송산차량사업소", typ: r("TartuGecko") },
    ], false),
    "개업예정_옥정포천선": o([
        { json: "율정", js: "율정", typ: r("TartuGecko") },
        { json: "소흘", js: "소흘", typ: r("TartuGecko") },
        { json: "대진대", js: "대진대", typ: r("TartuGecko") },
        { json: "어룡", js: "어룡", typ: r("TartuGecko") },
        { json: "포천", js: "포천", typ: r("TartuGecko") },
        { json: "포천차량기지", js: "포천차량기지", typ: r("TartuGecko") },
    ], false),
    "개업예정_주식회사Sr": o([
        { json: "평택고속연결선", js: "평택고속연결선", typ: r("주식회사Sr평택고속연결선") },
    ], false),
    "주식회사Sr평택고속연결선": o([
        { json: "SR평택지제", js: "SR평택지제", typ: r("TartuGecko") },
    ], false),
    "개업예정_포항영일만해양케이블카주식회사": o([
        { json: "포항 영일만 해양 케이블카", js: "포항 영일만 해양 케이블카", typ: m(r("TartuGecko")) },
    ], false),
    "영업시설_영업중": o([
        { json: "국유철도", js: "국유철도", typ: r("Tentacled국유철도") },
        { json: "주식회사 강원랜드", js: "주식회사 강원랜드", typ: m(m(r("TartuGecko"))) },
        { json: "공영교통", js: "공영교통", typ: r("영업중_공영교통") },
        { json: "코레일관광개발 주식회사", js: "코레일관광개발 주식회사", typ: r("코레일관광개발주식회사") },
        { json: "서울시메트로9호선", js: "서울시메트로9호선", typ: r("서울시메트로9호선") },
        { json: "새서울철도 주식회사", js: "새서울철도 주식회사", typ: r("영업중_새서울철도주식회사") },
        { json: "신분당선주식회사", js: "신분당선주식회사", typ: r("영업중_신분당선주식회사") },
        { json: "경기철도주식회사", js: "경기철도주식회사", typ: r("영업중_경기철도주식회사") },
        { json: "부산-김해경전철운영주식회사", js: "부산-김해경전철운영주식회사", typ: r("영업중_부산김해경전철운영주식회사") },
        { json: "코레일네트웍스 주식회사", js: "코레일네트웍스 주식회사", typ: r("코레일네트웍스주식회사") },
        { json: "공항철도", js: "공항철도", typ: r("영업중_공항철도") },
        { json: "용인경량전철주식회사", js: "용인경량전철주식회사", typ: r("영업중_용인경량전철주식회사") },
        { json: "주식회사 우진메트로", js: "주식회사 우진메트로", typ: r("영업중_주식회사우진메트로") },
        { json: "우이신설경전철 주식회사", js: "우이신설경전철 주식회사", typ: r("영업중_우이신설경전철주식회사") },
        { json: "주식회사 SR", js: "주식회사 SR", typ: r("영업중_주식회사Sr") },
        { json: "한국철도기술연구원", js: "한국철도기술연구원", typ: r("영업중_한국철도기술연구원") },
        { json: "서부광역철도 주식회사", js: "서부광역철도 주식회사", typ: r("영업중_서부광역철도주식회사") },
        { json: "서해철도 주식회사", js: "서해철도 주식회사", typ: r("영업중_서해철도주식회사") },
        { json: "남서울경전철 주식회사", js: "남서울경전철 주식회사", typ: r("영업중_남서울경전철주식회사") },
        { json: "하남도시공사", js: "하남도시공사", typ: r("영업중_하남도시공사") },
        { json: "남양주도시공사", js: "남양주도시공사", typ: r("영업중_남양주도시공사") },
        { json: "김포골드라인운영주식회사", js: "김포골드라인운영주식회사", typ: r("영업중_김포골드라인운영주식회사") },
        { json: "지티엑스에이운영 주식회사", js: "지티엑스에이운영 주식회사", typ: r("지티엑스에이운영주식회사") },
        { json: "교육부", js: "교육부", typ: r("교육부") },
        { json: "주식회사 파라다이스호텔 부산", js: "주식회사 파라다이스호텔 부산", typ: r("주식회사파라다이스호텔부산") },
        { json: "주식회사 신세계조선호텔", js: "주식회사 신세계조선호텔", typ: r("주식회사신세계조선호텔") },
        { json: "주식회사 온양관광호텔", js: "주식회사 온양관광호텔", typ: r("주식회사온양관광호텔") },
        { json: "해운대블루라인 주식회사", js: "해운대블루라인 주식회사", typ: r("영업중_해운대블루라인주식회사") },
        { json: "대한석탄공사", js: "대한석탄공사", typ: r("영업중_대한석탄공사") },
        { json: "호텔금오산 주식회사", js: "호텔금오산 주식회사", typ: r("영업중_호텔금오산주식회사") },
        { json: "한국삭도공업주식회사", js: "한국삭도공업주식회사", typ: r("영업중_한국삭도공업주식회사") },
        { json: "내장산개발 주식회사", js: "내장산개발 주식회사", typ: r("영업중_내장산개발주식회사") },
        { json: "양지대둔산삭도 유한회사", js: "양지대둔산삭도 유한회사", typ: r("영업중_양지대둔산삭도유한회사") },
        { json: "경상북도 울릉군", js: "경상북도 울릉군", typ: r("영업중_경상북도울릉군") },
        { json: "삼진관광개발 주식회사", js: "삼진관광개발 주식회사", typ: r("영업중_삼진관광개발주식회사") },
        { json: "사천바다케이블카 주식회사", js: "사천바다케이블카 주식회사", typ: r("영업중_사천바다케이블카주식회사") },
        { json: "한국방송공사", js: "한국방송공사", typ: r("영업중_한국방송공사") },
        { json: "목포해상케이블카 주식회사", js: "목포해상케이블카 주식회사", typ: r("영업중_목포해상케이블카주식회사") },
        { json: "강원도 삼척시", js: "강원도 삼척시", typ: r("강원도삼척시") },
        { json: "설악케이블카 주식회사", js: "설악케이블카 주식회사", typ: r("영업중_설악케이블카주식회사") },
        { json: "송도해상케이블카 주식회사", js: "송도해상케이블카 주식회사", typ: r("영업중_송도해상케이블카주식회사") },
        { json: "대덕개발 주식회사", js: "대덕개발 주식회사", typ: r("영업중_대덕개발주식회사") },
        { json: "여수해상케이블카 주식회사", js: "여수해상케이블카 주식회사", typ: r("영업중_여수해상케이블카주식회사") },
        { json: "영남알프스얼음골케이블카 주식회사", js: "영남알프스얼음골케이블카 주식회사", typ: r("영업중_영남알프스얼음골케이블카주식회사") },
        { json: "청풍호반케이블카 주식회사", js: "청풍호반케이블카 주식회사", typ: r("영업중_청풍호반케이블카주식회사") },
        { json: "통영관광개발공사", js: "통영관광개발공사", typ: r("영업중_통영관광개발공사") },
        { json: "한림팩 주식회사", js: "한림팩 주식회사", typ: r("영업중_한림팩주식회사") },
        { json: "부산시설공단", js: "부산시설공단", typ: r("영업중_부산시설공단") },
        { json: "명량해상케이블카", js: "명량해상케이블카", typ: r("명량해상케이블카") },
        { json: "제부도해상케이블카 주식회사", js: "제부도해상케이블카 주식회사", typ: r("영업중_제부도해상케이블카주식회사") },
        { json: "거제 케이블카 주식회사", js: "거제 케이블카 주식회사", typ: r("영업중_거제케이블카주식회사") },
        { json: "강원도 화천군", js: "강원도 화천군", typ: r("영업중_강원도화천군") },
        { json: "주식회사 소노인터네셔널", js: "주식회사 소노인터네셔널", typ: r("영업중_주식회사소노인터네셔널") },
        { json: "주식회사 에이치제이매그놀리아용평호텔앤리조트", js: "주식회사 에이치제이매그놀리아용평호텔앤리조트", typ: r("영업중_주식회사에이치제이매그놀리아용평호텔앤리조트") },
        { json: "재단법인 송암스페이스센터", js: "재단법인 송암스페이스센터", typ: r("영업중_재단법인송암스페이스센터") },
        { json: "주식회사 울진케이블카", js: "주식회사 울진케이블카", typ: r("영업중_주식회사울진케이블카") },
        { json: "하동케이블카 주식회사", js: "하동케이블카 주식회사", typ: r("영업중_하동케이블카주식회사") },
        { json: "순천에코트랜스", js: "순천에코트랜스", typ: r("영업중_순천에코트랜스") },
        { json: "JR 큐슈 고속선 주식회사", js: "JR 큐슈 고속선 주식회사", typ: r("Jr큐슈고속선주식회사") },
        { json: "간푸 페리 주식회사", js: "간푸 페리 주식회사", typ: r("간푸페리주식회사") },
        { json: "미래고속 주식회사", js: "미래고속 주식회사", typ: r("영업중_미래고속주식회사") },
        { json: "부관훼리 주식회사", js: "부관훼리 주식회사", typ: r("영업중_부관훼리주식회사") },
        { json: "태성해운 주식회사", js: "태성해운 주식회사", typ: r("태성해운주식회사") },
        { json: "씨월드고속훼리 주식회사", js: "씨월드고속훼리 주식회사", typ: r("씨월드고속훼리주식회사") },
        { json: "내각 보안성 제23국 지하철도 운영관리국", js: "내각 보안성 제23국 지하철도 운영관리국", typ: r("영업중_내각보안성제23국지하철도운영관리국") },
        { json: "북한 철도성", js: "북한 철도성", typ: r("영업중_북한철도성") },
        { json: "평양시 려객운수종합기업소", js: "평양시 려객운수종합기업소", typ: r("영업중_평양시려객운수종합기업소") },
        { json: "교육기관", js: "교육기관", typ: r("영업중_교육기관") },
        { json: "조선인민군", js: "조선인민군", typ: r("조선인민군") },
        { json: "함경북도 청진시", js: "함경북도 청진시", typ: r("영업중_함경북도청진시") },
        { json: "조선총독부 철도국", js: "조선총독부 철도국", typ: r("영업중_조선총독부철도국") },
        { json: "강원도 원산시", js: "강원도 원산시", typ: r("영업중_강원도원산시") },
        { json: "천지삭도", js: "천지삭도", typ: m(r("TartuGecko")) },
        { json: "향도봉호", js: "향도봉호", typ: r("향도봉호") },
    ], false),
    "Jr큐슈고속선주식회사": o([
        { json: "비틀", js: "비틀", typ: r("비틀") },
    ], false),
    "비틀": o([
        { json: "부산항", js: "부산항", typ: r("TartuGecko") },
    ], false),
    "간푸페리주식회사": o([
        { json: "간푸 페리", js: "간푸 페리", typ: r("비틀") },
    ], false),
    "강원도삼척시": o([
        { json: "삼척해상케이블카", js: "삼척해상케이블카", typ: r("삼척해상케이블카") },
    ], false),
    "삼척해상케이블카": o([
        { json: "용화", js: "용화", typ: r("TartuGecko") },
        { json: "장호", js: "장호", typ: r("TartuGecko") },
    ], false),
    "영업중_강원도원산시": o([
        { json: "원산 궤도전차", js: "원산 궤도전차", typ: m(r("TartuGecko")) },
    ], false),
    "영업중_강원도화천군": o([
        { json: "백암산 케이블카", js: "백암산 케이블카", typ: r("케이블카") },
    ], false),
    "케이블카": o([
        { json: "하부", js: "하부", typ: r("TartuGecko") },
        { json: "상부", js: "상부", typ: r("TartuGecko") },
    ], false),
    "영업중_거제케이블카주식회사": o([
        { json: "거제 파노라마 케이블카", js: "거제 파노라마 케이블카", typ: r("거제파노라마케이블카") },
    ], false),
    "거제파노라마케이블카": o([
        { json: "사계", js: "사계", typ: r("TartuGecko") },
        { json: "윤슬", js: "윤슬", typ: r("TartuGecko") },
    ], false),
    "영업중_경기철도주식회사": o([
        { json: "신분당선", js: "신분당선", typ: r("경기철도주식회사_신분당선") },
    ], false),
    "경기철도주식회사_신분당선": o([
        { json: "동천", js: "동천", typ: r("TartuGecko") },
        { json: "수지구청", js: "수지구청", typ: r("TartuGecko") },
        { json: "성복", js: "성복", typ: r("TartuGecko") },
        { json: "상현", js: "상현", typ: r("TartuGecko") },
        { json: "광교중앙", js: "광교중앙", typ: r("TartuGecko") },
        { json: "광교", js: "광교", typ: r("TartuGecko") },
        { json: "미금", js: "미금", typ: r("TartuGecko") },
    ], false),
    "영업중_경상북도울릉군": o([
        { json: "독도전망대 케이블카", js: "독도전망대 케이블카", typ: r("케이블카") },
    ], false),
    "영업중_공영교통": o([
        { json: "서울교통공사", js: "서울교통공사", typ: r("Sticky서울교통공사") },
        { json: "인천교통공사", js: "인천교통공사", typ: m(m(r("TartuGecko"))) },
        { json: "대전교통공사", js: "대전교통공사", typ: r("Fluffy대전교통공사") },
        { json: "광주교통공사", js: "광주교통공사", typ: r("광주교통공사") },
        { json: "부산교통공사", js: "부산교통공사", typ: m(m(r("TartuGecko"))) },
    ], false),
    "광주교통공사": o([
        { json: "광주교통공사 1호선", js: "광주교통공사 1호선", typ: m(r("TartuGecko")) },
    ], false),
    "Fluffy대전교통공사": o([
        { json: "대전 도시철도 1호선", js: "대전 도시철도 1호선", typ: m(r("TartuGecko")) },
    ], false),
    "Sticky서울교통공사": o([
        { json: "서울교통공사 3호선", js: "서울교통공사 3호선", typ: m(r("TartuGecko")) },
        { json: "서울교통공사 5호선", js: "서울교통공사 5호선", typ: m(r("TartuGecko")) },
        { json: "서울교통공사 5호선 마천지선", js: "서울교통공사 5호선 마천지선", typ: r("서울교통공사5호선마천지선") },
        { json: "서울교통공사 6호선", js: "서울교통공사 6호선", typ: m(r("TartuGecko")) },
        { json: "서울교통공사 7호선", js: "서울교통공사 7호선", typ: m(r("TartuGecko")) },
        { json: "서울교통공사 8호선", js: "서울교통공사 8호선", typ: m(r("TartuGecko")) },
        { json: "서울시메트로 9호선", js: "서울시메트로 9호선", typ: m(r("TartuGecko")) },
        { json: "서울교통공사 2호선 성수지선", js: "서울교통공사 2호선 성수지선", typ: r("서울교통공사2호선성수지선") },
        { json: "서울교통공사 2호선 신정지선", js: "서울교통공사 2호선 신정지선", typ: m(r("TartuGecko")) },
        { json: "서울교통공사 3호선 지축기지선", js: "서울교통공사 3호선 지축기지선", typ: m(r("TartuGecko")) },
        { json: "서울교통공사 3호선 수서기지선", js: "서울교통공사 3호선 수서기지선", typ: r("Fluffy서울교통공사3호선수서기지선") },
        { json: "하남선", js: "하남선", typ: m(r("TartuGecko")) },
        { json: "진접선", js: "진접선", typ: r("Tentacled진접선") },
        { json: "서울교통공사 4호선 창동기지선", js: "서울교통공사 4호선 창동기지선", typ: r("Fluffy서울교통공사4호선창동기지선") },
        { json: "서울교통공사 4호선 노원창동선", js: "서울교통공사 4호선 노원창동선", typ: r("서울교통공사4호선노원창동선") },
        { json: "삼송지축선", js: "삼송지축선", typ: r("Fluffy삼송지축선") },
        { json: "서울교통공사 3호선 수서삼각선", js: "서울교통공사 3호선 수서삼각선", typ: m(r("TartuGecko")) },
        { json: "서울교통공사 5호선 강동삼각선", js: "서울교통공사 5호선 강동삼각선", typ: r("Fluffy서울교통공사5호선강동삼각선") },
        { json: "서울교통공사 1호선", js: "서울교통공사 1호선", typ: m(r("TartuGecko")) },
        { json: "서울교통공사 2호선", js: "서울교통공사 2호선", typ: m(r("TartuGecko")) },
        { json: "서울교통공사 4호선", js: "서울교통공사 4호선", typ: m(r("TartuGecko")) },
        { json: "과천선", js: "과천선", typ: r("서울교통공사_과천선") },
    ], false),
    "서울교통공사_과천선": o([
        { json: "남태령", js: "남태령", typ: r("TartuGecko") },
    ], false),
    "Fluffy삼송지축선": o([
        { json: "지축차량사업소", js: "지축차량사업소", typ: r("TartuGecko") },
    ], false),
    "서울교통공사2호선성수지선": o([
        { json: "성수", js: "성수", typ: r("TartuGecko") },
        { json: "군자차량사업소", js: "군자차량사업소", typ: r("TartuGecko") },
        { json: "용답", js: "용답", typ: r("TartuGecko") },
        { json: "신답", js: "신답", typ: r("TartuGecko") },
        { json: "용두", js: "용두", typ: r("TartuGecko") },
        { json: "신설동", js: "신설동", typ: r("TartuGecko") },
    ], false),
    "Fluffy서울교통공사3호선수서기지선": o([
        { json: "수서차량사업소", js: "수서차량사업소", typ: r("TartuGecko") },
        { json: "수서", js: "수서", typ: r("TartuGecko") },
    ], false),
    "서울교통공사4호선노원창동선": o([
        { json: "노원", js: "노원", typ: r("TartuGecko") },
        { json: "창동기지", js: "창동기지", typ: r("TartuGecko") },
    ], false),
    "Fluffy서울교통공사4호선창동기지선": o([
        { json: "창동", js: "창동", typ: r("TartuGecko") },
        { json: "창동기지", js: "창동기지", typ: r("TartuGecko") },
    ], false),
    "Fluffy서울교통공사5호선강동삼각선": o([
        { json: "강동삼각선분기", js: "강동삼각선분기", typ: r("TartuGecko") },
        { json: "길동", js: "길동", typ: r("TartuGecko") },
    ], false),
    "서울교통공사5호선마천지선": o([
        { json: "둔촌동", js: "둔촌동", typ: r("TartuGecko") },
        { json: "올림픽공원", js: "올림픽공원", typ: r("TartuGecko") },
        { json: "방이", js: "방이", typ: r("TartuGecko") },
        { json: "오금", js: "오금", typ: r("TartuGecko") },
        { json: "개롱", js: "개롱", typ: r("TartuGecko") },
        { json: "거여", js: "거여", typ: r("TartuGecko") },
        { json: "마천", js: "마천", typ: r("TartuGecko") },
        { json: "강동삼각선분기", js: "강동삼각선분기", typ: r("TartuGecko") },
        { json: "강동", js: "강동", typ: r("TartuGecko") },
    ], false),
    "Tentacled진접선": o([
        { json: "당고개", js: "당고개", typ: r("TartuGecko") },
    ], false),
    "영업중_공항철도": o([
        { json: "인천국제공항철도", js: "인천국제공항철도", typ: m(r("TartuGecko")) },
        { json: "용유차량기지선", js: "용유차량기지선", typ: m(r("TartuGecko")) },
        { json: "용유차량삼각선", js: "용유차량삼각선", typ: m(r("TartuGecko")) },
        { json: "수색직결선", js: "수색직결선", typ: r("공항철도_수색직결선") },
    ], false),
    "공항철도_수색직결선": o([
        { json: "공항철도직결선분기", js: "공항철도직결선분기", typ: r("TartuGecko") },
    ], false),
    "영업중_교육기관": o([
        { json: "평양교통운수종합대학", js: "평양교통운수종합대학", typ: r("TartuGecko") },
    ], false),
    "교육부": o([
        { json: "교육기관", js: "교육기관", typ: m(r("TartuGecko")) },
    ], false),
    "Tentacled국유철도": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("한국철도공사_9") },
        { json: "대구도시철도공사", js: "대구도시철도공사", typ: m(m(r("TartuGecko"))) },
        { json: "철도청", js: "철도청", typ: r("Tentacled철도청") },
    ], false),
    "Tentacled철도청": o([
        { json: "북전주선", js: "북전주선", typ: r("철도청_북전주선") },
    ], false),
    "철도청_북전주선": o([
        { json: "동산", js: "동산", typ: r("TartuGecko") },
    ], false),
    "한국철도공사_9": o([
        { json: "가야선", js: "가야선", typ: r("Tentacled가야선") },
        { json: "강경선", js: "강경선", typ: r("Fluffy강경선") },
        { json: "경부고속선", js: "경부고속선", typ: m(r("TartuGecko")) },
        { json: "경부선", js: "경부선", typ: m(r("TartuGecko")) },
        { json: "장항선", js: "장항선", typ: m(r("TartuGecko")) },
        { json: "경북선", js: "경북선", typ: r("Sticky경북선") },
        { json: "경원선", js: "경원선", typ: m(r("TartuGecko")) },
        { json: "경의선", js: "경의선", typ: m(r("TartuGecko")) },
        { json: "경인선", js: "경인선", typ: m(r("TartuGecko")) },
        { json: "경전선", js: "경전선", typ: m(r("TartuGecko")) },
        { json: "경춘선", js: "경춘선", typ: m(r("TartuGecko")) },
        { json: "광양제철선", js: "광양제철선", typ: r("Tentacled광양제철선") },
        { json: "괴동선", js: "괴동선", typ: r("Sticky괴동선") },
        { json: "군산화물선", js: "군산화물선", typ: m(r("TartuGecko")) },
        { json: "대구선", js: "대구선", typ: r("Tentacled대구선") },
        { json: "대불선", js: "대불선", typ: r("Tentacled대불선") },
        { json: "동해선", js: "동해선", typ: m(r("TartuGecko")) },
        { json: "문경선", js: "문경선", typ: r("Tentacled문경선") },
        { json: "부강화물선", js: "부강화물선", typ: r("부강화물선") },
        { json: "부산신항선", js: "부산신항선", typ: r("Fluffy부산신항선") },
        { json: "부산신항 북선", js: "부산신항 북선", typ: m(r("TartuGecko")) },
        { json: "부산신항 남선", js: "부산신항 남선", typ: m(r("TartuGecko")) },
        { json: "분당선", js: "분당선", typ: m(r("TartuGecko")) },
        { json: "삼척선", js: "삼척선", typ: r("Indigo삼척선") },
        { json: "서울교외선", js: "서울교외선", typ: r("Tentacled서울교외선") },
        { json: "수인선", js: "수인선", typ: m(r("TartuGecko")) },
        { json: "신광양항선", js: "신광양항선", typ: r("Fluffy신광양항선") },
        { json: "신동화물선", js: "신동화물선", typ: r("Fluffy신동화물선") },
        { json: "안산선", js: "안산선", typ: m(r("TartuGecko")) },
        { json: "영동선", js: "영동선", typ: m(r("TartuGecko")) },
        { json: "옥구선", js: "옥구선", typ: r("Fluffy옥구선") },
        { json: "우암선", js: "우암선", typ: m(r("TartuGecko")) },
        { json: "일산선", js: "일산선", typ: r("일산선") },
        { json: "전라선", js: "전라선", typ: m(r("TartuGecko")) },
        { json: "정선선", js: "정선선", typ: m(r("TartuGecko")) },
        { json: "중앙선", js: "중앙선", typ: m(r("TartuGecko")) },
        { json: "진해선", js: "진해선", typ: r("Indecent진해선") },
        { json: "충북선", js: "충북선", typ: m(r("TartuGecko")) },
        { json: "태백선", js: "태백선", typ: m(r("TartuGecko")) },
        { json: "호남선", js: "호남선", typ: m(r("TartuGecko")) },
        { json: "사업소", js: "사업소", typ: m(r("TartuGecko")) },
        { json: "과천선", js: "과천선", typ: m(r("TartuGecko")) },
        { json: "KTX 리무진 광명도심공항선", js: "KTX 리무진 광명도심공항선", typ: m(r("TartuGecko")) },
        { json: "용산선", js: "용산선", typ: r("한국철도공사_용산선") },
        { json: "광주선", js: "광주선", typ: m(r("TartuGecko")) },
        { json: "광명주박기지선", js: "광명주박기지선", typ: r("광명주박기지선") },
        { json: "병점기지선", js: "병점기지선", typ: m(r("TartuGecko")) },
        { json: "남부화물기지선", js: "남부화물기지선", typ: r("Tentacled남부화물기지선") },
        { json: "구로삼각선", js: "구로삼각선", typ: m(r("TartuGecko")) },
        { json: "천안직결선", js: "천안직결선", typ: r("Tentacled천안직결선") },
        { json: "오송선", js: "오송선", typ: r("Fluffy오송선") },
        { json: "오송정비기지선", js: "오송정비기지선", typ: r("Fluffy오송정비기지선") },
        { json: "대전선", js: "대전선", typ: r("Tentacled대전선") },
        { json: "영동정비기지선", js: "영동정비기지선", typ: m(r("TartuGecko")) },
        { json: "미전선", js: "미전선", typ: r("Fluffy미전선") },
        { json: "양산화물선", js: "양산화물선", typ: r("Fluffy양산화물선") },
        { json: "부전선", js: "부전선", typ: r("Tentacled부전선") },
        { json: "온산선", js: "온산선", typ: r("Sticky온산선") },
        { json: "장생포선", js: "장생포선", typ: m(r("TartuGecko")) },
        { json: "울산항선", js: "울산항선", typ: m(r("TartuGecko")) },
        { json: "북영주삼각선", js: "북영주삼각선", typ: m(r("TartuGecko")) },
        { json: "북평선", js: "북평선", typ: r("Sticky북평선") },
        { json: "묵호항선", js: "묵호항선", typ: r("Tentacled묵호항선") },
        { json: "망우선", js: "망우선", typ: r("Tentacled망우선") },
        { json: "고양기지선", js: "고양기지선", typ: m(r("TartuGecko")) },
        { json: "수색객차출발선", js: "수색객차출발선", typ: r("Tentacled수색객차출발선") },
        { json: "문산기지선", js: "문산기지선", typ: r("문산기지선") },
        { json: "장성화물선", js: "장성화물선", typ: r("장성화물선") },
        { json: "북송정삼각선", js: "북송정삼각선", typ: m(r("TartuGecko")) },
        { json: "전경삼각선", js: "전경삼각선", typ: r("Fluffy전경삼각선") },
        { json: "덕산선", js: "덕산선", typ: r("Tentacled덕산선") },
        { json: "구로기지선", js: "구로기지선", typ: r("구로기지선") },
        { json: "경강선", js: "경강선", typ: m(r("TartuGecko")) },
        { json: "부발기지선", js: "부발기지선", typ: r("부발기지선") },
        { json: "소사원시선", js: "소사원시선", typ: m(r("TartuGecko")) },
        { json: "영일만항선", js: "영일만항선", typ: r("Fluffy영일만항선") },
        { json: "평택선", js: "평택선", typ: r("Tentacled평택선") },
        { json: "여천선", js: "여천선", typ: r("Sticky여천선") },
        { json: "함백선", js: "함백선", typ: r("Tentacled함백선") },
        { json: "사천선", js: "사천선", typ: r("Fluffy사천선") },
        { json: "시흥기지선", js: "시흥기지선", typ: m(r("TartuGecko")) },
        { json: "월곶시흥선", js: "월곶시흥선", typ: r("월곶시흥선") },
        { json: "분당기지선", js: "분당기지선", typ: r("분당기지선") },
        { json: "용산삼각선", js: "용산삼각선", typ: m(r("TartuGecko")) },
        { json: "평내기지선", js: "평내기지선", typ: m(r("TartuGecko")) },
        { json: "제천조차장선", js: "제천조차장선", typ: r("Tentacled제천조차장선") },
        { json: "영천삼각선", js: "영천삼각선", typ: m(r("TartuGecko")) },
        { json: "용문기지선", js: "용문기지선", typ: r("Fluffy용문기지선") },
        { json: "태백삼각선", js: "태백삼각선", typ: m(r("TartuGecko")) },
        { json: "울산기지선", js: "울산기지선", typ: m(r("TartuGecko")) },
        { json: "울산신항선", js: "울산신항선", typ: r("Tentacled울산신항선") },
        { json: "원주강릉선", js: "원주강릉선", typ: m(r("TartuGecko")) },
        { json: "동해북부선", js: "동해북부선", typ: r("Indecent동해북부선") },
        { json: "안산입고선", js: "안산입고선", typ: r("한국철도공사_안산출고선") },
        { json: "중부내륙선", js: "중부내륙선", typ: m(r("TartuGecko")) },
        { json: "익산삼각선", js: "익산삼각선", typ: m(r("TartuGecko")) },
        { json: "강릉삼각선", js: "강릉삼각선", typ: m(r("TartuGecko")) },
        { json: "박물관", js: "박물관", typ: r("교통부_박물관") },
        { json: "평택직결선", js: "평택직결선", typ: r("평택직결선") },
        { json: "삼송지축선", js: "삼송지축선", typ: r("Tentacled삼송지축선") },
        { json: "성북기지선", js: "성북기지선", typ: m(r("TartuGecko")) },
        { json: "안산출고선", js: "안산출고선", typ: r("한국철도공사_안산출고선") },
        { json: "수색직결선", js: "수색직결선", typ: r("한국철도공사_수색직결선") },
        { json: "이문기지선", js: "이문기지선", typ: m(r("TartuGecko")) },
        { json: "숙성기지선", js: "숙성기지선", typ: r("숙성기지선") },
        { json: "호남고속선", js: "호남고속선", typ: m(r("TartuGecko")) },
        { json: "신동연결선", js: "신동연결선", typ: m(r("TartuGecko")) },
        { json: "경주삼각선", js: "경주삼각선", typ: m(r("TartuGecko")) },
        { json: "대전철도차량정비단선", js: "대전철도차량정비단선", typ: m(r("TartuGecko")) },
        { json: "강릉기지선", js: "강릉기지선", typ: m(r("TartuGecko")) },
        { json: "분당연결선", js: "분당연결선", typ: r("한국철도공사_분당연결선") },
        { json: "대전북연결선", js: "대전북연결선", typ: m(r("TartuGecko")) },
        { json: "대전남연결선", js: "대전남연결선", typ: r("대전남연결선") },
        { json: "부산북연결선", js: "부산북연결선", typ: r("부산북연결선") },
        { json: "익산남연결선", js: "익산남연결선", typ: m(r("TartuGecko")) },
        { json: "포항영덕 대행버스", js: "포항영덕 대행버스", typ: m(r("TartuGecko")) },
        { json: "익산북연결선", js: "익산북연결선", typ: r("익산북연결선") },
        { json: "광주송정북연결선", js: "광주송정북연결선", typ: m(r("TartuGecko")) },
        { json: "군산항선", js: "군산항선", typ: m(r("TartuGecko")) },
        { json: "광주기지선", js: "광주기지선", typ: m(r("TartuGecko")) },
        { json: "평택삼각선", js: "평택삼각선", typ: r("Fluffy평택삼각선") },
        { json: "건천연결선", js: "건천연결선", typ: r("건천연결선") },
        { json: "광양항선", js: "광양항선", typ: r("Fluffy광양항선") },
        { json: "북전주선", js: "북전주선", typ: r("Sticky북전주선") },
        { json: "대구북연결선", js: "대구북연결선", typ: r("대구북연결선") },
        { json: "대구남연결선", js: "대구남연결선", typ: m(r("TartuGecko")) },
        { json: "시흥연결선", js: "시흥연결선", typ: m(r("TartuGecko")) },
    ], false),
    "Tentacled가야선": o([
        { json: "사상", js: "사상", typ: r("TartuGecko") },
        { json: "범일", js: "범일", typ: r("TartuGecko") },
        { json: "가야", js: "가야", typ: r("TartuGecko") },
        { json: "부산기지", js: "부산기지", typ: r("TartuGecko") },
    ], false),
    "Fluffy강경선": o([
        { json: "채운", js: "채운", typ: r("TartuGecko") },
        { json: "강경", js: "강경", typ: r("TartuGecko") },
        { json: "연무대", js: "연무대", typ: r("TartuGecko") },
    ], false),
    "건천연결선": o([
        { json: "신경주분기", js: "신경주분기", typ: r("TartuGecko") },
        { json: "모량", js: "모량", typ: r("TartuGecko") },
    ], false),
    "Sticky경북선": o([
        { json: "김천", js: "김천", typ: r("TartuGecko") },
        { json: "개포", js: "개포", typ: r("TartuGecko") },
        { json: "용궁", js: "용궁", typ: r("TartuGecko") },
        { json: "점촌", js: "점촌", typ: r("TartuGecko") },
        { json: "함창", js: "함창", typ: r("TartuGecko") },
        { json: "백원", js: "백원", typ: r("TartuGecko") },
        { json: "어등", js: "어등", typ: r("TartuGecko") },
        { json: "영주", js: "영주", typ: r("TartuGecko") },
        { json: "청리", js: "청리", typ: r("TartuGecko") },
        { json: "예천", js: "예천", typ: r("TartuGecko") },
        { json: "상주", js: "상주", typ: r("TartuGecko") },
        { json: "옥산", js: "옥산", typ: r("TartuGecko") },
    ], false),
    "광명주박기지선": o([
        { json: "광명", js: "광명", typ: r("TartuGecko") },
        { json: "광명기지", js: "광명기지", typ: r("TartuGecko") },
    ], false),
    "Tentacled광양제철선": o([
        { json: "초남", js: "초남", typ: r("TartuGecko") },
        { json: "광양", js: "광양", typ: r("TartuGecko") },
        { json: "황길", js: "황길", typ: r("TartuGecko") },
        { json: "태금", js: "태금", typ: r("TartuGecko") },
    ], false),
    "Fluffy광양항선": o([
        { json: "광양항", js: "광양항", typ: r("TartuGecko") },
        { json: "황길", js: "황길", typ: r("TartuGecko") },
    ], false),
    "Sticky괴동선": o([
        { json: "효자", js: "효자", typ: r("TartuGecko") },
        { json: "부조", js: "부조", typ: r("TartuGecko") },
        { json: "괴동", js: "괴동", typ: r("TartuGecko") },
    ], false),
    "구로기지선": o([
        { json: "구로", js: "구로", typ: r("TartuGecko") },
        { json: "구로차량사업소", js: "구로차량사업소", typ: r("TartuGecko") },
    ], false),
    "Tentacled남부화물기지선": o([
        { json: "의왕", js: "의왕", typ: r("TartuGecko") },
        { json: "오봉", js: "오봉", typ: r("TartuGecko") },
    ], false),
    "대구북연결선": o([
        { json: "대구북연결선분기", js: "대구북연결선분기", typ: r("TartuGecko") },
        { json: "대구", js: "대구", typ: r("TartuGecko") },
    ], false),
    "Tentacled대구선": o([
        { json: "가천", js: "가천", typ: r("TartuGecko") },
        { json: "영천", js: "영천", typ: r("TartuGecko") },
        { json: "북영천분기", js: "북영천분기", typ: r("TartuGecko") },
        { json: "금강", js: "금강", typ: r("TartuGecko") },
        { json: "금호", js: "금호", typ: r("TartuGecko") },
        { json: "청천", js: "청천", typ: r("TartuGecko") },
        { json: "하양", js: "하양", typ: r("TartuGecko") },
    ], false),
    "Tentacled대불선": o([
        { json: "일로", js: "일로", typ: r("TartuGecko") },
        { json: "대불", js: "대불", typ: r("TartuGecko") },
    ], false),
    "대전남연결선": o([
        { json: "대전", js: "대전", typ: r("TartuGecko") },
        { json: "대전남연결선분기", js: "대전남연결선분기", typ: r("TartuGecko") },
    ], false),
    "Tentacled대전선": o([
        { json: "대전", js: "대전", typ: r("TartuGecko") },
        { json: "서대전", js: "서대전", typ: r("TartuGecko") },
    ], false),
    "Tentacled덕산선": o([
        { json: "용강", js: "용강", typ: r("TartuGecko") },
        { json: "창원", js: "창원", typ: r("TartuGecko") },
        { json: "덕산", js: "덕산", typ: r("TartuGecko") },
    ], false),
    "Indecent동해북부선": o([
        { json: "군사분계선", js: "군사분계선", typ: r("TartuGecko") },
        { json: "제진", js: "제진", typ: r("TartuGecko") },
    ], false),
    "Tentacled망우선": o([
        { json: "망우", js: "망우", typ: r("TartuGecko") },
        { json: "광운대", js: "광운대", typ: r("TartuGecko") },
    ], false),
    "Tentacled묵호항선": o([
        { json: "동해", js: "동해", typ: r("TartuGecko") },
        { json: "묵호", js: "묵호", typ: r("TartuGecko") },
        { json: "묵호항", js: "묵호항", typ: r("TartuGecko") },
    ], false),
    "Tentacled문경선": o([
        { json: "점촌", js: "점촌", typ: r("TartuGecko") },
        { json: "주평", js: "주평", typ: r("TartuGecko") },
    ], false),
    "문산기지선": o([
        { json: "문산", js: "문산", typ: r("TartuGecko") },
        { json: "문산차량사업소", js: "문산차량사업소", typ: r("TartuGecko") },
    ], false),
    "Fluffy미전선": o([
        { json: "미전", js: "미전", typ: r("TartuGecko") },
        { json: "낙동강", js: "낙동강", typ: r("TartuGecko") },
    ], false),
    "교통부_박물관": o([
        { json: "철도박물관", js: "철도박물관", typ: r("TartuGecko") },
    ], false),
    "부강화물선": o([
        { json: "부강화물", js: "부강화물", typ: r("TartuGecko") },
        { json: "부강", js: "부강", typ: r("TartuGecko") },
    ], false),
    "부발기지선": o([
        { json: "부발", js: "부발", typ: r("TartuGecko") },
        { json: "부발차량사업소", js: "부발차량사업소", typ: r("TartuGecko") },
    ], false),
    "부산북연결선": o([
        { json: "부산", js: "부산", typ: r("TartuGecko") },
        { json: "부산북연결선분기", js: "부산북연결선분기", typ: r("TartuGecko") },
    ], false),
    "Fluffy부산신항선": o([
        { json: "장유", js: "장유", typ: r("TartuGecko") },
        { json: "부산신항", js: "부산신항", typ: r("TartuGecko") },
        { json: "진례", js: "진례", typ: r("TartuGecko") },
    ], false),
    "Tentacled부전선": o([
        { json: "가야", js: "가야", typ: r("TartuGecko") },
        { json: "부전", js: "부전", typ: r("TartuGecko") },
        { json: "부산전동차유치선", js: "부산전동차유치선", typ: r("TartuGecko") },
    ], false),
    "Sticky북전주선": o([
        { json: "북전주", js: "북전주", typ: r("TartuGecko") },
    ], false),
    "Sticky북평선": o([
        { json: "동해", js: "동해", typ: r("TartuGecko") },
        { json: "삼화", js: "삼화", typ: r("TartuGecko") },
    ], false),
    "분당기지선": o([
        { json: "죽전", js: "죽전", typ: r("TartuGecko") },
        { json: "분당기지", js: "분당기지", typ: r("TartuGecko") },
    ], false),
    "한국철도공사_분당연결선": o([
        { json: "미금분기", js: "미금분기", typ: r("TartuGecko") },
    ], false),
    "Fluffy사천선": o([
        { json: "진주", js: "진주", typ: r("TartuGecko") },
        { json: "사천", js: "사천", typ: r("TartuGecko") },
    ], false),
    "Tentacled삼송지축선": o([
        { json: "삼송", js: "삼송", typ: r("TartuGecko") },
    ], false),
    "Indigo삼척선": o([
        { json: "삼척", js: "삼척", typ: r("TartuGecko") },
        { json: "동해", js: "동해", typ: r("TartuGecko") },
        { json: "삼척해변", js: "삼척해변", typ: r("TartuGecko") },
        { json: "추암", js: "추암", typ: r("TartuGecko") },
    ], false),
    "Tentacled서울교외선": o([
        { json: "의정부", js: "의정부", typ: r("TartuGecko") },
        { json: "능곡", js: "능곡", typ: r("TartuGecko") },
        { json: "대곡", js: "대곡", typ: r("TartuGecko") },
        { json: "일영", js: "일영", typ: r("TartuGecko") },
        { json: "송추", js: "송추", typ: r("TartuGecko") },
        { json: "대정", js: "대정", typ: r("TartuGecko") },
        { json: "삼릉", js: "삼릉", typ: r("TartuGecko") },
        { json: "벽제", js: "벽제", typ: r("TartuGecko") },
        { json: "온릉", js: "온릉", typ: r("TartuGecko") },
        { json: "원릉", js: "원릉", typ: r("TartuGecko") },
        { json: "장흥", js: "장흥", typ: r("TartuGecko") },
    ], false),
    "Tentacled수색객차출발선": o([
        { json: "가좌", js: "가좌", typ: r("TartuGecko") },
        { json: "수색", js: "수색", typ: r("TartuGecko") },
        { json: "수색차량사업소", js: "수색차량사업소", typ: r("TartuGecko") },
    ], false),
    "한국철도공사_수색직결선": o([
        { json: "수색", js: "수색", typ: r("TartuGecko") },
        { json: "수색연결선분기", js: "수색연결선분기", typ: r("TartuGecko") },
    ], false),
    "숙성기지선": o([
        { json: "창내", js: "창내", typ: r("TartuGecko") },
        { json: "미군기지", js: "미군기지", typ: r("TartuGecko") },
    ], false),
    "Fluffy신광양항선": o([
        { json: "신광양항", js: "신광양항", typ: r("TartuGecko") },
        { json: "초남", js: "초남", typ: r("TartuGecko") },
    ], false),
    "Fluffy신동화물선": o([
        { json: "신동화물", js: "신동화물", typ: r("TartuGecko") },
        { json: "신동", js: "신동", typ: r("TartuGecko") },
    ], false),
    "한국철도공사_안산출고선": o([
        { json: "안산", js: "안산", typ: r("TartuGecko") },
    ], false),
    "Fluffy양산화물선": o([
        { json: "물금", js: "물금", typ: r("TartuGecko") },
        { json: "양산화물", js: "양산화물", typ: r("TartuGecko") },
    ], false),
    "Sticky여천선": o([
        { json: "덕양", js: "덕양", typ: r("TartuGecko") },
        { json: "흥국사", js: "흥국사", typ: r("TartuGecko") },
        { json: "적량", js: "적량", typ: r("TartuGecko") },
    ], false),
    "Fluffy영일만항선": o([
        { json: "포항", js: "포항", typ: r("TartuGecko") },
        { json: "영일만항", js: "영일만항", typ: r("TartuGecko") },
    ], false),
    "Fluffy오송선": o([
        { json: "서창", js: "서창", typ: r("TartuGecko") },
        { json: "오송", js: "오송", typ: r("TartuGecko") },
    ], false),
    "Fluffy오송정비기지선": o([
        { json: "오송기지", js: "오송기지", typ: r("TartuGecko") },
        { json: "오송", js: "오송", typ: r("TartuGecko") },
    ], false),
    "Fluffy옥구선": o([
        { json: "옥구", js: "옥구", typ: r("TartuGecko") },
        { json: "군산옥산", js: "군산옥산", typ: r("TartuGecko") },
    ], false),
    "Sticky온산선": o([
        { json: "남창", js: "남창", typ: r("TartuGecko") },
        { json: "온산", js: "온산", typ: r("TartuGecko") },
    ], false),
    "Fluffy용문기지선": o([
        { json: "용문", js: "용문", typ: r("TartuGecko") },
        { json: "용문기지", js: "용문기지", typ: r("TartuGecko") },
    ], false),
    "한국철도공사_용산선": o([
        { json: "홍대입구", js: "홍대입구", typ: r("TartuGecko") },
        { json: "공덕", js: "공덕", typ: r("TartuGecko") },
        { json: "가좌", js: "가좌", typ: r("TartuGecko") },
        { json: "효창공원앞", js: "효창공원앞", typ: r("TartuGecko") },
        { json: "용산", js: "용산", typ: r("TartuGecko") },
        { json: "서강대", js: "서강대", typ: r("TartuGecko") },
    ], false),
    "Tentacled울산신항선": o([
        { json: "망양", js: "망양", typ: r("TartuGecko") },
        { json: "용암", js: "용암", typ: r("TartuGecko") },
        { json: "울산신항", js: "울산신항", typ: r("TartuGecko") },
    ], false),
    "월곶시흥선": o([
        { json: "월곶", js: "월곶", typ: r("TartuGecko") },
        { json: "시흥기지", js: "시흥기지", typ: r("TartuGecko") },
    ], false),
    "익산북연결선": o([
        { json: "익산", js: "익산", typ: r("TartuGecko") },
        { json: "익산북연결선분기", js: "익산북연결선분기", typ: r("TartuGecko") },
    ], false),
    "일산선": o([
        { json: "대곡", js: "대곡", typ: r("TartuGecko") },
        { json: "삼송", js: "삼송", typ: r("TartuGecko") },
        { json: "지축", js: "지축", typ: r("TartuGecko") },
        { json: "대화", js: "대화", typ: r("TartuGecko") },
        { json: "주엽", js: "주엽", typ: r("TartuGecko") },
        { json: "정발산", js: "정발산", typ: r("TartuGecko") },
        { json: "마두", js: "마두", typ: r("TartuGecko") },
        { json: "백석", js: "백석", typ: r("TartuGecko") },
        { json: "화정", js: "화정", typ: r("TartuGecko") },
        { json: "원흥", js: "원흥", typ: r("TartuGecko") },
        { json: "원당", js: "원당", typ: r("TartuGecko") },
    ], false),
    "장성화물선": o([
        { json: "안평", js: "안평", typ: r("TartuGecko") },
        { json: "장성화물", js: "장성화물", typ: r("TartuGecko") },
    ], false),
    "Fluffy전경삼각선": o([
        { json: "평화", js: "평화", typ: r("TartuGecko") },
        { json: "성산", js: "성산", typ: r("TartuGecko") },
    ], false),
    "Tentacled제천조차장선": o([
        { json: "제천", js: "제천", typ: r("TartuGecko") },
        { json: "제천조차장", js: "제천조차장", typ: r("TartuGecko") },
    ], false),
    "Indecent진해선": o([
        { json: "경화", js: "경화", typ: r("TartuGecko") },
        { json: "성주사", js: "성주사", typ: r("TartuGecko") },
        { json: "창원", js: "창원", typ: r("TartuGecko") },
        { json: "진해", js: "진해", typ: r("TartuGecko") },
        { json: "통해", js: "통해", typ: r("TartuGecko") },
        { json: "남창원", js: "남창원", typ: r("TartuGecko") },
        { json: "신창원", js: "신창원", typ: r("TartuGecko") },
    ], false),
    "Tentacled천안직결선": o([
        { json: "천안", js: "천안", typ: r("TartuGecko") },
        { json: "두정", js: "두정", typ: r("TartuGecko") },
    ], false),
    "Fluffy평택삼각선": o([
        { json: "신대", js: "신대", typ: r("TartuGecko") },
        { json: "평택지제", js: "평택지제", typ: r("TartuGecko") },
    ], false),
    "Tentacled평택선": o([
        { json: "평택", js: "평택", typ: r("TartuGecko") },
        { json: "창내", js: "창내", typ: r("TartuGecko") },
        { json: "신대", js: "신대", typ: r("TartuGecko") },
    ], false),
    "평택직결선": o([
        { json: "평택", js: "평택", typ: r("TartuGecko") },
        { json: "신대", js: "신대", typ: r("TartuGecko") },
    ], false),
    "Tentacled함백선": o([
        { json: "예미", js: "예미", typ: r("TartuGecko") },
        { json: "조동", js: "조동", typ: r("TartuGecko") },
        { json: "함백", js: "함백", typ: r("TartuGecko") },
    ], false),
    "영업중_김포골드라인운영주식회사": o([
        { json: "김포골드라인", js: "김포골드라인", typ: r("Fluffy김포골드라인") },
        { json: "김포골드라인 대행버스", js: "김포골드라인 대행버스", typ: r("김포골드라인대행버스") },
    ], false),
    "Fluffy김포골드라인": o([
        { json: "김포한강차량기지", js: "김포한강차량기지", typ: r("TartuGecko") },
        { json: "양촌", js: "양촌", typ: r("TartuGecko") },
        { json: "구래", js: "구래", typ: r("TartuGecko") },
        { json: "마산", js: "마산", typ: r("TartuGecko") },
        { json: "운양", js: "운양", typ: r("TartuGecko") },
        { json: "걸포북변", js: "걸포북변", typ: r("TartuGecko") },
        { json: "사우", js: "사우", typ: r("TartuGecko") },
        { json: "풍무", js: "풍무", typ: r("TartuGecko") },
        { json: "고촌", js: "고촌", typ: r("TartuGecko") },
        { json: "김포공항", js: "김포공항", typ: r("TartuGecko") },
        { json: "장기", js: "장기", typ: r("TartuGecko") },
    ], false),
    "김포골드라인대행버스": o([
        { json: "양촌", js: "양촌", typ: r("TartuGecko") },
        { json: "더럭스나인", js: "더럭스나인", typ: r("TartuGecko") },
        { json: "구래", js: "구래", typ: r("TartuGecko") },
        { json: "디원시티", js: "디원시티", typ: r("TartuGecko") },
    ], false),
    "영업중_남서울경전철주식회사": o([
        { json: "서울 경전철 신림선", js: "서울 경전철 신림선", typ: m(r("TartuGecko")) },
    ], false),
    "영업중_남양주도시공사": o([
        { json: "진접선", js: "진접선", typ: r("Sticky진접선") },
    ], false),
    "Sticky진접선": o([
        { json: "별내별가람", js: "별내별가람", typ: r("TartuGecko") },
        { json: "오남", js: "오남", typ: r("TartuGecko") },
        { json: "진접", js: "진접", typ: r("TartuGecko") },
    ], false),
    "영업중_내각보안성제23국지하철도운영관리국": o([
        { json: "평양 지하철도 혁신선", js: "평양 지하철도 혁신선", typ: r("평양지하철도혁신선") },
        { json: "평양 지하철도 천리마선", js: "평양 지하철도 천리마선", typ: r("평양지하철도천리마선") },
        { json: "평양 지하철도 만경대선", js: "평양 지하철도 만경대선", typ: r("평양지하철도만경대선") },
        { json: "사업소", js: "사업소", typ: r("병원_Class") },
        { json: "교육기관", js: "교육기관", typ: r("병원_Class") },
        { json: "병원", js: "병원", typ: r("병원_Class") },
        { json: "지하철도 수리관리소", js: "지하철도 수리관리소", typ: r("TartuGecko") },
    ], false),
    "평양지하철도만경대선": o([
        { json: "영광", js: "영광", typ: r("TartuGecko") },
        { json: "부흥", js: "부흥", typ: r("TartuGecko") },
        { json: "봉화", js: "봉화", typ: r("TartuGecko") },
    ], false),
    "평양지하철도천리마선": o([
        { json: "붉은별", js: "붉은별", typ: r("TartuGecko") },
        { json: "전우", js: "전우", typ: r("TartuGecko") },
        { json: "개선", js: "개선", typ: r("TartuGecko") },
        { json: "통일", js: "통일", typ: r("TartuGecko") },
        { json: "승리", js: "승리", typ: r("TartuGecko") },
        { json: "봉화", js: "봉화", typ: r("TartuGecko") },
    ], false),
    "평양지하철도혁신선": o([
        { json: "락원", js: "락원", typ: r("TartuGecko") },
        { json: "광명", js: "광명", typ: r("TartuGecko") },
        { json: "삼흥", js: "삼흥", typ: r("TartuGecko") },
        { json: "전승", js: "전승", typ: r("TartuGecko") },
        { json: "혁신", js: "혁신", typ: r("TartuGecko") },
        { json: "건설", js: "건설", typ: r("TartuGecko") },
        { json: "황금벌", js: "황금벌", typ: r("TartuGecko") },
        { json: "건국", js: "건국", typ: r("TartuGecko") },
        { json: "광복", js: "광복", typ: r("TartuGecko") },
    ], false),
    "영업중_내장산개발주식회사": o([
        { json: "내장산 케이블카", js: "내장산 케이블카", typ: r("케이블카") },
    ], false),
    "영업중_대덕개발주식회사": o([
        { json: "앞산 케이블카", js: "앞산 케이블카", typ: r("앞산케이블카") },
    ], false),
    "앞산케이블카": o([
        { json: "산록", js: "산록", typ: r("TartuGecko") },
        { json: "산정", js: "산정", typ: r("TartuGecko") },
    ], false),
    "영업중_대한석탄공사": o([
        { json: "도계광업소 강삭철도", js: "도계광업소 강삭철도", typ: m(r("TartuGecko")) },
    ], false),
    "명량해상케이블카": o([
        { json: "진도", js: "진도", typ: r("TartuGecko") },
        { json: "해남", js: "해남", typ: r("TartuGecko") },
    ], false),
    "영업중_목포해상케이블카주식회사": o([
        { json: "목포해상케이블카", js: "목포해상케이블카", typ: m(r("TartuGecko")) },
    ], false),
    "영업중_미래고속주식회사": o([
        { json: "코비", js: "코비", typ: r("비틀") },
    ], false),
    "영업중_부관훼리주식회사": o([
        { json: "부관훼리", js: "부관훼리", typ: r("비틀") },
    ], false),
    "영업중_부산김해경전철운영주식회사": o([
        { json: "부산김해경전철", js: "부산김해경전철", typ: m(r("TartuGecko")) },
    ], false),
    "영업중_부산시설공단": o([
        { json: "금강공원 케이블카", js: "금강공원 케이블카", typ: r("케이블카") },
    ], false),
    "영업중_북한철도성": o([
        { json: "경원선", js: "경원선", typ: m(r("TartuGecko")) },
        { json: "강원선", js: "강원선", typ: r("Tentacled강원선") },
        { json: "천내선", js: "천내선", typ: r("Fluffy천내선") },
        { json: "금강산청년선", js: "금강산청년선", typ: m(r("TartuGecko")) },
        { json: "청년이천선", js: "청년이천선", typ: m(r("TartuGecko")) },
        { json: "경의선", js: "경의선", typ: m(r("TartuGecko")) },
        { json: "황해청년선", js: "황해청년선", typ: m(r("TartuGecko")) },
        { json: "배천선", js: "배천선", typ: r("Fluffy배천선") },
        { json: "옹진선", js: "옹진선", typ: r("Tentacled옹진선") },
        { json: "부포선", js: "부포선", typ: r("Tentacled부포선") },
        { json: "송림선", js: "송림선", typ: m(r("TartuGecko")) },
        { json: "장연선", js: "장연선", typ: r("Purple장연선") },
        { json: "은률선", js: "은률선", typ: m(r("TartuGecko")) },
        { json: "서해갑문선", js: "서해갑문선", typ: m(r("TartuGecko")) },
        { json: "평남선", js: "평남선", typ: m(r("TartuGecko")) },
        { json: "도지리선", js: "도지리선", typ: m(r("TartuGecko")) },
        { json: "대안선", js: "대안선", typ: r("Tentacled대안선") },
        { json: "보산선", js: "보산선", typ: r("Fluffy보산선") },
        { json: "후산선", js: "후산선", typ: r("후산선") },
        { json: "룡강선", js: "룡강선", typ: r("Fluffy룡강선") },
        { json: "강안선", js: "강안선", typ: r("Fluffy강안선") },
        { json: "안주탄광선", js: "안주탄광선", typ: r("Fluffy안주탄광선") },
        { json: "개천선", js: "개천선", typ: r("Fluffy개천선") },
        { json: "구봉산선", js: "구봉산선", typ: m(r("TartuGecko")) },
        { json: "박천선", js: "박천선", typ: r("Fluffy박천선") },
        { json: "평북선", js: "평북선", typ: m(r("TartuGecko")) },
        { json: "수풍선", js: "수풍선", typ: r("Fluffy수풍선") },
        { json: "압록강선", js: "압록강선", typ: r("압록강선") },
        { json: "철산선", js: "철산선", typ: r("Fluffy철산선") },
        { json: "백마선", js: "백마선", typ: m(r("TartuGecko")) },
        { json: "다사도선", js: "다사도선", typ: m(r("TartuGecko")) },
        { json: "덕현선", js: "덕현선", typ: r("Fluffy덕현선") },
        { json: "구성선", js: "구성선", typ: r("Fluffy구성선") },
        { json: "청년팔원선", js: "청년팔원선", typ: r("청년팔원선") },
        { json: "녕변선", js: "녕변선", typ: r("녕변선") },
        { json: "평덕선", js: "평덕선", typ: m(r("TartuGecko")) },
        { json: "남흥선", js: "남흥선", typ: r("Fluffy남흥선") },
        { json: "마평선", js: "마평선", typ: r("Fluffy마평선") },
        { json: "룡성선", js: "룡성선", typ: r("Tentacled룡성선") },
        { json: "명당선", js: "명당선", typ: r("Fluffy명당선") },
        { json: "령대선", js: "령대선", typ: r("령대선") },
        { json: "재동선", js: "재동선", typ: r("Fluffy재동선") },
        { json: "득장선", js: "득장선", typ: r("Fluffy득장선") },
        { json: "명학선", js: "명학선", typ: r("명학선") },
        { json: "시정선", js: "시정선", typ: r("시정선") },
        { json: "평라선", js: "평라선", typ: m(r("TartuGecko")) },
        { json: "대건선", js: "대건선", typ: m(r("TartuGecko")) },
        { json: "직동탄광선", js: "직동탄광선", typ: m(r("TartuGecko")) },
        { json: "모학선", js: "모학선", typ: r("Fluffy모학선") },
        { json: "은산선", js: "은산선", typ: r("은산선") },
        { json: "성산인입선", js: "성산인입선", typ: r("Tentacled성산인입선") },
        { json: "만포선", js: "만포선", typ: m(r("TartuGecko")) },
        { json: "대각선", js: "대각선", typ: r("Fluffy대각선") },
        { json: "준혁선", js: "준혁선", typ: r("준혁선") },
        { json: "조양탄광선", js: "조양탄광선", typ: r("조양탄광선") },
        { json: "개천탄광선", js: "개천탄광선", typ: r("개천탄광선") },
        { json: "룡암선", js: "룡암선", typ: m(r("TartuGecko")) },
        { json: "룡문탄광선", js: "룡문탄광선", typ: r("룡문탄광선") },
        { json: "강계선", js: "강계선", typ: m(r("TartuGecko")) },
        { json: "고원탄광선", js: "고원탄광선", typ: r("고원탄광선") },
        { json: "천성탄광선", js: "천성탄광선", typ: r("Purple천성탄광선") },
        { json: "금야선", js: "금야선", typ: r("금야선") },
        { json: "신흥선", js: "신흥선", typ: m(r("TartuGecko")) },
        { json: "장진선", js: "장진선", typ: m(r("TartuGecko")) },
        { json: "서호선", js: "서호선", typ: r("Purple서호선") },
        { json: "창흥선", js: "창흥선", typ: r("Fluffy창흥선") },
        { json: "덕성선", js: "덕성선", typ: r("Tentacled덕성선") },
        { json: "리원선", js: "리원선", typ: r("리원선") },
        { json: "두언선", js: "두언선", typ: m(r("TartuGecko")) },
        { json: "허천선", js: "허천선", typ: m(r("TartuGecko")) },
        { json: "만덕선", js: "만덕선", typ: r("Fluffy만덕선") },
        { json: "금골선", js: "금골선", typ: m(r("TartuGecko")) },
        { json: "일탄선", js: "일탄선", typ: r("Fluffy일탄선") },
        { json: "청진조차장선", js: "청진조차장선", typ: m(r("TartuGecko")) },
        { json: "강덕선", js: "강덕선", typ: r("Fluffy강덕선") },
        { json: "청진항선", js: "청진항선", typ: m(r("TartuGecko")) },
        { json: "라진항선", js: "라진항선", typ: r("Tentacled라진항선") },
        { json: "백두산청년선", js: "백두산청년선", typ: m(r("TartuGecko")) },
        { json: "회령탄광선", js: "회령탄광선", typ: r("Tentacled회령탄광선") },
        { json: "함북선", js: "함북선", typ: m(r("TartuGecko")) },
        { json: "세천선", js: "세천선", typ: r("Fluffy세천선") },
        { json: "동포선", js: "동포선", typ: r("동포선") },
        { json: "남양국경선", js: "남양국경선", typ: r("남양국경선") },
        { json: "고건원선", js: "고건원선", typ: r("고건원선") },
        { json: "회암선", js: "회암선", typ: r("Fluffy회암선") },
        { json: "춘두선", js: "춘두선", typ: r("Fluffy춘두선") },
        { json: "적지선", js: "적지선", typ: r("적지선") },
        { json: "두만강선", js: "두만강선", typ: r("Fluffy두만강선") },
        { json: "승리선", js: "승리선", typ: r("Fluffy승리선") },
        { json: "백무선", js: "백무선", typ: m(r("TartuGecko")) },
        { json: "무산선", js: "무산선", typ: m(r("TartuGecko")) },
        { json: "운봉선", js: "운봉선", typ: m(r("TartuGecko")) },
        { json: "북부내륙선", js: "북부내륙선", typ: m(r("TartuGecko")) },
        { json: "삼지연선", js: "삼지연선", typ: m(r("TartuGecko")) },
        { json: "고참탄광선", js: "고참탄광선", typ: r("고참탄광선") },
        { json: "대향선", js: "대향선", typ: m(r("TartuGecko")) },
        { json: "문천항선", js: "문천항선", typ: r("Purple문천항선") },
        { json: "송도원선", js: "송도원선", typ: m(r("TartuGecko")) },
        { json: "원산항선", js: "원산항선", typ: r("원산항선") },
        { json: "봉천탄광선", js: "봉천탄광선", typ: r("봉천탄광선") },
        { json: "운하선", js: "운하선", typ: r("Fluffy운하선") },
        { json: "평양화전선", js: "평양화전선", typ: r("Fluffy평양화전선") },
        { json: "솔골탄광선", js: "솔골탄광선", typ: r("Fluffy솔골탄광선") },
        { json: "관하선", js: "관하선", typ: r("Fluffy관하선") },
        { json: "잉포선", js: "잉포선", typ: r("잉포선") },
        { json: "덕남선", js: "덕남선", typ: r("덕남선") },
        { json: "장상선", js: "장상선", typ: r("장상선") },
        { json: "봉산선", js: "봉산선", typ: r("Tentacled봉산선") },
        { json: "안골선", js: "안골선", typ: r("안골선") },
        { json: "신성선", js: "신성선", typ: r("신성선") },
        { json: "서창선", js: "서창선", typ: r("서창선") },
        { json: "회둔선", js: "회둔선", typ: m(r("TartuGecko")) },
        { json: "형봉선", js: "형봉선", typ: m(r("TartuGecko")) },
        { json: "대관리선", js: "대관리선", typ: r("대관리선") },
        { json: "석하선", js: "석하선", typ: m(r("TartuGecko")) },
        { json: "정도선", js: "정도선", typ: r("정도선") },
        { json: "사업소", js: "사업소", typ: m(r("TartuGecko")) },
        { json: "남포지선", js: "남포지선", typ: m(r("TartuGecko")) },
        { json: "비날론선", js: "비날론선", typ: m(r("TartuGecko")) },
        { json: "무산광산선", js: "무산광산선", typ: m(r("TartuGecko")) },
        { json: "오시천선", js: "오시천선", typ: m(r("TartuGecko")) },
        { json: "락랑선", js: "락랑선", typ: r("락랑선") },
        { json: "청화력선", js: "청화력선", typ: m(r("TartuGecko")) },
        { json: "고비선", js: "고비선", typ: r("Purple고비선") },
        { json: "독골선", js: "독골선", typ: r("독골선") },
        { json: "화풍선", js: "화풍선", typ: r("화풍선") },
        { json: "삼천포지선", js: "삼천포지선", typ: m(r("TartuGecko")) },
        { json: "동해북부선", js: "동해북부선", typ: r("Hilarious동해북부선") },
        { json: "온포선", js: "온포선", typ: r("온포선") },
        { json: "송평선", js: "송평선", typ: r("송평선") },
        { json: "박물관", js: "박물관", typ: r("북한철도성_박물관") },
        { json: "병원", js: "병원", typ: r("병원_Class") },
        { json: "향산선", js: "향산선", typ: r("향산선") },
        { json: "추평선", js: "추평선", typ: m(r("TartuGecko")) },
        { json: "곡하선", js: "곡하선", typ: m(r("TartuGecko")) },
        { json: "봉화선", js: "봉화선", typ: r("봉화선") },
        { json: "진흥선", js: "진흥선", typ: r("진흥선") },
        { json: "산음선", js: "산음선", typ: r("산음선") },
        { json: "보통강삼각선", js: "보통강삼각선", typ: m(r("TartuGecko")) },
        { json: "남포항선", js: "남포항선", typ: m(r("TartuGecko")) },
        { json: "털섬항선", js: "털섬항선", typ: r("Fluffy털섬항선") },
        { json: "원산화물선", js: "원산화물선", typ: m(r("TartuGecko")) },
        { json: "신송도원선", js: "신송도원선", typ: m(r("TartuGecko")) },
        { json: "량진선", js: "량진선", typ: m(r("TartuGecko")) },
        { json: "황주삼각선", js: "황주삼각선", typ: m(r("TartuGecko")) },
        { json: "봉학선", js: "봉학선", typ: r("Fluffy봉학선") },
        { json: "장선강선", js: "장선강선", typ: m(r("TartuGecko")) },
        { json: "봉창선", js: "봉창선", typ: r("Fluffy봉창선") },
        { json: "동평양삼각선", js: "동평양삼각선", typ: m(r("TartuGecko")) },
        { json: "북창삼각선", js: "북창삼각선", typ: r("북창삼각선") },
        { json: "향원삼각선", js: "향원삼각선", typ: m(r("TartuGecko")) },
        { json: "향원선", js: "향원선", typ: m(r("TartuGecko")) },
        { json: "고원교외선", js: "고원교외선", typ: r("고원교외선") },
        { json: "흥남항선", js: "흥남항선", typ: r("Fluffy흥남항선") },
        { json: "송평부두선", js: "송평부두선", typ: r("송평부두선") },
        { json: "풍덕선", js: "풍덕선", typ: r("풍덕선") },
        { json: "대택선", js: "대택선", typ: m(r("TartuGecko")) },
        { json: "바라놉스키-하산 선", js: "바라놉스키-하산 선", typ: r("바라놉스키하산선") },
        { json: "펑상 철로", js: "펑상 철로", typ: r("펑상철로") },
        { json: "선단 철로", js: "선단 철로", typ: r("선단철로") },
        { json: "창투 철로", js: "창투 철로", typ: r("창투철로") },
        { json: "려호선", js: "려호선", typ: m(r("TartuGecko")) },
        { json: "신흥동선", js: "신흥동선", typ: m(r("TartuGecko")) },
        { json: "신온선", js: "신온선", typ: m(r("TartuGecko")) },
    ], false),
    "Fluffy강덕선": o([
        { json: "남강덕", js: "남강덕", typ: r("TartuGecko") },
        { json: "강덕", js: "강덕", typ: r("TartuGecko") },
        { json: "삼립", js: "삼립", typ: r("TartuGecko") },
        { json: "수성", js: "수성", typ: r("TartuGecko") },
        { json: "근동", js: "근동", typ: r("TartuGecko") },
    ], false),
    "Fluffy강안선": o([
        { json: "강안", js: "강안", typ: r("TartuGecko") },
        { json: "신의주청년", js: "신의주청년", typ: r("TartuGecko") },
    ], false),
    "Tentacled강원선": o([
        { json: "세길", js: "세길", typ: r("TartuGecko") },
        { json: "문천", js: "문천", typ: r("TartuGecko") },
        { json: "옥평", js: "옥평", typ: r("TartuGecko") },
        { json: "룡담", js: "룡담", typ: r("TartuGecko") },
        { json: "전탄", js: "전탄", typ: r("TartuGecko") },
        { json: "고원", js: "고원", typ: r("TartuGecko") },
        { json: "원산", js: "원산", typ: r("TartuGecko") },
        { json: "송도원선 분기", js: "송도원선 분기", typ: r("TartuGecko") },
    ], false),
    "Fluffy개천선": o([
        { json: "개천", js: "개천", typ: r("TartuGecko") },
        { json: "운흥리", js: "운흥리", typ: r("TartuGecko") },
        { json: "연풍", js: "연풍", typ: r("TartuGecko") },
        { json: "북송리", js: "북송리", typ: r("TartuGecko") },
        { json: "안주", js: "안주", typ: r("TartuGecko") },
        { json: "신안주청년", js: "신안주청년", typ: r("TartuGecko") },
    ], false),
    "개천탄광선": o([
        { json: "자작", js: "자작", typ: r("TartuGecko") },
        { json: "전진", js: "전진", typ: r("TartuGecko") },
    ], false),
    "고건원선": o([
        { json: "고건원", js: "고건원", typ: r("TartuGecko") },
        { json: "신건", js: "신건", typ: r("TartuGecko") },
        { json: "정남", js: "정남", typ: r("TartuGecko") },
        { json: "유수", js: "유수", typ: r("TartuGecko") },
        { json: "림대", js: "림대", typ: r("TartuGecko") },
    ], false),
    "Purple고비선": o([
        { json: "립석리", js: "립석리", typ: r("TartuGecko") },
        { json: "고비", js: "고비", typ: r("TartuGecko") },
        { json: "신승호", js: "신승호", typ: r("TartuGecko") },
        { json: "삼청", js: "삼청", typ: r("TartuGecko") },
    ], false),
    "고원교외선": o([
        { json: "신상평", js: "신상평", typ: r("TartuGecko") },
        { json: "고원", js: "고원", typ: r("TartuGecko") },
    ], false),
    "고원탄광선": o([
        { json: "둔전", js: "둔전", typ: r("TartuGecko") },
        { json: "수동", js: "수동", typ: r("TartuGecko") },
        { json: "덕사", js: "덕사", typ: r("TartuGecko") },
        { json: "장동", js: "장동", typ: r("TartuGecko") },
    ], false),
    "고참탄광선": o([
        { json: "명천", js: "명천", typ: r("TartuGecko") },
        { json: "신명천", js: "신명천", typ: r("TartuGecko") },
    ], false),
    "Fluffy관하선": o([
        { json: "북창", js: "북창", typ: r("TartuGecko") },
        { json: "관하", js: "관하", typ: r("TartuGecko") },
    ], false),
    "Fluffy구성선": o([
        { json: "구성", js: "구성", typ: r("TartuGecko") },
        { json: "동산", js: "동산", typ: r("TartuGecko") },
        { json: "어미현", js: "어미현", typ: r("TartuGecko") },
        { json: "룡풍", js: "룡풍", typ: r("TartuGecko") },
        { json: "산성", js: "산성", typ: r("TartuGecko") },
        { json: "태천", js: "태천", typ: r("TartuGecko") },
        { json: "연중", js: "연중", typ: r("TartuGecko") },
        { json: "신룡", js: "신룡", typ: r("TartuGecko") },
        { json: "대장", js: "대장", typ: r("TartuGecko") },
        { json: "팔원청년", js: "팔원청년", typ: r("TartuGecko") },
    ], false),
    "금야선": o([
        { json: "금야", js: "금야", typ: r("TartuGecko") },
        { json: "풍남", js: "풍남", typ: r("TartuGecko") },
    ], false),
    "남양국경선": o([
        { json: "남양", js: "남양", typ: r("TartuGecko") },
        { json: "국경", js: "국경", typ: r("TartuGecko") },
    ], false),
    "Fluffy남흥선": o([
        { json: "맹중리", js: "맹중리", typ: r("TartuGecko") },
        { json: "송도", js: "송도", typ: r("TartuGecko") },
        { json: "남흥", js: "남흥", typ: r("TartuGecko") },
        { json: "동남흥", js: "동남흥", typ: r("TartuGecko") },
    ], false),
    "녕변선": o([
        { json: "팔원청년", js: "팔원청년", typ: r("TartuGecko") },
        { json: "분강", js: "분강", typ: r("TartuGecko") },
    ], false),
    "Fluffy대각선": o([
        { json: "천동", js: "천동", typ: r("TartuGecko") },
        { json: "대각", js: "대각", typ: r("TartuGecko") },
    ], false),
    "대관리선": o([
        { json: "신온", js: "신온", typ: r("TartuGecko") },
        { json: "대관리", js: "대관리", typ: r("TartuGecko") },
    ], false),
    "Tentacled대안선": o([
        { json: "강서", js: "강서", typ: r("TartuGecko") },
        { json: "대안", js: "대안", typ: r("TartuGecko") },
        { json: "대안화물", js: "대안화물", typ: r("TartuGecko") },
    ], false),
    "덕남선": o([
        { json: "남덕천", js: "남덕천", typ: r("TartuGecko") },
        { json: "덕남", js: "덕남", typ: r("TartuGecko") },
    ], false),
    "Tentacled덕성선": o([
        { json: "신북청", js: "신북청", typ: r("TartuGecko") },
        { json: "봉흥", js: "봉흥", typ: r("TartuGecko") },
        { json: "북청", js: "북청", typ: r("TartuGecko") },
        { json: "라하", js: "라하", typ: r("TartuGecko") },
        { json: "덕성", js: "덕성", typ: r("TartuGecko") },
        { json: "주의동", js: "주의동", typ: r("TartuGecko") },
        { json: "양승", js: "양승", typ: r("TartuGecko") },
        { json: "도평", js: "도평", typ: r("TartuGecko") },
        { json: "삼기", js: "삼기", typ: r("TartuGecko") },
        { json: "송중", js: "송중", typ: r("TartuGecko") },
        { json: "상일", js: "상일", typ: r("TartuGecko") },
        { json: "상리", js: "상리", typ: r("TartuGecko") },
    ], false),
    "Fluffy덕현선": o([
        { json: "남신의주", js: "남신의주", typ: r("TartuGecko") },
        { json: "정문리", js: "정문리", typ: r("TartuGecko") },
        { json: "의주", js: "의주", typ: r("TartuGecko") },
        { json: "수진", js: "수진", typ: r("TartuGecko") },
        { json: "정광", js: "정광", typ: r("TartuGecko") },
        { json: "덕현", js: "덕현", typ: r("TartuGecko") },
    ], false),
    "독골선": o([
        { json: "삼청", js: "삼청", typ: r("TartuGecko") },
        { json: "독골", js: "독골", typ: r("TartuGecko") },
    ], false),
    "동포선": o([
        { json: "종성", js: "종성", typ: r("TartuGecko") },
        { json: "공수덕", js: "공수덕", typ: r("TartuGecko") },
        { json: "동포", js: "동포", typ: r("TartuGecko") },
    ], false),
    "Hilarious동해북부선": o([
        { json: "감호", js: "감호", typ: r("TartuGecko") },
    ], false),
    "Fluffy두만강선": o([
        { json: "물골", js: "물골", typ: r("TartuGecko") },
        { json: "적지", js: "적지", typ: r("TartuGecko") },
        { json: "두만강", js: "두만강", typ: r("TartuGecko") },
    ], false),
    "Fluffy득장선": o([
        { json: "북창", js: "북창", typ: r("TartuGecko") },
        { json: "양촌", js: "양촌", typ: r("TartuGecko") },
        { json: "룡산", js: "룡산", typ: r("TartuGecko") },
        { json: "득장", js: "득장", typ: r("TartuGecko") },
        { json: "석산", js: "석산", typ: r("TartuGecko") },
        { json: "명학선 분기", js: "명학선 분기", typ: r("TartuGecko") },
    ], false),
    "Tentacled라진항선": o([
        { json: "라진", js: "라진", typ: r("TartuGecko") },
        { json: "라진항", js: "라진항", typ: r("TartuGecko") },
    ], false),
    "락랑선": o([
        { json: "력포", js: "력포", typ: r("TartuGecko") },
        { json: "락랑", js: "락랑", typ: r("TartuGecko") },
        { json: "동평양 화력발전소", js: "동평양 화력발전소", typ: r("TartuGecko") },
    ], false),
    "령대선": o([
        { json: "원창", js: "원창", typ: r("TartuGecko") },
        { json: "령대", js: "령대", typ: r("TartuGecko") },
        { json: "령대탄광", js: "령대탄광", typ: r("TartuGecko") },
    ], false),
    "Fluffy룡강선": o([
        { json: "마영", js: "마영", typ: r("TartuGecko") },
        { json: "룡월", js: "룡월", typ: r("TartuGecko") },
        { json: "후산", js: "후산", typ: r("TartuGecko") },
        { json: "룡호", js: "룡호", typ: r("TartuGecko") },
        { json: "룡강", js: "룡강", typ: r("TartuGecko") },
    ], false),
    "룡문탄광선": o([
        { json: "어룡", js: "어룡", typ: r("TartuGecko") },
        { json: "룡문탄광", js: "룡문탄광", typ: r("TartuGecko") },
    ], false),
    "Tentacled룡성선": o([
        { json: "서포", js: "서포", typ: r("TartuGecko") },
        { json: "룡성", js: "룡성", typ: r("TartuGecko") },
        { json: "새동", js: "새동", typ: r("TartuGecko") },
        { json: "동북리", js: "동북리", typ: r("TartuGecko") },
    ], false),
    "리원선": o([
        { json: "리원철산", js: "리원철산", typ: r("TartuGecko") },
        { json: "라흥", js: "라흥", typ: r("TartuGecko") },
        { json: "증산", js: "증산", typ: r("TartuGecko") },
        { json: "차호", js: "차호", typ: r("TartuGecko") },
    ], false),
    "Fluffy마평선": o([
        { json: "연중", js: "연중", typ: r("TartuGecko") },
        { json: "훤화", js: "훤화", typ: r("TartuGecko") },
        { json: "마평", js: "마평", typ: r("TartuGecko") },
    ], false),
    "Fluffy만덕선": o([
        { json: "만덕", js: "만덕", typ: r("TartuGecko") },
        { json: "부동", js: "부동", typ: r("TartuGecko") },
        { json: "허천", js: "허천", typ: r("TartuGecko") },
    ], false),
    "Fluffy명당선": o([
        { json: "청룡", js: "청룡", typ: r("TartuGecko") },
        { json: "리현", js: "리현", typ: r("TartuGecko") },
        { json: "대원", js: "대원", typ: r("TartuGecko") },
        { json: "명당", js: "명당", typ: r("TartuGecko") },
        { json: "상원", js: "상원", typ: r("TartuGecko") },
    ], false),
    "명학선": o([
        { json: "명학선 분기", js: "명학선 분기", typ: r("TartuGecko") },
        { json: "명학", js: "명학", typ: r("TartuGecko") },
    ], false),
    "Fluffy모학선": o([
        { json: "대건", js: "대건", typ: r("TartuGecko") },
        { json: "모학", js: "모학", typ: r("TartuGecko") },
    ], false),
    "Purple문천항선": o([
        { json: "옥평", js: "옥평", typ: r("TartuGecko") },
        { json: "고암", js: "고암", typ: r("TartuGecko") },
        { json: "룡탄", js: "룡탄", typ: r("TartuGecko") },
        { json: "답촌리", js: "답촌리", typ: r("TartuGecko") },
    ], false),
    "바라놉스키하산선": o([
        { json: "두만강", js: "두만강", typ: r("TartuGecko") },
    ], false),
    "북한철도성_박물관": o([
        { json: "조선철도박물관", js: "조선철도박물관", typ: r("TartuGecko") },
    ], false),
    "Fluffy박천선": o([
        { json: "박천", js: "박천", typ: r("TartuGecko") },
        { json: "맹중리", js: "맹중리", typ: r("TartuGecko") },
    ], false),
    "Fluffy배천선": o([
        { json: "장방", js: "장방", typ: r("TartuGecko") },
        { json: "갈산", js: "갈산", typ: r("TartuGecko") },
        { json: "청단", js: "청단", typ: r("TartuGecko") },
        { json: "천태", js: "천태", typ: r("TartuGecko") },
        { json: "풍천", js: "풍천", typ: r("TartuGecko") },
        { json: "오현", js: "오현", typ: r("TartuGecko") },
        { json: "연안", js: "연안", typ: r("TartuGecko") },
        { json: "온정", js: "온정", typ: r("TartuGecko") },
        { json: "홍현", js: "홍현", typ: r("TartuGecko") },
        { json: "배천", js: "배천", typ: r("TartuGecko") },
        { json: "은빛", js: "은빛", typ: r("TartuGecko") },
    ], false),
    "Fluffy보산선": o([
        { json: "보산", js: "보산", typ: r("TartuGecko") },
        { json: "강서", js: "강서", typ: r("TartuGecko") },
        { json: "강서화물", js: "강서화물", typ: r("TartuGecko") },
    ], false),
    "Tentacled봉산선": o([
        { json: "봉산", js: "봉산", typ: r("TartuGecko") },
        { json: "서봉산", js: "서봉산", typ: r("TartuGecko") },
    ], false),
    "Fluffy봉창선": o([
        { json: "신봉창", js: "신봉창", typ: r("TartuGecko") },
        { json: "한경", js: "한경", typ: r("TartuGecko") },
    ], false),
    "봉천탄광선": o([
        { json: "봉천", js: "봉천", typ: r("TartuGecko") },
        { json: "봉천탄광", js: "봉천탄광", typ: r("TartuGecko") },
    ], false),
    "Fluffy봉학선": o([
        { json: "봉학", js: "봉학", typ: r("TartuGecko") },
        { json: "손구동", js: "손구동", typ: r("TartuGecko") },
    ], false),
    "봉화선": o([
        { json: "봉화선 분기", js: "봉화선 분기", typ: r("TartuGecko") },
        { json: "봉화", js: "봉화", typ: r("TartuGecko") },
    ], false),
    "Tentacled부포선": o([
        { json: "신강령", js: "신강령", typ: r("TartuGecko") },
        { json: "강령", js: "강령", typ: r("TartuGecko") },
        { json: "향죽", js: "향죽", typ: r("TartuGecko") },
        { json: "부포", js: "부포", typ: r("TartuGecko") },
    ], false),
    "북창삼각선": o([
        { json: "옥천", js: "옥천", typ: r("TartuGecko") },
        { json: "양촌", js: "양촌", typ: r("TartuGecko") },
    ], false),
    "산음선": o([
        { json: "산음", js: "산음", typ: r("TartuGecko") },
        { json: "55호 관저", js: "55호 관저", typ: r("TartuGecko") },
        { json: "룡성", js: "룡성", typ: r("TartuGecko") },
    ], false),
    "서창선": o([
        { json: "덕천", js: "덕천", typ: r("TartuGecko") },
        { json: "서덕천", js: "서덕천", typ: r("TartuGecko") },
        { json: "철기산", js: "철기산", typ: r("TartuGecko") },
        { json: "서창", js: "서창", typ: r("TartuGecko") },
    ], false),
    "Purple서호선": o([
        { json: "서함흥", js: "서함흥", typ: r("TartuGecko") },
        { json: "사포", js: "사포", typ: r("TartuGecko") },
        { json: "비날론", js: "비날론", typ: r("TartuGecko") },
        { json: "운중", js: "운중", typ: r("TartuGecko") },
        { json: "룡성", js: "룡성", typ: r("TartuGecko") },
        { json: "하덕", js: "하덕", typ: r("TartuGecko") },
        { json: "서호", js: "서호", typ: r("TartuGecko") },
        { json: "성천강", js: "성천강", typ: r("TartuGecko") },
        { json: "상수", js: "상수", typ: r("TartuGecko") },
    ], false),
    "선단철로": o([
        { json: "신의주청년", js: "신의주청년", typ: r("TartuGecko") },
    ], false),
    "Tentacled성산인입선": o([
        { json: "학산", js: "학산", typ: r("TartuGecko") },
        { json: "매봉", js: "매봉", typ: r("TartuGecko") },
    ], false),
    "Fluffy세천선": o([
        { json: "신학포", js: "신학포", typ: r("TartuGecko") },
        { json: "세천", js: "세천", typ: r("TartuGecko") },
        { json: "중봉", js: "중봉", typ: r("TartuGecko") },
    ], false),
    "Fluffy솔골탄광선": o([
        { json: "송남청년", js: "송남청년", typ: r("TartuGecko") },
        { json: "솔골", js: "솔골", typ: r("TartuGecko") },
    ], false),
    "송평부두선": o([
        { json: "송평", js: "송평", typ: r("TartuGecko") },
        { json: "송평부두", js: "송평부두", typ: r("TartuGecko") },
    ], false),
    "송평선": o([
        { json: "강덕", js: "강덕", typ: r("TartuGecko") },
        { json: "송평", js: "송평", typ: r("TartuGecko") },
    ], false),
    "Fluffy수풍선": o([
        { json: "부풍", js: "부풍", typ: r("TartuGecko") },
        { json: "수풍", js: "수풍", typ: r("TartuGecko") },
    ], false),
    "Fluffy승리선": o([
        { json: "선봉", js: "선봉", typ: r("TartuGecko") },
        { json: "승리", js: "승리", typ: r("TartuGecko") },
    ], false),
    "시정선": o([
        { json: "간리", js: "간리", typ: r("TartuGecko") },
        { json: "시정", js: "시정", typ: r("TartuGecko") },
    ], false),
    "신성선": o([
        { json: "서덕천", js: "서덕천", typ: r("TartuGecko") },
        { json: "신성", js: "신성", typ: r("TartuGecko") },
    ], false),
    "안골선": o([
        { json: "문악", js: "문악", typ: r("TartuGecko") },
        { json: "안골", js: "안골", typ: r("TartuGecko") },
    ], false),
    "Fluffy안주탄광선": o([
        { json: "문덕", js: "문덕", typ: r("TartuGecko") },
        { json: "성법", js: "성법", typ: r("TartuGecko") },
        { json: "청남", js: "청남", typ: r("TartuGecko") },
        { json: "삼천포", js: "삼천포", typ: r("TartuGecko") },
    ], false),
    "압록강선": o([
        { json: "부풍", js: "부풍", typ: r("TartuGecko") },
        { json: "압록강", js: "압록강", typ: r("TartuGecko") },
    ], false),
    "온포선": o([
        { json: "온포선 분기", js: "온포선 분기", typ: r("TartuGecko") },
        { json: "온포", js: "온포", typ: r("TartuGecko") },
    ], false),
    "Tentacled옹진선": o([
        { json: "동해주", js: "동해주", typ: r("TartuGecko") },
        { json: "왕신", js: "왕신", typ: r("TartuGecko") },
        { json: "서해주", js: "서해주", typ: r("TartuGecko") },
        { json: "문정", js: "문정", typ: r("TartuGecko") },
        { json: "서석", js: "서석", typ: r("TartuGecko") },
        { json: "벽성", js: "벽성", typ: r("TartuGecko") },
        { json: "자양", js: "자양", typ: r("TartuGecko") },
        { json: "신강령", js: "신강령", typ: r("TartuGecko") },
        { json: "옹진", js: "옹진", typ: r("TartuGecko") },
        { json: "장둔", js: "장둔", typ: r("TartuGecko") },
    ], false),
    "Fluffy운하선": o([
        { json: "만포청년", js: "만포청년", typ: r("TartuGecko") },
        { json: "운하", js: "운하", typ: r("TartuGecko") },
        { json: "구오", js: "구오", typ: r("TartuGecko") },
    ], false),
    "원산항선": o([
        { json: "갈마", js: "갈마", typ: r("TartuGecko") },
        { json: "원산항", js: "원산항", typ: r("TartuGecko") },
    ], false),
    "은산선": o([
        { json: "대건", js: "대건", typ: r("TartuGecko") },
        { json: "학산", js: "학산", typ: r("TartuGecko") },
        { json: "은산", js: "은산", typ: r("TartuGecko") },
    ], false),
    "Fluffy일탄선": o([
        { json: "로동", js: "로동", typ: r("TartuGecko") },
        { json: "일탄", js: "일탄", typ: r("TartuGecko") },
        { json: "화대", js: "화대", typ: r("TartuGecko") },
        { json: "덕신", js: "덕신", typ: r("TartuGecko") },
    ], false),
    "잉포선": o([
        { json: "구현", js: "구현", typ: r("TartuGecko") },
        { json: "잉포", js: "잉포", typ: r("TartuGecko") },
    ], false),
    "장상선": o([
        { json: "향장", js: "향장", typ: r("TartuGecko") },
        { json: "장상", js: "장상", typ: r("TartuGecko") },
    ], false),
    "Purple장연선": o([
        { json: "수교", js: "수교", typ: r("TartuGecko") },
        { json: "송화온천", js: "송화온천", typ: r("TartuGecko") },
        { json: "락연", js: "락연", typ: r("TartuGecko") },
        { json: "장연", js: "장연", typ: r("TartuGecko") },
        { json: "락도", js: "락도", typ: r("TartuGecko") },
    ], false),
    "Fluffy재동선": o([
        { json: "구정", js: "구정", typ: r("TartuGecko") },
        { json: "재동", js: "재동", typ: r("TartuGecko") },
    ], false),
    "적지선": o([
        { json: "홍의", js: "홍의", typ: r("TartuGecko") },
        { json: "적지", js: "적지", typ: r("TartuGecko") },
    ], false),
    "정도선": o([
        { json: "왕신", js: "왕신", typ: r("TartuGecko") },
        { json: "정도", js: "정도", typ: r("TartuGecko") },
        { json: "해주항", js: "해주항", typ: r("TartuGecko") },
    ], false),
    "조양탄광선": o([
        { json: "개천", js: "개천", typ: r("TartuGecko") },
        { json: "구읍", js: "구읍", typ: r("TartuGecko") },
        { json: "석간", js: "석간", typ: r("TartuGecko") },
        { json: "조양탄광", js: "조양탄광", typ: r("TartuGecko") },
    ], false),
    "준혁선": o([
        { json: "개천", js: "개천", typ: r("TartuGecko") },
        { json: "준혁리", js: "준혁리", typ: r("TartuGecko") },
    ], false),
    "진흥선": o([
        { json: "룡암포", js: "룡암포", typ: r("TartuGecko") },
        { json: "진흥", js: "진흥", typ: r("TartuGecko") },
    ], false),
    "창투철로": o([
        { json: "국경", js: "국경", typ: r("TartuGecko") },
    ], false),
    "Fluffy창흥선": o([
        { json: "창흥", js: "창흥", typ: r("TartuGecko") },
        { json: "련흥", js: "련흥", typ: r("TartuGecko") },
        { json: "호전", js: "호전", typ: r("TartuGecko") },
    ], false),
    "Fluffy천내선": o([
        { json: "천내", js: "천내", typ: r("TartuGecko") },
        { json: "룡담", js: "룡담", typ: r("TartuGecko") },
    ], false),
    "Purple천성탄광선": o([
        { json: "수양", js: "수양", typ: r("TartuGecko") },
        { json: "망일리", js: "망일리", typ: r("TartuGecko") },
        { json: "천성", js: "천성", typ: r("TartuGecko") },
        { json: "천성탄광선 분기", js: "천성탄광선 분기", typ: r("TartuGecko") },
    ], false),
    "Fluffy철산선": o([
        { json: "동림", js: "동림", typ: r("TartuGecko") },
        { json: "철산", js: "철산", typ: r("TartuGecko") },
        { json: "동창리", js: "동창리", typ: r("TartuGecko") },
    ], false),
    "청년팔원선": o([
        { json: "팔원청년", js: "팔원청년", typ: r("TartuGecko") },
        { json: "녕변", js: "녕변", typ: r("TartuGecko") },
        { json: "하초", js: "하초", typ: r("TartuGecko") },
        { json: "사오", js: "사오", typ: r("TartuGecko") },
        { json: "묵시", js: "묵시", typ: r("TartuGecko") },
        { json: "구장청년", js: "구장청년", typ: r("TartuGecko") },
    ], false),
    "Fluffy춘두선": o([
        { json: "송학", js: "송학", typ: r("TartuGecko") },
        { json: "춘두", js: "춘두", typ: r("TartuGecko") },
    ], false),
    "Fluffy털섬항선": o([
        { json: "정도", js: "정도", typ: r("TartuGecko") },
        { json: "털섬항", js: "털섬항", typ: r("TartuGecko") },
    ], false),
    "펑상철로": o([
        { json: "청수", js: "청수", typ: r("TartuGecko") },
    ], false),
    "Fluffy평양화전선": o([
        { json: "보통강", js: "보통강", typ: r("TartuGecko") },
        { json: "평천", js: "평천", typ: r("TartuGecko") },
    ], false),
    "풍덕선": o([
        { json: "풍덕선 분기", js: "풍덕선 분기", typ: r("TartuGecko") },
        { json: "풍덕", js: "풍덕", typ: r("TartuGecko") },
    ], false),
    "향산선": o([
        { json: "향산선 분기", js: "향산선 분기", typ: r("TartuGecko") },
        { json: "향산", js: "향산", typ: r("TartuGecko") },
    ], false),
    "화풍선": o([
        { json: "청남", js: "청남", typ: r("TartuGecko") },
        { json: "립석탄광", js: "립석탄광", typ: r("TartuGecko") },
        { json: "태향", js: "태향", typ: r("TartuGecko") },
        { json: "평남서호", js: "평남서호", typ: r("TartuGecko") },
    ], false),
    "Tentacled회령탄광선": o([
        { json: "유선", js: "유선", typ: r("TartuGecko") },
        { json: "회령청년", js: "회령청년", typ: r("TartuGecko") },
        { json: "봉의", js: "봉의", typ: r("TartuGecko") },
    ], false),
    "Fluffy회암선": o([
        { json: "학송", js: "학송", typ: r("TartuGecko") },
        { json: "회암", js: "회암", typ: r("TartuGecko") },
        { json: "오봉", js: "오봉", typ: r("TartuGecko") },
        { json: "은덕", js: "은덕", typ: r("TartuGecko") },
    ], false),
    "후산선": o([
        { json: "양막", js: "양막", typ: r("TartuGecko") },
        { json: "후산", js: "후산", typ: r("TartuGecko") },
    ], false),
    "Fluffy흥남항선": o([
        { json: "룡성", js: "룡성", typ: r("TartuGecko") },
        { json: "흥남항", js: "흥남항", typ: r("TartuGecko") },
        { json: "흥남", js: "흥남", typ: r("TartuGecko") },
    ], false),
    "영업중_사천바다케이블카주식회사": o([
        { json: "사천바다케이블카", js: "사천바다케이블카", typ: r("사천바다케이블카") },
    ], false),
    "사천바다케이블카": o([
        { json: "초양", js: "초양", typ: r("TartuGecko") },
        { json: "대방", js: "대방", typ: r("TartuGecko") },
        { json: "각산", js: "각산", typ: r("TartuGecko") },
    ], false),
    "영업중_삼진관광개발주식회사": o([
        { json: "두륜산 케이블카", js: "두륜산 케이블카", typ: r("케이블카") },
    ], false),
    "영업중_새서울철도주식회사": o([
        { json: "신분당선", js: "신분당선", typ: r("새서울철도주식회사_신분당선") },
    ], false),
    "새서울철도주식회사_신분당선": o([
        { json: "신사", js: "신사", typ: r("TartuGecko") },
        { json: "논현", js: "논현", typ: r("TartuGecko") },
        { json: "신논현", js: "신논현", typ: r("TartuGecko") },
    ], false),
    "영업중_서부광역철도주식회사": o([
        { json: "소사대곡선", js: "소사대곡선", typ: r("Fluffy소사대곡선") },
    ], false),
    "Fluffy소사대곡선": o([
        { json: "소사", js: "소사", typ: r("TartuGecko") },
        { json: "부천종합운동장", js: "부천종합운동장", typ: r("TartuGecko") },
        { json: "원종", js: "원종", typ: r("TartuGecko") },
        { json: "김포공항", js: "김포공항", typ: r("TartuGecko") },
        { json: "능곡", js: "능곡", typ: r("TartuGecko") },
        { json: "대곡", js: "대곡", typ: r("TartuGecko") },
    ], false),
    "서울시메트로9호선": o([
        { json: "서울시메트로 9호선", js: "서울시메트로 9호선", typ: m(r("TartuGecko")) },
    ], false),
    "영업중_서해철도주식회사": o([
        { json: "안산입고선", js: "안산입고선", typ: r("서해철도주식회사_안산출고선") },
        { json: "소사원시선", js: "소사원시선", typ: r("Fluffy소사원시선") },
        { json: "안산출고선", js: "안산출고선", typ: r("서해철도주식회사_안산출고선") },
    ], false),
    "Fluffy소사원시선": o([
        { json: "소사원시선 시점", js: "소사원시선 시점", typ: r("TartuGecko") },
    ], false),
    "서해철도주식회사_안산출고선": o([
        { json: "시우", js: "시우", typ: r("TartuGecko") },
    ], false),
    "영업중_설악케이블카주식회사": o([
        { json: "설악 케이블카", js: "설악 케이블카", typ: m(r("TartuGecko")) },
    ], false),
    "영업중_송도해상케이블카주식회사": o([
        { json: "송도해상케이블카", js: "송도해상케이블카", typ: m(r("TartuGecko")) },
    ], false),
    "영업중_순천에코트랜스": o([
        { json: "순천만PRT", js: "순천만PRT", typ: m(r("TartuGecko")) },
    ], false),
    "영업중_신분당선주식회사": o([
        { json: "신분당선", js: "신분당선", typ: m(r("TartuGecko")) },
        { json: "분당연결선", js: "분당연결선", typ: r("신분당선주식회사_분당연결선") },
    ], false),
    "신분당선주식회사_분당연결선": o([
        { json: "분당연결선분기", js: "분당연결선분기", typ: r("TartuGecko") },
    ], false),
    "씨월드고속훼리주식회사": o([
        { json: "사업소", js: "사업소", typ: r("제주도순환궤도지선_Class") },
    ], false),
    "제주도순환궤도지선_Class": o([
        { json: "제주", js: "제주", typ: r("TartuGecko") },
    ], false),
    "영업중_양지대둔산삭도유한회사": o([
        { json: "대둔산 케이블카", js: "대둔산 케이블카", typ: r("케이블카") },
    ], false),
    "영업중_여수해상케이블카주식회사": o([
        { json: "여수해상케이블카", js: "여수해상케이블카", typ: r("여수해상케이블카") },
    ], false),
    "여수해상케이블카": o([
        { json: "해야", js: "해야", typ: r("TartuGecko") },
        { json: "놀아", js: "놀아", typ: r("TartuGecko") },
    ], false),
    "영업중_영남알프스얼음골케이블카주식회사": o([
        { json: "영남알프스 얼음골 케이블카", js: "영남알프스 얼음골 케이블카", typ: r("케이블카") },
    ], false),
    "영업중_용인경량전철주식회사": o([
        { json: "용인경전철", js: "용인경전철", typ: m(r("TartuGecko")) },
    ], false),
    "영업중_우이신설경전철주식회사": o([
        { json: "서울 경전철 우이신설선", js: "서울 경전철 우이신설선", typ: m(r("TartuGecko")) },
    ], false),
    "영업중_재단법인송암스페이스센터": o([
        { json: "송암 스페이스센터 케이블카", js: "송암 스페이스센터 케이블카", typ: m(r("TartuGecko")) },
    ], false),
    "영업중_제부도해상케이블카주식회사": o([
        { json: "제부도 해상케이블카", js: "제부도 해상케이블카", typ: m(r("TartuGecko")) },
    ], false),
    "조선인민군": o([
        { json: "평양 궤도전차 금수산선", js: "평양 궤도전차 금수산선", typ: m(r("TartuGecko")) },
    ], false),
    "영업중_조선총독부철도국": o([
        { json: "룡암선", js: "룡암선", typ: r("조선총독부철도국_룡암선") },
    ], false),
    "조선총독부철도국_룡암선": o([
        { json: "동룡굴", js: "동룡굴", typ: r("TartuGecko") },
    ], false),
    "영업중_주식회사Sr": o([
        { json: "수서평택고속선", js: "수서평택고속선", typ: m(r("TartuGecko")) },
        { json: "수도권 광역급행철도 A노선", js: "수도권 광역급행철도 A노선", typ: r("수도권광역급행철도A노선") },
        { json: "사업소", js: "사업소", typ: r("주식회사Sr사업소") },
    ], false),
    "주식회사Sr사업소": o([
        { json: "SR본사", js: "SR본사", typ: r("TartuGecko") },
    ], false),
    "수도권광역급행철도A노선": o([
        { json: "SR동탄", js: "SR동탄", typ: r("TartuGecko") },
    ], false),
    "영업중_주식회사소노인터네셔널": o([
        { json: "춘천 삼악산 호수 케이블카", js: "춘천 삼악산 호수 케이블카", typ: m(r("TartuGecko")) },
    ], false),
    "주식회사신세계조선호텔": o([
        { json: "사업소", js: "사업소", typ: r("주식회사신세계조선호텔_사업소") },
    ], false),
    "주식회사신세계조선호텔_사업소": o([
        { json: "웨스틴 조선호텔 서울", js: "웨스틴 조선호텔 서울", typ: r("TartuGecko") },
    ], false),
    "영업중_주식회사에이치제이매그놀리아용평호텔앤리조트": o([
        { json: "발왕산 관광케이블카", js: "발왕산 관광케이블카", typ: m(r("TartuGecko")) },
    ], false),
    "주식회사온양관광호텔": o([
        { json: "사업소", js: "사업소", typ: r("주식회사온양관광호텔_사업소") },
    ], false),
    "주식회사온양관광호텔_사업소": o([
        { json: "온양관광호텔", js: "온양관광호텔", typ: r("TartuGecko") },
    ], false),
    "영업중_주식회사우진메트로": o([
        { json: "의정부경전철", js: "의정부경전철", typ: m(r("TartuGecko")) },
    ], false),
    "영업중_주식회사울진케이블카": o([
        { json: "왕피천 케이블카", js: "왕피천 케이블카", typ: m(r("TartuGecko")) },
    ], false),
    "주식회사파라다이스호텔부산": o([
        { json: "사업소", js: "사업소", typ: r("주식회사파라다이스호텔부산_사업소") },
    ], false),
    "주식회사파라다이스호텔부산_사업소": o([
        { json: "파라다이스호텔 부산", js: "파라다이스호텔 부산", typ: r("TartuGecko") },
    ], false),
    "지티엑스에이운영주식회사": o([
        { json: "수도권 광역급행철도 A노선", js: "수도권 광역급행철도 A노선", typ: m(r("TartuGecko")) },
    ], false),
    "영업중_청풍호반케이블카주식회사": o([
        { json: "청풍호반케이블카", js: "청풍호반케이블카", typ: m(r("TartuGecko")) },
    ], false),
    "코레일관광개발주식회사": o([
        { json: "섬진강 기차마을 관광철도", js: "섬진강 기차마을 관광철도", typ: r("섬진강기차마을관광철도") },
    ], false),
    "섬진강기차마을관광철도": o([
        { json: "곡성", js: "곡성", typ: r("TartuGecko") },
        { json: "가정", js: "가정", typ: r("TartuGecko") },
        { json: "침곡", js: "침곡", typ: r("TartuGecko") },
    ], false),
    "코레일네트웍스주식회사": o([
        { json: "KTX 셔틀버스 광명 사당선", js: "KTX 셔틀버스 광명 사당선", typ: m(r("TartuGecko")) },
    ], false),
    "태성해운주식회사": o([
        { json: "사업소", js: "사업소", typ: r("태성해운주식회사_사업소") },
    ], false),
    "태성해운주식회사_사업소": o([
        { json: "울릉도", js: "울릉도", typ: r("TartuGecko") },
    ], false),
    "영업중_통영관광개발공사": o([
        { json: "통영 케이블카", js: "통영 케이블카", typ: r("케이블카") },
    ], false),
    "영업중_평양시려객운수종합기업소": o([
        { json: "평양 궤도전차 1호선", js: "평양 궤도전차 1호선", typ: m(r("TartuGecko")) },
        { json: "평양 궤도전차 3호선", js: "평양 궤도전차 3호선", typ: m(r("TartuGecko")) },
        { json: "평양 궤도전차 2호선", js: "평양 궤도전차 2호선", typ: r("평양궤도전차2호선") },
        { json: "사업소", js: "사업소", typ: r("평양시려객운수종합기업소_사업소") },
    ], false),
    "평양시려객운수종합기업소_사업소": o([
        { json: "평양무궤도전차공장", js: "평양무궤도전차공장", typ: r("TartuGecko") },
    ], false),
    "평양궤도전차2호선": o([
        { json: "문수궤도전차사업소", js: "문수궤도전차사업소", typ: r("TartuGecko") },
        { json: "문수", js: "문수", typ: r("TartuGecko") },
        { json: "락랑", js: "락랑", typ: r("TartuGecko") },
        { json: "토성", js: "토성", typ: r("TartuGecko") },
    ], false),
    "영업중_하남도시공사": o([
        { json: "하남선", js: "하남선", typ: m(r("TartuGecko")) },
    ], false),
    "영업중_하동케이블카주식회사": o([
        { json: "하동 플라이웨이 케이블카", js: "하동 플라이웨이 케이블카", typ: r("케이블카") },
    ], false),
    "영업중_한국방송공사": o([
        { json: "관악산 케이블카", js: "관악산 케이블카", typ: r("케이블카") },
    ], false),
    "영업중_한국삭도공업주식회사": o([
        { json: "남산 케이블카", js: "남산 케이블카", typ: r("케이블카") },
    ], false),
    "영업중_한국철도기술연구원": o([
        { json: "K-AGT시험선", js: "K-AGT시험선", typ: r("KAgT시험선") },
        { json: "철도종합시험선로", js: "철도종합시험선로", typ: m(r("TartuGecko")) },
    ], false),
    "KAgT시험선": o([
        { json: "삼성현", js: "삼성현", typ: r("TartuGecko") },
        { json: "갓바위", js: "갓바위", typ: r("TartuGecko") },
        { json: "미래", js: "미래", typ: r("TartuGecko") },
        { json: "첨단", js: "첨단", typ: r("TartuGecko") },
    ], false),
    "영업중_한림팩주식회사": o([
        { json: "대구 팔공산 케이블카", js: "대구 팔공산 케이블카", typ: r("케이블카") },
    ], false),
    "영업중_함경북도청진시": o([
        { json: "청진 궤도전차", js: "청진 궤도전차", typ: m(r("TartuGecko")) },
    ], false),
    "영업중_해운대블루라인주식회사": o([
        { json: "해운대 해변열차", js: "해운대 해변열차", typ: m(r("TartuGecko")) },
        { json: "해운대 스카이캡슐", js: "해운대 스카이캡슐", typ: r("해운대스카이캡슐") },
    ], false),
    "해운대스카이캡슐": o([
        { json: "미포", js: "미포", typ: r("TartuGecko") },
        { json: "청사포", js: "청사포", typ: r("TartuGecko") },
    ], false),
    "향도봉호": o([
        { json: "향도", js: "향도", typ: r("TartuGecko") },
        { json: "백두", js: "백두", typ: r("TartuGecko") },
    ], false),
    "영업중_호텔금오산주식회사": o([
        { json: "금오산 케이블카", js: "금오산 케이블카", typ: r("케이블카") },
    ], false),
    "영업시설_폐지": o([
        { json: "국유철도", js: "국유철도", typ: r("Sticky국유철도") },
        { json: "교통부", js: "교통부", typ: r("폐지_교통부") },
        { json: "한국중부발전주식회사", js: "한국중부발전주식회사", typ: r("폐지_한국중부발전주식회사") },
        { json: "주식회사 강원랜드", js: "주식회사 강원랜드", typ: r("폐지_주식회사강원랜드") },
        { json: "조선총독부 철도국", js: "조선총독부 철도국", typ: r("폐지_조선총독부철도국") },
        { json: "북한 철도성", js: "북한 철도성", typ: r("폐지_북한철도성") },
        { json: "경성전기주식회사", js: "경성전기주식회사", typ: r("Purple경성전기주식회사") },
        { json: "조선총독부 교통국", js: "조선총독부 교통국", typ: r("폐지_조선총독부교통국") },
        { json: "함평궤도주식회사", js: "함평궤도주식회사", typ: r("폐지_함평궤도주식회사") },
        { json: "조선경남철도주식회사", js: "조선경남철도주식회사", typ: r("폐지_조선경남철도주식회사") },
        { json: "조선철도주식회사", js: "조선철도주식회사", typ: r("폐지_조선철도주식회사") },
        { json: "제주도순환궤도", js: "제주도순환궤도", typ: r("폐지_제주도순환궤도") },
        { json: "국립중앙과학관", js: "국립중앙과학관", typ: r("폐지_국립중앙과학관") },
        { json: "주식회사 포스코", js: "주식회사 포스코", typ: r("주식회사포스코") },
        { json: "가와사키 기선 주식회사", js: "가와사키 기선 주식회사", typ: r("가와사키기선주식회사") },
        { json: "김제궤도 주식회사", js: "김제궤도 주식회사", typ: r("폐지_김제궤도주식회사") },
        { json: "왜관궤도 주식회사", js: "왜관궤도 주식회사", typ: r("폐지_왜관궤도주식회사") },
        { json: "한국전력주식회사", js: "한국전력주식회사", typ: m(m(r("TartuGecko"))) },
        { json: "남선합동전기 주식회사", js: "남선합동전기 주식회사", typ: m(m(r("TartuGecko"))) },
        { json: "재조선미육군사령부군정청 운수부", js: "재조선미육군사령부군정청 운수부", typ: r("재조선미육군사령부군정청운수부") },
        { json: "교육기관", js: "교육기관", typ: r("폐지_교육기관") },
        { json: "경부철도주식회사", js: "경부철도주식회사", typ: r("경부철도주식회사") },
        { json: "미쓰비시 제강 주식회사", js: "미쓰비시 제강 주식회사", typ: r("미쓰비시제강주식회사") },
        { json: "남만주철도 주식회사", js: "남만주철도 주식회사", typ: r("남만주철도주식회사") },
        { json: "대한석탄공사", js: "대한석탄공사", typ: r("Fluffy대한석탄공사") },
        { json: "주식회사 삼척탄좌개발", js: "주식회사 삼척탄좌개발", typ: r("폐지_주식회사삼척탄좌개발") },
        { json: "조선전업주식회사", js: "조선전업주식회사", typ: r("폐지_조선전업주식회사") },
        { json: "보문산 케이블카", js: "보문산 케이블카", typ: r("폐지_보문산케이블카") },
        { json: "송도해상케이블카", js: "송도해상케이블카", typ: r("폐지_송도해상케이블카") },
        { json: "농림부 산림국", js: "농림부 산림국", typ: r("폐지_농림부산림국") },
        { json: "운수성 철도국", js: "운수성 철도국", typ: m(r("운수성철도국")) },
        { json: "조선와사전기 주식회사", js: "조선와사전기 주식회사", typ: r("조선와사전기주식회사") },
        { json: "경춘철도주식회사", js: "경춘철도주식회사", typ: r("경춘철도주식회사") },
        { json: "사업소", js: "사업소", typ: r("폐지_사업소") },
        { json: "서울특별시", js: "서울특별시", typ: r("폐지_서울특별시") },
        { json: "한성전기회사", js: "한성전기회사", typ: r("한성전기회사") },
        { json: "경성궤도주식회사", js: "경성궤도주식회사", typ: r("경성궤도주식회사") },
        { json: "남조선철도주식회사", js: "남조선철도주식회사", typ: r("남조선철도주식회사") },
        { json: "함경북도", js: "함경북도", typ: r("폐지_함경북도") },
        { json: "생기령점토석탄주식회사", js: "생기령점토석탄주식회사", typ: r("폐지_생기령점토석탄주식회사") },
        { json: "영무궤도", js: "영무궤도", typ: r("영무궤도") },
        { json: "강서궤도", js: "강서궤도", typ: r("폐지_강서궤도") },
        { json: "미쓰비시 석탄 광업 주식회사", js: "미쓰비시 석탄 광업 주식회사", typ: r("폐지_미쓰비시석탄광업주식회사") },
        { json: "개천철도주식회사", js: "개천철도주식회사", typ: r("개천철도주식회사") },
        { json: "도문철도주식회사", js: "도문철도주식회사", typ: r("도문철도주식회사") },
        { json: "조선평안철도 주식회사", js: "조선평안철도 주식회사", typ: r("조선평안철도주식회사") },
        { json: "신흥철도주식회사", js: "신흥철도주식회사", typ: r("신흥철도주식회사") },
        { json: "평양시 려객운수종합기업소", js: "평양시 려객운수종합기업소", typ: r("폐지_평양시려객운수종합기업소") },
        { json: "북선척식철도주식회사", js: "북선척식철도주식회사", typ: r("북선척식철도주식회사") },
        { json: "동만주철도 주식회사", js: "동만주철도 주식회사", typ: r("폐지_동만주철도주식회사") },
    ], false),
    "가와사키기선주식회사": o([
        { json: "관여연락선", js: "관여연락선", typ: r("관여연락선") },
    ], false),
    "관여연락선": o([
        { json: "여수항", js: "여수항", typ: r("TartuGecko") },
    ], false),
    "폐지_강서궤도": o([
        { json: "강서궤도", js: "강서궤도", typ: r("강서궤도_강서궤도") },
    ], false),
    "강서궤도_강서궤도": o([
        { json: "기양", js: "기양", typ: r("TartuGecko") },
        { json: "강서", js: "강서", typ: r("TartuGecko") },
    ], false),
    "개천철도주식회사": o([
        { json: "개천선", js: "개천선", typ: m(r("TartuGecko")) },
    ], false),
    "경부철도주식회사": o([
        { json: "경인선", js: "경인선", typ: r("경부철도주식회사_경인선") },
        { json: "경부선", js: "경부선", typ: r("경부철도주식회사_경부선") },
    ], false),
    "경부철도주식회사_경부선": o([
        { json: "미륵", js: "미륵", typ: r("TartuGecko") },
        { json: "평촌", js: "평촌", typ: r("TartuGecko") },
        { json: "용호", js: "용호", typ: r("TartuGecko") },
        { json: "진위", js: "진위", typ: r("TartuGecko") },
    ], false),
    "경부철도주식회사_경인선": o([
        { json: "우각동", js: "우각동", typ: r("TartuGecko") },
    ], false),
    "경성궤도주식회사": o([
        { json: "경성궤도 본선", js: "경성궤도 본선", typ: r("경성궤도주식회사_경성궤도본선") },
        { json: "경성궤도 광장리선", js: "경성궤도 광장리선", typ: r("경성궤도주식회사_경성궤도광장리선") },
        { json: "동뚝", js: "동뚝", typ: r("TartuGecko") },
        { json: "화물지선종점", js: "화물지선종점", typ: r("TartuGecko") },
    ], false),
    "경성궤도주식회사_경성궤도광장리선": o([
        { json: "도교", js: "도교", typ: r("TartuGecko") },
    ], false),
    "경성궤도주식회사_경성궤도본선": o([
        { json: "후원", js: "후원", typ: r("TartuGecko") },
    ], false),
    "Purple경성전기주식회사": o([
        { json: "금강산선", js: "금강산선", typ: r("금강산선") },
        { json: "서울전차 서대문선", js: "서울전차 서대문선", typ: m(r("TartuGecko")) },
        { json: "서울전차 영천선", js: "서울전차 영천선", typ: m(r("TartuGecko")) },
        { json: "서울전차 마포선", js: "서울전차 마포선", typ: m(r("TartuGecko")) },
        { json: "서울전차 의주로선", js: "서울전차 의주로선", typ: m(r("TartuGecko")) },
        { json: "서울전차 세종로선", js: "서울전차 세종로선", typ: r("서울전차세종로선") },
        { json: "서울전차 효자동선", js: "서울전차 효자동선", typ: r("서울전차효자동선") },
        { json: "서울전차 광화문선", js: "서울전차 광화문선", typ: r("서울전차광화문선") },
        { json: "서울전차 안국동선", js: "서울전차 안국동선", typ: m(r("TartuGecko")) },
        { json: "서울전차 종로선", js: "서울전차 종로선", typ: m(r("TartuGecko")) },
        { json: "서울전차 청량리선", js: "서울전차 청량리선", typ: m(r("TartuGecko")) },
        { json: "서울전차 석산선", js: "서울전차 석산선", typ: r("서울전차석산선") },
        { json: "서울전차 경용선", js: "서울전차 경용선", typ: m(r("TartuGecko")) },
        { json: "서울전차 노량진선", js: "서울전차 노량진선", typ: m(r("TartuGecko")) },
        { json: "서울전차 구용산선", js: "서울전차 구용산선", typ: m(r("TartuGecko")) },
        { json: "경성전차 강안선", js: "경성전차 강안선", typ: m(r("TartuGecko")) },
        { json: "서울전차 을지로선", js: "서울전차 을지로선", typ: m(r("TartuGecko")) },
        { json: "서울전차 창경원선", js: "서울전차 창경원선", typ: r("서울전차창경원선") },
        { json: "서울전차 충무로선", js: "서울전차 충무로선", typ: r("서울전차충무로선") },
        { json: "서울전차 장충단선", js: "서울전차 장충단선", typ: m(r("TartuGecko")) },
        { json: "서울전차 왕십리선", js: "서울전차 왕십리선", typ: m(r("TartuGecko")) },
        { json: "서울전차 용산역전선", js: "서울전차 용산역전선", typ: r("서울전차용산역전선") },
    ], false),
    "금강산선": o([
        { json: "기성", js: "기성", typ: r("TartuGecko") },
        { json: "현리", js: "현리", typ: r("TartuGecko") },
        { json: "도파", js: "도파", typ: r("TartuGecko") },
        { json: "화계", js: "화계", typ: r("TartuGecko") },
        { json: "오량", js: "오량", typ: r("TartuGecko") },
        { json: "단발령", js: "단발령", typ: r("TartuGecko") },
        { json: "말휘리", js: "말휘리", typ: r("TartuGecko") },
        { json: "병무", js: "병무", typ: r("TartuGecko") },
        { json: "내금강", js: "내금강", typ: r("TartuGecko") },
    ], false),
    "서울전차광화문선": o([
        { json: "체신국앞", js: "체신국앞", typ: r("TartuGecko") },
    ], false),
    "서울전차석산선": o([
        { json: "동묘앞", js: "동묘앞", typ: r("TartuGecko") },
        { json: "석산", js: "석산", typ: r("TartuGecko") },
    ], false),
    "서울전차세종로선": o([
        { json: "태평로2가", js: "태평로2가", typ: r("TartuGecko") },
    ], false),
    "서울전차용산역전선": o([
        { json: "철도관사앞", js: "철도관사앞", typ: r("TartuGecko") },
    ], false),
    "서울전차창경원선": o([
        { json: "대학병원앞", js: "대학병원앞", typ: r("TartuGecko") },
    ], false),
    "서울전차충무로선": o([
        { json: "충무로5가", js: "충무로5가", typ: r("TartuGecko") },
    ], false),
    "서울전차효자동선": o([
        { json: "진명여고", js: "진명여고", typ: r("TartuGecko") },
    ], false),
    "경춘철도주식회사": o([
        { json: "구 경춘선", js: "구 경춘선", typ: r("경춘철도주식회사_구경춘선") },
    ], false),
    "경춘철도주식회사_구경춘선": o([
        { json: "태릉", js: "태릉", typ: r("TartuGecko") },
        { json: "묵동", js: "묵동", typ: r("TartuGecko") },
    ], false),
    "폐지_교육기관": o([
        { json: "철도관리양성소", js: "철도관리양성소", typ: r("TartuGecko") },
    ], false),
    "폐지_교통부": o([
        { json: "경원선", js: "경원선", typ: r("교통부_경원선") },
        { json: "경전선", js: "경전선", typ: r("교통부_경전선") },
        { json: "구 경춘선", js: "구 경춘선", typ: r("교통부_구경춘선") },
        { json: "신촌연결선", js: "신촌연결선", typ: r("교통부_신촌연결선") },
        { json: "박물관", js: "박물관", typ: r("교통부_박물관") },
        { json: "우암선", js: "우암선", typ: r("교통부_우암선") },
        { json: "구 대구선", js: "구 대구선", typ: r("교통부_구대구선") },
        { json: "경부선", js: "경부선", typ: r("교통부_경부선") },
        { json: "동촌연결선", js: "동촌연결선", typ: m(r("TartuGecko")) },
        { json: "서울교외선", js: "서울교외선", typ: r("교통부_서울교외선") },
        { json: "동해북부선", js: "동해북부선", typ: r("교통부_동해북부선") },
        { json: "토해선", js: "토해선", typ: r("토해선") },
    ], false),
    "교통부_경부선": o([
        { json: "신천신호소", js: "신천신호소", typ: r("TartuGecko") },
    ], false),
    "교통부_경원선": o([
        { json: "철원", js: "철원", typ: r("TartuGecko") },
        { json: "월정리", js: "월정리", typ: r("TartuGecko") },
    ], false),
    "교통부_경전선": o([
        { json: "송지", js: "송지", typ: r("TartuGecko") },
        { json: "생림", js: "생림", typ: r("TartuGecko") },
    ], false),
    "교통부_구경춘선": o([
        { json: "고상전", js: "고상전", typ: r("TartuGecko") },
    ], false),
    "교통부_구대구선": o([
        { json: "신대신호소", js: "신대신호소", typ: r("TartuGecko") },
    ], false),
    "교통부_동해북부선": o([
        { json: "초구", js: "초구", typ: r("TartuGecko") },
    ], false),
    "교통부_서울교외선": o([
        { json: "가능", js: "가능", typ: r("TartuGecko") },
    ], false),
    "교통부_신촌연결선": o([
        { json: "서강", js: "서강", typ: r("TartuGecko") },
        { json: "신촌", js: "신촌", typ: r("TartuGecko") },
    ], false),
    "교통부_우암선": o([
        { json: "적기부두", js: "적기부두", typ: r("TartuGecko") },
    ], false),
    "토해선": o([
        { json: "성호", js: "성호", typ: r("TartuGecko") },
        { json: "예성강", js: "예성강", typ: r("TartuGecko") },
        { json: "토성", js: "토성", typ: r("TartuGecko") },
        { json: "배천", js: "배천", typ: r("TartuGecko") },
    ], false),
    "폐지_국립중앙과학관": o([
        { json: "대전자기부상시험선", js: "대전자기부상시험선", typ: m(r("TartuGecko")) },
    ], false),
    "Sticky국유철도": o([
        { json: "한국철도공사", js: "한국철도공사", typ: r("한국철도공사_10") },
        { json: "철도청", js: "철도청", typ: r("Sticky철도청") },
    ], false),
    "Sticky철도청": o([
        { json: "문경선", js: "문경선", typ: r("철도청_문경선") },
        { json: "화순선", js: "화순선", typ: r("철도청_화순선") },
        { json: "전라선", js: "전라선", typ: r("Sticky전라선") },
        { json: "충북선", js: "충북선", typ: r("철도청_충북선") },
        { json: "경전선", js: "경전선", typ: r("철도청_경전선") },
        { json: "구 대구선", js: "구 대구선", typ: r("철도청_구대구선") },
        { json: "수인선", js: "수인선", typ: r("철도청_수인선") },
        { json: "경춘선", js: "경춘선", typ: r("철도청_경춘선") },
        { json: "구 경춘선", js: "구 경춘선", typ: r("철도청_구경춘선") },
        { json: "마산항제1부두선", js: "마산항제1부두선", typ: r("철도청_마산항제1부두선") },
        { json: "진해선", js: "진해선", typ: r("철도청_진해선") },
        { json: "김포선", js: "김포선", typ: r("김포선") },
        { json: "당인리선", js: "당인리선", typ: m(r("TartuGecko")) },
        { json: "수려선", js: "수려선", typ: m(r("TartuGecko")) },
        { json: "안성선", js: "안성선", typ: r("Fluffy안성선") },
        { json: "광주선", js: "광주선", typ: r("철도청_광주선") },
        { json: "경부선", js: "경부선", typ: r("Hilarious경부선") },
        { json: "경북선", js: "경북선", typ: r("철도청_경북선") },
        { json: "호남선", js: "호남선", typ: r("철도청_호남선") },
        { json: "정선선", js: "정선선", typ: r("철도청_정선선") },
        { json: "진삼선", js: "진삼선", typ: r("진삼선") },
        { json: "영동선", js: "영동선", typ: r("철도청_영동선") },
        { json: "용산선", js: "용산선", typ: r("철도청_용산선") },
        { json: "장항선", js: "장항선", typ: r("철도청_장항선") },
        { json: "장항화물선", js: "장항화물선", typ: r("철도청_장항화물선") },
        { json: "오정선", js: "오정선", typ: r("오정선") },
        { json: "비인선", js: "비인선", typ: r("비인선") },
        { json: "동해남부선", js: "동해남부선", typ: r("Fluffy동해남부선") },
        { json: "서청주선", js: "서청주선", typ: r("서청주선") },
        { json: "옥구선", js: "옥구선", typ: r("철도청_옥구선") },
        { json: "회동선", js: "회동선", typ: r("회동선") },
        { json: "망우선", js: "망우선", typ: r("철도청_망우선") },
        { json: "남부순환선", js: "남부순환선", typ: r("남부순환선") },
        { json: "병원", js: "병원", typ: m(r("TartuGecko")) },
        { json: "박물관", js: "박물관", typ: r("철도청_박물관") },
        { json: "교육기관", js: "교육기관", typ: r("철도청_교육기관") },
        { json: "경인선", js: "경인선", typ: r("철도청_경인선") },
        { json: "충남선", js: "충남선", typ: r("충남선") },
        { json: "사업소", js: "사업소", typ: m(r("TartuGecko")) },
        { json: "중앙선", js: "중앙선", typ: r("철도청_중앙선") },
        { json: "단양탄광선", js: "단양탄광선", typ: r("단양탄광선") },
        { json: "문현선", js: "문현선", typ: r("Fluffy문현선") },
        { json: "우암선", js: "우암선", typ: r("Sticky우암선") },
        { json: "옥서삼각선", js: "옥서삼각선", typ: r("옥서삼각선") },
        { json: "경의선", js: "경의선", typ: r("철도청_경의선") },
        { json: "수색객차출발선", js: "수색객차출발선", typ: m(r("TartuGecko")) },
        { json: "울산선", js: "울산선", typ: r("울산선") },
        { json: "장생포선", js: "장생포선", typ: r("장생포선_Class") },
        { json: "울산항선", js: "울산항선", typ: r("장생포선_Class") },
        { json: "동해북부선", js: "동해북부선", typ: r("Ambitious동해북부선") },
    ], false),
    "Hilarious경부선": o([
        { json: "증약", js: "증약", typ: r("TartuGecko") },
        { json: "가풍", js: "가풍", typ: r("TartuGecko") },
        { json: "미륵", js: "미륵", typ: r("TartuGecko") },
        { json: "박람회", js: "박람회", typ: r("TartuGecko") },
        { json: "안양풀장", js: "안양풀장", typ: r("TartuGecko") },
        { json: "초량", js: "초량", typ: r("TartuGecko") },
        { json: "부산", js: "부산", typ: r("TartuGecko") },
        { json: "엑스포", js: "엑스포", typ: r("TartuGecko") },
        { json: "오정", js: "오정", typ: r("TartuGecko") },
    ], false),
    "철도청_경북선": o([
        { json: "반구", js: "반구", typ: r("TartuGecko") },
        { json: "미룡", js: "미룡", typ: r("TartuGecko") },
        { json: "장산", js: "장산", typ: r("TartuGecko") },
        { json: "보문", js: "보문", typ: r("TartuGecko") },
        { json: "미산", js: "미산", typ: r("TartuGecko") },
        { json: "고평", js: "고평", typ: r("TartuGecko") },
        { json: "동예천", js: "동예천", typ: r("TartuGecko") },
        { json: "가동", js: "가동", typ: r("TartuGecko") },
        { json: "율현", js: "율현", typ: r("TartuGecko") },
        { json: "송암", js: "송암", typ: r("TartuGecko") },
        { json: "산양", js: "산양", typ: r("TartuGecko") },
        { json: "아천", js: "아천", typ: r("TartuGecko") },
        { json: "점촌", js: "점촌", typ: r("TartuGecko") },
    ], false),
    "철도청_경의선": o([
        { json: "능화신호소", js: "능화신호소", typ: r("TartuGecko") },
    ], false),
    "철도청_경인선": o([
        { json: "구로 신호소", js: "구로 신호소", typ: r("TartuGecko") },
        { json: "주안", js: "주안", typ: r("TartuGecko") },
        { json: "인천", js: "인천", typ: r("TartuGecko") },
    ], false),
    "철도청_경전선": o([
        { json: "합성", js: "합성", typ: r("TartuGecko") },
        { json: "내동", js: "내동", typ: r("TartuGecko") },
        { json: "구마산", js: "구마산", typ: r("TartuGecko") },
        { json: "수덕", js: "수덕", typ: r("TartuGecko") },
    ], false),
    "철도청_경춘선": o([
        { json: "의암", js: "의암", typ: r("TartuGecko") },
        { json: "답내", js: "답내", typ: r("TartuGecko") },
        { json: "청평호반", js: "청평호반", typ: r("TartuGecko") },
        { json: "상색", js: "상색", typ: r("TartuGecko") },
        { json: "갈매", js: "갈매", typ: r("TartuGecko") },
    ], false),
    "철도청_광주선": o([
        { json: "북광주", js: "북광주", typ: r("TartuGecko") },
    ], false),
    "철도청_교육기관": o([
        { json: "철도전문대학", js: "철도전문대학", typ: r("TartuGecko") },
    ], false),
    "철도청_구경춘선": o([
        { json: "월곡", js: "월곡", typ: r("TartuGecko") },
        { json: "성동", js: "성동", typ: r("TartuGecko") },
    ], false),
    "철도청_구대구선": o([
        { json: "신평", js: "신평", typ: r("TartuGecko") },
    ], false),
    "김포선": o([
        { json: "부천", js: "부천", typ: r("TartuGecko") },
        { json: "약대", js: "약대", typ: r("TartuGecko") },
        { json: "김포", js: "김포", typ: r("TartuGecko") },
    ], false),
    "남부순환선": o([
        { json: "오봉", js: "오봉", typ: r("TartuGecko") },
        { json: "청계리", js: "청계리", typ: r("TartuGecko") },
        { json: "과천", js: "과천", typ: r("TartuGecko") },
        { json: "염곡", js: "염곡", typ: r("TartuGecko") },
        { json: "영동", js: "영동", typ: r("TartuGecko") },
        { json: "송파", js: "송파", typ: r("TartuGecko") },
        { json: "강동", js: "강동", typ: r("TartuGecko") },
        { json: "토평", js: "토평", typ: r("TartuGecko") },
        { json: "도농", js: "도농", typ: r("TartuGecko") },
    ], false),
    "단양탄광선": o([
        { json: "도담", js: "도담", typ: r("TartuGecko") },
        { json: "사평", js: "사평", typ: r("TartuGecko") },
    ], false),
    "Fluffy동해남부선": o([
        { json: "병영", js: "병영", typ: r("TartuGecko") },
        { json: "울산", js: "울산", typ: r("TartuGecko") },
        { json: "달리", js: "달리", typ: r("TartuGecko") },
        { json: "황성", js: "황성", typ: r("TartuGecko") },
        { json: "남울산", js: "남울산", typ: r("TartuGecko") },
    ], false),
    "Ambitious동해북부선": o([
        { json: "양양", js: "양양", typ: r("TartuGecko") },
        { json: "낙산사", js: "낙산사", typ: r("TartuGecko") },
        { json: "대포", js: "대포", typ: r("TartuGecko") },
        { json: "속초", js: "속초", typ: r("TartuGecko") },
        { json: "천진리", js: "천진리", typ: r("TartuGecko") },
        { json: "문암", js: "문암", typ: r("TartuGecko") },
        { json: "공현진", js: "공현진", typ: r("TartuGecko") },
        { json: "간성", js: "간성", typ: r("TartuGecko") },
        { json: "거진", js: "거진", typ: r("TartuGecko") },
        { json: "현내", js: "현내", typ: r("TartuGecko") },
    ], false),
    "철도청_마산항제1부두선": o([
        { json: "교원", js: "교원", typ: r("TartuGecko") },
        { json: "신마산", js: "신마산", typ: r("TartuGecko") },
    ], false),
    "철도청_망우선": o([
        { json: "이문", js: "이문", typ: r("TartuGecko") },
    ], false),
    "철도청_문경선": o([
        { json: "진남", js: "진남", typ: r("TartuGecko") },
        { json: "불정", js: "불정", typ: r("TartuGecko") },
        { json: "점촌", js: "점촌", typ: r("TartuGecko") },
    ], false),
    "Fluffy문현선": o([
        { json: "부산", js: "부산", typ: r("TartuGecko") },
        { json: "우암", js: "우암", typ: r("TartuGecko") },
    ], false),
    "철도청_박물관": o([
        { json: "철도기념관", js: "철도기념관", typ: r("TartuGecko") },
    ], false),
    "비인선": o([
        { json: "서천", js: "서천", typ: r("TartuGecko") },
        { json: "종천", js: "종천", typ: r("TartuGecko") },
        { json: "비인", js: "비인", typ: r("TartuGecko") },
        { json: "선동", js: "선동", typ: r("TartuGecko") },
    ], false),
    "서청주선": o([
        { json: "서청주", js: "서청주", typ: r("TartuGecko") },
        { json: "청주", js: "청주", typ: r("TartuGecko") },
    ], false),
    "철도청_수인선": o([
        { json: "중앙", js: "중앙", typ: r("TartuGecko") },
        { json: "고잔", js: "고잔", typ: r("TartuGecko") },
        { json: "원곡", js: "원곡", typ: r("TartuGecko") },
        { json: "신길", js: "신길", typ: r("TartuGecko") },
        { json: "군자", js: "군자", typ: r("TartuGecko") },
        { json: "야목", js: "야목", typ: r("TartuGecko") },
        { json: "성두", js: "성두", typ: r("TartuGecko") },
        { json: "수원", js: "수원", typ: r("TartuGecko") },
    ], false),
    "Fluffy안성선": o([
        { json: "천안", js: "천안", typ: r("TartuGecko") },
        { json: "석교", js: "석교", typ: r("TartuGecko") },
        { json: "성거", js: "성거", typ: r("TartuGecko") },
        { json: "입장", js: "입장", typ: r("TartuGecko") },
        { json: "고지", js: "고지", typ: r("TartuGecko") },
        { json: "미양", js: "미양", typ: r("TartuGecko") },
        { json: "안성", js: "안성", typ: r("TartuGecko") },
        { json: "신부", js: "신부", typ: r("TartuGecko") },
    ], false),
    "철도청_영동선": o([
        { json: "경포대", js: "경포대", typ: r("TartuGecko") },
        { json: "평릉", js: "평릉", typ: r("TartuGecko") },
    ], false),
    "오정선": o([
        { json: "서대전", js: "서대전", typ: r("TartuGecko") },
        { json: "오정", js: "오정", typ: r("TartuGecko") },
    ], false),
    "철도청_옥구선": o([
        { json: "상평", js: "상평", typ: r("TartuGecko") },
    ], false),
    "옥서삼각선": o([
        { json: "옥마", js: "옥마", typ: r("TartuGecko") },
        { json: "옥서", js: "옥서", typ: r("TartuGecko") },
    ], false),
    "철도청_용산선": o([
        { json: "효창", js: "효창", typ: r("TartuGecko") },
        { json: "동막", js: "동막", typ: r("TartuGecko") },
    ], false),
    "Sticky우암선": o([
        { json: "부전", js: "부전", typ: r("TartuGecko") },
    ], false),
    "울산선": o([
        { json: "달리", js: "달리", typ: r("TartuGecko") },
        { json: "야음", js: "야음", typ: r("TartuGecko") },
    ], false),
    "장생포선_Class": o([
        { json: "야음", js: "야음", typ: r("TartuGecko") },
    ], false),
    "철도청_장항선": o([
        { json: "세교", js: "세교", typ: r("TartuGecko") },
        { json: "옥서", js: "옥서", typ: r("TartuGecko") },
        { json: "신곡", js: "신곡", typ: r("TartuGecko") },
    ], false),
    "철도청_장항화물선": o([
        { json: "구절", js: "구절", typ: r("TartuGecko") },
    ], false),
    "Sticky전라선": o([
        { json: "산성", js: "산성", typ: r("TartuGecko") },
        { json: "오류", js: "오류", typ: r("TartuGecko") },
        { json: "남관", js: "남관", typ: r("TartuGecko") },
        { json: "덕진", js: "덕진", typ: r("TartuGecko") },
        { json: "상동", js: "상동", typ: r("TartuGecko") },
        { json: "학구", js: "학구", typ: r("TartuGecko") },
        { json: "내구", js: "내구", typ: r("TartuGecko") },
        { json: "전주", js: "전주", typ: r("TartuGecko") },
    ], false),
    "철도청_정선선": o([
        { json: "외반점", js: "외반점", typ: r("TartuGecko") },
    ], false),
    "철도청_중앙선": o([
        { json: "단양", js: "단양", typ: r("TartuGecko") },
        { json: "서경주", js: "서경주", typ: r("TartuGecko") },
    ], false),
    "진삼선": o([
        { json: "예하", js: "예하", typ: r("TartuGecko") },
        { json: "선진", js: "선진", typ: r("TartuGecko") },
        { json: "죽림", js: "죽림", typ: r("TartuGecko") },
        { json: "삼천포", js: "삼천포", typ: r("TartuGecko") },
        { json: "노룡", js: "노룡", typ: r("TartuGecko") },
        { json: "금문", js: "금문", typ: r("TartuGecko") },
        { json: "사천", js: "사천", typ: r("TartuGecko") },
        { json: "개양", js: "개양", typ: r("TartuGecko") },
    ], false),
    "철도청_진해선": o([
        { json: "상남", js: "상남", typ: r("TartuGecko") },
    ], false),
    "충남선": o([
        { json: "논산", js: "논산", typ: r("TartuGecko") },
        { json: "정지", js: "정지", typ: r("TartuGecko") },
        { json: "석성", js: "석성", typ: r("TartuGecko") },
        { json: "능산", js: "능산", typ: r("TartuGecko") },
        { json: "부여", js: "부여", typ: r("TartuGecko") },
    ], false),
    "철도청_충북선": o([
        { json: "충주", js: "충주", typ: r("TartuGecko") },
        { json: "증평", js: "증평", typ: r("TartuGecko") },
        { json: "산척", js: "산척", typ: r("TartuGecko") },
        { json: "정하", js: "정하", typ: r("TartuGecko") },
        { json: "금암", js: "금암", typ: r("TartuGecko") },
        { json: "문암", js: "문암", typ: r("TartuGecko") },
        { json: "상당", js: "상당", typ: r("TartuGecko") },
        { json: "정봉", js: "정봉", typ: r("TartuGecko") },
    ], false),
    "철도청_호남선": o([
        { json: "동목포", js: "동목포", typ: r("TartuGecko") },
        { json: "명산", js: "명산", typ: r("TartuGecko") },
        { json: "영산포", js: "영산포", typ: r("TartuGecko") },
        { json: "신흥리", js: "신흥리", typ: r("TartuGecko") },
        { json: "채화", js: "채화", typ: r("TartuGecko") },
        { json: "학교", js: "학교", typ: r("TartuGecko") },
    ], false),
    "철도청_화순선": o([
        { json: "복암", js: "복암", typ: r("TartuGecko") },
        { json: "남화순", js: "남화순", typ: r("TartuGecko") },
    ], false),
    "회동선": o([
        { json: "회동", js: "회동", typ: r("TartuGecko") },
        { json: "세대", js: "세대", typ: r("TartuGecko") },
    ], false),
    "한국철도공사_10": o([
        { json: "가야선", js: "가야선", typ: r("Sticky가야선") },
        { json: "경부고속선", js: "경부고속선", typ: m(r("TartuGecko")) },
        { json: "경전선", js: "경전선", typ: m(r("TartuGecko")) },
        { json: "남포선", js: "남포선", typ: r("Fluffy남포선") },
        { json: "대구선", js: "대구선", typ: r("Sticky대구선") },
        { json: "동해남부선", js: "동해남부선", typ: m(r("TartuGecko")) },
        { json: "문경선", js: "문경선", typ: r("Sticky문경선") },
        { json: "장항선", js: "장항선", typ: m(r("TartuGecko")) },
        { json: "장항화물선", js: "장항화물선", typ: r("Tentacled장항화물선") },
        { json: "중앙선", js: "중앙선", typ: m(r("TartuGecko")) },
        { json: "태백선", js: "태백선", typ: r("Sticky태백선") },
        { json: "화순선", js: "화순선", typ: r("한국철도공사_화순선") },
        { json: "경의선", js: "경의선", typ: r("Indecent경의선") },
        { json: "금장삼각선", js: "금장삼각선", typ: r("금장삼각선") },
        { json: "옥구선", js: "옥구선", typ: r("Tentacled옥구선") },
        { json: "경춘선", js: "경춘선", typ: r("Tentacled경춘선") },
        { json: "가은선", js: "가은선", typ: r("가은선") },
        { json: "구 경춘선", js: "구 경춘선", typ: m(r("TartuGecko")) },
        { json: "구 대구선", js: "구 대구선", typ: r("Fluffy구대구선") },
        { json: "경부선", js: "경부선", typ: r("Ambitious경부선") },
        { json: "경북선", js: "경북선", typ: r("Indigo경북선") },
        { json: "호남선", js: "호남선", typ: r("Magenta호남선") },
        { json: "충북선", js: "충북선", typ: r("Indigo충북선") },
        { json: "정선선", js: "정선선", typ: r("Tentacled정선선") },
        { json: "전라선", js: "전라선", typ: m(r("TartuGecko")) },
        { json: "영동선", js: "영동선", typ: r("Indecent영동선") },
        { json: "효창선", js: "효창선", typ: r("효창선") },
        { json: "마산항제1부두선", js: "마산항제1부두선", typ: r("한국철도공사_마산항제1부두선") },
        { json: "정양선", js: "정양선", typ: r("정양선") },
        { json: "경원선", js: "경원선", typ: m(r("TartuGecko")) },
        { json: "병원", js: "병원", typ: r("한국철도공사_병원") },
        { json: "광양제철선", js: "광양제철선", typ: r("Sticky광양제철선") },
        { json: "분당선", js: "분당선", typ: r("Tentacled분당선") },
        { json: "진해선", js: "진해선", typ: r("Hilarious진해선") },
        { json: "영천삼각선", js: "영천삼각선", typ: r("Fluffy영천삼각선") },
        { json: "구 대전남연결선", js: "구 대전남연결선", typ: r("구대전남연결선") },
        { json: "사업소", js: "사업소", typ: m(r("TartuGecko")) },
    ], false),
    "Sticky가야선": o([
        { json: "주례", js: "주례", typ: r("TartuGecko") },
    ], false),
    "가은선": o([
        { json: "가은", js: "가은", typ: r("TartuGecko") },
        { json: "구랑리", js: "구랑리", typ: r("TartuGecko") },
        { json: "진남", js: "진남", typ: r("TartuGecko") },
    ], false),
    "Ambitious경부선": o([
        { json: "대성", js: "대성", typ: r("TartuGecko") },
        { json: "이원", js: "이원", typ: r("TartuGecko") },
        { json: "대신", js: "대신", typ: r("TartuGecko") },
    ], false),
    "Indigo경북선": o([
        { json: "양정", js: "양정", typ: r("TartuGecko") },
        { json: "두원", js: "두원", typ: r("TartuGecko") },
        { json: "이방", js: "이방", typ: r("TartuGecko") },
        { json: "지내", js: "지내", typ: r("TartuGecko") },
    ], false),
    "Indecent경의선": o([
        { json: "장단", js: "장단", typ: r("TartuGecko") },
        { json: "구 강매", js: "구 강매", typ: r("TartuGecko") },
    ], false),
    "Tentacled경춘선": o([
        { json: "평내", js: "평내", typ: r("TartuGecko") },
        { json: "남춘천", js: "남춘천", typ: r("TartuGecko") },
        { json: "김유정", js: "김유정", typ: r("TartuGecko") },
        { json: "강촌", js: "강촌", typ: r("TartuGecko") },
        { json: "백양리", js: "백양리", typ: r("TartuGecko") },
        { json: "경강", js: "경강", typ: r("TartuGecko") },
        { json: "가평", js: "가평", typ: r("TartuGecko") },
        { json: "청평", js: "청평", typ: r("TartuGecko") },
        { json: "금곡", js: "금곡", typ: r("TartuGecko") },
        { json: "사릉", js: "사릉", typ: r("TartuGecko") },
    ], false),
    "Sticky광양제철선": o([
        { json: "광양", js: "광양", typ: r("TartuGecko") },
    ], false),
    "Fluffy구대구선": o([
        { json: "반야월", js: "반야월", typ: r("TartuGecko") },
        { json: "동촌", js: "동촌", typ: r("TartuGecko") },
        { json: "동대구", js: "동대구", typ: r("TartuGecko") },
        { json: "대구", js: "대구", typ: r("TartuGecko") },
    ], false),
    "구대전남연결선": o([
        { json: "옥천", js: "옥천", typ: r("TartuGecko") },
        { json: "대전북연결선분기", js: "대전북연결선분기", typ: r("TartuGecko") },
    ], false),
    "금장삼각선": o([
        { json: "서경주", js: "서경주", typ: r("TartuGecko") },
        { json: "나원", js: "나원", typ: r("TartuGecko") },
    ], false),
    "Fluffy남포선": o([
        { json: "남포", js: "남포", typ: r("TartuGecko") },
        { json: "옥마", js: "옥마", typ: r("TartuGecko") },
    ], false),
    "Sticky대구선": o([
        { json: "봉정", js: "봉정", typ: r("TartuGecko") },
        { json: "금호", js: "금호", typ: r("TartuGecko") },
        { json: "북영천분기", js: "북영천분기", typ: r("TartuGecko") },
    ], false),
    "한국철도공사_마산항제1부두선": o([
        { json: "마산항", js: "마산항", typ: r("TartuGecko") },
        { json: "마산", js: "마산", typ: r("TartuGecko") },
    ], false),
    "Sticky문경선": o([
        { json: "신현", js: "신현", typ: r("TartuGecko") },
        { json: "문경", js: "문경", typ: r("TartuGecko") },
        { json: "마성", js: "마성", typ: r("TartuGecko") },
    ], false),
    "한국철도공사_병원": o([
        { json: "용산철도병원", js: "용산철도병원", typ: r("TartuGecko") },
    ], false),
    "Tentacled분당선": o([
        { json: "보정", js: "보정", typ: r("TartuGecko") },
    ], false),
    "Indecent영동선": o([
        { json: "시동", js: "시동", typ: r("TartuGecko") },
        { json: "심포리", js: "심포리", typ: r("TartuGecko") },
        { json: "영주", js: "영주", typ: r("TartuGecko") },
    ], false),
    "Fluffy영천삼각선": o([
        { json: "북영천분기", js: "북영천분기", typ: r("TartuGecko") },
    ], false),
    "Tentacled옥구선": o([
        { json: "군산화물", js: "군산화물", typ: r("TartuGecko") },
    ], false),
    "Tentacled장항화물선": o([
        { json: "장항화물", js: "장항화물", typ: r("TartuGecko") },
        { json: "장항", js: "장항", typ: r("TartuGecko") },
    ], false),
    "Tentacled정선선": o([
        { json: "신치", js: "신치", typ: r("TartuGecko") },
    ], false),
    "정양선": o([
        { json: "정양", js: "정양", typ: r("TartuGecko") },
        { json: "영월", js: "영월", typ: r("TartuGecko") },
    ], false),
    "Hilarious진해선": o([
        { json: "성주사", js: "성주사", typ: r("TartuGecko") },
    ], false),
    "Indigo충북선": o([
        { json: "미호", js: "미호", typ: r("TartuGecko") },
        { json: "원박", js: "원박", typ: r("TartuGecko") },
        { json: "청주", js: "청주", typ: r("TartuGecko") },
    ], false),
    "Sticky태백선": o([
        { json: "송학", js: "송학", typ: r("TartuGecko") },
        { json: "장락", js: "장락", typ: r("TartuGecko") },
    ], false),
    "Magenta호남선": o([
        { json: "옥정", js: "옥정", typ: r("TartuGecko") },
        { json: "신흥리", js: "신흥리", typ: r("TartuGecko") },
        { json: "다산", js: "다산", typ: r("TartuGecko") },
        { json: "신도", js: "신도", typ: r("TartuGecko") },
        { json: "원정", js: "원정", typ: r("TartuGecko") },
        { json: "일로", js: "일로", typ: r("TartuGecko") },
        { json: "고막원", js: "고막원", typ: r("TartuGecko") },
        { json: "나주", js: "나주", typ: r("TartuGecko") },
        { json: "노안", js: "노안", typ: r("TartuGecko") },
        { json: "안평", js: "안평", typ: r("TartuGecko") },
        { json: "노령", js: "노령", typ: r("TartuGecko") },
    ], false),
    "한국철도공사_화순선": o([
        { json: "화순", js: "화순", typ: r("TartuGecko") },
        { json: "장동", js: "장동", typ: r("TartuGecko") },
    ], false),
    "효창선": o([
        { json: "용산", js: "용산", typ: r("TartuGecko") },
        { json: "효창", js: "효창", typ: r("TartuGecko") },
    ], false),
    "폐지_김제궤도주식회사": o([
        { json: "김제궤도", js: "김제궤도", typ: r("김제궤도") },
    ], false),
    "김제궤도": o([
        { json: "김제", js: "김제", typ: r("TartuGecko") },
        { json: "김제읍내", js: "김제읍내", typ: r("TartuGecko") },
        { json: "죽산", js: "죽산", typ: r("TartuGecko") },
        { json: "동진강안", js: "동진강안", typ: r("TartuGecko") },
    ], false),
    "남만주철도주식회사": o([
        { json: "사업소", js: "사업소", typ: r("남만주철도주식회사_사업소") },
        { json: "경부선", js: "경부선", typ: m(r("TartuGecko")) },
        { json: "라진항선", js: "라진항선", typ: r("남만주철도주식회사_라진항선") },
    ], false),
    "남만주철도주식회사_라진항선": o([
        { json: "라진부두", js: "라진부두", typ: r("TartuGecko") },
    ], false),
    "남만주철도주식회사_사업소": o([
        { json: "남대문기관고", js: "남대문기관고", typ: r("TartuGecko") },
    ], false),
    "남조선철도주식회사": o([
        { json: "경전선", js: "경전선", typ: r("남조선철도주식회사_경전선") },
    ], false),
    "남조선철도주식회사_경전선": o([
        { json: "신음", js: "신음", typ: r("TartuGecko") },
    ], false),
    "폐지_농림부산림국": o([
        { json: "가곡천 산림철도", js: "가곡천 산림철도", typ: m(r("TartuGecko")) },
    ], false),
    "Fluffy대한석탄공사": o([
        { json: "은성탄광 전용철도", js: "은성탄광 전용철도", typ: r("은성탄광전용철도") },
        { json: "함백탄광 전용철도", js: "함백탄광 전용철도", typ: m(r("TartuGecko")) },
        { json: "함백탄광 전용철도 단곡 삭도", js: "함백탄광 전용철도 단곡 삭도", typ: m(r("TartuGecko")) },
        { json: "함백탄광 전용철도 선탄강삭철도", js: "함백탄광 전용철도 선탄강삭철도", typ: m(r("TartuGecko")) },
        { json: "함태탄광 전용철도", js: "함태탄광 전용철도", typ: m(r("TartuGecko")) },
        { json: "도계광업소 삭도", js: "도계광업소 삭도", typ: m(r("TartuGecko")) },
    ], false),
    "은성탄광전용철도": o([
        { json: "점촌", js: "점촌", typ: r("TartuGecko") },
        { json: "주평", js: "주평", typ: r("TartuGecko") },
        { json: "불정", js: "불정", typ: r("TartuGecko") },
        { json: "구랑리", js: "구랑리", typ: r("TartuGecko") },
        { json: "은성탄광", js: "은성탄광", typ: r("TartuGecko") },
    ], false),
    "도문철도주식회사": o([
        { json: "함북선", js: "함북선", typ: r("도문철도주식회사_함북선") },
    ], false),
    "도문철도주식회사_함북선": o([
        { json: "강안", js: "강안", typ: r("TartuGecko") },
    ], false),
    "폐지_동만주철도주식회사": o([
        { json: "동만주철도 본선", js: "동만주철도 본선", typ: r("동만주철도본선") },
    ], false),
    "동만주철도본선": o([
        { json: "훈융", js: "훈융", typ: r("TartuGecko") },
    ], false),
    "폐지_미쓰비시석탄광업주식회사": o([
        { json: "미쓰비시 광업 대보탄갱선", js: "미쓰비시 광업 대보탄갱선", typ: r("미쓰비시광업대보탄갱선") },
    ], false),
    "미쓰비시광업대보탄갱선": o([
        { json: "대평", js: "대평", typ: r("TartuGecko") },
        { json: "대보탄광", js: "대보탄광", typ: r("TartuGecko") },
    ], false),
    "미쓰비시제강주식회사": o([
        { json: "사업소", js: "사업소", typ: r("미쓰비시제강주식회사_사업소") },
    ], false),
    "미쓰비시제강주식회사_사업소": o([
        { json: "미쓰비시 제강 인천제작소", js: "미쓰비시 제강 인천제작소", typ: r("TartuGecko") },
    ], false),
    "폐지_보문산케이블카": o([
        { json: "보문산 케이블카", js: "보문산 케이블카", typ: r("케이블카") },
    ], false),
    "북선척식철도주식회사": o([
        { json: "무산선", js: "무산선", typ: r("북선척식철도주식회사_무산선") },
    ], false),
    "북선척식철도주식회사_무산선": o([
        { json: "무산강안", js: "무산강안", typ: r("TartuGecko") },
    ], false),
    "폐지_북한철도성": o([
        { json: "금강산선", js: "금강산선", typ: m(r("TartuGecko")) },
        { json: "청년이천선", js: "청년이천선", typ: r("Tentacled청년이천선") },
        { json: "황해청년선", js: "황해청년선", typ: r("Tentacled황해청년선") },
        { json: "장방삼각선", js: "장방삼각선", typ: r("장방삼각선") },
        { json: "배천선", js: "배천선", typ: r("Tentacled배천선") },
        { json: "옹진선", js: "옹진선", typ: r("Sticky옹진선") },
        { json: "부포선", js: "부포선", typ: r("Sticky부포선") },
        { json: "은률선", js: "은률선", typ: r("Fluffy은률선") },
        { json: "도지리선", js: "도지리선", typ: r("도지리선") },
        { json: "평북선", js: "평북선", typ: r("Tentacled평북선") },
        { json: "평라선", js: "평라선", typ: r("Sticky평라선") },
        { json: "직동탄광선", js: "직동탄광선", typ: r("Fluffy직동탄광선") },
        { json: "신창삼각선", js: "신창삼각선", typ: r("신창삼각선") },
        { json: "신흥선", js: "신흥선", typ: m(r("TartuGecko")) },
        { json: "허천선", js: "허천선", typ: r("Fluffy허천선") },
        { json: "청진조차장선", js: "청진조차장선", typ: r("Fluffy청진조차장선") },
        { json: "회령탄광선", js: "회령탄광선", typ: r("Sticky회령탄광선") },
        { json: "삼지연선", js: "삼지연선", typ: m(r("TartuGecko")) },
        { json: "보천선", js: "보천선", typ: r("Fluffy보천선") },
        { json: "성평선", js: "성평선", typ: m(r("TartuGecko")) },
        { json: "금강산청년선", js: "금강산청년선", typ: r("Tentacled금강산청년선") },
        { json: "평남선", js: "평남선", typ: r("Tentacled평남선") },
        { json: "서해리선", js: "서해리선", typ: r("서해리선") },
        { json: "덕달선", js: "덕달선", typ: r("덕달선") },
        { json: "운산선", js: "운산선", typ: r("운산선") },
        { json: "잠진리선", js: "잠진리선", typ: r("Fluffy잠진리선") },
        { json: "남동선", js: "남동선", typ: r("남동선") },
        { json: "구 은률선", js: "구 은률선", typ: r("Fluffy구은률선") },
        { json: "박천선", js: "박천선", typ: r("Tentacled박천선") },
        { json: "삼등탄광선", js: "삼등탄광선", typ: r("삼등탄광선") },
        { json: "안주탄광선", js: "안주탄광선", typ: m(r("TartuGecko")) },
        { json: "화풍선", js: "화풍선", typ: m(r("TartuGecko")) },
        { json: "청남선", js: "청남선", typ: r("청남선") },
        { json: "개천선", js: "개천선", typ: m(r("TartuGecko")) },
        { json: "하성선", js: "하성선", typ: r("하성선") },
        { json: "장연선", js: "장연선", typ: r("Fluffy장연선") },
        { json: "일탄선", js: "일탄선", typ: r("Tentacled일탄선") },
        { json: "백두산청년선", js: "백두산청년선", typ: r("Tentacled백두산청년선") },
        { json: "백무선", js: "백무선", typ: r("Indigo백무선") },
        { json: "함북선", js: "함북선", typ: m(r("TartuGecko")) },
        { json: "사해선", js: "사해선", typ: r("북한철도성_사해선") },
        { json: "내토선", js: "내토선", typ: r("내토선") },
        { json: "경원선", js: "경원선", typ: r("Indecent경원선") },
        { json: "병원", js: "병원", typ: r("병원_Class") },
        { json: "다사도선", js: "다사도선", typ: r("Tentacled다사도선") },
        { json: "북부내륙선", js: "북부내륙선", typ: r("병원_Class") },
        { json: "강계선", js: "강계선", typ: m(r("TartuGecko")) },
        { json: "만포선", js: "만포선", typ: r("Tentacled만포선") },
        { json: "구장삼각선", js: "구장삼각선", typ: m(r("TartuGecko")) },
        { json: "청년팔원선", js: "청년팔원선", typ: m(r("TartuGecko")) },
        { json: "경의선", js: "경의선", typ: r("Hilarious경의선") },
        { json: "삼천포지선", js: "삼천포지선", typ: m(r("TartuGecko")) },
        { json: "화풍삼각선", js: "화풍삼각선", typ: m(r("TartuGecko")) },
        { json: "배골선", js: "배골선", typ: r("배골선") },
        { json: "매하선", js: "매하선", typ: r("매하선") },
        { json: "청단삼각선", js: "청단삼각선", typ: m(r("TartuGecko")) },
        { json: "문천항선", js: "문천항선", typ: r("Fluffy문천항선") },
        { json: "고비선", js: "고비선", typ: r("Fluffy고비선") },
        { json: "천성탄광선", js: "천성탄광선", typ: r("Fluffy천성탄광선") },
        { json: "평양 덕산선", js: "평양 덕산선", typ: r("평양덕산선") },
        { json: "평덕선", js: "평덕선", typ: r("Fluffy평덕선") },
        { json: "수화선", js: "수화선", typ: r("수화선") },
        { json: "서호선", js: "서호선", typ: r("Fluffy서호선") },
        { json: "청암삼각선", js: "청암삼각선", typ: m(r("TartuGecko")) },
        { json: "장진선", js: "장진선", typ: r("북한철도성_장진선") },
        { json: "장풍선", js: "장풍선", typ: r("장풍선") },
        { json: "무산선", js: "무산선", typ: r("Fluffy무산선") },
        { json: "서상삼각선", js: "서상삼각선", typ: r("서상삼각선") },
        { json: "남양삼각선", js: "남양삼각선", typ: r("남양삼각선") },
        { json: "온성선", js: "온성선", typ: r("온성선") },
        { json: "회암선", js: "회암선", typ: r("Tentacled회암선") },
        { json: "남라진선", js: "남라진선", typ: r("남라진선") },
        { json: "송림선", js: "송림선", typ: r("Fluffy송림선") },
        { json: "청진항선", js: "청진항선", typ: r("청진항선") },
        { json: "사업소", js: "사업소", typ: m(r("TartuGecko")) },
        { json: "문덕삼각선", js: "문덕삼각선", typ: m(r("TartuGecko")) },
        { json: "선봉항선", js: "선봉항선", typ: r("선봉항선") },
    ], false),
    "Indecent경원선": o([
        { json: "원산", js: "원산", typ: r("TartuGecko") },
    ], false),
    "Hilarious경의선": o([
        { json: "립암", js: "립암", typ: r("TartuGecko") },
        { json: "문덕 분기", js: "문덕 분기", typ: r("TartuGecko") },
        { json: "석암", js: "석암", typ: r("TartuGecko") },
        { json: "서평양", js: "서평양", typ: r("TartuGecko") },
    ], false),
    "Fluffy고비선": o([
        { json: "승호 분기", js: "승호 분기", typ: r("TartuGecko") },
    ], false),
    "Fluffy구은률선": o([
        { json: "사리원", js: "사리원", typ: r("TartuGecko") },
        { json: "서사리원", js: "서사리원", typ: r("TartuGecko") },
        { json: "미곡", js: "미곡", typ: r("TartuGecko") },
        { json: "서종", js: "서종", typ: r("TartuGecko") },
        { json: "삼강", js: "삼강", typ: r("TartuGecko") },
        { json: "금산", js: "금산", typ: r("TartuGecko") },
    ], false),
    "Tentacled금강산청년선": o([
        { json: "신대리", js: "신대리", typ: r("TartuGecko") },
        { json: "고성", js: "고성", typ: r("TartuGecko") },
    ], false),
    "남동선": o([
        { json: "평남온천", js: "평남온천", typ: r("TartuGecko") },
        { json: "안석", js: "안석", typ: r("TartuGecko") },
        { json: "풍정", js: "풍정", typ: r("TartuGecko") },
        { json: "이압", js: "이압", typ: r("TartuGecko") },
        { json: "락생", js: "락생", typ: r("TartuGecko") },
        { json: "석다", js: "석다", typ: r("TartuGecko") },
        { json: "한천", js: "한천", typ: r("TartuGecko") },
        { json: "대풍", js: "대풍", typ: r("TartuGecko") },
        { json: "염전", js: "염전", typ: r("TartuGecko") },
        { json: "만풍", js: "만풍", typ: r("TartuGecko") },
        { json: "남동포", js: "남동포", typ: r("TartuGecko") },
    ], false),
    "남라진선": o([
        { json: "라진", js: "라진", typ: r("TartuGecko") },
    ], false),
    "남양삼각선": o([
        { json: "국경", js: "국경", typ: r("TartuGecko") },
        { json: "남양삼각선 분기", js: "남양삼각선 분기", typ: r("TartuGecko") },
    ], false),
    "내토선": o([
        { json: "화산", js: "화산", typ: r("TartuGecko") },
        { json: "내토", js: "내토", typ: r("TartuGecko") },
    ], false),
    "Tentacled다사도선": o([
        { json: "덕봉", js: "덕봉", typ: r("TartuGecko") },
        { json: "북중", js: "북중", typ: r("TartuGecko") },
    ], false),
    "덕달선": o([
        { json: "덕달", js: "덕달", typ: r("TartuGecko") },
        { json: "화양", js: "화양", typ: r("TartuGecko") },
        { json: "청단", js: "청단", typ: r("TartuGecko") },
        { json: "청단삼각선 분기", js: "청단삼각선 분기", typ: r("TartuGecko") },
    ], false),
    "도지리선": o([
        { json: "남포", js: "남포", typ: r("TartuGecko") },
    ], false),
    "Tentacled만포선": o([
        { json: "구장삼각선 분기", js: "구장삼각선 분기", typ: r("TartuGecko") },
    ], false),
    "매하선": o([
        { json: "금천", js: "금천", typ: r("TartuGecko") },
        { json: "매하동", js: "매하동", typ: r("TartuGecko") },
    ], false),
    "Fluffy무산선": o([
        { json: "창렬", js: "창렬", typ: r("TartuGecko") },
        { json: "금패", js: "금패", typ: r("TartuGecko") },
    ], false),
    "Fluffy문천항선": o([
        { json: "옥정", js: "옥정", typ: r("TartuGecko") },
        { json: "신흥리", js: "신흥리", typ: r("TartuGecko") },
    ], false),
    "Tentacled박천선": o([
        { json: "일원", js: "일원", typ: r("TartuGecko") },
    ], false),
    "배골선": o([
        { json: "평산", js: "평산", typ: r("TartuGecko") },
        { json: "배골", js: "배골", typ: r("TartuGecko") },
    ], false),
    "Tentacled배천선": o([
        { json: "화산", js: "화산", typ: r("TartuGecko") },
        { json: "심계", js: "심계", typ: r("TartuGecko") },
        { json: "무구", js: "무구", typ: r("TartuGecko") },
        { json: "갈산", js: "갈산", typ: r("TartuGecko") },
        { json: "장방삼각선 분기", js: "장방삼각선 분기", typ: r("TartuGecko") },
        { json: "청단 분기", js: "청단 분기", typ: r("TartuGecko") },
    ], false),
    "Tentacled백두산청년선": o([
        { json: "합수", js: "합수", typ: r("TartuGecko") },
        { json: "봉암", js: "봉암", typ: r("TartuGecko") },
    ], false),
    "Indigo백무선": o([
        { json: "굴송", js: "굴송", typ: r("TartuGecko") },
        { json: "상경평", js: "상경평", typ: r("TartuGecko") },
        { json: "하경평", js: "하경평", typ: r("TartuGecko") },
        { json: "유평동", js: "유평동", typ: r("TartuGecko") },
        { json: "상단", js: "상단", typ: r("TartuGecko") },
        { json: "삼사", js: "삼사", typ: r("TartuGecko") },
    ], false),
    "Fluffy보천선": o([
        { json: "가림", js: "가림", typ: r("TartuGecko") },
        { json: "보천", js: "보천", typ: r("TartuGecko") },
        { json: "곤장덕", js: "곤장덕", typ: r("TartuGecko") },
        { json: "내곡", js: "내곡", typ: r("TartuGecko") },
        { json: "온수", js: "온수", typ: r("TartuGecko") },
        { json: "대진", js: "대진", typ: r("TartuGecko") },
        { json: "려수", js: "려수", typ: r("TartuGecko") },
        { json: "평물", js: "평물", typ: r("TartuGecko") },
    ], false),
    "Sticky부포선": o([
        { json: "룡연", js: "룡연", typ: r("TartuGecko") },
    ], false),
    "북한철도성_사해선": o([
        { json: "신원", js: "신원", typ: r("TartuGecko") },
        { json: "미력", js: "미력", typ: r("TartuGecko") },
        { json: "장수산", js: "장수산", typ: r("TartuGecko") },
        { json: "화산", js: "화산", typ: r("TartuGecko") },
        { json: "석탄", js: "석탄", typ: r("TartuGecko") },
        { json: "광탄", js: "광탄", typ: r("TartuGecko") },
        { json: "삼강", js: "삼강", typ: r("TartuGecko") },
    ], false),
    "삼등탄광선": o([
        { json: "삼등", js: "삼등", typ: r("TartuGecko") },
        { json: "대리", js: "대리", typ: r("TartuGecko") },
    ], false),
    "서상삼각선": o([
        { json: "서상", js: "서상", typ: r("TartuGecko") },
        { json: "서상삼각선 분기", js: "서상삼각선 분기", typ: r("TartuGecko") },
    ], false),
    "서해리선": o([
        { json: "룡정", js: "룡정", typ: r("TartuGecko") },
        { json: "철광", js: "철광", typ: r("TartuGecko") },
    ], false),
    "Fluffy서호선": o([
        { json: "영대", js: "영대", typ: r("TartuGecko") },
        { json: "룡흥", js: "룡흥", typ: r("TartuGecko") },
        { json: "신구룡", js: "신구룡", typ: r("TartuGecko") },
        { json: "구룡", js: "구룡", typ: r("TartuGecko") },
        { json: "축항", js: "축항", typ: r("TartuGecko") },
        { json: "동흥남", js: "동흥남", typ: r("TartuGecko") },
        { json: "내호", js: "내호", typ: r("TartuGecko") },
        { json: "서함흥", js: "서함흥", typ: r("TartuGecko") },
        { json: "함흥", js: "함흥", typ: r("TartuGecko") },
    ], false),
    "선봉항선": o([
        { json: "선봉", js: "선봉", typ: r("TartuGecko") },
        { json: "선봉항", js: "선봉항", typ: r("TartuGecko") },
    ], false),
    "Fluffy송림선": o([
        { json: "송림", js: "송림", typ: r("TartuGecko") },
    ], false),
    "수화선": o([
        { json: "남덕천", js: "남덕천", typ: r("TartuGecko") },
        { json: "수화", js: "수화", typ: r("TartuGecko") },
    ], false),
    "신창삼각선": o([
        { json: "신창", js: "신창", typ: r("TartuGecko") },
        { json: "신창심각선 분기", js: "신창심각선 분기", typ: r("TartuGecko") },
    ], false),
    "온성선": o([
        { json: "온성", js: "온성", typ: r("TartuGecko") },
        { json: "온탄", js: "온탄", typ: r("TartuGecko") },
        { json: "주원", js: "주원", typ: r("TartuGecko") },
    ], false),
    "Sticky옹진선": o([
        { json: "랭정", js: "랭정", typ: r("TartuGecko") },
        { json: "국봉", js: "국봉", typ: r("TartuGecko") },
        { json: "청양", js: "청양", typ: r("TartuGecko") },
        { json: "해주", js: "해주", typ: r("TartuGecko") },
        { json: "서해주", js: "서해주", typ: r("TartuGecko") },
    ], false),
    "운산선": o([
        { json: "북신현", js: "북신현", typ: r("TartuGecko") },
        { json: "로현", js: "로현", typ: r("TartuGecko") },
        { json: "상서", js: "상서", typ: r("TartuGecko") },
        { json: "운대산", js: "운대산", typ: r("TartuGecko") },
        { json: "평북운산", js: "평북운산", typ: r("TartuGecko") },
        { json: "방어", js: "방어", typ: r("TartuGecko") },
        { json: "삼산", js: "삼산", typ: r("TartuGecko") },
    ], false),
    "Fluffy은률선": o([
        { json: "문화", js: "문화", typ: r("TartuGecko") },
        { json: "창촌", js: "창촌", typ: r("TartuGecko") },
        { json: "황해룡문", js: "황해룡문", typ: r("TartuGecko") },
        { json: "신천온천", js: "신천온천", typ: r("TartuGecko") },
        { json: "신천", js: "신천", typ: r("TartuGecko") },
        { json: "삼천온천", js: "삼천온천", typ: r("TartuGecko") },
        { json: "궁흥", js: "궁흥", typ: r("TartuGecko") },
        { json: "야촌", js: "야촌", typ: r("TartuGecko") },
    ], false),
    "Tentacled일탄선": o([
        { json: "로동", js: "로동", typ: r("TartuGecko") },
    ], false),
    "Fluffy잠진리선": o([
        { json: "강선", js: "강선", typ: r("TartuGecko") },
        { json: "잠진리", js: "잠진리", typ: r("TartuGecko") },
    ], false),
    "장방삼각선": o([
        { json: "매화", js: "매화", typ: r("TartuGecko") },
        { json: "장방삼각선 분기", js: "장방삼각선 분기", typ: r("TartuGecko") },
    ], false),
    "Fluffy장연선": o([
        { json: "락산", js: "락산", typ: r("TartuGecko") },
        { json: "락도", js: "락도", typ: r("TartuGecko") },
    ], false),
    "북한철도성_장진선": o([
        { json: "오로", js: "오로", typ: r("TartuGecko") },
        { json: "동정", js: "동정", typ: r("TartuGecko") },
    ], false),
    "장풍선": o([
        { json: "풍상", js: "풍상", typ: r("TartuGecko") },
        { json: "장풍", js: "장풍", typ: r("TartuGecko") },
    ], false),
    "Fluffy직동탄광선": o([
        { json: "부흥", js: "부흥", typ: r("TartuGecko") },
    ], false),
    "Fluffy천성탄광선": o([
        { json: "신창심각선 분기", js: "신창심각선 분기", typ: r("TartuGecko") },
    ], false),
    "청남선": o([
        { json: "룡림 분기", js: "룡림 분기", typ: r("TartuGecko") },
        { json: "룡림", js: "룡림", typ: r("TartuGecko") },
        { json: "칠리", js: "칠리", typ: r("TartuGecko") },
        { json: "원흥", js: "원흥", typ: r("TartuGecko") },
        { json: "창동", js: "창동", typ: r("TartuGecko") },
        { json: "청남선 분기", js: "청남선 분기", typ: r("TartuGecko") },
    ], false),
    "Tentacled청년이천선": o([
        { json: "하안", js: "하안", typ: r("TartuGecko") },
        { json: "평산 분기", js: "평산 분기", typ: r("TartuGecko") },
    ], false),
    "Fluffy청진조차장선": o([
        { json: "강덕", js: "강덕", typ: r("TartuGecko") },
        { json: "송향", js: "송향", typ: r("TartuGecko") },
    ], false),
    "청진항선": o([
        { json: "청진", js: "청진", typ: r("TartuGecko") },
    ], false),
    "Tentacled평남선": o([
        { json: "대성", js: "대성", typ: r("TartuGecko") },
        { json: "진지", js: "진지", typ: r("TartuGecko") },
        { json: "대보", js: "대보", typ: r("TartuGecko") },
        { json: "해산", js: "해산", typ: r("TartuGecko") },
    ], false),
    "Fluffy평덕선": o([
        { json: "순덕", js: "순덕", typ: r("TartuGecko") },
        { json: "구단", js: "구단", typ: r("TartuGecko") },
    ], false),
    "Sticky평라선": o([
        { json: "륙대동", js: "륙대동", typ: r("TartuGecko") },
        { json: "려호", js: "려호", typ: r("TartuGecko") },
        { json: "삼호", js: "삼호", typ: r("TartuGecko") },
        { json: "속후", js: "속후", typ: r("TartuGecko") },
        { json: "로동", js: "로동", typ: r("TartuGecko") },
        { json: "배산점", js: "배산점", typ: r("TartuGecko") },
        { json: "향동", js: "향동", typ: r("TartuGecko") },
        { json: "중호", js: "중호", typ: r("TartuGecko") },
        { json: "청암 분기", js: "청암 분기", typ: r("TartuGecko") },
        { json: "함흥", js: "함흥", typ: r("TartuGecko") },
        { json: "청진", js: "청진", typ: r("TartuGecko") },
    ], false),
    "Tentacled평북선": o([
        { json: "고안", js: "고안", typ: r("TartuGecko") },
    ], false),
    "평양덕산선": o([
        { json: "송가", js: "송가", typ: r("TartuGecko") },
        { json: "덕산", js: "덕산", typ: r("TartuGecko") },
    ], false),
    "하성선": o([
        { json: "신덕", js: "신덕", typ: r("TartuGecko") },
        { json: "구하성", js: "구하성", typ: r("TartuGecko") },
        { json: "신원", js: "신원", typ: r("TartuGecko") },
    ], false),
    "Fluffy허천선": o([
        { json: "장덕", js: "장덕", typ: r("TartuGecko") },
        { json: "포치리", js: "포치리", typ: r("TartuGecko") },
        { json: "동대", js: "동대", typ: r("TartuGecko") },
    ], false),
    "Tentacled황해청년선": o([
        { json: "매화", js: "매화", typ: r("TartuGecko") },
        { json: "염탄", js: "염탄", typ: r("TartuGecko") },
        { json: "영양", js: "영양", typ: r("TartuGecko") },
    ], false),
    "Sticky회령탄광선": o([
        { json: "명유", js: "명유", typ: r("TartuGecko") },
        { json: "신계림", js: "신계림", typ: r("TartuGecko") },
    ], false),
    "Tentacled회암선": o([
        { json: "은덕천", js: "은덕천", typ: r("TartuGecko") },
    ], false),
    "폐지_사업소": o([
        { json: "서울역그릴", js: "서울역그릴", typ: r("TartuGecko") },
    ], false),
    "폐지_생기령점토석탄주식회사": o([
        { json: "생기령 점토궤도", js: "생기령 점토궤도", typ: r("생기령점토궤도") },
    ], false),
    "생기령점토궤도": o([
        { json: "경성", js: "경성", typ: r("TartuGecko") },
        { json: "생기령", js: "생기령", typ: r("TartuGecko") },
    ], false),
    "폐지_서울특별시": o([
        { json: "서울전차 서대문선", js: "서울전차 서대문선", typ: m(r("TartuGecko")) },
        { json: "서울전차 영천선", js: "서울전차 영천선", typ: m(r("TartuGecko")) },
        { json: "서울전차 마포선", js: "서울전차 마포선", typ: m(r("TartuGecko")) },
        { json: "서울전차 의주로선", js: "서울전차 의주로선", typ: m(r("TartuGecko")) },
        { json: "서울전차 세종로선", js: "서울전차 세종로선", typ: m(r("TartuGecko")) },
        { json: "서울전차 효자동선", js: "서울전차 효자동선", typ: m(r("TartuGecko")) },
        { json: "서울전차 광화문선", js: "서울전차 광화문선", typ: m(r("TartuGecko")) },
        { json: "서울전차 종로선", js: "서울전차 종로선", typ: m(r("TartuGecko")) },
        { json: "서울전차 청량리선", js: "서울전차 청량리선", typ: m(r("TartuGecko")) },
        { json: "서울전차 종로삼각선", js: "서울전차 종로삼각선", typ: m(r("TartuGecko")) },
        { json: "서울전차 경용선", js: "서울전차 경용선", typ: m(r("TartuGecko")) },
        { json: "서울전차 노량진선", js: "서울전차 노량진선", typ: m(r("TartuGecko")) },
        { json: "서울전차 영등포선", js: "서울전차 영등포선", typ: m(r("TartuGecko")) },
        { json: "서울전차 구용산선", js: "서울전차 구용산선", typ: m(r("TartuGecko")) },
        { json: "서울전차 을지로선", js: "서울전차 을지로선", typ: m(r("TartuGecko")) },
        { json: "서울전차 동대문삼각선", js: "서울전차 동대문삼각선", typ: m(r("TartuGecko")) },
        { json: "서울전차 을지로삼각선", js: "서울전차 을지로삼각선", typ: m(r("TartuGecko")) },
        { json: "서울전차 돈암동선", js: "서울전차 돈암동선", typ: m(r("TartuGecko")) },
        { json: "서울전차 창경원선", js: "서울전차 창경원선", typ: m(r("TartuGecko")) },
        { json: "서울전차 충무로선", js: "서울전차 충무로선", typ: m(r("TartuGecko")) },
        { json: "서울전차 왕십리선", js: "서울전차 왕십리선", typ: m(r("TartuGecko")) },
        { json: "서울전차 마포차고선", js: "서울전차 마포차고선", typ: m(r("TartuGecko")) },
        { json: "서울전차 영등포차고선", js: "서울전차 영등포차고선", typ: m(r("TartuGecko")) },
        { json: "서울전차 삼각지차고선", js: "서울전차 삼각지차고선", typ: m(r("TartuGecko")) },
        { json: "서울전차 동대문차고선", js: "서울전차 동대문차고선", typ: m(r("TartuGecko")) },
        { json: "사업소", js: "사업소", typ: r("서울특별시_사업소") },
        { json: "경성궤도 본선", js: "경성궤도 본선", typ: m(r("TartuGecko")) },
        { json: "경성궤도 광장리선", js: "경성궤도 광장리선", typ: r("서울특별시_경성궤도광장리선") },
        { json: "서울전차 용산역전선", js: "서울전차 용산역전선", typ: m(r("TartuGecko")) },
    ], false),
    "서울특별시_경성궤도광장리선": o([
        { json: "상후원", js: "상후원", typ: r("TartuGecko") },
        { json: "화양", js: "화양", typ: r("TartuGecko") },
        { json: "모진", js: "모진", typ: r("TartuGecko") },
        { json: "구의", js: "구의", typ: r("TartuGecko") },
        { json: "광장", js: "광장", typ: r("TartuGecko") },
    ], false),
    "서울특별시_사업소": o([
        { json: "서울특별시전차운수사업소", js: "서울특별시전차운수사업소", typ: r("TartuGecko") },
    ], false),
    "폐지_송도해상케이블카": o([
        { json: "(구)송도해상케이블카", js: "(구)송도해상케이블카", typ: m(r("TartuGecko")) },
    ], false),
    "신흥철도주식회사": o([
        { json: "장진선", js: "장진선", typ: r("신흥철도주식회사_장진선") },
        { json: "신흥선", js: "신흥선", typ: r("신흥철도주식회사_신흥선") },
    ], false),
    "신흥철도주식회사_신흥선": o([
        { json: "흑수", js: "흑수", typ: r("TartuGecko") },
        { json: "호안", js: "호안", typ: r("TartuGecko") },
    ], false),
    "신흥철도주식회사_장진선": o([
        { json: "신대", js: "신대", typ: r("TartuGecko") },
        { json: "중남", js: "중남", typ: r("TartuGecko") },
        { json: "구진", js: "구진", typ: r("TartuGecko") },
    ], false),
    "영무궤도": o([
        { json: "영무궤도", js: "영무궤도", typ: r("병원_Class") },
    ], false),
    "폐지_왜관궤도주식회사": o([
        { json: "왜관궤도", js: "왜관궤도", typ: r("왜관궤도") },
    ], false),
    "왜관궤도": o([
        { json: "왜관", js: "왜관", typ: r("TartuGecko") },
        { json: "낙동강안", js: "낙동강안", typ: r("TartuGecko") },
    ], false),
    "운수성철도국": o([
        { json: "부산", js: "부산", typ: r("TartuGecko") },
    ], false),
    "재조선미육군사령부군정청운수부": o([
        { json: "병원", js: "병원", typ: r("재조선미육군사령부군정청운수부_병원") },
    ], false),
    "재조선미육군사령부군정청운수부_병원": o([
        { json: "부산철도의무실", js: "부산철도의무실", typ: r("TartuGecko") },
    ], false),
    "폐지_제주도순환궤도": o([
        { json: "제주도순환궤도", js: "제주도순환궤도", typ: r("제주도순환궤도_제주도순환궤도") },
        { json: "제주도순환궤도 지선", js: "제주도순환궤도 지선", typ: r("제주도순환궤도지선_Class") },
    ], false),
    "제주도순환궤도_제주도순환궤도": o([
        { json: "제주", js: "제주", typ: r("TartuGecko") },
        { json: "김녕", js: "김녕", typ: r("TartuGecko") },
        { json: "조천", js: "조천", typ: r("TartuGecko") },
        { json: "사수", js: "사수", typ: r("TartuGecko") },
    ], false),
    "폐지_조선경남철도주식회사": o([
        { json: "안성선", js: "안성선", typ: r("조선경남철도주식회사_안성선") },
        { json: "장항화물선", js: "장항화물선", typ: r("조선경남철도주식회사_장항화물선") },
        { json: "장항-군산 연락선", js: "장항-군산 연락선", typ: m(r("TartuGecko")) },
        { json: "장항선", js: "장항선", typ: r("조선경남철도주식회사_장항선") },
        { json: "조선경남철도 승합자동차선", js: "조선경남철도 승합자동차선", typ: m(r("TartuGecko")) },
    ], false),
    "조선경남철도주식회사_안성선": o([
        { json: "마전", js: "마전", typ: r("TartuGecko") },
        { json: "삼죽", js: "삼죽", typ: r("TartuGecko") },
        { json: "죽산", js: "죽산", typ: r("TartuGecko") },
        { json: "매산", js: "매산", typ: r("TartuGecko") },
        { json: "장호원", js: "장호원", typ: r("TartuGecko") },
        { json: "용월", js: "용월", typ: r("TartuGecko") },
        { json: "죽산읍내", js: "죽산읍내", typ: r("TartuGecko") },
        { json: "주천", js: "주천", typ: r("TartuGecko") },
        { json: "행죽", js: "행죽", typ: r("TartuGecko") },
        { json: "대서", js: "대서", typ: r("TartuGecko") },
        { json: "안성읍내", js: "안성읍내", typ: r("TartuGecko") },
    ], false),
    "조선경남철도주식회사_장항선": o([
        { json: "기동", js: "기동", typ: r("TartuGecko") },
        { json: "온동", js: "온동", typ: r("TartuGecko") },
    ], false),
    "조선경남철도주식회사_장항화물선": o([
        { json: "장항잔교", js: "장항잔교", typ: r("TartuGecko") },
    ], false),
    "조선와사전기주식회사": o([
        { json: "부산전차 광복동선", js: "부산전차 광복동선", typ: m(r("TartuGecko")) },
    ], false),
    "폐지_조선전업주식회사": o([
        { json: "영월광업소 삭도", js: "영월광업소 삭도", typ: m(r("TartuGecko")) },
    ], false),
    "폐지_조선철도주식회사": o([
        { json: "경북선", js: "경북선", typ: r("조선철도주식회사_경북선") },
        { json: "구 경북선", js: "구 경북선", typ: r("구경북선") },
        { json: "수인선", js: "수인선", typ: r("조선철도주식회사_수인선") },
        { json: "구 은률선", js: "구 은률선", typ: r("조선철도주식회사_구은률선") },
        { json: "사해선", js: "사해선", typ: r("Fluffy사해선") },
        { json: "평덕선", js: "평덕선", typ: r("조선철도주식회사_평덕선") },
        { json: "장진선", js: "장진선", typ: r("조선철도주식회사_장진선") },
        { json: "무산선", js: "무산선", typ: r("조선철도주식회사_무산선") },
    ], false),
    "조선철도주식회사_경북선": o([
        { json: "도암", js: "도암", typ: r("TartuGecko") },
        { json: "남산", js: "남산", typ: r("TartuGecko") },
    ], false),
    "구경북선": o([
        { json: "명동", js: "명동", typ: r("TartuGecko") },
        { json: "경북풍산", js: "경북풍산", typ: r("TartuGecko") },
        { json: "호명", js: "호명", typ: r("TartuGecko") },
        { json: "안동", js: "안동", typ: r("TartuGecko") },
        { json: "고평", js: "고평", typ: r("TartuGecko") },
    ], false),
    "조선철도주식회사_구은률선": o([
        { json: "양산", js: "양산", typ: r("TartuGecko") },
    ], false),
    "조선철도주식회사_무산선": o([
        { json: "신참", js: "신참", typ: r("TartuGecko") },
    ], false),
    "Fluffy사해선": o([
        { json: "은정", js: "은정", typ: r("TartuGecko") },
    ], false),
    "조선철도주식회사_수인선": o([
        { json: "문학", js: "문학", typ: r("TartuGecko") },
        { json: "오목", js: "오목", typ: r("TartuGecko") },
        { json: "빈정", js: "빈정", typ: r("TartuGecko") },
    ], false),
    "조선철도주식회사_장진선": o([
        { json: "동양", js: "동양", typ: r("TartuGecko") },
    ], false),
    "조선철도주식회사_평덕선": o([
        { json: "사동", js: "사동", typ: r("TartuGecko") },
        { json: "선교리", js: "선교리", typ: r("TartuGecko") },
    ], false),
    "폐지_조선총독부교통국": o([
        { json: "군산화물선", js: "군산화물선", typ: r("조선총독부교통국_군산화물선") },
        { json: "당인리선", js: "당인리선", typ: r("당인리선") },
        { json: "구 광주선", js: "구 광주선", typ: r("구광주선") },
        { json: "경부선", js: "경부선", typ: r("조선총독부교통국_경부선") },
        { json: "경원선", js: "경원선", typ: m(r("TartuGecko")) },
        { json: "전라선", js: "전라선", typ: m(r("TartuGecko")) },
        { json: "경의선", js: "경의선", typ: r("조선총독부교통국_경의선") },
        { json: "용산선", js: "용산선", typ: m(r("TartuGecko")) },
        { json: "동해중부선", js: "동해중부선", typ: r("Tentacled동해중부선") },
        { json: "대삼선", js: "대삼선", typ: r("대삼선") },
        { json: "동해북부선", js: "동해북부선", typ: m(r("TartuGecko")) },
        { json: "동해남부선", js: "동해남부선", typ: r("조선총독부교통국_동해남부선") },
        { json: "경전선", js: "경전선", typ: r("조선총독부교통국_경전선") },
        { json: "함북선", js: "함북선", typ: r("조선총독부교통국_함북선") },
        { json: "망월", js: "망월", typ: r("TartuGecko") },
    ], false),
    "조선총독부교통국_경부선": o([
        { json: "부산잔교", js: "부산잔교", typ: r("TartuGecko") },
        { json: "유천", js: "유천", typ: r("TartuGecko") },
    ], false),
    "조선총독부교통국_경의선": o([
        { json: "서소문", js: "서소문", typ: r("TartuGecko") },
        { json: "아현리", js: "아현리", typ: r("TartuGecko") },
        { json: "수정", js: "수정", typ: r("TartuGecko") },
        { json: "당령", js: "당령", typ: r("TartuGecko") },
    ], false),
    "조선총독부교통국_경전선": o([
        { json: "벽도", js: "벽도", typ: r("TartuGecko") },
    ], false),
    "구광주선": o([
        { json: "광주", js: "광주", typ: r("TartuGecko") },
        { json: "담양", js: "담양", typ: r("TartuGecko") },
        { json: "장산", js: "장산", typ: r("TartuGecko") },
        { json: "마항", js: "마항", typ: r("TartuGecko") },
        { json: "순창", js: "순창", typ: r("TartuGecko") },
        { json: "대가", js: "대가", typ: r("TartuGecko") },
        { json: "금지", js: "금지", typ: r("TartuGecko") },
    ], false),
    "조선총독부교통국_군산화물선": o([
        { json: "군산부두", js: "군산부두", typ: r("TartuGecko") },
    ], false),
    "당인리선": o([
        { json: "세교리", js: "세교리", typ: r("TartuGecko") },
    ], false),
    "대삼선": o([
        { json: "대전", js: "대전", typ: r("TartuGecko") },
        { json: "진주", js: "진주", typ: r("TartuGecko") },
        { json: "삼천포", js: "삼천포", typ: r("TartuGecko") },
    ], false),
    "조선총독부교통국_동해남부선": o([
        { json: "포항", js: "포항", typ: r("TartuGecko") },
        { json: "부조", js: "부조", typ: r("TartuGecko") },
        { json: "금장", js: "금장", typ: r("TartuGecko") },
    ], false),
    "Tentacled동해중부선": o([
        { json: "흥해", js: "흥해", typ: r("TartuGecko") },
        { json: "청하", js: "청하", typ: r("TartuGecko") },
        { json: "포항", js: "포항", typ: r("TartuGecko") },
        { json: "학산", js: "학산", typ: r("TartuGecko") },
    ], false),
    "조선총독부교통국_함북선": o([
        { json: "소암", js: "소암", typ: r("TartuGecko") },
    ], false),
    "폐지_조선총독부철도국": o([
        { json: "중앙선", js: "중앙선", typ: r("조선총독부철도국_중앙선") },
        { json: "대구선", js: "대구선", typ: r("조선총독부철도국_대구선") },
        { json: "군산화물선", js: "군산화물선", typ: r("조선총독부철도국_군산화물선") },
        { json: "경부선", js: "경부선", typ: r("조선총독부철도국_경부선") },
        { json: "경의선", js: "경의선", typ: r("조선총독부철도국_경의선") },
        { json: "신촌연결선", js: "신촌연결선", typ: r("조선총독부철도국_신촌연결선") },
        { json: "병원", js: "병원", typ: r("병원_Class") },
        { json: "사업소", js: "사업소", typ: m(r("TartuGecko")) },
        { json: "전라선", js: "전라선", typ: r("조선총독부철도국_전라선") },
        { json: "동해남부선", js: "동해남부선", typ: r("조선총독부철도국_동해남부선") },
        { json: "구 대구선", js: "구 대구선", typ: r("조선총독부철도국_구대구선") },
        { json: "마포지선궤도", js: "마포지선궤도", typ: r("마포지선궤도") },
        { json: "월미도지선", js: "월미도지선", typ: r("월미도지선") },
        { json: "조선총독부 철도국 자동차 곡순선", js: "조선총독부 철도국 자동차 곡순선", typ: m(r("TartuGecko")) },
        { json: "조선총독부 철도국 자동차 동복선", js: "조선총독부 철도국 자동차 동복선", typ: r("조선총독부철도국자동차동복선") },
        { json: "조선총독부 철도국 자동차 화순선", js: "조선총독부 철도국 자동차 화순선", typ: r("조선총독부철도국자동차화순선") },
        { json: "조선총독부 철도국 자동차 광려본선", js: "조선총독부 철도국 자동차 광려본선", typ: m(r("TartuGecko")) },
        { json: "평라선", js: "평라선", typ: r("조선총독부철도국_평라선") },
        { json: "강덕선", js: "강덕선", typ: r("조선총독부철도국_강덕선") },
        { json: "벽란도지선", js: "벽란도지선", typ: r("벽란도지선") },
        { json: "신안주지선", js: "신안주지선", typ: m(r("TartuGecko")) },
        { json: "함북선", js: "함북선", typ: m(r("TartuGecko")) },
        { json: "강안선", js: "강안선", typ: r("조선총독부철도국_강안선") },
        { json: "조선총독부 철도국 연락자동차 청진웅기선", js: "조선총독부 철도국 연락자동차 청진웅기선", typ: r("조선총독부철도국연락자동차청진웅기선") },
        { json: "조선총독부 철도국 연락자동차 종성경원선", js: "조선총독부 철도국 연락자동차 종성경원선", typ: m(r("TartuGecko")) },
        { json: "조선총독부 철도국 연락자동차 종성온성선", js: "조선총독부 철도국 연락자동차 종성온성선", typ: r("조선총독부철도국연락자동차종성온성선") },
        { json: "조선총독부 철도국 정기항로 웅기청진선", js: "조선총독부 철도국 정기항로 웅기청진선", typ: r("조선총독부철도국정기항로웅기청진선") },
        { json: "조선총독부 철도국 연락자동차 경원훈춘선", js: "조선총독부 철도국 연락자동차 경원훈춘선", typ: r("조선총독부철도국연락자동차경원훈춘선") },
    ], false),
    "조선총독부철도국_강덕선": o([
        { json: "강덕", js: "강덕", typ: r("TartuGecko") },
    ], false),
    "조선총독부철도국_강안선": o([
        { json: "빈정", js: "빈정", typ: r("TartuGecko") },
    ], false),
    "조선총독부철도국_경부선": o([
        { json: "금오산", js: "금오산", typ: r("TartuGecko") },
    ], false),
    "조선총독부철도국_경의선": o([
        { json: "연희", js: "연희", typ: r("TartuGecko") },
        { json: "임진", js: "임진", typ: r("TartuGecko") },
    ], false),
    "조선총독부철도국_구대구선": o([
        { json: "반야월", js: "반야월", typ: r("TartuGecko") },
    ], false),
    "조선총독부철도국_군산화물선": o([
        { json: "군산항", js: "군산항", typ: r("TartuGecko") },
    ], false),
    "조선총독부철도국_대구선": o([
        { json: "하양", js: "하양", typ: r("TartuGecko") },
        { json: "영천", js: "영천", typ: r("TartuGecko") },
    ], false),
    "조선총독부철도국_동해남부선": o([
        { json: "울산", js: "울산", typ: r("TartuGecko") },
        { json: "병영", js: "병영", typ: r("TartuGecko") },
        { json: "호계", js: "호계", typ: r("TartuGecko") },
        { json: "모화", js: "모화", typ: r("TartuGecko") },
        { json: "입실", js: "입실", typ: r("TartuGecko") },
        { json: "불국사", js: "불국사", typ: r("TartuGecko") },
        { json: "동방", js: "동방", typ: r("TartuGecko") },
        { json: "서면", js: "서면", typ: r("TartuGecko") },
    ], false),
    "마포지선궤도": o([
        { json: "마포물양장", js: "마포물양장", typ: r("TartuGecko") },
    ], false),
    "벽란도지선": o([
        { json: "토성", js: "토성", typ: r("TartuGecko") },
        { json: "벽란도물양장", js: "벽란도물양장", typ: r("TartuGecko") },
    ], false),
    "조선총독부철도국_신촌연결선": o([
        { json: "연희", js: "연희", typ: r("TartuGecko") },
    ], false),
    "월미도지선": o([
        { json: "인천", js: "인천", typ: r("TartuGecko") },
        { json: "월미도 가상륙장", js: "월미도 가상륙장", typ: r("TartuGecko") },
    ], false),
    "조선총독부철도국_전라선": o([
        { json: "이리", js: "이리", typ: r("TartuGecko") },
        { json: "구이리", js: "구이리", typ: r("TartuGecko") },
        { json: "대장", js: "대장", typ: r("TartuGecko") },
        { json: "삼례", js: "삼례", typ: r("TartuGecko") },
        { json: "전주", js: "전주", typ: r("TartuGecko") },
        { json: "동산", js: "동산", typ: r("TartuGecko") },
    ], false),
    "조선총독부철도국연락자동차경원훈춘선": o([
        { json: "경원읍내", js: "경원읍내", typ: r("TartuGecko") },
    ], false),
    "조선총독부철도국연락자동차종성온성선": o([
        { json: "종성", js: "종성", typ: r("TartuGecko") },
        { json: "온성", js: "온성", typ: r("TartuGecko") },
    ], false),
    "조선총독부철도국연락자동차청진웅기선": o([
        { json: "이진", js: "이진", typ: r("TartuGecko") },
        { json: "청진", js: "청진", typ: r("TartuGecko") },
        { json: "라진", js: "라진", typ: r("TartuGecko") },
        { json: "웅기", js: "웅기", typ: r("TartuGecko") },
    ], false),
    "조선총독부철도국자동차동복선": o([
        { json: "구암교", js: "구암교", typ: r("TartuGecko") },
        { json: "묘치", js: "묘치", typ: r("TartuGecko") },
        { json: "동복", js: "동복", typ: r("TartuGecko") },
    ], false),
    "조선총독부철도국자동차화순선": o([
        { json: "화순읍", js: "화순읍", typ: r("TartuGecko") },
        { json: "화순", js: "화순", typ: r("TartuGecko") },
    ], false),
    "조선총독부철도국정기항로웅기청진선": o([
        { json: "웅기", js: "웅기", typ: r("TartuGecko") },
        { json: "라진", js: "라진", typ: r("TartuGecko") },
        { json: "청진", js: "청진", typ: r("TartuGecko") },
    ], false),
    "조선총독부철도국_중앙선": o([
        { json: "임포", js: "임포", typ: r("TartuGecko") },
        { json: "서악", js: "서악", typ: r("TartuGecko") },
        { json: "경주신호장", js: "경주신호장", typ: r("TartuGecko") },
        { json: "모량", js: "모량", typ: r("TartuGecko") },
        { json: "경주 제2신호장", js: "경주 제2신호장", typ: r("TartuGecko") },
        { json: "건천", js: "건천", typ: r("TartuGecko") },
        { json: "아화", js: "아화", typ: r("TartuGecko") },
        { json: "영천", js: "영천", typ: r("TartuGecko") },
    ], false),
    "조선총독부철도국_평라선": o([
        { json: "흥남본정", js: "흥남본정", typ: r("TartuGecko") },
        { json: "의호", js: "의호", typ: r("TartuGecko") },
    ], false),
    "조선평안철도주식회사": o([
        { json: "평남선", js: "평남선", typ: r("조선평안철도주식회사_평남선") },
    ], false),
    "조선평안철도주식회사_평남선": o([
        { json: "조촌", js: "조촌", typ: r("TartuGecko") },
    ], false),
    "폐지_주식회사강원랜드": o([
        { json: "하이원추추파크 전용선", js: "하이원추추파크 전용선", typ: r("Fluffy하이원추추파크전용선") },
    ], false),
    "Fluffy하이원추추파크전용선": o([
        { json: "통리", js: "통리", typ: r("TartuGecko") },
    ], false),
    "폐지_주식회사삼척탄좌개발": o([
        { json: "정암탄광 전용철도", js: "정암탄광 전용철도", typ: r("정암탄광전용철도") },
    ], false),
    "정암탄광전용철도": o([
        { json: "고한", js: "고한", typ: r("TartuGecko") },
        { json: "정암탄광", js: "정암탄광", typ: r("TartuGecko") },
    ], false),
    "주식회사포스코": o([
        { json: "괴동선", js: "괴동선", typ: r("주식회사포스코_괴동선") },
    ], false),
    "주식회사포스코_괴동선": o([
        { json: "제철", js: "제철", typ: r("TartuGecko") },
    ], false),
    "폐지_평양시려객운수종합기업소": o([
        { json: "평양 궤도전차 1호선", js: "평양 궤도전차 1호선", typ: r("평양궤도전차1호선") },
    ], false),
    "평양궤도전차1호선": o([
        { json: "선교", js: "선교", typ: r("TartuGecko") },
        { json: "송신", js: "송신", typ: r("TartuGecko") },
        { json: "송신궤도전차사업소", js: "송신궤도전차사업소", typ: r("TartuGecko") },
    ], false),
    "폐지_한국중부발전주식회사": o([
        { json: "서천화력선", js: "서천화력선", typ: r("서천화력선") },
    ], false),
    "서천화력선": o([
        { json: "동백정", js: "동백정", typ: r("TartuGecko") },
        { json: "춘장대", js: "춘장대", typ: r("TartuGecko") },
        { json: "원두", js: "원두", typ: r("TartuGecko") },
        { json: "간치", js: "간치", typ: r("TartuGecko") },
    ], false),
    "한성전기회사": o([
        { json: "서울전차 의주로선", js: "서울전차 의주로선", typ: m(r("TartuGecko")) },
    ], false),
    "폐지_함경북도": o([
        { json: "경성 라남 수압궤도", js: "경성 라남 수압궤도", typ: r("경성라남수압궤도") },
    ], false),
    "경성라남수압궤도": o([
        { json: "청진항", js: "청진항", typ: r("TartuGecko") },
        { json: "청진역", js: "청진역", typ: r("TartuGecko") },
        { json: "신향", js: "신향", typ: r("TartuGecko") },
        { json: "경성", js: "경성", typ: r("TartuGecko") },
        { json: "수성", js: "수성", typ: r("TartuGecko") },
        { json: "수성역", js: "수성역", typ: r("TartuGecko") },
        { json: "입암", js: "입암", typ: r("TartuGecko") },
    ], false),
    "폐지_함평궤도주식회사": o([
        { json: "함평궤도", js: "함평궤도", typ: r("함평궤도") },
    ], false),
    "함평궤도": o([
        { json: "학교", js: "학교", typ: r("TartuGecko") },
        { json: "함평", js: "함평", typ: r("TartuGecko") },
        { json: "화산", js: "화산", typ: r("TartuGecko") },
    ], false),
    "전기시설": o([
        { json: "폐지", js: "폐지", typ: r("전기시설_폐지") },
        { json: "영업중", js: "영업중", typ: r("전기시설_영업중") },
    ], false),
    "전기시설_영업중": o([
        { json: "한국중부발전주식회사", js: "한국중부발전주식회사", typ: r("영업중_한국중부발전주식회사") },
    ], false),
    "영업중_한국중부발전주식회사": o([
        { json: "사업소", js: "사업소", typ: r("한국중부발전주식회사_사업소") },
    ], false),
    "한국중부발전주식회사_사업소": o([
        { json: "서울화력발전소", js: "서울화력발전소", typ: r("TartuGecko") },
    ], false),
    "전기시설_폐지": o([
        { json: "경성전기주식회사", js: "경성전기주식회사", typ: r("Fluffy경성전기주식회사") },
    ], false),
    "Fluffy경성전기주식회사": o([
        { json: "사업소", js: "사업소", typ: m(r("TartuGecko")) },
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

