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