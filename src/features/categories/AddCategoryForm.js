import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import "../../addItem.css";
import{ categoryAdded } from "./categoriesSlice";
import HeaderForm from "../modal/HeaderForm";

export const AddCategoryForm = () => {
    //const categories  = useSelector(state => state.categories);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    //const [categoryId, setCategoryId] = useState('');

    const dispatch = useDispatch();

    const onNameChanged = e => setName(e.target.value);
    const onDescriptionChanged = e => setDescription(e.target.value);
    //const onCategoryIdChanged = e => setCategoryId(e.target.value);

    const onSaveCategoryClicked = () => {
        if (name && description) {
            dispatch(
                categoryAdded({
                    id: nanoid(),
                    name,
                    description,
                    //categoryId
                })
            )

            setName("");
            //setCategoryId("");
            setDescription("");
        }
    }

    return (
        <div className="addItem">
            <HeaderForm title="Создание категории" />
            <form className="addItem-form">
                    <label htmlFor="name">Имя</label>
                    <input
                        className="category-name"
                        name="name"
                        id="category-name"
                        value={name}
                        placeholder="Введите имя категории"
                        onChange={onNameChanged}
                    />
                    <label htmlFor="description">Описание</label>
                    <textarea
                        placeholder="Введите описание категории"
                        name="description"
                        id="description"
                        value={description}
                        onChange={onDescriptionChanged}
                        >
                    </textarea>
            </form>
            <div className="addItem-buttons">
                <button
                    className="addItem-create"
                    onClick={onSaveCategoryClicked}
                >Создать</button>
                <button className="addItem-close_button">Закрыть</button>
            </div>
        </div>
    );
}