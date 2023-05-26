import "./style.css";

const Section = ({title, menu, body}) => (
    <section className="taskListSection">
        <h3 className="taskListSection__header">{title}</h3>
        {menu}
        {body}
    </section>
)

export default Section;