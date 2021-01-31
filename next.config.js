module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    env: {
      customKey: 'my-value',
    },
  }
}