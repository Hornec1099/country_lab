import React from 'react'


const Dropdown = ({countries, SelectedCountry}) => {



    const handleChange = (event) => {

        SelectedCountry(event.target.value)
    };

  

    return (

    <select defaultValue = "" onChange ={handleChange}>
        <option value ="" disable > choose Country</option>
        {countries.map((country) => {
            return (
                <option key = {country.alpha3Code}  value = {country.name}> {country.name} </option>
            )
        })}
    </select>
    )
}
export default Dropdown