import styles from './_footer.module.scss'

export const Footer: React.FC = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.logo}>
                    Copyright 2022 Grocery Republic
                </div>
            </div>
        </>
    )
}
