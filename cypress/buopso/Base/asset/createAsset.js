import util from '../../../helper/utility';
import {qsWithCatId} from '../../../helper/queryParam'
describe.skip(`Test case for create asset`, () => {
    const { faker } = require('@faker-js/faker');
    let fieldId_1
    let fieldId_2
    const createAssetReq = (payload) => {
        fieldId_1 =  faker.string.uuid()
        fieldId_2 =  faker.string.uuid()
        let reqData = {
            fieldId_1 : payload.hasOwnProperty(fieldId_1) ? payload.fieldId_1 : faker.person.firstName(),
            fieldId_2 : payload.hasOwnProperty(fieldId_2) ? payload.fieldId_2 : faker.person.lastName(),
        };
        return reqData
    };

    const cyReqCreateAsset = (setQsParam, setBody) => {
        return cy.request({
            method: "POST",
            url: "http://api.buopso.lcl/fams/v2/records",
            headers: { Authorization: "Bearer Auth" },
            qs: setQsParam,
            body: setBody
        });
    };

    context(`Success test case for create asset`, () => {
        it(`Create new asset for module one and asset lead`, () => {
            let reqQsParam = qsWithCatId({})
            let reqBody = createAssetReq({})
            cyReqCreateAsset(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", true);
                expect(body).has.property("message");
                expect(body).has.property("result");
            })
        })

    })

    context(`Failure test case for create Asset`, () => {
        it(`module-name, catId and asset-name should be required in query param`, () => {
            let reqQsParam = {}
            let reqBody = createAssetReq({})
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
            let reqBody = createAssetReq({})
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
            let reqBody = createAssetReq({})
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
            let reqBody = createAssetReq({})
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
            let reqBody = createAssetReq({})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`Asset field-id should be string`, () => {
            let reqQsParam = qsWithCatId({})
            let reqBody = createAssetReq({fieldId_1:21331223})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })       
    })
})