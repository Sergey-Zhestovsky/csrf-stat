const pow = require('proof-of-work');
const { nanoid } = require('nanoid');

const gate = (step) => {
  const solver = new pow.Solver();

  return (req, res, next) => {
    const payload = req.body ? (req.body instanceof Object ? JSON.stringify(req.body) : req.body) : nanoid(100);

    const walk = async () => {
      const prefix = Buffer.from(payload, 'hex');
      solver.solve(step, prefix);
      next();
    };

    walk();
  };
};

module.exports = gate;
