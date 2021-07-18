import React, { useState, useEffect } from 'react'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getPostList } from '../services/apiService'
import type { PostList } from '../services/apiService'
// import { getSortedPostsData } from '../lib/posts'

export default function Home() {
  const [allPostsData, setAllPostsData] = useState<PostList>([])

  useEffect(() => {
    initalize()
  }, [])

  const initalize = async () => {
    setAllPostsData(await getPostList())
    console.log(allPostsData)
  }

  return (
    <Layout home>
      {/* <head> */}
      <title>{siteTitle}</title>
      {/* </head> */}
      <section className={utilStyles.headingMd}>
        <p>This is React Demo App</p>
      </section>
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <a>
                {id}. {title}
              </a>
              {/* <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small> */}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
