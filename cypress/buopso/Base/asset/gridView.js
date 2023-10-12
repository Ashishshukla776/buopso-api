import { qsForGetData, failQueryResp } from '../../../helper/queryParam'
import util from '../../../helper/utility'
const { faker } = require('@faker-js/faker');

describe(`Test case for get asset- grid view`, () => {
    let apiUrl = Cypress.env("apiUrl")
    before(() => {
        cy.getToken()
        cy.pipelineData()
    })

    const getGridViewReq = (payload) => {
        let reqData = {
            id: payload.hasOwnProperty("id") ? payload.id : "field-id",
            opr: payload.hasOwnProperty("opr") ? payload.opr : "ct",
            values: payload.hasOwnProperty("values") ? payload.values : [],
        };
        return reqData
    };

    const cyReqGridViw = (setQsParam, setBody) => {
        return cy.request({
            method: "POST",
            url: `${apiUrl}/fams/records/grid`,
            headers: { Authorization: Cypress.env("token") },
            qs: setQsParam,
            body: setBody,
            failOnStatusCode: false
        });
    };

    context(`Success test case for get asset- grid view`, () => {
        it(`Get asset-list in grid view`, () => {
            let reqQsParam = qsForGetData({ catId: Cypress.env("pipeline_id") })
            let reqBody = {}
            cyReqGridViw(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", true);
                expect(body).has.property("message");
                for (const col of body.result.view.columns) {
                    let columnsKeys = Object.keys(col);
                    expect(col).has.deep.property(columnsKeys[0]);
                    expect(col).has.deep.property(columnsKeys[1]);
                    expect(col).has.deep.property(columnsKeys[2]);
                    // expect(col).has.deep.property(columnsKeys[3]);
                }
                for (const obj of body.result.values) {
                    let valuesKeys = Object.keys(obj);
                //     cy.log(`Object: ${JSON.stringify(obj)}, Keys: ${keys}, Values: 
                //   ${values}`);
                    expect(obj).has.deep.property(valuesKeys[0]);
                    expect(obj).has.deep.property(valuesKeys[1]);
                    expect(obj).has.deep.property(valuesKeys[2]);
                    expect(obj).has.deep.property(valuesKeys[3]);
                    expect(obj).has.deep.property(valuesKeys[4]);
                }
                expect(body.result.pages).has.deep.property("currentPageNo");
                expect(body.result.pages).has.deep.property("totalNoOfPages");
                expect(body.result.pages).has.deep.property("totalRecords");
            })
        })
    })

    context(`Failure test case for get asset- grid view`, () => {
        it(`module-name, catId and asset-name should be required in query param`, () => {
            let reqQsParam = {}
            // let reqBody = getGridViewAssetReq({})
            let reqBody = {}
            cyReqGridViw(reqQsParam, reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`module-name, catId and asset-name should be string in query param`, () => {
            let reqQsParam = qsForGetData({
                module: 123444,
                asset: 123444,
                catId: 12345
            })
            // let reqBody = getGridViewAssetReq({})
            let reqBody = {}
            cyReqGridViw(reqQsParam, reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`module-name should accept only ${util.module_name}`, () => {
            let reqQsParam = qsForGetData({
                module: "abc",
            })
            // let reqBody = getGridViewAssetReq({})
            let reqBody = {}
            cyReqGridViw(reqQsParam, reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`asset-name should accept only ${util.asset_name}`, () => {
            let reqQsParam = qsForGetData({
                asset: "abcd",
            })
            // let reqBody = getGridViewAssetReq({})
            let reqBody = {}
            cyReqGridViw(reqQsParam, reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`catId should be valid`, () => {
            let reqQsParam = qsForGetData({
                asset: "asdf123444",
            })
            // let reqBody = getGridViewAssetReq({})
            let reqBody = {}
            cyReqGridViw(reqQsParam, reqBody).then(({ body, status }) => {
                failQueryResp(body, status)
            })
        })

        it(`filter-id and opr should be string`, () => {
            let reqQsParam = qsForGetData({})
            let reqBody = getGridViewReq({ id: 21331223, opr: 123456 })
            cyReqGridViw(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                cy.log(JSON.stringify(reqBody))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`opr should be accept only ${util.opr_id}`, () => {
            let reqQsParam = qsForGetData({})
            let reqBody = getGridViewReq({ opr: "aa" })
            cyReqGridViw(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                cy.log(JSON.stringify(reqBody))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`values should be array[string or number]`, () => {
            let reqQsParam = qsForGetData({})
            let reqBody = getGridViewReq({ values: "9876543211" })
            cyReqGridViw(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                cy.log(JSON.stringify(reqBody))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })
    })
})