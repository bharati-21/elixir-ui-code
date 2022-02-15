/* Get reference to all the close buttons */
const closeIcons = document.querySelectorAll('.alert .icon-close');

/* Attach listeners to all close buttons */
closeIcons.forEach(closeIcon => closeIcon.addEventListener('click', closeAlert));

/* handler called when the close button is clicked */
function closeAlert(e) {
    const btnClose = e.target;
    const alert = btnClose.parentElement;
    alert.style.display = 'none';
}
