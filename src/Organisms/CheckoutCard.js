/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Box, Button, Flex, FormControl, FormLabel, Input, Text, useToast } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import FormInputNumber from "../Molecules/FormInputNumber"
import { FuncionesDeTiempo, getErrorMessage } from '../Domain/Utils'
import { ReservaDTO } from '../Domain/Reserva'
import './CheckoutCard.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { userService } from '../Services/UserService'


const MILISEGUNDOS_A_DIAS = 86400000

export const CheckoutCard = ({huespedes, dormitorios, banios, costoPorNoche,idAlojamiento, idCreadorHosp}) => {
  
  const toast = useToast()
  const location = useLocation()
  const navigate = useNavigate()
  const [reserva,setReserva] = useState(new ReservaDTO(idAlojamiento))

  const update = async (reference,value) => {
    reserva[reference] = value
    setReserva({...reserva})
  }

  const handleFechaInicioChange = (event) => {
    update("fechaDesde",event.target.value)
  }

  const handleFechaFinChange = (event) => {
    update("fechaHasta",event.target.value)
  }

  const handlePasajerosChange = (value) => {
    update("pasajeros",value)
  }

  const calcularNoches = () => {

    const value = (new Date(reserva.fechaHasta).getTime() - new Date(reserva.fechaDesde).getTime())/MILISEGUNDOS_A_DIAS

    if(value && value > 0){
      return value
    }return 0
    
  }

  const errorOwner = () => {

    if(!location.state){
      return false
    }else{
      return idCreadorHosp == location.state.id
    }

  }

  const errorFecha = (new Date(reserva.fechaHasta).getTime() - new Date(reserva.fechaDesde).getTime())/MILISEGUNDOS_A_DIAS <= 0
  const errorNoLogin = !location.state

  const calcularCostoTotal = () => {
    return costoPorNoche * calcularNoches()
  }



  const handleReservarButton = async () => {
    reserva.idUsuario = location.state.id

    try{
      await userService.reserveLodging(reserva)
      navigate("/home",{state:{id: location.state.id}})
    }catch(error){
      toast({
          title: 'Error',
          description: getErrorMessage(error),
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
  }
  }

  return (
    <Box className="checkout-card">
      <Flex className='headerContainer'>
        <Text className='headerText'>
          Costo por noche: ${costoPorNoche}
        </Text>
        <Text className='headerText'>
          Costo total: ${calcularCostoTotal()}
        </Text>
      </Flex> 
      <Flex className='subHeaderContainer' mb="4">
        <Text className='subHeaderText'>
          {huespedes} Huespedes - {dormitorios} Dormitorios - {banios} Baños
        </Text>
      </Flex>
      <Box className='dateContainer'>
        <Flex className='dateContainerFlex'>
          <Flex wrap={"wrap"} justifyContent={"space-around"}>
            <Box className='dateBox'>
              <Text>Desde</Text>
             <Input data-testid={"fechaDesdeInput"} className='dateInput' type="date" value={reserva.fechaDesde} onChange={handleFechaInicioChange} />
            </Box>
            <Box className='dateBox'>
              <Text>Hasta</Text>
              <Input data-testid={"fechaHastaInput"} className='dateInput' type="date" value={reserva.fechaHasta} onChange={handleFechaFinChange}/>
            </Box>
          </Flex>
          { (errorFecha) && <Flex data-testid="errorFecha" className='errorTextContainer'><Text>La fecha a ingresar debe ser valida</Text></Flex> }
        </Flex>
        <Box>
            <Text>Pasajeros</Text>
            <FormInputNumber minValue={1} maxValue={huespedes} state={reserva.pasajeros} handleChange={handlePasajerosChange}/>
          </Box>
      </Box>
      
      <Button data-testid={"reservar"} isDisabled={errorNoLogin || errorFecha || reserva.fechaHasta == "" || reserva.fechaDesde == ""} className='buttonReservar' onClick={handleReservarButton} colorScheme="teal" size="lg">Reservar</Button>
      { (errorNoLogin) && <Flex className='errorTextContainer'><Text>No se puede reservar sin estar logueado</Text></Flex> }
      { ((errorOwner())) && <Flex className='errorTextContainer'><Text>No se puede reservar si es el dueño</Text></Flex> }
    </Box>
  )
}

CheckoutCard.propTypes = {
  huespedes: PropTypes.number.isRequired,
  dormitorios: PropTypes.number.isRequired, 
  banios: PropTypes.number.isRequired, 
  costoPorNoche: PropTypes.number.isRequired,
  idAlojamiento: PropTypes.any,
  idCreadorHosp: PropTypes.number.isRequired,
}