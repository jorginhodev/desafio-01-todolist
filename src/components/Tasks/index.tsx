import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Task } from "../../types/Task";

import { AddTask } from "../AddTask";
import { EmptyTasks } from "../EmptyTasks";
import { TaskItem } from "../TaskItem";

import styles from "./Tasks.module.scss";

export const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleCreateTask = (newTask: string) => {
    setTasks((tasks) => [
      ...tasks,
      {
        id: uuidv4(),
        title: newTask,
        isCompleted: false,
      },
    ]);
  };

  const handleTaskDelete = (taskToDelete: Task) => {
    const tasksFiltered = tasks.filter((task) => task.id !== taskToDelete.id);
    setTasks(tasksFiltered);
  };

  const handleTaskStatusChange = (taskToChangeStatus: Task) => {
    const taskIndex = tasks.findIndex(
      (task) => task.id === taskToChangeStatus.id
    );
    const newTasks = [...tasks];
    newTasks[taskIndex].isCompleted = taskToChangeStatus.isCompleted;

    setTasks(newTasks);
  };

  const countTasksCompleted = (): number => {
    return tasks.reduce<number>(
      (acc, task) => (task.isCompleted ? acc + 1 : acc),
      0
    );
  };

  return (
    <>
      <AddTask onSubmit={handleCreateTask} />

      <div className={styles.container}>
        <header className={styles.header}>
          <p>
            Tarefas criadas
            <span>{tasks.length}</span>
          </p>

          <p>
            Concluídas
            <span>
              {countTasksCompleted()} de {tasks.length}
            </span>
          </p>
        </header>

        <section className={styles.tasks}>
          {tasks.length === 0 ? (
            <EmptyTasks />
          ) : (
            <ul>
              {tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onDelete={handleTaskDelete}
                  onStatusChange={handleTaskStatusChange}
                />
              ))}
            </ul>
          )}
        </section>
      </div>
    </>
  );
};
