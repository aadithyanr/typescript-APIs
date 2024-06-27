type User3 = {
    name: string
    age: number
}

// above value can easily be modified and edited. not safe.

type User31 = {
    readonly name: string
    readonly age: number
}

// better practice. also, can be done using readonly<typenamehere>

const usertype: Readonly<User3> = {
    name: 'Aadi',
    age: 17
}

usertype.age = 18 // wont work now :)