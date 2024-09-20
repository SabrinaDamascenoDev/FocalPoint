
import Image from 'next/image'
import '../Main/Main.module.scss'

export default function Main(){
    <div className={styles.mainContainer}>
        <div className={styles.tarefasMain}>     
            <p>Suas tarefas de hoje</p>
            <div>
                <input type='checkbox'></input>
                <label>Fazer um bolo</label>
                <Image />
            </div>
        </div>
    </div>
}