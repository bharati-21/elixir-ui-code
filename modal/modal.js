/* Get reference to the modal close button */
const modalCloseButton = document.querySelector('.btn-modal-close');

/* Event listener that listens for modal close button */
modalCloseButton.addEventListener('click', closeModal);

/* Handler that handles modal close button click */
function closeModal(e) {
    const modalContainer = e.target.parentElement.parentElement;
    modalContainer.classList.remove('active-modal');
    document.querySelector('body').style.overflow = 'auto';
}
