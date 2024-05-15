import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(){
    return(<>
    <div className="container w-full relative">
        <div className="flex justify-center">
            <div className="w-[380px] h-52 border-r-4  border-[#9370DB] -top-24 mr-[375px] absolute "></div>
        </div>
        <div className="mt-36">
            <h1 className="text-2xl pb-3">Contact</h1>
            <h1 className="text-2xl font-semibold pb-14">Drop me a message, and I'll reach out to you soon.</h1>
        </div>
        <div className="flex justify-center mx-40 gap-10 ">
            <div className="w-1/2">
                <form>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-cyberpunk-purple" placeholder="Your Message"></textarea>
                </form>
            </div>
            <div className="w-1/2">
                <form>
                    <input type="user_email" id="user_email" className="mb-4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-cyberpunk-purple block w-full p-2.5" placeholder="Your Email" required />
                    <input type="user_name" id="user_name" className="mb-4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-cyberpunk-purple block w-full p-2.5" placeholder="Your Name" required />
                    <input type="user_subject" id="user_subject" className="mb-4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-cyberpunk-purple block w-full p-2.5" placeholder="Subject" required />
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-cyberpunk-purple" placeholder="Your Message"></textarea>
                </form>
            </div>
        </div>
    </div>
    </>)
}