import util from '../../../helper/utility'
import {qsWithoutCatId, failQueryResp} from '../../../helper/queryParam'
describe.skip(`Test case for delete Pipeline`, () => {
    let apiUrl = Cypress.env("apiUrl")
    beforeEach(()=>{
        cy.login()
        cy.pipelineData()
    })

    const deletePipeReq = () => {
        let qsData = {
            ids: payload.hasOwnProperty("ids") ? payload.ids :[Cypress.env("pipeline_id")],
        };
        return qsData
    };

    const cyReqDeletePipe = (setQsParam,setBody) => {
        return cy.request({
            method: "DELETE",
            url: `${apiUrl}/fams/pipelines`,
            headers: { Authorization: Cypress.env("token") },
            qs: setQsParam,
            body : setBody
        });
    };

    context(`Success test case for delete Pipeline`, () => {
        it(`Get pipeline for module one and asset lead`, () => {
            let reqQsParam = qsWithoutCatId({})
            let reqBody = deletePipeReq({})
            cyReqDeletePipe(reqQsParam,reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", true);
                expect(body).has.property("message");
            })
        })
    })

    context(`Failure test case for delete Pipeline`, () => {
        it(`module-name and asset-name should be required in query param`, () => {
            let reqQsParam = {}
            let reqBody = deletePipeReq({})
            cyReqListPipe(reqQsParam,reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`module-name and asset-name should be string in query param`, () => {
            let reqQsParam = listPipeQS({
                module:123444,
                asset:123444
            })
            let reqBody = deletePipeReq({})
            cyReqListPipe(reqQsParam,reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`module-name should accept only ${util.module_name}`, () => {
            let reqQsParam = listPipeQS({
                module:"abc",
            })
            let reqBody = deletePipeReq({})
            cyReqListPipe(reqQsParam,reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`asset-name should accept only ${util.asset_name}`, () => {
            let reqQsParam = listPipeQS({
                asset:"abcd",
            })
            let reqBody = deletePipeReq({})
            cyReqListPipe(reqQsParam,reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`Pipeline-ids should be array`, () => {
            let reqQsParam = listPipeQS({})
            let reqBody = deletePipeReq({ids:Cypress.env("pipeline_id")})
            cyReqListPipe(reqQsParam,reqBody).then(({ body, status }) => {
                cy.log(JSON.stringify(body))
            })
        })

        it(`Pipeline-ids should be array of string`, () => {
            let reqQsParam = listPipeQS({})
            let reqBody = deletePipeReq({ids:[1223233343,123344]})
            cyReqListPipe(reqQsParam,reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
            })
        })

        it(`Pipeline-ids should be valid`, () => {
            let reqQsParam = listPipeQS({})
            let reqBody = deletePipeReq({ids:["1223233343123344"]})
            cyReqListPipe(reqQsParam,reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body)) 
            })
        })
    })
})