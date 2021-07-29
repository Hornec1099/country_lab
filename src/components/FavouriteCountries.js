import React from 'react'

const FavouriteCountries = ({faveCountries}) => {

    const faveList = faveCountries.map((country) => {
        return <li> {country}</li>
    });
    

    return (
        <section>
            <h3> Favourite Countries</h3>
            <ul>
                {faveList}
            </ul>
        </section>
    )
}

export default FavouriteCountries