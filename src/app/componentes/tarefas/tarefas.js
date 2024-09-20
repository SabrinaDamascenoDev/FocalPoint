"use client";
import styles from "../tarefas/tarefas.module.scss";
import Trash from "../../../public/images/trash.svg";
import Image from "next/image";
import { useState } from "react";
import Modal from "../modal/modal";

export default function Tarefas() {
  const [ShowModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([
    { id: "chk1", name: "Fazer um bolo", completed: false },
    { id: "chk2", name: "Estudar JavaScript", completed: false },
    { id: "chk3", name: "Ir ao mercado", completed: false }
  ]);

  const openModal = () => setShowModal(true);

  const toggleTask = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.tarefasMain}>
        <p className={styles.titleTarefas}>Suas tarefas de hoje</p>

        <div className={styles.sessaoTarefas}>
          {tasks.map(task => (
            <div key={task.id} className={styles.CheckTarefa} onClick={() => toggleTask(task.id)}>
              <div className={styles.checkbox}>
                <input
                  type="checkbox"
                  id={task.id}
                  className={styles.checkboxInput}
                  checked={task.completed}
                  onClick={() => toggleTask(task.id)}
                  readOnly
                />
                <label htmlFor={task.id}  onClick={() => toggleTask(task.id)}>{task.name}</label>
              </div>
              <Image
                src={Trash}
                alt="Icon de um lixo"
                className={styles.iconsTarefas}
              />
            </div>
          ))}
        </div>

        <p className={styles.titleTarefas}>Tarefas finalizadas</p>

        <div className={styles.sessaoTarefasFinalizadas}>
          {tasks.filter(task => task.completed).map(task => (
            <div key={task.id} className={styles.CheckTarefaFinalizada}>
              <div className={styles.checkboxFinalizadas}>
                <input
                  type="checkbox"
                  className={styles.checkboxInputFinalizadas}
                  defaultChecked
                  readOnly
                />
                <label className={styles.nomesTarefasFinalizadas}>{task.name}</label>
              </div>
              <Image
                src={Trash}
                alt="Icon de um lixo"
                className={styles.iconsTarefas}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          ))}
        </div>
      </div>
      <button type="submit" className={styles.btnTarefas} onClick={openModal}>
        Adicionar nova tarefa
      </button>
      <Modal Show={ShowModal} />
    </div>
  );
}
