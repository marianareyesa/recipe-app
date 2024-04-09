// components/Section.js
import '../styles/globals.css'

export default function Section({ title, children }) {
    return (
        <section className={styles.section}>
            <h2>{title}</h2>
            {/* Additional content here */}
            {children}
        </section>
    );
}
