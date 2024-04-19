const userModel = require ('../models/user-model');
const uuid = require('uuid');
const bcrypt = require ('bcrypt')
const mailService = require('./mail-service')
const tokens = tokenService.generateTokens(user)
class UserService {
    async registration(email,password){
        const candidate = await userModel.findOne({email})
        if (candidate){
            throw new Error ('Пользователь уже зарегистрирован')
        }
        const activationLink = uuid.v4();//reyqr3-2647%-^76&gn-rwjng
        const hashPassword = await bcrypt.hash(password,3);
        const user = await userModel.create({email,password:hashPassword, activationLink});
        await mailService.sendActivationMail(email, activationLink)


    }
}
module.exports = new UserService();