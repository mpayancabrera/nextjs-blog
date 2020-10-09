import { GetStaticProps } from "next";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import Date from "../components/date";
import styled from "styled-components";
import { getPostList } from "lib/api";

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin: 0 0 1.25rem;
`;

const Section = styled.section`
  font-size: 1.2rem;
  line-height: 1.5;
`;

const introduction =
  "Hi everyone! Thanks for visiting this page, I want to show how to build a personal blog with JAMstack ecosystem using Next and Strapi.";
const referPage =
  "If you want to know more about my profile, you can visit my personal page in ";

const Home = ({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
    author: string;
    published_at: string;
  }[];
}) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Section>
        <p>{introduction}</p>
        <p>
          ({referPage}
          <a href="https://manuelpayan.com">Manuel Payán Cabrera</a>.)
        </p>
      </Section>
      <Section>
        <h2>Blog</h2>
        <List>
          {allPostsData.map(({ id, published_at, title }) => (
            <ListItem key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={published_at} />
              </small>
            </ListItem>
          ))}
        </List>
      </Section>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = await getPostList();
  return {
    props: {
      allPostsData,
    },
  };
};
