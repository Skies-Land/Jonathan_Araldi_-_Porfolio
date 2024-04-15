/*=============== FAQ ===============*/
const faqs = document.querySelectorAll(".faq__content");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});