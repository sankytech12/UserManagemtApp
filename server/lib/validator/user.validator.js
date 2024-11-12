const zod= require('zod');

const userRegisterSchema=zod.object({
    firstName:zod.string(),
    lastName:zod.string().optional(),
    email:zod.string().email(),
    dob:zod.string(),
});

module.exports={userRegisterSchema};