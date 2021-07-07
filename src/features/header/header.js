import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import "./header.css";
import HeaderMenu from "./HeaderMenu";
import {modalTypeChanged} from "../modal/modalTypeSlice";

export default function Header(props) {
    const dispatch = useDispatch();
    const modalHandler = props.modalHandler;
    const history = useHistory();

    let toggle;

    useEffect(() => {
        toggle = history.location.pathname;
    })


    const mode = useSelector(state => state.mode).mode;
    return (
        <header className="header">
            <div className="header-wrapper">
                <h1 className="header-title">ToDo List</h1>
                <HeaderMenu/>
            </div>
            {
                mode === "items" ?
                    <button
                        className="header-button"
                        onClick={() => {
                            dispatch(
                                modalTypeChanged("createItem")
                            )
                            modalHandler(true);
                        }}

                    >
                        Добавить задачу
                    </button> :
                    <button
                        className="header-button"
                        onClick={() => {
                            dispatch(
                                modalTypeChanged("createCategory")
                            )
                            modalHandler(true);
                        }}
                    >
                        Добавить категорию
                    </button>
            }
        </header>
    );
}