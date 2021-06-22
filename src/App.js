import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { openDB, deleteDB, wrap, unwrap} from "idb";

import Header from "./header";
//import Task from "./Task";
import { CategoriesList } from "./features/categories/CategoriesList";
import { ItemsList } from "./features/items/ItemsList";
import { AddItemForm } from "./features/items/AddItemForm";
import "./App.css";


let array = new Array(9).fill(1);
//const Tasks = array.map(() => (<Task />));

/*async function addBook() {
    let name = prompt("Название книги");
    let price = +prompt("Цена книги");

    let tx = db.transaction('books', 'reawrite');

    try {
        await tx.objectStore('books').add({name, price});
        await list();
    } catch(err) {
        if (err.name == 'ConstraintError') {
            alert("акая книга уже существует");
            await addBook();
        } else {
            throw err;
    }
    }
}*/
/*window.addEventListener('unhandledrejection', event => {
    alet("Ошибка: " + event.reason.message)
})*/
/*async function clearBooks() {
    let tx = db.transaction('books', 'readwrite');
    await tx.objectStore('books').clear();
    await list();
}*/

function App() {
    /*let db;

    init();

    async function init() {
        db = await openDB('booksDb', 1, db => {
            db.createObjectStore('books', {keyPath: 'name'});
        });

        list();
    }

    async function list() {
        let tx = db.transaction('books');
        let booksStore = tx.objectStore('books');

        let books = await bookStore.getAll();

        if (books.length) {
            listElem.innerHTML = books.map(book => `
            <li>название: ${book.name}, цена: ${book.price}</li>
            `)
        } else {
            listElem.innerHTML = `
                <li>Книг пока нет. Пожалуйста, добавьте книги.</li>
            `
        }
    }*/

    //for (let i )
  return (
          <div className="ToDo">
              <Router>
                  <Header />
                  <Switch>
                      <Route
                          path="/items"
                          render={() => (
                              <React.Fragment>
                                  <ItemsList />
                                  <AddItemForm />
                              </React.Fragment>
                          )}
                      />
                      <Route
                          path="/categories"
                          render={() => (
                              <React.Fragment>
                                  <CategoriesList />
                              </React.Fragment>
                          )}
                      />
                      <Redirect to="/items" />
                  </Switch>
              </Router>
          </div>
  );
}

export default App;
