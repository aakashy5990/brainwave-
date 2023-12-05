let circularProgress = document.querySelector(".circular-progress"),
Progressvalue = document.querySelector(".progress-value");

let progressStartValue = 0,
    progressEndValue = 80,
    speed = 50;

let progress  = setInterval(() =>{
    progressStartValue++;

    Progressvalue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#fff ${progressStartValue * 3.6}deg, transparent 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }

}, speed);


/* skills bar 1 css  */



let circularProgress1 = document.querySelector(".circular-progress1"),
Progressvalue1 = document.querySelector(".progress-value1");

let progressStartValue1 = 0,
    progressEndValue1 = 60,
    speeds = 50;

let progress1  = setInterval(() =>{
    progressStartValue1++;

    Progressvalue1.textContent = `${progressStartValue1}%`
    circularProgress1.style.background = `conic-gradient(#fff ${progressStartValue1 * 3.6}deg, transparent 0deg)`

    if(progressStartValue1 == progressEndValue1){
        clearInterval(progress1);
    }

}, speeds);


/* skills bar 2 css  */
let circularProgress2 = document.querySelector(".circular-progress2"),
Progressvalue2 = document.querySelector(".progress-value2");

let progressStartValue2 = 0,
    progressEndValue2 = 75,
    speedss = 50;

let progress2  = setInterval(() =>{
    progressStartValue2++;

    Progressvalue2.textContent = `${progressStartValue2}%`
    circularProgress2.style.background = `conic-gradient(#fff ${progressStartValue2 * 3.6}deg, transparent 0deg)`

    if(progressStartValue2 == progressEndValue2){
        clearInterval(progress2);
    }

}, speeds);


/* skills bar 3 css  */
let circularProgress3 = document.querySelector(".circular-progress3"),
Progressvalue3 = document.querySelector(".progress-value3");

let progressStartValue3 = 0,
    progressEndValue3 = 65,
    speedsss = 50;

let progress3  = setInterval(() =>{
    progressStartValue3++;

    Progressvalue3.textContent = `${progressStartValue3}%`
    circularProgress3.style.background = `conic-gradient(#fff ${progressStartValue3 * 3.6}deg, transparent 0deg)`

    if(progressStartValue3 == progressEndValue3){
        clearInterval(progress3);
    }

}, speeds);



// menu js 
const menuToggle  = document.querySelector('#menu-toggle');
const menulist  = document.querySelector('#menu-list');

menuToggle.addEventListener('click', function(){
    menulist.classList.toggle('active');
})
