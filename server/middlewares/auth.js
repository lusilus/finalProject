module.exports.auth = async (req, res, next) => {

    try{

        console.log('__________auth here. cookies are', req.cookies)
        next()
    }catch (error){
        console.log(error.message)
    }
}