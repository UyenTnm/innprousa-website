export interface Post {
  _id: string;
  title: string;
  excerpt: string;
  _createdAt: string;

  slug: {
    current: string;
  };

  body: {
    _key: string;

    children: {
      text: string;
    }[];
  }[];

  mainImage: unknown;
}
