import styles from './styles.module.scss';

export default function Layout({children}) {
    const {wrapLayout, container} = styles;

    return (
        <main className={wrapLayout}>
            <div className={container}>{children}</div>
        </main>
    )
}