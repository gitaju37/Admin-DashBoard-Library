import { useFormik } from "formik";
import "../App.css";
import * as Yup from 'yup';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
    const navigate = useNavigate();
    const formik = useFormik( {
        initialValues: {
            book: {
                title: '',
                auther: '',
                ISBN: '',
                pub: ''
            },
            auther: {
                name: '',
                birthdate: '',
                biography: ''
            }
        },
        validationSchema: Yup.object( {
            book: Yup.object( {
                title: Yup.string().required( 'Required' ),
                auther: Yup.string().required( 'Required' ),
                ISBN: Yup.number().required( 'Required' ).typeError( 'ISBN must be a number' ),
                pub: Yup.date().required( 'Required' )
            } ),
            auther: Yup.object( {
                name: Yup.string().required( 'Required' ),
                birthdate: Yup.date().required( 'Required' ),
                biography: Yup.string().required( 'Required' )
            } )
        } ),
        onSubmit: async ( values, { resetForm } ) => {
            try {
                const res = await axios.post( 'https://66eaae6955ad32cda479f8d5.mockapi.io/user/user', values );
                if ( res.status === 201 ) {
                    navigate( '/home' )
                }

            } catch ( error ) {
                console.log( error );
            }
            console.log( values );
            resetForm();
        }
    } );

    return (
        <div style={{ backgroundColor: "bisque", height: "100vh" }}>
            <h1 style={{ textAlign: "center" }}>Add Book</h1>
            <div className="addbook-container">
                <form className="d-flex flex-column" onSubmit={formik.handleSubmit}>
                    <div className="d-flex justify-content-around">
                        <div className="book-container">
                            <h2>Book details</h2>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Book Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    {...formik.getFieldProps( 'book.title' )}
                                />
                                {formik.touched.book?.title && formik.errors.book?.title ? (
                                    <div className="text-danger">{formik.errors.book.title}</div>
                                ) : null}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="auther" className="form-label">Author:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="auther"
                                    {...formik.getFieldProps( 'book.auther' )}
                                />
                                {formik.touched.book?.auther && formik.errors.book?.auther ? (
                                    <div className="text-danger">{formik.errors.book.auther}</div>
                                ) : null}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="ISBN" className="form-label">ISBN number:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="ISBN"
                                    {...formik.getFieldProps( 'book.ISBN' )}
                                />
                                {formik.touched.book?.ISBN && formik.errors.book?.ISBN ? (
                                    <div className="text-danger">{formik.errors.book.ISBN}</div>
                                ) : null}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pub" className="form-label">Publication Date:</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="pub"
                                    {...formik.getFieldProps( 'book.pub' )}
                                />
                                {formik.touched.book?.pub && formik.errors.book?.pub ? (
                                    <div className="text-danger">{formik.errors.book.pub}</div>
                                ) : null}
                            </div>
                        </div>

                        <div className="auther-container">
                            <h2>Author details</h2>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Author Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    {...formik.getFieldProps( 'auther.name' )}
                                />
                                {formik.touched.auther?.name && formik.errors.auther?.name ? (
                                    <div className="text-danger">{formik.errors.auther.name}</div>
                                ) : null}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="birthdate" className="form-label">Birth Date:</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="birthdate"
                                    {...formik.getFieldProps( 'auther.birthdate' )}
                                />
                                {formik.touched.auther?.birthdate && formik.errors.auther?.birthdate ? (
                                    <div className="text-danger">{formik.errors.auther.birthdate}</div>
                                ) : null}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="biography" className="form-label">Short Biography:</label>
                                <textarea
                                    className="form-control"
                                    id="biography"
                                    rows="5"
                                    {...formik.getFieldProps( 'auther.biography' )}
                                ></textarea>
                                {formik.touched.auther?.biography && formik.errors.auther?.biography ? (
                                    <div className="text-danger">{formik.errors.auther.biography}</div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center m-2">
                        <button type="submit" className="btn btn-primary" style={{ width: "300px" }}>Submit</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default AddBook;
