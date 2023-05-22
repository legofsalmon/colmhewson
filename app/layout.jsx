import '../styles/global/global.scss';
import styles from './layout.module.scss';
import Head from 'next/head';

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className={styles.home}>{children}</body>
      </html>
    );
  }      