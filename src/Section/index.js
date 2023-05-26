import "./style.css";

const Section = ({title, menu, body}) => (
    <section class="taskListSection">
        <h3 class="taskListSection__header">{title}</h3>
        {menu}
        {body}
    </section>
)

export default Section;