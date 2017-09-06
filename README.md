# canvas_Basics
Quick silly app that teaches the basics of canvas.

Just uncomment the code in numbered in the html and js files

## 1. Accessing the Canvas API

To access the Canvas API we need to get the context from the element like so (already done)
```js
c = document.getElementById("myCanvas");
ctx = c.getContext("2d");
```

## 2. Drawing Lines

To draw a line we move our initial starting pointer `moveTo` then generate a line with `lineTo` its actually drawn with `stroke()` to make it visible.

```js
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();
```

## 3. Drawing Circles
Drawing a circle is actually a complete arc. We start tracking a path with `beginPath()` then use
 `arc(center x, center y,radius,start angle, endangle)` the path is ended with `closePath()` to generate the line then `stroke()` to draw it. 

```js
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.closePath();
ctx.stroke();
```
## 4. Fill and Stroke a Circle
To style a drawing we commonly use a mix of `stoke()` or `fill()` their settings are stored in variables.

* `fillStyle` - the applied style for filling, normally a colour but can be gradients.
* `lineWidth` - how wide the line is when you `stroke()`.
* `strokeStyle` - the applied style for strokes, normally a colour but can be gradients. 

```js
ctx.beginPath();
ctx.arc(100,70,40,0,2*Math.PI);
ctx.closePath();
ctx.fillStyle = 'green';
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = '#003300';
ctx.stroke();
```


## 5. Writing Text
Writing text is done with either `fillText(text, x, y)` or  `strokeText(text, x, y)` and your font and sizing is set in the `font` variable.

```js
var input  =document.getElementById("input").value;
ctx.font = "30px Arial";
ctx.fillText("User Said: " + input,100,100);
```
## 6. Drawing Images
drawing images is done via `drawImage(img, x ,y)` the image can be sourced multiple ways but a hidden element is a simple method.

```js
var img = document.getElementById("image");
ctx.drawImage(img,10,10);
```
## 7. Clearing
Part or all of the canvas can be cleared using `clearRect(start x, start y, end x, end y)`
```js
ctx.clearRect(0, 0, c.width, c.height);
```
## 8. Animation
Once you can clear the canvas it becomes possible to animate stuff. here you can see the draw and clear cycle of some of our previous functions within a interval.

```js
function animateCanvas(){
    var x = 0;
   interval = setInterval(function(){
       clearCanvas();
       switch(x) {
           case 0:
               drawcircle();
               break;
           case 1:
               drawLine();
               break;
           case 2:
               drawImage();
               break;
           default:
                x = -1
       }
       x++;
   }, 1000);
}

function stop(){
    clearInterval(interval);
    clearCanvas();
}
```