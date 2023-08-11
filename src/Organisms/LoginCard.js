/* eslint-disable no-unused-vars */
import { Box, Button, Flex, Text, Toast, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Logo } from '../Atoms/Logo'
import FormInput from '../Molecules/FormInput'
import { Footer } from '../Atoms/Footer'
import { useNavigate } from 'react-router-dom'
import { getErrorMessage, validateVarious } from '../Domain/Utils'
import { UserCredentials } from '../Domain/Usuario'
import { userService } from '../Services/UserService'
import CustomButton from '../Atoms/CustomButton'
import "./LoginCard.css"

export const LoginCard = () => {

    const [userCredentials, setuserCredentials] = useState(new UserCredentials())
    const [clickFlag, setClickFlag] = useState(false)
    const navigate = useNavigate()
    const toast = useToast()

    const update = (reference,value) => {
        userCredentials[reference] = value
        setuserCredentials({...userCredentials})
    }

    const handleUsernameChange = (username) => {
        update("usuario",username.target.value)
    }

    const handlePasswordChange = (password) => {
        update("contrasenia",password.target.value)
    }

    const loginFuction = async () => {
        setClickFlag(true)
        if(validateVarious([!usernameCondition,!passwordCondition])) {
            try{
                const userId = await userService.login(userCredentials)
                sessionStorage.setItem("userId", userId.toString())
                navigate("/home",{state:{id: userId}})
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
    }

    const usernameCondition = userCredentials.usuario === ""

    const passwordCondition = userCredentials.contrasenia === ""

    return (

        <Flex className='loginCard'>
            <Box className='cardDecoration'></Box>
            <Flex className='loginForm'>
                <Logo logo={"AirPHM"}></Logo>
                <FormInput dataTestIdErrorText={"errorUsername"} dataTestId={"username"} className="test" label={"Username"} helperText={"Enter your username."} errorText={"Please enter your username"} errorCondition={usernameCondition && clickFlag} state={userCredentials.usuario} handleChange={handleUsernameChange}/>
                <FormInput dataTestIdErrorText={"errorPassword"} dataTestId={"password"} type={"password"} label={"Password"} helperText={"Enter your password."} errorText={"Please enter your password"} errorCondition={passwordCondition && clickFlag} state={userCredentials.contrasenia} handleChange={handlePasswordChange}/>
                <CustomButton dataTestId={"loginButton"} onClick={loginFuction} extraClassName={"loginButton"} label={"Log in"}></CustomButton>
                <Flex justifyContent={'space-around'}>
                    <Text onClick={()=>{console.log("Actualmente esta pagina no cuenta con la posibilidad de crear una cuenta, intente mas tarde")}} className='helperText'>No tienes cuenta, Registrate!</Text>
                    <Text onClick={()=>{console.log("Que pena ༼☯﹏☯༽")}} className='helperText'>Olvidaste tu contraseña?</Text>
                </Flex>
            </Flex>
                <Footer></Footer>
        </Flex>

    )

}


