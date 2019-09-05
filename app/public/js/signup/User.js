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
            year: '',
            month: '',
            day: '',
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
            value: '',
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