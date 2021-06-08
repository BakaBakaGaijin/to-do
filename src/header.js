import "./header.css";

function addTask() {
    console.log("Добавляем задачу");
}

export default function Header() {
    return (
        <header className="header">
            <div className="header-wrapper">
                <h1 className="header-title">ToDo List</h1>
                <div className="header-menu">
                    <a href="#"
                       className="header-menu_link
                        active
                        header-menu_tasks"
                    >Задачи</a>
                    <div className="stick"></div>
                    <a href="#"
                       className="header-menu_link
                       header-menu_categories"
                    >Категории</a>
                </div>
            </div>
            <button
                className="header-button"
                onClick={addTask}
            >Добавить задачу</button>
        </header>
    );
}