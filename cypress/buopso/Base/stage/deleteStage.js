import util from '../../../helper/utility';
import {failQueryResp} from '../../../helper/queryParam'
const { faker } = require('@faker-js/faker');

describe(`Test case for delete stage`, () => {
  
    let apiUrl = Cypress.env("apiUrl")
    before(()=>{
        cy.getToken()
        cy.pipelineData()
        cy.stageData()
    })
  
    const deleteStageQs = (payload) => {
        let qsData = {
            module: payload.hasOwnProperty("module") ? payload.module : "lms",
            asset: payload.hasOwnProperty("asset") ? payload.asset : "lead",
            catId: payload.hasOwnProperty("catId") ? payload.catId : Cypress.env("pipeline_id")
        };
        return qsData
    };

    const deleteStageReq = (req) => {
        let reqData = {
            id: req.hasOwnProperty("id") ? req.id :  Cypress.env("stage_id"),
            // target: req.hasOwnProperty("target") ? req.target : Cypress.env("pipeline_id"),
        };
        return reqData
    };

    const cyReqDeleteStage = (setQsParam,setBody) => {
        return cy.request({
            method: "DELETE",
            url: `${apiUrl}/fams/stages`,
            headers: { Authorization: Cypress.env("token") },
            qs: setQsParam,
            body: setBody,
            failOnStatusCode: false
        });
    };

    context.skip(`Success test case for delete stage`, () => {
        it(`test the functionality of delete stage`, () => {
            let reqQsParam = deleteStageQs({})
            let reqBody = deleteStageReq({})
            cyReqDeleteStage(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                cy.log(JSON.stringify(reqBody))
                expect(body).has.property("success", true);
                expect(body).has.property("message");
            })
        })

    })

    context(`Failure test case for get stage`, () => {
        it(`module-name, catId and asset-name should be required in query param`, () => {
            let reqQsParam = {}
            let reqBody = deleteStageReq({})
            cyReqDeleteStage(reqQsParam, reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`module-name, catId and asset-name should be string in query param`, () => {
            let reqQsParam = deleteStageQs({
                module:123444,
                asset:123444,
                catId :123123
            })
            let reqBody = deleteStageReq({})
            cyReqDeleteStage(reqQsParam, reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`module-name should accept only  ${util.module_name}`, () => {
            let reqQsParam = deleteStageQs({
                module:"abc",
            })
            let reqBody = deleteStageReq({})
            cyReqDeleteStage(reqQsParam, reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`asset-name should accept only ${util.asset_name}`, () => {
            let reqQsParam = deleteStageQs({
                asset:"abcd",
            })
            let reqBody = deleteStageReq({})
            cyReqDeleteStage(reqQsParam, reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`catId should be valid`, () => {
            let reqQsParam = deleteStageQs({
                catId:"abc232132",
            })
            let reqBody = deleteStageReq({})
            cyReqDeleteStage(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        }) 

        it(`id(stage-id) should be required`, () => {
            let reqQsParam = deleteStageQs({})
            let reqBody = {}
            cyReqDeleteStage(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        }) 

        it(`id(stage-id) left blank`, () => {
            let reqQsParam = deleteStageQs({})
            let reqBody = deleteStageReq({id:""})
            cyReqDeleteStage(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`id(stage-id) should be string`, () => {
            let reqQsParam = deleteStageQs({})
            let reqBody = deleteStageReq({id:1234567890})
            cyReqDeleteStage(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`id(stage-id) must be valid`, () => {
            let reqQsParam = deleteStageQs({})
            let reqBody = deleteStageReq({id:"1234567890"})
            cyReqDeleteStage(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })
    })
})