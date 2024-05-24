const texts = ['Data Scientist', 'Python Developer', 'Machine Learning Specialist', 'Programmer'];
const typingDelay = 20;
const newTextDelay = 200;

let textIndex = 0;
let charIndex = 0;

const typingTextElemnet = document.getElementById("typing");

function typeText(){
    if(charIndex < texts[textIndex].length){
        typingTextElemnet.textContent += texts[textIndex].charAt(charIndex);
        charIndex ++;
        setTimeout(typeText, newTextDelay);
    } else{
        setTimeout(deleteText, typingDelay);
    }

}

function deleteText(){
    if (charIndex > 0){
        typingTextElemnet.textContent = texts[textIndex].substring(0, charIndex-1);
        charIndex --;
        setTimeout(deleteText, typingDelay);
    } else{
        textIndex = (textIndex + 1)%texts.length;
        setTimeout(typeText, typingDelay);
    }
}

typeText()

// Counters

let counts = setInterval(updated);
let upto = 0;
function updated(){
    let count = document.getElementById('happy');
    count.innerHTML = ++upto;
    if(upto === 1){
        clearInterval(counts);
    }
}

let counts2 = setInterval(updated2);
let upto2 = 0;
function updated2(){
    let count = document.getElementById('cup');
    count.innerHTML = ++upto2;
    if(upto2 === 9989){
        clearInterval(counts2);
    }
}

let counts3 = setInterval(updated3);
let upto3 = 0;
function updated3(){
    let count = document.getElementById('projects');
    count.innerHTML = ++upto3;
    if(upto3 === 8283){
        clearInterval(counts3);
    }
}
