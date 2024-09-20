
import Image from "next/image";
import styles from '../header/header.module.scss'
import logo from '../../../public/images/logo.svg'

export default function Header() {
    return(
    <header className={styles.headerHome}>
        <Image src={logo} alt="Logo" className={styles.logoHome} />

        <p className={styles.titleHome}>Bem-vindo de volta, Marcus</p>

        <p className={styles.descricaoHome}>Segunda, 01 de dezembro de 2025</p>
    </header>
    )
}
