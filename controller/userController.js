import User from "../models/user.js"
export const signup = async (req, res) => {
    try {
        console.log(req.body);
        const userData = new User(req.body);
        const {email} = userData;

        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({message : "User already exist"});
        }

        const savedUser = await userData.save();
        res.status(200).json({savedUser});
    } catch (error){
        res.status(500).json({error: "Internal server error!"});
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find user by email
        const user = await User.findOne({ email });
        console.log(user);
        //1. user == null || or user.password  not matched
        if (!user || user.password !== password) {
            return res.status(400).json({ message: 'Invalid email or password' });
          }
          // Successful login
          res.status(200).json({ message: 'Login successful' });
    } catch (error){
        res.status(500).json({error: "Internal server error!"});
    }
}