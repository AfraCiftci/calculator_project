const previous = document.querySelector(".previous-display");
const current = document.querySelector(".current-display");
const buttons = document.querySelector(".buttons-container");


//? THERE ARE GLOBAL
let altSatir = "";
let ustSatir = "";
let operator = "";

buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("num")) {
        sayiyiAl(e.target.textContent);
        yazdirilanAlan();
}

if (e.target.classList.contains("operator")) {
    choose(e.target.textContent);
    yazdirilanAlan();
}

if (e.target.classList.contains("equal")) {
    hesapla();
    yazdirilanAlan();
}

if (e.target.classList.contains("pm")) {
    if (!altSatir) return;
    altSatir /= 100;
    yazdirilanAlan();
} 

if (e.target.classList.contains("percent")) {
    if (!altSatir) return;
    altSatir /= 100;
    yazdirilanAlan();
}

if (e.target.classList.contains("ac")) {
    altSatir = "";
    ustSatir = "";
    operator = "";
    yazdirilanAlan();
}
});

const sayiyiAl = (num) => {
    if (num == "0" && altSatir === "0") return;
    if (num !== "." && altSatir === "0") {
        altSatir = num;
        return;
    }
    if (num == "." && altSatir.includes(".")) return;
    if (altSatir.length > 10) return;
    altSatir += num;
}