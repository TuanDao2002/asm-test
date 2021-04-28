var stop = 'false';
var duplicate = 'true';
var container = document.getElementById("scroll");
var stores = document.getElementsByClassName("store");
var horMargin = 50;

console.log(stores);

function setup() {
    let intialLength = stores.length;
    for (let i = 0; i < intialLength; i++) {
        container.appendChild(stores[i].cloneNode(true));
    }
}

function startScroll() {
    if (duplicate === 'true') {
        setup();
        duplicate = 'false';
    }

    let width = stores[0].offsetWidth;

    if (stop === 'false') {
        container.scrollLeft += 4;
    } 

    if (container.scrollLeft === 0) {
        let clone = stores[stores.length-1].cloneNode(true);
        container.removeChild(stores[stores.length-1]);
        container.prepend(clone);
        console.log(container.scrollLeft);
        container.scrollLeft = width + horMargin * 2;
    }

    if (container.scrollLeft >= width + horMargin * 2) {
        let clone = stores[0].cloneNode(true);
        container.removeChild(stores[0]);
        container.appendChild(clone);
        container.scrollLeft = 0;
    }
}

function stopScroll() {
    stop = 'true';
}

function restartScroll() {
    stop = 'false';
}

if (stores.length > 5) {
    setInterval('startScroll()', 20);
}

container.onmouseover = stopScroll;
container.onmouseleave = restartScroll;