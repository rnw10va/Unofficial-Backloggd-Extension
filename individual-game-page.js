var locationForButton = document.getElementsByClassName("game-page-sidecard")[0].parentElement.parentElement.parentElement;

if (locationForButton) {
    aTags = document.getElementsByTagName("a");
    const linkToUse1a = "https://www.isthereanydeal.com";
    const linkToUse1b = linkToUse1a + "/game/" + document.getElementsByClassName("game-slug-container")[0].id + "/info/";
    buttonAddition("  ITAD Link", linkToUse1a, linkToUse1b);
    const linkToUse2a = "https://www.howlongtobeat.com";
    const linkToUse2b = linkToUse2a + "/?q=" + document.querySelectorAll('h1.mb-0')[0].textContent;
    buttonAddition("  HLTB Link", linkToUse2a, linkToUse2b);
}

function buttonAddition(buttonText, linkTexta, linkTestb){
    var divTemp = document.createElement("div");
    divTemp.className = "col-5 col-sm-6 col-md-auto pl-1";
    var aTemp = document.createElement("a");
    aTemp.href = linkTestb;
    var pTemp = document.createElement("p");
    pTemp.className = "game-page-sidecard";
    var iTemp = document.createElement("img");
    iTemp.src = "https://s2.googleusercontent.com/s2/favicons?domain=" + linkTexta;
    iTemp.style = "position: relative; top: -" + iTemp.width / 8 + "px;";
    const textNode = document.createTextNode(buttonText);

    pTemp.appendChild(iTemp);
    pTemp.appendChild(textNode);
    aTemp.appendChild(pTemp);
    divTemp.appendChild(aTemp);
    locationForButton.appendChild(divTemp);
}
