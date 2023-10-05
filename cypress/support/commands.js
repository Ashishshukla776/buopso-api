import { requestBody } from '../helper/request'
let apiUrl = Cypress.env("apiUrl")

Cypress.Commands.add("getToken", () => {
    cy.request({
        method: "POST",
        url: `${apiUrl}/auth/login`,
        body: requestBody({})
    }).then(({ body, headers }) => {
        let set_cookie = Object.values(headers)
        Cypress.env("set_cookie", set_cookie[8])
        cy.request({
            method: "GET",
            url: `${apiUrl}/auth/renew`,
            headers: { Authorization: Cypress.env("set_cookie") }
        }).then(({ body }) => {
            let token = "Bearer " + body.result.token;
            Cypress.env("token", token)
        })
    })
})

// Cypress.Commands.add('pipelineData', () => {
//     cy.request({
//         method: "GET",
//         url: `${apiUrl}/fams/v2/pipelines`,
//         headers: { Authorization: "Bearer Auth" },
//         qs: { moduel: "one", asset: "lead" }
//     }).then(({ body }) => {
//         let pipeline_id = body.result.values.map(element => element.id);
//         Cypress.env("pipeline_id", pipeline_id[0])
//         let pipeline_name = body.result.values.map(element => element.label);
//         Cypress.env("pipelineName", pipeline_name[0])
//     })
// })