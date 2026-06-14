export default function Contact() {
    return (
        <section
            id='contact'
            className='min-h-screen flex flex-col justify-center items-center px-5 py-20 bg-yellow-200 border-t-[3px] border-black'
            style={{ fontFamily: 'Nunito, sans-serif' }}
        >
            <div className='max-w-2xl w-full'>

                {/* Header */}
                <div className='mb-10 flex items-center gap-3'>
                    <span className='bg-black text-yellow-200 font-black text-xs px-3 py-1.5 rounded border-2 border-black tracking-widest uppercase shadow-[2px_2px_0_#f43f5e]'>
                        Contact
                    </span>
                    <h2 className='font-black text-2xl text-black'>Get in touch</h2>
                </div>

                {/* Main*/}
                <div className='bg-[#030712] border-[3px] border-black rounded-2xl shadow-[6px_6px_0_#000] p-8 flex flex-col items-center gap-6 text-center'>

                    {/* Text */}
                    <div className='flex flex-col gap-2'>
                        <h3 className='font-black text-3xl md:text-4xl text-white'>
                            Let's work <span className='text-yellow-200'>together.</span>
                        </h3>
                        <p className='font-bold text-sm text-gray-400 leading-relaxed max-w-md'>
                            I'm currently looking for internship opportunities.
                            Whether you have a question or just want to say hi — my inbox is always open!
                        </p>
                    </div>

                    {/* Divider */}
                    <div className='w-full h-0.5 bg-[#1f2937]' />

                    <div className='flex flex-col sm:flex-row gap-3 w-full justify-center'>
                        <a
                            href='mailto:ohadraza345@gmail.com'
                            className='font-black text-[14px] bg-yellow-200 text-black border-[2.5px] border-black px-6 py-3 rounded-xl no-underline shadow-[3px_3px_0_#f43f5e] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#f43f5e] transition-all duration-100 text-center'
                        >
                            Send email
                        </a>
                        <a
                            href='https://wa.me/923329067355'
                            target='_blank'
                            rel='noreferrer'
                            className='font-black text-[14px] bg-transparent text-white border-[2.5px] border-[#374151] px-6 py-3 rounded-xl no-underline hover:border-white transition-all duration-100 text-center'
                        >
                            WhatsApp
                        </a>
                    </div>

                    <div className='flex flex-wrap gap-3 justify-center'>
                        <a
                            href='https://github.com/OhadRaza01'
                            target='_blank'
                            rel='noreferrer'
                            className='font-extrabold text-xs text-gray-400 border-[1.5px] border-[#374151] rounded-full px-4 py-2 no-underline hover:text-white hover:border-white transition-all duration-100'
                        >
                            GitHub ↗
                        </a>
                    </div>

                    <p className='font-bold text-xs text-gray-600 text-center mt-10'>
                        Designed & Built by Ohad Raza — 2026
                    </p>

                </div >

            </div >
        </section >
    )
}