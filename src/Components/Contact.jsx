import React, { useContext, useState, useEffect, useRef } from 'react';
import { ThemeContext } from '../ThemeProvider';
import home from '../Images/home.png';
import phone from '../Images/phone.png';
import message from '../Images/message.png';

const Contact = () => {
    // State to hold message text and type
    const [messageData, setMessageData] = useState({ text: '', type: 'success' });
    const [showMessage, setShowMessage] = useState(false);
    const timeoutRef = useRef(null);

    // Contact information data
    const contactInfo = [
        {
            image: home,
            title: 'Location',
            details: 'No:1, Keelatheru, Karaikudi - 630001',
            link: 'https://www.google.com/maps/search/No:1,Keelatheru,Karaikudi+-+630001'
        },
        {
            image: phone,
            title: 'Phone Number',
            details: '+91 8667371564',
            link: 'tel:+918667371564'
        },
        {
            image: message,
            title: 'Email Address',
            details: 'balahariharan.mca@gmail.com',
            link: 'mailto:balahariharan.mca@gmail.com'
        }
    ];

    // Accessing the current theme
    const { theme } = useContext(ThemeContext);

    // Form state management
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // Handle input changes in the form
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://portfolio-backend-74o1.onrender.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                setMessageData({ text: 'Your message has been sent successfully!', type: 'success' });
                setShowMessage(true);
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setMessageData({ text: 'Failed to send message, please try again.', type: 'error' });
                setShowMessage(true);
            }
        } catch (error) {
            setMessageData({ text: 'An error occurred. Please try again later.', type: 'error' });
            setShowMessage(true);
        }
    };

    // Automatically hide the popup after 3 seconds
    useEffect(() => {
        if (showMessage) {
            timeoutRef.current = setTimeout(() => setShowMessage(false), 3000);
        }
        return () => clearTimeout(timeoutRef.current);
    }, [showMessage]);

    return (
        <div className={`w-full flex items-center justify-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} px-0 py-0 relative md:px-4 md:py-10`}>
            <div className={`max-w-4xl w-full bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg`}>
                {/* Heading Section */}
                <div className="text-center mb-8">
                    <h1 className={`text-2xl mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#003135]'} font-medium underline md:text-3xl`}>
                        Contact
                    </h1>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Details */}
                    <div className="space-y-6">
                        {contactInfo.map((item, index) => (
                            <div key={index} className="flex items-start border-b pb-4">
                                <img src={item.image} alt={`${item.title} Icon`} className="w-8 h-8 mr-4" />
                                <div>
                                    <h2 className={`font-semibold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{item.title}</h2>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-gray-600 hover:underline hover:text-blue-500 ${theme === 'dark' ? 'text-gray-400' : ''}`}
                                    >
                                        {item.details}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="space-y-4">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full mt-1 p-2 border ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'} rounded-md focus:ring-blue-500 focus:border-blue-500`}
                                    autoComplete="off"
                                    required
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full mt-1 p-2 border ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'} rounded-md focus:ring-blue-500 focus:border-blue-500`}
                                    autoComplete="off"
                                    required
                                />
                            </div>

                            {/* Phone Input */}
                            <div>
                                <label htmlFor="phone" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Phone:
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-full mt-1 p-2 border ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'} rounded-md focus:ring-blue-500 focus:border-blue-500`}
                                    pattern="[0-9]{10}"
                                    required
                                />
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <label htmlFor="message" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Message:
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className={`w-full mt-1 p-2 border ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'} rounded-md focus:ring-blue-500 focus:border-blue-500`}
                                    required
                                    autoComplete='off'
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    className={`w-full px-5 py-2 text-white rounded-lg hover:bg-blue-700 transition-colors ${theme === 'dark' ? 'bg-blue-600' : 'bg-blue-500'}`}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Centered Popup Notification */}
            {showMessage && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                    role="alert"
                    aria-live="assertive"
                >
                    <div
                        className={`max-w-sm w-full ${
                            messageData.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                        } text-white px-6 py-4 rounded-lg shadow-lg transform transition-opacity duration-300 
                        ${showMessage ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                        `}
                    >
                        <div className="flex items-center">
                            {/* Icon based on message type */}
                            {messageData.type === 'success' ? (
                                <svg
                                    className="w-6 h-6 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    ></path>
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            )}
                            <span>{messageData.text}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

};

export default Contact;
