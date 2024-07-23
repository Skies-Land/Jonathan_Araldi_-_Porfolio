import { useEffect } from 'react';

const AnimationScroll = () => {
    useEffect(() => {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('services')) {
                    entry.target.classList.add('animate-on-scroll');
                } else {
                    entry.target.classList.remove('animate-on-scroll');
                }
            });
        }, { threshold: 0.1 });

        const attachObserverToSections = () => {
            document.querySelectorAll('.section').forEach(section => {
                sectionObserver.observe(section);
            });
        };

        attachObserverToSections();

        const mutationObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    attachObserverToSections();
                }
            });
        });

        mutationObserver.observe(document.body, { childList: true, subtree: true });

        return () => {
            sectionObserver.disconnect();
            mutationObserver.disconnect();
        };
    }, []);

    return null;
};

export default AnimationScroll;