const mongoose = require("mongoose");

const Joi = require("joi");


const userSchema = new mongoose.Schema({
	id:{type: String, required: true},
    currency1: { type: String, required: true },
	currency2: { type: String, required: true },
    
});


const fav = mongoose.model("favourite", userSchema);

const validate = (data) => {
	const schema = Joi.object({
        id: Joi.string().required().label("id"),
		currency1: Joi.string().required().label("currency1"),
		currency2: Joi.string().required().label("currency2"),
	});
	return schema.validate(data);
};

module.exports = { fav, validate };