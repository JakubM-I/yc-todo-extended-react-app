
import './App.css';
import TaskList from './TaskList';
import Header from './Header';
import Form from './Form';
import Tasks from './Tasks';
import TaskMenu from './TasksMenu';
import Section from './Section';

let tasksList = [
  {id: 1, taskName: "Zadanie 1", taskPriority: 1, taskDone: false, taskVisibility: true,},
  {id: 2, taskName: "Zadanie 2", taskPriority: 2, taskDone: true, taskVisibility: true,},
  {id: 3, taskName: "Zadanie 3", taskPriority: 0, taskDone: false, taskVisibility: true,},
];

function App() {
  return (
    <TaskList>
      <Header title="Lista zadań" />
      <Section 
        title="Dodaj nowe zadanie" 
        body={<Form />} 
      />
      <Section 
        title="Lista zadań" 
        menu={<TaskMenu tasks={tasksList} />} 
        body={<Tasks tasks={tasksList} />} 
      />
    </TaskList>
  );
}

export default App;
