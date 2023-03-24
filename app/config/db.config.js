module.exports = {
    HOST: "165.232.172.0",
    USER: "root",
    PASSWORD: "tiger",
    DB: "userss",
    dialect: "postgresql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

// DB_HOST=165.232.172.0

// DB_NAME=userss

// DB_USER=root

// DB_PWD=tiger