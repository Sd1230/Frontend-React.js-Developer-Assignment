export const filterPostsByUserId = (posts, userId) => {
  return posts.filter((post) => post.userId === userId);
};
