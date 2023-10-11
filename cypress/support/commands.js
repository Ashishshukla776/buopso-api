import { requestBody } from '../helper/request'
let apiUrl = Cypress.env("apiUrl")
let token
let pipeline_id
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
            token = "Bearer " + body.result.token;
            Cypress.env("token", token)
        })
    })
})

Cypress.Commands.add('pipelineData', () => {
    cy.request({
        method: "GET",
        url: `${apiUrl}/fams/pipelines`,
        headers: { Authorization: token },
        qs: { module: "lms", asset: "lead" }
    }).then(({ body }) => {
        pipeline_id = body.result.values.map(element => element.id);
       
        Cypress.env("pipeline_id", pipeline_id[0])
        let pipeline_name = body.result.values.map(element => element.label);
        // cy.log("=====pipeline_id======", pipeline_name[0])
        Cypress.env("pipelineName", pipeline_name[0])
    })
})

Cypress.Commands.add('stageData', () => {
    cy.request({
        method: "GET",
        url: `${apiUrl}/fams/stages`,
        headers: { Authorization: token },
        qs: { module: "lms", asset: "lead", catId :pipeline_id[0] }
    }).then(({ body }) => {
        let stage_id = body.result.values.map(element => element.id);
       
        Cypress.env("stage_id", stage_id[0])
        let stageLabel = body.result.values.map(element => element.label);
        Cypress.env("stageLabel", stageLabel[0])
        cy.log("=====stageLabel======", stageLabel[0])
    })
})