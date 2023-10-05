import util from '../../../helper/utility';
import {qsWithCatId} from '../../../helper/queryParam'
describe.skip(`Test case for create asset`, () => {
    const { faker } = require('@faker-js/faker');
  
    const createStageReq = (payload) => {
        let reqData = {
            add: [{
                id : payload.hasOwnProperty(id) ? payload.id :  faker.string.uuid(),
                label : payload.hasOwnProperty(label) ? payload.label : faker.commerce.department(),
                winChance : payload.hasOwnProperty(winChance) ? payload.winChance : faker.string.numeric(10),
                color : payload.hasOwnProperty(color) ? payload.color : faker.color.rgb(),
                pos : payload.hasOwnProperty(pos) ? payload.pos : faker.number.int(10),
                dispo : payload.hasOwnProperty(dispo) ? payload.dispo : true,
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
            url: "http://api.buopso.lcl/fams/v2/stages",
            headers: { Authorization: "Bearer Auth" },
            qs: setQsParam,
            body: setBody
        });
    };

    context(`Success test case for create stage`, () => {
        it(`Create new stage for module one and asset lead`, () => {
            let reqQsParam = qsWithCatId({})
            let reqBody = createStageReq({})
            cyReqCreateStage(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", true);
                expect(body).has.property("message");
                body.result.add.forEach((element,index) => {
                    expect(element).has.property("id",reqBody.add[index].id);
                    expect(element).has.property("label",reqBody.add[index].label);
                    expect(element).has.property("color",reqBody.add[index].color);
                });
            })
        })

    })

    context(`Failure test case for create stage`, () => {
        it(`module-name, catId and asset-name should be required in query param`, () => {
            let reqQsParam = {}
            let reqBody = createStageReq({})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`module-name, catId and asset-name should be string in query param`, () => {
            let reqQsParam = qsWithCatId({
                module:123444,
                asset:123444,
                catId :123123
            })
            let reqBody = createStageReq({})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`module-name should accept only  ${util.module_name}`, () => {
            let reqQsParam = qsWithCatId({
                module:"abc",
            })
            let reqBody = createStageReq({})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`asset-name should accept only ${util.asset_name}`, () => {
            let reqQsParam = qsWithCatId({
                asset:"abcd",
            })
            let reqBody = createStageReq({})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`catId should be valid`, () => {
            let reqQsParam = qsWithCatId({
                catId:"abc232132",
            })
            let reqBody = createStageReq({})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`id, label, winChance, color, pos and dispo should be required`, () => {
            let reqQsParam = qsWithCatId({})
            let reqBody = {add : [{}]}
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })   
        
        it(`id, label, winChance, color, pos and dispo can,t be blank`, () => {
            let reqQsParam = qsWithCatId({})
            let reqBody = {add : [{
                id:"",label:"",winChance:"",color:"",pos:"",dispo:""
            }]}
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        }) 

        it(`add and edit should be array`, () => {
            let reqQsParam = qsWithCatId({})
            let reqBody = {add : 21323,edit : 21323}
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`add and edit should be array[object]`, () => {
            let reqQsParam = qsWithCatId({})
            let reqBody = {add : [""],edit : [""]}
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`add[{id, label, winChance and color}] should be string`, () => {
            let reqQsParam = qsWithCatId({})
            let reqBody = {add : [{
                id:21223,label:2323,winChance:211323,color:2323
            }]}
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        }) 

        it(`add[{pos}] should be number`, () => {
            let reqQsParam = qsWithCatId({})
            let reqBody = {add : [{
                pos:"23232"
            }]}
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        }) 

        it(`add[{dispo}] should be boolean`, () => {
            let reqQsParam = qsWithCatId({})
            let reqBody = {add : [{ dispo:21223 }]}
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        }) 
    })
})