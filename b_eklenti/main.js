
function toggleModal() {
    const modal_content = document.getElementById("modal_content");
    if (!modal_content.classList.contains('is_active')) {
        modal_content.classList.add("open-modal-content")
        modal_content.classList.add("is_active")
        var secilenID = document.getElementById("bubble");
        secilenID.style.display = "none";
    } else {
        closeModal();
    }
    //
    //modal_content.classList.find(x=> x == "open-modal-content" ) ? modal_content.classList.add("close-modal-content") :  
}

function closeModal() {
    const bubble = document.getElementById("bubble")
    const modal_content = document.getElementById("modal_content");
    modal_content.classList.remove("open-modal-content");
    modal_content.classList.remove("is_active");
    bubble.style.display = "";
}
