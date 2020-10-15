
class user{
    constructor(Firstname, Lastname, Mail, Age, Gender){
    this.Firstname = Firstname
    this.Lastname = Lastname
    this.Mail = Mail
    this.Age = Age
    this.Gender = Gender
    }
    calculateAge(){
        var date_1 = new Date (this.dateOfBirth);
        var diff_ms = Date.now() - date_1.getTime();
        var age_dt = new Date (diff_ms);

        return Math.abs(age_dt.getUTCFullYear()-1970);
    }
}

class Paymentuser extends user{
    constructor(user){
        super(Firstname, Lastname, Mail, Age, Gender)
    }
}

class creditCard{
    constructor(CreditCardNumber, CVC){
      this.creditCardNumber = creditCardNumber
      this.CVC = CVC  
    }
}

class FreeUser extends user{
    constructor(user){
        super(Firstname, Lastname, Mail, Age, Gender)
    }
}

class Interest{
    constructor(Basketball, Fishing, Hikes, Relax){
        this.Basketball= Basketball
        this.Fishing= Fishing
        this.Hikes= Hikes
        this.Relax= Relax
    }
}

class Match {
    constructor(Female, Male){
        this.Female= Female
        this.Male= Male
    }
}

class Image extends user{
    constructor(){
    }
}

let user1 = new user("Morten", "Hansen", "mh@gmail.com", 31-05-1999, "Male")
let user2 = new user("Carl", "Gabe", "cb@gmail.com", 06-05-2000, "Male")

let user1 = new Interest(Yes, No, No, Yes)
let user2 = new Interest(No, Yes, Yes, Yes)

let user1 = new Match(Female)
let user2 = new Match(Female)

let userArray = [user1, user2]


module.exports = harduser.js




