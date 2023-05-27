import React, {useState} from "react";
import './App.css';
import TaskList from './TaskList';
import Header from './Header';
import Form from './Form';
import Tasks from './Tasks';
import TaskMenu from './TasksMenu';
import Section from './Section';


function App() {
  const [tasksList, setTasksList] = useState([
    {id: 1, taskName: "Zadanie 1", taskPriority: 2, taskDone: false, taskVisibility: true,},
    {id: 2, taskName: "Zadanie 2", taskPriority: 3, taskDone: true, taskVisibility: true,},
    {id: 3, taskName: "Zadanie 3", taskPriority: 0, taskDone: false, taskVisibility: true,},
  ]);

  const addNewTask = (taskName, taskPriority) => {
    setTasksList(tasksList => [
      ...tasksList,
      {
        id: tasksList.length ? tasksList[tasksList.length - 1].id + 1 : 1,
        taskName,
        taskPriority,
        taskDone: false,
        taskVisibility: true,
      },
    ]);
  };

  const toggleTaskDone = (id) => {
    setTasksList(tasksList => tasksList.map(task => {
      return (task.id === id ? {...task, taskDone: !task.taskDone} : task)
    }))
  };

  const toggleAllTaskDone = () => {
    setTasksList(tasksList => tasksList.map(task => ({...task, taskDone: true})))
  };

  const hideDoneTasks = () => {
    setTasksList(tasksList => tasksList.map(task => {
      return (task.taskDone ? {...task, taskVisibility: !task.taskVisibility} : task)
    }))
  };

  const deleteTask = (id) => {
    setTasksList(tasksList => tasksList.filter(task => task.id !== id))
  };

  return (
    <TaskList>
      <Header title="Lista zadań" />
      <Section 
        title="Dodaj nowe zadanie" 
        body={
          <Form
            addNewTask={addNewTask} 
          />} 
      />
      <Section 
        title="Lista zadań" 
        menu={
          <TaskMenu 
            tasks={tasksList} 
            toggleAllTaskDone={toggleAllTaskDone}
            hideDoneTasks={hideDoneTasks}
          />} 
        body={
          <Tasks 
            tasks={tasksList} 
            toggleTaskDone={toggleTaskDone}
            deleteTask={deleteTask}
          />} 
      />
    </TaskList>
  )
};

export default App;
