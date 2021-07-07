import React from "react";

import {ReactComponent as Important} from "../../img/important.svg";

export default function CreateCategoryForm({name, setName, description, setDescription}) {
    const onNameChanged = e => {
        let value = e.target.value;
        if (value.length <= 255) setName(value);
    };
    const onDescriptionChanged = e => {
        const value = e.target.value;
        if (value.length <= 512) setDescription(value);
    };

    return (
        <form className="addItem-form">
            <label htmlFor="name">Имя <Important className={"important"}/></label>
            <input
                className={"item-form large-item"}
                name="name"
                id="name"
                value={name}
                placeholder="Введите имя задачи"
                onChange={onNameChanged}
            />
            <label htmlFor="description">Описание</label>
            <textarea
                className={"item-form large-item"}
                placeholder="Введите описание задачи"
                name="description"
                id="description"
                value={description}
                onChange={onDescriptionChanged}
            >
            </textarea>
        </form>
    );
}