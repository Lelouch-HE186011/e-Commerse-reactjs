import styles from '../styles.module.scss';

export default function Menu({content, href}) {
    const {menu} = styles;
    return (
        <div className={menu}>{content}</div>
    )
}