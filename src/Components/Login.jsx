import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"
import * as yup from "yup"
import './Login.css'


const Login = () => {
    const navigate = useNavigate()
    const formik = useFormik( {
        initialValues: {
            email: "",
            password: "",
            username:""
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
            email: yup.string().required( "Email is Required" ).email( "Invalid Email Id" ),
            password: yup.string().required( "Password is Required" ),
            username: yup.string().required("Username is Required" )
        } )
    } )
    return (
        <section>
            <div className="login-container">
                <form className="login" onSubmit={formik.handleSubmit} >
                   
                        <h2>LOGIN HERE</h2>
                        <div className="inputBox">
                        <input type="text" placeholder="User Name" {...formik.getFieldProps( "username" )} />
                        {formik.touched && formik.errors.username ? ( <div className="text-danger">{formik.errors.username}</div> ) : null}
                        </div>
                        <div className="inputBox">
                            <input type="email" placeholder="Mail id"  {...formik.getFieldProps( "email" )} />
                            {formik.touched && formik.errors.email ? ( <div className="text-danger">{formik.errors.email}</div> ) : null}
                        </div>
                        <div className="inputBox">
                            <input type="password" placeholder="Password"  {...formik.getFieldProps( "password" )} />
                            {formik.touched && formik.errors.password ? ( <div className="text-danger">{formik.errors.password}</div> ) : null}
                        </div>
                        <div className="inputBox">
                        <input type="submit" value="Login" id="btn" />
                        </div>
                        <div className="group">
                            <a href="#">Forget Password</a>
                            <a href="#">Signup</a>
                        </div>
                </form>
            </div>
        </section>
    )
}

export default Login