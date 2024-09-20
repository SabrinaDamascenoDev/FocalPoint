import { useState } from "react";
import styles from '../modal/modal.module.scss'
export default function Modal({Show}){
    if(!Show) return null;
    return(
        <div className={styles.modalContainer}>
            <div>
                <h2>Nova tarefa</h2>

                <div>
                    <label>Nome</label>
                    <input type="text" placeholder="Digite" ></input>
                </div>
            </div>
        </div>
    )
}