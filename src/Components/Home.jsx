
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [ books, setBooks ] = useState( [] );


  const getAllBooks = async () => {
    try {
      const res = await axios.get( "https://66eaae6955ad32cda479f8d5.mockapi.io/user/user" );
      console.log( res.data );
      setBooks( res.data );
    } catch ( error ) {
      console.error( "Error fetching books:", error );
    }
  };


  useEffect( () => {
  }, [ books ] );


  useEffect( () => {
    getAllBooks();
  }, [] );

  return (
    <div className="d-flex gap-5" style={{ backgroundColor: "bisque", height: "auto" }}>
      <SideBar />
      <div className="d-flex flex-column">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between">
            <div>
              <h1>Dashboard</h1>
              <h2>Books Details</h2>
            </div>
            <button className="btn btn-warning mt-4" style={{ height: "50px" }} onClick={() => { navigate( '/' ) }}>LOGOUT</button>
          </div>

        </div>
        <div className="d-flex flex-wrap">
          {books.length > 0 ? (
            books.map( book => (
              <Card
                key={book.id}
                book={book.book}
                author={book.auther}
                id={book.id}
                books={books}
                setBooks={setBooks}
              />
            ) )
          ) : (
            <p>No books available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
