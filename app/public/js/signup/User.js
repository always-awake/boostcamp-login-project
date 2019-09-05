const User = class {
    constructor() {
        this.id = {
            value: '',
            validation: false
        };
        this.password = {
            value: '',
            validation: false,

        };
        this.re_password = {
            value: '',
            re_password_same: false,
        };
        this.name = {
            value: '',
            validation: true
        };
        this.birth = {
            year: 0,
            month: 0,
            day: 0,
            validation: false
        };
        this.gender = {
            value: '',
            validation: false
        };
        this.email = {
            value: '',
            validation: false
        };
        this.phone = {
            value: 0,
            validation: false
        };
        this.interests = {
            value: [],
            validation: false
        };
        this.contract = {
            validation: false
        };
    };
};


export {
    User,
}