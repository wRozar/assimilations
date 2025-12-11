let cache = [];
let i = 0;

const dice6 = {
    d1: "<img id='nada' src='source/Nada.PNG'>",
    d2: "<img id='nada' src='source/Nada.PNG'>",
    d3: "<img id='coruja' src='source/Coruja.PNG'>",
    d4: "<img id='coruja' src='source/Coruja.PNG'> <img id='cervo' src='source/Cervo.PNG'>",
    d5: "<img id='coruja' src='source/Coruja.PNG'> <img id='cervo' src='source/Cervo.PNG'>",
    d6: "<img id='joaninha' src='source/Joaninha.PNG'>",
};

const dice10 = {
    d1: "<img id='nada' src='source/Nada.PNG'>",
    d2: "<img id='nada' src='source/Nada.PNG'>",
    d3: "<img id='coruja' src='source/Coruja.PNG'>",
    d4: "<img id='coruja' src='source/Coruja.PNG'> <img id='cervo' src='source/Cervo.PNG'>",
    d5: "<img id='coruja' src='source/Coruja.PNG'> <img id='cervo' src='source/Cervo.PNG'>",
    d6: "<img id='joaninha' src='source/Joaninha.PNG'>",
    d7: "<img id='joaninha' src='source/Joaninha.PNG'> <img id='joaninha' src='source/Joaninha.PNG'>",
    d8: "<img id='joaninha' src='source/Joaninha.PNG'> <img id='cervo' src='source/Cervo.PNG'>",
    d9: "<img id='joaninha' src='source/Joaninha.PNG'> <img id='coruja' src='source/Coruja.PNG'> <img id='cervo' src='source/Cervo.PNG'>",
    d10: "<img id='coruja' src='source/Coruja.PNG'> <img id='coruja' src='source/Coruja.PNG'> <img id='coruja' src='source/Coruja.PNG'>",
};

const dice12 = {
    d1: "<img id='nada' src='source/Nada.PNG'>",
    d2: "<img id='nada' src='source/Nada.PNG'>",
    d3: "<img id='coruja' src='source/Coruja.PNG'>",
    d4: "<img id='coruja' src='source/Coruja.PNG'> <img id='cervo' src='source/Cervo.PNG'>",
    d5: "<img id='coruja' src='source/Coruja.PNG'> <img id='cervo' src='source/Cervo.PNG'>",
    d6: "<img id='joaninha' src='source/Joaninha.PNG'>",
    d7: "<img id='joaninha' src='source/Joaninha.PNG'> <img id='joaninha' src='source/Joaninha.PNG'>",
    d8: "<img id='joaninha' src='source/Joaninha.PNG'> <img id='cervo' src='source/Cervo.PNG'>",
    d9: "<img id='joaninha' src='source/Joaninha.PNG'> <img id='coruja' src='source/Coruja.PNG'> <img id='cervo' src='source/Cervo.PNG'>",
    d10: "<img id='coruja' src='source/Coruja.PNG'> <img id='coruja' src='source/Coruja.PNG'> <img id='coruja' src='source/Coruja.PNG'>",
    d11: "<img id='coruja' src='source/Coruja.PNG'> <img id='coruja' src='source/Coruja.PNG'> <img id='cervo' src='source/Cervo.PNG'> <img id='cervo' src='source/Cervo.PNG'>",
    d12: "<img id='coruja' src='source/Coruja.PNG'> <img id='coruja' src='source/Coruja.PNG'>",
};


function clean() {
    cache = [];
    document.querySelector("#cache").innerHTML = "";
    document.querySelector(".display").innerHTML = " ";
}

function showDice(src) {
    document.querySelector("#cache").innerHTML = cache.join(' ');
    document.querySelector(".display").innerHTML = src;
}

function dice(method = "default", side, x) {
    var face = "d" + Math.floor(Math.random() * side + 1);

    if (side == 6 && method == "default") { cache.push(`<b>d6:</b> ( <div id='dice-img'> ${dice6[face]} </div> )`); showDice(dice6[face]); }
    if (side == 10 && method == "default") { cache.push(`<b>d10:</b> ( <div id='dice-img'> ${dice10[face]} </div> )`); showDice(dice10[face]); }
    if (side == 12 && method == "default") { cache.push(`<b>d12:</b> ( <div id='dice-img'> ${dice12[face]} </div> )`); showDice(dice12[face]); }

    if (method == "multiples") {
        x = parseInt(document.querySelector("#quantidade").value);
        const Dice = parseInt(document.querySelector("#dado").value);

        const results = [];
        const images = [];

        for (let i = 0; i < x; i++) {
            var face = "d" + Math.floor(Math.random() * Dice + 1);

            if (Dice == 6) { results.push(`<div id='dice-img'> ${dice6[face]} </div>`); images.push(dice6[face]); }
            if (Dice == 10) { results.push(`<div id='dice-img'> ${dice10[face]} </div>`); images.push(dice10[face]); }
            if (Dice == 12) { results.push(`<div id='dice-img'> ${dice12[face]} </div>`); images.push(dice12[face]); }
        }

        cache.push(`<b>${x}d${Dice}:</b> ( ${results.join(" <p>:)</p> ")} )`);
        showDice(images.join(' '));
    }
}

function close() {
    i += 1;
    document.querySelector(".pad-display").style.display = (i % 2 === 1) ? "flex" : "none";
}

function CustomRoll() {
    dice("multiples");
}

// Event listeners
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".config").addEventListener("click", close);
    document.querySelector("#close-display").addEventListener("click", close);
    document.querySelector("#custom-roll").addEventListener("click", CustomRoll);
    document.querySelector("#limpar").addEventListener("click", clean);
    document.querySelector("#d6").addEventListener("click", () => dice("default", 6));
    document.querySelector("#d10").addEventListener("click", () => dice("default", 10));
    document.querySelector("#d12").addEventListener("click", () => dice("default", 12));
});