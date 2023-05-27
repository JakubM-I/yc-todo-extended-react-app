import "./style.css";

const TaskMenu = ({ tasks, toggleAllTaskDone, hideDoneTasks }) => (
    tasks.length > 0 && (
    <span className="tasksMenu">
        <div className="tasks__menu">
            <div className="tasks__taskCounter">
                <p className="tasks__taskCounterItem">Zadań:
                    <span className="tasks__taskCounterNumber">
                        {" " + tasks.length}
                    </span>
                </p>
                <p className="tasks__taskCounterItem">Do zrobienia: 
                    <span className="tasks__taskCounterNumber">
                        {" " + tasks.filter(task => task.taskDone === false).length}
                    </span>
                </p>
            </div>
            <div className="tasks__buttons">
                <button 
                    onClick={hideDoneTasks}
                    className="tasks__buttonItem"
                >
                    {tasks.some(({ taskVisibility }) => taskVisibility === false) 
                    ? "Pokaż " 
                    : "Ukryj "}
                    zakończone
                </button>
                <button 
                    className="tasks__buttonItem"
                    onClick={toggleAllTaskDone}
                    disabled={tasks.every(({ taskDone }) => taskDone)}
                >
                    Zakończ wszystkie
                </button>
            </div>
        </div>
    </span>
    )
);

export default TaskMenu;