import Link from "next/link"

function CTA() {
    return (
        <section className="py-3 bg-purple-500 text-warmneutral">
            <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
                <h1 className="text-3xl font-semibold leadi text-center lg:text-left">Şimdi keşfetmeye başla!</h1>
                <Link
                    href={'http://sales.theclassbase.com'}
                    className="relative inline-block px-6 py-2 border-2   border-warmneutral text-warmneutral rounded-full space-x-2 flex flex-row transition duration-300 hover:text-black ease-in-out hover:bg-warmneutral"
                >
                    Satın Al
                </Link>            </div>
        </section>
    )
}

export default CTA
