describe.skip(`Test case for Register new user`, () => {
    const { faker } = require('@faker-js/faker');

    context(`Success test case for Auth`, () => {
        it(`Register new user`, () => {

            cy.request({
                method:"GET",
                url:"http://api.buopso.lcl/auth/v1/validate-token",
                // body:{
                //     "firstName": faker.person.firstName(),
                //     "lastName": faker.person.lastName(),
                //     "email":  faker.internet.email()
                //   }
                // body:{
                //     "firstName":"Ashish",
                //     "lastName": "Shukla",
                //     "email": "ashish.shukla@buopso.com"
                //   }
            }).then(({body})=>{
                cy.log(JSON.stringify(body))
            })
        })

    })
})