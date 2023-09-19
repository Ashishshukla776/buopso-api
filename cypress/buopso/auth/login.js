describe(`Test case for Auth`, () => {

    Context(`Success test case for Auth`, () => {
        it(`Generate login token`, () => {

            cy.request({
                method:"POST",
                url:"abc.com",
                body:{
                    email:"",
                    password:""
                }
            }).then(({body})=>{
                cy.log(body)
            })
        })

    })
})