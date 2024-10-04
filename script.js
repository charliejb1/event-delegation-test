const addBoxButton = document.querySelector("#box-button")
const addCircleButton = document.querySelector("#circle-button")
const grid = document.querySelector(".grid")
const grid2 = document.querySelector(".grid-2")
const boxes = document.querySelector(".box")
const circle = document.querySelector(".circle")

// important click function used for creating and appending something new
addBoxButton.addEventListener("click", () => {
    const box = document.createElement ("div")
    box.classList.add("box")
    grid.append(box)
});

addCircleButton.addEventListener("click", () => {
    const circle = document.createElement ("div")
    circle.classList.add("circle")
    grid2.append(circle)
});

// if event (click) matches the css selector, then the classlist is toggled
// basically if the click is on that item (.box), then it the other css classlist is toggled
document.addEventListener("click", e => {
    if (e.target.matches(".box")){
        e.target.classList.toggle("clicked")
    }
})

document.addEventListener("click", e => {
    if (e.target.matches(".circle")){
        e.target.classList.toggle("clicked")
    }
})
// Internet explanation:

// This is a technique that allows you to set a single event listener on a parent element instead of individual listeners on multiple child elements. 
// It relies on the event bubbling phase, where events propagate up the DOM tree from the target element to its ancestors.

// Since the boxes and circles are created dynamically (when buttons are clicked), setting individual event listeners on them wouldn’t work.
// Instead, the parent element listens for clicks and checks if the target of the click matches a specific selector.

// My writing:

// You're basically saying that any new shape you make that has a css selector (they always do), allow for a new css selector to be added to it when clicked on.
// This is efficient becuase now you are not individually having to create/code a new css selector for filling in the circles every time one is created.
// Instead, every time one is created, it automatically has a new css slector tied to it.

// Short way: Anything created that congtains this particular css selector, attach this new css selctor to it 
