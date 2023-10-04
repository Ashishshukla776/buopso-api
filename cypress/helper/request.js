export const requestBody = (payload) => {
    let reqData = {
        userId: payload.hasOwnProperty("userId") ? payload.userId : Cypress.env("userId"),
        password: payload.hasOwnProperty("password") ? payload.password :  Cypress.env("password"),
        device: payload.hasOwnProperty("device") ? payload.device : "d2ViLDE2OTY0MDU1MzMzMTM=",
        force: payload.hasOwnProperty("force") ? payload.force : "false"
    };
    return reqData
};

// export default requestBody
