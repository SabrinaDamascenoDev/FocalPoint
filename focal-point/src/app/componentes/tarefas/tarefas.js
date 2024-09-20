"use client";
import styles from "../tarefas/tarefas.module.scss";
import Trash from "../../../public/images/trash.svg";
import Image from "next/image";

export default function Tarefas() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.tarefasMain}>
        <p className={styles.titleTarefas}>Suas tarefas de hoje</p>

        <div className={styles.sessaoTarefas}>
            <div className={styles.CheckTarefa} onClick={() => document.getElementById("chk1").click()}>
                <div className={styles.checkbox}>
                    <input
                    type="checkbox"
                    id="chk1"
                    className={styles.checkboxInput}
                    onClick={() => document.getElementById("chk1").click()}
                    />
                    <label htmlFor="chk1"  onClick={() => document.getElementById("chk1").click()}>Fazer um bolo</label>
                </div>
                <Image
                    src={Trash}
                    alt="Icon de um lixo"
                    className={styles.iconsTarefas}
                    onClick={(e) => e.stopPropagation()} 
                />
            </div>

          <div className={styles.CheckTarefa}>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                id="chk2"
                className={styles.checkboxInput}
              />
              <label htmlFor="chk2">Fazer um bolo</label>
            </div>
            <Image
              src={Trash}
              alt="Icon de um lixo"
              className={styles.iconsTarefas}
            />
          </div>
          <div className={styles.CheckTarefa}>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                id="chk3"
                className={styles.checkboxInput}
              />
              <label htmlFor="chk3">Fazer um bolo</label>
            </div>
            <Image
              src={Trash}
              alt="Icon de um lixo"
              className={styles.iconsTarefas}
            />
          </div>
        </div>
        <p className={styles.titleTarefas}>Tarefas finalizadas</p>

        <div className={styles.sessaoTarefasFinalizadas}>
          <div className={styles.CheckTarefaFinalizada}>
            <input type="checkbox" className={styles.inputTarefas}></input>
            <label className={styles.nomesTarefas}>Fazer um bolo</label>
            <Image
              src={Trash}
              alt="Icon de um lixo"
              className={styles.iconsTarefas}
            />
          </div>
        </div>
      </div>
      <button type="submit" className={styles.btnTarefas}>
        Adicionar nova tarefa
      </button>
    </div>
  );
}
