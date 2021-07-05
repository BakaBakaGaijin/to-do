import {useSelector, useDispatch} from "react-redux";
import {nanoid} from "@reduxjs/toolkit";


import {itemAdded} from "../items/itemsSlice";
import {categoryAdded} from "../categories/categoriesSlice";

export default function Btns({setActive, name, setName, description, setDescription, selected, setSelected}) {
    const dispatch = useDispatch();

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

    const onEditItemClicked = () => {
        console.log("onEditItemClicked");
        setName("");
        setDescription("");
        setSelected("");
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