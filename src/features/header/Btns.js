import {useSelector, useDispatch} from "react-redux";
import {nanoid} from "@reduxjs/toolkit";
import {useHistory} from "react-router-dom";


import {itemAdded, itemUpdated, itemDeleted} from "../items/itemsSlice";
import {categoryAdded, categoryUpdated, categoryDeleted} from "../categories/categoriesSlice";

export default function Btns({setActive, name, setName, description, setDescription, selected, setSelected, id}) {
    const dispatch = useDispatch();

    const history = useHistory();

    /* Создание */
    const onSaveItemClicked = () => {
        dispatch(
            itemAdded({
                id: nanoid(),
                name,
                description,
                categoryId: selected
            })
        )
        setName("");
        setDescription("");
        setSelected("");
    }

    const onSaveCategoryClicked = () => {
        dispatch(
            categoryAdded({
                id: nanoid(),
                name,
                description
            })
        )
        setName("");
        setDescription("");
    }

    /* Редактирование */
    const onEditItemClicked = () => {
        console.log("onEditItemClicked");
        dispatch(itemUpdated({id, name, description, categoryId: selected}));
        setName("");
        setDescription("");
        setSelected("");
    }

    const onEditCategoryClicked = () => {
        dispatch(categoryUpdated({id, name, description}));
    }

    /* Удаление */
    const onDeleteItemClicked = () => {
        dispatch(itemDeleted({id}));
        history.push("/items");
    }

    const onDeleteCategoryClicked = () => {
        dispatch(categoryDeleted({id}));
        //history.goBack();
        history.push("/categories");
    }

    const typeOfAction = useSelector(store => store).modalType.modalType;
    const contentOfBtn1 = () => {
        switch (typeOfAction) {
            case "deleteItem":
            case "deleteCategory":
                return "Да";
            default :
                return "Сохранить";
        }
    }

    const contentOfBtn2 = () => {
        switch (typeOfAction) {
            case "deleteItem":
            case "deleteCategory":
                return "Нет";
            default :
                return "Закрыть";
        }
    }

    return (
        <div className="modal-btns">
            <button className={"modal-btns__conf"} onClick={() => {
                if (typeOfAction === "createItem" && name) {
                    onSaveItemClicked();
                    setActive(false);
                }
                if (typeOfAction === "createCategory" && name) {
                    onSaveCategoryClicked();
                    setActive(false);
                }
                if (typeOfAction === "editItem" && name) {
                    onEditItemClicked();
                    setActive(false);
                }
                if (typeOfAction === "editCategory" && name) {
                    onEditCategoryClicked();
                    setActive(false);
                }
                if (typeOfAction === "deleteItem") {
                    onDeleteItemClicked();
                    setActive(false);
                }
                if (typeOfAction === "deleteCategory") {
                    onDeleteCategoryClicked();

                    setActive(false);
                }

            }}>
                {contentOfBtn1()}
            </button>
            <button
                className={"modal-btns__unconf"}
                onClick={() => setActive(false)}
            >
                {contentOfBtn2()}
            </button>
        </div>);
}