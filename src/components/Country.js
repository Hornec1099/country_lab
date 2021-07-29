import React from 'react';

const Country = ({country, onCountryClick}) => {

    const handleClick = () => {

        onCountryClick(country)
    }

    return (

        <li onClick ={handleClick} >
            <h4> {country.name}</h4>
            <img src ={country.flag} alt ={country.flag} height = '50' width = '100' ></img>
        </li>
    )
}
export default Country