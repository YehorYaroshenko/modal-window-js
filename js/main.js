const modalBtn = document.querySelectorAll('.modal-open')
const modal = document.querySelectorAll('.modal')

const body = document.body

function openModal(element) {
  element.classList.add('modal__active')
  body.classList.add('body-locked')
}

function closeModal(e) {
  if (
    e.target.closest('.modal__close') ||
    e.target.classList.contains('modal__bg')
  ) {
    e.target.closest('.modal').classList.remove('modal__active')
  }
  body.classList.remove('body-locked')
}

modalBtn.forEach((button) =>
  button.addEventListener('click', () =>
    modal.forEach((modal) => openModal(modal))
  )
)

modal.forEach((modal) => {
  modal.addEventListener('click', (e) => closeModal(e))
})

window.addEventListener('keydown', (e) => {
  modal.forEach(modal => {
    if (e.key === "Escape" && modal.classList.contains('modal__active')) {
      modal.classList.remove('modal__active')
    }
  })
})
