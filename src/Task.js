import { useState } from "react";
import "./task.css";
import folderPng from './img/folder.svg';
import edit from './img/edit.svg';
import del from './img/delete.svg';

export default function Task() {
    const [name, setName] = useState("Задача 1");
    const [description, setDescription] = useState("Описание задачи, может быть длинным");
    const [categories, setCategories] = useState("Категория1");

    return (
        <div className="task">
            <div className="text">
                <h2 className="task-header">
                    {name}
                    <a href="#"
                       className="task-header_link"
                    >
                        {categories}
                    </a>
                </h2>
                <p className="description">{description}</p>
            </div>
            <div className="tools">
                <a href="#" className="edit"><img src={edit} alt="edit"/></a>
                <a href="#" className="delete"><img src={del} alt="delete"/></a>
            </div>
        </div>
    );
}