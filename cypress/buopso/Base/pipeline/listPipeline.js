import {failQueryResp} from '../../../helper/queryParam'

describe(`Test case for list Pipeline`, () => {
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
            url: "http://api.buopso.lcl/fams/pipelines",
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

        it(`module-name should accept only [one, lms, cnf, crm and pms]`, () => {
            let reqQsParam = listPipeQS({
                module:"abc",
            })
            cyReqListPipe(reqQsParam).then(({ body, status }) => {
                failQueryResp(body,status)
            })
        })

        it(`asset-name should accept only [lead, approval, customer, company, deal, task and meeting]`, () => {
            let reqQsParam = listPipeQS({
                asset:"abcd",
            })
            cyReqListPipe(reqQsParam).then(({ body, status }) => {
                failQueryResp(body,status)
            })
        })
    })
})