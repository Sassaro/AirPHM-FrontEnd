/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex, Avatar, Text, Image, IconButton } from '@chakra-ui/react'
import { FaStar,FaTrashAlt } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import { userService } from '../Services/UserService'
import DeleteButton from '../Atoms/DeleteButton'
import './UserComment.css'

export const UserComment = (props) => {

  const location = useLocation()

  const deleteComment = async () => {
    await userService.removeUserComment(props.userComment.idComentario)
    props.updateFunc()
  }

  return (
    <Flex className='userComment'>
        <Flex className='commentInfo'>
            <Image className='user-comment-profile-image' src={props.userComment.fotoCreadorHospedaje}></Image>
            <Flex className='userCommentTitle'>
                <Text>A {props.userComment.creadorHospedaje}</Text>
                <Text>{props.userComment.nombreHospedaje} - {props.userComment.ubicacionHospedaje.pais}</Text>
            </Flex>
            <Flex className='userCommentExtra'> 
            <FaStar></FaStar>{props.userComment.calificacion}
            <DeleteButton dataTestId={"deleteButton_" + props.userComment.nombreHospedaje} function={deleteComment}></DeleteButton>
            </Flex>
        </Flex>
        <Text>{props.userComment.cuerpoDelComentario} </Text>
    </Flex>
  )
}

UserComment.propTypes = {
    userComment: PropTypes.object.isRequired,
    updateFunc: PropTypes.func.isRequired
}

export default UserComment