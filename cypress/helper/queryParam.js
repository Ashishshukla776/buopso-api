export const qsWithoutCatId = (payload) => {
    let qsData = {
        module: payload.hasOwnProperty("module") ? payload.module : "lms",
        asset: payload.hasOwnProperty("asset") ? payload.asset : "lead"
    };
    return qsData
};

export const qsWithCatId = (dna) => {
    let qsData = {
        module: dna.hasOwnProperty("module") ? dna.module : "lms",
        asset: dna.hasOwnProperty("asset") ? dna.asset : "lead",
        catId: dna.hasOwnProperty("catId") ? dna.catId : ""
    };
    return qsData
};

export const qsForGetData = (rna) => {
    let qsData = {
        module: rna.hasOwnProperty("module") ? rna.module : "lms",
        asset: rna.hasOwnProperty("asset") ? rna.asset : "lead",
        catId: rna.hasOwnProperty("catId") ? rna.catId : Cypress.env("pipeline_id"),
        page: rna.hasOwnProperty("page") ? rna.page : 1,
        rows: rna.hasOwnProperty("rows") ? rna.rows : 25,
        // search: rna.hasOwnProperty("search") ? rna.search : "abc"
    };
    return qsData
};

export const failQueryResp = (bodyData, statusCode)=>{
    cy.log(JSON.stringify(bodyData)) 
    expect(statusCode, "Status-code").to.be.eq(400)
    expect(bodyData).has.property("success", false).to.be.a("boolean");
    expect(bodyData).has.property("message",  "Resource is invalid.").to.be.a("string");
    expect(bodyData).has.property("errorCode").to.be.a("number");
}