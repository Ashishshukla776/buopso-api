export const requestBody = (payload) => {
    let reqData = {
        userId: payload.hasOwnProperty("userId") ? payload.userId : "ashish@gmail.com",
        password: payload.hasOwnProperty("password") ? payload.password : "ashish@123",
        device: payload.hasOwnProperty("device") ? payload.device : "desktop",
        force: payload.hasOwnProperty("force") ? payload.force : "false"
    };
    return reqData
};

// export default requestBody
