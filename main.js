//$(document).ready(function () {
    //your code here
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
//  });





// $(document).on('ready', () => {
//     const title = $('<h1>').text('Stock Ticker');
//     $('body').append(title);
//     console.log(title);

    

//     $.ajax({
//         type: 'GET',
//         url: 'https://finance.yahoo.com/quote/AAPL',
//         success: function(resp) {
//         console.log(resp);
        
//         //GETS message 
//         resp.forEach((message, index) => {
//           let post = $('<div id=' + index + '></div>').html(message.message); 
//           $('#chatArea').append(post);
//           })
//         }
//       })
//     })

