const snackbarCloseButtons = document.querySelectorAll('.btn-snackbar-close');
snackbarCloseButtons.forEach(closeButtons => closeButtons.addEventListener('click', closeSnackbar));

// Function to close snackbar when close button is clicked
function closeSnackbar(e) {
    e.preventDefault();
    e.target.parentElement.parentElement.style.display = 'none';
}
