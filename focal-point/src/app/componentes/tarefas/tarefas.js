import styles from '../tarefas/tarefas.module.scss'
import Trash from '../../../public/images/trash.svg'
import Image from 'next/image'

export default function Tarefas(){
    return(
        <div className={styles.mainContainer}>
        <div className={styles.tarefasMain}>     
            <p>Suas tarefas de hoje</p>
            <div className={styles.CheckTarefa}>
                <input type='checkbox' className={styles.inputTarefas}></input>
                <label className={styles.nomesTarefas}>Fazer um bolo</label>
                <Image src={Trash} alt="Icon de um lixo" className={styles.iconsTarefas} />
            </div>
            <div className={styles.CheckTarefa}>
                <input type='checkbox' className={styles.inputTarefas}></input>
                <label className={styles.nomesTarefas}>Fazer um bolo</label>
                <Image src={Trash} alt="Icon de um lixo" className={styles.iconsTarefas} />
            </div>
            <div className={styles.CheckTarefa}>
                <input type='checkbox' className={styles.inputTarefas}></input>
                <label className={styles.nomesTarefas}>Fazer um bolo</label>
                <Image src={Trash} alt="Icon de um lixo" className={styles.iconsTarefas} />
            </div>
        </div>
    </div>
    )

}