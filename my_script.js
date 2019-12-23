const spellDmg=document.querySelector('#spellDmg');
 const eleMast=document.querySelector('#eleMast');
 const typeMast=document.querySelector('#typeMast');// st aoe
 const rangeMast=document.querySelector('#rangeMast');
 const critMast=document.querySelector('#critMast');
 const rearMast=document.querySelector('#rearMast');
const beserkDmg=document.querySelector("#BeserkMast");
const finalDmg=document.querySelector("#Finaldmg");
const dmgInflicted=document.querySelector("#dmgInflicted");
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

//res 
let targetRes=0;
let barrier=0;
let reduction= targetRes-barrier;

let finalDmgNumber=finalDmgBeforeRes-reduction;

const calculateDmg=function() {
    getValues();
    finalDmg.textContent="Final Damage: "+finalDmgBeforeRes;
    console.log("this is final dmg: " +finalDmgBeforeRes);
}

const getValues=function(){
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

//Direction
let selectorDirection=document.querySelector("#Direction");
let directionValue= selectorDirection[selectorDirection.selectedIndex].value;
directionMultiplier=Number(directionValue);


//sumofMasteries
sumOfMasteries=typeMastery+rangeMastery+critMastery+rearMastery+elementalMastery+beserkMastery;
sumofDmgInflicted=Number(dmgInflicted.value);
console.log("This is all Masteries: "+sumOfMasteries);

//calculations here
sumOfMasteries=1+sumOfMasteries/100;
//dmg
finalDmgBeforeRes=baseDmg*sumOfMasteries*sumofDmgInflicted*directionMultiplier*critMultiplier*block;

}

let astring=`base ${baseDmg} sumofDmgInflicted ${sumofDmgInflicted} sumofMasteries${sumOfMasteries} direction${directionMultiplier} crit${critMultiplier}
 block ${block}`;

button.addEventListener('click', ()=>{
   calculateDmg();
   console.log(astring);
});
console.log(finalDmg.textContent);