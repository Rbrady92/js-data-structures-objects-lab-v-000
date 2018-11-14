const driver = {}

function updateDriverWithKeyAndValue(obj, key, val) {
  const newObj = {}
  newObj.assign({[key]: val})
  return newObj
}
