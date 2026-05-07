export const postsQuery = `
  *[_type == "post"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage
  }
`;
