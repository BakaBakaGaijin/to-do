import React from "react";
import { useSelector } from "react-redux";

import edit from "../../img/edit.svg";
import del from "../../img/delete.svg";
import "../../task.css";

export const ItemsList = () => {
    const items = useSelector(state => state.items);

    const renderedItems = items.map(item => (
        <div className="task">
            <div className="text">
                <h2 className="task-header">
                    {item.name}
                    <a href="#"
                       className="task-header_link"
                    >
                        {item.categoryId}
                    </a>
                </h2>
                <p className="description">{item.description}</p>
            </div>
            <div className="tools">
                <a href="#" className="edit"><img src={edit} alt="edit"/></a>
                <a href="#" className="delete"><img src={del} alt="delete"/></a>
            </div>
        </div>
    ))

    return (renderedItems);
}