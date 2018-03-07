class Identifier {
    constructor(value) {
        this.value = value;
    }
}

class Application {
    constructor(lhs, rhs) {
        this.lhs = lhs;
        this.rhs = rhs;
    }
}

class Abstraction {
    constructor(param, body) {
        this.param = param;
        this.body = body;
    }
}

export {
    Identifier,
    Application,
    Abstraction
};