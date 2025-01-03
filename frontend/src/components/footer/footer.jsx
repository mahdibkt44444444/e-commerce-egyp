import { Box, Button, Typography } from '@mui/material'

const footer = () => {
  return (
    <Box
    sx={{
        mt: 3,
        bgcolor: "#2B3445",
        py: 1.3,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8
    }}
    >

        <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        color={"HighlightText"}
        variant="h6"
        fontSize={18}

        >
            Designed and developed by
            <Button
            sx={{
                mx: 0.5,
                fontSize: 18,
                color: "#ff7790",
                textTransform: "capitalize"
            }}
            variant='text'
            color='primary'
            >
                Mahdi BKT
            </Button>
            2024
            
        </Typography>


    </Box>
  )
}

export default footer