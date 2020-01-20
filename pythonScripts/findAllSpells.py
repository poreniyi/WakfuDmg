import requests
import re
import json
import datetime
from bs4 import BeautifulSoup


link="https://www.wakfu.com/en/mmorpg/encyclopedia/classes/1-feca"
page= requests.get(link)
print ("The status code is: "+str(page.status_code))
soup= BeautifulSoup(page.content, 'html.parser')

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
def printList(theList):
    for i in theList:
        print('The spell is: '+i['title']+' The link is: www.wakfu.com'+i['href'])
    print('Length of this list is: '+str(len(theList)))

def printAll():
    printList(waterSpells)
    printList(earthSpells)
    printList(fireSpells)
    printList(windSpells)
    printList(stasisSpells)
#eventually delete everything above this line/move it into spellsToJson
listOfClassLinks=[]
def getClassLinks():
    global listOfClassLinks
    classLink='https://www.wakfu.com/en/mmorpg/encyclopedia/classes'
    classPage= requests.get(classLink)
    print ("The status code is: "+str(page.status_code))
    classSoupObject=BeautifulSoup(classPage.content, 'html.parser')
    listofClasses=classSoupObject.select('div.ak-panel-content a')
    listOfClassLinks=[]
    for i in listofClasses:
        if 'classes/' in i['href']:
            theLink='www.wakfu.com'+i['href']
            listOfClassLinks.append(theLink)
for i in listOfClassLinks:
    print(i)

def writeToTxtFile():
    x
    f=open('classSpellList.txt', 'w+')   
    for i in listOfClassLinks:
        f.write(i+'\n')       

def openClassTxtFile():
    f=open('classSpellList.txt', 'r')
    fileLines=f.readlines()
    counter=1
    mylist=[]
    for i in fileLines:
        mylist.append(i)
        #print('This is line: '+str(counter)+i)
        counter+=1



getClassLinks()
#writeToTxtFile()
openClassTxtFile()