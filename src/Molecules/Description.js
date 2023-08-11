/* eslint-disable no-unused-vars */
import { Box, Heading, Text, Flex } from "@chakra-ui/layout"
import PropTypes from 'prop-types'
import React, {useState}from "react"
import './Description.css'
import { Tag } from "@chakra-ui/react"

export const Description = ({titulo,texto, comodidades} ) => {
    
    const comodidadesLista = comodidades && comodidades.length > 0 ? <Flex gap={2}>{comodidades.map((comodidad, index) => <Tag key={index}>{comodidad}</Tag>)}</Flex> : null
    
    return (
        <Box className="descriptionContainer">
            <Heading className="heading">{titulo}</Heading>
            {comodidadesLista || <Text className="text">{texto}</Text>}
        </Box>
    )
}

Description.propTypes = {
    titulo: PropTypes.string.isRequired,
    texto: PropTypes.string,
    comodidades: PropTypes.array
  }

export default Description