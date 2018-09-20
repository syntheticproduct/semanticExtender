function ticker() {
    let ticker = 'AAPL';
    let tickerregex = new RegExp(ticker, "gi");
    //"<a href="https://finance.yahoo.com/quote/AAPL">AAPL</a\>"
    let replace = "<a href=\"https://finance.yahoo.com/quote/" + ticker + "\">" + ticker +"</a>";
    
    
    var strNewString = $('body').html().replace(tickerregex,replace);
    $('body').html(strNewString);

    // $(".text_div").text(function () {
    //     return $(this).text().replace("contains", "hello everyone");
    //  });
}


