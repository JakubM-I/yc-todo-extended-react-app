import "./style.css";

const TaskList = ({children}) => (
    <main className="taskList">
        {children}
    </main>
);

export default TaskList;