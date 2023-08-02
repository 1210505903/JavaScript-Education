
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
    const button5 = document.getElementById("btn5");
    const button6 = document.getElementById("btn6");
    const div1 = document.getElementById("div1");
    const div2 = document.getElementById("div2");
    const div3 = document.getElementById("div3");
    const div4 = document.getElementById("div4");

    if (button3.classList.contains("hidden") && button4.classList.contains("hidden")) {
        button3.classList.remove("hidden");
        button4.classList.remove("hidden");
        button5.classList.remove("hidden");
        button6.classList.remove("hidden");
        button2.classList.add("hidden");
    } else {
        button3.classList.add("hidden");
        button4.classList.add("hidden");
        button5.classList.add("hidden");
        button6.classList.add("hidden");
        button2.classList.remove("hidden");
        div1.style.display="none";
        div2.style.display="none";
        div3.style.display="none";
        div4.style.display="none";
    }
}
function toggleButtonss() {
    const button1 = document.getElementById("btn1");
    const button7 = document.getElementById("btn7");
    const button8 = document.getElementById("btn8");
    const button9 = document.getElementById("btn9");
    const button10 = document.getElementById("btn10");
    const div5 = document.getElementById("div5");
    const div6 = document.getElementById("div6");
    const div7 = document.getElementById("div7");
    const div8 = document.getElementById("div8");


    if (button7.classList.contains("hidden") && button8.classList.contains("hidden")) {
        button7.classList.remove("hidden");
        button8.classList.remove("hidden");
        button9.classList.remove("hidden");
        button10.classList.remove("hidden");
        button1.classList.add("hidden");

    } else {
        button7.classList.add("hidden");
        button8.classList.add("hidden");
        button9.classList.add("hidden");
        button10.classList.add("hidden");
        button1.classList.remove("hidden");
        div5.style.display="none";
        div6.style.display="none";
        div7.style.display="none";
        div8.style.display="none";
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



