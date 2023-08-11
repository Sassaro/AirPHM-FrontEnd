/* eslint-disable no-unused-vars */
import { Flex, Text, Box, Input, Checkbox} from '@chakra-ui/react'
import { FaStar, FaMapMarked, FaCheckCircle } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'
import './NavDetalleEdit.css'
import PropTypes from 'prop-types'

export const NavDetalleEdit = (props) => {

    return (
      <Flex className='lodging-nav-container'>
        <Input data-testid="formTitulo" onChange={props.handleTituloChange} value={props.titulo} borderColor={'black'} placeholder='Titulo'/>
        <Flex className='formUbicacionContainer' gap={10}>
          <Flex className='fromUbicacionGroup'>
            <Text fontWeight={"bold"}>Pais</Text>
            <Input data-testid="formUbicacion" onChange={props.handleUbicacionPaisChange} value={props.ubicacion.pais} borderColor={'black'} className='form-ubicacion' placeholder='Pais'/>
          </Flex>
          <Flex className='fromUbicacionGroup'>
            <Text fontWeight={"bold"}>Provincia</Text>
            <Input data-testid="formUbicacion" onChange={props.handleUbicacionProvinciaChange} value={props.ubicacion.provincia} borderColor={'black'} className='form-ubicacion' placeholder='Provincia'/>
          </Flex>
          <Flex className='fromUbicacionGroup'>
            <Text fontWeight={"bold"}>Ciudad</Text>
            <Input data-testid="formUbicacion" onChange={props.handleUbicacionCiudadChange} value={props.ubicacion.ciudad} borderColor={'black'} className='form-ubicacion' placeholder='Ciudad'/>
          </Flex>
          <Flex className='fromUbicacionGroup'>
            <Text fontWeight={"bold"}>Direccion</Text>
            <Input data-testid="formUbicacion" onChange={props.handleUbicacionDireccionChange} value={props.ubicacion.direccion} borderColor={'black'} className='form-ubicacion' placeholder='Direccion'/>
          </Flex>
            <Checkbox data-testid="checkboxLimpieza" onChange={props.handleServicioLimpiezaChange} isChecked={props.servicioLimpieza} borderColor={'black'} className='form-ubicacion'> Servicio De Limpieza </Checkbox>
        </Flex>
        
      </Flex>
    )
}

NavDetalleEdit.propTypes = {
  titulo: PropTypes.string.isRequired,
  ubicacion: PropTypes.object.isRequired,
  servicioLimpieza: PropTypes.bool.isRequired,
  handleTituloChange: PropTypes.func.isRequired,
  handleUbicacionPaisChange: PropTypes.func.isRequired,
  handleUbicacionProvinciaChange: PropTypes.func.isRequired,
  handleUbicacionCiudadChange: PropTypes.func.isRequired,
  handleUbicacionDireccionChange: PropTypes.func.isRequired,
  handleServicioLimpiezaChange: PropTypes.func.isRequired,
}


export default NavDetalleEdit