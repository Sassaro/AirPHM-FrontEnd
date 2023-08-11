/* eslint-disable no-unused-vars */
import "./Header.css"
import React from 'react'
import {FaHome,FaShoppingCart,FaUser } from 'react-icons/fa'
import { Flex,Box } from '@chakra-ui/react'
import { Logo } from './Logo'
import Dropdown from "../Molecules/Dropdown"


export const Header = () =>{
return (
    <Flex className='header'>
        <Logo logo={"airPhm"}></Logo>
        <Flex className="keypad">
            <Dropdown></Dropdown>
        </Flex>          
    </Flex>
    
)
}