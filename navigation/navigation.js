/* Reference to the navigatio bar */
const navigation = document.querySelector('.navigation-bar');

/* Reference to the navigatio bar hamburger icon */
const navigationHamburger = document.querySelector('.navigation-bar-hamburger');

/* Reference to the navigatio bar close icon*/
const navigationCloseButton = document.querySelector('.btn-navigation-close');

/* Attaching listeners on hamburger and navigation close buttons to listen for click event */
navigationHamburger.addEventListener('click', openNavigation);
navigationCloseButton.addEventListener('click', openNavigation);

/* Handler that toggles navigation bar open status */
function openNavigation(e) {
    navigation.classList.toggle('navigation-open');
}
