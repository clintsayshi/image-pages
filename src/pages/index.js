import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

// styles

// data

// markup
const IndexPage = ({ data }) => {
  let cover =
    data.file.childMarkdownRemark.frontmatter.events[0].cover.childImageSharp
      .gatsbyImageData;
  cover = getImage(cover);
  console.log();
  return (
    <main style={{ margin: "auto", maxWidth: "60%" }}>
      <title>Home Page</title>
      <GatsbyImage image={cover} alt="winter buffer jacket" />
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    file(sourceInstanceName: { eq: "pages" }, name: { eq: "spage" }) {
      childMarkdownRemark {
        frontmatter {
          pagetitle
          caption
          events {
            name
            cover {
              childImageSharp {
                gatsbyImageData
              }
            }
            desc
          }
        }
      }
    }
  }
`;
