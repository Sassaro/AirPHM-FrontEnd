/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {CheckBox} from '../Molecules/CheckBox'
import {HomeCard} from '../Molecules/HomeCard'
import './HomeContent.css'
import { Grid, Flex,Text } from '@chakra-ui/react'
import { hospService, HospService } from '../Services/HospService'
import React, {useEffect, useState} from 'react'
import { Toast } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { RequestData } from '../Domain/RequestData'
import { useLocation } from 'react-router-dom'


export const HomeContent = ({updateFunc,hospList}) =>{
    
    const location = useLocation()

    const isOwnerFunction = (hosp) => {
        if(!location.state){
            return false
        }else{
            return location.state.id == hosp.idCreador
        }
    }

    return (
            <Flex className='HomeContent'>

                {hospList.map((hosp) => {
                    return <HomeCard reserved={false} updateFunc={updateFunc} isOwner={isOwnerFunction(hosp)} lodging={hosp} key={hosp.id}></HomeCard>
                })}
                
                {(hospList.length == 0 && 
                <Flex width={"100%"} alignItems={"center"} justifyContent={"center"}>
                    <Text as={"b"} textAlign={"center"} fontSize={20} >--No se han encontrado alojamientos con estas condiciones de busqueda--</Text>
                </Flex>
                )}

            </Flex>
    )
}

HomeContent.propTypes = {
    hospList: PropTypes.array,
    updateFunc: PropTypes.func
}

