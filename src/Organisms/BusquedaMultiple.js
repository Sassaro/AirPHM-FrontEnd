/* eslint-disable no-unused-vars */
import "./BusquedaMultiple.css"
import React, { useState } from 'react'
import { Flex,Input,InputGroup,InputRightElement,Textarea, propNames } from '@chakra-ui/react'
import { SearchButton } from '../Atoms/SearchButton'
import {ImMan} from 'react-icons/im'
import {MdPlace} from 'react-icons/md'
import PropTypes from 'prop-types'
import { useLocation } from "react-router-dom"


export const BusquedaMultiple = ({updatePuntaje,updateDestino, updateFechaDesde, updateFechaHasta, updateHospedajes,updatePage ,searchFunc,searchFriendFunc, manualSearchFlag,setManualSearchFlag}) =>{

    const [destino, setDestino] = useState("")
    const [fechaDesde, setFechaDesde] = useState()
    const [fechaHasta, setFechaHasta] = useState()
    const [hospedajes, setHospedajes] = useState()
    const [searchedFlag,setSearchedFlag] = useState(false)
    const location = useLocation()

    const actualizarProps = () =>{

        if(searchedFlag){
            setManualSearchFlag(false)
            setSearchedFlag(false)
            updateDestino("")
            updateFechaDesde(null)
            updateFechaHasta(null)
            updateHospedajes(0)
            updatePuntaje(0)
            updatePage(0)

            if(location.state){
                searchFriendFunc()
            }else{
                searchFunc()
            }
        }else{
            setManualSearchFlag(true)
            setSearchedFlag(true)
            updateDestino(destino)
            updateFechaDesde(fechaDesde)
            updateFechaHasta(fechaHasta)
            updateHospedajes(hospedajes)
            updatePage(0)
            searchFunc()
        }

    }

    return (
    
    <Flex className='busquedaMultiple'>
        <Flex className="inputContainer">
            <InputGroup>
                <Input isDisabled={searchedFlag} label="Destino" placeholder="Destinos" variant={"filled"} className="input" onChange={(event) => setDestino(event.target.value)}/>
                <InputRightElement><MdPlace id="iconPlace" color='black'></MdPlace></InputRightElement>
            </InputGroup>
        </Flex>
        <Flex className="inputContainer">
            <Input isDisabled={searchedFlag} type="date" variant={"filled"} className="input" onChange={(event) => setFechaDesde(event.target.value)}/>
        </Flex>
        <Flex className="inputContainer">
            <Input isDisabled={searchedFlag} type="date" variant={"filled"} className="input" onChange={(event) => setFechaHasta(event.target.value)}/>
        </Flex>
        <Flex className="inputContainer">
            <InputGroup>
                <Input isDisabled={searchedFlag} type="text" placeholder="Hospedajes" variant={"filled"} className="input" onChange={(event) => setHospedajes(event.target.value)}/>
                <InputRightElement><ImMan id="iconPassenger" color='black'></ImMan></InputRightElement>
            </InputGroup>
        </Flex>
        <Flex className="containerSearchButton">
            <SearchButton searchedFlag = {searchedFlag} searchFunction={actualizarProps}></SearchButton>
        </Flex>
    </Flex>
   
)
}

BusquedaMultiple.propTypes = {
    updatePuntaje: PropTypes.func.isRequired,
    updateDestino: PropTypes.func.isRequired,
    updateFechaDesde: PropTypes.func.isRequired, 
    updateFechaHasta: PropTypes.func.isRequired,
    updateHospedajes: PropTypes.func.isRequired,
    updatePage: PropTypes.func,
    searchFunc:PropTypes.func,
    searchFriendFunc: PropTypes.func,
    manualSearchFlag: PropTypes.bool,
    setManualSearchFlag: PropTypes.any
}