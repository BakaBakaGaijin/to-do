import React from "react";
import { useSelector } from "react-redux";

import edit from "../../img/edit.svg";
import del from "../../img/delete.svg";
import "../../task.css";

export const CategoriesList = () => {
    const categories  = useSelector(state => state.categories);

    const renderedCategories = categories.map(category => (
        <div className="category" >
            <div className="text">
                <h2 className="category-header">
                    {category.name}
                </h2>
                <p className="description">{category.description}</p>
            </div>
            <div className="tools">
                <a href="#" className="edit"><img src={edit} alt="edit"/></a>
                <a href="#" className="delete"><img src={del} alt="delete"/></a>
            </div>
        </div>
    ))

    return (renderedCategories);
}