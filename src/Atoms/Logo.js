/* eslint-disable no-unused-vars */
import { Button, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FormInput from '../Molecules/FormInput'
import PropTypes from 'prop-types'
import "./Logo.css"


export const Logo = (props) => {

    return(
        
        <Text className='text-logo'>{props.logo}</Text>

    )

}

Logo.propTypes = {
    logo: PropTypes.string
}