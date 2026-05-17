export default function Contact() {
    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center items-center px-8 py-20 bg-gray-900 text-white">
            <div className="max-w-2xl w-full text-center flex flex-col items-center gap-8">

                {/* Heading */}
                <div>
                    <p className="text-blue-400 text-lg mb-2">Get In Touch</p>
                    <h2 className="text-4xl font-bold">Contact Me</h2>
                    <p className="text-gray-400 mt-4 text-lg leading-relaxed">
                        I'm currently looking for internship opportunities. 
                        Whether you have a question or just want to say hi — my inbox is always open!
                    </p>
                </div>

                {/* Email button */}
                <a href="ohadraza345@gmail.com" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg text-lg font-semibold">
                    Say Hello ✉️
                </a>

                {/* Social links */}
                <div className="flex gap-8 mt-4">
                    <a href="https://github.com/OhadRaza01" target="_blank" className="text-gray-400 hover:text-white transition-colors text-sm">
                        GitHub ↗
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" className="text-gray-400 hover:text-white transition-colors text-sm">
                        LinkedIn ↗
                    </a>
                </div>
            </div>

            {/* Footer */}
            <p className="text-gray-600 text-sm mt-20">
                Designed & Built by Ohad Raza
            </p>
        </section>
    )
}