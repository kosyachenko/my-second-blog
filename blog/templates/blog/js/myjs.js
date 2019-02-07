$(function(){
    alert($('h1').text());
    alert($('.link-moto').text());
    $('.slide-btn').hide(1000);
    var fontStateP=0;
    var fontStateM=0;
    $('.btn-fs').click(function(){
        var fontSize = parseInt($("body").css("font-size"));
        if ($(this).hasClass("plus-font-size"))
        {
            fontSize = fontSize+1+"px";
            $("body").css({"font-size": fontSize});
            fontStateP++;
        }

        if ($(this).hasClass("minus-font-size"))
        {
            fontSize = fontSize-1+"px";
            $("body").css({"font-size": fontSize});
            fontStateM++;
        }

        if ($(this).hasClass("normal-font-size"))
        {
            if (fontStateP>0)
            {
                fontSize = fontSize-fontStateP+"px";
                $("body").css({"font-size": fontSize});
                fontStateP=0;
                fontStateM=0;
            }
            if (fontStateM>0)
            {
                fontSize = fontSize+fontStateM+"px";
                $("body").css({"font-size": fontSize});
                fontStateP=0;
                fontStateM=0;

            }
            
        }

    })
});