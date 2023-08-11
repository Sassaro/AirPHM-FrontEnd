/* eslint-disable no-unused-vars */
import { FormControl, FormLabel, Select, FormHelperText, FormErrorMessage } from '@chakra-ui/react'
import React from 'react'
import PropTypes from 'prop-types'

export const FormSelector = (props) => {

    return (

        <FormControl isRequired={props.isRequired} isInvalid={props.errorCondition}>
            <FormLabel> {props.label} </FormLabel>

            <Select data-testId={props.dataTestId} placeholder={props.placeholder} value={props.state} onChange= {props.handleChange}> {props.options} </Select>

            {!props.errorCondition ? (
                <FormHelperText> {props.helperText} </FormHelperText>) : (
                    <FormErrorMessage>{props.errorText}</FormErrorMessage>
                )}

        </FormControl>

    )

}

FormSelector.propTypes = {
    dataTestId: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    state: PropTypes.any,
    handleChange: PropTypes.func,
    helperText: PropTypes.string,
    errorText: PropTypes.string,
    errorCondition: PropTypes.bool,
    isRequired: PropTypes.bool,
    options: PropTypes.any
}

export default FormSelector