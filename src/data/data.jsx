const data = new Array(20)
  .fill({})
  .map((_, i) => ({
    id: Date.now() + i,
    title: `Post ${i}`,
  }))

export default data;
