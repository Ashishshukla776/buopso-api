describe(`Test case for Auth`, () => {

    Context(`Success test case for Auth`, () => {
        it(`Generate login token`, () => {

            cy.request({
                method: "POST",
                url: "http://localhost:3000/fams/v2/{module-name}/{asset-name}/records/grid",
                headers: {
                    Authorization: "Bearer " + Cypress.env("authToken"),
                },
                body: {
                    "id": "field-id-1",
                    "opr": "ct",
                    "values": [
                        "9876402532"
                    ]
                }
            }).then(({ body }) => {
                cy.log(body)
                expect(body).has.property("success", true);
                expect(body).has.property("message", "Request successful.");
                expect(body.result.view).has.deep.property("disableHide");
                expect(body.result.view).has.deep.property("disableDrag");
                body.result.view.columns.forEach(element => {
                    expect(element).has.deep.property("id");
                    expect(element).has.deep.property("label");
                    expect(element).has.deep.property("prop");
                });
                body.result.values.forEach(ele => {
                    expect(ele).has.deep.property("id");
                    expect(ele).has.deep.property("field-id-1");
                    expect(ele).has.deep.property("field-id-2");
                    expect(ele).has.deep.property("field-id-3");
                })
                expect(body.result.pages).has.deep.property("currentPageNo");
                expect(body.result.pages).has.deep.property("totalNoOfPages");
                expect(body.result.pages).has.deep.property("totalRecords");
            })
        })

    })
})