import './booksItem.css';

function BooksItem(props) {
    const {
        autor = '', 
        nameBook = '', 
        deleteBook = Function.prototype,
        openModalEdit = Function.prototype
    } = props;

    return (
        <li className="collection-item book">{autor} "{nameBook}"
            <div className="secondary-content">
                <i 
                    className="material-icons edit"
                    onClick={openModalEdit}
                >edit</i>
                <i 
                    className="material-icons close"
                    onClick={deleteBook}
                >close</i>
            </div>
        </li>
    );
}

export {BooksItem};