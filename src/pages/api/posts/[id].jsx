import nc from 'next-connect';
import posts from '../../../data/data';

const getPost = id => posts.find(n => {
  return n.id === parseInt(id);
});

const handler = nc()
  .get((req, res) => {
    const post = getPost(req.query.id);
    if (!post) {
      res.status(404);
      res.end();
      return null;
    }
    res.json({ data: post });
  })
  .patch((req, res) => {
    const post = getPost(req.query.id);
    if (!post) {
      res.status(404);
      res.end();
      return null;
    }
    const i = posts.findIndex(n => {
      if (Array.isArray(req.query.id)) {
        return n.id === parseInt(req.query.id[0]);
      }
      return n.id === parseInt(req.query.id);
    });
    const updated = {...post, ...req.body};
    posts[i] = updated;
    res.json({ data: updated });
  })
  .delete((req, res) => {
    const post = getPost(req.query.id)
    if (!post) {
      res.status(404);
      res.end();
      return null;
    }
    const i = posts.findIndex(n => {
      if (Array.isArray(req.query.id)) {
        return n.id === parseInt(req.query.id[0]);
      }
      return n.id === parseInt(req.query.id);
    })
    posts.splice(i, 1);
    res.json({ data: req.query.id });
  });

export default handler;