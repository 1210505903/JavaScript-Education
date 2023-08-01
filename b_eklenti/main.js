
function toggleDiv(divNum) {
    
    var div = document.getElementById("div" + divNum);
    var allDivs = document.querySelectorAll(".hidden-div");

    for (var i = 0; i < allDivs.length; i++) {
        if (allDivs[i] !== div) {
            allDivs[i].style.display = "none";
        }
    }

    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}
function toggleButtons() {
    const button2 = document.getElementById("btn2");
    const button3 = document.getElementById("btn3");
    const button4 = document.getElementById("btn4");

    if (button3.classList.contains("hidden") && button4.classList.contains("hidden")) {
        button3.classList.remove("hidden");
        button4.classList.remove("hidden");
        button2.classList.add("hidden");
        button3.style.marginTop = "-500px";
    } else {
        button3.classList.add("hidden");
        button4.classList.add("hidden");
        button2.classList.remove("hidden");
    }
}
function toggleButtonss() {
    const button1 = document.getElementById("btn1");
    const button5 = document.getElementById("btn5");
    const button6 = document.getElementById("btn6");

    if (button5.classList.contains("hidden") && button6.classList.contains("hidden")) {
        button5.classList.remove("hidden");
        button6.classList.remove("hidden");
        button1.classList.add("hidden");

    } else {
        button5.classList.add("hidden");
        button6.classList.add("hidden");
        button1.classList.remove("hidden");
    }
}
function toggleModal() {
    const modal_content = document.getElementById("modal_content");
    if (!modal_content.classList.contains('is_active')) {
        modal_content.classList.add("open-modal-content")
        modal_content.classList.add("is_active")
        var secilenID = document.getElementById("bubble");
        //modal_content.classList.add("bubbleclick")
        secilenID.style.display = "none";
    } else {
        closeModal();
    }
}

function closeModal() {
    const bubble = document.getElementById("bubble")
    const modal_content = document.getElementById("modal_content");
    modal_content.classList.remove("open-modal-content");
    modal_content.classList.remove("is_active");
    bubble.style.display = "";
}



