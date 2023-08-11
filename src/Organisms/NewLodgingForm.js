/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Box, Button, Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import FormSelector from "../Molecules/FormSelect"
import FormInputNumber from "../Molecules/FormInputNumber"
import PropTypes from 'prop-types'
import './NewLodgingForm.css'

export const NewLodgingForm = (props) => {

  const handlePasajerosChange = (event) => {
    setPasajeros(event.target.value)
  }

  return (
    <Box className="checkout-card">
      <Flex gap={5} className='headerContainer'>
        <FormInputNumber dataTestId={"costoBase"} handleChange={props.handleCostoBaseChange} state={props.costoBase} label={"Costo Base"} minValue={1}></FormInputNumber>
        <FormSelector dataTestId={"tipo"} handleChange={props.handleTipoChange} state={props.tipo} label={"Tipo"} options={optionList()}></FormSelector>
      </Flex> 
      <Flex className='subHeaderContainer' mb="4">
        <Flex className='subHeaderText'>
          <FormInputNumber dataTestId={"huespedes"} handleChange={props.handleHuespedesChange} state={props.huespedes} label={"Huespedes"} minValue={1}></FormInputNumber>
          <FormInputNumber dataTestId={"dormitorios"} handleChange={props.handleDormitoriosChange} state={props.dormitorios} label={"Dormitorios"} minValue={1}></FormInputNumber>
          <FormInputNumber dataTestId={"banios"} handleChange={props.handleBaniosChange} state={props.banios} label={"Baños"} minValue={1}></FormInputNumber>
        </Flex>
      </Flex>
      
      <Button data-testid={"crearPublicacion"} className='buttonReservar' onClick={props.reservarFunc} colorScheme="teal" size="lg">
        Crear Publicación
      </Button>
    </Box>
  )
}

NewLodgingForm.propTypes = {

  reservarFunc: PropTypes.func.isRequired,
  costoBase: PropTypes.number.isRequired,
  tipo: PropTypes.string.isRequired,
  huespedes: PropTypes.number.isRequired,
  dormitorios: PropTypes.number.isRequired,
  banios: PropTypes.number.isRequired,
  handleCostoBaseChange: PropTypes.func.isRequired,
  handleTipoChange: PropTypes.func.isRequired,
  handleHuespedesChange: PropTypes.func.isRequired,
  handleDormitoriosChange: PropTypes.func.isRequired,
  handleBaniosChange: PropTypes.func.isRequired,
}

export const optionList = () => {
  return (
      <>
        <option value="casa">Casa</option>
        <option value="cabania">Cabaña</option>
        <option value="departamento">Departamento</option>
      </>
  )
}

export default NewLodgingForm