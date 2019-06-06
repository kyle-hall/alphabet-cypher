const subChartGenerator = _ => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'

  let result = {}
  for (let i = 0; i < alphabet.length; i++) {
    result[alphabet[i]] = {}
  }

  for (let k = 0; k < alphabet.length; k++) {
    let adjustedAlphabet = adjustAlphabet(k, alphabet)
    for (let j = 0; j < adjustedAlphabet.length; j++) {
      result[alphabet[k]][alphabet[j]] = adjustedAlphabet[j]
    }
  }

  return result
}

const adjustAlphabet = (offset, alphabet) => alphabet.slice(offset) + alphabet.substring(0, offset)

export default subChartGenerator()
