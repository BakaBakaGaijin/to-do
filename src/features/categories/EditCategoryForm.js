import React from "react";

import {ReactComponent as Important} from "../../img/important.svg";

export default function EditCategoryForm({name, setName, description, setDescription, id})  {
    const onNameChanged = e => setName(e.target.value);
    const onDescriptionChanged = e => setDescription(e.target.value);

    return (
        <form className="addItem-form">
                    <label htmlFor="name">Имя <Important className={"important"}/></label>
                    <input
                        className={"item-form"}
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
    )
}