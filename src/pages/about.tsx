import Head from "next/head";

function About() {
    return (
        <div>
            <Head>
                <title>Hakkımızda</title>
            </Head>
            <section className=" pt-20 bg-warmneutral text-black">
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:dark:bg-purple-500">
                                <h3 className="text-3xl font-semibold">ClassBase</h3>
                                <span className="text-sm font-bold tracki uppercase dark:dark:text-gray-400">ClassBase Adlı Öğrenim Platformunun Hikayesi</span>
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:dark:bg-gray-700">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:dark:bg-purple-500">
                                    <h3 className="text-xl font-semibold tracki">Kuruluş </h3>
                                    <time className="text-xs tracki uppercase dark:dark:text-gray-400">Ocak 2022</time>
                                    <p className="mt-3">ClassBase, öğrenim platformunun kuruluş tarihi olarak Abdullah Çat tarafından 2022 yılında kuruldu.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:dark:bg-purple-500">
                                    <h3 className="text-xl font-semibold tracki">Beta Sürüm</h3>
                                    <time className="text-xs tracki uppercase dark:dark:text-gray-400">Mart 2022</time>
                                    <p className="mt-3">ClassBase, beta sürümünü kullanıcılara sunarak platformun temel işlevselliğini test etmeye başladı.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:dark:bg-purple-500">
                                    <h3 className="text-xl font-semibold tracki">İlk Kullanıcılar</h3>
                                    <time className="text-xs tracki uppercase dark:dark:text-gray-400">Mayıs 2022</time>
                                    <p className="mt-3">İlk kullanıcılar, ClassBase&apos;i denemeye ve geri bildirimde bulunmaya başladı. Kullanıcıların platforma katılımı, platformun gelişimine önemli katkılarda bulundu.</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:dark:bg-purple-500">
                                    <h3 className="text-xl font-semibold tracki">Özelleştirme ve Gelişim</h3>
                                    <time className="text-xs tracki uppercase dark:dark:text-gray-400">Temmuz 2022</time>
                                    <p className="mt-3">ClassBase, kullanıcı geri bildirimlerini dikkate alarak platformu daha da geliştirmek ve özelleştirmek için çalışmalara başladı. Kullanıcıların ihtiyaçlarına cevap vermek amacıyla yeni özellikler eklemeye odaklandı.</p>
                                </div><div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:dark:bg-purple-500">
                                    <h3 className="text-xl font-semibold tracki">İlk Eğitim Kurumları Katılıyor</h3>
                                    <time className="text-xs tracki uppercase dark:dark:text-gray-400">Aralık 2022</time>
                                    <p className="mt-3">İlk eğitim kurumları, ClassBase&apos;i resmi olarak eğitim programlarına dahil etmeye başladılar. Platformun genişlemesi hız kazandı.</p>
                                </div>

                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:dark:bg-purple-500">
                                    <h3 className="text-xl font-semibold tracki">İşbirlikleri ve Büyüme</h3>
                                    <time className="text-xs tracki uppercase dark:dark:text-gray-400">Şubat 2023</time>
                                    <p className="mt-3">ClassBase, eğitim kurumları ve işbirliği yapmak için farklı eğitim paydaşlarıyla anlaşmalar yapmaya başladı. Bu işbirlikleri, platformun daha fazla kullanıcı ve içerikle büyümesine katkı sağladı.</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:dark:bg-purple-500">
                                    <h3 className="text-xl font-semibold tracki">Sürekli İyileştirme</h3>
                                    <time className="text-xs tracki uppercase dark:dark:text-gray-400">Kasım 2023</time>
                                    <p className="mt-3">ClassBase, kullanıcı geri bildirimlerini dikkate alarak platformun hala gelişmeye devam ettiği ve öğrenciler ile öğretmenler için eğitim deneyimini daha da iyileştirmek amacıyla çalışmalarını sürdürüyor.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>

    );
}
export default About;