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