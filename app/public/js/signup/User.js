const User = class {
    constructor() {
        this.id = '';
        this.password = '';
        this.re_password = '';
        this.name = '';
        this.birth = {
            year: '',
            month: '',
            day: '',
        };
        this.gender = '';
        this.email = '';
        this.phone = '';
        this.interests = [];
        this.contract = false;
    };
};


export {
    User,
}