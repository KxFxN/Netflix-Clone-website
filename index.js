const btns = document.querySelectorAll(".btn-qution button");
const boxes = document.querySelectorAll(".box-qution");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        for (let j = 0; j < boxes.length; j++) {
            if (j === i) {
                const svg = btns[j].querySelector("svg");
                if (boxes[j].style.display === 'block') {
                    boxes[j].style.display = 'none';
                    svg.classList.add("svg-icon-thin-x");
                    svg.classList.remove("svg-closed");                
                }
                else {
                    boxes[j].style.display = 'block';
                    svg.classList.add("svg-closed");
                    svg.classList.remove("svg-icon-thin-x");
                }
            }
            else {
                boxes[j].style.display = 'none';
                const svg = btns[j].querySelector("svg");
                svg.classList.remove("svg-closed");  
                svg.classList.add("svg-icon-thin-x");
            }
        }
    });
}

const emailInput = document.getElementById("input-email-box");
const emailInput2 = document.getElementById("input-email-box2");
const emailLabel = document.querySelector(".input-email .email_text");
const emailLabel2 = document.querySelector(".input-email2 .email_text");
const mq = window.matchMedia("(max-width:767px)");
const mq2 = window.matchMedia("(min-width: 768px) and (max-width:950px)");
const mq3 = window.matchMedia("(min-width:950px) and (max-width: 1449px)");

emailInput.addEventListener("focus", function () {
    if (mq.matches){
        emailLabel.style.top = "60%";
        emailLabel.style.transform = "translateY(25%)";
        emailLabel.style.fontSize = "1rem";
    }
    if (mq2.matches){
        emailLabel.style.top = "75%";
        emailLabel.style.transform = "translateY(-20%)";
        emailLabel.style.fontSize = "1rem";
    }
    if (mq3.matches){
        emailLabel.style.top = "85%";
        emailLabel.style.transform = "translateY(-10%)";
        emailLabel.style.fontSize = "1rem";
    }
});

emailInput.addEventListener("blur", function () {
if (!emailInput.value) {
    emailLabel.style = "";
    emailLabel2.style = "";
}
});

emailInput2.addEventListener("focus", function(){
    if (mq.matches){
        emailLabel2.style.top = "25%";
        emailLabel2.style.transform = "translateY(-45%)";
        emailLabel2.style.fontSize = "1rem";
    }
    if (mq2.matches){
        emailLabel2.style.top = "25%";
        emailLabel2.style.transform = "translateY(-50%)";
        emailLabel2.style.fontSize = ".8rem";
    }
    if (mq3.matches){
        emailLabel2.style.top = "25%";
        emailLabel2.style.transform = "translateY(-45%)";
        emailLabel2.style.fontSize = "1rem";
    }
});

emailInput2.addEventListener("blur", function () {
    if (!emailInput2.value) {
        emailLabel2.style = "";
    }
});