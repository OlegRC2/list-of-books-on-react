import {useState} from 'react';

import './form.css';

function Form(props) {
    const [autor, setAutor] = useState('');                                     // введенное пользователем значение с инпута autor
    const [nameBook, setBook] = useState('');                                   // введенное пользователем значение с инпута name

    const handleChangeAutor = (e) => {
        setAutor(e.target.value);
    }

    const handleChangeBook = (e) => {
        setBook(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.addBook(autor, nameBook);
        setAutor('');
        setBook('');
    }

    return (
        <div className='container book-form'>
            <div className='row'>
                <form className='col s12' 
                    onSubmit={onSubmit}>
                    <div className='row'>
                        <div className="input-field col s5">
                            <input 
                                placeholder="Autor" 
                                id="autor" 
                                type="text" 
                                className="validate" 
                                name="autor" 
                                required
                                value={autor}
                                onChange={handleChangeAutor}/>
                            <label htmlFor="autor" className='active'>Autor</label>
                        </div>
                        <div className="input-field col s5">
                            <input 
                                placeholder="Name of book" 
                                id="name-of-book" 
                                type="text" 
                                className="validate" 
                                name="name" 
                                required
                                value={nameBook}
                                onChange={handleChangeBook}/>
                            <label htmlFor="name-of-book" className='active'>Name of book</label>
                        </div>
                        <button 
                            className="input-field col s1 waves-effect waves-light btn" 
                            type='submit'
                        >Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export {Form};