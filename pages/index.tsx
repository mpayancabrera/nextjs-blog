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
  "If you want to know more about which is JAMstack, you can visit the following resources: ";

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
      </Section>
      <Section>
        <h2>Blog</h2>
        <List>
          {allPostsData.map(({ id, published_at, title }) => (
            <ListItem key={id}>
              <Link href={`/post/${id}`}>
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
      <Section>
        <p>{referPage}</p>
        <ul>
          <li>
            <a href="https://www.netlify.com/pdf/oreilly-modern-web-development-on-the-jamstack.pdf">
              {" "}
              (Book) Modern web development on the JAMstack
            </a>
          </li>
          <li>
            <a href="https://manuelpayan.com">
              A simple guide of which is JAMstack
            </a>
          </li>
          <li>
            <a href="https://www.lambrospetrou.com/articles/battle-of-jamstack-platforms-netlify-vercel-aws/">
              JAMstack platforms overview
            </a>
          </li>
          <li>
            <a href="https://jamstack.org/">
              A JAMstack guide, set of resources and much more
            </a>
          </li>
          <li>
            <a href="https://strapi.io/blog/strapi-online-meetup-4-recap">
              (Webinar) Deploy a Next.js Blog Starter Using Strapi on Vercel
            </a>
          </li>
        </ul>
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
