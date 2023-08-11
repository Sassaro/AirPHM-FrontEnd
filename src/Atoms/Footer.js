/* eslint-disable no-unused-vars */
import "./Footer.css"
import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
export const Footer = () =>{
return (
    <>
    <Flex className='footer'>
        <FaInstagram className='icon' style={{fontSize: '250%'}}></FaInstagram>
        <FaFacebookSquare className='icon' style={{fontSize: '250%'}}></FaFacebookSquare>
        <Text className={"footer-text"}>AirPHM/2023</Text>
    </Flex>
    </>
)
}