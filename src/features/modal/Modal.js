import React, {useState} from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import DeleteItemForm from "../items/DeleteItemForm";
import DeleteCategoryForm from "../categories/DeleteCategoryForm";

import EditItemForm from "../items/EditItemForm";
import HeaderForm from "./HeaderForm";
import CreateItemForm from "../CreateItemForm";
import CreateCategoryForm from "../categories/CreateCategoryForm";
import "./modal.css";
import Btns from "../header/Btns";

function findItem(id, items) {
    let tmp = items.find(item => item.id == id);
    if (tmp === undefined) tmp = {name: "", categoryId: "", description: ""};
    return tmp;
}

const Modal = ({active, setActive, id}) => {
    let iName, iSelected, iDescription;
    let items = useSelector(state => state.items);

    const history = useHistory();
    const path = history.location.pathname;



    const elem = path.includes("items") ? "items" : "categories";
    const action = path.includes("edit") ? "edit" : "delete";
    const idFromHistory = elem + action;

    let currentId;
    switch(idFromHistory) {
        case "itemsedit" :
            currentId = path.slice(11);
            break;
        case "itemsdelete" :
            currentId = path.slice(13);
            console.log("itemsdelete", currentId);
            break;
        case "categoriesedit" :
            currentId = path.slice(16);
            console.log("categoriesedit", currentId);
            break;
        case "categoriesdelete" :
            currentId = path.slice(18);
            console.log("categoriesdelete", currentId);
            break;
    }

    const existingItem = findItem(currentId, items);

    iName = existingItem.name;
    iSelected = existingItem.categoryId;
    iDescription = existingItem.description;


    const [selected, setSelected] = useState(iSelected);
    const [name, setName] = useState(iName);
    const [description, setDescription] = useState(iDescription);

    const modalType = useSelector(state => state.modalType).modalType;

    const sizeOfModal = () => {
        switch (modalType) {
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
                    iName={iName} iSelected={iSelected} iDescription={iDescription}
                    selected={selected} setSelected={setSelected}
                    name={name} setName={setName}
                    description={description} setDescription={setDescription}
                    modalType={modalType}
                />}
                {modalType === "createCategory" && <CreateCategoryForm
                    name={name} setName={setName}
                    description={description} setDescription={setDescription}
                />}
                {/*Редактирование*/}
                {modalType === "editItem" && <CreateItemForm
                    /*EditItemForm*/
                    iName={iName} iSelected={iSelected} iDescription={iDescription}
                    selected={selected} setSelected={setSelected}
                    name={name} setName={setName}
                    description={description} setDescription={setDescription}
                    /*iName={iName} iSelected={iSelected} iDescription={iDescription}
                    selected={selected} setSelected={setSelected}
                    name={name} setName={setName}
                    description={description} setDescription={setDescription}
                    id={id}*/
                />}
                {/*удаление*/}
                {modalType === "deleteItem" && <DeleteItemForm id={id}/>}
                {modalType === "deleteCategory" && <DeleteCategoryForm id={id} />}
                <Btns
                    setActive={setActive}
                    name={name} setName={setName}
                    description={description} setDescription={setDescription}
                    selected={selected} setSelected={setSelected}
                    id={id}
                />
            </div>
        </div>
    );
}

export default Modal;