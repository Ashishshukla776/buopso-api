describe(`Test case for Asset`, () => {
    let apiUrl = Cypress.env("apiUrl")
    let module = Cypress.env("module_name")
    let asset = Cypress.env("asset_name")

    const requestBody = (payload) => {
        let reqBody = {
            name: payload.hasOwnProperty("name") ? payload.name : "Anil",
            mobile: payload.hasOwnProperty("mobile") ? payload.mobile : "9540352480",
        }
        return reqBody
    };

    const request = (bodyItem, urlItem) => {
        return cy.request({
            method: "POST",
            url: urlItem,
            headers: {
                Authorization: "Bearer " + Cypress.env("authToken"),
            },
            body:bodyItem,
            failOnStatusCode : false
        })
    }

    Context(`Success test case for Asset`, () => {
        it(`Create Asset`, () => {
            let req = requestBody({})
            let reqUrl = `${apiUrl}fams/v2/forms`
            request(req,reqUrl).then(({ body }) => {
                cy.log(body)
                expect(body).has.property("success", true);
                expect(body).has.property("message", "Request successful.");
                expect(body).has.property("result");
            })
        })

    })

})