/* eslint-disable no-unused-vars */
import { FormControl, FormLabel,Input,FormHelperText,Flex,FormErrorMessage, InputGroup } from '@chakra-ui/react'
import React from 'react'
import PropTypes from 'prop-types'
import { CustomButton } from '../Atoms/CustomButton'
import "./AcceptCancel.css"

export const AcceptCancel = (props) => {

return (

    <>
        <Flex className='buttonContainer'>

            <CustomButton dataTestId={"aceptar"} onClick={props.acceptFunction} label={"Aceptar"}></CustomButton>
            <CustomButton dataTestId={"cancelar"} onClick={props.cancelFunction} label={"Cancelar"}></CustomButton>
            
        </Flex>
    </>

)}

AcceptCancel.propTypes = {
    acceptFunction: PropTypes.func.isRequired,
    cancelFunction: PropTypes.func.isRequired
}

export default AcceptCancel