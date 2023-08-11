/* eslint-disable no-unused-vars */
import { Flex, Image, Box, Textarea,Text, Tag, useDisclosure, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Input, Button} from '@chakra-ui/react'
import React, { useState } from 'react' 
import { Footer } from '../Atoms/Footer'
import { Header } from '../Atoms/Header'
import PropTypes from 'prop-types'
import NavDetalleEdit from '../Molecules/NavDetalleEdit'
import NewLodgingForm from '../Organisms/NewLodgingForm'
import CustomButton from '../Atoms/CustomButton'
import { Hospedaje } from '../Domain/Hospedaje'
import AcceptCancel from '../Molecules/AcceptCancel'
import "./NewLodgingPage.css"
import FormInput from '../Molecules/FormInput'
import { userService } from '../Services/UserService'
import { useLocation, useNavigate } from 'react-router-dom'

export const NewLodgingPage = (props) => {

  const location = useLocation()
  const navigate = useNavigate()
  const [clickFlag, setClickFlag] = useState(false)
  const [tagAux, setTagAux] = useState("")
  const [lodging, setLodging] = useState(new Hospedaje())
  const [urlImagen, setUrlImagen] = useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()

  const update = (reference,value) => {
    lodging[reference] = value
    setLodging({...lodging})
  }
   
  const updateUbicacion = (reference,value) => {
    lodging["ubicacion"][reference] = value
    setLodging({...lodging})
  }

  const handleTagChange = (tag) => {
    setTagAux(tag.target.value)
  }

  const handleUbicacionPaisChange = (value) => {
    updateUbicacion('pais',value.target.value)
  }
  
  const handleUbicacionProvinciaChange = (value) => {
    updateUbicacion('provincia',value.target.value)
  }

  const handleUbicacionDireccionChange = (value) => {
    updateUbicacion('direccion',value.target.value)
  }

  const handleUbicacionCiudadChange = (value) => {
    updateUbicacion('ciudad',value.target.value)
  }

  const handleTituloChange = (titulo) => {
    update("nombre", titulo.target.value)
  }

  const handleServicioLimpiezaChange = () => {
    update("tieneServiciosLimpieza", !lodging.tieneServiciosLimpieza)
  }

  const handleDescripcionChange = (descripcion) => {
    update("descripcion", descripcion.target.value)
  }

  const handleAlojamientoDescripcionChange = (alojamientoDescripcion) => {
    update("alojamientoDescripcion", alojamientoDescripcion.target.value)
  }

  const handleCostoBaseChange = (costoBase) => {
    update("costoNoche",costoBase)
  }

  const handlecantidadHuespedesChange = (huespedes) => {
    update("cantidadHuespedes",huespedes)
  }

  const handlecantidadDormitoriosChange = (dormitorios) => {
    update("cantidadDormitorios",dormitorios)
  }

  const handlecantidadBaniosChange = (banios) => {
    update("cantidadBanios",banios)
  }

  const handleTipoChange = (tipo) => {
    update("tipo",tipo.target.value)
  }

  const changeImageURL = () => {
    if(urlImagen != ""){
      update("urlImagen",urlImagen)
    }
  }

  const handleURLImagenChange = (urlImagen) => {
    setUrlImagen(urlImagen.target.value)
  }

  const modalAcceptFunction = () => {
    setClickFlag(true)
    if(!tagCondition && !notRepeatedCodition){
      addTag(tagAux)
      setTagAux("")
    }
  }

  const addTag = (tag) => {
    const lodgingTags = lodging.comodidades
    lodgingTags.push(tag)
    update("comodidades",lodgingTags)
  }

  const crearPublicacion = () => {
    userService.createPublication(location.state.id,lodging)
    navigate("/profile",{state:{id: location.state.id}})
  }

  const tagCondition = tagAux === ""

  const notRepeatedCodition = lodging.comodidades.filter((tag) => { return tag == tagAux}).length != 0

  return (
    <>
    <Box>
      <Header></Header>
      <NavDetalleEdit 
        handleServicioLimpiezaChange={handleServicioLimpiezaChange}
        handleUbicacionPaisChange={handleUbicacionPaisChange}
        handleUbicacionCiudadChange={handleUbicacionCiudadChange}
        handleUbicacionProvinciaChange={handleUbicacionProvinciaChange}
        handleUbicacionDireccionChange={handleUbicacionDireccionChange}
        handleTituloChange={handleTituloChange}
        titulo={lodging.nombre}
        ubicacion={lodging.ubicacion}
        servicioLimpieza = {lodging.tieneServiciosLimpieza}
      />
      <Flex className="pageContainer">
        <Flex className='containerCheckout'>
          <Flex className='imageContainer'>
            <Flex className='input-url-container'>
            <Input data-testid="urlInput" className='url-input' placeholder='Ingrese la url de la imagen' onChange={handleURLImagenChange} value={urlImagen} ></Input>
            <CustomButton dataTestId={"urlButton"} onClick={changeImageURL} extraClassName={"save-URL-button"} label={"Guardar"}></CustomButton>
            </Flex>
            <Image className='form-imagen' src={lodging.urlImagen} borderRadius='lg'/>
          </Flex>
            
          <NewLodgingForm 
            handleTipoChange={handleTipoChange}
            handleHuespedesChange = {handlecantidadHuespedesChange}
            handleCostoBaseChange={handleCostoBaseChange}
            handleBaniosChange={handlecantidadBaniosChange}
            handleDormitoriosChange={handlecantidadDormitoriosChange}
            huespedes={lodging.cantidadHuespedes}
            dormitorios={lodging.cantidadDormitorios}
            banios={lodging.cantidadBanios}
            costoBase={lodging.costoNoche}
            tipo={lodging.tipo}
            reservarFunc={crearPublicacion}/>
       
        </Flex>
        <Flex className='DescriptionContainer'>
          
          <Text className="title"> Descripcion </Text>
          <Textarea data-testid="form-descripcion" value={lodging.descripcion} onChange={handleDescripcionChange} className='form-textarea' placeholder='Ingrese una descripcion del hospedaje'></Textarea>
          <Text className="title"> El Alojamiento </Text>
          <Textarea data-testid="form-descripcion-alojamiento" value={lodging.alojamientoDescripcion} onChange={handleAlojamientoDescripcionChange} className='form-textarea' placeholder='Ingrese una descripcion de las habitaciones'></Textarea>
          <Text className="title"> Otros aspectos para tener en cuenta </Text>
          <Flex gap={2}>
            {lodging.comodidades.map( (tag) => {
                return <Tag className='tag' key={tag}>{tag}</Tag>
            } )}
          </Flex>
          <CustomButton dataTestId={"openTagModalButton"} onClick={onOpen} extraClassName={"add-tag-button"} label={"Agregar un aspecto extra"}></CustomButton>
        </Flex>      
      </Flex>
      <Footer></Footer>
    </Box>

    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent >
            <ModalHeader textAlign={"center"} > Agregar Aspectos Importantes </ModalHeader>

            <ModalBody>
                <FormInput dataTestId={"form-tag"} handleChange={handleTagChange} state={tagAux} label={"Aspecto Importante"} helperText={"Agregue un aspecto a tener en cuenta"} errorText={"Debe ingresar un valor antes de poder guardarlo, los aspectos deben ser distintos"} errorCondition = {(tagCondition || notRepeatedCodition) && clickFlag}></FormInput>
            </ModalBody>

            <ModalFooter>
                <AcceptCancel acceptFunction={modalAcceptFunction} cancelFunction={onClose}></AcceptCancel>
            </ModalFooter>
        </ModalContent>
    </Modal>
    </>
  )
}

export default NewLodgingPage