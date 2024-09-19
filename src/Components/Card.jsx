import { useNavigate } from 'react-router-dom';
import bookimg from '../assets/book2.jpg';
import propTypes from "prop-types";
import axios from 'axios';
import { useEffect } from 'react';

const Card = ( { book, author, id, setBooks, books } ) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            const res = await axios.delete( `https://66eaae6955ad32cda479f8d5.mockapi.io/user/user/${id}` );
            if ( res.status === 200 ) {

                const updatedBooks = books.filter( b => b.id !== id );
                setBooks( updatedBooks );
            }
        } catch ( error ) {
            console.error( error );
        }
    }

    useEffect( () => {
    }, [] );

    return (
        <>
            <div className="card m-3" style={{ width: "18rem", height: "auto" }}>
                <img src={bookimg} className="" alt="..." />
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5 className="card-title">{book.title}</h5>
                    <h6 className="card-text">Author: {author.name}</h6>
                </div>
                <div className='d-flex justify-content-around p-3'>
                    <button className="btn btn-success" style={{ width: "100px" }}
                        onClick={() => { navigate( `/editbook/${id}` ); }}>EDIT</button>
                    <button className="btn btn-danger" style={{ width: "100px" }} onClick={handleDelete}>DELETE</button>
                </div>
            </div>
        </>
    );
}

Card.propTypes = {
    book: propTypes.object,
    author: propTypes.object,
    id: propTypes.string,
    books: propTypes.array,
    setBooks: propTypes.func
}

export default Card;
