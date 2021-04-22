const Joi = require('joi');

function validateUser(user) {
    console.log(user);
    const schema = Joi.object({
        name: Joi.string().min(5).max(255).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
        status: Joi.number().max(10).default(1),
        created_at: Joi.date().required().timestamp().label('Created Date')
    });
    return schema.validate(user);
}
exports.validate = validateUser;