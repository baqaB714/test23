import { useRouter } from 'next/router';
import React from 'react';

const ProductId = () => {
    const router = useRouter()
    const productId = router.query.productId
    return (
        <div>
            ProductId:{productId}
        </div>
    );
}

export default ProductId;
