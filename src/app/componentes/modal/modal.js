import { useState } from "react";
import styles from '../modal/modal.module.scss'
export default function Modal({Show}){
    if(!Show) return null;
    const [ShowModal, setShowModal] = useState('');

    const closeModal = () =>{
        setShowModal(false);
    }
    return(
        <div className={styles.modalContainer}>
            <div className={styles.modalStyle}>
                <h2>Nova tarefa</h2>

                <div className={styles.inputModal}>
                    <label>Nome</label>
                    <input type="text" placeholder="Digite" ></input>
                </div>
                <div>
                    <button>Cancelar</button>
                    <button>Adicionar</button>
                </div>
            </div>
        </div>
    )
}