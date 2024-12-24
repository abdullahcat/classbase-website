import Link from "next/link"
/* eslint-disable @next/next/no-img-element */

function IntroVideo() {
    return (
        <section className="text-white lg:pb-0 pb-5 bg-purple-500">
            <div className="container max-w-xl px-8 lg:max-w-7xl flex flex-col mx-auto lg:flex-row">
                <img className="rounded-b-3xl lg:w-1/2  mb-10" src="https://images.unsplash.com/photo-1594663653925-365bcbf7ef86?auto=format&fit=crop&q=80&w=2671&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className="flex flex-col     lg:p-12">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mb-8  text-white">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <h2 className="text-3xl font-semibold leadi">Modern Sorunlar, Modern Çözümler İster</h2>
                    <p className="mt-4 mb-8 text-sm">ClassBase, öğrenciler ve öğretmenler için tasarlanmış bir öğrenim platformudur. Notların, ödevlerin, duyuruların ve sınavların yönetimini kolaylaştırır, böylece daha etkili bir öğrenme deneyimi sunar.</p>
                    <Link
                        href={'http://video.theclassbase.com'}
                        className="self-start relative inline-block px-6 py-2 border-2   border-warmneutral text-warmneutral rounded-full space-x-2 flex flex-row transition duration-300 hover:text-black ease-in-out hover:bg-warmneutral"
                    >
                        Tanıtımı İzle
                    </Link> </div>
            </div>
        </section>
    )
}

export default IntroVideo