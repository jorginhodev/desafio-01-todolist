import { ChangeEvent } from "react";
import { TbTrash as IconTrash } from "react-icons/tb";

import { Task } from "../../types/Task";

import styles from "./TaskItem.module.scss";

interface TaskItemProps {
  task: Task;
  onDelete: (task: Task) => void;
  onStatusChange: (task: Task) => void;
}

export const TaskItem = ({ task, onDelete, onStatusChange }: TaskItemProps) => {
  const handleStatusTask = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;

    onStatusChange({
      ...task,
      isCompleted: checked,
    });
  };

  const handleDelete = () => {
    onDelete(task);
  };

  return (
    <li className={styles.task}>
      <div>
        <input
          type="checkbox"
          id={task.id}
          checked={task.isCompleted}
          onChange={handleStatusTask}
        />
        <label htmlFor={task.id}>{task.title}</label>
      </div>

      <button type="button" onClick={handleDelete}>
        <IconTrash size={20} />
      </button>
    </li>
  );
};
