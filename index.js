let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let text1 = document.querySelector(".text-1");
let text2 = document.querySelector(".text-2");
let body = document.getElementsByTagName("body")[0];

input1.addEventListener("input", function(){
    let color1 = input1.value;
    let color2 = input2.value;
    let background = "linear-gradient(315deg, " + color1 + " 0%, " + color2 + " 50%)"
    text1.textContent = color1;
    text1.style.color = color1;
    text2.textContent = color2;
    body.style.background = background;
})

input2.addEventListener("input", function(){
    let color1 = input1.value;
    let color2 = input2.value;
    let background = "linear-gradient(315deg, " + color1 + " 0%, " + color2 + " 50%)"
    text1.textContent = color1;
    text2.textContent = color2;
    text2.style.color = color2;
    body.style.background = background;
})