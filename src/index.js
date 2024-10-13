// import connectDB from "./database/database.connection.js";
// connectDB()

import connectDB from "./database/database.connection.js";
import dotenv from "dotenv"
import app from "./app.js"

dotenv.config()

connectDB()
.then(() => {
    console.log(`MongoDB Connected Successfully !!!`)

    app.listen(process.env.PORT, () => {
        console.log(`Server is running !!!`)
    })
})
.catch((error) => {
    console.error(error)
})