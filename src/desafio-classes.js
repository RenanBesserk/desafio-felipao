class Hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age 
        this.type = type
    }

attack() {
    let attack

    if (this.type === "mago") {
        attack = "magia"
    } else if (this.type === "guerreiro") {
        attack = "espada" 
    } else if (this.type === "monge") {
        attack = "artes marciais" 
    } else if (this.type==="ninja") {
        attack = "shuriken" 
        } else {
            attack = "um ataque desconhecido"
        }

     console.log(`O ${this.type} atacou usando ${attack}`);

    }
}

// uso    
let hero1 = new Hero("Felipao", "27", "ninja")
hero1.attack()