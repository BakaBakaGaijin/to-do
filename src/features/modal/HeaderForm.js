import { useSelector, useDispatch} from "react-redux";

import close from "../../img/close.svg"

export default function HeaderForm({setActive}) {
    let typeOfAction = useSelector(store => store).modalType.modalType;

    const title = () => {
        switch(typeOfAction) {
            case "createItem" :
                return "Создание задачи";
            case "createCategory" :
                return "Создание категории";
            case "editItem" :
                return "Редактирование задачи";
            case "editCategory" :
                return "Редактирование категории";
            case "deleteItem" :
                return "Удаление задачи";
            case "deleteCategory" :
                return "Удаление категории";
        }
    }

    return (
        <header className="modal-header">
            <h2>
                {title()}
            </h2>
            <button
                className="modal-close_img"
                onClick={() => setActive(false)}
            ><img src={close} alt="to close adding task"/></button>
        </header>
    );
};