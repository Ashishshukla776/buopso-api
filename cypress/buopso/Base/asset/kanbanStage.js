import { qsForGetData, failQueryResp  } from '../../../helper/queryParam'
import util from '../../../helper/utility'
const { faker } = require('@faker-js/faker');

describe(`Test case for get assets on a specific stage(kanban)`, () => {
    let apiUrl = Cypress.env("apiUrl")
    before(() => {
        cy.getToken()
        cy.pipelineData()
    })

    const kanbanStageReq = (payload) => {
        let reqData = {
            id: payload.hasOwnProperty("id") ? payload.id : "field-id",
            opr: payload.hasOwnProperty("opr") ? payload.opr : "ct",
            values: payload.hasOwnProperty("values") ? payload.values : [],
        };
        return reqData
    };

    const cyReqKanbanStage = (setQsParam, setBody) => {
        return cy.request({
            method: "POST",
            url: `${apiUrl}/fams/records/kanban/stage`,
            headers: { Authorization: Cypress.env("token") },
            qs: setQsParam,
            body: [setBody],
            failOnStatusCode: false
        });
    };

    context(`Success test case for get asset- card view`, () => {
        it(`Get asset list in card view`, () => {
            let reqQsParam = qsForGetData({ catId: Cypress.env("pipeline_id") })
            let reqBody = {}
            cyReqKanbanStage(reqQsParam, reqBody).then(({ body, status }) => {
                // let data = body.result.values
                cy.log(JSON.stringify(body))
                expect(status).be.eq(200)
                // expect(body).has.property("success", true);
                // expect(body).has.property("message");
                // for(let fields of body.result.config.fields){
                //     expect(fields).has.property("id");
                //     expect(fields).has.property("label");
                //     expect(fields).has.property("prop");
                // }
                // expect(body.result).has.deep.property("displayOrder");               
                // for (const outerKey in data) {
                //     if (data.hasOwnProperty(outerKey)) {
                //         // cy.log(`Key: ${outerKey}`);
                //         const innerObject = data[outerKey];
                //         // cy.log("=====innerObject======",JSON.stringify(innerObject))
                //         for (const innerKey of Object.keys(innerObject)) {
                //             // const value = innerObject[innerKey];
                //         //     // cy.log("=====value======",JSON.stringify(value))
                //         //     // cy.log(`  Inner Key: ${innerKey}, Value: ${value}`);

                //             expect(innerObject).has.deep.property(innerKey);
                //         }
                //     }
                // }
            })
        })
    })

    context(`Failure test case for get asset- grid view`, () => {
        it(`module-name, catId and asset-name should be required in query param`, () => {
            let reqQsParam = {}
            // let reqBody = getGridViewAssetReq({})
            let reqBody = {}
            cyReqKanbanStage(reqQsParam, reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`module-name, catId and asset-name should be string in query param`, () => {
            let reqQsParam = qsForGetData({
                module: 123444,
                asset: 123444,
                catId: 12345
            })
            // let reqBody = getGridViewAssetReq({})
            let reqBody = {}
            cyReqKanbanStage(reqQsParam, reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`module-name should accept only ${util.module_name}`, () => {
            let reqQsParam = qsForGetData({
                module: "abc",
            })
            // let reqBody = getGridViewAssetReq({})
            let reqBody = {}
            cyReqKanbanStage(reqQsParam, reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`asset-name should accept only ${util.asset_name}`, () => {
            let reqQsParam = qsForGetData({
                asset: "abcd",
            })
            // let reqBody = getGridViewAssetReq({})
            let reqBody = {}
            cyReqKanbanStage(reqQsParam, reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`catId should be valid`, () => {
            let reqQsParam = qsForGetData({
                asset: "asdf123444",
            })
            // let reqBody = getGridViewAssetReq({})
            let reqBody = {}
            cyReqKanbanStage(reqQsParam, reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`filter-id and opr should be string`, () => {
            let reqQsParam = qsForGetData({})
            let reqBody = kanbanStageReq({ id: 21331223, opr: 123456 })
            cyReqKanbanStage(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                cy.log(JSON.stringify(reqBody))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`opr should be accept only ${util.opr_id}`, () => {
            let reqQsParam = qsForGetData({})
            let reqBody = kanbanStageReq({ opr: "aa" })
            cyReqKanbanStage(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                cy.log(JSON.stringify(reqBody))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`values should be array[string or number]`, () => {
            let reqQsParam = qsForGetData({})
            let reqBody = kanbanStageReq({ values: "9876543211" })
            cyReqKanbanStage(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                cy.log(JSON.stringify(reqBody))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })
    })
})