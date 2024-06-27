interface User1 {
    id: number;
    name: string;
    age: number;
    email: string;
    pass: string;
}

type UpdateProps = Pick<User1, 'name' | 'age' | 'pass' >

function displayUserProfile (prop:UpdateProps) {
    console.log(`Name: ${prop.name}, Pass: ${prop.pass}`);
}
