import React from "react";
import { useSelector } from "react-redux";

import {ReactComponent as Important} from "../img/important.svg";
import DropDown from "./modal/Dropdown";

export default function CreateItemForm({name, setName, description, setDescription, selected, setSelected}) {
    const categories  = useSelector(state => state.categories);

    const onNameChanged = e => {
        let value = e.target.value;
        if (value.length <= 255) setName(value);
    };
    const onDescriptionChanged = e => {
        const value = e.target.value;
        if (value.length <= 1536) setDescription(value);
    };

    return(
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
                    <label htmlFor="categoryId">Категория</label>
                    <DropDown
                        id={"categoryId"}
                        selected={selected}
                        setSelected={setSelected}
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