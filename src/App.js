import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

//
import {persistentReducer} from 'redux-pouchdb'
import {createStore, compose} from 'redux'
import PouchDB from 'pouchdb';
import addItem from "../src/features/items/addItem";
//

import Header from "./features/header/header";
import Modal from "./features/modal/Modal";

import {CategoriesList} from "./features/categories/CategoriesList";
import {ItemsList} from "./features/items/ItemsList";

import "./App.css";

let db = new PouchDB("todos");
let remoteCouch = false;

function addTodo({id, name, description, categoryId}) {
    let item = {id, name, description, categoryId};
    db.put(item, function callback(err, result) {
        if (!err) {
            console.log("Successfully posted a todo!");
        }
    })
}

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
                        <ItemsList modalHandler={setModalActive} setCurrentId={setCurrentId} addTodo={addTodo}/>
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
            <Modal active={modalActive} setActive={setModalActive} id={currentId}/>
        </div>
    );
}

export default App;
