const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(act) {

  let year = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(act)) / 0.693 * HALF_LIFE_PERIOD)

  return typeof (act) == 'string' && parseFloat(act) / 1 == (parseFloat(act)) && parseFloat(act) > 0 && parseFloat(act) < 15 ? year : false;
};
