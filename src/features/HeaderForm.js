import close from "../img/close.svg"

export default function HeaderForm(props) {
    const title = props.title;
    return (
        <header className="addItem-header">
            <h2>{title}</h2>
            <button className="addItem-close_img"><img src={close} alt="to close adding task"/></button>
        </header>
    );
};