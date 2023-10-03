describe(`Test case for list Pipeline`, () => {
    beforeEach(()=>{
        cy.login()
    })
    const listPipeQS = () => {
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

    const cyReqListPipe = (setQsParam) => {
        return cy.request({
            method: "GET",
            url: "http://api.buopso.lcl/fams/v2/pipelines",
            headers: { Authorization: "Bearer Auth" },
            qs: setQsParam
        });
    };

    context(`Success test case for list Pipeline`, () => {
        it(`Get pipeline for module one and asset lead`, () => {
            let reqQsParam = listPipeQS({})
            cyReqListPipe(reqQsParam).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", true);
                expect(body).has.property("message");
                expect(body.result.pages).has.property("currentPageNo");
                expect(body.result.pages).has.property("totalNoOfPages");
                expect(body.result.pages).has.property("totalRecords");
                body.result.values.forEach(element => {
                    expect(element).has.property("id");
                    expect(element).has.property("label");
                    expect(element).has.property("count");
                    expect(element).has.property("pos");
                });
            })
        })
    })

    context(`Failure test case for list Pipeline`, () => {
        it(`module-name and asset-name should be required in query param`, () => {
            let reqQsParam = {}
            cyReqListPipe(reqQsParam).then(({ body }) => {
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
            cyReqListPipe(reqQsParam).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`module-name should accept only [one, lms, cnf, crm and pms]`, () => {
            let reqQsParam = listPipeQS({
                module:"abc",
            })
            cyReqListPipe(reqQsParam).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`asset-name should accept only [lead, approval, customer, company, deal, task and meeting]`, () => {
            let reqQsParam = listPipeQS({
                asset:"abcd",
            })
            cyReqListPipe(reqQsParam).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })
    })
})