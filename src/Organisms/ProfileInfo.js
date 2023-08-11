/* eslint-disable no-unused-vars */
import { Divider, Flex, Image, Input, Text, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import CustomButton from '../Atoms/CustomButton'
import { convertDateFormat, FuncionesDeTiempo, getErrorMessage } from '../Domain/Utils'
import FormInput from '../Molecules/FormInput'
import FormSelector from '../Molecules/FormSelect'
import { countryList } from '../Utils/CountryList'
import { CreditModal } from './AddCreditModal'
import PropTypes from 'prop-types'
import { userService } from '../Services/UserService'
import { useLocation } from 'react-router-dom'
import "./ProfileInfo.css"


export const ProfileInfo = () => {

    const toast = useToast()
    const location = useLocation()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ user, setUser ] = useState("")

    useEffect( () => {
        getUser()
    },[] )

    const getUser = async () => {
        try{
            const user = await userService.getUserById(location.state.id)
            setUser(user)
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

    const update = async (reference,value) => {
        user[reference] = value
        setUser({...user})
        try{
            await userService.updateUser(user)
            getUser()
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

    const handleUserDateChange = (date) =>{
        update("fechaDeNacimiento",date.target.value)
    }

    const handleUserPaisDeOrigenChange = (country) =>{
        update("paisDeOrigen",country.target.value)
    }

    const handleUserSaldoChange = (saldo) =>{
        update("saldo",saldo)
    }

    const addUserChange = (amount) =>{
        //Numbre porque javascript es el mejor lenguaje de programacion del mundo
        handleUserSaldoChange(Number(user.saldo) + Number(amount))
    }

    return (
        <>
            <Flex className='profile-form'>
                <Image className='profile-image' src={user.fotoURL} ></Image>
                
                <Text className='profile-name'>{user.nombre + " " + user.apellido}</Text>
                
                <FormInput state={user.fechaDeNacimiento} handleChange={handleUserDateChange} type={"date"} label={"Fecha de nacimiento"}></FormInput>
                <FormSelector state={user.paisDeOrigen} handleChange={handleUserPaisDeOrigenChange} placeholder={"Selecciona tu pais"} label={"Pais"} options={countryList()}></FormSelector>
                
                <Text className='profile-age'>Edad: {user.edad}</Text>

                <Divider borderColor={'Black'} borderWidth={1.5} orientation='horizontal'/>
                <Text fontSize={25} fontWeight="bold"> Credito: {user.saldo} </Text>
                <CustomButton onClick={onOpen} label={"Sumar Credito"}></CustomButton>
            </Flex>
            <CreditModal changeValueFunction={addUserChange} isOpen={isOpen} onClose={onClose} onOpen={onOpen} ></CreditModal>
        </>
    )

}