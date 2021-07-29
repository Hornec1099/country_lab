import React from "react"
import Country from "./Country"

const CountryList = ({countries , onCountryClick}) => {

    const listOfCountries = countries.map((country,index) => {
        return < Country country = {country} key ={index} onCountryClick ={onCountryClick} />
    })

    return (
        <div>
        <ul>
        {listOfCountries}
        </ul>
        </div>
    )
}


export default CountryList