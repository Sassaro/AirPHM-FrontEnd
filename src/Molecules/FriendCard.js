/* eslint-disable no-unused-vars */
import { Flex, IconButton, Image, Text, Icon } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa"
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { userService } from '../Services/UserService'
import "./FriendCard.css"
import DeleteButton from '../Atoms/DeleteButton'


export const FriendCard = (props) => {

    const location = useLocation()

    const deleteUserFriend = async () => {
        await userService.deleteUserFriend(location.state.id,props.friend.id)
        props.updateFunc()
    }

    return (
        <Flex className='friend-card'>
            <Image className='profile-image' src={props.friend.fotoURL} ></Image>
            <Flex className='friend-info'>
                <Text>{props.friend.nombre + " " + props.friend.apellido}</Text>
                <Text>{props.friend.paisDeOrigen}</Text>
            </Flex>
            <DeleteButton function={deleteUserFriend}></DeleteButton>
        </Flex>
    )
}

export default FriendCard

FriendCard.propTypes = {
    friend: PropTypes.object.isRequired,
    updateFunc: PropTypes.func.isRequired
}