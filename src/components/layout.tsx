import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Profile from '../images/profile.jpg'

const name = 'Silvia'
export const siteTitle = 'React Sample Website'

export default function Layout({ children, home }) {
  console.log(home)
  return (
    <div className={styles.container}>
      {/* <head> */}
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Learn how to build a personal website using Next.js" />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      {/* </head> */}
      <header className={styles.header}>
        {home ? (
          <>
            <img
              style={{ width: '144px', margin: '30px 0' }}
              src={Profile}
              className={utilStyles.borderCircle}
              alt="Silvia"
            />

            {/* <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            /> */}
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <></>
        )}
      </header>

      <main>{children}</main>
    </div>
  )
}
