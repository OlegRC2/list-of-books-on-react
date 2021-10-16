import "./booksItem.css";
import notFound from "./notFound.png";

function BooksItem(props) {
    const {
        autor = "",
        nameBook = "",
        img = "",
        deleteBook = Function.prototype,
        openModalEdit = Function.prototype,
        findIndexForImg = Function.prototype,
        loadImg = Function.prototype,
    } = props;

    return (
        <div className="col s12 card-book">
            <div className="card horizontal">
                <div className="card-image">
                    <img
                        className="books-img"
                        src={img === "" ? notFound : img}
                        alt={nameBook}
                    />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <div className="book-autor">{nameBook}</div>
                        <div className="book-title">{autor}</div>
                        <i
                            className="material-icons close"
                            onClick={deleteBook}
                        >
                            close
                        </i>
                    </div>
                    <div className="card-action">
                        <div className="input-file-wrapper">
                            <input
                                type="file"
                                id="input_file"
                                className="hide"
                                accept=".jpg, .jpeg, .png"
                                onChange={loadImg}
                            />
                            <label
                                htmlFor="input_file"
                                className="btn"
                                onClick={findIndexForImg}
                            >
                                Add img
                            </label>
                        </div>
                        <i
                            className="material-icons edit"
                            onClick={openModalEdit}
                        >
                            edit
                        </i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { BooksItem };
