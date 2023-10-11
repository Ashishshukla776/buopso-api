import {failQueryResp} from '../../../helper/queryParam'
import util from '../../../helper/utility'

describe(`Test case for list Pipeline`, () => {
    let apiUrl = Cypress.env("apiUrl")
    beforeEach(()=>{
        cy.getToken()
    })
    const listPipeQS = (payload) => {
        let qsData = {
            module: payload.hasOwnProperty("module") ? payload.module : "lms",
            asset: payload.hasOwnProperty("asset") ? payload.asset : "lead",
            // page: payload.hasOwnProperty("page") ? payload.page : 1,
            // rows: payload.hasOwnProperty("rows") ? payload.rows : 25,
            // search: payload.hasOwnProperty("search") ? payload.search : "lead",
            // showCount: payload.hasOwnProperty("showCount") ? payload.showCount :false
        };
        return qsData
    };

    const cyReqListPipe = (setQsParam) => {
        return cy.request({
            method: "GET",
            url: `${apiUrl}/fams/pipelines`,
            headers: { Authorization: Cypress.env("token") },
            qs: setQsParam,
            failOnStatusCode: false
        });
    };

    context(`Success test case for list Pipeline`, () => {
        it(`Get pipeline for module one and asset lead`, () => {
            let reqQsParam = listPipeQS({})
            cyReqListPipe(reqQsParam).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", true).to.be.a("boolean");
                expect(body).has.property("message").to.be.a("string");
                expect(body.result.pages).has.property("currentPageNo").to.be.a("number");
                expect(body.result.pages).has.property("totalNoOfPages").to.be.a("number");
                expect(body.result.pages).has.property("totalRecords").to.be.a("number");
                body.result.values.forEach(element => {
                    expect(element).has.property("id").to.be.a("string");
                    expect(element).has.property("label").to.be.a("string");
                    // expect(element).has.property("count");
                    expect(element).has.property("pos").to.be.a("number");
                });
            })
        })
    })

    context(`Failure test case for list Pipeline`, () => {
        it(`module-name and asset-name should be required in query param`, () => {
            let reqQsParam = {}
            cyReqListPipe(reqQsParam).then(({ body, status }) => {
                failQueryResp(body,status)
            })
        })

        it(`module-name and asset-name should be string in query param`, () => {
            let reqQsParam = listPipeQS({
                module:123444,
                asset:123444
            })
            cyReqListPipe(reqQsParam).then(({ body, status }) => {
                failQueryResp(body,status)
            })
        })

        it(`module-name should accept only ${util.module_name}`, () => {
            let reqQsParam = listPipeQS({
                module:"abc",
            })
            cyReqListPipe(reqQsParam).then(({ body, status }) => {
                failQueryResp(body,status)
            })
        })

        it(`asset-name should accept only ${util.asset_name}`, () => {
            let reqQsParam = listPipeQS({
                asset:"abcd",
            })
            cyReqListPipe(reqQsParam).then(({ body, status }) => {
                failQueryResp(body,status)
            })
        })
    })
})