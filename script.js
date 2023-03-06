const body = document.querySelector("body");
const leftinput = document.querySelector(".left_input");
const rightinput = document.querySelector(".right_input");
const cssoutput = document.querySelector(".css-output");
const button = document.querySelector("button")

let leftcolor = leftinput.value;
let rightcolor = rightinput.value;

const changebackground = () => {
    const cssString= `linear-gradient(to right, ${leftcolor}, ${rightcolor})`;
    body.style.background= cssString;

    cssoutput.textContent = `background: ${cssString}`
};

const randomcolor = () => {
    const value= "123456789abcdef";

    let color = '#';

    for(let i=0; i<6; i++){
        const randomindex =  Math.floor((Math.random() * 100) % 10);
        color += value[randomindex];
    }

    return color;
};

button.addEventListener("click", () =>{
    leftcolor = randomcolor();
    rightcolor = randomcolor();

    leftinput.value = leftcolor;
    rightinput.value = rightcolor;
    changebackground();
});

leftinput.addEventListener("change", (event) => {
    leftcolor = event.target.value;
    changebackground();
});

rightinput.addEventListener("change", (event) => {
    rightcolor = event.target.value;
    changebackground();
});