const driver = {}

function updateDriverWithKeyAndValue(obj, key, val) {
  const newObj = {...obj}
  Object.assign(newObj, {[key]: val})
  return newObj
}
