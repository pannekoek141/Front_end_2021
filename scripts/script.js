// JavaScript Document

//Haalt alle items op met de classname accordionItem en slaat deze op in een array(collectie van items)
var accItem = document.getElementsByClassName('accordionItem');

//Voor elke item in de array accItem voeg de event listener CLICK toe
for (i = 0; i < accItem.length; i++) {
    accItem[i].addEventListener('click', toggleItem);
    //wanneer click triggert, voer de functie toggleItem uit
}

//deze functie triggert dus als de eventlistener click uitgevoerd wordt
function toggleItem() {
    //voor elke item in de array accItem
    for (i = 0; i < accItem.length; i++) {
        //voeg de class close toe
        accItem[i].className = 'accordionItem close';
        
        //als de classname al close is, voeg open class toe
        if (accItem[i].className == 'accordionItem close') {
        this.className = 'accordionItem open';
        }
    }
}