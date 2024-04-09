import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Cookie - Unleash Your Inner Chef</title>
                <meta name="description" content="Cookie is your ultimate culinary companion." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* No need to include <Header /> here since it's already in _app.js */}

            {/* Content of the homepage goes here.
                 The rest of the page content is omitted for now. */}
        </>
    );
}
