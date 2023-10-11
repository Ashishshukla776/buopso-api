import {qsWithoutCatId, failQueryResp} from '../../../helper/queryParam'
import util from '../../../helper/utility'
const { faker } = require('@faker-js/faker');

describe(`Test case for rename/reorder Pipeline`, () => {
    let apiUrl = Cypress.env("apiUrl") 
    before(()=>{
        cy.getToken()
        cy.pipelineData()
    })
    const renamePipeReq = (payload) => {
        let reqData = {
            id: payload.hasOwnProperty("id") ? payload.id :  Cypress.env("pipeline_id"),
            label: payload.hasOwnProperty("label") ? payload.label : faker.commerce.department(),
            pos: payload.hasOwnProperty("pos") ? payload.pos : faker.number.int(10),
        };
        return reqData
    };

    const cyRequestRenamePipe = (setQsParam, setBody) => {
        return cy.request({
            method: "PATCH",
            url: `${apiUrl}/fams/pipelines`,
            headers: { Authorization: Cypress.env("token") },
            qs: setQsParam,
            body: setBody
        });
    };

    context(`Success test case for rename/reorder Pipeline`, () => {
        it(`Rename pipeline for module lms and asset lead`, () => {
            let reqQsParam = qsWithoutCatId({})
            let reqBody = renamePipeReq({})
            cyRequestRenamePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                // expect(body).has.property("success", true);
                // expect(body).has.property("message");
                // expect(body.result).has.property("id");
                // expect(body.result).has.property("label");
                // expect(body.result).has.property("count");
                // body.result.stages.forEach(element => {
                //     expect(element).has.property("id");
                //     expect(element).has.property("label");
                //     expect(element).has.property("winChance");
                //     expect(element).has.property("count");
                //     expect(element).has.property("color");
                // });
            })
        })

    })

    context.skip(`Failure test case for rename/reorder Pipeline`, () => {
        it(`module-name and asset-name should be required in query param`, () => {
            let reqQsParam = {}
            let reqBody = renamePipeReq({})
            cyRequestRenamePipe(reqQsParam, reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`module-name and asset-name should be string in query param`, () => {
            let reqQsParam = qsWithoutCatId({
                module:123444,
                asset:123444
            })
            let reqBody = renamePipeReq({})
            cyRequestRenamePipe(reqQsParam, reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`module-name should accept only ${util.module_name}`, () => {
            let reqQsParam = qsWithoutCatId({
                module:"abc",
            })
            let reqBody = renamePipeReq({})
            cyRequestRenamePipe(reqQsParam, reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`asset-name should accept only ${util.asset_name}`, () => {
            let reqQsParam = qsWithoutCatId({
                asset:"abcd",
            })
            let reqBody = renamePipeReq({})
            cyRequestRenamePipe(reqQsParam, reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`required field does not provide`, () => {
            let reqQsParam = qsWithoutCatId({})
            let reqBody = {}
            cyRequestRenamePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`pipeline-id left blank`, () => {
            let reqQsParam = qsWithoutCatId({})
            let reqBody = renamePipeReq({id : ""})
            cyRequestRenamePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`pipeline-id should be valid`, () => {
            let reqQsParam = qsWithoutCatId({})
            let reqBody = renamePipeReq({id : "asdf123456"})
            cyRequestRenamePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`pipeline-id and label should be string`, () => {
            let reqQsParam = qsWithoutCatId({})
            let reqBody = { id:322425425, label:22323 }
            cyRequestRenamePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`pos should be number`, () => {
            let reqQsParam = qsWithoutCatId({})
            let reqBody = renamePipeReq({ pos :"1" })
            cyRequestRenamePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })
    })
})