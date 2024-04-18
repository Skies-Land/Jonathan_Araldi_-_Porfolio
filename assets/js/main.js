/*=============== SHOW MENU ===============*/
// Constantes des éléments du menu de navigation. 
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
// Valide l'existence de la constante
if(navToggle){
    // Ajoute la classe 'show-menu' à 'navMenu' lorsqu'on clique sur 'navToggle'.
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
// Valide l'existence de la constante
if(navClose){
    // Supprime la classe 'show-menu' de 'navMenu' lorsqu'on clique sur 'navClose'.
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
// Constantes qui récupèrent tous les éléments de la classe 'nav__link'.
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // Supprime la classe 'show-menu' de 'navMenu' lorsqu'on clique sur un lien de navigation.
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    // Ajoute ou supprime la classe 'shadow-header' à 'header' en fonction du défilement de la page.
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SERVICES MODAL ===============*/
/**
* Sélectionne tous les éléments de modal, les boutons de modal et les boutons de fermeture de modal
* @type {NodeListOf<Element>}
*/
const modal = document.querySelectorAll('.services__modal'),
        modalButton = document.querySelectorAll('.services__button'),
        modalClose = document.querySelectorAll('.services__modal-close')

/**
* Ajoute la classe 'active-modal' à la modal cliquée
* @param {number} modalClick - L'index de la modal à activer
*/
let activeModal = (modalClick) => {  
    modal[modalClick].classList.add('active-modal')
}

/**
* Ajoute un écouteur d'événements à chaque bouton de modal qui active la modal correspondante lorsqu'il est cliqué
*/
modalButton.forEach((modalButton, i) => {
    modalButton.addEventListener('click', () => {
        activeModal(i)
    })
})

/**
* Ajoute un écouteur d'événements à chaque bouton de fermeture de modal qui désactive toutes les modals lorsqu'il est cliqué
*/
modalClose.forEach((modalClose, i) => {
    modalClose.addEventListener('click', () => {
        modal.forEach((modalRemove) => {
            modalRemove.classList.remove('active-modal')
        })
    })
})

/**
* Ajoute un écouteur d'événements au document qui désactive toutes les modals lorsqu'une touche 'Escape' est pressée
*/
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.forEach((modalRemove) => {
            modalRemove.classList.remove('active-modal')
        })
    }
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

/** FONCTIONNEMENT SCROLL SECTIONS ACTIVE LINK
 * Ajoute ou supprime la classe 'active-link' aux éléments de la barre de navigation en fonction de la position de défilement de la fenêtre.
 * Lorsque la position de défilement de la fenêtre est entre le haut de la section et le bas de la section (hauteur de la section),
 * la classe 'active-link' est ajoutée à l'élément de navigation correspondant.
 * Sinon, la classe 'active-link' est supprimée.
 */
const scrollActive = () =>{
    const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // Ajoute ou supprime la classe 'show-scroll' à 'scrollUp' en fonction du défilement de la page.
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') 
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({   
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // Réinitialise l'animation à chaque fois que l'utilisateur fait défiler la page
})

sr.reveal(`.home__image, .about__image, .contact__mail`, {origin: 'right'})
sr.reveal(`.home__name, .home__info, .about__container, 
            .section__title-1, .section__title-2, .about__info, 
            .contact__social, .contact__data, .faq__title`, {origin: 'left'})

sr.reveal(`.home__social-link`, {origin: 'bottom', delay:500, interval: 140})

sr.reveal(`.projects__card, .faq__content, .collapse__card`, {interval: 150})