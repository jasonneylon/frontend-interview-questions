function assignDeep(target, source) {
  return Object.entries(source).reduce((agg, [key, value]) => {
    if (typeof value === "object") {
      const targetValue = agg[key];
      const target = (typeof targetValue === "object") ? targetValue : {};
      agg[key] = assignDeep(target, value);
    } else {
      agg[key] = value;
    }
    return agg;
  }, target);
}

module.exports.assignDeep = assignDeep;



