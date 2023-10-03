import {qsForGetData} from '../../../helper/queryParam'
import util from '../../../helper/utility'
describe(`Test case for get asset- grid view`, () => {
    const { faker } = require('@faker-js/faker');
    const getGridViewAssetReq = (payload) => {
        let reqData = {
            id : payload.hasOwnProperty(id) ? payload.id : "field-id",
            opr : payload.hasOwnProperty(opr) ? payload.opr : "ct",
            values : payload.hasOwnProperty(values) ? payload.values : [],
        };
        return reqData
    };

    const cyReqGridViwAsset = (setQsParam, setBody) => {
        return cy.request({
            method: "GET",
            url: "http://api.buopso.lcl/fams/v2/records",
            headers: { Authorization: "Bearer Auth" },
            qs: setQsParam,
            body: setBody
        });
    };

    context(`Success test case for get asset- grid view`, () => {
        it(`Create new asset for module one and asset lead`, () => {
            let reqQsParam = qsForGetData({})
            // let reqBody = getGridViewAssetReq({})
            let reqBody={}
            cyReqGridViwAsset(reqQsParam, reqBody).then(({ body }) => {
                let key = Object.keys(body.result.values)
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", true);
                expect(body).has.property("message");
                expect(body.result.view).has.deep.property("disableHide");
                expect(body.result.view).has.deep.property("disableDrag");
                body.result.view.columns.forEach(element => {
                    expect(element).has.deep.property("id"); 
                    expect(element).has.deep.property("label"); 
                    expect(element).has.deep.property("label"); 
                });
                body.result.values.forEach(ele => {
                    expect(ele).has.deep.property(key[0]);
                    expect(ele).has.deep.property(key[1]); 
                    expect(ele).has.deep.property(key[2]);
                })
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
            let reqBody={}
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`module-name, catId and asset-name should be string in query param`, () => {
            let reqQsParam = qsForGetData({
                module : 123444,
                asset : 123444,
                catId : 12345
            })
            // let reqBody = getGridViewAssetReq({})
            let reqBody={}
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`module-name should accept only ${util.module_name}`, () => {
            let reqQsParam = qsForGetData({
                module:"abc",
            })
            // let reqBody = getGridViewAssetReq({})
            let reqBody={}
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`asset-name should accept only ${util.asset_name}`, () => {
            let reqQsParam = qsForGetData({
                asset:"abcd",
            })
            // let reqBody = getGridViewAssetReq({})
            let reqBody={}
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`catId should be valid`, () => {
            let reqQsParam = qsForGetData({
                asset : "asdf123444",
            })
            // let reqBody = getGridViewAssetReq({})
            let reqBody={}
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })

        it(`filter-id and opr should be string`, () => {
            let reqQsParam = qsForGetData({})
            let reqBody = getGridViewAssetReq({id:21331223,opr:123456})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })    
        
        it(`opr should be accept only ${util.opr_id}`, () => {
            let reqQsParam = qsForGetData({})
            let reqBody = getGridViewAssetReq({opr:"aa"})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        }) 

        it(`values should be array[string or number]`, () => {
            let reqQsParam = qsForGetData({})
            let reqBody = getGridViewAssetReq({values:"9876543211"})
            cyReqCreatePipe(reqQsParam, reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
            })
        })
    })
})