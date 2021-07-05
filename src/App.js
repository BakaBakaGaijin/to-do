import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Header from "./features/header/header";
import Modal from "./features/modal/Modal";

import {CategoriesList} from "./features/categories/CategoriesList";
import {ItemsList} from "./features/items/ItemsList";

import "./App.css";

function App() {
    const [modalActive, setModalActive] = useState(false);
    const [currentId, setCurrentId] = useState("");
    const [currentId2, setCurrentId2] = useState("")

    return (
        <div className="ToDo">
                <Header modalHandler={setModalActive}/>
                <Switch>
                    <Route
                        path="/items"
                        render={() => (
                            <ItemsList modalHandler={setModalActive} setCurrentId={setCurrentId}/>
                        )}
                    />
                    <Route
                        path="/categories"
                        render={() => (
                            <CategoriesList modalHandler={setModalActive} setCurrentId2={setCurrentId2}/>
                        )}
                    />
                    <Redirect to="/items"/>
                </Switch>
                <Modal active={modalActive} setActive={setModalActive} id={currentId} />
        </div>
    );
}

export default App;
