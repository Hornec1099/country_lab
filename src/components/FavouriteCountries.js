import React from 'react'

const FavouriteCountries = ({faveCountries}) => {

    const faveList = faveCountries.map((country) => {
        return <li> {country}</li>
    });
    

    return (

        <ul>
           {faveList}
        </ul>
        
    )
}

export default FavouriteCountries