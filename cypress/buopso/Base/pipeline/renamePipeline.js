describe(`Test case for rename/reorder Pipeline`, () => {
    const { faker } = require('@faker-js/faker');
    // const {query} = require('../../../helper/queryParam.js')

    beforeEach(()=>{
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

    const renamePipeQs = () => {
        let qsData = {
            module: payload.hasOwnProperty("module") ? payload.module : "one",
            asset: payload.hasOwnProperty("asset") ? payload.asset : "lead"
        };
        return qsData
    };

    const cyRequestRenamePipe = (setQsParam, setBody) => {
        return cy.request({
            method: "PATCH",
            url: "http://api.buopso.lcl/fams/v2/pipelines",
            headers: { Authorization: "Bearer Auth" },
            qs: setQsParam,
            body: setBody
        });
    };

    context(`Success test case for rename/reorder Pipeline`, () => {
        it(`Rename pipeline for module one and asset lead`, () => {
            let reqQsParam = renamePipeQs({})
            let reqBody = renamePipeReq({})
            cyRequestRenamePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", true);
                expect(body).has.property("message");
                expect(body.result).has.property("id");
                expect(body.result).has.property("label");
                expect(body.result).has.property("count");
                body.result.stages.forEach(element => {
                    expect(element).has.property("id");
                    expect(element).has.property("label");
                    expect(element).has.property("winChance");
                    expect(element).has.property("count");
                    expect(element).has.property("color");
                });
            })
        })

    })

    context(`Failure test case for rename/reorder Pipeline`, () => {
        it(`module-name and asset-name should be required in query param`, () => {
            let reqQsParam = {}
            let reqBody = renamePipeReq({})
            cyRequestRenamePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`module-name and asset-name should be string in query param`, () => {
            let reqQsParam = renamePipeQs({
                module:123444,
                asset:123444
            })
            let reqBody = renamePipeReq({})
            cyRequestRenamePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`module-name should accept only [one, lms, cnf, crm and pms]`, () => {
            let reqQsParam = renamePipeQs({
                module:"abc",
            })
            let reqBody = renamePipeReq({})
            cyRequestRenamePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`asset-name should accept only [lead, approval, customer, company, deal, task and meeting]`, () => {
            let reqQsParam = renamePipeQs({
                asset:"abcd",
            })
            let reqBody = renamePipeReq({})
            cyRequestRenamePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`required field does not provide`, () => {
            let reqQsParam = renamePipeQs({})
            let reqBody = {}
            cyRequestRenamePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`pipeline-id left blank`, () => {
            let reqQsParam = renamePipeQs({})
            let reqBody = renamePipeReq({id : ""})
            cyRequestRenamePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`pipeline-id should be valid`, () => {
            let reqQsParam = renamePipeQs({})
            let reqBody = renamePipeReq({id : "asdf123456"})
            cyRequestRenamePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`pipeline-id and label should be string`, () => {
            let reqQsParam = renamePipeQs({})
            let reqBody = { id:322425425, label:22323 }
            cyRequestRenamePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`pos should be number`, () => {
            let reqQsParam = renamePipeQs({})
            let reqBody = renamePipeReq({ pos :"1" })
            cyRequestRenamePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })
    })
})