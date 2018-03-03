const languages = ['la', 'ru', 'en'];
const elementsgroups = {
  alkali: { en: 'Alkali metal','ru': ''},
  alkaline: {'en':'Alkaline earth metal','ru':''},
  pnictogen: {'en':'Pnictogen','ru':''},
  chalcogen: {'en':'Chalcogen', 'ru':''},
  halogen: {'en':'Halogens','ru': ''},
  noble:{'en':'Noble Gas','ru': ''},
  lantanoid:{'en':'Lanthanoid','ru': ''},
  actinoid:{'en':'Actinoid','ru': ''},
  superactinoid:{'en':'Superactinide','ru': ''},
  rare:{'en':'Rare-earth metal','ru': ''},
  trans:{'en':'Transition element','ru': ''},
  posttran:{'en':'Post-transition element','ru': ''},
  metal:{'en':'Metal','ru': ''},
  nonmetal:{'en':'Nonmetal','ru': ''},
  metalloid:{'en':'Metalloid','ru': ''}
};

const elements = {
    'H':{'name-ru':'Водород', 'name-en':'Hydrogen', 'name-la':'Hydrogenium', number:1,weight:1.000794, group:1, period:1},
    'He':{'name-ru':'Гелий', 'name-en':'Helium', 'name-la':'Helium', number:2,weight:4.002602, group:18, period:1},
    'Li':{'name-ru':'Литий', 'name-en':'Lithium', 'name-la':'Lithium', number:3,weight:6.941, group:1, period:2},
    'Be':{'name-ru':'Бериллий', 'name-en':'Beryllium', 'name-la':'Beryllium', number:4,weight:9.01218, group:2, period:2},
    'B':{'name-ru':'Бор', 'name-en':'Boron', 'name-la':'Borum', number:5,weight:10.811, group:13, period:2},
    'C':{'name-ru':'Углерод', 'name-en':'Carbon', 'name-la':'Carboneum', number:6,weight:12.011, group:14, period:2},
    'N':{'name-ru':'Азот', 'name-en':'Nitrogen', 'name-la':'Nitrogenium', number:7,weight:14.0067, group:15, period:2},
    'O':{'name-ru':'Кислород', 'name-en':'Oxygen', 'name-la':'Oxygenium', number:8,weight:15.9994, group:16, period:2},
    'F':{'name-ru':'Фтор', 'name-en':'Fluorine', 'name-la':'Fluorum', number:9,weight:18.998403, group:17, period:2},
    'Ne':{'name-ru':'Неон', 'name-en':'Neon', 'name-la':'Neon', number:10,weight:20.179, group:18, period:2},
    'Na':{'name-ru':'Натрий', 'name-en':'Sodium', 'name-la':'Natrium', number:11,weight:22.98977, group:1, period:3},
    'Mg':{'name-ru':'Магний', 'name-en':'Magnesium', 'name-la':'Magnesium', number:12,weight:24.305, group:2, period:3},
    'Al':{'name-ru':'Алюминий', 'name-en':'Aluminium', 'name-la':'Aluminium', number:13,weight:26.98154, group:13, period:3},
    'Si':{'name-ru':'Кремний', 'name-en':'Silicon', 'name-la':'Silicium', number:14,weight:28.0855, group:14, period:3},
    'P':{'name-ru':'Фосфор', 'name-en':'Phosphorus', 'name-la':'Phosphorus', number:15,weight:30.97376, group:15, period:3},
    'S':{'name-ru':'Сера', 'name-en':'Sulfur', 'name-la':'Sulfur/Sulphur', number:16,weight:32.066, group:16, period:3},
    'Cl':{'name-ru':'Хлор', 'name-en':'Chlorine', 'name-la':'Chlorum', number:17,weight:35.453, group:17, period:3},
    'Ar':{'name-ru':'Аргон', 'name-en':'Argon', 'name-la':'Argon', number:18,weight:39.948, group:18, period:3},
    'K':{'name-ru':'Калий', 'name-en':'Potassium', 'name-la':'Kalium/Calium', number:19,weight:39.0983, group:1, period:4},
    'Ca':{'name-ru':'Кальций', 'name-en':'Calcium', 'name-la':'Calcium', number:20,weight:40.078, group:2, period:4},
    'Sc':{'name-ru':'Скандий', 'name-en':'Scandium', 'name-la':'Scandium', number:21,weight:44.95591, group:3, period:4},
    'Ti':{'name-ru':'Титан', 'name-en':'Titanium', 'name-la':'Titanium', number:22,weight:47.88, group:4, period:4},
    'V':{'name-ru':'Ванадий', 'name-en':'Vanadium', 'name-la':'Vanadium', number:23,weight:50.9415, group:5, period:4},
    'Cr':{'name-ru':'Хром', 'name-en':'Chromium', 'name-la':'Chromium', number:24,weight:51.9961, group:6, period:4},
    'Mn':{'name-ru':'Марганец', 'name-en':'Manganese', 'name-la':'Manganum/Manganesium', number:25,weight:54.9380, group:7, period:4},
    'Fe':{'name-ru':'Железо', 'name-en':'Iron', 'name-la':'Ferrum', number:26,weight:55.847, group:8, period:4},
    'Co':{'name-ru':'Кобальт', 'name-en':'Cobalt', 'name-la':'Cobaltum', number:27,weight:58.9332, group:9, period:4},
    'Ni':{'name-ru':'Никель', 'name-en':'Nickel', 'name-la':'Niccolum', number:28,weight:58.96, group:10, period:4},
    'Cu':{'name-ru':'Медь', 'name-en':'Copper', 'name-la':'Cuprum', number:29,weight:63.546, group:11, period:4},
    'Zn':{'name-ru':'Цинк', 'name-en':'Zinc', 'name-la':'Zincum', number:30,weight:65.39, group:12, period:4},
    'Ga':{'name-ru':'Галий', 'name-en':'Gallium', 'name-la':'Gallium', number:31,weight:69.723, group:13, period:4},
    'Ge':{'name-ru':'Германий', 'name-en':'Germanium', 'name-la':'Germanium', number:32,weight:72.59, group:14, period:4},
    'As':{'name-ru':'Мышьяк', 'name-en':'Arsenic', 'name-la':'Arsenicum', number:33,weight:74.9216, group:15, period:4},
    'Se':{'name-ru':'Селен', 'name-en':'Selenium', 'name-la':'Selenium', number:34,weight:78.96, group:16, period:4},
    'Br':{'name-ru':'Бром', 'name-en':'Bromine', 'name-la':'Bromum', number:35,weight:79.904, group:17, period:4},
    'Kr':{'name-ru':'Криптон', 'name-en':'Krypton', 'name-la':'Krypton/Crypton', number:36,weight:83.80, group:18, period:4},
    'Rb':{'name-ru':'Рубидий', 'name-en':'Rubidium', 'name-la':'Rubidium', number:37,weight:85.4678, group:1, period:5},
    'Sr':{'name-ru':'Стронций', 'name-en':'Strontium', 'name-la':'Strontium', number:38,weight:87.62, group:2, period:5},
    'Y':{'name-ru':'Иттрий', 'name-en':'Yttrium', 'name-la':'Yttrium', number:39,weight:88.9059, group:3, period:5},
    'Zr':{'name-ru':'Цирконий', 'name-en':'Zirconium', 'name-la':'Zirconium', number:40,weight:91.224, group:4, period:5},
    'Nb':{'name-ru':'Ниобий', 'name-en':'Niobium', 'name-la':'Niobium', number:41,weight:92.9064, group:5, period:5},
    'Mo':{'name-ru':'Молибден', 'name-en':'Molybdenum', 'name-la':'Molybdaenum', number:42,weight:95.94, group:6, period:5},
    'Tc':{'name-ru':'Технеций', 'name-en':'Technetium', 'name-la':'Technetium', number:43,weight:97.9072, group:7, period:5},
    'Ru':{'name-ru':'Рутений', 'name-en':'Ruthenium', 'name-la':'Ruthenium', number:44,weight:101.07, group:8, period:5},
    'Rh':{'name-ru':'Родий', 'name-en':'Rhodium', 'name-la':'Rhodium', number:45,weight:102.9055, group:9, period:5},
    'Pd':{'name-ru':'Палладий', 'name-en':'Palladium', 'name-la':'Palladium', number:46,weight:106.42, group:10, period:5},
    'Ag':{'name-ru':'Серебро', 'name-en':'Silver', 'name-la':'Argentum', number:47,weight:107.8682, group:11, period:5},
    'Cd':{'name-ru':'Кадмий', 'name-en':'Cadmium', 'name-la':'Cadmium', number:48,weight:112.41, group:12, period:5},
    'In':{'name-ru':'Индий', 'name-en':'Indium', 'name-la':'Indium', number:49,weight:114.82, group:13, period:5},
    'Sn':{'name-ru':'Олово', 'name-en':'Tin', 'name-la':'Stannum', number:50,weight:118.710, group:14, period:5},
    'Sb':{'name-ru':'Сурьма', 'name-en':'Antimony', 'name-la':'Stibium', number:51,weight:121.75, group:15, period:5},
    'Te':{'name-ru':'Теллур', 'name-en':'Tellurium', 'name-la':'Tellurium', number:52,weight:127.60, group:16, period:5},
    'I':{'name-ru':'Йод', 'name-en':'Iodine', 'name-la':'Iodium/Jodium', number:53,weight:129.9045, group:17, period:5},
    'Xe':{'name-ru':'Ксенон', 'name-en':'Xenon', 'name-la':'Xenon', number:54,weight:131.29, group:18, period:5},
    'Cs':{'name-ru':'Цезий', 'name-en':'Caesium', 'name-la':'Caesium', number:55,weight:132.9054, group:1, period:6},
    'Ba':{'name-ru':'Барий', 'name-en':'Barium', 'name-la':'Barium', number:56,weight:137.33, group:2, period:6},
    'La':{'name-ru':'Лантан', 'name-en':'Lanthanum', 'name-la':'Lanthanum', number:57,weight:138.9055, group:3, period:6, groups:[elementsgroups.lantanoid]},
    'Ce':{'name-ru':'Церий', 'name-en':'Cerium', 'name-la':'Cerium', number:58,weight:140.12, group:3, period:6, groups:[elementsgroups.lantanoid]},
    'Pr':{'name-ru':'Празеодим', 'name-en':'Praseodymium', 'name-la':'Praseodymium', number:59,weight:140.9077, group:3, period:6, groups:[elementsgroups.lantanoid]},
    'Nd':{'name-ru':'Неодим', 'name-en':'Neodymium', 'name-la':'Neodymium', number:60,weight:144.24, group:3, period:6, groups:[elementsgroups.lantanoid]},
    'Pm':{'name-ru':'Прометий', 'name-en':'Promethium', 'name-la':'Promethium', number:61,weight:144.9128, group:3, period:6, groups:[elementsgroups.lantanoid]},
    'Sm':{'name-ru':'Самарий', 'name-en':'Samarium', 'name-la':'Samarium', number:62,weight:150.36, group:3, period:6, groups:[elementsgroups.lantanoid]},
    'Eu':{'name-ru':'Европий', 'name-en':'Europium', 'name-la':'Europium', number:63,weight:151.96, group:3, period:6, groups:[elementsgroups.lantanoid]},
    'Gd':{'name-ru':'Гадолиний', 'name-en':'Gadolinium', 'name-la':'Gadolinium', number:64,weight:157.25, group:3, period:6, groups:[elementsgroups.lantanoid]},
    'Tb':{'name-ru':'Тербий', 'name-en':'Terbium', 'name-la':'Terbium', number:65,weight:159.9254, group:3, period:6, groups:[elementsgroups.lantanoid]},
    'Dy':{'name-ru':'Диспрозий', 'name-en':'Dysprosium', 'name-la':'Dysprosium', number:66,weight:162.50, group:3, period:6, groups:[elementsgroups.lantanoid]},
    'Ho':{'name-ru':'Гольмий', 'name-en':'Holumium', 'name-la':'Holmium', number:67,weight:164.9304, group:3, period:6, groups:[elementsgroups.lantanoid]},
    'Er':{'name-ru':'Эрбий', 'name-en':'Erbium', 'name-la':'Erbium', number:68,weight:167.26, group:3, period:6, groups:[elementsgroups.lantanoid]},
    'Tm':{'name-ru':'Тулий', 'name-en':'Thulium', 'name-la':'Thulium', number:69,weight:168.9342, group:3, period:6, groups:[elementsgroups.lantanoid]},
    'Yb':{'name-ru':'Иттербий', 'name-en':'Ytterbium', 'name-la':'Ytterbium', number:70,weight:173.04, group:3, period:6, groups:[elementsgroups.lantanoid]},
    'Lu':{'name-ru':'Лютеций', 'name-en':'Lutetium', 'name-la':'Lutetium', number:71,weight:174.967, group:3, period:6, groups:[elementsgroups.lantanoid]},
    'Hf':{'name-ru':'Гафний', 'name-en':'Hafnium', 'name-la':'Hafnium', number:72,weight:178.49, group:4, period:6},
    'Ta':{'name-ru':'Тантал', 'name-en':'Tantalum', 'name-la':'Tantalum', number:73,weight:180.9479, group:5, period:6},
    'W':{'name-ru':'Вольфрам', 'name-en':'Tungsten', 'name-la':'Wolframium', number:74,weight:183.85, group:6, period:6},
    'Re':{'name-ru':'Рений', 'name-en':'Rhenium', 'name-la':'Rhenium', number:75,weight:186.207, group:7, period:6},
    'Os':{'name-ru':'Осмий', 'name-en':'Osmium', 'name-la':'Osmium', number:76,weight:190.2, group:8, period:6},
    'Ir':{'name-ru':'Иридий', 'name-en':'Iridium', 'name-la':'Iridium', number:77,weight:192.22, group:9, period:6},
    'Pt':{'name-ru':'Платина', 'name-en':'Platinum', 'name-la':'Platinum', number:78,weight:195.08, group:10, period:6},
    'Au':{'name-ru':'Золото', 'name-en':'Gold', 'name-la':'Aurum', number:79,weight:196.9665, group:11, period:6},
    'Hg':{'name-ru':'Ртуть', 'name-en':'Mercury', 'name-la':'Hydrargyrum', number:80,weight:200.59, group:12, period:6},
    'Tl':{'name-ru':'Таллий', 'name-en':'Thallium', 'name-la':'Thallium', number:81,weight:204.383, group:13, period:6},
    'Pb':{'name-ru':'Свинец', 'name-en':'Lead', 'name-la':'Plumbum', number:82,weight:207.2, group:14, period:6},
    'Bi':{'name-ru':'Висмут', 'name-en':'Bismuth', 'name-la':'Bismuthum', number:83,weight:208.9804, group:15, period:6},
    'Po':{'name-ru':'Полоний', 'name-en':'Polonium', 'name-la':'Polonium', number:84,weight:208.9824, group:16, period:6},
    'At':{'name-ru':'Астат', 'name-en':'Astatine', 'name-la':'Astatum', number:85,weight:209.9870, group:17, period:6},
    'Rn':{'name-ru':'Радон', 'name-en':'Radon', 'name-la':'Radon', number:86,weight:222.0176, group:18, period:6},
    'Fr':{'name-ru':'Франций', 'name-en':'Francium', 'name-la':'Francium', number:87,weight:223.0197, group:1, period:7},
    'Ra':{'name-ru':'Радий', 'name-en':'Radium', 'name-la':'Radium', number:88,weight:226.0254, group:2, period:7},
    'Ac':{'name-ru':'Актиний', 'name-en':'Actinium', 'name-la':'Actinium', number:89,weight:227.0278, group:3, period:7, groups:[elementsgroups.actinoid]},
    'Th':{'name-ru':'Торий', 'name-en':'Thorium', 'name-la':'Thorium', number:90,weight:232.0381, group:3, period:7, groups:[elementsgroups.actinoid]},
    'Pa':{'name-ru':'Проактиний', 'name-en':'Protactinium', 'name-la':'Protactinium', number:91,weight:231.0359, group:3, period:7, groups:[elementsgroups.actinoid]},
    'U':{'name-ru':'Уран', 'name-en':'Uranium', 'name-la':'Uranium', number:92,weight:238.0289, group:3, period:7, groups:[elementsgroups.actinoid]},
    'Np':{'name-ru':'Нептуний', 'name-en':'Neptunium', 'name-la':'Neptunium', number:93,weight:237.0482, group:3, period:7, groups:[elementsgroups.actinoid]},
    'Pu':{'name-ru':'Плутоний', 'name-en':'Plutonium', 'name-la':'Plutonium', number:94,weight:244.0642, group:3, period:7, groups:[elementsgroups.actinoid]},
    'Am':{'name-ru':'Америций', 'name-en':'Americium', 'name-la':'Americium', number:95,weight:243.0614, group:3, period:7, groups:[elementsgroups.actinoid]},
    'Cm':{'name-ru':'Кюрий', 'name-en':'Curium', 'name-la':'Curium', number:96,weight:247.0703, group:3, period:7, groups:[elementsgroups.actinoid]},
    'Bk':{'name-ru':'Берклий', 'name-en':'Berkelium', 'name-la':'Berkelium', number:97,weight:247.0703, group:3, period:7, groups:[elementsgroups.actinoid]},
    'Cf':{'name-ru':'Калифорний', 'name-en':'Californium', 'name-la':'Californium', number:98,weight:251.0796, group:3, period:7, groups:[elementsgroups.actinoid]},
    'Es':{'name-ru':'Эйнштейний', 'name-en':'Einsteinium', 'name-la':'Einsteinium', number:99,weight:252.0828, group:3, period:7, groups:[elementsgroups.actinoid]},
    'Fm':{'name-ru':'Фермий', 'name-en':'Fermium', 'name-la':'Fermium', number:100,weight:257.0951, group:3, period:7, groups:[elementsgroups.actinoid]},
    'Md':{'name-ru':'Менделевий', 'name-en':'Mendelevium', 'name-la':'Mendelevium/Mendeleevium', number:101,weight:258.0986, group:3, period:7, groups:[elementsgroups.actinoid]},
    'No':{'name-ru':'Нобелий', 'name-en':'Nobelium', 'name-la':'Nobelium', number:102,weight:259.1009, group:3, period:7, groups:[elementsgroups.actinoid]},
    'Lr':{'name-ru':'Лоуренсий', 'name-en':'Lawrencium', 'name-la':'Lawrencium/Laurentium', number:103,weight:160.1054, group:3, period:7, groups:[elementsgroups.actinoid]},
    'Rf':{'name-ru':'Резерфордий', 'name-en':'Rutherfordium', 'name-la':'Rutherfordium', number:104,weight:261, group:4, period:7},
    'Db':{'name-ru':'Дубний', 'name-en':'Dubnium', 'name-la':'Dubnium', number:105,weight:262, group:5, period:7},
    'Sg':{'name-ru':'Сиборгий', 'name-en':'Seaborgium', 'name-la':'Seaborgium', number:106,weight:263, group:6, period:7},
    'Bh':{'name-ru':'Борий', 'name-en':'Bohrium', 'name-la':'Bohrium', number:107,weight:262, group:7, period:7},
    'Hs':{'name-ru':'Хассий', 'name-en':'Hassium', 'name-la':'Hassium', number:108,weight:265, group:8, period:7},
    'Mt':{'name-ru':'Мейтнерий', 'name-en':'Meitnerium', 'name-la':'Meitnerium', number:109,weight:266, group:9, period:7},
    'Ds':{'name-ru':'Дармштадий', 'name-en':'Darmstadtium', 'name-la':'Darmstadtium', number:110,weight:281, group:10, period:7},
    'Rg':{'name-ru':'Рентгений', 'name-en':'Roentgenium', 'name-la':'Roentgenium', number:111,weight:281, group:11, period:7},
    'Cn':{'name-ru':'Коперниций', 'name-en':'Copernicium', 'name-la':'Copernicium', number:112,weight:285, group:12, period:7},
    'Nh':{'name-ru':'Нихоний', 'name-en':'Nihonium', 'name-la':'Nihonium', number:113,weight:286, group:13, period:7},
    'Fl':{'name-ru':'Флеровий', 'name-en':'Flerovium', 'name-la':'Flerovium', number:114,weight:289, group:14, period:7},
    'Mc':{'name-ru':'Московий', 'name-en':'Moscovium', 'name-la':'Moscovium', number:115,weight:289, group:15, period:7},
    'Lv':{'name-ru':'Ливерморий', 'name-en':'Livermorium', 'name-la':'Livermorium', number:116,weight:293, group:16, period:7},
    'Ts':{'name-ru':'Теннессин', 'name-en':'Tennessine', 'name-la':'Tennessium/Tennessinum', number:117,weight:294.2105, group:17, period:7},
    'Og':{'name-ru':'Оганесон', 'name-en':'Oganesson', 'name-la':'Oganesson', number:118,weight:294.2145, group:18, period:7},
    'Uue':{'name-ru':'Унуненний', 'name-en':'Ununennium', 'name-la':'Ununennium', number:119,weight:316, group:1, period:8},
    'Ubn':{'name-ru':'Унбинилий', 'name-en':'Unbinilium', 'name-la':'Unbinilium', number:120,weight:320, group:2, period:8},
    'Ubu':{'name-ru':'Унбиуний', 'name-en':'Unbiunium', 'name-la':'Unbiunium', number:121,weight:320, group:3, period:8, groups:[elementsgroups.superactinoid]},
    'Ubb':{'name-ru':'Унбибий', 'name-en':'Unbibium', 'name-la':'Unbibium', number:122,weight:-1, group:3, period:8, groups:[elementsgroups.superactinoid]},
    'Ubt':{'name-ru':'Унбитрий', 'name-en':'Unbitrium', 'name-la':'Unbitrium', number:123,weight:-1, group:3, period:8, groups:[elementsgroups.superactinoid]},
    'Ubq':{'name-ru':'Унбиквадий', 'name-en':'Unbiquadium', 'name-la':'Unbiquadium', number:124,weight:-1, group:3, period:8, groups:[elementsgroups.superactinoid]},
    'Ubp':{'name-ru':'Унбипентий', 'name-en':'Unbipentium', 'name-la':'Unbipentium', number:125,weight:332, group:3, period:8, groups:[elementsgroups.superactinoid]},
    'Ubh':{'name-ru':'Унбигексий', 'name-en':'Unbihexium', 'name-la':'Unbihexium', number:126,weight:-1, group:3, period:8, groups:[elementsgroups.superactinoid]},
    'Ubs':{'name-ru':'Унбисептий', 'name-en':'Unbiseptium', 'name-la':'Unbiseptium', number:127,weight:-1, group:3, period:8, groups:[elementsgroups.superactinoid]}
};

const  periodic_set = {
    periods : 8,
    groups: 18,
    special: 3,
    elements : 3
};


const env = process.env, language = env.LANG || env.LANGUAGE || env.LC_ALL || env.LC_MESSAGES;
const _pos = language.indexOf('_') || language.indexOf('.'), lang = language.slice(0,_pos);


function isLantanoid(element){
    //if(element.groups)
};
module.exports = {
    getElementBySymbols : (symbol)=>{
        return elements[symbol];
    },
    stringify:(symbol, language = lang)=>{
        if(!languages.includes(language)) language = 'en';
        return `${elements[symbol].number}.${symbol}:${elements[symbol][`name-${language}`]}, weight = ${elements[symbol].weight} u, period:${elements[symbol].period}, group:${elements[symbol].group}.`;
    },
    printList : (language = lang)=>{
        if(!languages.includes(language)) language = 'en';
        for (const key in elements) {
            if (elements.hasOwnProperty(key)) {
                console.log(module.exports.stringify(key,language));
            }
        }
    },
    printTable:()=>{
        const periodic = new Array(periodic_set.periods+periodic_set.special);
        for(let i = 0; i<periodic_set.periods+periodic_set.special;i++){
            periodic[i] = new Array(periodic_set.groups);
            for(let j = 0; j<periodic_set.groups; j++){
                periodic[i][j] = '   ';
            }
        }
        let change = false, element = '', prop, diff={lan:2, act:2, supact:2};
        for (const key in elements) {
            if (elements.hasOwnProperty(key)) {
                element = ' '.repeat(periodic_set.special-key.length)+key;
                if(elements[key].groups == undefined) change = true;
                else if(!(elements[key].groups.includes(elementsgroups.actinoid))
                        &&!(elements[key].groups.includes(elementsgroups.lantanoid))
                        &&!(elements[key].groups.includes(elementsgroups.superactinoid)))
                        change = true;
                if(change){
                    periodic[elements[key].period-1][elements[key].group-1] =element;
                    change =false;
                }else{
                    if(elements[key].groups.includes(elementsgroups.lantanoid)) prop = 'lan';
                    if(elements[key].groups.includes(elementsgroups.actinoid)) prop = 'act';
                    if(elements[key].groups.includes(elementsgroups.superactinoid)) prop = 'supact';
                    periodic[elements[key].period-1+periodic_set.special][diff[prop]++] =element;
                }
            }
        }
        for(let i = 0; i<periodic_set.periods+periodic_set.special;i++){
            console.log(periodic[i].join(' '));
        }
    }
}