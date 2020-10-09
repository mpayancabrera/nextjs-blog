const fetchAPI = async (query: any, { variables }: any = {}) => {
  const res = await fetch(
    `${
      process.env.API_URL || "https://boiling-harbor-25299.herokuapp.com"
    }/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    }
  );

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
};

export const getPostList = async () => {
  const data = await fetchAPI(`query Posts {
      posts(sort: "published_at:desc") {
        id
        title
        author
        category {
          id
          name
        }
        image {
          url
          alternativeText
        }
        created_at
        updated_at
        published_at
      }
    }`);
  return data.posts;
};

export const getPost = async (id: string) => {
  const data = await fetchAPI(
    `query Posts($id: ID!) {
      post(id: $id) {
        id
        title
        author
        content
        image {
          url
          alternativeText
        }
        category {
          id
          name
        }
        published_at
      }
    }`,
    { variables: { id } }
  );
  return data.post;
};

export const getCategories = async () => {
  const data = await fetchAPI(`query Categories {
      categories {
        id
        name
      }
    }`);
  return data.categories;
};

export const getCategory = async (id: string) => {
  const data = await fetchAPI(
    `query Category($id: ID!) {
      category(id: $id) {
        id
        name
        posts {
          id
          title
          author
          content
          image {
            url
            alternativeText
          }
          category {
            id
            name
          }
        }
      }
    }
  `,
    { variables: { id } }
  );
  return data.category;
};
