import util from '../../../helper/utility'
import {failQueryResp} from '../../../helper/queryParam'
describe(`Test case for exist Pipeline`, () => {
    let apiUrl = Cypress.env("apiUrl")
    beforeEach(()=>{
        cy.getToken()
        cy.pipelineData()
    })
    const existPipeQS = (payload) => {
        let qsData = {
            module: payload.hasOwnProperty("module") ? payload.module : "one",
            asset: payload.hasOwnProperty("asset") ? payload.asset : "lead",
            label: payload.hasOwnProperty("label") ? payload.label : Cypress.env("pipelineName"),
        };
        return qsData
    };

    const cyReqExistPipe = (setQsParam) => {
        return cy.request({
            method: "GET",
            url: `${apiUrl}/fams/pipelines/exists`,
            headers: { Authorization: Cypress.env("token") },
            qs: setQsParam
        });
    };

    context(`Success test case for exist Pipeline`, () => {
       
        it(`Check pipeline exist or not`, () => {
           
            let reqQsParam = existPipeQS({})
            cy.log("-------------",reqQsParam)
            cyReqExistPipe(reqQsParam).then(({ body }) => {
                cy.log(JSON.stringify(body))
                // expect(body).has.property("success", true);
                // expect(body).has.property("message");
                // expect(body).has.property("result",true);
            })
        })
    })

    context(`Failure test case for exist Pipeline`, () => {
        it(`module-name and asset-name should be required in query param`, () => {
            let reqQsParam = {}
            cyReqExistPipe(reqQsParam).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`module-name, asset-name and label should be string in query param`, () => {
            let reqQsParam = existPipeQS({
                module:123444,
                asset:123444,
                label : 4324342
            })
            cyReqExistPipe(reqQsParam).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`module-name should accept only ${util.module_name}`, () => {
            let reqQsParam = existPipeQS({
                module:"abc",
            })
            cyReqExistPipe(reqQsParam).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`asset-name should accept only ${util.asset_name}`, () => {
            let reqQsParam = existPipeQS({
                asset:"abcd",
            })
            cyReqExistPipe(reqQsParam).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`pipeline-name(label) does not exist`, () => {
            let reqQsParam = existPipeQS({
                label:"abcdsdsd",
            })
            cyReqExistPipe(reqQsParam).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
                expect(body).has.property("result",false);
            })
        })
    })
})