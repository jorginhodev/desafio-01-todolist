import { TbClipboardText } from "react-icons/tb";

import styles from "./EmptyTasks.module.scss";

export const EmptyTasks = () => {
  return (
    <div className={styles.empty}>
      <TbClipboardText size={56} />

      <h2>
        Você ainda não tem tarefas cadastradas
        <br />
        <span>Crie tarefas e organize seus itens a fazer</span>
      </h2>
    </div>
  );
};
