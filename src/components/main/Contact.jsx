import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(){

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_vuh267r', 'template_tt556dr', form.current, {
            publicKey: 'Ggx8QKUvf0yO2OLdX',
        })
        .then(
            () => {
                alert("Sent Successfully!");
            },
            (error) => {
                alert("OOOPS Something Wrong!");
            },
        );
    };

    return(<>
    <div className="container w-full relative mb-40">
        <div className="flex justify-center">
            <div className="w-[380px] h-52 border-r-4  border-[#9370DB] -top-24 mr-[375px] absolute "></div>
        </div>
        <div className="mt-36">
            <h1 className="text-2xl pb-3">Contact</h1>
            <h1 className="text-2xl font-semibold pb-10">Drop me a message, and I'll reach out to you soon.</h1>
        </div>
            <div className='w-96 mx-auto'>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="user_name" name="user_name" className="mb-4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-cyberpunk-purple block w-full p-2.5" placeholder="Your Name" required />
                    <input type="user_email" name="user_email" className="mb-4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-cyberpunk-purple block w-full p-2.5" placeholder="Your Email" required />
                    <input type="user_subject" name="user_subject" className="mb-4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-cyberpunk-purple block w-full p-2.5" placeholder="Subject" required />
                    <textarea name="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-cyberpunk-purple" placeholder="Your Message"></textarea>
                    <button type="submit" value="Send" className='bg-[#9370DB] w-full px-5 py-3 mt-5 rounded-2xl text-white'>Send</button>
                </form>
            </div>
    </div>
    </>)
}