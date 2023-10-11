import util from '../../../helper/utility';
import {qsWithCatId, failQueryResp} from '../../../helper/queryParam'
const { faker } = require('@faker-js/faker');

describe(`Test case for create stage`, () => {
  
    let apiUrl = Cypress.env("apiUrl")
    let stageName
    beforeEach(()=>{
        cy.getToken()
        cy.pipelineData()
    })
  
    const createStageReq = (payload) => {
        let reqData = {
            add: [{
                id : payload.hasOwnProperty("id") ? payload.id :  faker.string.uuid(),
                label : payload.hasOwnProperty("label") ? payload.label : faker.word.verb(),
                winChance : payload.hasOwnProperty("winChance") ? payload.winChance : "Won",
                color : payload.hasOwnProperty("color") ? payload.color : faker.color.rgb(),
                pos : payload.hasOwnProperty("pos") ? payload.pos : faker.number.int(10),
                dispo : payload.hasOwnProperty("dispo") ? payload.dispo : true,
            }],
            // edit: [{
            //     id : payload.hasOwnProperty(id) ? payload.id : faker.person.lastName(),
            //     label : payload.hasOwnProperty(label) ? payload.label : faker.person.lastName(),
            //     winChance : payload.hasOwnProperty(winChance) ? payload.winChance : faker.string.numeric(10),
            //     color : payload.hasOwnProperty(color) ? payload.color : faker.color.rgb(),
            //     pos : payload.hasOwnProperty(pos) ? payload.pos : faker.number.int(10),
            //     dispo : payload.hasOwnProperty(dispo) ? payload.dispo : true,
            // }],
        };
        return reqData
    };

    const cyReqCreateStage = (setQsParam, setBody) => {
        return cy.request({
            method: "PUT",
            url: `${apiUrl}/fams/stages`,
            headers: { Authorization: Cypress.env("token") },
            qs: setQsParam,
            body: setBody,
            failOnStatusCode: false
        });
    };

    const failResp = (data,statusCode)=>{
        cy.log(JSON.stringify(data))
        expect(statusCode).to.be.eq(400)
        expect(data).has.property("success", false).be.a("boolean");;
        expect(data).has.property("message").be.a("string");;
    }

    context(`Success test case for create stage`, () => {
        it(`Create new stage for module lms and asset lead`, () => {
            let reqQsParam = qsWithCatId({catId : Cypress.env("pipeline_id")})
            let reqBody = createStageReq({})
            cyReqCreateStage(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                cy.log(JSON.stringify(reqBody))
                expect(body).has.property("success", true).be.a("boolean");
                expect(body).has.property("message","Request successful.").be.a("string");
                body.result.forEach((element,index) => {
                    stageName = element.label
                    expect(element).has.property("_id");
                    expect(element).has.property("label",reqBody.add[index].label).be.a("string");
                    expect(element).has.property("winChance",reqBody.add[index].winChance).be.a("string");
                    expect(element).has.property("color",reqBody.add[index].color).be.a("string");
                    expect(element).has.property("pos",reqBody.add[index].pos).be.a("number");
                    expect(element).has.property("dispo",reqBody.add[index].dispo).be.a("boolean");
                });
            })
        })

    })

    context(`Failure test case for create stage`, () => {
        it(`module-name, catId and asset-name should be required in query param`, () => {
            let reqQsParam = {}
            let reqBody = createStageReq({})
            cyReqCreateStage(reqQsParam, reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`module-name, catId and asset-name should be string in query param`, () => {
            let reqQsParam = qsWithCatId({
                // module:123444,
                asset:123444,
                catId :123123
            })
            let reqBody = createStageReq({})
            cyReqCreateStage(reqQsParam, reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`module-name should accept only  ${util.module_name}`, () => {
            let reqQsParam = qsWithCatId({
                module:"abc",
            })
            let reqBody = createStageReq({})
            cyReqCreateStage(reqQsParam, reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`asset-name should accept only ${util.asset_name}`, () => {
            let reqQsParam = qsWithCatId({
                asset:"abcd",
            })
            let reqBody = createStageReq({})
            cyReqCreateStage(reqQsParam, reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`catId should be valid`, () => {
            let reqQsParam = qsWithCatId({
                catId:"abc232132",
            })
            let reqBody = createStageReq({})
            cyReqCreateStage(reqQsParam, reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`id, label, winChance, color, pos and dispo should be required`, () => {
            let reqQsParam = qsWithCatId({catId : Cypress.env("pipeline_id")})
            let reqBody = { add : [{}]}
            
            cyReqCreateStage(reqQsParam, reqBody).then(({ body, status }) => {
                failResp(body, status)
            })
        })   
        
        it(`id, label, winChance, color, pos and dispo can,t be blank`, () => {
            let reqQsParam = qsWithCatId({catId : Cypress.env("pipeline_id")})
            let reqBody = {add : [{
                id:"",label:"",winChance:"",color:"",pos:"",dispo:""
            }]}
            cyReqCreateStage(reqQsParam, reqBody).then(({ body, status }) => {
                failResp(body, status)
            })
        }) 

        it(`add and edit should be array`, () => {
            let reqQsParam = qsWithCatId({catId : Cypress.env("pipeline_id")})
            let reqBody = {add : 21323,edit : 21323}
            cyReqCreateStage(reqQsParam, reqBody).then(({ body,status }) => {
                failResp(body, status)
            })
        })

        it(`add and edit should be array[object]`, () => {
            let reqQsParam = qsWithCatId({catId : Cypress.env("pipeline_id")})
            let reqBody = {add : [""],edit : [""]}
            cyReqCreateStage(reqQsParam, reqBody).then(({ body, status }) => {
                failResp(body, status)
            })
        })

        it(`add[{id, label, winChance and color}] should be string`, () => {
            let reqQsParam = qsWithCatId({catId : Cypress.env("pipeline_id")})
            let reqBody = createStageReq({
                id:21223,label:2323,winChance:211323,color:2323
            })
            cyReqCreateStage(reqQsParam, reqBody).then(({ body, status }) => {
                failResp(body, status)
            })
        }) 

        it(`add[{pos}] should be number`, () => {
            let reqQsParam = qsWithCatId({catId : Cypress.env("pipeline_id")})
            let reqBody = createStageReq({ pos:"21223" })
            cyReqCreateStage(reqQsParam, reqBody).then(({ body, status }) => {
                failResp(body, status)
            })
        }) 

        it(`add[{dispo}] should be boolean`, () => {
            let reqQsParam = qsWithCatId({catId : Cypress.env("pipeline_id")})
            let reqBody = createStageReq({ dispo:21223 })
            cyReqCreateStage(reqQsParam, reqBody).then(({ body, status }) => {
                failResp(body, status)
            })
        }) 

        it(`stage name should be unique`, () => {
            let reqQsParam = qsWithCatId({catId : Cypress.env("pipeline_id")})
            let reqBody = createStageReq({ label:stageName })
            cyReqCreateStage(reqQsParam, reqBody).then(({ body, status }) => {
                failResp(body, status)
                cy.log(JSON.stringify(reqBody))
            })
        }) 
    })
})