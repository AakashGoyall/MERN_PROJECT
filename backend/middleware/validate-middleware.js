const validatemiddleware = (schema) =>async (req, res , next) =>{
    try{
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
    }
    catch(err){
        console.log(err.errors[0].message )
        res.send(err.errors[0].message);
        
    }

}

module.exports = validatemiddleware