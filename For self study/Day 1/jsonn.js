const user1 = {
    name: 'Александр',
    age: 28,
    city: 'Москва',
    address: {
        street: 'ул. Пушкина, д. 1, кв. 1',
        zipcode: 123456,
    },
    todos: ['sleep', 'eat', 'work', 'train', 'learn'],
    hasCat: true,
    yacht: null,
};

const userDataAsString = JSON.stringify(user1); //parse

//console.log(userDataAsString);