import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props {
    products: Product[]
}

export default function ProductList({ products }: Props) {
    return (
        <Grid container justifyContent= 'center' spacing={{xs: 2, md:3}} columns={{ xs: 4, sm: 8, md: 12 }}>
            {products.map(product => (
                <Grid item xs={3} key={product.id}>
                    <ProductCard  product={product} />
                </Grid>
            ))}
        </Grid>
    )
}