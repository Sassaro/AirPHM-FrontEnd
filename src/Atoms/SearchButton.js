/* eslint-disable no-unused-vars */
import { SearchIcon,CloseIcon } from "@chakra-ui/icons"
import { Button, Flex } from "@chakra-ui/react"
import React from 'react'
import PropTypes from 'prop-types'
import './SearchButton.css'

export const SearchButton = (props) => {


    return (

        <Button className="searchButton" backgroundColor="var(--secondaryColor)" onClick={ () => { props.searchFunction()}}>
            { props.searchedFlag ? 
            <CloseIcon id="iconClose" color={"white"}></CloseIcon>
            : 
            <SearchIcon id="iconSearch" color={"white"}></SearchIcon> }
            
        </Button>

    )
}

SearchButton.propTypes = {
    searchedFlag: PropTypes.bool,
    searchFunction: PropTypes.func.isRequired
}