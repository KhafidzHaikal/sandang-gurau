import { Montserrat } from 'next/font/google'

const Font = Montserrat({ subsets: ['latin'] })

function Tentang() {
    return (
        <div className="text-white text-center mt-80 lg:mt-80 sm:mt-70" id='bagian_tentang_kami'>
            <div className={Font.className}>
                <h1 className="text-transform: uppercase font-bold text-2xl" id='tentang_kami'>Tentang Kami</h1>
                <div className='mx-4'>
                    <p className="text-base mt-3"><span className="">Sandang Gurau</span> adalah baju parodi film dan musik yang terlahir sebagai media bernostalgia melalui busana dengan sentuhan komedi kolaborasi</p>
                </div>
            </div>
        </div>
    )
}

export default Tentang