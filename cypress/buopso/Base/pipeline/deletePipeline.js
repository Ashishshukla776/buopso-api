describe(`Test case for delete Pipeline`, () => {
    beforeEach(()=>{
        cy.login()
        cy.pipelineData()
    })
    const deletePipeQS = () => {
        let qsData = {
            module: payload.hasOwnProperty("module") ? payload.module : "one",
            asset: payload.hasOwnProperty("asset") ? payload.asset : "lead",
            // page: payload.hasOwnProperty("page") ? payload.page : 1,
            // rows: payload.hasOwnProperty("rows") ? payload.rows : 25,
            // search: payload.hasOwnProperty("search") ? payload.search : "lead",
            // showCount: payload.hasOwnProperty("showCount") ? payload.showCount :false
        };
        return qsData
    };

    const deletePipeReq = () => {
        let qsData = {
            ids: payload.hasOwnProperty("ids") ? payload.ids :[Cypress.env("pipeline_id")],
        };
        return qsData
    };

    const cyReqDeletePipe = (setQsParam,setBody) => {
        return cy.request({
            method: "DELETE",
            url: "http://api.buopso.lcl/fams/v2/pipelines",
            headers: { Authorization: "Bearer Auth" },
            qs: setQsParam,
            body : setBody
        });
    };

    context(`Success test case for delete Pipeline`, () => {
        it(`Get pipeline for module one and asset lead`, () => {
            let reqQsParam = deletePipeQS({})
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
            cyReqListPipe(reqQsParam,reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`module-name and asset-name should be string in query param`, () => {
            let reqQsParam = listPipeQS({
                module:123444,
                asset:123444
            })
            let reqBody = deletePipeReq({})
            cyReqListPipe(reqQsParam,reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`module-name should accept only [one, lms, cnf, crm and pms]`, () => {
            let reqQsParam = listPipeQS({
                module:"abc",
            })
            let reqBody = deletePipeReq({})
            cyReqListPipe(reqQsParam,reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`asset-name should accept only [lead, approval, customer, company, deal, task and meeting]`, () => {
            let reqQsParam = listPipeQS({
                asset:"abcd",
            })
            let reqBody = deletePipeReq({})
            cyReqListPipe(reqQsParam,reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`Pipeline-ids should be array`, () => {
            let reqQsParam = listPipeQS({})
            let reqBody = deletePipeReq({ids:Cypress.env("pipeline_id")})
            cyReqListPipe(reqQsParam,reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`Pipeline-ids should be array of string`, () => {
            let reqQsParam = listPipeQS({})
            let reqBody = deletePipeReq({ids:[1223233343,123344]})
            cyReqListPipe(reqQsParam,reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`Pipeline-ids should be valid`, () => {
            let reqQsParam = listPipeQS({})
            let reqBody = deletePipeReq({ids:["1223233343123344"]})
            cyReqListPipe(reqQsParam,reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })
    })
})