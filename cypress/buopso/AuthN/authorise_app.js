describe(`Test case for ${Cypress.spec["fileName"]}`, () => {
    before(() => {
        cy.getToken()
    })
    const request = (qsData) => {
        return cy.request({
            method: "GET",
            url: "http://api.buopso.lcl/auth/app-auth",
            headers: { Authorization: Cypress.env("token") },
            qs: qsData
        })
    }
    const query = (payload) => {
        let queryData = {
            app: payload.hasOwnProperty("app") ? payload.app : "one",
        }
        return queryData
    }
    context(`Success test case for ${Cypress.spec["fileName"]}`, () => {
        it(`when module name is one`, () => {
            let qsRequest = query({})
            cy.log(qsRequest)
            request(qsRequest).then(({ body, status }) => {
                cy.log(JSON.stringify(body))
                expect(status, "Status").to.be.eq(200)
                expect(body).has.property("success", true)
                expect(body).has.property("message","Request successful.")
                expect(body.result.settings).has.deep.property("adminApps")
                expect(body.result.settings).has.property("home")
                expect(body.result.settings).has.deep.property("auth")
                expect(body.result.settings).has.deep.property("apps")
                expect(body.result.settings).has.property("timeout")
                expect(body.result.settings).has.property("validity")
                expect(body.result.settings).has.property("role")
                expect(body.result.settings).has.property("token")
                expect(body.result.settings).has.property("expiresOn")
                expect(body.result.user).has.property("id")
                expect(body.result.user).has.property("firstName")
                expect(body.result.user).has.property("lastName")
                expect(body.result.user).has.property("email")
                expect(body.result.user).has.property("icon")
                expect(body.result.company).has.property("id")
                expect(body.result.company).has.property("name")
                expect(body.result.company).has.property("icon")
            })
        })
        it(`when module name is cnf`, () => {
            let qsRequest = query({ app: "cnf" })
            request(qsRequest).then(({ body }) => {
                cy.log(JSON.stringify(body))
                // expect(body).has.property("success", true)
                // expect(body).has.property("message")
                // expect(body.result).has.property("code")
            })
        })
        it.skip(`when module name is crm`, () => {
            let qsRequest = query({ app: "crm" })
            request(qsRequest).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", true)
                expect(body).has.property("message")
                expect(body.result).has.property("code")
            })
        })
        it.skip(`when module name is lms`, () => {
            let qsRequest = query({ app: "lms" })
            request(qsRequest).then(({ body }) => {
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", true)
                expect(body).has.property("message")
                expect(body.result).has.property("code")
                expect(body).has.property("code")
            })
        })
    })

    context(`Failure test case for ${Cypress.spec["fileName"]}`, () => {
        it(`module name should be required`, () => {
            let qsRequest = query({app:""})
            cy.log(qsRequest)
            request(qsRequest).then(({ body }) => {
                cy.log(JSON.stringify(body))
                // expect(body).has.property("success", false)
                // expect(body).has.property("message")
                // expect(body.result).has.property("code")
            })
        })

        it(`module name should be string data-type`, () => {
            let qsRequest = query({ app: 123455 })
            cy.log(qsRequest)
            request(qsRequest).then(({ body }) => {
                cy.log(JSON.stringify(body))
                // expect(body).has.property("success", false)
                // expect(body).has.property("message")
                // expect(body.result).has.property("code")
            })
        })

        it(`module name should not accept null`, () => {
            let qsRequest = query({ app: null })
            cy.log(qsRequest)
            request(qsRequest).then(({ body }) => {
                cy.log(JSON.stringify(body))
                // expect(body).has.property("success", false)
                // expect(body).has.property("message")
                // expect(body.result).has.property("code", 200)
            })
        })

        it(`module name should accept only [lms, cnf, crm and one]`, () => {
            let qsRequest = query({ app: "abc" })
            cy.log(qsRequest)
            request(qsRequest).then(({ body }) => {
                cy.log(JSON.stringify(body))
                // expect(body).has.property("success", false)
                // expect(body).has.property("message")
                // expect(body.result).has.property("code")
            })
        })
    })
})