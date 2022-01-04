import Layout from "@/components/Layout";
import styles from '@/styles/404.module.css';
import Link from "next/link";
import {FaExclamationTriangle} from 'react-icons/fa'

export default function NotFOundPage() {
    return (
        <Layout title='Page not found'>
            <div className={styles.error}>
                <h1> <FaExclamationTriangle/> &nbsp;404</h1>
                <h4>Sorry, there is nother here</h4>
                <Link href='/'>Go back Home</Link>
            </div>
        </Layout>
    )
}
