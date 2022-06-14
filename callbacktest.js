const growButton = document.getElementById("grow-btn");
console.log(growButton)

const shrinkButton = document.getElementById("shrink-btn");
console.log(shrinkButton)

const roundButton = document.getElementById("round-btn");
console.log(roundButton)

const div = document.getElementById("callbacktest-div");

let delayInput = document.getElementById("delay-entry");

let scaleInput = document.getElementById("scale-entry");


function grow() {
    setTimeout(() => {

        div.style.width += scaleInput.value.concat('px');
        div.style.height += scaleInput.value.concat('px');
        console.log("did it work?");
    }, 3000)
    
}
function delayGrowth() {
    setTimeout(() => {
        div.style.width += delayInput.value.concat('px');
    },Number(delayInput.value*1000))
}
 

// function reset() {
//     div.style.width =  scaleInput.value.concat('px');
//     div.style.height =  scaleInput.value.concat('px');
//     console.log("grew")
// }


growButton.addEventListener("click", () => grow());
growButton.addEventListener("click", () => delayGrowth());
// growButton.addEventListener("click", () => reset());


function shrink() {
    setTimeout(() => {
          div.style.width -= scaleInput.value.concat('px');
        div.style.height -= scaleInput.value.concat('px');
         console.log("shrunk")
    },3000)
}

function shrinkDelay() {
    setTimeout(() => {
        div.style.width += delayInput.value.concat('px');
    }, Number(delayInput.value * 1000));
}

shrinkButton.addEventListener("click", () => shrink());
shrinkButton.addEventListener("click", () => shrinkDelay());

function round() {
    setTimeout(() => {
        div.style.borderRadius = scaleInput.value.concat('px');
        console.log('please work');
    }, 2000)
}

roundButton.addEventListener("click", () => round());


// function roundDelay() {
//     setTimeout(() => {
//         div.style.width += delayInput.value.concat('px');
//     }, Number(delayInput.value * 1000));
// }
// roundButton.addEventListener("click", () => roundDelay());



