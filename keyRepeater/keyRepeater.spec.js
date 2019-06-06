import keyRepeater from './keyRepeater'

describe('Key Repeater', () => {
  it('should allow messages shorter than the keyword', () => {
    const message = 'I'
    const keyword = 'scones'

    const actual = keyRepeater.generateRepeatedKey(keyword, message)

    expect(actual).toBe('s')
  })

  it('should just return the key if the message and key are the same length', () => {
    const message = 'aaaaaa'
    const keyword = 'scones'

    const actual = keyRepeater.generateRepeatedKey(keyword, message)

    expect(actual).toBe('scones')
  })

  it('should return repetitions of the characters in the key when the message is longer', () => {
    const message = 'aaaaaaa'
    const keyword = 'scones'

    const actual = keyRepeater.generateRepeatedKey(keyword, message)

    expect(actual).toBe('sconess')
  })
})
