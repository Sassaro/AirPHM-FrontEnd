/* eslint-disable no-unused-vars */
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import FormInputNumber from '../Molecules/FormInputNumber'
import AcceptCancel from '../Molecules/AcceptCancel'
import "./AddCreditModal.css"

export const CreditModal = (props) =>{

    const [credit, setCredit] = useState(0)

    const handleCreditChange = (credit) =>{
        setCredit(credit)
    }

    const acceptFunction = () =>{
        props.changeValueFunction(credit)
        props.onClose()
    }

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent >
            <ModalHeader textAlign={"center"} > Agregar Credito </ModalHeader>

            <ModalBody>
                <FormInputNumber handleChange={handleCreditChange} state={credit} minValue={0}></FormInputNumber>
            </ModalBody>

            <ModalFooter>
                <AcceptCancel acceptFunction={acceptFunction} cancelFunction={props.onClose}></AcceptCancel>
            </ModalFooter>
        </ModalContent>
    </Modal>
    )

}

CreditModal.propTypes = {
    isOpen: PropTypes.bool,
    onOpen: PropTypes.any,
    onClose: PropTypes.any,
    changeValueFunction: PropTypes.func.isRequired,
}

export default CreditModal