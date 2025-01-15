import React from 'react'
import './FAQs.css'
import { useState } from 'react';


const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Can I customize my travel preferences on the website?",
            answer: "Yes, our website allows you to customize your travel preferences such as preferred destinations, types of accommodations, and activity interests. You can adjust these settings to receive tailored recommendations."
        },
        {
            question: "What type of travel information does the website provide about the destination?",
            answer: "Our website offers detailed information about various destinations including local attractions, restaurant recommendations, transportation options, cultural insights, and safety tips."
        },
        {
            question: "How can I ensure the safety of my personal information while using the website?",
            answer: "We use advanced encryption and secure protocols to protect your personal data on our website. We adhere to strict privacy policies and do not share your information with third parties without your explicit consent."
        },
        {
            question: "Is the website suitable for both seasoned solo travelers and those new to solo adventure?",
            answer: "Yes, our website is designed to cater to both experienced solo travelers and those new to solo travel. It offers advanced tools for seasoned travelers and easy-to-navigate guides for beginners."
        },
        {
            question: "Are there any fees associated with using the website?",
            answer: "The website is free to access and use. Some features may have optional premium content or additional services available for a fee, but basic functionality is available at no cost."
        },
        {
            question: "How does the website handle user feedback and suggestions for improvement?",
            answer: "We value your feedback and have a dedicated section on the website for submitting suggestions and reporting issues. Our team reviews this feedback regularly to make continuous improvements to the site."
        },
        {
            question: "What sets this website apart from other platforms for solo travelers?",
            answer: "This website stands out with its personalized travel recommendations, user-friendly interface, real-time updates, and integration with local services. We focus on enhancing the solo travel experience with unique features tailored to individual preferences."
        },
        {
            question: "Is the website suitable for remote workers?",
            answer: "Yes, our website includes features that are beneficial for remote workers, such as information on co-working spaces, reliable internet connectivity, and recommendations for comfortable work-friendly accommodations."
        }
        // Add more FAQs here
    ];






    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className='FAQs-container'>
            <h2>Got Some questions?</h2>
            <h5>We have the answers</h5>
            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <div className="faq-item" key={index}>
                        <div className="faq-question" onClick={() => toggleAnswer(index)}>
                            <span>{faq.question}</span>
                            <button className="toggle-btn">
                                {activeIndex === index ? '-' : '+'}
                            </button>
                        </div>
                        <div className="faq-answer" style={{ display: activeIndex === index ? 'block' : 'none' }}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
            <hr/>
            
        </div>

    )
}

export default FAQs