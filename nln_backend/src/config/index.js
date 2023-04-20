const config = {
    app: {
        port: process.env.PORT || 5000,
    },
    DB: {
        url: process.env.MONGODB_URL || "mongodb+srv://nba2001:binhan2001@cluster0.pbp6x1t.mongodb.net/NLN?retryWrites=true&w=majority",
    }
};

module.exports = config
