import React, { useState, useEffect } from 'react';
import AutocompleteList from './AutocompleteList';
import { getAutocomplete } from '../api/autocomplete';

import './Autocomplete.css'

function Autocomplete() {
  const [autocompleteList, setAutocompleteList] = useState([]);
  const [queryText, setQueryText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAutocomplete(queryText);
        setAutocompleteList(response.data);
      } catch(err) {
        console.log(err);
      }
    };

    fetchData();
  }, [queryText]) 

  return (
    <div id="autocomplete-cntr">
      <input
        type='text'
        value={queryText}
        onChange={ (e) => { setQueryText(e.target.value) } }
        autoFocus
      />
      <AutocompleteList list={autocompleteList} />
    </div>
  );
}

export default Autocomplete;