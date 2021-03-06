import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Skill from "../components/skill"

export default ({ data, transitionStatus }) => {
  let allSkills = []
  if (((data || {}).allMarkdownRemark || {}).edges) {
    // Select non duplicated skills from all jobs
    allSkills = data.allMarkdownRemark.edges.reduce(
      (
        mySkills,
        {
          node: {
            frontmatter: { skills },
          },
        }
      ) => {
        if (skills) {
          const currentSkils = skills.reduce((acumSkills, currentSkill) => {
            // If the skill don't exists in array add it
            if (!mySkills.find(({ title }) => title === currentSkill.title)) {
              acumSkills.push(currentSkill)
            }
            return acumSkills
          }, [])
          return [...mySkills, ...currentSkils]
        }
        return mySkills
      },
      []
    )
  }

  return (
    <Layout title={`Skills`} bgClassName={`skill`} fixedMenuPosition={true}>
      <Helmet>
        <title>Skills</title>
      </Helmet>
      <Skill
        skills={allSkills}
        type="scrollable"
        title="Skills"
        description="These are few technologies that I have worked with along the way"
        transitionStatus={transitionStatus}
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/experience/" } } }
      sort: { fields: [frontmatter___dateFrom], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            skills {
              title
              image {
                childImageSharp {
                  fluid(maxWidth: 450, maxHeight: 450) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
