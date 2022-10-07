import React, { useEffect, useState } from 'react';

const FetchProduct = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    const url = "https://dummyjson.com/products";


    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(respData => {
                console.log(respData);
                setData(respData)
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
            })
    }, [])

    return (
        <div>
            {isLoading ? (
                <div>Carregando</div>
            ) : (
                data.map((produto) => (
                    <div>
                        {produto.title}
                    </div>
                ))
            )}
        </div>
    )
}

export default FetchProduct;