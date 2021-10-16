import { BooksItem } from "../booksItem/BooksItem";

import "./booksList.css";

function BooksList(props) {
    const {
        books = [],
        deleteBook = Function.prototype,
        openModalEdit = Function.prototype,
        findIndexForImg = Function.prototype,
        loadImg = Function.prototype,
    } = props;

    return (
        <div className="container">
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <h1>Books List</h1>
                        <div
                            className={`books-list-wrapper ${
                                books.length ? "" : "empty-title-center"
                            }`}
                        >
                            {books.length ? (
                                books.map((item) => (
                                    <BooksItem
                                        key={item.id}
                                        {...item}
                                        deleteBook={() => deleteBook(item.id)}
                                        openModalEdit={() =>
                                            openModalEdit(item.id)
                                        }
                                        findIndexForImg={() =>
                                            findIndexForImg(item.id)
                                        }
                                        loadImg={loadImg}
                                    />
                                ))
                            ) : (
                                <div className="nullBooks">
                                    The list of books is empty...
                                </div>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export { BooksList };
