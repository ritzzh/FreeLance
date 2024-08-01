const User = require("../models/userModel");
const bcryptjs = require('bcryptjs');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid-U",
      });
    }
    const isMatch =  await bcryptjs.compare(password,user.password)
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid-P",
      });
    }

    res.status(200).json({ success: true, message:'login successful',data:{
      email: user.email,
    }
  });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error " + err,
    });
  }
};

exports.signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "username present",
      });
    }
    const newpassword = await bcryptjs.hash(password,10)
    console.log(newpassword);
    const newUser = new User({email,password:newpassword})
    await newUser.save();
    
    res.status(201).json({
        success:true,
        message:'user registered'
    })
  } catch(err) {
    console.log('signup error :',err);
    res.status(500).json({
        success:false,
        message:'server error'
    })
  }

};