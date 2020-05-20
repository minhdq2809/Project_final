import React from 'react';
import { getImageUrl } from './../shared/utils/index'

function ProductItem({ item }) {
    return (
        <div className="product-item card text-center">
            <a href="#">
                <img src={getImageUrl(item.image)} />
            </a>
            <h4>
                <a href="#">{item.name}</a>
            </h4>
            <p>
                Giá Bán: <span>{item.price}</span>
            </p>
        </div>
    )
}

export default ProductItem
