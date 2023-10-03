import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    return (
        <Card style={{borderRadius: 15}}>
            <CardActionArea component={Link} to={`/catalog/${product.id}`}>
                <CardMedia
                    sx={{ height: 200, backgroundSize: 'crop' }}
                    image={product.pictureUrl}
                    title={product.name}
                />
                <CardContent sx={{backgroundColor: '#ce93d8'}}>
                    <Typography gutterBottom color="primary" variant="h6" textAlign={"center"}>
                        {product.name}
                    </Typography>
                    <Typography variant="h6" textAlign={'center'}>
                        €{(product.price / 100).toFixed(2)}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions sx={{justifyContent: 'center'}}>
                <Button size="small" >Add to cart</Button>
            </CardActions>
        </Card>
    )
}