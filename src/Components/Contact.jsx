import React, { useContext, useState } from 'react';
import { ThemeContext } from '../ThemeProvider';
import home from '../Images/home.png';
import phone from '../Images/phone.png';
import message from '../Images/message.png';

const Contact = () => {
    // For the contact info display
    const [contact] = useState([
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
    ]);

    // For theme context
    const { theme } = useContext(ThemeContext);

    // For handling the form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // Handling input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handling form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload
        try {
            const response = await fetch('http://localhost:5001/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                alert('Your message has been sent successfully!');
                // Clear form after submission
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                alert('Failed to send message, please try again.');
            }
        } catch (error) {
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className={`w-full flex items-center justify-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} md:px-10 py-10`}>
            <div className={`max-w-4xl w-full bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg transition-all duration-500`}>
                <div className="text-center mb-8">
                    <h1 className={`text-2xl mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#003135]'} font-medium underline md:text-3xl`}>
                        Contact
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Details Section */}
                    <div className="space-y-6">
                        {contact.map((item, index) => (
                            <div key={index} className="flex items-start border-b pb-4">
                                <img src={item.image} alt={`${item.title} Icon`} className="w-8 h-8 mr-4" />
                                <div className="flex-1">
                                    <h1 className={`font-semibold text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>{item.title}</h1>
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

                    {/* Contact Form Section */}
                    <div className="space-y-4">
                        <form onSubmit={handleSubmit} className="space-y-4">
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
                            <div>
                                <label htmlFor="message" className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Message:
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    cols="20"
                                    rows="5"
                                    className={`w-full mt-1 p-2 border ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'} rounded-md focus:ring-blue-500 focus:border-blue-500`}
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className={`px-5 py-2 text-white rounded-lg hover:bg-blue-700 transition-colors ${theme === 'dark' ? 'bg-blue-600' : 'bg-blue-500'}`}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
