import React from "react"
import Country from "./Country"

const CountryList = ({countries , onCountryClick}) => {

    const listOfCountries = countries.map((country) => {
        return < Country country = {country} onCountryClick ={onCountryClick}/>
    })

    return (
        <div>
        <p> this is the list</p>
        <ul>
        {listOfCountries}
        </ul>
        </div>
    )
}


export default CountryList