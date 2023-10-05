const { beforeEach } = require("mocha");

describe.skip(`Test case for exist Pipeline`, () => {
    beforeEach(()=>{
        cy.pipelineData()
    })
    const existPipeQS = () => {
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
            url: "http://api.buopso.lcl/fams/v2/pipelines/exists",
            headers: { Authorization: "Bearer Auth" },
            qs: setQsParam
        });
    };

    context(`Success test case for exist Pipeline`, () => {
        it(`Check pipeline exist or not`, () => {
            let reqQsParam = existPipeQS({})
            cyReqExistPipe(reqQsParam).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", true);
                expect(body).has.property("message");
                expect(body).has.property("result",true);
            })
        })
    })

    context(`Failure test case for exist Pipeline`, () => {
        it(`module-name and asset-name should be required in query param`, () => {
            let reqQsParam = {}
            cyReqExistPipe(reqQsParam).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`module-name, asset-name and label should be string in query param`, () => {
            let reqQsParam = existPipeQS({
                module:123444,
                asset:123444,
                label : 4324342
            })
            cyReqExistPipe(reqQsParam).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`module-name should accept only [one, lms, cnf, crm and pms]`, () => {
            let reqQsParam = existPipeQS({
                module:"abc",
            })
            cyReqExistPipe(reqQsParam).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`asset-name should accept only [lead, approval, customer, company, deal, task and meeting]`, () => {
            let reqQsParam = existPipeQS({
                asset:"abcd",
            })
            cyReqExistPipe(reqQsParam).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
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