import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
const SampleComponent = () => {
    const [formValues, setFormValues] = useState({})

    const dispatch = useDispatch()


    const handleFormValues = ({ name, value }) => {
        setFormValues({ ...formValues, [name]: value })
    }
    const formSubmit = (e) => {
        e.preventDefault()
        if (formValues.name && formValues.age) {
            dispatch({ type: 'UPDATE_LIST_REQUEST', payload: formValues })
            setFormValues({ name: '', age: '' })
        }
    }
    return (
        <div className="container">
            <form>
                <span>
                    <input type="text" placeholder="Name" value={formValues.name} name="name" onChange={({ target }) => handleFormValues(target)} />
                </span>
                <span>
                    <input type="number" placeholder="Age" value={formValues.age} name="age" id="" onChange={({ target }) => handleFormValues(target)} />
                </span>
                <button type="submit" onClick={(e) => formSubmit(e)}>Submit</button>
            </form>

        </div>
    )
}


export default SampleComponent