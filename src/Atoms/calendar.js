import {BiCalendar} from 'react-icons/bi'
import { Button } from "@chakra-ui/react"
import PropTypes from 'prop-types'
import './calendar.css'
import '../Styles.css'

export const CalendarButton = (props) => {
    return (

        <Button className="calendarButton" backgroundColor="var(--secondaryColor)" onClick={ () => { props.calendarFunction()}}>
            <BiCalendar id="iconCalendar"></BiCalendar>
        </Button>

    )
}

CalendarButton.propTypes = {
    calendarFunction: PropTypes.func.isRequired
}