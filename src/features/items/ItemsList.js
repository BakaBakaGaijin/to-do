import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import edit from "../../img/edit.svg";
import del from "../../img/delete.svg";
import "../../task.css";
import ItemsBtns from "./ItemsBtns";

export const ItemsList = (props) => {
    const items = useSelector(state => state.items);
    const setCurrentId = props.setCurrentId;
    const renderedItems = items.map(item =>

        (<div className="task" key={nanoid()}>
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
            <ItemsBtns
                handler={props.modalHandler}
                id={item.id}
                setCurrentId={props.setCurrentId}
            />
        </div>)

    )

    return (renderedItems);
}