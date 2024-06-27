interface User {
  name: string;
  age: number;
}

function sumOfAge(user1: User, user2: User) {
    console.log(user1.age + user2.age);
}

sumOfAge({ name: "aadithyan", age: 18}, {name: "aaryaman", age: 16})