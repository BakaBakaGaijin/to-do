import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import DeleteItemForm from "../items/DeleteItemForm";
import EditItemForm from "../items/EditItemForm";
import HeaderForm from "./HeaderForm";
import CreateItemForm from "../CreateItemForm";
import CreateCategoryForm from "../categories/CreateCategoryForm";
import "./modal.css";
import Btns from "../header/Btns";

function findItem(id, items) {
    let tmp = items.find(item => item.id == id);
    if (tmp === undefined) tmp = { name: "", categoryId: "", description: ""};
    return tmp;
}

const Modal = ({active, setActive, id}) => {
    let  existingItem, iName, iSelected, iDescription;
    let items = useSelector(state => state.items);


    existingItem = findItem(id, items);
    iName = existingItem.name;
    iSelected = existingItem.categoryId;
    iDescription = existingItem.description;


    const [selected, setSelected] = useState(iSelected);
    const [name, setName] = useState(iName);
    const [description, setDescription] = useState(iDescription);


    const modalType = useSelector(state => state.modalType).modalType;

    const sizeOfModal = () => {
        switch(modalType) {
            case "deleteItem":
            case "deleteCategory":
                return "modal__content";
            default:
                return "modal__content modal__content-large";
        }
    }

        return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={sizeOfModal()} onClick={(e) => e.stopPropagation()}>
                <HeaderForm setActive={setActive}/>
                {/*Создание*/}
                {modalType === "createItem" && <CreateItemForm
                    selected={selected} setSelected={setSelected}
                    name={name} setName={setName}
                    description={description} setDescription={setDescription}
                />}
                {modalType === "createCategory" && <CreateCategoryForm
                    name={name} setName={setName}
                    description={description} setDescription={setDescription}
                />}
                {/*Редактирование*/}
                {modalType === "editItem" && <EditItemForm
                    selected={selected} setSelected={setSelected}
                    name={name} setName={setName}
                    description={description} setDescription={setDescription}
                    id={id}
                />}
                {/*удаление*/}
                {modalType === "deleteItem" && <DeleteItemForm id={id}/>}
                <Btns
                    setActive={setActive}
                    name={name} setName={setName}
                    description={description} setDescription={setDescription}
                    selected={selected} setSelected={setSelected}
                />

            </div>
        </div>
    );
}

export default Modal;