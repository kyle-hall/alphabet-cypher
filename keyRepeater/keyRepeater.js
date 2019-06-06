const generateRepeatedKey = (key, msg) => {
  if (key.length == msg.length) return key

  const loop = (result, currentKey, theMessage) => {
    if (theMessage.length == 0) return result

    // TODO: Fix this because it's not actually all that functional
    if (currentKey.length == 0) currentKey = key
    return loop(result + currentKey[0], currentKey.slice(1), theMessage.slice(1))
  }

  return loop('', key, msg)
}

const keyRepeater = {
  generateRepeatedKey
}

export default keyRepeater
