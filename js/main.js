/**
 * Created by miguel on 17/09/16.
 */
function main1() {

    var img1 = new Image();
    img1.src = 'img/oak.png';
    var img2 = new Image();
    img2.src = 'img/choose.jpg';
    var canvas = document.getElementById("main_canvas");
    var ctx = canvas.getContext("2d");

    img1.onload = function(){
        ctx.drawImage(img1, 0, 0);
    }
    img2.onload = function(){
        ctx.drawImage(img2, 200,0, 300, 200);
    }
}