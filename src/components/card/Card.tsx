import { useQuery } from 'react-query'
import styles from './_card.module.scss'

export const Card = () => {
    const { isLoading, error, data } = useQuery('products', () =>
        fetch('https://fakestoreapi.com/products').then((res) => res.json())
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error

    return (
        <>
            <div className={styles.gridContainer}>
                {data?.map((sell: any) => {
                    return (
                        <img
                            id={sell.id}
                            className={styles.gridItem}
                            src={sell.image}
                        />
                    )
                })}
            </div>
        </>
    )
}
