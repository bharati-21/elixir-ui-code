/* Get reference to the alert close button */
const closeIcon = document.querySelector('.alert .icon-close');

/* Attaching event listener to listen for alert close icon click */
closeIcon.addEventListener('click', closeAlert);

/* handler called when the close button is clicked */
function closeAlert(e) {
    const btnClose = e.target;
    const alert = btnClose.parentElement;
    alert.style.display = 'none';
}
