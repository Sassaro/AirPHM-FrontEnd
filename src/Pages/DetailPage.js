/* eslint-disable no-unused-vars */
import { Flex, Image, Box, Button, useDisclosure, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Input, Textarea,Text, Grid} from '@chakra-ui/react'
import React from 'react' 
import {NavDetalle} from '../Molecules/NavDetalle'
import {Comment} from "../Molecules/Comment"
import { CheckoutCard } from '../Organisms/CheckoutCard'
import { Footer } from '../Atoms/Footer'
import { Header } from '../Atoms/Header'
import { Description } from '../Molecules/Description'
import { HospService, hospService } from '../Services/HospService'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useState } from 'react'
import CustomButton from '../Atoms/CustomButton'
import "./DetailPage.css"
import AcceptCancel from '../Molecules/AcceptCancel'
import FormInput from '../Molecules/FormInput'
import { ComentarioDTO } from '../Domain/Comentario'
import FormInputNumber from '../Molecules/FormInputNumber'
import { userService } from '../Services/UserService'


export const DetailPage = () => {
  
  const location = useLocation()
  const { id } = useParams()
  const [hosp, setHosp] = useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [comentario, setComentario] = useState(new ComentarioDTO())

  useEffect(() => {
    getHospData()
  }, [id])

  const getHospData = async () => {
    const hospData = await hospService.getHospsById(id)
    setHosp(hospData)
  }

  const update = async (reference,value) => {
    comentario[reference] = value
    setComentario({...comentario})
  }

  const handleTituloChange = (titulo) => {
    update("tituloComentario",titulo.target.value)
  }

  const handleComentarioChange = (comentario) => {
    update("comentario",comentario.target.value)
  }

  const handlePuntajeChange = (value) => {
    update("puntaje", value)
  }

  const saveComment = async () => {
    await userService.crearComentario(location.state.id,hosp.id,comentario)
    await getHospData()
    onClose()
  }

  const canUserComment = () => {

    const userWithComments = hosp.comentarios.map( (it) => { return it.idCreador } )
    
    if(!location.state){
      return true
    }

    const userId = location.state.id

    return userWithComments.filter( (it) => { return it == userId } ).length != 0 || userId == hosp.idCreador || hosp.usuariosQueReservaron.filter( (it) => {return it == userId} ).length == 0

  }

  if(hosp){
    return (
      <>
      <Box>
        <Header></Header>
        <NavDetalle titulo={hosp.nombre} puntuacion={hosp.promedioPuntaje} cantPuntuacion={hosp.cantidadPuntajes} direccion={hosp.ubicacion.country + "-" + hosp.ubicacion.city} servicio={hosp.tieneServicioLimpieza}></NavDetalle>
        <Flex className="pageContainer">
          <Flex className='containerCheckout'>
            <Image className='imagenDetail'
              src={hosp.urlImagen}
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <CheckoutCard idCreadorHosp={hosp.idCreador} idAlojamiento={hosp.id} huespedes={hosp.cantidadHuespedes} dormitorios={hosp.cantidadDormitorios} banios={hosp.cantidadBanios} costoPorNoche={hosp.costoNoche} ></CheckoutCard>
          </Flex>
          <Box className='DescriptionContainer'>
            <Description titulo='Descripcion'texto={hosp.descripcion}></Description>
            <Description titulo='El Alojamiento'texto={hosp.alojamientoDescripcion}></Description>
            <Description titulo='Otros aspectos para tener en cuenta' comodidades={hosp.comodidades}></Description>
          </Box>

          <CustomButton dataTestId={"agregarComentario"} isDisabled={canUserComment()} onClick={onOpen} extraClassName='agregarComentario' label={"Agregar comentario"}></CustomButton> 

          <Flex justifyContent={'space-around'}>
            {
              hosp.comentarios.map( (comentario) => {
                console.log(comentario)
                return <Comment titulo={comentario.tituloComentario + ":"} imagen={comentario.fotoURL} creador={comentario.nombreUsuario + ' ' + comentario.apellidoUsuario} comentario={comentario.comentario} puntuacion={comentario.puntaje} key={comentario.tituloComentario}></Comment>
              })
            }
          </Flex>
        </Flex>
        <Footer></Footer>
      </Box>  

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent >
            <ModalHeader textAlign={"center"} > Agregar Comentario al Hospedaje </ModalHeader>

            <ModalBody>
              <Flex direction={'column'} gap={5}>
                <Grid className='titulo-puntuacion-container'>
                  <FormInput dataTestId={"commentTitulo"} handleChange={handleTituloChange} state={comentario.tituloComentario} label={"Titulo del comentario"} helperText={"Ingrese un titulo"} errorText={"Es necesario ingresar un Titulo"}></FormInput>
                  <FormInputNumber dataTestId={"commentPoints"} handleChange={handlePuntajeChange} state={comentario.puntaje} minValue={1} maxValue={5} ></FormInputNumber>
                </Grid>
                <Text>Ingrese su comentario:</Text>
                <Textarea data-testid={"commentBody"} onChange={handleComentarioChange} value={comentario.comentario} ></Textarea>
              </Flex>
            </ModalBody>

            <ModalFooter>
                <AcceptCancel acceptFunction={saveComment} cancelFunction={onClose}></AcceptCancel>
            </ModalFooter>
        </ModalContent>
    </Modal>

      </>
    )
  }else{
    return (
      <div> Loading...</div>
    )
  }
  
}
