document.querySelector("#equal").addEventListener('click', calculate);
var tocalculate = document.querySelector("#tocalculate");
var result_show = document.querySelector("#result_show");
var buttons = document.querySelectorAll('#first-line button,#left-content button,#right-content button');
for (i = 5; i < buttons.length - 1; i++) {

    buttons[i].addEventListener('click', writing);

}
buttons[0].addEventListener('click', empty_result);
buttons[1].addEventListener('click', addtomemory);
buttons[2].addEventListener('click', clear_memory);
buttons[3].addEventListener('click', delete_last);
function empty_result() {
    tocalculate.innerHTML = "";
    result_show.innerHTML = "";
}
function clear_memory (){
    document.querySelector('#memory').innerHTML=null;
}
function add_event_listener() {
    var memo = document.querySelectorAll('.memo');
    for (i = 0; i < memo.length; i++) {
        memo[i].addEventListener('click', printmemo);
    }
}

function printmemo() {
    tocalculate.innerHTML = this.innerHTML;
}
function addtomemory() {
    if (result_show.innerHTML != "") {
        var paragraph = document.createElement('p');
        paragraph.innerHTML = result_show.innerHTML.slice(1);
        paragraph.classList.add("memo");
        document.querySelector('#memory').appendChild(paragraph);
        add_event_listener();
    }

}

function calculate() {
    var tangent = "Math.tan(";
    var tangent_input = "tan(";
    var cosine = "Math.cos(";
    var cosine_input = "cos(";
    var sine = "Math.sin(";
    var sine_input = "sin(";
    var sqrt_input = "sqrt(";
    var sqrt = "Math.sqrt(";
    var log_input = "log(";
    var log = "Math.log(";
    var LN2_input = "LN2(";
    var LN2 = "Math.LN2(";
    var final_string = ((((((tocalculate.innerHTML.replace(/x/g, "*")).replace(tangent_input, tangent)).replace(cosine_input, cosine)).replace(sine_input, sine)).replace(sqrt_input, sqrt)).replace(log_input, log)).replace(LN2_input, LN2);
    var result_test=eval(final_string);
    if(result_test=="Infinity"){
        result_test="black hole"
        result_show.innerHTML = "=" + result_test ;
    }
    if(typeof result_test!='undefined'){
        result_show.innerHTML = "=" + result_test ;
    }
    
}
function writing() {
    tocalculate.innerHTML += this.value;
}
function delete_last() {
    tocalculate.innerHTML = tocalculate.innerHTML.slice(0, -1);
}