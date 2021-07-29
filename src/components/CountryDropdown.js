import React from 'react'


const Dropdown = ({countries, SelectedCountry}) => {

    const handleChange = (event) => {

        SelectedCountry(event.target.value)
    };

    const countryNames = countries.map((country) => {
       return <option value = "{country}"    onChange = {handleChange(country)}>  {country.name}</option>
    })


    return (
    <select defaultValue = "" onChange ={handleChange}>
        <option value ="" disable > chooseCountry</option>
        {countries.map((country) => {
            return (
                <option key = {country.alpha3Code} > {country.name} </option>
            )
        })}
    </select>
        
    )
}
export default Dropdown