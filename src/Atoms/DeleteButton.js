/* eslint-disable no-unused-vars */
import { Flex, IconButton, Image, Text, Icon } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa"
import PropTypes from 'prop-types'
import "./DeleteButton.css"


export const DeleteButton = (props) => {
            
    return (
        <IconButton data-testid={props.dataTestId} onClick={props.function} className={'delete-button ' + props.extraClassName} icon={<FaTrashAlt/>}></IconButton>
    )

}

DeleteButton.propTypes = {
    function: PropTypes.func,
    extraClassName: PropTypes.string,
    dataTestId: PropTypes.string,
}

export default DeleteButton