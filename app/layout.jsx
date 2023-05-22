import '../styles/global/global.scss';
import styles from './layout.module.scss';
import Head from 'next/head';

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <body className={styles.home}>{children}</body>
      </html>
    );
  }      