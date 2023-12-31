import Link from 'next/link';
import React, { useEffect, useState } from 'react';
/* eslint-disable @next/next/no-img-element */

function Banner() {
    const [text, setText] = useState('');
    const words = ["duyuruları kaçırma.", "notları takip et.", "belgelere ulaş.", "yapay zekayla öğren."];
    let i = 0;
    let j = 0;
    let isDeleting = false;

    useEffect(() => {
        function type() {
            const currentWord = words[i];
            if (isDeleting) {
                setText(currentWord.substring(0, j - 1));
                j--;
                if (j === 0) {
                    isDeleting = false;
                    i++;
                    if (i === words.length) {
                        i = 0;
                    }
                }
            } else {
                setText(currentWord.substring(0, j + 1));
                j++;
                if (j === currentWord.length) {
                    isDeleting = true;
                }
            }
            setTimeout(type, 150);
        }

        type();
    }, []);

    return (
        <section className="bg-purple-500  ">
            <div className="bg-warmneutral">
                <div className="container flex flex-col items-center px-4 pt-20 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-black">
                    <h1 className="text-5xl font-black">ClassBase ile <span className='text-purple-500'>{text}</span></h1>
                    <p className="mt-6 mb-8 text-lg   xl:max-w-3xl  ">
                        Derslerin, ödevlerin ve daha fazlası artık tek bir yerde.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                        <Link
                            href={'http://sales.theclassbase.com'}
                            className="relative inline-block px-6 py-2 border-2 bg-purple-500 border-purple-500 text-white rounded-full space-x-2 flex flex-row transition hover:border-purple-600 duration-300 ease-in-out hover:bg-purple-600"
                        >
                            Satın Al
                        </Link>
                        <Link
                            href={'http://console.theclassbase.com'}
                            className="relative inline-block px-6 py-2 border-2 border-black text-black rounded-full space-x-2 flex flex-row transition duration-300 ease-in-out   hover:bg-purple-500 hover:text-white hover:border-purple-500"
                        >
                            Konsol
                        </Link>
                    </div>
                </div>
            </div>
            <img src="/classbaseonmac.png" alt="" className="w-6/7 mx-auto pb-10  px-4 -mt-20 rounded-lg lg:-mt-40" />
        </section>
    );
}

export default Banner;
