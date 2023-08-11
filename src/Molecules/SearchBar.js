/* eslint-disable no-unused-vars */
import { Flex,Input } from "@chakra-ui/react"
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { SearchButton } from '../Atoms/SearchButton'

import "./SearchBar.css"

export const SearchBar = (props) => {

    const [searchValue,setSearchValue] = useState("")

    const handleValueChange = (event) => {
        setSearchValue(event.target.value)
    }
    
    return (
        <Flex>
            <Input className="searchBar" value={searchValue} onChange={handleValueChange}></Input>
            <SearchButton searchText={searchValue} searchFunction={() => { return props.searchFunction(searchValue) }}></SearchButton>
        </Flex>
    )
}

SearchBar.propTypes = {
    className: PropTypes.string,
    searchFunction: PropTypes.func.isRequired
}
