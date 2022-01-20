const checkIncidentsSchema = {
    client_id : {
        notEmpty: true,
        custom: {
            options: val => {
                return /^\d$/.test(val);
            },
            errorMessage: "Invalid client id entered"
        },
    },
    incident_desc : {
        trim: true,
        custom: {
            options: val => {
                return /^[a-zA-Z0-9\s.\-%]+$/.test(val);
            },
            errorMessage: "Invalid incident description entry. Can contain only alphanumeric, period, hyphens and percentage characters."
        },
    },
    city : {
        trim: true,
        isString:true,
        custom: {
            options: val => {
                return /^[a-zA-Z]+$/.test(val);
            },
            errorMessage: "Invalid string entry, Only alphabets are allowed"
        },
        errorMessage: "Invalid city entry"
    },
    country : {
        trim: true,
        isString:true,
        custom: {
            options: val => {
                return /^[a-zA-Z]+$/.test(val);
            },
            errorMessage: "Invalid string entry, Only alphabets are allowed"
        },
        errorMessage: "Invalid country entry"
    },
    weather_report: {
        isObject:true
    }
}

module.exports = {checkIncidentsSchema}