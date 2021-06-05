import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

// styles

// data

// markup
const IndexPage = ({ data }) => {
  let events = data.file.childMarkdownRemark.frontmatter.events;

  return (
    <main style={{ margin: "auto", maxWidth: "60%" }}>
      <title>Home Page</title>

      <div>
        <h3>Events</h3>
        <ul>
          {events.map((e, i) => {
            const cover = getImage(e.cover.childImageSharp.gatsbyImageData);
            return (
              <li style={{ border: "1px dotted blue" }} key={i}>
                <h5>{e.name}</h5>
                <p>{e.desc}</p>
                <GatsbyImage image={cover} alt="winter buffer jacket" />
              </li>
            );
          })}
        </ul>
      </div>
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
