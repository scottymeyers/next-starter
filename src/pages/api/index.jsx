import nc from 'next-connect';

const handler = nc()
  .get((req, res) => {
    res.json({ message: 'get response' });
  })
  .post((req, res) => {
    res.json({ message: 'post response' });
  });

export default handler;