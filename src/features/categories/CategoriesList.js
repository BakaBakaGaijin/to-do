import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit"

import CategoriesBtns from "./CategoriesBtns";
import "../../task.css";

export const CategoriesList = (props) => {
    const categories  = useSelector(state => state.categories);

    const renderedCategories = categories.map(category => (
        <div className="category" key={nanoid()}>
            <div className="text">
                <h2 className="category-header">
                    {category.name}
                </h2>
                <p className="description">{category.description}</p>
            </div>
            <CategoriesBtns handler={props.modalHandler} />
        </div>
    ))

    return (renderedCategories);
}