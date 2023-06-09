import "./style.css";

const Tasks = ({tasks, toggleTaskDone, deleteTask}) => {
    const toggleTaskPriority = (taskPriority) => {
        if (taskPriority === 0 || taskPriority === 1) {
            return "tasks__taskPriority--nopriority";
        };
    
        if (taskPriority === 2) {
            return "tasks__taskPriority--averange";
        };
    
        return "tasks__taskPriority--important";
    };

    return (
        <ul className="tasks__list">
            {[...tasks]
            .sort((a, b) => a.taskDone - b.taskDone || b.taskPriority - a.taskPriority)
            .map(task => (
                <li key={task.id} className={`tasks__listItem 
                ${task.taskDone ? "tasks__listItem--done" : ""} 
                ${task.taskVisibility ? "" : "tasks__listItem---hide"}`}
                >
                    <button 
                        onClick={() => toggleTaskDone(task.id)}
                        className={`tasks__doneButton
                        ${task.taskDone ? "tasks__doneButton--done" : ""}`}
                    />
                    <span className="tasks__taskContent">{task.taskName}</span>
                    <div className="tasks__itemButtons">
                        <span className={`tasks__taskPriority 
                        ${toggleTaskPriority(task.taskPriority)}
                        `}
                        />
                        <button 
                        onClick={() => deleteTask(task.id)}
                            className="tasks__removeButton" 
                        />
                    </div>
                </li>
            ))}
        </ul>
    )
};

export default Tasks;