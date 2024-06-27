type UserInfougly = {
    [name: string]: number
}

const userdata:  UserInfougly = {
    "aadithyan": 18,
    "aaryaman": 16,
    "sathvik": 19
}

// life without record/maps

type UserInfohot = Record<string, {age: number, email: string}>

const userdatareal: UserInfohot = {
    "aadithyan": {age: 18, email: "aadithyan@google.com"},
    "aaryaman": {age: 16, email: "aaryaman@google.com"},
    "sathvik": {age: 19, email: "sathvik@google.com"},

}

// life after records! :)

let coolestage = userdatareal['aadithyan'].age // example (without maps)

const usermap = new Map()

const testUser = usermap.get('aadithyan')