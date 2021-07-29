import React, { useEffect, useState } from 'react'
import CountryList from '../components/CountryList';
import CountryDetail from '../components/CountryDetail';


const CountryContainer = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [population, setPopulation] = useState(0);

    useEffect( () => {
        getCountries()
    },[]);

    const getCountries = () => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(result => result.json())
        .then(data => setCountries(data))
    };

    const onCountryClick = (country) => {
        setSelectedCountry(country);
    };



    return (
        <div>
        <p>Hey Bro! </p>
        <CountryList countries ={countries} onCountryClick ={onCountryClick} />
        <CountryDetail selectedCountry = {selectedCountry} />
        </div>
    )
};

export default CountryContainer;