import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
import styled from "styled-components";

const name = "Manuel Payán Cabrera";
export const siteTitle = "Manuel Payán - blog";

const H1 = styled.h1`
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`;

const AnchorWS = styled.a`
  color: inherit;
`;

const HeaderImg = styled.img`
  border-radius: 9999px;
`;

const Layout = ({ children, home }: any) => {
  return (
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <HeaderImg
                src="/images/profile.jpg"
                className={`${styles.headerHomeImage}`}
                alt={name}
              />
              <H1>{name}</H1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <HeaderImg
                    src="/images/profile.jpg"
                    className={`${styles.headerImage}`}
                    alt={name}
                  />
                </a>
              </Link>
              <h2>
                <Link href="/">
                  <AnchorWS>{name}</AnchorWS>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
      
  );
};

export default Layout;
