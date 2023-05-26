import { useState } from "react";
import "./style.css";

const Form = ({addNewTask}) => {
    const [taskName, setTaskName] = useState("");
    const [taskPriority, setTaskPriority] = useState(0);
    
    const formSubmit = (event) => {
        event.preventDefault();
        if(!taskName){
            return;
        };
        
        console.log(`Zadanie: ${taskName}, priorytet: ${taskPriority}`)
        addNewTask(taskName, taskPriority);
        setTaskName("")
        setTaskPriority(0)
    }

    return (
        <form 
            onSubmit={formSubmit}
            className="taskListForm__form" 
            action="#"
        >
            <input 
                value={taskName}
                onChange={({target}) => setTaskName(target.value)}
                className="taskListForm__addField" 
                type="text" name="newTask" 
                placeholder="Co jest do zrobienia?" 
            />
            <select
                value={taskPriority}
                onChange={({target}) => setTaskPriority(+target.value)} 
                className="taskListForm__priority" 
                name="priority" 
            >
                <option value="0">Priorytet</option>
                <option value="1">Brak</option>
                <option value="2">Średni</option>
                <option value="3">Wysoki</option>
            </select>
            <button className="taskListForm__addButton">Dodaj zadanie</button>
        </form>
    )
};

export default Form;