/* eslint-disable no-unused-vars */
import { Flex, Text, Box} from '@chakra-ui/react'
import { FaStar, FaMapMarked, FaCheckCircle } from 'react-icons/fa'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './NavDetalle.css'

export const NavDetalle = ({titulo, puntuacion, cantPuntuacion, direccion, servicio}) => {

    const [limpieza, setLimpieza] = useState("Sin servicio de limpieza")

    if(servicio){
      setLimpieza("Con servicio de limpieza")
    }

    return (
      <Box className='navContainer'>
        <Text className='title'>{titulo}</Text>
        <Flex className='datosContainer'>
          <Flex className='puntuacionContainer'>
            <FaStar color="#F5A623" size={24}></FaStar>
            <Text><b>{puntuacion} puntos</b> - {cantPuntuacion} opiniones</Text>
          </Flex>
          <Text><b>{direccion}</b></Text>
          <Text><b>{limpieza}</b> </Text>
        </Flex>
        
      </Box>
    )
}

NavDetalle.propTypes = {
  titulo: PropTypes.string,
  puntuacion: PropTypes.number,
  cantPuntuacion: PropTypes.number,
  direccion: PropTypes.string,
  servicio: PropTypes.bool,
}

export default NavDetalle