/* eslint-disable @next/next/no-img-element */


function Features() {
    return (
        <section className="dark:bg-warmneutral text-black">
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">

                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h3 className="text-2xl font-bold tracki sm:text-3xl ">Öğrenciler için ClassBase+</h3>
                        <p className="mt-3 text-lg dark:text-gray-400"> Öğrenciler İçin Sunulan Bazı İmkanlar:</p>
                        <div className="mt-12 space-y-12">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-purple-300 dark:text-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leadi ">Hiçbir şey kaçırma.</h4>
                                    <p className="mt-2 dark:text-gray-400">Okul veya dersle ilgili güncel duyuruları takip edebilirsiniz. Önemli bilgileri buradan alabilir ve gelişmelerden haberdar olabilirsiniz.
                                    </p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-purple-300 dark:text-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leadi ">Ödevler burada.</h4>
                                    <p className="mt-2 dark:text-gray-400">Öğretmenleriniz tarafından verilen ödevlere buradan erişebilir ve teslim tarihlerini takip edebilirsiniz. Ödevlerinizi yükleyebilir ve notlarınızı gözlemleyebilirsiniz.
                                    </p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-purple-300 dark:text-gray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leadi ">Ders notları her yerde seninle.</h4>
                                    <p className="mt-2 dark:text-gray-400">Tüm ders notlarına kolayca erişebilirsiniz. Derslerinizle ilgili önemli bilgilere bu bölümden ulaşabilirsiniz.
                                        .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <img src="/student.png" alt="student" className="mx-auto   " />
                    </div>
                </div>
                <div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="lg:col-start-2">
                            <h3 className="text-2xl font-bold tracki sm:text-3xl ">Öğretmenler için ClassBase+</h3>
                            <p className="mt-3 text-lg dark:text-gray-400">Öğretmenler İçin Sunulan Bazı İmkanlar:</p>
                            <div className="mt-12 space-y-12">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-purple-300 dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leadi ">Materyal Yönetimi</h4>
                                        <p className="mt-2 dark:text-gray-400">  Ders materyallerinizi yükleyebilir ve düzenleyebilirsiniz. Öğrencilerinizin erişimine sunmak istediğiniz dökümanları ve kaynakları buradan yönetebilirsiniz.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-purple-300 dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leadi ">Ödevler ve Sınavlar</h4>
                                        <p className="mt-2 dark:text-gray-400">Öğrencilere verdiğiniz ödevleri ve sınavları yönetebilirsiniz. Teslim tarihlerini ayarlayabilir, ödevleri değerlendirebilir ve öğrenci sonuçlarını görüntüleyebilirsiniz.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-purple-300 dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leadi ">Duyurular ve İletişim</h4>
                                        <p className="mt-2 dark:text-gray-400">  Öğrencilerinizle iletişim halinde olun. Duyuruları paylaşabilir, öğrencilere önemli bilgileri iletebilir ve mesajlaşma aracılığıyla soruları yanıtlayabilirsiniz.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <img src="/teacher.png" alt="teacher" className="mx-auto  " />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;