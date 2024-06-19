$(document).ready(function () {

    $(window).scroll(function () {

        //console.log("Çalışdı")

        var distance = $(window).scrollTop();
        //console.log(distance)

        if (distance > 100) {
            /* console.log(distance)
               console.log("Yesss")
            */

            $(".go-upstairs").fadeIn();  //Görünən edir
        }
        else {
            $(".go-upstairs").fadeOut(); //Gizlədir
        }

    });

    $(".go-upstairs").click(function () {

        $("html").animate({
            scrollTop: 0
        });

    });

});