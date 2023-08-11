import {ImMan} from 'react-icons/im'
import { Button } from "@chakra-ui/react"
import PropTypes from 'prop-types'
import './Pasajeros.css'

export const PasajerosButton = (props) => {
    return (

        <Button className="pasajerosButton" backgroundColor="var(--secondaryColor)" onClick={ () => { props.pasajerosFunction()}}>
            <ImMan id="iconPassenger" color='black'></ImMan>
        </Button>

    )
}

PasajerosButton.propTypes = {
    pasajerosFunction: PropTypes.func.isRequired
}