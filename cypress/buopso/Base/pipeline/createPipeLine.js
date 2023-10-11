import {failQueryResp, qsWithoutCatId} from '../../../helper/queryParam'
import util from '../../../helper/utility'
const { faker } = require('@faker-js/faker');

describe(`Test case for create Pipeline`, () => {
    let apiUrl = Cypress.env("apiUrl")
    beforeEach(()=>{
        cy.getToken()
    })
    const createPipeReq = (payload) => {
        let reqData = {
            label: payload.hasOwnProperty("label") ? payload.label : faker.commerce.department(),
            stages: payload.hasOwnProperty("stages") ? payload.stages : [{
                label: payload.hasOwnProperty("label") ? payload.label : "Call",
                winChance: payload.hasOwnProperty("winChance") ? payload.winChance : faker.string.numeric(),
                pos: payload.hasOwnProperty("pos") ? payload.pos : faker.number.int(10),
                color: payload.hasOwnProperty("color") ? payload.color : faker.color.rgb(),
            },
            {
                label: payload.hasOwnProperty("label") ? payload.label : "Reminder",
                winChance: payload.hasOwnProperty("winChance") ? payload.winChance : faker.string.numeric(),
                pos: payload.hasOwnProperty("pos") ? payload.pos : faker.number.int(10),
                color: payload.hasOwnProperty("color") ? payload.color : faker.color.rgb(),
            }
        ]
        };
        return reqData
    };

    const failResp = (bodyData, statusCode)=>{
        cy.log(JSON.stringify(bodyData))
        expect(statusCode,"Status-Code").to.be.eq(400);
        expect(bodyData).has.property("success", false).to.be.a("boolean");
        expect(bodyData).has.property("message").to.be.a("string");
    }

    const cyReqCreatePipe = (setQsParam, setBody) => {
        return cy.request({
            method: "POST",
            url: `${apiUrl}/fams/pipelines`,
            headers: { Authorization: Cypress.env("token") },
            qs: setQsParam,
            body: setBody,
            failOnStatusCode: false
        });
    };

    context(`Success test case for create Pipeline`, () => {
        it(`Create new pipeline for module lms and asset lead`, () => {
            let reqQsParam = qsWithoutCatId({})
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
            let reqQsParam = qsWithoutCatId({
                module:123444,
                asset:123444
            })
            let reqBody = createPipeReq({})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`module-name should accept only ${util.module_name}`, () => {
            let reqQsParam = qsWithoutCatId({
                module:"abc",
            })
            let reqBody = createPipeReq({})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body, status }) => {
               failQueryResp(body, status)
            })
        })

        it(`asset-name should accept only ${util.asset_name}`, () => {
            let reqQsParam = qsWithoutCatId({
                asset:"abcd",
            })
            let reqBody = createPipeReq({})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body, status }) => {
               failQueryResp(body, status)
            })
        })

        it(`required field does not provide`, () => {
            let reqQsParam = qsWithoutCatId({})
            let reqBody = {}
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body, status }) => {
                failResp(body, status)
            })
        })

        it(`label and stages left blank`, () => {
            let reqQsParam = qsWithoutCatId({})
            let reqBody = createPipeReq({
                label : "",
                stages : ""
            })
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body, status }) => {
                failResp(body, status)
            })
        })

        it(`stages should be array of object`, () => {
            let reqQsParam = qsWithoutCatId({})
            let reqBody = createPipeReq({stages : [123456]})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body, status }) => {
                failResp(body, status)
            })
        })

        it(`stages atleast contain one required value`, () => {
            let reqQsParam = qsWithoutCatId({})
            let reqBody = createPipeReq({stages : []})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body, status }) => {
                failResp(body, status)
            })
        })

        it(`stages[lebel, winChance, pos and color] should be required`, () => {
            let reqQsParam = qsWithoutCatId({})
            let reqBody = createPipeReq({stages :[{}]})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body, status }) => {
                failResp(body, status)
            })
        })

        it(`label, stages[lebel, winChance and color] should be string`, () => {
            let reqQsParam = qsWithoutCatId({})
            let reqBody = {
                label:22323,
                stages :[{
                    label : 2332323,
                    winChance : 432434,
                    color : 65365,
                    pos :1
                }]}
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body, status }) => {
                failResp(body, status)
            })
        })

        it(`stages[pos] should be number`, () => {
            let reqQsParam = qsWithoutCatId({})
            let reqBody = createPipeReq({
                stages :[{
                    label : faker.commerce.department(),
                    winChance : faker.string.numeric(),
                    color : faker.color.rgb(),
                    pos :"1"
                }]})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body, status }) => {
                failResp(body, status)
            })
        })
    })
})