
function FAQ() {
    return (
        <section className="bg-warmneutral text-black">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Sıkça Sorulan Sorular</h2>
                <p className="mt-4 mb-8 text-black">Aşağıda sıkça sorulan soruların cevaplarını bulabilirsiniz:</p>
                <div className="space-y-4">
                    <details className="w-full border-black border cursor-pointer rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring">Web sitesine nasıl üye olabilirim?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-black">Üyelik işlemi için ana sayfamızdaki "Üye Ol" butonuna tıklayarak gerekli bilgileri doldurmanız yeterlidir. Üyelik süreci oldukça basittir.</p>
                    </details>
                    <details className="w-full border-black border cursor-pointer rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring">Şifremi unuttum, ne yapmalıyım?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-black">Şifrenizi unuttuysanız, giriş sayfasında "Şifremi Unuttum" seçeneğini kullanarak şifrenizi sıfırlayabilirsiniz. Size bir şifre sıfırlama bağlantısı gönderilecektir.</p>
                    </details>
                    <details className="w-full border-black border cursor-pointer rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring">Nasıl Satın Alırım?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-black">Kayıt olduktan sonra ödeme ekranına yönlendirileceksiniz.</p>
                    </details>
                </div>
            </div>
        </section>
    );
}

export default FAQ;
