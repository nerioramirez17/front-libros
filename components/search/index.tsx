import React, { ChangeEvent, FormEvent, useState } from 'react'
import { InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { CustomInput } from './search.styles'


type SearchProps = {
  search: string;
  setSearch: any
};


const Search: React.FC<SearchProps> = ({  search, setSearch }) => {
  const [searchParam, setSearchParam] = useState(search)
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchParam(event.target.value);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(searchParam.length >= 3){
      realizarBusqueda(searchParam);
    }
  };

  const realizarBusqueda = (term: string) => {
    setSearch(term);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CustomInput
        variant="outlined"
        placeholder="Buscar"
        value={searchParam}
        onChange={(handleInputChange)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          style: {
            backgroundColor: 'white',
            color: 'black',
            width: '600px',
            borderRadius: '10px'
          }
        }}
      />
    </form>
  )
}

export default Search
