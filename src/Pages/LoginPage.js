/* eslint-disable no-unused-vars */
import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Footer } from '../Atoms/Footer'
import { LoginCard } from '../Organisms/LoginCard'
import "./LoginPage.css"


export const LoginPage = () => {

    return (
        <>
        <Flex className='pageContainerImage'>
            <LoginCard className="loginCard"></LoginCard>
        </Flex>
        </>
    )

}