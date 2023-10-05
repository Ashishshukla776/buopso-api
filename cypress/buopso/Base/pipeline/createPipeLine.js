import {failQueryResp} from '../../../helper/queryParam'
import util from '../../../helper/utility'
describe(`Test case for create Pipeline`, () => {
    const { faker } = require('@faker-js/faker');
    beforeEach(()=>{
        cy.getToken()
    })
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

    const createPipeQs = (data) => {
        let qsData = {
            module: data.hasOwnProperty("module") ? data.module : "lms",
            asset: data.hasOwnProperty("asset") ? data.asset : "lead"
        };
        return qsData
    };

    const cyReqCreatePipe = (setQsParam, setBody) => {
        return cy.request({
            method: "POST",
            url: "http://api.buopso.lcl/fams/pipelines",
            headers: { Authorization: Cypress.env("token") },
            qs: setQsParam,
            body: setBody
        });
    };

    context.skip(`Success test case for create Pipeline`, () => {
        it(`Create new pipeline for module lms and asset lead`, () => {
            let reqQsParam = createPipeQs({})
            let reqBody = createPipeReq({})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", true);
                expect(body).has.property("message","Created successfully.");
                expect(body.result).has.property("id");
                expect(body.result).has.property("name");
                expect(body.result).has.property("label",reqBody.label);
                expect(body.result).has.property("assetId");
                expect(body.result).has.property("vGroupId");
                expect(body.result).has.property("pos");
                expect(body.result).has.property("count");
                expect(body.result).has.property("primaryLabel");
                expect(body.result).has.property("secondaryLabel");
                expect(body.result).has.deep.property("properties");
                body.result.stages.forEach((element,index) => {
                    expect(element).has.property("id");
                    expect(element).has.property("label",reqBody.stages[index].label);
                    expect(element).has.property("winChance",reqBody.stages[index].winChance);
                    expect(element).has.property("pos",reqBody.stages[index].pos);
                    expect(element).has.property("color", reqBody.stages[index].color);
                });
            })
        })
    })

    context(`Failure test case for create Pipeline`, () => {
        it(`module-name and asset-name should be required in query param`, () => {
            let reqQsParam = {}
            let reqBody = createPipeReq({})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body,status }) => {
                failQueryResp(body, status)
            })
        })

        it(`module-name and asset-name should be string in query param`, () => {
            let reqQsParam = createPipeQs({
                module:123444,
                asset:123444
            })
            let reqBody = createPipeReq({})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`module-name should accept only ${util.module_name}`, () => {
            let reqQsParam = createPipeQs({
                module:"abc",
            })
            let reqBody = createPipeReq({})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body, status }) => {
               failQueryResp(body, status)
            })
        })

        it(`asset-name should accept only ${util.asset_name}`, () => {
            let reqQsParam = createPipeQs({
                asset:"abcd",
            })
            let reqBody = createPipeReq({})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body, status }) => {
               failQueryResp(body, status)
            })
        })

        it(`required field does not provide`, () => {
            let reqQsParam = createPipeQs({})
            let reqBody = {}
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                // expect(body).has.property("success", false);
                // expect(body).has.property("message");
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
                // expect(body).has.property("success", false);
                // expect(body).has.property("message");
            })
        })

        it(`stage should be array of object`, () => {
            let reqQsParam = createPipeQs({})
            let reqBody = createPipeReq({stage : [123456]})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                // expect(body).has.property("success", false);
                // expect(body).has.property("message");
            })
        })

        it(`stage atleast contain one required value`, () => {
            let reqQsParam = createPipeQs({})
            let reqBody = createPipeReq({stage : []})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                // expect(body).has.property("success", false);
                // expect(body).has.property("message");
            })
        })

        it(`stage[lebel, winChance, pos and color] should be required`, () => {
            let reqQsParam = createPipeQs({})
            let reqBody = createPipeReq({stage :[{}]})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                // expect(body).has.property("success", false);
                // expect(body).has.property("message");
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
                // expect(body).has.property("success", false);
                // expect(body).has.property("message");
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
                // expect(body).has.property("success", false);
                // expect(body).has.property("message");
            })
        })
    })
})