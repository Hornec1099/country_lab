import React from 'react'


const Dropdown = ({countries, onSelectedCountry}) => {

    const handleSelection = (country) => {

        console.log(country)
    };

    const countryNames = countries.map((country) => {
       return <option value = "{country}"    onSelect = {handleSelection(country)}>  {country.name}</option>
    })


    return (
    <select >
        {countryNames}
    </select>
        
    )
}
export default Dropdown