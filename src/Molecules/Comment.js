/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex, Avatar, Text } from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'
import './Comment.css'

export const Comment = ({ imagen, titulo ,creador, comentario, puntuacion }) => {
  return (
    <Box className="BoxContainer">
      <Flex className='TopContainer'>
        <Avatar className='Imagen'src={imagen}/>
        <Text className='creador'>{creador}</Text>
        <Text className='Puntuacion'><FaStar></FaStar>{puntuacion}</Text>
      </Flex>
      <Box>
        <Text className='titulo'>{titulo}</Text>
        <Text className='comentario'>{comentario}</Text>
      </Box>
    </Box>
  )
}

Comment.propTypes = {
  imagen: PropTypes.string.isRequired,
  creador: PropTypes.string.isRequired,
  comentario: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  puntuacion: PropTypes.number.isRequired,
}

export default Comment