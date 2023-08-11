/* eslint-disable no-unused-vars */
import { Button, Card,Text } from '@chakra-ui/react'
import React from 'react'
import PropTypes from 'prop-types'
import "./NewLodgingButton.css"

export const NewLodgingButton = (props) => {

return (
    <Card>
        <Button data-testid="newLodgingButton" onClick={props.function} className={"newLodging"}>
            <Text fontSize={50}>+</Text>
            <Text fontSize={20}>Crear Nueva Publicación</Text>
        </Button>
    </Card>
)}

NewLodgingButton.propTypes = {
    function: PropTypes.func.isRequired,
}

export default NewLodgingButton