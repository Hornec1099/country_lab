import React, { useEffect, useState } from 'react'
import CountryList from '../components/CountryList';
import CountryDetail from '../components/CountryDetail';
import './CountryContainer.css';
import Dropdown from '../components/CountryDropdown';
import FavouriteCountries from '../components/FavouriteCountries';

const CountryContainer = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [faveCountries, setFaveCountries] = useState([]);
    
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

    const SelectedCountry = (country) => {
        
        setFaveCountries([...faveCountries, country])

    }
    const totalPopulation = countries.reduce( (total,country) =>  {
        return total + country.population  
    } , 0 );


    return (
        <div className = "main-container">
            <div>
        <p > Population Total : {totalPopulation}</p>
        <Dropdown   SelectedCountry = {SelectedCountry} countries = {countries} />
        <CountryDetail selectedCountry = {selectedCountry} />
        <FavouriteCountries faveCountries = {faveCountries}/>
        </div>
        <CountryList countries ={countries} onCountryClick ={onCountryClick} />
        </div>
    )
};

export default CountryContainer;