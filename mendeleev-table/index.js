const elements = {
    'H':{name:'Водород',number:1,weight:1.000794},'He':{name:'Гелий',number:2,weight:4.002602},'Li':{name:'Литий',number:3,weight:6.941},
    'Be':{name:'Бериллий',number:4,weight:9.01218},'B':{name:'Бор',number:5,weight:10.811},'C':{name:'Углерод',number:6,weight:12.011},
    'N':{name:'Азот',number:7,weight:14.0067},'O':{name:'Кислород',number:8,weight:15.9994},'F':{name:'Фтор',number:9,weight:18.998403},
    'Ne':{name:'Неон',number:10,weight:20.179},'Na':{name:'Натрий',number:11,weight:22.98977},'Mg':{name:'Магний',number:12,weight:24.305},
    'Al':{name:'Алюминий',number:13,weight:26.98154},'Si':{name:'Кремний',number:14,weight:28.0855},'P':{name:'Фосфор',number:15,weight:30.97376},
    'S':{name:'Сера',number:16,weight:32.066},'Cl':{name:'Хлор',number:17,weight:35.453},'Ar':{name:'Аргон',number:18,weight:39.948},
    'K':{name:'Калий',number:19,weight:39.0983},'Ca':{name:'Кальций',number:20,weight:40.078},'Sc':{name:'Скандий',number:21,weight:44.95591},
    'Ti':{name:'Титан',number:22,weight:47.88},'V':{name:'Ванадий',number:23,weight:50.9415},'Cr':{name:'Хром',number:24,weight:51.9961},
    'Mn':{name:'Марганец',number:25,weight:54.9380},'Fe':{name:'Железо',number:26,weight:55.847},'Co':{name:'Кобальт',number:27,weight:58.9332},
    'Ni':{name:'Никель',number:28,weight:58.96},'Cu':{name:'Медь',number:29,weight:63.546},'Zn':{name:'Цинк',number:30,weight:65.39},
    'Ga':{name:'Галий',number:31,weight:69.723},'Ge':{name:'Германий',number:32,weight:72.59},'As':{name:'Мышьяк',number:33,weight:74.9216},
    'Se':{name:'Селен',number:34,weight:78.96},'Br':{name:'Бром',number:35,weight:79.904},'Kr':{name:'Криптон',number:36,weight:83.80},
    'Rb':{name:'Рубидий',number:37,weight:85.4678},'Sr':{name:'Стронций',number:38,weight:87.62},'Y':{name:'Иттрий',number:39,weight:88.9059},
    'Zr':{name:'Цирконий',number:40,weight:91.224},'Nb':{name:'Ниобий',number:41,weight:92.9064},'Mo':{name:'Молибден',number:42,weight:95.94},
    'Tc':{name:'Технеций',number:43,weight:97.9072},'Ru':{name:'Рутений',number:44,weight:101.07},'Rh':{name:'Родий',number:45,weight:102.9055},
    'Pd':{name:'Палладий',number:46,weight:106.42},'Ag':{name:'Серебро',number:47,weight:107.8682},'Cd':{name:'Кадмий',number:48,weight:112.41},
    'In':{name:'Индий',number:49,weight:114.82},'Sn':{name:'Олово',number:50,weight:118.710},'Sb':{name:'Сурьма',number:51,weight:121.75},
    'Te':{name:'Теллур',number:52,weight:127.60},'I':{name:'Йод',number:53,weight:129.9045},'Xe':{name:'Ксенон',number:54,weight:131.29},
    'Cs':{name:'Цезий',number:55,weight:132.9054},'Ba':{name:'Барий',number:56,weight:137.33},'La':{name:'Лантан',number:57,weight:138.9055},
    'Ce':{name:'Церий',number:58,weight:140.12},'Pr':{name:'Празеодим',number:59,weight:140.9077},'Nd':{name:'Неодим',number:60,weight:144.24},
    'Pm':{name:'Прометий',number:61,weight:144.9128},'Sm':{name:'Самарий',number:62,weight:150.36},'Eu':{name:'Европий',number:63,weight:151.96},
    'Gd':{name:'Гадолиний',number:64,weight:157.25},'Tb':{name:'Тербий',number:65,weight:159.9254},'Dy':{name:'Диспрозий',number:66,weight:162.50},
    'Ho':{name:'Гольмий',number:67,weight:164.9304},'Er':{name:'Эрбий',number:68,weight:167.26},'Tm':{name:'Тулий',number:69,weight:168.9342},
    'Yb':{name:'Иттербий',number:70,weight:173.04},'Lu':{name:'Лютеций',number:71,weight:174.967},'Hf':{name:'Гафний',number:72,weight:178.49},
    'Ta':{name:'Тантал',number:73,weight:180.9479},'W':{name:'Вольфрам',number:74,weight:183.85},'Re':{name:'Рений',number:75,weight:186.207},
    'Os':{name:'Осмий',number:76,weight:190.2},'Ir':{name:'Иридий',number:77,weight:192.22},'Pt':{name:'Платина',number:78,weight:195.08},
    'Au':{name:'Золото',number:79,weight:196.9665},'Hg':{name:'Ртуть',number:80,weight:200.59},'Tl':{name:'Таллий',number:81,weight:204.383},
    'Pb':{name:'Свинец',number:82,weight:207.2},'Bi':{name:'Висмут',number:83,weight:208.9804},'Po':{name:'Полоний',number:84,weight:208.9824},
    'At':{name:'Астат',number:85,weight:209.9870},'Rn':{name:'Радон',number:86,weight:222.0176},'Fr':{name:'Франций',number:87,weight:223.0197},
    'Ra':{name:'Радий',number:88,weight:226.0254},'Ac':{name:'Актиний',number:89,weight:227.0278},'Th':{name:'Торий',number:90,weight:232.0381},
    'Pa':{name:'Проактиний',number:91,weight:231.0359},'U':{name:'Уран',number:92,weight:238.0289},'Np':{name:'Нептуний',number:93,weight:237.0482},
    'Pu':{name:'Плутоний',number:94,weight:244.0642},'Am':{name:'Америций',number:95,weight:243.0614},'Cm':{name:'Кюрий',number:96,weight:247.0703},
    'Bk':{name:'Берклий',number:97,weight:247.0703},'Cf':{name:'Калифорний',number:98,weight:251.0796},'Es':{name:'Эйнштейний',number:99,weight:252.0828},
    'Fm':{name:'Фермий',number:100,weight:257.0951},'Md':{name:'Менделевий',number:101,weight:258.0986},'No':{name:'Нобелий',number:102,weight:259.1009},
    'Lr':{name:'Лоуренсий',number:103,weight:160.1054},'Rf':{name:'Резерфордий',number:104,weight:261},'Db':{name:'Дубний',number:105,weight:262},
    'Sg':{name:'Сиборгий',number:106,weight:263},'Bh':{name:'Борий',number:107,weight:262},'Hs':{name:'Хассий',number:108,weight:265},
    'Mt':{name:'Мейтнерий',number:109,weight:266},'Ds':{name:'Дармштадий',number:110,weight:281},'Rg':{name:'Рентгений',number:111,weight:281},
    'Cn':{name:'Коперниций',number:112,weight:285},'Nh':{name:'Нихоний',number:113,weight:286},'Fl':{name:'Флеровий',number:114,weight:289},
    'Mc':{name:'Московий',number:115,weight:289},'Lv':{name:'Ливерморий',number:116,weight:293},'Ts':{name:'Теннессин',number:117,weight:294.2105},
    'Og':{name:'Оганесон',number:118,weight:294.2145},'Uue':{name:'Унуненний',number:119,weight:316},'Ubn':{name:'Унбинилий',number:120,weight:320},
    'Ubu':{name:'Унбиуний',number:121,weight:320},'Ubb':{name:'Унбибий',number:122,weight:-1},'Ubt':{name:'Унбитрий',number:123,weight:-1},
    'Ubq':{name:'Унбиквадрий',number:124,weight:-1},'Ubp':{name:'Унбипентий',number:125,weight:332},'Ubh':{name:'Унбигексий',number:126,weight:-1}
};

module.exports = {
    getElementBySymbols : (symbol)=>{
        return elements[symbol];
    },
    stringify:(symbol)=>{
        return `${elements[symbol].number.toString()}:${elements[symbol].name}/${elements[symbol].weight.toString()}`;
    },
    printTable : ()=>{
        for (const key in elements) {
            if (elements.hasOwnProperty(key)) {
                console.log(`${elements[key].number}.${key}:${elements[key].name}, weight = ${elements[key].weight} moles.`);
            }
        }
    }
}