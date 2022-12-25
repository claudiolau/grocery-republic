import React from 'react'
import { useQuery } from 'react-query'
import styles from './_card.module.scss'

export const Card = () => {
    const callShop = import.meta.env.VITE_SHOP_API

    const { isLoading, error, data } = useQuery(
        'products',
        async () => await fetch(callShop).then((res) => res.json())
    )

    if (isLoading) return <div className={styles.loading}>Loading...</div>

    if (error) return <div>'An error has occurred: ' + error</div>

    return (
        <>
            <div className={styles.gridContainer}>
                {data?.map((sell: any) => {
                    return (
                        <div>
                            <img
                                key={sell.id}
                                className={styles.gridItem}
                                src={sell.image}
                            />
                            <p>{sell.title}</p>
                            <span>
                                <p>
                                    {sell.price}| {sell.rating.rate}
                                </p>
                            </span>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
