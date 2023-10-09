'use client'

import Link from 'next/link';
import styles from './dropdown.module.css';
import ParsedHtml from './parsed-html';

export default function DropdownItem({ target, name, description}) {
    return  <Link href={target !== undefined ? target : "/"}>
                <span>{ name }</span>
                <span className={styles.description}><ParsedHtml htmlString={description} /></span>
            </Link>
}