const cards = document.querySelectorAll(".card")
const closeModal = document.querySelector(".modal__close-icon")
const modalOverlay = document.querySelector(".modal-overlay")

for (let card of cards) {
    card.addEventListener("click", function(){
        modalOverlay.classList.add("modal-overlay--active")
    })
}

closeModal.addEventListener("click", function(){
    modalOverlay.classList.remove("modal-overlay--active")
})