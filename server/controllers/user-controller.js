const userService=require( '../service/user-service')

class UserController {
    async registration (req,res,next){
        try{
            const{email,password} = req.body;
            const userData = await userService.registration(email,password)
            res.cookie('refreshToken', userData.refreshToken,{maxAge:30*24*60*60*1000, httpOnly: true})
            res.json(userData);

        }catch(e){
            console.log(e)
        }

    }
    async login (req,res,next){
        try{
            const {email,password} = req.body;
            const userData = await userService.login(email,password)
            res.cookie('refreshToken', userData.refreshToken,{
            maxAge:30*24*60*60*1000, httpOnly: true})
            return res.json(userData);


        }catch(e){console.log(e)}
    }
    async logout (req,res,next){
        try{
            const {refreshToken} = req.cookie;
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(refreshToken);

        }catch(e){console.log(e)}
    }
    async refresh (req,res,next){
        try{
            const {refreshToken} = req.cookies;
            const userData= await userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken,{
            maxAge:30*24*60*60*1000, httpOnly: true})
            return res.json(userData);
    

        }catch(e){console.log(e)}
    }
    async getUsers(req,res,next){
        try{res.json('Hello')

        }catch(e){console.log(e)}
    }
    async activate(req,res,next){
        try{
            const activationLink = req.params.link;
            await userService.activate (activationLink);
            return res.redirect(process.env.LOCAL_CLIENT_URL)
        }catch(e){console.log(e)}
    }
}

module.exports = new UserController();