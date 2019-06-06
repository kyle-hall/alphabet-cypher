import Cypher from './alphabetCypher'

describe('Alphabet Cypher', () => {
  describe('Encode', () => {
    it('can encode a message with a secret keyword', () => {
      const secretKeyword = 'vigilance'
      const message = 'meetmeontuesdayeveningatseven'

      const encodedMessage = Cypher.encode(secretKeyword, message)

      expect(encodedMessage).toBe('hmkbxebpxpmyllyrxiiqtoltfgzzv')
    })
  })
})
