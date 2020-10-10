import Layout from "../../components/layout";
import Head from "next/head";
import Date from "../../components/date";
import { GetStaticProps, GetStaticPaths } from "next";
import styled from "styled-components";
import { getPost, getPostList } from "lib/api";

const H1 = styled.h1`
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`;

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    published_at: string;
    image: {
      url: string;
      alternativeText: string;
    };
    author: string;
    content: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <H1>{postData.title}</H1>
        <div>
          <Date dateString={postData.published_at} />
          <div>
            <span>Author: {postData.author}</span>
          </div>
        </div>
        {postData.image && (
          <div>
            <img
              src={postData.image.url}
              alt={postData.image.alternativeText}
            />
          </div>
        )}
        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const list = await getPostList();
  return {
    paths: list.map((post: any) => `/post/${post.id}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPost(params!.id as string);
  return {
    props: {
      postData,
    },
  };
};
