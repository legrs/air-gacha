let hseibun = ["窒素","酸素","アルゴン","二酸化炭素","ネオン","ヘリウム","メタン","クリプトン","二酸化硫黄","水素","一酸化二窒素","キセノン","オゾン","二酸化窒素","ヨウ素"];
let hkakuritu = ["78.0840000 %","20.9476000 %","0.9340000 %","0.0410000 %","0.0018180 %","0.0005240 %","0.0001810 %","0.0001140 %","0.0001000 %","0.0000500 %","0.0000320 %<","0.0000087 %","0.0000070 %","0.0000020 %","0.0000010 %"];
let hkagakusiki = ["N2","O2","Ar","CO2","Ne","He","CH4","Kr","SO2","H2","N2O","Xe","O3","NO2","I2"];
let hsmallKagakusiki = ["n2","o2","ar","co2","ne","he","ch4","kr","so2","h2","n2o","xe","o3","no2","i2"];
let kakuritu = document.getElementById("kakuritu");
let name = document.getElementById("name");
let kagakusiki = document.getElementById("kagakusiki");
const hbtn = document.getElementById("hbtn");

const savebtn = document.querySelector("#saveCookie");
let nowData="";
const deletebtn = document.querySelector("#deleteCookie");

let random ;
const config = [
    { id: 0, val: 780840000 },
    { id: 1, val: 209476000 },
    { id: 2, val:   9340000 },
    { id: 3, val:    410000 },
    { id: 4, val:     18180 },
    { id: 5, val:      5240 },
    { id: 6, val:      1810 },
    { id: 7, val:      1140 },
    { id: 8, val:      1000 },
    { id: 9, val:       500 },
    { id: 10, val:      320 },
    { id: 11, val:       87 },
    { id: 12, val:       70 },
    { id: 13, val:       20 },
    { id: 14, val:       10 },
];
let history = document.getElementById('history');
let number = 0;
let new_element = document.createElement('h3');
new_element.className = 'h33';
let numberr = document.getElementById('number');

let tisso = document.getElementById('tisso');
let sanso = document.getElementById('sanso');
let arugon = document.getElementById('arugon');
let nisankatanso = document.getElementById('nisankatanso');
let neon = document.getElementById('neon');
let heriumu = document.getElementById('heriumu');
let metan = document.getElementById('metan');
let kuriputon = document.getElementById('kuriputon');
let nisankaiou = document.getElementById('nisankaiou');
let suiso = document.getElementById('suiso');
let issannkanitisso = document.getElementById('issannkanitisso');
let kisenon = document.getElementById('kisenon');
let ozon = document.getElementById('ozon');
let nisankatisso = document.getElementById('nisankatisso');
let youso = document.getElementById('youso');

let tisso_kazu = 0; 
let sanso_kazu = 0; 
let arugon_kazu = 0; 
let nisankatanso_kazu = 0; 
let neon_kazu = 0; 
let heriumu_kazu = 0; 
let metan_kazu = 0; 
let kuriputon_kazu = 0; 
let nisankaiou_kazu = 0; 
let suiso_kazu = 0; 
let issannkanitisso_kazu = 0; 
let kisenon_kazu = 0; 
let ozon_kazu = 0; 
let nisankatisso_kazu = 0; 
let youso_kazu = 0; 


function kazuyaru(result_number){
    switch(result_number){
        case 0 :
            tisso_kazu ++;
            break;
        case 1 :
            sanso_kazu ++;
            break;
        case 2 :
            arugon_kazu ++;
            break;
        case 3 :
            nisankatanso_kazu ++;
            break;
        case 4 :
            neon_kazu ++;
            break;
        case 5 :
            heriumu_kazu ++;
            break;
        case 6 :
            metan_kazu ++;
            break;
        case 7 :
            kuriputon_kazu ++;
            break;
        case 8 :
            nisankaiou_kazu ++;
            break;
        case 9 :
            suiso_kazu ++;
            break;
        case 10 :
            issannkanitisso_kazu ++;
            break;
        case 11 :
            kisenon_kazu ++;
            break;
        case 12 :
            ozon_kazu ++;
            break;
        case 13 :
            nisannkatisso_kazu ++;
            break;
        case 14:
            youso_kazu ++;
            break;
    }
}




function henkou(nb){
    kakuritu.innerHTML = '<h1 id="kakuritu">' + hkakuritu [nb] + '</h1>';
    name.innerHTML = '<h1 id="name">' + hseibun [nb] + '</h1>';
    kagakusiki.innerHTML = '<h1 id="kagakusiki">' + hkagakusiki [nb] + '</h1>';
}
function gachaRun(config) {

    const min = 0; // 最小値
    const max = 1000000000; // 最大値

    // 乱数生成（抽選）
    const randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;

    let result = [];
    let totalProb = 0;
    for (let i = 0; i < config.length; i++) {
        totalProb += config[i].val;
        if( randomNum <= totalProb ) {
            result = config[i];
            break;
        }
    };

    henkou(result.id);
    kazuyaru(result.id);
    console.log(result.id)
    tisso.innerHTML ="<td id= 'tisso'         >" +          tisso_kazu + "</td>"                   ;
    sanso.innerHTML ="<td id= 'sanso'         >" +         sanso_kazu + "</td>"                   ;
    arugon.innerHTML ="<td id= 'arugon'        >" +         arugon_kazu + "</td>"                   ;
    nisankatanso.innerHTML ="<td id= 'nisankatanso'  >" +   nisankatanso_kazu + "</td>"                   ;
    neon.innerHTML ="<td id= 'neon'          >" +           neon_kazu + "</td>"                   ;
    heriumu.innerHTML ="<td id= 'heriumu'       >" +        heriumu_kazu + "</td>"                   ;
    metan.innerHTML ="<td id= 'metan'         >" +          metan_kazu + "</td>"                   ;
    kuriputon.innerHTML ="<td id= 'kuriputon'     >" +      kuriputon_kazu + "</td>"                   ;
    nisankaiou.innerHTML ="<td id= 'nisankaiou'    >" +     nisankaiou_kazu + "</td>"                   ;
    suiso.innerHTML ="<td id= 'suiso'         >" +          suiso_kazu + "</td>"                   ;
    issannkanitisso.innerHTML ="<td id= 'issannkatannso'>" + issannkanitisso_kazu + "</td>"   ;                
    kisenon.innerHTML ="<td id= 'kisenon'       >" +        kisenon_kazu + "</td>"                   ;
    ozon.innerHTML ="<td id= 'ozon'          >" +           ozon_kazu + "</td>"                   ;
    nisankatisso.innerHTML ="<td id= 'nisankatisso'  >" +   nisankatisso_kazu + "</td>"                   ;
    youso.innerHTML ="<td id= 'youso'         >" +          youso_kazu + "</td>"                   ;
    return result.id;
}
function Run(){
    gachaRun(config);
    number++;
    console.log(number);
    let new_element = document.createElement('h3');
    new_element.className = 'h33';
    new_element.textContent = name.textContent;
    nowData += hseibun.indexOf(name.textContent).toString(16);
    history.appendChild(new_element);
    numberr.textContent = number;

}
hbtn.addEventListener('click',Run);

document.addEventListener('keydown',function(event) {
    if(event.key === ' '){
        Run();
        console.log("space");
    }
});

savebtn.addEventListener('click',()=>{
    document.cookie = `data=${nowData}`;
    console.log(document.cookie);
})
deletebtn.addEventListener('click',()=>{
    document.cookie = "data=";
})