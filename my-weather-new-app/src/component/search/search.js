import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, WEATHER_API_KEY } from "../../api";


const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null);
   

    const loadOptions = (inputValue) => {
     
       if (inputValue.search(/^[a-z][A-Z]/i) < 0 ){
        inputValue='L';

       }
        return  fetch(`${GEO_API_URL}?key=${WEATHER_API_KEY}&q=${inputValue}`)
       
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.map((city) => {
                        return {
                            value: `${city.lat} ${city.lon}`,
                            label: `${city.name} ${city.region}`,
                        }
                    })
                }
            })
            .catch(err => console.error(err));
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
            placeholder="Search For City"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    );
}

export default Search;