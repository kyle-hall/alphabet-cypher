const generateRepeatedKey = (key, msg) => {
  if (key.length == msg.length) return key

  let repeatedKey = ''
  let keyCursor = 0

  for (let i = 0; i < msg.length; i++) {
    repeatedKey = repeatedKey + key[keyCursor]
    keyCursor++
    if (keyCursor >= key.length) keyCursor = 0
  }

  return repeatedKey
}

const keyRepeater = {
  generateRepeatedKey
}

export default keyRepeater
