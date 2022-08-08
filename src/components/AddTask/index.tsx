import { ChangeEvent, FormEvent, useState } from "react";
import { BsPlusCircle as IconAdd } from "react-icons/bs";

import styles from "./AddTask.module.scss";

type AddTaskProps = {
  onSubmit: (newTask: string) => void;
};

export const AddTask = ({ onSubmit }: AddTaskProps) => {
  const [newTask, setNewTask] = useState("");

  const handleNewTask = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleSubmitNewTask = (event: FormEvent) => {
    event.preventDefault();

    onSubmit(newTask);
    setNewTask("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmitNewTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTask}
        value={newTask}
      />
      <button type="submit" disabled={newTask.length === 0}>
        Criar
        <IconAdd size={16} />
      </button>
    </form>
  );
};
