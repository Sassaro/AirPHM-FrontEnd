/// <reference types="cypress" />

import { getByDataTestId } from "../utils";

describe("login test ", function () {
    
    it("if the user doesn't write a password it should display an error", function () {
      //visita la pagina de login de la aplicacion
      cy.visit("./login");
      //obtiene los inputs del login
      const inputUsername = getByDataTestId("username")
      const loginButton = getByDataTestId("loginButton")
  
      inputUsername.type("Pedro")
      cy.wait(1000)
      loginButton.click()
      cy.wait(1000)

      getByDataTestId("errorPassword").should('exist')
      
    });

    it("if the user doesn't write a username it should display an error", function () {
        //visita la pagina de login de la aplicacion
        cy.visit("./login");
        //obtiene los inputs del login
        const inputPassword = getByDataTestId("password")
        const loginButton = getByDataTestId("loginButton")
    
        inputPassword.type("1234567")
        cy.wait(1000)
        loginButton.click()
        cy.wait(1000)
  
        getByDataTestId("errorUsername").should('exist')
        
      });

});