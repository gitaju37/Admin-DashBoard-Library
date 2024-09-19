import axios from "axios";
import { useState, useEffect } from "react";
import "../App.css"

const Book = () => {
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
        <div className="" style={{ padding: "20px", backgroundColor: "bisque" }}>
            <h2>BOOK DETAILS</h2>
            <table className="table-container">
                <thead className="t-head" >
                    <tr>
                        <th>S.NO</th>
                        <th>ISBN NUMBER</th>
                        <th>BOOK NAME</th>
                        <th>AUTHER NAME</th>
                        <th>PUBLISH DATE</th>
                        <th>AUTHER DOB</th>
                        <th style={{ width: "500px" }}>BIOGRAPHY</th>
                    </tr>
                </thead>
                <tbody className="t-body" >
                    {
                        books.map( ( data, index ) => {
                            return (
                                <tr key={data.id} >
                                    <td>{index + 1}</td>
                                    <td>{data.book.ISBN}</td>
                                    <td>{data.book.title}</td>
                                    <td>{data.book.auther}</td>
                                    <td>{data.book.pub}</td>
                                    <td>{data.auther.birthdate}</td>
                                    <td>{data.auther.biography}</td>
                                </tr>

                            )
                        } )}
                </tbody>
            </table>


        </div>
    )
}

export default Book
