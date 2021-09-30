import {useState, useEffect} from 'react';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Form } from './components/form/Form';
import { BooksList } from './components/booksList/BooksList';
import { nanoid } from 'nanoid';
import { EditBook } from './components/editBook/EditBook';

import './App.css';

function getDefaultValue() {																	// функция проверяющая localStorage и если там что-то есть возвращает это значение, либо пустой массив
	const userBooks = JSON.parse(localStorage.getItem('userBooksList'));
	return userBooks ? [...userBooks] : [];
}

function App() {
	// localStorage.clear();
	const [books, setBooks] = useState(getDefaultValue());                                     	// список всех книг
	const [isEditShow, setIsEditShow] = useState(false);                                     	// показано ли окно редактирования
	const [editBookIndex, setEditBookIndex] = useState(null);                                   // индекс редактируемой книги

	useEffect(() => {																			// при каждом обновлении books этот books записывается в localStorage
		localStorage.setItem('userBooksList', JSON.stringify(books));
	}, [books]);

	const addBook = (autor, nameBook) => {														// добавление книги через форму					
        const newBook = {
            autor: autor,
            nameBook: nameBook,
            id: nanoid()
        }
		setBooks((books) => {
			const newArr = [...books, newBook];
			return newArr;
		})
    }

	const deleteBook = (id) => {																// удаление книги
        setBooks((books) => {
            const index = books.findIndex(elem => elem.id === id);

            const before = books.slice(0, index);
            const after = books.slice(index + 1);

            const newArr = [...before, ...after];

            return newArr;
        });
    }

	const openModalEdit = (id) => {																// вызов окна редактирования
        setIsEditShow(!isEditShow);
		const index = books.findIndex(elem => elem.id === id);
		setEditBookIndex(index);
    }

	const closeModalEdit = () => {																// закрытие окна редактирования
        setIsEditShow(!isEditShow);
    }

	const editBook = (autor, nameBook) => {														// редактирование книги
		setBooks((books) => {
            const before = books.slice(0, editBookIndex);

			const newBook = {
				autor: autor,
				nameBook: nameBook,
				id: books[editBookIndex].id
			}

            const after = books.slice(editBookIndex + 1);

            const newArr = [...before, newBook, ...after];

            return newArr;
        });
	}

  	return (
    	<>
			<Header/>

			<div className='content'>

				<Form addBook={addBook}/>

				<BooksList 
					books={books}
					deleteBook={deleteBook}
					openModalEdit={openModalEdit}
				/>

				{ isEditShow && <EditBook
									books={books}
									editBookIndex={editBookIndex}
									closeModalEdit={closeModalEdit}
									editBook={editBook}
								/> 
				}

			</div>

			<Footer/>
    	</>
  	);
}

export default App;