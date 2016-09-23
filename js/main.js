/**
 * Created by miguel on 17/09/16.
 */
function main1() {
    img3 = document.getElementById("img1");
    //img3 = new Image();
    //img3.src = "../img/oak.png";
    var canvas = document.getElementById("main_canvas");
    var ctx = canvas.getContext("2d");

    img3.onload = function(){
        ctx.drawImage(img3, 0, 0);
    }

    //document.getElementById("foca").innerHTML = img3.src;

    //ctx.fillStyle="#FF0000";
    //ctx.fillRect(0,0,100,100);
}