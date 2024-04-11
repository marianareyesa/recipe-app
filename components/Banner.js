import React from 'react';
import styles from './styles/Banner.module.css';
import Link from 'next/link';

function Banner() {
    return (
        <div className={styles.banner}>
            <h1 className={styles.cookie}>cookie</h1>
            <p className={styles.tagline}>unleashing your inner chef was never simpler</p>
            <Link href="/signup" passHref>
                <button className={styles.getStarted}>get started</button>
            </Link>
        </div>
    );
}
export default Banner;
