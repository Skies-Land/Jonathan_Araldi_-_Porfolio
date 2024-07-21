import React, { useState, useEffect } from 'react';
import faqData from '../../../public/faq.json';

export default function Faq() {
    const [faqs, setFaqs] = useState(null);

    useEffect(() => {
        setFaqs(faqData);
    }, []);

    const toggleFaq = index => {
        setFaqs(faqs === index ? null : index);
    };

    return (
        <section className="faq section">
            <div className="faq__container container grid">
            <h2 className="section__title-1">
                <span className="faq__title">FAQ.</span>
            </h2>
            {faqData.map((faq, index) => (
                <div
                key={index}
                className={`faq__content ${faqs === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
                >
                <div className="faq__question">
                    <h3>{faq.question}</h3>
                    <i className="ri-arrow-down-s-line faq__icon"></i>
                </div>
                <div className="faq__answer">
                    {Array.isArray(faq.answer) ? (
                    faq.answer.map((item, i) => (
                        <p key={i}>
                        {item.icon && <span className="faq__answer-icon">{item.icon}</span>} - <span className="faq__answer-introduction">{item.introduction}</span>, {item.description}
                        </p>
                    ))
                    ) : (
                    <p>{faq.answer}</p>
                    )}
                </div>
                </div>
            ))}
            </div>
        </section>
    );
};
