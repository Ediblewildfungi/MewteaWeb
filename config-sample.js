module.exports = {

    server: {

        //服务端口
        PORT: 5000,
        MewteaServer: ""
    },
    database: {
        mysql: {
            host: "localhost",
            user: "",
            password: "",
            port:"",
            database: "",
            // insecureAuth:true

        },
        mongo:{}


    },

    key: {
        voiceAppID: "",
        voiceAppCertificate: "",
        tokenExpirationTime: 
    }
};