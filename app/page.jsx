import Link from 'next/link';
import Image from 'next/image';
import styles from './layout.module.scss';

export default function Page() {
  return (
    <>
      <h1>Colm Hewson</h1>
      <h2>Person who does many things</h2>
      <Image
        src="/images/stock/test-stock-image.jpeg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <div className={styles["colour-wash"]}></div>
    </>
  );
}