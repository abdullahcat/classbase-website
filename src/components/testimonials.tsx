import React, { useRef } from 'react';
/* eslint-disable @next/next/no-img-element */

function Testimonials() {

    return (
        <section className="bg-warmneutral text-black">
            <div className="container  py-12 mx-auto">
                <div className="grid items-center gap-4 xl:grid-cols-5">
                    <div className="max-w-2xl px-6 mx-auto  space-y-4 text-center xl:col-span-2 xl:text-left">
                        <h2 className="text-4xl font-bold">Sadık Müşterilerimizden Güvenilir Yorumlar
                        </h2>
                        <p className="text-black">Müşterilerimiz Platformumuzu Neden Tercih Ediyor ve Deneyimlerini Detaylı Bir Şekilde Paylaşıyorlar

                        </p>
                    </div>
                    <div className="p-6 xl:col-span-3 text-warmneutral">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="grid content-center gap-4">
                                <div className="p-6 rounded shadow-md bg-purple-500">
                                    <p>Öğrenim platformunuz gerçekten harika! Notlarımı ve ödevlerimi daha kolay takip edebiliyorum. Ayrıca yapay zeka destekli materyaller sayesinde konuları daha iyi anlıyorum.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <div>
                                            <p className="text-lg font-semibold">Elif Sancaktutan </p>
                                            <p className="text-sm text-warmneutral">Akdeniz Üniversitesi Hukuk Fakultesi</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded shadow-md bg-purple-500">
                                    <p>Sınav dönemlerinde platformunuzun sunduğu pratik sınavları kullanmak çok işime yarıyor. Ayrıca duyurular ve bildirimlerle her zaman güncel kalabiliyorum. Teşekkürler!</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <div>
                                            <p className="text-lg font-semibold">Mehmet Alp Baki</p>
                                            <p className="text-sm text-warmneutral">Boğaziçi Üniversitesi İşletme Fakültesi</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="grid content-center gap-4">
                                <div className="p-6 rounded shadow-md bg-purple-500">
                                    <p>Öğrenim platformunuz, özellikle yapay zeka konularında harika kaynaklar sunuyor. Kendi hızımda öğrenmeyi tercih ediyorum, ve bu platform bunu sağlamak için mükemmel bir yer.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <div>
                                            <p className="text-lg font-semibold">Neşe Demir</p>
                                            <p className="text-sm text-warmneutral">ODTÜ Bilgisayar Mühendisliği</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="p-6 rounded shadow-md bg-purple-500">
                                    <p>Öğretmen olarak platformunuzu kullanmaktan son derece memnunum. Öğrencilerime daha iyi kaynaklar sunma ve ödevleri takip etme konusunda büyük yardımcı oluyor. Ayrıca, yapay zeka içerikleri öğrencilerimin daha iyi öğrenmelerini sağlıyor.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <div>
                                            <p className="text-lg font-semibold">Kiraz Aslan</p>
                                            <p className="text-sm text-warmneutral">Gülveren Anadolu Lisesi Tarih Öğretmeni
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;