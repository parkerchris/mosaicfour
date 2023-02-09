import { useState } from 'react'

export default function AddProperty() {

    const [ propertyData, setPropertyData ] = useState({
        address: null,
        city: null,
        state: null,
        zip: null

    })


    function handleChange(event: any) {
        setPropertyData(prevPropertyData => {
            return {
                ...prevPropertyData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit() {}

    return (
        <>
            <h3>Add a Property</h3>
            <form>
                <label>Address</label>
                <input 
                    type="text"
                    placeholder="enter an addresss"
                    required
                    name="address"
                    onChange={handleChange}
                />
                <label>city</label>
                <input 
                    type="text"
                    placeholder="enter a city"
                    required
                    name="city"
                    onChange={handleChange}
                />
                <label>state</label>
                <input 
                    type="text"
                    placeholder="enter a state"
                    required
                    name="state"
                    onChange={handleChange}
                />
                <label>zip</label>
                <input 
                    type="text"
                    placeholder="enter a zip"
                    required
                    name="zip"
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}>Save</button>
            </form>
        </>
    )

}