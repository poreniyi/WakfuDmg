let slider=document.querySelector("#slider");
let sliderOutput=document.querySelector('#sliderValue');
let spellDmgs=document.querySelector('#spellDmg');
let spellHigh=0
let spellLow=0;
slider.oninput=function(){
    //sliderOutput.textContent=this.value;
    sliderOutput.textContent=this.value+"Dmg:"+sliderFunction(spellLow,spellHigh,this.value);
    //spellDmgs.value=sliderFunction(2,57,this.value);
}

let classSelect=document.querySelector("#classSelect");
let classSelectValue=classSelect[classSelect.selectedIndex].value;

let elementSelect=document.querySelector("#elementSelect");
let spellSelect=document.querySelector("#spells");
let spellSelectValue=spellSelect[spellSelect.selectedIndex].value;


const addElements=function(){
    classSelectValue=classSelect[classSelect.selectedIndex].value;
    if(classSelectValue!=-1){
        elementSelect.appendChild(earthEle);
        elementSelect.appendChild(airEle);
        elementSelect.appendChild(waterEle);
        elementSelect.appendChild(fireEle);
    }if(classSelectValue==-1){
        while(elementSelect.firstChild){
            elementSelect.removeChild(elementSelect.firstChild);
        }
    }
}
 const selectSpells=function(){
     
     const divs=document.createElement('option');
            divs.textContent=spellsTest['IOP'][0]['Spell name'];
            spellSelect.appendChild(divs);
     if(spellSelectValue!=-1){
        for(let i=0;i<spellsTest['IOP'].length;i++){
            const div=document.createElement('option');
            div.textContent=spellsTest['IOP'][i]['Spell name'];
            //spellSelect.appendChild(div);
         }   
     }
 }
classSelect.addEventListener('change',()=>{
    selectClass=classSelect[classSelect.selectedIndex].value;
   // console.log(selectClass);
})
let selectClass='';

elementSelect.addEventListener('change',()=>{
    while(spellSelect.firstChild){
        spellSelect.removeChild(spellSelect.firstChild);
    }
    let  spellElementvalue=elementSelect[elementSelect.selectedIndex].value;
    let eleChar="";
    switch(spellElementvalue){
        case'Air':
        eleChar='a';
        break;
        case'Fire':
        eleChar='f';
        break;
        case'Water':
        eleChar='w';
        break;
        case'Earth':
        eleChar='e';
        break;
    }
   for(let i=0;i<spellsJSON[selectClass].length;i++){
    if(spellsJSON[selectClass][i]['Spell name']==5){

    }
    const div=document.createElement('option');
    div.textContent=spellsJSON[selectClass][i]['Spell name'];
    //console.log(i);
    //div.value=spellsJSON[selectClass][i]['Spell name'];
    div.value=i;
    spellSelect.appendChild(div);
   }
  console.log(spellsJSON[selectClass]);
  console.log(selectClass);
})
spellSelect.addEventListener('change', ()=>{
    spellSelectValue=spellSelect[spellSelect.selectedIndex].value;
    console.log('spells Name is: '+spellSelectValue);
    console.log(typeof spellSelectValue);
    console.log(selectClass);
    console.log(spellSelectValue);
    spellHigh=Number(spellsJSON[selectClass][spellSelectValue]['Dmg at lvl 1']);
    spellLow=Number(spellsJSON[selectClass][spellSelectValue]['dmg at 200']);
    console.log('hey',spellsJSON[selectClass][spellSelectValue]);
})
const sliderFunction=function(highDmg,lowDmg,value){
   let range= highDmg-lowDmg;
  let dmgInterval= range/199;//200
  if(value==1){
      return lowDmg;
  }
  if(value==200){
      return highDmg;
  }
  let value2=value-1
  let step1=value*dmgInterval;
  let step2=value2*dmgInterval;
  return Math.round(lowDmg+step2);

    return Math.round(lowDmg+step1);
}

setInterval(() => {
    addElements();
    //selectSpells();
}, 500);
const earthEle =document.createElement('option')
earthEle.textContent="Earth"
const airEle =document.createElement('option');
airEle.textContent='Air'
const fireEle =document.createElement('option');
fireEle.textContent='Fire';
const waterEle =document.createElement('option');
waterEle.textContent='Water';



let requestURL= 'https://poreniyi.github.io/WakfuDmg/classSpells/spells.json';
let request=new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType='json';
request.send();
let spellsJSON=2;
request.onload = function() {
     spellsJSON  = request.response;
    console.log(spellsJSON);
  }

