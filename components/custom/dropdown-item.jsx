'use client'

import Link from 'next/link';
import styles from './dropdown.module.css';
import ParsedHtml from './parsed-html';

export default function DropdownItem({ target, name, description}) {
    return  <Link id={"menu-" + target.toLowerCase().replaceAll(' ', '-').slice(target.lastIndexOf('/') + 1)} href={target !== undefined ? target : "/"}>
                <span>{ name }</span>
                <span className={styles.description}><ParsedHtml htmlString={description.slice(0, 100)} /></span>
            </Link>
}