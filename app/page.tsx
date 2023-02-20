import Link from 'next/link'
import styles from '../styles/home.module.css'

export default async function Home() {
  return <div className={styles.home}>
    <div>
      <div><h1>Hi, there!</h1></div>
      <div>
        <Link href="/blog">Here is my blog</Link>
      </div>
      <div>
        <Link href="/contact">Contact me</Link>
      </div>
    </div>
  </div>
}
