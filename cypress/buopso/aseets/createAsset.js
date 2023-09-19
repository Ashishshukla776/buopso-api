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
            let reqUrl = `${apiUrl}fams/v2/${module}/${asset}/record`
            request(req,reqUrl).then(({ body }) => {
                cy.log(body)
                expect(body).has.property("success", true);
                expect(body).has.property("message", "Request successful.");
                expect(body).has.property("result");
            })
        })

    })

    Context(`Failure test case for Asset`, () => {
        it(`When module name is invalid`, () => {
            let req = requestBody({})
            let reqUrl = `${apiUrl}fams/v2/${"module"}/${asset}/record`
            request(req,reqUrl).then(({ body }) => {
                cy.log(body)
                expect(body).has.property("success", false);
                expect(body).has.property("message", "Request successful.");
                expect(body).has.property("result");
            })
        })

        it(`When asset name is invalid`, () => {

            let req = requestBody({})
            let reqUrl = `${apiUrl}fams/v2/${module}/${"asset"}/record`
            request(req,reqUrl).then(({ body }) => {
                cy.log(body)
                expect(body).has.property("success", false);
                expect(body).has.property("message", "Request successful.");
                expect(body).has.property("result");
            })
        })

        it(`asset name must be string`, () => {

            let req = requestBody({})
            let reqUrl = `${apiUrl}fams/v2/${module}/${3123}/record`
            request(req,reqUrl).then(({ body }) => {
                cy.log(body)
                expect(body).has.property("success", false);
                expect(body).has.property("message", "Request successful.");
                expect(body).has.property("result");
            })
        })

        it(`module name must be string`, () => {

            let req = requestBody({})
            let reqUrl = `${apiUrl}fams/v2/${module}/${asset}/record`
            request(req,reqUrl).then(({ body }) => {
                cy.log(body)
                expect(body).has.property("success", false);
                expect(body).has.property("message", "Request successful.");
                expect(body).has.property("result");
            })
        })

        it(`When required field not provided`, () => {

            let req = {}
            let reqUrl = `${apiUrl}fams/v2/${module}/${asset}/record`
            request(req,reqUrl).then(({ body }) => {
                cy.log(body)
                expect(body).has.property("success", false);
                expect(body).has.property("message", "Request successful.");
                expect(body).has.property("result");
            })
        })

        it(`When required field left blank`, () => {

            let req = requestBody({
                name:"",
                mobile :""
            })
            let reqUrl = `${apiUrl}fams/v2/${module}/${asset}/record`
            request(req,reqUrl).then(({ body }) => {
                cy.log(body)
                expect(body).has.property("success", false);
                expect(body).has.property("message", "Request successful.");
                expect(body).has.property("result");
            })
        })

        it(`name and mobile must be string`, () => {

            let req = requestBody({
                name:12323,
                mobile :2321323
            })
            let reqUrl = `${apiUrl}fams/v2/${module}/${asset}/record`
            request(req,reqUrl).then(({ body }) => {
                cy.log(body)
                expect(body).has.property("success", false);
                expect(body).has.property("message", "Request successful.");
                expect(body).has.property("result");
            })
        })
    })
})