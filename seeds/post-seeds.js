const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    body: 'random body text',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    body: 'random body text 2',
    user_id: 2
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    body: 'randome body text 3',
    user_id: 3
  },
 
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;