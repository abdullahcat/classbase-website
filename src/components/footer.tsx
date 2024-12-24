import Link from "next/link";
/* eslint-disable @next/next/no-img-element */


function Footer() {
    return (
        <div className="bg-warmneutral lg:grid lg:grid-cols-5">
            <div className="relative block h-32 lg:col-span-2 lg:h-full">
                <img
                    src="/classbasebg.png"
                    alt="footer banner"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            <div className="px-4 border-t border-gray-200 py-16 sm:px-6 lg:col-span-3 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                        <p>
                            <span className="text-xs uppercase tracking-wide text-black">
                                Bize Ulaşın
                            </span>

                            <a
                                href="mailto:destek@theclassbase.com"
                                className="block text-xl font-medium text-gray-900 hover:text-purple-500 sm:text-1xl"
                            >
                                destek@classbase.com
                            </a>
                        </p>

                        <ul className="mt-8 space-y-1 text-sm text-gray-700">
                            <li>Pazartesi-Cuma: 9.00 - 17.00pm</li>
                            <li>Haftasonu: 10.00 - 15.00</li>
                        </ul>


                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <p className="font-medium text-gray-900">Kaynaklar</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <Link href="/available" className="text-gray-700 transition hover:text-purple-500">
                                        Aktif Sınıflar
                                    </Link>
                                </li>

                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-gray-900">Şirket</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <Link href="/about" className="text-gray-700 transition hover:text-purple-500">
                                        Hakkımızda
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/ambassador" className="text-gray-700 transition hover:text-purple-500">
                                        Ambassador                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-100 pt-12">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <ul className="flex flex-wrap gap-4 text-xs">
                            <li>
                                <Link href="/tos" className="text-black transition hover:text-purple-500">
                                    Şartlar ve Koşullar
                                </Link>
                            </li>

                            <li>
                                <Link href="/privacy" className="text-black transition hover:text-purple-500">
                                    Gizlilik Politikası
                                </Link>
                            </li>


                        </ul>

                        <p className="mt-8 text-xs text-black sm:mt-0">
                            &copy; 2023  ClassBase Tüm hakları saklıdır.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;