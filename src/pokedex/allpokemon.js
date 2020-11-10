const allPokemon = [
  {
    name: "bulbasaur",
    url: "https://pokeres.bastionbot.org/images/pokemon/1.png",
  },
  {
    name: "ivysaur",
    url: "https://pokeres.bastionbot.org/images/pokemon/2.png",
  },
  {
    name: "venusaur",
    url: "https://pokeres.bastionbot.org/images/pokemon/3.png",
  },
  {
    name: "charmander",
    url: "https://pokeres.bastionbot.org/images/pokemon/4.png",
  },
  {
    name: "charmeleon",
    url: "https://pokeres.bastionbot.org/images/pokemon/5.png",
  },
  {
    name: "charizard",
    url: "https://pokeres.bastionbot.org/images/pokemon/6.png",
  },
  {
    name: "squirtle",
    url: "https://pokeres.bastionbot.org/images/pokemon/7.png",
  },
  {
    name: "wartortle",
    url: "https://pokeres.bastionbot.org/images/pokemon/8.png",
  },
  {
    name: "blastoise",
    url: "https://pokeres.bastionbot.org/images/pokemon/9.png",
  },
  {
    name: "caterpie",
    url: "https://pokeres.bastionbot.org/images/pokemon/10.png",
  },
  {
    name: "metapod",
    url: "https://pokeres.bastionbot.org/images/pokemon/11.png",
  },
  {
    name: "butterfree",
    url: "https://pokeres.bastionbot.org/images/pokemon/12.png",
  },
  {
    name: "weedle",
    url: "https://pokeres.bastionbot.org/images/pokemon/13.png",
  },
  {
    name: "kakuna",
    url: "https://pokeres.bastionbot.org/images/pokemon/14.png",
  },
  {
    name: "beedrill",
    url: "https://pokeres.bastionbot.org/images/pokemon/15.png",
  },
  {
    name: "pidgey",
    url: "https://pokeres.bastionbot.org/images/pokemon/16.png",
  },
  {
    name: "pidgeotto",
    url: "https://pokeres.bastionbot.org/images/pokemon/17.png",
  },
  {
    name: "pidgeot",
    url: "https://pokeres.bastionbot.org/images/pokemon/18.png",
  },
  {
    name: "rattata",
    url: "https://pokeres.bastionbot.org/images/pokemon/19.png",
  },
  {
    name: "raticate",
    url: "https://pokeres.bastionbot.org/images/pokemon/20.png",
  },
  {
    name: "spearow",
    url: "https://pokeres.bastionbot.org/images/pokemon/21.png",
  },
  {
    name: "fearow",
    url: "https://pokeres.bastionbot.org/images/pokemon/22.png",
  },
  {
    name: "ekans",
    url: "https://pokeres.bastionbot.org/images/pokemon/23.png",
  },
  {
    name: "arbok",
    url: "https://pokeres.bastionbot.org/images/pokemon/24.png",
  },
  {
    name: "pikachu",
    url: "https://pokeres.bastionbot.org/images/pokemon/25.png",
  },
  {
    name: "raichu",
    url: "https://pokeres.bastionbot.org/images/pokemon/26.png",
  },
  {
    name: "sandshrew",
    url: "https://pokeres.bastionbot.org/images/pokemon/27.png",
  },
  {
    name: "sandslash",
    url: "https://pokeres.bastionbot.org/images/pokemon/28.png",
  },
  {
    name: "nidoran-f",
    url: "https://pokeres.bastionbot.org/images/pokemon/29.png",
  },
  {
    name: "nidorina",
    url: "https://pokeres.bastionbot.org/images/pokemon/30.png",
  },
  {
    name: "nidoqueen",
    url: "https://pokeres.bastionbot.org/images/pokemon/31.png",
  },
  {
    name: "nidoran-m",
    url: "https://pokeres.bastionbot.org/images/pokemon/32.png",
  },
  {
    name: "nidorino",
    url: "https://pokeres.bastionbot.org/images/pokemon/33.png",
  },
  {
    name: "nidoking",
    url: "https://pokeres.bastionbot.org/images/pokemon/34.png",
  },
  {
    name: "clefairy",
    url: "https://pokeres.bastionbot.org/images/pokemon/35.png",
  },
  {
    name: "clefable",
    url: "https://pokeres.bastionbot.org/images/pokemon/36.png",
  },
  {
    name: "vulpix",
    url: "https://pokeres.bastionbot.org/images/pokemon/37.png",
  },
  {
    name: "ninetales",
    url: "https://pokeres.bastionbot.org/images/pokemon/38.png",
  },
  {
    name: "jigglypuff",
    url: "https://pokeres.bastionbot.org/images/pokemon/39.png",
  },
  {
    name: "wigglytuff",
    url: "https://pokeres.bastionbot.org/images/pokemon/40.png",
  },
  {
    name: "zubat",
    url: "https://pokeres.bastionbot.org/images/pokemon/41.png",
  },
  {
    name: "golbat",
    url: "https://pokeres.bastionbot.org/images/pokemon/42.png",
  },
  {
    name: "oddish",
    url: "https://pokeres.bastionbot.org/images/pokemon/43.png",
  },
  {
    name: "gloom",
    url: "https://pokeres.bastionbot.org/images/pokemon/44.png",
  },
  {
    name: "vileplume",
    url: "https://pokeres.bastionbot.org/images/pokemon/45.png",
  },
  {
    name: "paras",
    url: "https://pokeres.bastionbot.org/images/pokemon/46.png",
  },
  {
    name: "parasect",
    url: "https://pokeres.bastionbot.org/images/pokemon/47.png",
  },
  {
    name: "venonat",
    url: "https://pokeres.bastionbot.org/images/pokemon/48.png",
  },
  {
    name: "venomoth",
    url: "https://pokeres.bastionbot.org/images/pokemon/49.png",
  },
  {
    name: "diglett",
    url: "https://pokeres.bastionbot.org/images/pokemon/50.png",
  },
  {
    name: "dugtrio",
    url: "https://pokeres.bastionbot.org/images/pokemon/51.png",
  },
  {
    name: "meowth",
    url: "https://pokeres.bastionbot.org/images/pokemon/52.png",
  },
  {
    name: "persian",
    url: "https://pokeres.bastionbot.org/images/pokemon/53.png",
  },
  {
    name: "psyduck",
    url: "https://pokeres.bastionbot.org/images/pokemon/54.png",
  },
  {
    name: "golduck",
    url: "https://pokeres.bastionbot.org/images/pokemon/55.png",
  },
  {
    name: "mankey",
    url: "https://pokeres.bastionbot.org/images/pokemon/56.png",
  },
  {
    name: "primeape",
    url: "https://pokeres.bastionbot.org/images/pokemon/57.png",
  },
  {
    name: "arcanine",
    url: "https://pokeres.bastionbot.org/images/pokemon/59.png",
  },
  {
    name: "poliwag",
    url: "https://pokeres.bastionbot.org/images/pokemon/60.png",
  },
  {
    name: "poliwhirl",
    url: "https://pokeres.bastionbot.org/images/pokemon/61.png",
  },
  {
    name: "poliwrath",
    url: "https://pokeres.bastionbot.org/images/pokemon/62.png",
  },
  { name: "abra", url: "https://pokeres.bastionbot.org/images/pokemon/63.png" },
  {
    name: "kadabra",
    url: "https://pokeres.bastionbot.org/images/pokemon/64.png",
  },
  {
    name: "alakazam",
    url: "https://pokeres.bastionbot.org/images/pokemon/65.png",
  },
  {
    name: "machop",
    url: "https://pokeres.bastionbot.org/images/pokemon/66.png",
  },
  {
    name: "machoke",
    url: "https://pokeres.bastionbot.org/images/pokemon/67.png",
  },
  {
    name: "machamp",
    url: "https://pokeres.bastionbot.org/images/pokemon/68.png",
  },
  {
    name: "bellsprout",
    url: "https://pokeres.bastionbot.org/images/pokemon/69.png",
  },
  {
    name: "weepinbell",
    url: "https://pokeres.bastionbot.org/images/pokemon/70.png",
  },
  {
    name: "victreebel",
    url: "https://pokeres.bastionbot.org/images/pokemon/71.png",
  },
  {
    name: "tentacool",
    url: "https://pokeres.bastionbot.org/images/pokemon/72.png",
  },
  {
    name: "tentacruel",
    url: "https://pokeres.bastionbot.org/images/pokemon/73.png",
  },
  {
    name: "geodude",
    url: "https://pokeres.bastionbot.org/images/pokemon/74.png",
  },
  {
    name: "graveler",
    url: "https://pokeres.bastionbot.org/images/pokemon/75.png",
  },
  {
    name: "golem",
    url: "https://pokeres.bastionbot.org/images/pokemon/76.png",
  },
  {
    name: "ponyta",
    url: "https://pokeres.bastionbot.org/images/pokemon/77.png",
  },
  {
    name: "rapidash",
    url: "https://pokeres.bastionbot.org/images/pokemon/78.png",
  },
  {
    name: "slowpoke",
    url: "https://pokeres.bastionbot.org/images/pokemon/79.png",
  },
  {
    name: "slowbro",
    url: "https://pokeres.bastionbot.org/images/pokemon/80.png",
  },
  {
    name: "magnemite",
    url: "https://pokeres.bastionbot.org/images/pokemon/81.png",
  },
  {
    name: "magneton",
    url: "https://pokeres.bastionbot.org/images/pokemon/82.png",
  },
  {
    name: "farfetchd",
    url: "https://pokeres.bastionbot.org/images/pokemon/83.png",
  },
  {
    name: "doduo",
    url: "https://pokeres.bastionbot.org/images/pokemon/84.png",
  },
  {
    name: "dodrio",
    url: "https://pokeres.bastionbot.org/images/pokemon/85.png",
  },
  { name: "seel", url: "https://pokeres.bastionbot.org/images/pokemon/86.png" },
  {
    name: "dewgong",
    url: "https://pokeres.bastionbot.org/images/pokemon/87.png",
  },
  {
    name: "grimer",
    url: "https://pokeres.bastionbot.org/images/pokemon/88.png",
  },
  { name: "muk", url: "https://pokeres.bastionbot.org/images/pokemon/89.png" },
  {
    name: "shellder",
    url: "https://pokeres.bastionbot.org/images/pokemon/90.png",
  },
  {
    name: "haunter",
    url: "https://pokeres.bastionbot.org/images/pokemon/93.png",
  },
  {
    name: "gengar",
    url: "https://pokeres.bastionbot.org/images/pokemon/94.png",
  },
  { name: "onix", url: "https://pokeres.bastionbot.org/images/pokemon/95.png" },
  {
    name: "drowzee",
    url: "https://pokeres.bastionbot.org/images/pokemon/96.png",
  },
  {
    name: "hypno",
    url: "https://pokeres.bastionbot.org/images/pokemon/97.png",
  },
  {
    name: "krabby",
    url: "https://pokeres.bastionbot.org/images/pokemon/98.png",
  },
  {
    name: "kingler",
    url: "https://pokeres.bastionbot.org/images/pokemon/99.png",
  },
  {
    name: "voltorb",
    url: "https://pokeres.bastionbot.org/images/pokemon/100.png",
  },
  {
    name: "electrode",
    url: "https://pokeres.bastionbot.org/images/pokemon/101.png",
  },
  {
    name: "exeggcute",
    url: "https://pokeres.bastionbot.org/images/pokemon/102.png",
  },
  {
    name: "exeggutor",
    url: "https://pokeres.bastionbot.org/images/pokemon/103.png",
  },
  {
    name: "cubone",
    url: "https://pokeres.bastionbot.org/images/pokemon/104.png",
  },
  {
    name: "marowak",
    url: "https://pokeres.bastionbot.org/images/pokemon/105.png",
  },
  {
    name: "hitmonchan",
    url: "https://pokeres.bastionbot.org/images/pokemon/107.png",
  },
  {
    name: "lickitung",
    url: "https://pokeres.bastionbot.org/images/pokemon/108.png",
  },
  {
    name: "koffing",
    url: "https://pokeres.bastionbot.org/images/pokemon/109.png",
  },
  {
    name: "weezing",
    url: "https://pokeres.bastionbot.org/images/pokemon/110.png",
  },
  {
    name: "rhyhorn",
    url: "https://pokeres.bastionbot.org/images/pokemon/111.png",
  },
  {
    name: "rhydon",
    url: "https://pokeres.bastionbot.org/images/pokemon/112.png",
  },
  {
    name: "chansey",
    url: "https://pokeres.bastionbot.org/images/pokemon/113.png",
  },
  {
    name: "tangela",
    url: "https://pokeres.bastionbot.org/images/pokemon/114.png",
  },
  {
    name: "kangaskhan",
    url: "https://pokeres.bastionbot.org/images/pokemon/115.png",
  },
  {
    name: "horsea",
    url: "https://pokeres.bastionbot.org/images/pokemon/116.png",
  },
  {
    name: "seadra",
    url: "https://pokeres.bastionbot.org/images/pokemon/117.png",
  },
  {
    name: "goldeen",
    url: "https://pokeres.bastionbot.org/images/pokemon/118.png",
  },
  {
    name: "seaking",
    url: "https://pokeres.bastionbot.org/images/pokemon/119.png",
  },
  {
    name: "staryu",
    url: "https://pokeres.bastionbot.org/images/pokemon/120.png",
  },
  {
    name: "starmie",
    url: "https://pokeres.bastionbot.org/images/pokemon/121.png",
  },
  {
    name: "mr-mime",
    url: "https://pokeres.bastionbot.org/images/pokemon/122.png",
  },
  {
    name: "scyther",
    url: "https://pokeres.bastionbot.org/images/pokemon/123.png",
  },
  {
    name: "jynx",
    url: "https://pokeres.bastionbot.org/images/pokemon/124.png",
  },
  {
    name: "electabuzz",
    url: "https://pokeres.bastionbot.org/images/pokemon/125.png",
  },
  {
    name: "magmar",
    url: "https://pokeres.bastionbot.org/images/pokemon/126.png",
  },
  {
    name: "pinsir",
    url: "https://pokeres.bastionbot.org/images/pokemon/127.png",
  },
  {
    name: "tauros",
    url: "https://pokeres.bastionbot.org/images/pokemon/128.png",
  },
  {
    name: "magikarp",
    url: "https://pokeres.bastionbot.org/images/pokemon/129.png",
  },
  {
    name: "gyarados",
    url: "https://pokeres.bastionbot.org/images/pokemon/130.png",
  },
  {
    name: "lapras",
    url: "https://pokeres.bastionbot.org/images/pokemon/131.png",
  },
  {
    name: "ditto",
    url: "https://pokeres.bastionbot.org/images/pokemon/132.png",
  },
  {
    name: "eevee",
    url: "https://pokeres.bastionbot.org/images/pokemon/133.png",
  },
  {
    name: "vaporeon",
    url: "https://pokeres.bastionbot.org/images/pokemon/134.png",
  },
  {
    name: "jolteon",
    url: "https://pokeres.bastionbot.org/images/pokemon/135.png",
  },
  {
    name: "flareon",
    url: "https://pokeres.bastionbot.org/images/pokemon/136.png",
  },
  {
    name: "porygon",
    url: "https://pokeres.bastionbot.org/images/pokemon/137.png",
  },
  {
    name: "omanyte",
    url: "https://pokeres.bastionbot.org/images/pokemon/138.png",
  },
  {
    name: "omastar",
    url: "https://pokeres.bastionbot.org/images/pokemon/139.png",
  },
  {
    name: "kabuto",
    url: "https://pokeres.bastionbot.org/images/pokemon/140.png",
  },
  {
    name: "kabutops",
    url: "https://pokeres.bastionbot.org/images/pokemon/141.png",
  },
  {
    name: "aerodactyl",
    url: "https://pokeres.bastionbot.org/images/pokemon/142.png",
  },
  {
    name: "snorlax",
    url: "https://pokeres.bastionbot.org/images/pokemon/143.png",
  },
  {
    name: "articuno",
    url: "https://pokeres.bastionbot.org/images/pokemon/144.png",
  },
  {
    name: "zapdos",
    url: "https://pokeres.bastionbot.org/images/pokemon/145.png",
  },
  {
    name: "moltres",
    url: "https://pokeres.bastionbot.org/images/pokemon/146.png",
  },
  {
    name: "dratini",
    url: "https://pokeres.bastionbot.org/images/pokemon/147.png",
  },
  {
    name: "dragonair",
    url: "https://pokeres.bastionbot.org/images/pokemon/148.png",
  },
  {
    name: "dragonite",
    url: "https://pokeres.bastionbot.org/images/pokemon/149.png",
  },
  {
    name: "mewtwo",
    url: "https://pokeres.bastionbot.org/images/pokemon/150.png",
  },
  { name: "mew", url: "https://pokeres.bastionbot.org/images/pokemon/151.png" },
];

export { allPokemon };
