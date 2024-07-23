import { useEffect } from 'react';

const AnimationScrollServices = () => {
    // Animation on scroll for the title
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-on-scroll-title');
                } else {
                    entry.target.classList.remove('animate-on-scroll-title');
                }
            });
        }, { threshold: 0.1 });

        const section = document.querySelector('.section__title-2');
        if (section) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, []);

    // Animation on scroll for the cards
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animation-services__card');
                } else {
                    entry.target.classList.remove('animation-services__card');
                }
            });
        }, { threshold: 0.1 });

        const sections = document.querySelectorAll('.services__card');
        sections.forEach(section => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => observer.disconnect();
    }, []);
};

export default AnimationScrollServices;