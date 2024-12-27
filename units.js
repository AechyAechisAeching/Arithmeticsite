const eenheden = ["mm", "cm", "dm", "m", "dam", "hm", "km"];

let dimensie = document.getElementById("dimselect");
let opgave = document.getElementById("opginput");
let opgeenheid = document.getElementById("opgeenheid");
let antwoord = document.getElementById("antwinput");
let antweenheid = document.getElementById("antweenheid");
let berekendeantw;

function nieuw() {

    antwoord.value = "";

    let dimvalue = dimensie.value;

    let randomnmbr = Math.floor(Math.random() * 7);

    let randomnmbr2 = Math.floor(Math.random() * 7);

    if (dimvalue == 1) {

        opgeenheid.innerHTML = eenheden[randomnmbr];

        antweenheid.innerHTML = eenheden[randomnmbr2];

    } else {

        opgeenheid.innerHTML = eenheden[randomnmbr] + "<sup>" + dimvalue + "</sup>";

        antweenheid.innerHTML = eenheden[randomnmbr2] + "<sup>" + dimvalue + "</sup>";

    }

    let opgdec = Math.floor(Math.random() * 1000); // Makes sure that every answer is rounded up to fill answers no decimals

    opgave.value = opgdec;

    let factor = Math.pow(10, dimvalue);

    let verschil = Math.abs(randomnmbr - randomnmbr2);

    let factortotaal = Math.pow(factor, verschil);

    if (randomnmbr < randomnmbr2) {

        berekendeantw = Math.round(opgdec / factortotaal);

    } else {

        berekendeantw = Math.round(opgdec * factortotaal);

    }

}

function showAlert(message, type) {

    // Makes sure the custom alert fades out away new pop up

    const existingAlert = document.querySelector('.custom-alert');

    if (existingAlert) {

        existingAlert.remove();

    }

    // Adjustable alert pop-up

    const alertDiv = document.createElement('div');

    alertDiv.classList.add('custom-alert');

    alertDiv.style.position = 'absolute';

    alertDiv.style.left = '73%';

    alertDiv.style.top = '50%';

    alertDiv.style.transform = 'translateY(-50%)';

    alertDiv.style.padding = '0.8rem 1.2rem';

    alertDiv.style.borderRadius = '1rem';

    alertDiv.style.boxShadow = '1 8px 12px rgba(0, 0, 0, 0.1)';

    alertDiv.style.fontSize = '1rem';

    alertDiv.style.fontWeight = '500';

    alertDiv.style.zIndex = '1000';

    alertDiv.style.whiteSpace = 'nowrap';

    alertDiv.style.transition = 'opacity 0.5s';

    alertDiv.style.opacity = '1';

    // Apply colours

    if (type === 'success') {

        alertDiv.style.backgroundColor = '#d4edda';

        alertDiv.style.color = '#155724';

        alertDiv.style.border = '1px solid #c3e6cb';

    } else {

        alertDiv.style.backgroundColor = '#f8d7da';

        alertDiv.style.color = '#721c24';

        alertDiv.style.border = '1px solid #f5c6cb';

    }

    alertDiv.innerHTML = `

        <span>${message}</span>

        <button type="button" style="border: none; background: transparent; font-size: 1.2rem; margin-left: 1rem; cursor: pointer;" onclick="this.parentElement.remove()">✖</button>

    `;

    const answerField = document.getElementById('antwinput');

    answerField.parentElement.appendChild(alertDiv);


}

// Check the answer

function check() {

    // Compares answers

    if (parseInt(berekendeantw) === parseInt(antwoord.value)) { 

        showAlert('Je hebt het goed!', 'success');

    } else { 

        showAlert('Fout, het juiste antwoord is: ' + berekendeantw, 'danger');
    }

}