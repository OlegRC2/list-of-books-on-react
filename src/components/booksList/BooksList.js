import { BooksItem } from '../booksItem/BooksItem';

import './booksList.css'

function BooksList(props) {
    const {
        books = [],
        deleteBook = Function.prototype,
        openModalEdit=Function.prototype
    } = props;

    return (
        <div className='container'>
            <div className='row'>
                <form className='col s8 offset-s2'>
                    <div className='row'>
                        <h1>Books List</h1>
                        <ul className={`${books.length ? "collection" : ""}`}>
                        {
                            books.length ? books.map(item => (
                                 <BooksItem 
                                    key={item.id} 
                                    {...item}
                                    deleteBook={() => deleteBook(item.id)}
                                    openModalEdit={() => openModalEdit(item.id)}
                                />
                            )) : <div className='nullBooks'>The list of books is empty...</div>
                        }
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    );
}

export {BooksList};