let user: {
    id?: number,
   readonly name: string
} = {
    id: 1,
    name: "김기지"
};

console.log(user.id);

user = {
    id: 1,
    name: "죠니"
}

// user.name = 'kiji'