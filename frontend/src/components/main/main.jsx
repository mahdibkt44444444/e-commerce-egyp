import { Box, Button, Container, Dialog, IconButton, Rating, Stack, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { Close } from '@mui/icons-material';
import ProductDetails from './ProductDetails';
import { useGetproductByNameQuery } from '../../Redux/product';
const Main = () => {

    const handleAlignment = (event, newValue) => {
            setmyData(newValue)
    };

    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    // filter category

    const allProductsAPI = "products?populate=*"
    const menCategoryAPI = "products?populate=*&filters[category][$eq]=men"
    const womenCategoryAPI = "products?populate=*&filters[category][$eq]=women"

    const [myData, setmyData] = useState(allProductsAPI)
    const { data, error, isLoading } = useGetproductByNameQuery(
        myData)

    if (data) {
        console.log(data.data)
    }


    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    if (error) {
        return (
            <div>{error.
                // @ts-ignore
                message}</div>
        )
    }



    if (data) {
        return (
            <Container sx={{ py: 9 }}>
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    flexWrap={"wrap"}
                    gap={3}

                >
                    <Box>
                        <Typography variant="h6">
                            Selected Products

                        </Typography>
                        <Typography variant="body1" fontWeight={300}>
                            All our new arrivals in a exclusive brand selection

                        </Typography>

                    </Box>

                    <ToggleButtonGroup
                        color='error'
                        value={myData}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                        sx={{
                            "Mui-selected": {
                                border: "1px solid rgba(233, 69, 96, 0.5) !important",
                                color: "#e94560",
                                backgroundColor: "initial"
                            },
                        }}
                    >
                        <ToggleButton
                            sx={{ color: theme.palette.text.primary }}
                            className='myButton'
                             value={allProductsAPI}
                             aria-label="left aligned">
                            All Products
                        </ToggleButton>

                        <ToggleButton sx={{ color: theme.palette.text.primary, mx: "16px !important" }}
                         className='myButton' 
                         value={menCategoryAPI}
                          aria-label="centered">
                            MEN category
                        </ToggleButton>

                        <ToggleButton
                            sx={{ color: theme.palette.text.primary }}
                            className='myButton'
                             value={womenCategoryAPI}
                             aria-label="right aligned">
                            Women category
                        </ToggleButton>
                    </ToggleButtonGroup>


                </Stack>

                <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"} >
                    {data.data.map((item) => {
                        return (
                            <Card key={item} sx={{
                                maxWidth: 333,
                                mt: 6,
                                ":hover .MuiCardMedia-root": { rotate: "3deg", scale: "1.1", transition: "all 0.3s ease-in-out" },
                            }}
                            >
                                <CardMedia
                                    sx={{ height: 277 }}
                                    // @ts-ignore
                                    image={`${import.meta.env.VITE_BASE_URL}${item.productimg[0].url
                                        }`}
                                    title="green iguana"
                                />


                                <CardContent>
                                    <Stack
                                        direction={"row"}
                                        alignItems={"center"}
                                        justifyContent={"space-between"}

                                    >
                                        <Typography gutterBottom variant="h6" component="div">
                                            {item.productText}
                                        </Typography>
                                        <Typography variant="subtitle1" component="p">
                                            {item.productPrice} $
                                        </Typography>
                                    </Stack>

                                    <Typography variant="body2" color="text.secondary">
                                        {item.productDescription}
                                    </Typography>



                                </CardContent>


                                <CardActions sx={{ justifyContent: "space-between" }}>
                                    <Button onClick={handleClickOpen} sx={{ textTransform: "capitalize" }} size="large">
                                        <AddShoppingCartOutlinedIcon sx={{ mr: 1 }} fontSize='small' />
                                        add to cart
                                    </Button>
                                    <Rating precision={0.1} name="read-only" value={item.productrating} readOnly />
                                </CardActions>
                            </Card>
                        )
                    })}
                </Stack>





                <Dialog
                    sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}

                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <IconButton
                        sx={{
                            ":hover ":
                                { color: "red", rotate: "360deg", transition: "0.5s" },
                            position: "absolute",
                            top: 0, right: 10
                        }}
                        onClick={handleClose}
                    >

                        <Close />
                    </IconButton>

                    <ProductDetails />

                </Dialog>






            </Container>
        )
    }
}

export default Main