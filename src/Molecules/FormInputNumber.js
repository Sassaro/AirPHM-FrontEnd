/* eslint-disable no-unused-vars */
import { FormControl, FormLabel,NumberInput,FormHelperText,Flex,FormErrorMessage, InputGroup, NumberInputStepper, NumberInputField, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react'
import React from 'react'
import PropTypes from 'prop-types'
import "./FormInput.css"

export const FormInputNumber = (props) => {

//Number Input onChange has to be (ev) => {props.handleChange(ev) because instead of working like the other inputs, this one returns the value.
    return (
    <FormControl isRequired={props.isRequired} isInvalid={props.errorCondition}>
        <FormLabel> {props.label} </FormLabel>
            <NumberInput data-testId={props.dataTestId} value={props.state} onChange={(ev) => {props.handleChange(ev)}} defaultValue={props.defaultValue} max={props.maxValue} min={props.minValue} keepWithinRange={true} clampValueOnBlur={true}>
                <NumberInputField/>
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>

        {!props.errorCondition ? (
                <FormHelperText> {props.helperText} </FormHelperText>) : (
                    <FormErrorMessage>{props.errorText}</FormErrorMessage>
                )}
    </FormControl>

    )
}

FormInputNumber.propTypes = {
    dataTestId: PropTypes.string,
    label: PropTypes.string,
    defaultValue: PropTypes.number,
    maxValue: PropTypes.number,
    minValue: PropTypes.number,
    leftElement: PropTypes.any,
    state: PropTypes.any,
    handleChange: PropTypes.func,
    helperText: PropTypes.string,
    errorText: PropTypes.string,
    errorCondition: PropTypes.bool,
    isRequired: PropTypes.bool
  }

  export default FormInputNumber