module.exports = {
  entry: "example/enrty",
  output: "example/output",
  exclude: ['*-*.jsx'],
  randomFuc: (filePath) => `${filePath.split('/').pop()}-${Math.random().toString(36).substr(2)}`,
}