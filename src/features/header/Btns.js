import {useSelector, useDispatch} from "react-redux";
import {nanoid} from "@reduxjs/toolkit";


import {itemAdded, itemUpdated} from "../items/itemsSlice";
import {categoryAdded} from "../categories/categoriesSlice";

export default function Btns({setActive, name, setName, description, setDescription, selected, setSelected, id}) {

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

    const onEditItemClicked = (id, description, selected, name) => {
        console.log("description", description);
        console.log("onEditItemClicked");
        console.log("id in edit", id);
        dispatch(itemUpdated({id, description, name, categoryId: selected}))
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
                    onEditItemClicked(id);
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