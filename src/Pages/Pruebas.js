/* eslint-disable no-unused-vars */
import { CheckoutCard} from '../Organisms/CheckoutCard'
import { Header } from '../Atoms/Header'
import {Footer} from '../Atoms/Footer'
import {FriendCard} from '../Molecules/FriendCard'
import { Comment } from '../Molecules/Comment'
import React, {useState, useEffect} from 'react'
import "./DetailPage.css"
import { Flex } from '@chakra-ui/react'
import HomeCard from '../Molecules/HomeCard'
import { hospService } from '../Services/HospService'

export const Pruebas = () => {

  const [hospList, setHospList] = useState([])

    useEffect( () =>{
        callToBackEnd(getHosps)
        
    }) 

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

    const getHosps = async () => {
        const hospListService = await hospService.getHosps()
        setHospList(hospListService)
        
    }
    
    console.log(hospList)
  
}


