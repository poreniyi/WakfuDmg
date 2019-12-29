const spellDmg=document.querySelector('#spellDmg');
 const eleMast=document.querySelector('#eleMast');
 const typeMast=document.querySelector('#typeMast');// st aoe
 const rangeMast=document.querySelector('#rangeMast');
 const critMast=document.querySelector('#critMast');
 const rearMast=document.querySelector('#rearMast');
const beserkDmg=document.querySelector("#BeserkMast");
const finalDmg=document.querySelector("#Finaldmg");
const dmgInflicted=document.querySelector("#dmgInflicted");
const afterResText=document.querySelector("#dmgAfterRes");
const healText=document.querySelector("#healP");
const armorText=document.querySelector("#armorP");
const button=document.querySelector('#btn');

finalDmg.textContent="Final Damage: ";

// Initial values
let baseDmg=0;
let sumOfMasteries=0;
let typeMastery=0;
let rangeMastery=0;
let critMastery=0;
let rearMastery=0;
let elementalMastery=0;
let beserkMastery=0;
let sumofDmgInflicted=1;
let directionMultiplier=1;
let critMultiplier=1;
let block=1;
let finalDmgBeforeRes=0;


const setValues=function(){
//base
baseDmg=Number(spellDmg.value);
elementalMastery=Number(eleMast.value);
typeMastery=Number(typeMast.value);
rangeMastery=Number(rangeMast.value);
critMastery=Number(critMast.value);
rearMastery=Number(rearMast.value);
beserkMastery=Number(beserkDmg.value);

//Crit
let selectorCrit=document.querySelector("#Crit");
let critValue=selectorCrit[selectorCrit.selectedIndex].value;
critMultiplier=Number(critValue);
if(critMultiplier==1){
   critMastery=0;
}

//Direction
let selectorDirection=document.querySelector("#Direction");
let directionValue= selectorDirection[selectorDirection.selectedIndex].value;
directionMultiplier=Number(directionValue);
if(directionMultiplier!=1.25|| directionMultiplier==1.1){
   rearMastery=0;
}
let fecablock=1;
let selectorBlock=document.querySelector("#block");
let block=Number(selectorBlock[selectorBlock.selectedIndex].value);
switch (block){
   case 1:
      block=1;
      fecablock=1;
    break;
   case .8:
      block=.8;
      fecablock=1;
      break;
   case .9:
      block=.8;
      fecablock=.9;
      break;
   case .85:
      block=.8;
      fecablock=.85;
      break;   
}

//sumofMasteries
sumOfMasteries=typeMastery+rangeMastery+critMastery+rearMastery+elementalMastery+beserkMastery;
sumofDmgInflicted=Number(dmgInflicted.value)/100;
sumOfMasteries=1+sumOfMasteries/100;
let healSumOfMasteries=typeMastery+rangeMastery+critMastery+elementalMastery+beserkMastery;
healSumOfMasteries=1+healSumOfMasteries/100;
let armorSumOfMasteries=1+typeMastery+rangeMastery+elementalMastery;

//calculations here


//dmg
finalDmgBeforeRes=baseDmg*sumOfMasteries*sumofDmgInflicted*directionMultiplier*critMultiplier*block*fecablock;
//armor
let armor=sumOfMasteries*baseDmg;
//heal

let heal= healSumOfMasteries*baseDmg*critMultiplier*sumofDmgInflicted;

//res 
let targetRes=0;
let barrier=0;

let selectorRes=document.querySelector("#res");
targetRes=1-(Number(selectorRes[selectorRes.selectedIndex].value)/100);



let finalDmgNumber=finalDmgBeforeRes*targetRes;

finalDmg.textContent="Final Damage: "+finalDmgBeforeRes;
afterResText.textContent="Final Damage after res: "+finalDmgNumber;
healText.textContent="Heal is:"+heal;
armorText.textContent="Armor is:"+armor;

}




setInterval(() => {
  setValues();
}, 1000);
