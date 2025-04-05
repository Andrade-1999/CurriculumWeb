var main = function () {
    "use strict";

//    var toDos = ["primo todo", "secondo todo", "terzo todo", "quarto todo"];
    var $toDos_UL = $("<ul>");
    var index;
    var $input = $("<input>");
    var $p_tab3 = $("<p>");
    var $tab3_content = $("<div>");

/*    for(index=0;index<toDos.length;index++) {
            $toDos_UL.append($("<li>").text(toDos[index]));
    }
    $(".content").append($toDos_UL);
*/

    $(".tabs a:nth-child(1) span").on("click", function() {
//		$(".content ul").empty();
//		$(".tab3_content").empty();
    	$(".tabs a span").removeClass("active");
        $(".content div").removeClass("active");
    	$(".tabs a:nth-child(1) span").addClass("active");
        $(".content div:nth-child(1)").hide();
        $(".content div:nth-child(1)").addClass("active");
        $(".content div:nth-child(1)").fadeIn(1000);

/*    	for(index=0;index<toDos.length;index++) {
    		$toDos_UL.append($("<li>").text(toDos[index]));
    	}
    	$(".content").append($toDos_UL);
*/
    });

	$(".tabs a:nth-child(2) span").on("click", function() {
//		$(".content ul").empty();
//		$(".tab3_content").empty();
        $(".tabs a span").removeClass("active");
        $(".content div").removeClass("active");
        $(".tabs a:nth-child(2) span").addClass("active");
        $(".content div:nth-child(2)").hide();
        $(".content div:nth-child(2)").addClass("active");
        $(".content div:nth-child(2)").fadeIn(1000);
/*    	for(index=toDos.length;index>0;index--) {
    		$toDos_UL.append($("<li>").text(toDos[index-1]));
    	}
    	$(".content").append($toDos_UL);
*/
    });

    $(".tabs a:nth-child(3) span").on("click", function() {
//      $(".content ul").empty();
//      $(".tab3_content").empty();
        $(".tabs a span").removeClass("active");
        $(".content div").removeClass("active");
        $(".tabs a:nth-child(3) span").addClass("active");
        $(".content div:nth-child(3)").hide();
        $(".content div:nth-child(3)").addClass("active");
        $(".content div:nth-child(3)").fadeIn(1000);
/*      for(index=toDos.length;index>0;index--) {
            $toDos_UL.append($("<li>").text(toDos[index-1]));
        }
        $(".content").append($toDos_UL);
*/
    });

    $(".tabs a:nth-child(4) span").on("click", function() {
//      $(".content ul").empty();
//      $(".tab3_content").empty();
        $(".tabs a span").removeClass("active");
        $(".content div").removeClass("active");
        $(".tabs a:nth-child(4) span").addClass("active");
        $(".content div:nth-child(4)").hide();
        $(".content div:nth-child(4)").addClass("active");
        $(".content div:nth-child(4)").fadeIn(1000);
/*      for(index=toDos.length;index>0;index--) {
            $toDos_UL.append($("<li>").text(toDos[index-1]));
        }
        $(".content").append($toDos_UL);
*/
    });


    $(".content button").on("click", function(event) {
        var $new_h4_1 = $("<h4>");
        var $new_h5_2 = $("<h5>");
        var $new_p = $("<p>");
        var $new_li = $("<li>");
        var $ruolo_azienda_r = $("<span>").text($("main .container .content .active ul li input[name='ruolo']").val());
        var $ruolo_azienda_d = $("<h5>").text($("main .container .content .active ul li input[name='data']").val());
        var $ruolo_azienda_a = $("<p>").text($("main .container .content .active ul li input[name='attivita']").val());
        if($("main .container .content .active ul li input[name='ruolo']").val()!=="" && 
            $("main .container .content .active ul li input[name='data']").val()!=="" &&
            $("main .container .content .active ul li input[name='attivita']").val()!=="") {
            $ruolo_azienda_r.addClass("important");
            $new_h4_1.append($ruolo_azienda_r);
            $new_h4_1.hide();
            $new_li.append($new_h4_1);
            $new_h5_2.append($ruolo_azienda_d);
            $new_h5_2.hide();
            $new_li.append($new_h5_2);
            $new_p.append($ruolo_azienda_a);
            $new_p.hide();
            $new_li.append($new_p);
            $(".content div:nth-child(4) .esperienze ul").append($new_li);
            $new_h4_1.slideDown();
            $new_h5_2.slideDown();
            $new_p.slideDown();
            $("main .container .content .active ul li input").val("");
        }
    });

/*	$(".tabs a:nth-child(4) span").on("click", function() {
//		$(".content ul").empty();
    	$(".tabs a span").removeClass("active");
    	$(".tabs a:nth-child(4) span").addClass("active");
    	$(".content").append($tab3_content.addClass("tab3_content"));
    	$(".tab3_content").append($p_tab3.text("Inserisci una nuova esperienza lavorativa"));
    	$(".tab3_content").append($input);
    	$(".tab3_content input").on("keypress", function(event) {
            if((event.keyCode === 13)&&($(".tab3_content input").val()!=="")) {
                toDos.push($("input").val());
                $("input").val("");
                console.log(toDos);
            }
        });					
    });
    */

};

$(document).ready(main);