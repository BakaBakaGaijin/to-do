import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { modeToggled } from "../toggleModeSlice";
import { useSelector } from "react-redux";

export default function HeaderMenu() {
    const history = useHistory();
    const dispatch = useDispatch();
    const mode = useSelector(state => state.mode).mode;

    return(
        <div className="header-menu">
                    <a href="/items"
                       onClick={(e) => {
                           e.preventDefault();
                           history.push('/items');
                           dispatch(
                               modeToggled("items")
                           );
                       }}
                       className={
                           mode === "items" && "header-menu_link active header-menu_tasks" ||
                               "header-menu_link header-menu_tasks"
                       }
                    ><p>Задачи</p></a>
                    <div className="stick"></div>
                    <a href="/categories"
                       onClick={(e) => {
                           e.preventDefault();
                           history.push('/categories');
                            dispatch(
                               modeToggled("categories")
                           );
                       }}
                       className={mode === "categories" && "header-menu_link header-menu_categories active" ||
                           "header-menu_link header-menu_categories"}
                    ><p>Категории</p></a>
                </div>
    );
}