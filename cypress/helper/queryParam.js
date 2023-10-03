cy.pipelineData()
export const qsWithoutCatId = () => {
    let qsData = {
        module: payload.hasOwnProperty("module") ? payload.module : "one",
        asset: payload.hasOwnProperty("asset") ? payload.asset : "lead"
    };
    return qsData
};

export const qsWithCatId = () => {
    let qsData = {
        module: payload.hasOwnProperty("module") ? payload.module : "one",
        asset: payload.hasOwnProperty("asset") ? payload.asset : "lead",
        catId: payload.hasOwnProperty("catId") ? payload.catId : cypress.env("pipeline_id")
    };
    return qsData
};

export const qsForGetData = () => {
    let qsData = {
        module: payload.hasOwnProperty("module") ? payload.module : "one",
        asset: payload.hasOwnProperty("asset") ? payload.asset : "lead",
        catId: payload.hasOwnProperty("catId") ? payload.catId : cypress.env("pipeline_id"),
        page: payload.hasOwnProperty("page") ? payload.page : 1,
        rows: payload.hasOwnProperty("rows") ? payload.rows : 25,
        search: payload.hasOwnProperty("search") ? payload.search : "abc"
    };
    return qsData
};