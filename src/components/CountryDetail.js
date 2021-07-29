import React from 'react'


const CountryDetail = ({ selectedCountry}) => {

    if( selectedCountry === null) {
        return null
    }

    return (

        <div>
            <h1>Here is the Selected Country</h1>
            <h3> {selectedCountry.name}</h3>
            <ul>
                <li> Population : {selectedCountry.population}</li>
                <li> Capital : {selectedCountry.capital}</li>
                <li> Region : {selectedCountry.region}</li>
                <li> Initials : {selectedCountry.alpha3Code}</li>
            </ul>
        </div>


    )

}
export default CountryDetail 