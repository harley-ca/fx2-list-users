class User {
    constructor(id, first, last, email, phone, city){
        this.id = id;
        this.first = first;
        this.last = last;
        this.email = email;
        this.phone = phone;
        this.city = city;
    }

    fullName(){
        return `${this.first} ${this.last}`
    }
}

export default User