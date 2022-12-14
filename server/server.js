const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const db = require('./config/db')
const cookieParser = require('cookie-parser')
db()

app.use(cors({ credentials: true, origin: "http://localhost:3000" })) //needs to be first
app.use(express.json()) //processing the req.body
app.use(cookieParser())
app.use('/images', express.static('./uploads'))
app.use('/user', require('./routes/userRoutes'))
app.use('/artCard', require('./routes/artCardRoutes'))

 
 const port = process.env.PORT || 5000

app.listen(port, () => console.log('server is up and running at port', port))

//adding in the end for depolyment:
app.use(express.static('client/build'));

if( process.env.NODE_ENV === 'production' ){

    const path = require('path');

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


//whitelist to cancel cors
// var whitelist = ['http://example1.com', 'http://example2.com']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }