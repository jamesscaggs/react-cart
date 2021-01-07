import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
      id
    }
  }
`

const PageTemplate = ({ data }) => {
  const page = data.wpPage
  // const sections = page.pageSectionFields.sections
  // console.log(page.pageSectionFields)
  return (
    <>
      {/* <SEO title={`${page.title}`} /> */}
      <div className="py-6 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="prose max-w-max-content lg:max-w-5xl mx-auto">
          <article className="">
            {/* map over the sections */}
            {/* {sections.map(section => {
              return (
                <HeroHalf
                  headline={section.hero.headline}
                  subheadline={section.hero.subheadline}
                  body={section.hero.body}
                  image={section.hero.}
                />
              )
            })} */}
            <h1 className="py-4">{page.title}</h1>

            <div
              className=""
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </article>
        </div>
      </div>
    </>
  )
}

export default PageTemplate
