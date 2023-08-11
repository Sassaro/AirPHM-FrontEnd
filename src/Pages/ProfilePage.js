/* eslint-disable no-unused-vars */
import { Flex,Text,Box, Divider, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Footer } from '../Atoms/Footer'
import { Header } from '../Atoms/Header'
import { getErrorMessage } from '../Domain/Utils'
import { ProfileInfo } from '../Organisms/ProfileInfo'
import ProfileSelector from '../Organisms/ProfileSelector'
import "./ProfilePage.css"

export const ProfilePage = () => {

    const location = useLocation()

    return (
        <>
        <Flex className='pageContainer'>
            <Header></Header>
            
            <Box className="content-container">
                <ProfileInfo></ProfileInfo>
                <ProfileSelector></ProfileSelector>
            </Box>

        </Flex>
        </>
    )

}