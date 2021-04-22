const Validator = require("fastest-validator");
const schema = {
    // id: { type: "number", positive: true, integer: true },
    name: { type: "string", min: 3, max: 255 },
    email: { type: "string", min: 3, max: 255 },
    image_url: { type: "string", optional: true },
    password: { type: "string", min: 3, max: 255 },
    status: {
        type: "number",
        default: 0
    },
    created_at: {
        type: "date",
        default: () => new Date()
    },
    updated_at: {
        type: "date",
        optional: true
    }
};
function validateUser(user) {
    const v = new Validator();
    const validate = v.compile(schema);
    return validate(user);
}
exports.validate = validateUser;