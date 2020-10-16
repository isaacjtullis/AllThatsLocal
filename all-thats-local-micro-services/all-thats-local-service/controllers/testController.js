const mongoose = require('mongoose');
const Test = mongoose.model('Test');

exports.getTests = async (req, res) => {
  const tests = await Test.find();
  res.json(tests);
}

exports.create = async (req, res) => {
  console.log("INSIDE OF CREATE", req.body);
  try {
    const test = new Test(req.body);
    console.log('VALUE OF TEST:', test);
    await test.save();
    res.json(req.body);
  } catch(err) {
    return err;
  }
}

const catchErrors = (fn) => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};
