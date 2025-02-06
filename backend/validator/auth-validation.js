const { z } = require("zod");

const signupSchema = z.object({
    username: z.string({required_error :  "Name is required"}).trim().min(3, "not valid").max(20, "maximum 20"),
    email: z.string().trim().min(3, "not valid").max(50, "maximum 50").email("Invalid email format"),
    phone: z.string().trim().min(10, "Phone number too short").max(15, "Phone number too long"), 
    password: z.string().trim().min(6, "Password too short").max(20, "Password too long")
});

module.exports = signupSchema;
