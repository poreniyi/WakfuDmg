import requests
import re
import json
from bs4 import BeautifulSoup
#
link="https://www.wakfu.com/en/mmorpg/encyclopedia/classes/10-sadida/929-fertilizer"
page= requests.get(link)
print ("The status code is: "+str(page.status_code))
soup= BeautifulSoup(page.content, 'html.parser')
#
class Spells:
    Spell_Name=None
    D1 =None
    D200=None
    H1=None
    H200=None
    A1=None
    A200=None
aSpell=Spells()
spellList=[]
def getAllClassSpells():  
    allElements=[]
    waterSpells=soup.select("div.ak-elementary-spell-water a")
    fireSpells=soup.select("div.ak-elementary-spell-fire a")
    windSpells=soup.select("div.ak-elementary-spell-wind a")
    earthSpells=soup.select("div.ak-elementary-spell-earth a")
    stasisSpells=soup.select("div.ak-elementary-spell-stasis a")
    allElements.append(waterSpells)
    allElements.append(fireSpells)
    allElements.append(windSpells)
    allElements.append(earthSpells)
    allElements.append(stasisSpells)
    def openClassTxtFile():
    f=open('classSpellList.txt', 'r')
    fileLines=f.readlines()
    counter=1
    for i in fileLines:
        print('This is line: '+str(counter)+i)
        counter+=1

def findClass():#maybe get rid of this
    classRegex='-\w+/'
    classRegexMatch=re.search(classRegex, link)
    nameOFclass=classRegexMatch.group()
    nameOFclass=nameOFclass[1:len(nameOFclass)-1]
    print("The class is: "+nameOFclass)
    return nameOFclass
    
mylist=soup.select("div.ak-title")
dmgNumbers, healNumbers, armorNumbers=[],[],[]

for i in mylist:
    item=i.get_text()
    match=re.search('Damage: \d+', item)
    heal_match=re.search('Heal: \d+', item)
    armor_match=re.search('Armor: \d+', item)
    if heal_match:
        healNumbers.append(heal_match.group())
    if armor_match:
        armorNumbers.append(armor_match.group())
    if match:
        dmgNumbers.append(match.group())
        #print(match.group())
    #print(match.group())
list_length=str(len(mylist))

    

def trim_function(a_string):
    a_string=a_string[8:]
    return a_string
#make below into a switch and then delete this comment
def trimDmgValues(list):
    if len(list)>0:
        list[0]=list[0][8:]
        list[398]=list[398][8:]
def trimHealValues(list):
    if len(list)>0:
        list[0]=list[0][6:]
        list[398]=list[398][6:]
def trimArmorlValues(list):
    if len(list)!=0:
        list[0]=list[0][7:]
        list[398]=list[398][7:]
def trimAllValues():
    trimDmgValues(dmgNumbers)
    trimArmorlValues(armorNumbers)
    trimHealValues(healNumbers)
def printLists():
    if len(dmgNumbers)>0:
        print("Lvl1 Damage: "+dmgNumbers[0])
        print("Lvl 200 Damage: "+dmgNumbers[398])
    if len(healNumbers)>0:
        print("Lvl1 Heal: "+healNumbers[0])
        print("Lvl 200 Heal: "+healNumbers[398])
    if len(armorNumbers)>0:
        print("Lvl1 Armor: "+armorNumbers[0])
        print("Lvl 200 Armor: "+armorNumbers[398])
print("Length of armor is: "+str(len(armorNumbers)))

def SpellToJson():
    aSpell.Spell_Name="a"
    if len(dmgNumbers)>0:
        aSpell.D1=dmgNumbers[0]
        aSpell.D200=dmgNumbers[398]
    if len(healNumbers)>0:
        aSpell.H1=healNumbers[0]
        aSpell.H200=healNumbers[398]
    if len(armorNumbers)>0:
        aSpell.A1=armorNumbers[0]
        aSpell.A200=armorNumbers[398]
    objectofAspell=aSpell.__dict__
    print(objectofAspell)
    spellList.append(objectofAspell)
    print(spellList)
    name= findClass()
    jsonWriterOjbect=name+str(spellList)
    print(jsonWriterOjbect)

trimAllValues()
printLists()
findClass()
SpellToJson()

#print(json.dumps(spellobject))
def writeToJsonFile(file_name):
    with open("PLACHEROLDER FOR FILE NAME.json", 'w') as fp:
        json.dump("my json data that's a dictonary obhect", fp)