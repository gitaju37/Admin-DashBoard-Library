import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"
import * as yup from "yup"


const Login = () => {
    const navigate = useNavigate()
    const formik = useFormik( {
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: ( values, { resetForm } ) => {
            try {
                alert( "Login SuccesFull" )
                navigate( '/home' )
                resetForm()
                console.log(values)
            } catch ( error ) {
                console.error(error)
                alert( "invalid Username & password" )  
            }
                
        },
        validationSchema: yup.object( {
            email: yup.string().required( "Email is Required" ).email( "Invalid Email" ),
            password: yup.string().required( "Password is required" )
        } )
    } )
    return (
        <div className="login-container" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "rgb(144, 206, 241)", width: "100%", height: "100vh" }} >
            <h2 className="m-3">Login Here</h2>
            <div className="w-50 m-5 p-5" style={{ justifyContent: "center", backgroundColor: "rgb(5, 105, 162)", borderRadius: "20px" }}>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email Address"
                            {...formik.getFieldProps( "email" )} />
                        {formik.touched && formik.errors.email ? ( <div className="text-danger">{formik.errors.email}</div> ) : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password"
                            {...formik.getFieldProps( "password" )} />
                        {formik.touched && formik.errors.password ? ( <div className="text-danger">{formik.errors.password}</div> ) : null}
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login