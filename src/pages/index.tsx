// pages/index.tsx
import { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';  // adjust path if necessary
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Banner from '@/components/banner';
import Testimonials from '@/components/testimonials';
import FAQ from '@/components/faq';
import Powered from '@/components/powered';
import Features from '@/components/features';
import FeaturesGrid from '@/components/featuresgrid';
import CTA from '@/components/cta';
import IntroVideo from '@/components/introvideo';
const HomePage: React.FC = () => {


    return (
        <div  >
            <Head>
                <title>BeenHere</title>
            </Head>
            <Banner></Banner>
            <Powered></Powered>
            <IntroVideo></IntroVideo>
            <FeaturesGrid></FeaturesGrid>

            <Features></Features>
            <Testimonials></Testimonials>

            <FAQ></FAQ>
            <CTA></CTA>

        </div>



    );
};

export default HomePage;