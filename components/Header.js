import Link from 'next/link';
import styles from './styles/Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">
                    <img src="/images/logo.png" alt="Cookie logo" />
                </Link>
            </div>
            <nav className={styles.nav}>
                <Link href="/featured" passHref><span>featured</span></Link>
                <Link href="/explore" passHref><span>explore</span></Link>
                <Link href="/community" passHref><span>community</span></Link>
            </nav>
            <div className={styles.verticalLine}></div>
            <div className={styles.myCookie}>
                <div className={styles.circle}></div> {/* Circle moved to the left of the text */}
                <span>my cookie</span>
            </div>
        </header>
    );
}
