function openTab (evt){
    if (evt === 'Cancellations') {
        $('.cancellations-tab').click(function (event){
            $('.row .large-12 h1').css({'border-top':'none', 'color':'#e58a31'});
            event.preventDefault();
            $('.Rules').hide();
            $('.Rules1').hide();
            $('.Cancellations').show();
            $('.cancellations .row .large-12:nth-child(even) h1').css({'border-top':'2px solid #ff1304', 'color':'#ff1304'})
        })
    }  else if (evt === 'Rules')  {
        $('.rules-tab').click(function (event) {
            $('.row .large-12 h1').css({'border-top':'none', 'color':'#e58a31'});
            event.preventDefault();
            $('.Rules').show();
            $('.Rules1').show();
            $('.Cancellations').hide();
            $('.cancellations .row .large-12:nth-child(odd) h1').css({'border-top':'2px solid #ff1304', 'color':'#ff1304'})
        })
    }
}
