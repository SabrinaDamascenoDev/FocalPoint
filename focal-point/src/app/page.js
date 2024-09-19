import '../styles/globals.scss'
import Image from 'next/image';
import logo from '../public/images/logo.svg'
import styles from '../styles/Home.module.scss'


export default function Home() {
  return (
    <div>
        <header className={styles.headerHome}>
            <Image src={logo} 
            alt='Logo'  
            className={styles.logoHome}
            />

            <p className={styles.titleHome}>Bem-vindo de volta, Marcus</p>

            <p className={styles.descricaoHome}>Segunda, 01 de dezembro de 2025</p>
        
        </header>
        <hr className={styles.linhaHome}></hr>
    </div>
  );
}
