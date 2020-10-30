import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// All standard react hook rules apply when using useStaticQuery hook. For example:
// 1. Only works in a functional component
// 2. Only works inside of the function. Anything on the inside will not work

// Giving graphql data a name to make it easier to work with
const getData = graphql`
  {
    site {
      info: siteMetadata {
        person {
          age
          name
        }
        author
        data
        description
        title
      }
    }
  }
`
/*Typical query*/
// const Header = () => {
//   // assigning useStaticQuery to a variable to make it easier to work with
//   const data = useStaticQuery(getData)
//   console.log(data)
//   return (
//     <div>
//       <h1>Title : {data.site.siteMetadata.title}</h1>
//       <h1>Name : {data.site.siteMetadata.person.name}</h1>
//     </div>
//   )
// }

/* Destructuring */
const Header = () => {
  const {
    site: {
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h1>Title : {title}</h1>
      <h1>Name : {name}</h1>
    </div>
  )
}

export default Header
