// pages/_app.js
import Header from '../components/Header';
import '@/components/styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
