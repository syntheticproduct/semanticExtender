
$(document).ready(function() {
    let ticker = 'AAPL';
    let tickerregex = new RegExp(ticker, "gi");
        //"<a href="https://finance.yahoo.com/quote/AAPL">AAPL</a\>"
    let replace = "<a href=\"https://finance.yahoo.com/quote/" + ticker + "\">" + ticker +"</a>";
    
    var strNewString = $('.st').html().replace(tickerregex,replace);
    $('.st').html(strNewString);
});


let inputBox = document.getElementById("inputBox");
inputBox.addEventListener("keydown",function(event){
    if(event.keyCode === 13) {
        chrome.tabs.create({url:"https://finance.yahoo.com/quote/"+event.target.value})
    }
}) 

let chartBox = document.getElementById("chartButton");
chartBox.addEventListener("click",function(event){
    chrome.tabs.create({url:"https://finance.yahoo.com/quote/"+inputBox.value+"/chart"})
})

let statisticsBox = document.getElementById("statisticsButton");
statisticsBox.addEventListener("click",function(event){
    chrome.tabs.create({url:"https://finance.yahoo.com/quote/"+inputBox.value+"/key-statistics"})
})

let financialsBox = document.getElementById("financialsButton");
financialsBox.addEventListener("click",function(event){
    chrome.tabs.create({url:"https://finance.yahoo.com/quote/"+inputBox.value+"/financials"})
})




