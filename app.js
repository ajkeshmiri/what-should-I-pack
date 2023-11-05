const eventChoiceN = document.querySelector("#nevent");
const eventChoiceY = document.querySelector("#yevent");
const swimChoiceN = document.querySelector("#nswim");
const swimChoiceY = document.querySelector("#yswim");
const numberEvents = document.querySelector("#event");
const numberSwims = document.querySelector("#swim");

swimChoiceN.addEventListener('click', function (){
    numberSwims.classList.toggle('hideItem');
})
swimChoiceY.addEventListener('click', function (){
    numberSwims.classList.toggle('hideItem');
})