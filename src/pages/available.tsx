import Head from "next/head";

function Available() {
    return (
        <div className=" h-screen bg-warmneutral py-20 text-black">
            <Head>
                <title>Aktif Sınıflar</title>
            </Head>
            <div className="container py-10  mx-auto text-center ">
                <h2 className="text-4xl font-bold ">Aktif Sınıflarımız</h2>
            </div>
            <div className="rounded-lg  lg:mx-10 mx-3 border-black  border text-black relative mx-auto overflow-x-auto">
                <table className="w-full text-sm    text-left text-black  ">
                    <thead className="text-xs   uppercase    border-b border-black    ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Okul
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Bölüm
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Dönem
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className=" border-b     border-black  ">
                            <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap  ">
                                Akdeniz Üniversitesi
                            </th>
                            <td className="px-6 py-4">
                                Hukuk
                            </td>
                            <td className="px-6 py-4">
                                1. Sınıf
                            </td>

                        </tr>
                        <tr className=" border-b   border-black    ">
                            <th scope="row" className="px-6 py-4 font-medium   whitespace-nowrap  ">
                                Antalya Bilim Üniversitesi
                            </th>
                            <td className="px-6 py-4">
                                Hukuk
                            </td>
                            <td className="px-6 py-4">
                                1. Sınıf
                            </td>

                        </tr>
                        <tr className=" border-b     border-black  ">
                            <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap  ">
                                Antalya Bilim Üniversitesi
                            </th>
                            <td className="px-6 py-4">
                                Hukuk
                            </td>
                            <td className="px-6 py-4">
                                2. Sınıf
                            </td>

                        </tr>
                        <tr className=" border-b     border-black  ">
                            <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap  ">
                                Antalya Bilim Üniversitesi
                            </th>
                            <td className="px-6 py-4">
                                Elektrik Elektronik Müh.
                            </td>
                            <td className="px-6 py-4">
                                1. Sınıf
                            </td>

                        </tr> <tr className=" border-b     border-black  ">
                            <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap  ">
                                Antalya Bilim Üniversitesi
                            </th>
                            <td className="px-6 py-4">
                                Elektrik Elektronik Müh.
                            </td>
                            <td className="px-6 py-4">
                                2. Sınıf
                            </td>

                        </tr>

                        <tr className="  border-b  border-black  ">
                            <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap  ">
                                Antalya Bilim Üniversitesi
                            </th>
                            <td className="px-6 py-4">
                                Bilgisayar Müh.
                            </td>
                            <td className="px-6 py-4">
                                1. Sınıf
                            </td>

                        </tr>
                        <tr className="    border-black  ">
                            <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap  ">
                                Antalya Bilim Üniversitesi
                            </th>
                            <td className="px-6 py-4">
                                Bilgisayar Müh.
                            </td>
                            <td className="px-6 py-4">
                                2. Sınıf
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>


        </div>


    );
}
export default Available;