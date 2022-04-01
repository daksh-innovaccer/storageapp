//# ref-> to get data from real DOM
import { useState, useRef } from 'react'
function UserData() {
    const nameField = useRef()
    const lastnameField = useRef()
    // const [name, setName] = useState()
    // const nameChangeHandler = (event) => {
    //     setName(event.target.value)
    // }
    const submitHandler = (event) => {
        event.preventDefault()
        const name = nameField.current.value
        const lastname = lastnameField.current.value
        console.log(name,lastname)
        nameField.current.value=""
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="firstname">Firstname</label>
                <input type="text" name="firstname" id="firstname"  ref={nameField} />
            </div>
            <div>
                <label htmlFor="lastname">Lastname</label>
                <input type="text" name="lastname" id="lastname" ref={lastnameField}/>
            </div>
            <button type='submit'>Click</button>
        </form>
    )
}

export default UserData