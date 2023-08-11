/* eslint-disable no-unused-vars */
import { Button, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import "./SwitchButton.css"

export const SwitchButton = (props) => {

    const isOn = () => {
        if(props.isOn){
            return "switchButton-on"
        }
        return ""
    }

    return (
        <Button data-testid={props.dataTestId} onClick={props.onClick} className={ "switchButton " + isOn() }>{props.label}</Button>
    )

}

export default SwitchButton

SwitchButton.propTypes = {
    label: PropTypes.string,
    isOn: PropTypes.bool,
    onClick: PropTypes.func,
    dataTestId: PropTypes.string,
}