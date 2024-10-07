const express = require('express');
const app = express();
const userRoutes = require('./routes/users');
const doctorRutes = require('./routes/doctors');
const adminRoutes = require('./routes/admins');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const sync = require('./config/sync')


// port for the server
const PORT = process.env.PORT || 3000;

//  bodyparser use
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// routes for users
app.use('/', userRoutes);
app.use('/doctor', doctorRutes);
app.use('/admin', adminRoutes);

// app.use(cors(corsOptions));
// start server
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})