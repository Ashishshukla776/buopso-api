import util from '../../../helper/utility';
import {failQueryResp} from '../../../helper/queryParam'
const { faker } = require('@faker-js/faker');

describe(`Test case for get stage`, () => {
  
    let apiUrl = Cypress.env("apiUrl")
    before(()=>{
        cy.getToken()
        cy.pipelineData()
    })
  
    const getStageQs = (payload) => {
        let qsData = {
            module: payload.hasOwnProperty("module") ? payload.module : "lms",
            asset: payload.hasOwnProperty("asset") ? payload.asset : "lead",
            catId: payload.hasOwnProperty("catId") ? payload.catId : Cypress.env("pipeline_id"),
            page: payload.hasOwnProperty("page") ? payload.page : 1,
            rows: payload.hasOwnProperty("rows") ? payload.rows : 25,
            // search: payload.hasOwnProperty("search") ? payload.search : "lead",
            showCount: payload.hasOwnProperty("showCount") ? payload.showCount :false
            // showDisposition: payload.hasOwnProperty("showDisposition") ? payload.showDisposition :false
        };
        return qsData
    };

    const cyReqGetStage = (setQsParam) => {
        return cy.request({
            method: "GET",
            url: `${apiUrl}/fams/stages`,
            headers: { Authorization: Cypress.env("token") },
            qs: setQsParam,
            failOnStatusCode: false
        });
    };

    context(`Success test case for get stage`, () => {
        it(`get stage for module one and asset lead`, () => {
            let reqQsParam = getStageQs({})
            cyReqGetStage(reqQsParam).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", true);
                expect(body).has.property("message");
                expect(body.result.pages).has.property("currentPageNo");
                expect(body.result.pages).has.property("totalNoOfPages");
                expect(body.result.pages).has.property("totalRecords");
                body.result.values.forEach((element,index) => {
                    expect(element).has.property("id");
                    expect(element).has.property("label");
                    expect(element).has.property("color");
                    expect(element).has.property("winChance");
                    // expect(element).has.property("count");
                    expect(element).has.property("pos");
                    // expect(element).has.property("dispo");
                });
            })
        })

    })

    context(`Failure test case for get stage`, () => {
        it(`module-name, catId and asset-name should be required in query param`, () => {
            let reqQsParam = {}
            cyReqGetStage(reqQsParam).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`module-name, catId and asset-name should be string in query param`, () => {
            let reqQsParam = getStageQs({
                module:123444,
                asset:123444,
                catId :123123
            })
            cyReqGetStage(reqQsParam).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`module-name should accept only  ${util.module_name}`, () => {
            let reqQsParam = getStageQs({
                module:"abc",
            })
            cyReqGetStage(reqQsParam).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`asset-name should accept only ${util.asset_name}`, () => {
            let reqQsParam = getStageQs({
                asset:"abcd",
            })
            cyReqGetStage(reqQsParam).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`catId should be valid`, () => {
            let reqQsParam = getStageQs({
                catId:"abc232132",
            })
            cyReqGetStage(reqQsParam).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        }) 
    })
})