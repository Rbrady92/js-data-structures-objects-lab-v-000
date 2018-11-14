const driver = {}

function updateDriverWithKeyAndValue(obj, key, val) {
  const newObj = {...obj}
  Object.assign(newObj, {[key]: val})
  return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, val) {
  obj[key] = val
  return obj
}

function deleteFromDriverByKey(obj, key) {
  delete obj[key]
  return obj
}
