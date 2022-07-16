const electricityJS = () => {

//ELECTRICITY CANVAS 1
var size = 500;
var c = document.getElementById("canvas");
c.width = size;
c.height = size;
var ctx = c.getContext("2d");
var center = {x: 0, y: size / 2};
var minSegmentHeight = 5;
var groundHeight = size;
var color = "hsl(0, 0%, 0%)";
var roughness = 2;
var maxDifference = size / 5;
ctx.globalCompositeOperation = "lighter";
ctx.lineWidth = 2;
ctx.strokeStyle = color;
ctx.shadowColor = color;
ctx.fillStyle = "hsla(216, 55%, 16%, 0.2)";
ctx.fillRect(0, 0, size, size);

function render()
{
    ctx.shadowBlur = 0;
    ctx.globalCompositeOperation = "source-over";
    ctx.fillRect(0, 0, size, size);
    ctx.shadowBlur = 15;
    var lightning = createLightning();
    ctx.beginPath();

    for (var i = 0; i < lightning.length; i++)
    {
        ctx.lineTo(lightning[i].x, lightning[i].y);
    }
    ctx.stroke();
    requestAnimationFrame(render);
}

function createLightning()
{
    var segmentHeight = groundHeight - center.x;
    var lightning = [];
    lightning.push({x: center.x, y: center.y + ((Math.random() * 2 - 1) * 20)});
    lightning.push({x: (groundHeight - 10) + (Math.random() - 0.9) * 100, y:  Math.random() * (size - 200) + 100});
    var currDiff = maxDifference;
    
    while (segmentHeight > minSegmentHeight)
    {
        var newSegments = [];
        
        for (var i = 0; i < lightning.length - 1; i++)
        {
            var start = lightning[i];
            var end = lightning[i + 1];
            var midY = (start.y + end.y) / 2;
            var newY = midY + (Math.random() * 2 - 1) * currDiff;
            newSegments.push(start, {x: (start.x + end.x) / 2, y: newY});
        }
        newSegments.push(lightning.pop());
        lightning = newSegments;    
        currDiff /= roughness;
        segmentHeight /= 2;
    }
    return lightning;
}
render();

//ELECTRICITY CANVAS 2
var size2 = 500;
var c2 = document.getElementById("canvas2");
c2.width = size2;
c2.height = size2;
var ctx2 = c2.getContext("2d");
var center2 = {x: 0, y: size2 / 2};
var minSegmentHeight2 = 5;
var groundHeight2 = size2;
var color2 = "hsl(0, 0%, 0%)";
var roughness2 = 2;
var maxDifference2 = size2 / 5;
ctx2.globalCompositeOperation = "lighter";
ctx2.lineWidth = 2;
ctx2.strokeStyle = color2;
ctx2.shadowColor = color2;
ctx2.fillStyle = "hsla(216, 55%, 16%, 0.2)";
ctx2.fillRect(0, 0, size2, size2);

function render2()
{
    ctx2.shadowBlur = 0;
    ctx2.globalCompositeOperation = "source-over";
    ctx2.fillRect(0, 0, size2, size2);
    ctx2.shadowBlur = 15;
    var lightning2 = createLightning2();
    ctx2.beginPath();
    for (var i = 0; i < lightning2.length; i++)
    {
        ctx2.lineTo(lightning2[i].x, lightning2[i].y);
    }
    ctx2.stroke();
    requestAnimationFrame(render2);
}

function createLightning2()
{
    var segmentHeight2 = groundHeight2 - center2.x;
    var lightning2 = [];
    lightning2.push({x: center2.x, y: center2.y + ((Math.random() * 2 - 1) * 20)});
    lightning2.push({x: (groundHeight2 - 10) + (Math.random() - 0.9) * 100, y:  Math.random() * (size2 - 200) + 100});
    var currDiff2 = maxDifference2;
    
    while (segmentHeight2 > minSegmentHeight2)
    {
        var newSegments2 = [];
        
        for (var i = 0; i < lightning2.length - 1; i++)
        {
            var start2 = lightning2[i];
            var end2 = lightning2[i + 1];
            var midY2 = (start2.y + end2.y) / 2;
            var newY2 = midY2 + (Math.random() * 2 - 1) * currDiff2;
            newSegments2.push(start2, {x: (start2.x + end2.x) / 2, y: newY2});
        }
        newSegments2.push(lightning2.pop());
        lightning2 = newSegments2;    
        currDiff2 /= roughness2;
        segmentHeight2 /= 2;
    }
    return lightning2;
}
render2();

}

export default electricityJS