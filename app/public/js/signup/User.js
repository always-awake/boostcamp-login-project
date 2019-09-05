const User = class {
    constructor() {
        this.id = {
            value: '',
        };
        this.password = {
            value: '',
        };
        this.re_password = {
            value: '',
        };
        this.name = {
            value: '',
        };
        this.birth = {
            year: '',
            month: '',
            day: '',
        };
        this.gender = {
            value: '',
        };
        this.email = {
            value: '',
        };
        this.phone = {
            value: '',
        };
        this.interests = {
            value: [],
        };
        this.contract = {
        };
    };
};


export {
    User,
}