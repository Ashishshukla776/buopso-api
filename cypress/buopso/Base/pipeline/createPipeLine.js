describe(`Test case for create Pipeline`, () => {
    const { faker } = require('@faker-js/faker');

    const createPipeReq = (payload) => {
        let reqData = {
            label: payload.hasOwnProperty("label") ? payload.label : faker.commerce.department(),
            stages: payload.hasOwnProperty("stages") ? payload.stages : [{
                label: payload.hasOwnProperty("label") ? payload.label : faker.commerce.department(),
                winChance: payload.hasOwnProperty("winChance") ? payload.winChance : faker.string.numeric(),
                pos: payload.hasOwnProperty("pos") ? payload.pos : faker.number.int(10),
                color: payload.hasOwnProperty("color") ? payload.color : faker.color.rgb(),
            }]
        };
        return reqData
    };

    const createPipeQs = () => {
        let qsData = {
            module: payload.hasOwnProperty("module") ? payload.module : "one",
            asset: payload.hasOwnProperty("asset") ? payload.asset : "lead"
        };
        return qsData
    };

    const cyReqCreatePipe = (setQsParam, setBody) => {
        return cy.request({
            method: "POST",
            url: "http://api.buopso.lcl/fams/v2/pipelines",
            headers: { Authorization: "Bearer Auth" },
            qs: setQsParam,
            body: setBody
        });
    };

    context(`Success test case for create Pipeline`, () => {
        it(`Create new pipeline for module one and asset lead`, () => {
            let reqQsParam = createPipeQs({})
            let reqBody = createPipeReq({})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
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

    context(`Failure test case for create Pipeline`, () => {
        it(`module-name and asset-name should be required in query param`, () => {
            let reqQsParam = {}
            let reqBody = createPipeReq({})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`module-name and asset-name should be string in query param`, () => {
            let reqQsParam = createPipeQs({
                module:123444,
                asset:123444
            })
            let reqBody = createPipeReq({})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`module-name should accept only [one, lms, cnf, crm and pms]`, () => {
            let reqQsParam = createPipeQs({
                module:"abc",
            })
            let reqBody = createPipeReq({})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`asset-name should accept only [lead, approval, customer, company, deal, task and meeting]`, () => {
            let reqQsParam = createPipeQs({
                asset:"abcd",
            })
            let reqBody = createPipeReq({})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`required field does not provide`, () => {
            let reqQsParam = createPipeQs({})
            let reqBody = {}
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`label and stage left blank`, () => {
            let reqQsParam = createPipeQs({})
            let reqBody = createPipeReq({
                lebel : "",
                stage : ""
            })
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`stage should be array of object`, () => {
            let reqQsParam = createPipeQs({})
            let reqBody = createPipeReq({stage : [123456]})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`stage atleast contain one required value`, () => {
            let reqQsParam = createPipeQs({})
            let reqBody = createPipeReq({stage : []})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`stage[lebel, winChance, pos and color] should be required`, () => {
            let reqQsParam = createPipeQs({})
            let reqBody = createPipeReq({stage :[{}]})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`label, stage[lebel, winChance and color] should be string`, () => {
            let reqQsParam = createPipeQs({})
            let reqBody = {
                label:22323,
                stage :[{
                    label : 2332323,
                    winChance : 432434,
                    color : 65365,
                    pos :1
                }]}
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`stage[pos] should be number`, () => {
            let reqQsParam = createPipeQs({})
            let reqBody = createPipeReq({
                stage :[{
                    label : faker.commerce.department(),
                    winChance : faker.string.numeric(),
                    color : faker.color.rgb(),
                    pos :"1"
                }]})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })
    })
})