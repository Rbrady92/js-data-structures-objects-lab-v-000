const driver = {}

function updateDriverWithKeyAndValue(obj, key, val) {
  const newObj = {...obj}
  newObj.assign({[key]: val})
  return newObj
}
