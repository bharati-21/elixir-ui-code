/* Reference to the snackbar close button */
const snackbarCloseButton = document.querySelector('.btn-snackbar-close');

/* Attaching event listener to listen to click event on the snackbar close button */
snackbarCloseButton.addEventListener('click', closeSnackbar);

/* Even handler to close the snackbar when close button is clicked */
function closeSnackbar(e) {
    e.preventDefault();
    e.target.parentElement.parentElement.style.display = 'none';
}
