import { Box, Button, Card, CardActions, CardContent, CardMedia, Link, Typography } from '@mui/material';
import React from 'react'
import burger from '../../static/burger.jpg'
export const PostsCard = () => {
  return(
  <Box mt={3}>
    <Link href="#" sx={{textDecoration: "none"}}>
        <Card>
            <Box sx={{display: "flex", flexDirection: "row"}}>
                <CardMedia component={"img"} height={300} image={burger} alt='burger_image'
                sx={{width:'400px', cursor:'pointer', "&hover:":{
                    opacity: 0.8,
                    boxSizing: 'border-box',
                    zIndex:1,
                    transition: `all 0.50s ease`,
                }}}/>

                <CardContent>
                    <Typography gutterBottom variant='h4' align='center'>
                        Yummy Burger
                    </Typography>
                    <Typography variant='h5' color={Text.secondary}>
                        Lizards are a swidespread group of squame retiles, with over 6000 species,
                        raning across all contients expect Antarctica
                    </Typography>
                    <CardActions>
                        <Button sx={{color:"tomato"}} size='large'>
                            Share
                        </Button>
                    </CardActions>
                    <CardActions>
                        <Button sx={{color:"tomato"}} size='large'>
                            Learn more
                        </Button>
                    </CardActions>
                </CardContent>
            </Box>
        </Card>
    </Link>
  </Box>
  );
};
