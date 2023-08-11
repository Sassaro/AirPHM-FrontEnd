/// <reference types="cypress" />

import { getByDataTestId } from "../utils";

const customImage = "https://miro.medium.com/v2/resize:fit:500/1*jP29fZIAZZD0UrEa1FL2cA.png"
const customImage2 = "https://res.cloudinary.com/practicaldev/image/fetch/s--bRpncc0A--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/damiancipolat/js_vs_memes/blob/master/doc/fav_meme.jpg%3Fraw%3Dtrue"
describe("Create Publication Test ", function () {

    it("The user should be able to create a new publication", function () {
      //visita la pagina de login de la aplicacion
      cy.visit("./login");
      //obtiene los inputs del login
      const inputUsername = getByDataTestId("username")
      const inputPassword = getByDataTestId("password")
      const loginButton = getByDataTestId("loginButton")

      inputUsername.type("Sassa")
      inputPassword.type("1234567")
      loginButton.click()

      cy.url().should('eq',"http://localhost:3000/home")

      const profileButton = getByDataTestId("profileButton")
      profileButton.click()

      cy.url().should('eq',"http://localhost:3000/profile")

      const publicationButton = getByDataTestId("publicationButton")
      publicationButton.click()

      const newLodgingButton = getByDataTestId("newLodgingButton")
      newLodgingButton.click()

      cy.url().should('eq',"http://localhost:3000/newLodging")

      const titulo = getByDataTestId("formTitulo")
      const ubicacion = getByDataTestId("formUbicacion")
      const limpieza = getByDataTestId("checkboxLimpieza")
      const URL = getByDataTestId("urlInput")
      const URLButton = getByDataTestId("urlButton")
      const costoBase = getByDataTestId("costoBase")
      const tipo = getByDataTestId("tipo")
      const huespedes = getByDataTestId("huespedes")
      const dormitorios = getByDataTestId("dormitorios")
      const banios = getByDataTestId("banios")
      const crearPublicacion = getByDataTestId("crearPublicacion")
      const formDescripcion = getByDataTestId("form-descripcion")
      const formDescAlojamiento = getByDataTestId("form-descripcion-alojamiento")
      const modalButton = getByDataTestId("openTagModalButton")
    
      titulo.type("Hospedaje de prueba")
      ubicacion.type("Ubicacion de prueba")
      limpieza.click()
      URL.type(customImage)
      URLButton.click()
      cy.wait(2000)
      costoBase.type("{backspace}2500")
      tipo.select("Departamento")
      huespedes.type("{backspace}5")
      dormitorios.type("{backspace}3")
      banios.type("{backspace}2")
      formDescripcion.type("Descipcion de prueba")
      formDescAlojamiento.type("Descipcion de alojamiento de prueba")
      modalButton.click()

      const tagForm = getByDataTestId("form-tag")
      const aceptar = getByDataTestId("aceptar")
      const cancelar = getByDataTestId("cancelar")

      tagForm.type("Tag de Prueba")
      aceptar.click()
      tagForm.type("Tag de Prueba2")
      aceptar.click()
      cancelar.click()

      crearPublicacion.click()

      cy.url().should('eq',"http://localhost:3000/profile")

      const publicationButton2 = getByDataTestId("publicationButton")
      publicationButton2.click()

      getByDataTestId("mainCard_25").should('exist')

      cy.wait(1000)

      const deletePublicationButton = getByDataTestId("deleteButton_25")

      cy.wait(1000)

      deletePublicationButton.click()

      getByDataTestId("mainCard_25").should('not.exist')

    });

});