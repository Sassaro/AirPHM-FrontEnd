/// <reference types="cypress" />

import { getByDataTestId } from "../utils";
describe("test de creacion de comentario ", function () {
    it("The user should be able to make a reservation", function () {
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


      const homeCard = getByDataTestId("homeCard_3")

      homeCard.click()

      const fechaDesde = getByDataTestId("fechaDesdeInput")
      const fechaHasta = getByDataTestId("fechaHastaInput")
      const reservarButton = getByDataTestId("reservar")

      fechaDesde.type("2023-04-09")
      fechaHasta.type("2023-04-08")

      getByDataTestId("errorFecha").should("exist")

      cy.wait(1000)

      fechaHasta.type("2023-04-15")

      reservarButton.click()

    });
});