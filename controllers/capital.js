const Capital = require("../models/Capital");
const User = require("../models/User");

module.exports.post_add_capital = async (req,res) =>{
  const { amount, description, typeOfExpenditure, currency, date, userId } = req.body;

  try {
    await Capital.create({
      amount:amount,
      description:description,
      typeOfExpenditure:typeOfExpenditure,
      currency:currency,
      date:date,
      userId:userId
    })

    res.sendStatus(200);
  } catch (error) {
    res.statusCode = 500
    res.json({ error });
  }
}


module.exports.get_capital = async (req,res) =>{
  try {
    const { id } = req.params
    const capital = await Capital.findOne(id);
    res.json({capital})
  }
  catch (error) {
    res.statusCode = 500
    res.json({ error });
  }
}

module.exports.get_capitals = async (req,res) =>{
  const{userId} = req.query

  try {
    const user = await User.findOne({where: {id: userId}, include: [Capital]});
    res.json({capitals: user.capitals})
  }
  catch (error) {
    res.statusCode = 500
    res.json({ error });
  }
}

module.exports.put_edit_capital = async (req,res) =>{
  try {
    const { amount, description, typeOfExpenditure, currency, date} = req.body;
    const { id } = req.params

    const capital = await Capital.findByPk(id);
    capital.amount = amount != null ? amount : capital.amount;
    capital.description = description != null ? description : capital.description
    capital.typeOfExpenditure = typeOfExpenditure != null ? typeOfExpenditure : capital.typeOfExpenditure
    capital.currency = currency != null ? currency : capital.currency
    capital.date = date != null ? date : capital.date
    capital.save()
    res.sendStatus(200)
  }
  catch (error) {
    res.statusCode = 500
    console.error(error)
    res.json({ error: error.toString() });
  }
}

