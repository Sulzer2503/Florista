import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Product } from "../../app/models/product";
import { useParams } from "react-router-dom";
import GiftCardText from "../order/GiftCardText";
import agent from "../../app/api/agent";
import NotFound from "../../app/errors/NotFound";
import LoadingComponent from "../../app/layout/LoadingComponent";


export default function ProductDetailsPage() {

    const {id} = useParams<{id: string}>()
    const [product, setProduct] = useState<Product | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        id && agent.Catalog.details(parseInt(id))
            .then(response=>setProduct(response))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [id])

    if(loading) return <LoadingComponent message="Loading product..."/>
    if(!product) return <NotFound/>

    
    return (
        <Typography variant="h2">
            <Grid container spacing={6}>
                <Grid item xs={6}>
                    <img src={product.pictureUrl} alt={product.name} style={{width: '100%', borderRadius: 15}}/>
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
                                    {
                                    product.quantityInStock === 0 ? <TableCell>Not in Stock</TableCell> : <TableCell>In Stock</TableCell>
                                    }
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <GiftCardText/>
                                    </TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Typography>
    )
}