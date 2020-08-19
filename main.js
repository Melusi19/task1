const storageInput = document.querySelector(".storage");
const text = document.querySelector(".text");
const button = document.querySelector(".text");
const storageInput = localStorage.getItem("textInput");

storageInput.addEventListener("input", letter => {
    text.textContent = letter.target.value
})

const saveToLocalStoage = () => {
    localStorage.setItem("textInput", text.textContent)
}

button.addEventListener("click", saveToLocalStoage)

$('.selector').css("background-color", 'transparent');
$('#color-h').text("Set Color Theme " + "(" + localStorage.getItem('color') + ")")
$('#font-h').text("Set Font " + "(" + localStorage.getItem('font') + ")")
$('#shadow-h').text("Text Shadow " + "(" + localStorage.getItem('Shadow') + ")")
$('#chain-h').text("Chained Effect " + "(" + localStorage.getItem('chain') + ")")

$(document).ready(function() {
    $('*').css("font-family", (localStorage.getItem('font')));
    $('body').css("background-color", (localStorage.getItem('color')));
    $('*').css("text-shadow", localStorage.getItem('Shadow'));
})