const isEmpty = (val) => { 

  if (!val) return true

  if (
    typeof val == 'function' ||
    typeof val == 'number' ||
    typeof val == 'boolean' ||
    Object.prototype.toString.call(val) === '[object Date]'
  )
    return false

  if (val == null || val.length === 0) 
    return true

  if (typeof val == 'object') { 

    var r = true

    for (var f in val) r = false

    return r
  }
}

const getAppPort = (port = 8080) => process.env.PORT || port

const getCorsOptions = () => ({
  origin: `http://localhost:${getAppPort()}`,
})

module.exports = {
  getCorsOptions,
  getAppPort,
  isEmpty,
}
