import { useState } from "react";
import { useEffect } from "react";
import Country from "../Country/Country"
import './Countries.css';

const Countries = () =>{
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect (() =>{
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country =>{
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handelVisitedFlags = flag =>{
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>

            <div>
                <h5>Visited countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            {/* kono data te onek gulo data thake tokhon data valo vabe manage korar jonno key use korte. key er value sob somoy uniq hote
            hobe. jemon ei khane cca3 ke key er value hisabe use kora hoyche. prithibir all country er ekti uniq cca3 code thake. */}
            <div className="flag-container">
                {
                    visitedFlags.map((flag,idx)=> <img key={idx} src={flag}></img>)
                }
            </div>
            <div className="country-container">
                    {
                        countries.map(country => <Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} handelVisitedFlags={handelVisitedFlags} country={country}></Country>)
                    }
            </div>
        </div>
    )

}

export default Countries;