import {MdPlace} from 'react-icons/md'
import { Button } from "@chakra-ui/react"
import PropTypes from 'prop-types'
import './destino.css'

export const DestinoButton = (props) => {
    return (
        <>
        <Button className="destinoButton" backgroundColor="var(--secondaryColor)" onClick={ () => { props.destinoFunction()}}>
            <MdPlace id="iconPlace" color='black'></MdPlace>
        </Button>
        </>  
    )
}

DestinoButton.propTypes = {
    destinoFunction: PropTypes.func.isRequired
}