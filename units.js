function toggleDropdown() {
    document.getElementById("options").classList.toggle("show");
}

function selectOption(value) {
    const selected = document.querySelector(".selected");
    selected.innerHTML = value + ' <span class="arrow">▼</span>'; // Update selected text
    document.getElementById("options").classList.remove("show"); // Hide options
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.selected')) {
        const dropdowns = document.getElementsByClassName("options");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


const eenheden = ["mm", "cm", "dm", "m", "dam", "hm", "km"];
//index             0     1     2    3     4      5     6
//eenheden[3] = "m"
let dimensie = document.getElementById("dimselect");
let opgave = document.getElementById("opginput");
let opgeenheid = document.getElementById("opgeenheid");
let antwoord = document.getElementById("antwinput");
let antweenheid = document.getElementById("antweenheid");

let history = document.getElementById("history");
let berekendeantw;
function nieuw() {
    antwoord.value = "";
    let dimvalue = dimensie.value;
    let randomnmbr = Math.floor(Math.random() * 7);
    let randomnmbr2 = Math.floor(Math.random() * 7);
    if (dimvalue == 1) {
        opgeenheid.innerHTML = eenheden[randomnmbr];
        antweenheid.innerHTML = eenheden[randomnmbr2]
    } else {
        opgeenheid.innerHTML = eenheden[randomnmbr] + "<sup>" + dimvalue + "</sup>";
        antweenheid.innerHTML = eenheden[randomnmbr2] + "<sup>" + dimvalue + "</sup>";
    }
    //nu nog een willekeurig getal in opgave
    let opgdec = (Math.random() * 1000).toFixed(3);
    opgave.value = opgdec;

    let factor = Math.pow(10, dimvalue);
    console.log("factor = " + factor);
    let verschil;
    // if(randomnmbr > randomnmbr2){
    //     verschil = randomnmbr - randomnmbr2;
    // } else {
    //     verschil = randomnmbr2 - randomnmbr;
    // }
    verschil = Math.abs(randomnmbr - randomnmbr2)
    let factortotaal = Math.pow(factor, verschil);
    console.log("factortotaal = " + factortotaal);
   
    if(randomnmbr < randomnmbr2) {
        berekendeantw = opgdec / factortotaal;
    } else {
        berekendeantw = opgdec * factortotaal;
    }
    console.log("het juiste antwoord moet zijn: " + berekendeantw);
}
const alertPlaceholder = document.getElementById('alertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}
function check() {
    if (berekendeantw == antwoord.value) { appendAlert('Je hebt het goed!', 'success') }
    else { appendAlert('Fout, het juiste antwoord is: ' + berekendeantw, 'danger') }
}
