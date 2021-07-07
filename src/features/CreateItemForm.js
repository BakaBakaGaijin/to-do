import React, {useState} from "react";
//import { useSelector } from "react-redux";

import {ReactComponent as Important} from "../img/important.svg";
import DropDown from "./modal/Dropdown";

export default function CreateItemForm({modalType, iName, iSelected, iDescription,name, setName, description, setDescription, selected, setSelected}) {
    //const categories  = useSelector(state => state.categories);
    const isCreate = modalType === "createItem";

    const [cIselected, setCISelected] = useState(isCreate ? "" : iSelected);
    const [cIName, setCIName] = useState(isCreate ? "" : iName);
    const [cIDescription, setCIDescription] = useState(isCreate ? "" : iDescription);



    const onNameChanged = e => {
        const value = e.target.value
        setName(value);
        setCIName(value);
    };
    const onDescriptionChanged = e => setDescription(e.target.value);

    return(
        <form className="addItem-form">
                    <label htmlFor="name">Имя <Important className={"important"}/></label>
                    <input
                        className={"item-form"}
                        name="name"
                        id="name"
                        value={cIName}
                        placeholder="Введите имя задачи"
                        onChange={onNameChanged}
                    />
                    <label htmlFor="categoryId">Категория</label>
                    <DropDown
                        id={"categoryId"}
                        selected={cIselected}
                        setCISelected={setCISelected}
                        setSelected={setSelected}
                    />
                    <label htmlFor="description">Описание</label>
                    <textarea
                        className={"item-form large-item"}
                        placeholder="Введите описание задачи"
                        name="description"
                        id="description"
                        value={cIDescription}
                        onChange={onDescriptionChanged}
                        >
                    </textarea>
            </form>
    );
}