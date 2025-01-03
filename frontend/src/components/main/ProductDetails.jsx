/* eslint-disable react/no-unescaped-entities */
import { AddShoppingCartOutlined } from '@mui/icons-material'
import { Box, Button, Stack, Typography } from '@mui/material'

const ProductDetails = () => {
    return (
        <Box sx={{ 
            display: 'flex',
             alignItems: 'center',
              gap: 2.5, 
              flexDirection: { xs: 'column', sm: 'row' } }}>
            <Box sx={{display : "flex"}}>
                <img width={300} src="src\images\1.jpg" alt="" />
            </Box>

            <Box sx={{
                 textAlign: { xs: 'center', sm: 'left' } }}
                 >
                <Typography variant='h5' > WOMEN'S FASHION</Typography>
                <Typography my={0.4} fontSize={22} color='crimson' variant='h3' >
                    $12.99
                </Typography>

                <Typography variant="body1" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.

                </Typography>
                <Stack 
                sx={{justifyContent: {xs: 'center', sm: 'flex-start'}}}
                 direction={'row'}  
                 gap={1}
                  my={2} 
                 >
                    {["src/images/1.jpg", "src/images/2.jpg"].map((item) => {
                        return (
                            <img style={{ borderRadius: 3 }} height={100} width={90}
                             key={item} src={item} alt="" 
                             />
                        )
                    })}


                </Stack>

                <Button
                    sx={{
                        mb: { xs: 2, sm: 0 },
                         textTransform: 'capitalize' }}
                    variant='contained'
                >
                    <AddShoppingCartOutlined sx={{ mr: 1 }}
                        fontSize='small'
                    />
                    Add to cart

                </Button>

            </Box>


        </Box>
    )
}

export default ProductDetails