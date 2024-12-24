import Link from "next/link";
/* eslint-disable @next/next/no-img-element */



function Powered() {
    return (
        <section className="  bg-warmneutral p-10 text-black">
            <div className="container p-12 mx-auto text-center ">
                <h2 className="text-4xl font-bold ">En Yeni Teknolojiler ile Daha İleri Gidin</h2>
            </div>
            <div className="container flex flex-wrap justify-center mx-auto text-black">
                <a href="https://flutter.dev" target="_blank" className="flex justify-center w-1/2 p-12 align-middle md:w-1/4 xl:w-1/5">
                    <img src="/flutter.svg" alt="" />                </a>

                <a href="https://nextjs.org" target="_blank" className="flex justify-center w-1/2 p-12 align-middle md:w-1/4 xl:w-1/5">
                    <img src="/nextjs-logotype-light-background.svg" alt="" />                </a>
                <a href="https://firebase.com" target="_blank" className="flex justify-center w-1/2 p-12 align-middle md:w-1/4 xl:w-1/5">
                    <img src="/firebase.svg" alt="" />
                </a>
                <a href="https://openai.com" target="_blank" className="flex justify-center w-1/2 p-12 align-middle md:w-1/4 xl:w-1/5">
                    <img src="/openai-lockup.svg" alt="" />
                </a>
                <a href="https://tailwindcss.com" target="_blank" className="flex justify-center w-1/2 p-12 align-middle md:w-1/4 xl:w-1/5">
                    <img src="/tailwindcss-logotype.svg" alt="" />
                </a>
                <a href="https://github.com" target="_blank" className="flex justify-center w-1/2 p-10 align-middle md:w-1/4 xl:w-1/5">
                    <img src="/GitHub_Logo.png" alt="" />
                </a>
                <a href="https://gumroad.com/" target="_blank" className="flex justify-center w-1/2 p-10 align-middle md:w-1/4 xl:w-1/5">
                    <img src="/Gumroad_logo.svg" alt="" />
                </a>
            </div>
        </section >
    )
}

export default Powered;