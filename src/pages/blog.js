import React from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>this is our blog page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
          provident vel ut. Dicta fugit enim repellendus! Ab odit commodi ea
          dicta consequatur nisi dolor ipsum?
        </p>
      </div>
    </Layout>
  )
}

export default blog
