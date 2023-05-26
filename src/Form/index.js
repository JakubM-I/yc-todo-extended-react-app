import "./style.css";

const Form = () => (
    <form className="taskListForm__form" action="#">
        <input className="taskListForm__addField" type="text" name="newTask" placeholder="Co jest do zrobienia?" />
        <select className="taskListForm__priority" name="priority" id="">
            <option value="" selected>Priorytet</option>
            <option value="brak">Brak</option>
            <option value="wysoki">Wysoki</option>
            <option value="sredni">Średni</option>
        </select>
        <button className="taskListForm__addButton">Dodaj zadanie</button>
    </form>
);

export default Form;