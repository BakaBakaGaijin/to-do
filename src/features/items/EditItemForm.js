import React, {useState} from "react";
//import { useSelector } from "react-redux";

import {ReactComponent as Important} from "../../img/important.svg";
import DropDown from "../modal/Dropdown";

export default function EditItemForm({iName, iSelected, iDescription, name, setName, description, setDescription, selected, setSelected, id})  {
    //const categories  = useSelector(state => state.categories);

    const [cIselected, setCISelected] = useState(iSelected);
    const [cIName, setCIName] = useState(iName);
    const [cIDescription, setCIDescription] = useState(iDescription);

    const onNameChanged = e => {
        const value = e.target.value
        setName(value);
        setCIName(value);
    };
    const onDescriptionChanged = e => setDescription(e.target.value);
    /*const [cIselected, setCISelected] = useState(iSelected);
    const [cIName, setCIName] = useState(iName);
    const [cIDescription, setCIDescription] = useState(iDescription);

    const categories  = useSelector(state => state.categories);

    const item = useSelector(state =>
        state.items.find(item => item.id === id)
    );

    const onNameChanged = e => {
        const value = e.target.value;
        console.log("value", value);
        setCISelected(value);
        setName(value);
    };
    const onDescriptionChanged = e => setDescription(e.target.value);*/

    return (
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
    )
}