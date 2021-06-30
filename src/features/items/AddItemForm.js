import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import "../../addItem.css";
import{ itemAdded } from "./itemsSlice";
import HeaderForm from "../modal/HeaderForm";

export const AddItemForm = () => {
    const categories  = useSelector(state => state.categories);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');

    const dispatch = useDispatch();

    const onNameChanged = e => setName(e.target.value);
    const onDescriptionChanged = e => setDescription(e.target.value);
    const onCategoryIdChanged = e => setCategoryId(e.target.value);

    const onSaveItemClicked = () => {
        if (name && description && categoryId) {
            console.log("click");
            dispatch(
                itemAdded({
                    id: nanoid(),
                    name,
                    description,
                    categoryId
                })
            )

            setName("");
            setCategoryId("");
            setDescription("");
        }
    }

    return (
        <div className="addItem">
            <HeaderForm title="Создание задачи" />
            <form className="addItem-form">
                    <label htmlFor="name">Имя</label>
                    <input
                        name="name"
                        id="name"
                        value={name}
                        placeholder="Введите имя задачи"
                        onChange={onNameChanged}
                    />
                    <label htmlFor="categoryId">Категория</label>
                    <select
                        name="categoryId"
                        id="categoryId"
                        defaultValue="Выберите категорию"
                        onChange={onCategoryIdChanged}
                    >
                        <option disabled selected>Выберите категорию</option>
                        {categories.map(category => (
                            <option
                                key={category.id}
                                value={category.name}
                            >
                                {category.name}
                            </option>
                        ))}
                    </select>
                    <label htmlFor="description">Описание</label>
                    <textarea
                        placeholder="Введите описание задачи"
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
                    onClick={onSaveItemClicked}
                >Создать</button>
                <button className="addItem-close_button">Закрыть</button>
            </div>
        </div>
    );
}