const mongoose = require('mongoose');


module.exports = async () => {

    try {

        await mongoose.connect(process.env.DB_STRING)

		console.log(" connect to db")

    } catch (error) {

	console.log("error connecting to data base", error.message)

    process.exit(1)

    }

}