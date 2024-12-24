import React from 'react';
/* eslint-disable @next/next/no-img-element */

function FeaturesGrid() {
    return (
        <div className='bg-warmneutral text-center py-8 text-black'>

            <div className="max-w-xl  bg-warmneutral lg:max-w-7xl grid grid-cols-1     mx-auto px-8 lg:grid-cols-3   text-black">

                <div className="bg-purple-300 rounded-lg my-auto p-10 lg:p-20">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold  mb-4">Başarıya ulaş</h1>
                        <p className="text-sm md:text-base ">
                            ClassBase ekosistemine dahil olarak çalışmanı kolaylaştır.
                        </p>

                    </div>
                </div> <div className=" bg-warmneutral text-black rounded-lg p-10 lg:p-20">
                    <img src="/award.png" className='h-70' alt="award" />

                </div>

                <div className="bg-purple-300 rounded-lg my-auto p-10 lg:p-20">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4  ">Asla Kaçırma</h1>
                        <p className="text-sm md:text-base  ">
                            Senkronize duyurular ile gelişmelerden haberdar ol.

                        </p>
                    </div>
                </div>
                <div className="bg-warmneutral text-black   rounded-lg p-10 lg:p-20">

                    <img src="/announcement.png" className='h-70' alt="announcement" />
                </div>                <div className="bg-purple-300 rounded-lg my-auto p-10 lg:p-20">

                    <h1 className="text-3xl  md:text-5xl font-bold mb-4 ">Notların yanında </h1>
                    <p className="text-sm md:text-base  ">
                        Ders notların ve kaynakların her zaman yanında.
                    </p></div>
                <div className="bg-warmneutral text-black   rounded-lg p-10 lg:p-20">
                    <img src="/notes.png" className='h-70' alt="notes" />

                </div>

            </div ></div >
    );
}

export default FeaturesGrid;
