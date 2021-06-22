import { useHistory } from "react-router-dom";

import "./header.css";

function addTask() {
    console.log("Добавляем задачу");
}

export default function Header() {
    const history = useHistory();

    return (
        <header className="header">
            <div className="header-wrapper">
                <h1 className="header-title">ToDo List</h1>
                <div className="header-menu">
                    <a href="/items"
                       onClick={(e) => {
                           e.preventDefault();
                           history.push('/items');
                       }}
                       className="header-menu_link
                        active
                        header-menu_tasks"
                    ><p>Задачи</p></a>
                    <div className="stick"></div>
                    <a href="/categories"
                       onClick={(e) => {
                           e.preventDefault();
                           history.push('/categories');
                       }}
                       className="header-menu_link
                       header-menu_categories"
                    ><p>Категории</p></a>
                </div>
            </div>
            <button
                className="header-button"
                onClick={addTask}
            >Добавить задачу</button>
        </header>
    );
}