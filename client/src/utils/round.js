export default (num, chars = 2) => {
  const t = 10 * chars;
  return Math.round(num * t) / t;
};
