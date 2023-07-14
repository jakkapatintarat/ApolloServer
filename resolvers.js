const User = require('./models/users');

const resolvers = {
    Query: {
        users: async () => await User.find({}),
        user: async (_, { id }) => await User.findById(id),
    },
    Mutation: {
        createUser: async (_, { name, email }) => {
            const newUser = new User({ name, email });
            return await newUser.save();
        },
        DelUser: async (_, { id }) => {
            return await User.findByIdAndDelete(id);
        },
    }
};

module.exports = resolvers