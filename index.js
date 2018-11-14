const drivers = {}

function updateDriverWithKeyAndValue(obj, key, val) {
  const driver = {}
  driver.assign({[key] = val})
  return driver
}
