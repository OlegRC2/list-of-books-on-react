import { useState } from "react";

import "./editBook.css";

function EditBook(props) {
    const {
        books = [],
        editBookIndex = null,
        closeModalEdit = Function.prototype,
        editBook = Function.prototype,
    } = props;

    const [autor, setAutor] = useState(""); // введенное пользователем значение с инпута autor
    const [nameBook, setBook] = useState(""); // введенное пользователем значение с инпута name

    const handleChangeAutor = (e) => {
        setAutor(e.target.value);
    };

    const handleChangeBook = (e) => {
        setBook(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (autor || nameBook) {
            editBook(autor, nameBook);
            closeModalEdit();
        }
        setAutor("");
        setBook("");
        closeModalEdit();
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col s4 offset-s4">
                    <div className="card edit-book">
                        <div className="card-content black-text edit-content">
                            <span className="card-title">Edit book</span>
                            <i
                                className="material-icons close edit-close"
                                onClick={closeModalEdit}
                            >
                                close
                            </i>
                            <div className="row">
                                <form
                                    className="col s12"
                                    onSubmit={onSubmit}
                                    id="editForm"
                                >
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input
                                                placeholder={`${books[editBookIndex].autor}`}
                                                id="autor"
                                                type="text"
                                                className="validate edit-input"
                                                name="autor"
                                                value={autor}
                                                onChange={handleChangeAutor}
                                            />
                                            <label
                                                htmlFor="autor"
                                                className="active"
                                            >
                                                Autor
                                            </label>
                                        </div>
                                        <div className="input-field col s12">
                                            <input
                                                placeholder={`${books[editBookIndex].nameBook}`}
                                                id="name-of-book"
                                                type="text"
                                                className="validate"
                                                name="name"
                                                value={nameBook}
                                                onChange={handleChangeBook}
                                            />
                                            <label
                                                htmlFor="name-of-book"
                                                className="active"
                                            >
                                                Name of book
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card-action edit-card-action">
                            <button
                                className="waves-effect waves-light btn edit-btn"
                                type="submit"
                                form="editForm"
                            >
                                edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { EditBook };
