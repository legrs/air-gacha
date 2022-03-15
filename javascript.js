let hseibun = ["窒素","酸素","アルゴン","二酸化炭素","ネオン","ヘリウム","メタン","クリプトン","二酸化硫黄","水素","一酸化二窒素","キセノン","オゾン","二酸化窒素","ヨウ素"];
let hkakuritu = ["78.0840000 %","20.9476000 %","0.9340000 %","0.0410000 %","0.0018180 %","0.0005240 %","0.0001810 %","0.0001140 %","0.0001000 %","0.0000500 %","0.0000320 %<","0.0000087 %","0.0000070 %","0.0000020 %","0.0000010 %"];
let hkagakusiki = ["N2","O2","Ar","CO2","Ne","He","CH4","Kr","SO2","H2","N2O","Xe","O3","NO2","I2"];
let kakuritu = document.getElementById("kakuritu");
let name = document.getElementById("name");
let kagakusiki = document.getElementById("kagakusiki");
const hbtn = document.getElementById("hbtn");
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
    return result.id;
}
function Run(){
    gachaRun(config);
    number++;
    console.log(number);
    let new_element = document.createElement('h3');
    new_element.className = 'h33';
    new_element.textContent = name.textContent;
    history.appendChild(new_element);
    numberr.textContent = number;

}
hbtn.addEventListener('click',Run);

function onkeyup(event){
    const keycode = event.key;
   if(keycode === 'Process'){
       Run();
   }
}
let htmldocument = document.getElementById('html_document');
htmldocument.addEventListener('keyup',onkeyup);
