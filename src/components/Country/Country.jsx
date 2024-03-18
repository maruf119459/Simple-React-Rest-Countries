import { useState } from "react";
import './Country.css';

const Country = ({country, handleVisitedCountry,handelVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;
    const [Visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!Visited);
    }



    return(
        // ei khane dynamic vabe css code set kora hoyche.
        <div className={`country ${Visited ? 'visited':'non-visited'}`}>
            <h3 style={{color: Visited?'Purple':'white'}}>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={() => handelVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={handleVisited}>{Visited ? 'Visited':'Will Going'}</button>
            {Visited ? 'I alreday Visited this country':'I want to go'}
        </div>
    )
}

export default Country;