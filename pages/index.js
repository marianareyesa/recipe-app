import Head from 'next/head';
import Banner from '../components/Banner';
export default function Home() {
    return (
        <>
            <Head>
                <title>Cookie - Unleash Your Inner Chef</title>
                <meta name="description" content="Cookie is your ultimate culinary companion." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Banner /> {/* Include the Banner component */}

            {/* The rest of your homepage content goes here */}
        </>
    );
}
