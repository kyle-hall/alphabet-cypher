import substitutionChart from './subChart/subChart'
import keyRepeater from './keyRepeater/keyRepeater'

const Cypher = {
  encode: (key, msg) => {
    const repeatedKey = keyRepeater.generateRepeatedKey(key, msg)
    let encodedMessage = ''
    for (let i = 0; i < msg.length; i++) {
      encodedMessage = encodedMessage + substitutionChart[repeatedKey[i]][msg[i]]
    }

    return encodedMessage
  }
}

export default Cypher
