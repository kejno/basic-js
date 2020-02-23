const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(act) {
  let year = Math.ceil(Math.log(MODERN_ACTIVITY / +act) / 0.693 * HALF_LIFE_PERIOD)

  return typeof (act) == 'string' && +act / 1 == (+act) && +act > 0 && +act < 15 ? year : false;
};
