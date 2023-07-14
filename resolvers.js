const users = require('./models/users');

const resolvers = {
    Query: {
        users: () => users,
        finduser: (parent, { id }) => users.find(user => user.id === id),
    },
    Mutation: {
        createuser: (parent, args) => {
            const {name, email} = args;
            const newUser = {
                id: String(users.length +1),
                name,
                email,
            };
            users.push(newUser);
            return newUser;
        },
    }
};

module.exports = resolvers