import util from '../../../helper/utility';
import {failQueryResp} from '../../../helper/queryParam'
const { faker } = require('@faker-js/faker');

describe(`Test case for exist stage`, () => {
  
    let apiUrl = Cypress.env("apiUrl")
    before(()=>{
        cy.getToken()
        cy.pipelineData()
        cy.stageData()
    })
  
    const existStageQs = (payload) => {
        let qsData = {
            module: payload.hasOwnProperty("module") ? payload.module : "lms",
            asset: payload.hasOwnProperty("asset") ? payload.asset : "lead",
            catId: payload.hasOwnProperty("catId") ? payload.catId : Cypress.env("pipeline_id"),
            label: payload.hasOwnProperty("label") ? payload.label : Cypress.env("stageLabel"),
        };
        return qsData
    };

    const cyReqExistStage = (setQsParam, setBody) => {
        return cy.request({
            method: "GET",
            url: `${apiUrl}/fams/stages/exists`,
            headers: { Authorization: Cypress.env("token") },
            qs: setQsParam,
            body: setBody,
            failOnStatusCode: false
        });
    };

    context(`Success test case for exist stage`, () => {
        it(`check stage exist or not`, () => {
            let reqQsParam = existStageQs({})
            cyReqExistStage(reqQsParam).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", true).be.a("boolean");
                expect(body).has.property("message", "stages exists").be.a("string");
                expect(body).has.property("result", true).be.a("boolean");
            })
        })

    })

    context(`Failure test case for exist stage`, () => {
        it(`module-name, catId, label and asset-name should be required in query param`, () => {
            let reqQsParam = {}
            cyReqExistStage(reqQsParam).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`module-name, catId, label and asset-name should be string in query param`, () => {
            let reqQsParam = existStageQs({
                module:123444,
                asset:123444,
                catId :123123,
                label :123123
            })
            cyReqExistStage(reqQsParam).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`module-name should accept only  ${util.module_name}`, () => {
            let reqQsParam = existStageQs({
                module:"abc",
            })
            cyReqExistStage(reqQsParam).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`asset-name should accept only ${util.asset_name}`, () => {
            let reqQsParam = existStageQs({
                asset:"abcd",
            })
            cyReqExistStage(reqQsParam).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`catId should be valid`, () => {
            let reqQsParam = existStageQs({
                catId:"abc232132",
            })
            cyReqExistStage(reqQsParam).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        }) 

        it(`label should be valid`, () => {
            let reqQsParam = existStageQs({
                label:"abc232132",
            })
            cyReqExistStage(reqQsParam).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })
    })
})