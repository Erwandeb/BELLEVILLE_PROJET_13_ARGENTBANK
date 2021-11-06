class Authentification{
    constructor(){
        this.authentificated = false;
    }

    login(cb){
        this.authentificated = true;
        cb();
    }

    logout(cb){
        this.authentificated = false;
        cb();
    }

    isAuthentificated(){
        return this.authentificated;
    }
}

export default new Authentification();