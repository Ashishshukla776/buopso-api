describe(`Test case for ${Cypress.spec["fileName"]}`, () => {
    const request = (qsData)=>{
     return cy.request({
         method:"POST",
         url:"http://api.buopso.lcl/auth/v1/app-auth",
         headers: {
             'Content-Type': 'application/json',
             Accept: 'application/json',
           },
           qs : {
            app:qsData
           }
     })
    }
    const query = (payload)=>{
        queryData ={
            app:payload.hasOwnProperty("data") ? payload.data : "lms",
        }
        return queryData
    }
     context(`Success test case for ${Cypress.spec["fileName"]}`, () => {
         it(`when module name is lms`, () => {
           let qsRequest =  query({})
             request(qsRequest).then(({body})=>{
                 cy.log(JSON.stringify(body))
                 expect(body).has.property("success", true)
                 expect(body).has.property("message")
                 expect(body.result).has.property("code")
             })
         })
         it(`when module name is cnf`, () => {
            let qsRequest =  query({app : "cnf"})
              request(qsRequest).then(({body})=>{
                  cy.log(JSON.stringify(body))
                  expect(body).has.property("success", true)
                  expect(body).has.property("message")
                  expect(body.result).has.property("code")
              })
          })
          it(`when module name is crm`, () => {
            let qsRequest =  query({app : "crm"})
              request(qsRequest).then(({body})=>{
                  cy.log(JSON.stringify(body))
                  expect(body).has.property("success", true)
                  expect(body).has.property("message")
                  expect(body.result).has.property("code")
              })
          })
          it(`when module name is one`, () => {
            let qsRequest =  query({app : "one"})
              request(qsRequest).then(({body})=>{
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
            let qsRequest =  {}
              request(qsRequest).then(({body})=>{
                  cy.log(JSON.stringify(body))
                  expect(body).has.property("success", false)
                  expect(body).has.property("message")
                  expect(body.result).has.property("code")
              })
          })
 
          it(`module name should be string data-type`, () => {
            let qsRequest =   query({app : 123455})
              request(qsRequest).then(({body})=>{
                  cy.log(JSON.stringify(body))
                  expect(body).has.property("success", false)
                  expect(body).has.property("message")
                  expect(body.result).has.property("code")
              })
          })
 
          it(`module name should not accept null`, () => {
            let qsRequest =   query({app : null})
              request(qsRequest).then(({body})=>{
                  cy.log(JSON.stringify(body))
                  expect(body).has.property("success", false)
                  expect(body).has.property("message")
                  expect(body.result).has.property("code", 200)
              })
          })
 
          it(`module name should accept only [lms, cnf, crm and one]`, () => {
            let qsRequest = query({app : "abc"})
              request(qsRequest).then(({body})=>{
                  cy.log(JSON.stringify(body))
                  expect(body).has.property("success", false)
                  expect(body).has.property("message")
                  expect(body.result).has.property("code")
              })
          })
     })
})