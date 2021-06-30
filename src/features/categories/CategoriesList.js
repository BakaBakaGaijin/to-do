import React from "react";
import {useSelector} from "react-redux";
import {nanoid} from "@reduxjs/toolkit"

import CategoriesBtns from "./CategoriesBtns";
import "../../task.css";

export const CategoriesList = (props) => {
    const categories = useSelector(state => state.categories);

    const setCurrentId2 = props.setCurrentId2;

    const renderedCategories = categories.map(category => (
        <div className="category" key={nanoid()}>
            <div className="text">
                <h2 className="category-header">
                    {category.name}
                </h2>
                <p className="description">{category.description}</p>
            </div>
            <CategoriesBtns
                handler={props.modalHandler}
                id={category.id}
                setCurrentId2={setCurrentId2}
            />
        </div>
    ))

    return (renderedCategories);
}