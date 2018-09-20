
$(document).ready(function() {
    $("p").each(function( index ) {
        let ticker = [  'AAPL','MSFT','SIRI','CMCSA','NLST','INTC','CPRT','EBAY','CSCO','QCOM','NFLX',
                        'MRVL','HBAN','NEPT','AMAT','SBUX','FLEX','AGNC','GERN','NVDA','FITB','DLTR',
                        'ETFC','ESRX','SYMC','TNDM','SNMX','MYL','AMZN','GPRO','ATVI','GILD','BIDU',
                        'DISCA','ROST','CELG','IDTI','BBBY','NAVI','CTRP','RIGL','EXEL','AIMC','FB',
                        'GOOGL','GOOG','DIS','TWTR','EA'];
        let p_text = $(this).text();
        for (let i = 0; i < ticker.length; i++) {
            let search = ticker[i];
            let replace = "<a href=\"https://finance.yahoo.com/quote/" + ticker[i] + "\">" + ticker[i] + "</a>";
            console.log(search, replace);
            p_text = p_text.replace(search, replace);     
        }
        $(this).html(p_text)
    });
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




