export default function Contact(){
    return(<>
    <div className="container w-full">
        <div className="flex justify-center mx-40 gap-10 ">
            <div className="w-1/2">
                <form>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-cyberpunk-purple" placeholder="Your Message"></textarea>
                </form>
            </div>
            <div className="w-1/2">
                <form>
                    <input type="email" id="email" className="mb-4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-cyberpunk-purple block w-full p-2.5" placeholder="Your Email" required />
                    <input type="name" id="name" className="mb-4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-cyberpunk-purple block w-full p-2.5" placeholder="Your Name" required />
                    <input type="subject" id="subject" className="mb-4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-cyberpunk-purple block w-full p-2.5" placeholder="Subject" required />
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-cyberpunk-purple" placeholder="Your Message"></textarea>
                </form>
            </div>
        </div>
    </div>
    </>)
}