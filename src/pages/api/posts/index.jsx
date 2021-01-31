import nc from 'next-connect';
import posts from '../../../data/data';

const handler = nc()
  .get((req, res) => {
    res.json({ data: posts });
  })
  .post((req, res) => {
    const id = Date.now();
    const newPost = {...req.body, id};
    posts.push(newPost);
    res.json({ data: newPost });
  });

export default handler;