var circles = {
    x: 0,
    y: 0,
    r: 1,
    sAng: 0,
    eAng: 2 * Math.PI  
};

function onLoad() {

}

function createCircles(num) {
    var objs = [];

    for(var i = 0; i < num; i++) {
        objs.push(circles);
    }

    console.log(objs.length);
    return objs;
}

function drawCircles() {
    var c = document.getElementById("blackhole");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke(); 
}

// window.onLoad(drawCircles());