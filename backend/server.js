const app = require('./app');
const connectDatabase = require('./config/database')

const dontenv = require('dotenv');

// Handle Uncaught Execptions
process.on('uncaughtException', err => {
    console.log('ERROR: ',err.stack);
    console.log('Shutting down due to uncaught execption');
    process.exit(1)
})

// Setting up config file
dontenv.config({path:'backend/config/config.env'});


// connecting to database
// connectDatabase()


const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV}`)
})

// Handle ulhandled promise rejections
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down the server due to Unhandled Promise rejection')
    server.close(() => {
        process.exit(1)
    })
})