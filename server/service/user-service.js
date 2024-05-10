const userModel = require ('../models/user-model');
const uuid = require('uuid');
const bcrypt = require ('bcrypt');
const mailService = require('./mail-service');
const tokenService = require( '../service/token-service');
const UserDto =require( '../dtos/user-dto');
  
class UserService {
    async registration(email,password){
        const candidate = await userModel.findOne({email})
        if (candidate){
            throw new Error ('Пользователь уже зарегистрирован')
        }
        const activationLink = uuid.v4();//reyqr3-2647%-^76&gn-rwjng
        const hashPassword = await bcrypt.hash(password,3);
        const user = await userModel.create({email,password:hashPassword, activationLink});
        await mailService.sendActivationMail(email,`${process.env.API_URL}/api/activate/${activationLink}` )
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return{
            ...tokens,
            user:userDto
        }


    }
    async activate(activationLink){
        const user = await userModel.findOne({activationLink});
        if ( !user){
            throw new Error ("Некорректная ссылка")
        }
        user.IsActivated = true;
        await user.save();
    }
    async login (email,password){
        const user = await userModel.findOne({email})
        if (!user){
            // console.log('user not found');
            throw new Error ('User not found');
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if (isPassEquals = false){
            throw new Error("Неверный пароль")
        }const userDto =new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id,tokens.refreshToken);
        return {...tokens,user:userDto}
    }
    async logout (refreshToken){
        const token = await tokenService.removeToken(refreshToken);
        return token;
    };
    async refresh (refreshToken){
        if (!refreshToken){
            throw new Error ("Не авторизованный пользователь")
        }    }

    
}
module.exports = new UserService();