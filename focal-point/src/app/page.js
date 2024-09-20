
import "../styles/globals.scss";
import styles from '../styles/Home.module.scss'
import Image from "next/image";
import logo from '../public/images/logo.svg'
import Trash from '../public/images/trash.svg'
import Header from "./componentes/header/header";
import Tarefas from "./componentes/tarefas/tarefas";

export default function Home() {
  return (
    <div>
      <Header />
      <Tarefas />
    </div>
  );
}
