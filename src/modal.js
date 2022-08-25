const modalFunctions = (modalQuery, modalButtonQuery, closeButtonQuery) => {
  // Get the modal
  const modal = document.querySelector(modalQuery)

  // Get the button that opens the modal
  const modalButton = document.querySelector(modalButtonQuery)

  // Get the <span> element that closes the modal
  const closeButton = document.querySelector(closeButtonQuery)

  // When the user clicks the button, open the modal
  modalButton.addEventListener("click", () => {
    modal.style.display = "block"
  })

  // When the user clicks on <closeButton> (x), close the modal
  closeButton.addEventListener("click", () => {
    closeForm()
  })

  const closeForm = () => {
    modal.style.display = "none"
  }
}










































export default modalFunctions
