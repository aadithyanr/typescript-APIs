interface User2 {
    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
};

type UpdatePropsr = Pick<User2, 'name' | 'age' | 'email'>

type UpdatePropsOptional = Partial<UpdatePropsr>

//easier way than writing '?' after each

function updateUser(updatedProps: UpdatePropsOptional) {
    // hit the database tp update the user
}
updateUser({})