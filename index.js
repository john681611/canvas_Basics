var c, ctx,interval;


function canvasInit(){
    // 1 get canvas a its context
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
}

// 2 Drawing Lines
// function drawLine(){
//     ctx.moveTo(0,0);
//     ctx.lineTo(200,100);
//     ctx.stroke();
// }

// 3 Drawing Circles
// function drawcircle() {
//     ctx.beginPath();
//     ctx.arc(95,50,40,0,2*Math.PI);
//     ctx.closePath();
//     ctx.stroke();
// }

// 4 Drawing Circles with style
// function complexCircle(){
//     ctx.beginPath();
//     ctx.arc(100,70,40,0,2*Math.PI);
//     ctx.fillStyle = 'green';
//     ctx.fill();
//     ctx.lineWidth = 5;
//     ctx.strokeStyle = '#003300';
//     ctx.stroke();
//
// }

// 5 Writing something
// function writeSomething() {
//     var input  =document.getElementById("input").value;
//     ctx.font = "30px Arial";
//     ctx.fillText("User Said: " + input,100,100);
// }

// 6 Drawing Images
// function drawImage(){
//     var img = document.getElementById("image");
//     ctx.drawImage(img,10,10);
// }

// 7 Clearing
// function clearCanvas(){
//     ctx.clearRect(0, 0, c.width, c.height);
// }

// 8 Basic Animation
// function animateCanvas(){
//     var x = 0;
//    interval = setInterval(function(){
//        clearCanvas();
//        switch(x) {
//            case 0:
//                drawcircle();
//                break;
//            case 1:
//                drawLine();
//                break;
//            case 2:
//                drawImage();
//                break;
//            default:
//                 x = -1
//        }
//        x++;
//    }, 1000);
// }
//
// function stop(){
//     clearInterval(interval);
//     clearCanvas();
// }

window.onload = function () {
    canvasInit();
};
