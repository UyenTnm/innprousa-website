export const postsQuery = `
  *[_type == "post"] | order(_createdAt desc) {
    _id,
      _createdAt,
    title,
    slug,
    excerpt,
    mainImage
  }
`;
