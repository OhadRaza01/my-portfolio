export default function SideBar({ isOpen, links, active, setActive, onClose }) {
    return (
        <>
            {/* Backdrop */}
            <div
                onClick={onClose}
                className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            />

            {/* Drawer */}
            <div
                style={{ fontFamily: 'Nunito, sans-serif' }}
                className={`fixed top-0 left-0 z-50 h-full w-65 bg-yellow-200 border-r-[3px] border-black flex flex-col pt-20 px-5 gap-3 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className='absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-black text-yellow-200 font-black text-base rounded-lg border-2 border-black shadow-[2px_2px_0_#f43f5e] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all duration-100 cursor-pointer'
                >
                    ✕
                </button>

                {/* Logo */}
                <div className='flex items-center gap-2 mb-4'>
                    <span className='w-3 h-3 rounded-full bg-rose-500 border-2 border-black inline-block' />
                    <span className='font-black text-xl text-black'>Ohad Raza</span>
                </div>

                {/* Links */}
                {links.map(({ label, href }) => (
                    <a
                        key={label}
                        href={href}
                        onClick={() => { setActive(label); onClose() }}
                        className={`font-extrabold text-[15px] px-4 py-3 rounded-xl border-2 border-black no-underline transition-all duration-100
              ${active === label
                                ? 'bg-rose-500 text-white shadow-[3px_3px_0_#000]'
                                : 'text-black hover:bg-black hover:text-yellow-200'
                            }`}
                    >
                        {label}
                    </a>
                ))}

                {/* CTA */}
                <a
                    href='#contact'
                    onClick={onClose}
                    className='mt-4 text-center font-black text-[14px] bg-black text-yellow-200 border-[2.5px] border-black px-5 py-3 rounded-xl no-underline shadow-[3px_3px_0_#f43f5e] transition-all duration-100'
                >
                    Hire me !
                </a>
            </div >
        </>
    )
}