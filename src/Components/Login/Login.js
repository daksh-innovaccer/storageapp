import Card from "../UI/Card/Card"
import Button from "../UI/Button/Button";
import "./Login.css"
import { useState, useEffect } from "react"
const Login = (props) => {

    const [userEmail, setUserEmail] = useState('')
    const [emailIsValid, setEmailIsValid] = useState()
    const [userPassword, setUserPassword] = useState('')
    const [passwordIsValid, setPasswordIsValid] = useState()
    const [formIsValid, setFormIsValid] = useState(false)

    // const newEmailValidation

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log("light weight baby")
            setFormIsValid(userEmail.includes('@') && userPassword.trim().length > 6)
        }, 3000)

        return () => {
            console.log("yead budddyy")
            clearTimeout(identifier)
        }

    }, [userEmail, userPassword])

    const emailChangeHandler = (event) => {
        setUserEmail(event.target.value)
        //setFormIsValid(event.target.value.includes('@') && userPassword.trim().length > 6)
    }

    const emailBlurHandler = () => {
        setEmailIsValid(userEmail.includes('@'))
    }

    const passwordChangeHandler = (event) => {
        setUserPassword(event.target.value)
        //setFormIsValid(event.target.value.trim().length > 6 && userEmail.includes('@'))
    }

    const passwordBlurHandler = () => {
        setPasswordIsValid(userPassword.trim().length > 6)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        console.log("Username:", userEmail, "Password", userPassword)
        props.onLoginClick(userEmail, userPassword)
    }

    return (
        <Card className="login">
            <form onSubmit={submitHandler}>
                <div className={`control ${emailIsValid === false ? "invalid" : ""}`}>
                    <label htmlFor="email">E-mail </label>
                    <input type="email" name="email" id="email" onChange={emailChangeHandler} onBlur={emailBlurHandler} />
                </div>
                <div className={`control ${passwordIsValid === false ? "invalid" : ""}`}>
                    <label htmlFor="password">Password </label>
                    <input type="password" name="password" id="password" onChange={passwordChangeHandler} onBlur={passwordBlurHandler} />
                </div>
                <div className="actions">
                    <Button type="submit" btnDisable={!formIsValid}>Login</Button>
                </div>
            </form>
        </Card>
    )
}

export default Login