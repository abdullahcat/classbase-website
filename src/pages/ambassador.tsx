import Head from "next/head";
import Link from "next/link";
/* eslint-disable @next/next/no-img-element */

function Ambassador() {
    return (
        <section className="bg-warmneutral pt-20   min-h-screen">
            <Head>
                <title>Ambassador</title>
            </Head>
            <div
                className="mx-auto text-black   max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
            >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div
                        className="relative  h-64 overflow-hidden rounded-xl sm:h-80 lg:order-last lg:h-full"
                    >
                        <img
                            alt="Ambassador"
                            src="/photo-1560250056-07ba64664864.avif"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div className="lg:py-24 space-y-4 ">
                        <h2 className="text-3xl">Sat ve Kazan</h2>

                        <p className="mt-4  ">
                            Siz değerli kullanıcılarımıza harika bir fırsat sunuyoruz! ClassBase Ambassador Programı, öğretmenler ve kurumlar için eğitim-öğretim yönetimindeki en iyi çözümü tanıtarak ve başkalarına önererek %25&apos;e kadar komisyon kazanmanıza olanak tanır.

                        </p>

                        <Link
                            href={'http://ambassador.theclassbase.com'}
                            className="self-start relative inline-flex px-6 py-2 border-2 border-black text-black rounded-full space-x-2 flex flex-row transition duration-300 ease-in-out hover:bg-purple-500 hover:text-white hover:border-purple-500"
                        >
                            İletişime Geç
                        </Link>
                    </div>
                </div>
            </div>



        </section>
    );
}
export default Ambassador;