import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Product } from "../../app/models/product";
import axios from "axios";
import { useParams } from "react-router-dom";


export default function ProductDetailsPage() {

    const {id} = useParams<{id: string}>()
    const [product, setProduct] = useState<Product | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/products/${id}`)
            .then(response=>setProduct(response.data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [id])

    if(loading) return <h3>Loading...</h3>
    if(!product) return <h3>Not found!</h3>

    return (
        <Typography variant="h2">
            <Grid container spacing={6}>
                <Grid item xs={6}>
                    <img src={product.pictureUrl} alt={product.name} style={{width: '100%'}}/>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h3">{product.name}</Typography>
                    <Divider/>
                    <Typography variant="h4" color='secondary'>€{(product.price / 100).toFixed(2)}</Typography>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>{product.name}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Description</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Article</TableCell>
                                    <TableCell>{product.article}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Category</TableCell>
                                    <TableCell>{product.category}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>In Stock</TableCell>
                                    <TableCell>{product.quantityInStock} pcs</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Typography>
    )
}