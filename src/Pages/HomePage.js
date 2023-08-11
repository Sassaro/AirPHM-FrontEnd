/* eslint-disable no-unused-vars */
import { Flex,Text, useToast } from '@chakra-ui/react'
import React,{useEffect, useState} from 'react'
import { Header } from '../Atoms/Header'
import { Footer } from '../Atoms/Footer'
import { BusquedaMultiple} from '../Organisms/BusquedaMultiple'
import {HomeContent} from '../Organisms/HomeContent'
import {CheckBox} from '../Molecules/CheckBox'
import PageSelector from '../Molecules/PageSelector'
import { hospService } from '../Services/HospService'
import { RequestData } from '../Domain/RequestData'
import { HospPageList } from '../Domain/Hospedaje'
import { useLocation } from 'react-router-dom'
import { getErrorMessage } from '../Domain/Utils'
import './HomePage.css'

export const HomePage = () => {

    const location = useLocation()
    const toast = useToast()
    const [manualSearchFlag, setManualSearchFlag] = useState(false)
    const [hospPagedList, setHospPagedList] = useState(new HospPageList())
    /* los filtros estan en este objeto, esta pagina deberia delegarle a los otros componentes los valores
     de este objeto a traves de props y tambien los handlers de los cambios*/ 
    const [requestDataObject, setrequestDataObject] = useState(new RequestData())

    useEffect(() => {
        if(location.state){
            getFriendHosps()
        }else{
            getHospPageList()
        }
        
    },[])

    const getHospPageList = () => {
        callToBackEnd(getFilterHosps)
    }

    const getFriendHosps = async () => {
        callToBackEnd(getFriendReservedHosps)
    }

    const getFilterHosps = async () => {

        // si es usuario no esta conectado se coloca el flag en true por lo tanto el cambio de pagina se realiza sobre 
        // los hospedajes del filtro
        setManualSearchFlag(true)
        const aux = await hospService.getHosps(requestDataObject)
        setHospPagedList(aux)

    }

    const getFriendReservedHosps = async () => {

        const aux = await hospService.getHospsFriends(location.state.id,requestDataObject.paginado)
        //si lo que retorna es vacio, (no tiene amigos o los amigos no tienen reservas, busca los hospedajes por filtro)
        if( aux.content.length > 0 ){
            setHospPagedList(aux)
        }else{
            getHospPageList()
        }

    }

    const callToBackEnd = (backEndFunction) => {
        try{
            backEndFunction()
        }catch(error){
            toast({
                title: 'Error',
                description: getErrorMessage(error),
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }
    }

    const updateRequestDataObject = async (reference,value) => {
        requestDataObject[reference] = value
        setrequestDataObject({...requestDataObject})
    }

    const changePageAndSearch = (value) => {

        changePage(value)

        if(manualSearchFlag){
            getHospPageList()
        }else{
            getFriendHosps()
        }

    }

    const changePage = (value) =>{
        const aux = requestDataObject
        aux.paginado.pagina = value
        setrequestDataObject(aux)
    }

    const advancePageFunc = () =>{
        changePageAndSearch(requestDataObject.paginado.pagina + 1)
    }

    const returnPageFunc = () =>{
        changePageAndSearch(requestDataObject.paginado.pagina - 1)
    }

    const updateHospList = () => {
        getHospPageList(requestDataObject)
    }

    return (
        <>
        <Flex className='pageContainer'>
            <Header></Header>
            <BusquedaMultiple
                updatePuntaje={(value) => updateRequestDataObject("puntaje", value)}
                updateDestino={(value) => updateRequestDataObject("destino", value)}
                updateFechaDesde={(value) => updateRequestDataObject("fechaDesde", value)}
                updateFechaHasta={(value) => updateRequestDataObject("fechaHasta", value)}
                updateHospedajes={(value) => updateRequestDataObject("pasajeros", parseInt(value))}
                updatePage={(value) => { changePage(value) } }
                searchFunc={getHospPageList}
                searchFriendFunc={getFriendHosps}
                manualSearchFlag={manualSearchFlag}
                setManualSearchFlag={setManualSearchFlag}/>
            <PageSelector goBack={returnPageFunc} advance={advancePageFunc} nextPageFlag={hospPagedList.last} pageNumber={hospPagedList.number + 1}></PageSelector>
            <Flex className='containerContent'>
                <CheckBox className="checkboxes"  updatePuntaje={(value) => updateRequestDataObject("puntaje", parseInt(value))} ></CheckBox>
                <HomeContent updateFunc={updateHospList} hospList={hospPagedList.content} className="homeContent" ></HomeContent>
            </Flex>
            
        </Flex>
        </>
    )

}