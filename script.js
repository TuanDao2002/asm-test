// Initialising parameters for scrolling events
var stop = 'false';
var duplicate = 'true';
var container = document.getElementById("scroll");
var stores = document.getElementsByClassName("store");
var horMargin = 30;

// Duplicate the number of items in the container
function setup() {
    let intialLength = stores.length;
    for (let i = 0; i < intialLength; i++) {
        container.appendChild(stores[i].cloneNode(true));
    }
}

// A function to create a scroll effect
function startScroll() {
    // Duplicate the number of items in the container once at the beginnning
    if (duplicate === 'true') {
        setup();
        duplicate = 'false';
    }

    let width = stores[0].offsetWidth;

    // If users do not hover the container, let it scroll to the left
    if (stop === 'false') {
        container.scrollLeft += 4;
    } 

    // Show more items when the container scrolls to the right
    if (container.scrollLeft === 0) {
        let clone = stores[stores.length-1].cloneNode(true);
        container.removeChild(stores[stores.length-1]);
        container.prepend(clone);
        console.log(container.scrollLeft);
        container.scrollLeft = width + horMargin * 2;
    }

    // Show more items when the container scrolls to the left
    if (container.scrollLeft >= width + horMargin * 2) {
        let clone = stores[0].cloneNode(true);
        container.removeChild(stores[0]);
        container.appendChild(clone);
        container.scrollLeft = 0;
    }
}

// A function to stop the scrolling effect
function stopScroll() {
    stop = 'true';
}

// A functioin to restart the scrolling effect
function restartScroll() {
    stop = 'false';
}

// Create the scrolling effect when the number of items exceeds the limit of items in the container
if (stores.length > 5) {
    setInterval('startScroll()', 25);
}

// Invoke the stopScroll() function when users hover the container
container.onmouseover = stopScroll;

// Invoke the restartScroll() function when users not hover the container
container.onmouseleave = restartScroll;