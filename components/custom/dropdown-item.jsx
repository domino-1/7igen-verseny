import Link from 'next/link';
import styles from './dropdown.module.css';

export default function DropdownItem({ target, name, description}) {
    return  <Link href={target !== undefined ? target : "/"}>
                <span>{ name }</span>
                <span className={styles.description}>{ description }</span>
            </Link>
}