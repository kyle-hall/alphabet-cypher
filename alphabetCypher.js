import substitutionChart from './subChart/subChart'
import keyRepeater from './keyRepeater/keyRepeater'

const Cypher = {
  encode: (key, msg) => {
    const repeatedKey = keyRepeater.generateRepeatedKey(key, msg)

    return repeatedKey
      .split('')
      .map((x, index) => substitutionChart[x][msg[index]])
      .join('')
  }
}

export default Cypher
