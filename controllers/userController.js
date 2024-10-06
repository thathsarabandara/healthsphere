const User = require('../models/User');
const { createUser , findByEmail } = require('../models/User'); // Import the createUser function
const { comparePassword } = require('../utils/hashpassword')
const {createToken} = require('../models/Token')
const tokenutils = require('../utils/tokenUtils')

exports.register = async (req, res) => {
    const userdata = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    };

    // Ensure all required fields are provided
    if (!userdata.username || !userdata.email || !userdata.password) {
        return res.status(400).json({ error: 'Username, email, and password are required' });
    }

    try {
        // Create the user
        const newUser = await createUser(userdata); // Call createUser directly
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (err) {
        // Provide a more detailed error message
        console.error('Error during user creation:', err);
        return res.status(500).json({ error: 'User creation failed', details: err.message });
    }
};
exports.login = async(req, res) => {
    const credentials = req.body;

    try{
        
        const user =  await findByEmail(credentials.email);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
          } 

        const isValidPassword =  comparePassword(credentials.password, '#'+user.password_hash)
        
        if(!isValidPassword){
            return res.status(401).json({ error: 'Invalid Credentials'});
        }
        
        const token = await tokenutils.generateToken(credentials);

        const newToken = createToken(user.id, token)

        res.cookie('token', token , {
            httpsOnly: 'ture',
            maxAge: 1000 * 3600*2
        });

        res.status(200).json({message: 'Login Successfull', newToken})

    }catch (err){
        console.error('Error during login:', err);

        return res.status(500).json({ error: 'Login failed', details: err.message });
    }
}
