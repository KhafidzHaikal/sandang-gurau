import { Button } from "@/components/ui/button"

function ButtonPesan() {
    return (
        <div className="text-white text-center mt-40">
            <h1 className="text-transform: uppercase font-bold text-2xl" id='tentang_kami'>Pesan Sekarang</h1>
            <div className="flex gap-7 justify-center mt-5">
                <Button><a href="https://shopee.co.id/sandanggurau.id">Sandanggurau.id</a></Button>
                <Button><a href="https://www.tokopedia.com/sandanggurau">Sandanggurau</a></Button>
            </div>
        </div>
    )
}

export default ButtonPesan