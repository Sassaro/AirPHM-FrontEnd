/// <reference types="cypress" />

import { getByDataTestId } from "../utils";

describe("test de creacion de comentario ", function () {

    it("The user should be able to create a comment", function () {
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

      const homeCard = getByDataTestId("homeCard_19")
    
      homeCard.click()

      const agregarComentarioButton = getByDataTestId("agregarComentario")

      agregarComentarioButton.click()

      const titulo = getByDataTestId("commentTitulo")
      const points = getByDataTestId("commentPoints")
      const body = getByDataTestId("commentBody")
      const aceptarButton = getByDataTestId("aceptar")

      titulo.type("Testing")
      points.type("{backspace}4")
      body.type("Testing")
      aceptarButton.click()

    });

    it("The user should be able to delete a comment", function () {
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
  
        const comments = getByDataTestId("commentsButton")
        comments.click()
  
        const deleteButton = getByDataTestId("deleteButton_Departamento 3")
        deleteButton.click()

      });
});