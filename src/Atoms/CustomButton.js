/* eslint-disable no-unused-vars */
import { Button } from '@chakra-ui/react'
import React from 'react'
import PropTypes from 'prop-types'
import "./CustomButton.css"

export const CustomButton = (props) => {

return (

    <Button isDisabled={props.isDisabled} data-testid={props.dataTestId} className={"customButton " + props.extraClassName} onClick={props.onClick}>{props.label}</Button>

)}

CustomButton.propTypes = {

    onClick: PropTypes.func.isRequired,
    label: PropTypes.string,
    extraClassName : PropTypes.string,
    dataTestId: PropTypes.string,
    isDisabled: PropTypes.bool

}

export default CustomButton