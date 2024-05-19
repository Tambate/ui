import { Box, Stack, Typography, styled } from "@mui/material";
import drinks from '../../static/drinks.jpg'
import vegan from '../../static/vegan.jpg'
import salad from '../../static/salad.jpg'
import nachos from '../../static/nachos.jpg'
import meat from '../../static/meat.jpg'
import instant from '../../static/instant.jpg'
import healthy from '../../static/healthy.jpg'
import dinner from '../../static/dinner.jpg'
const Category = () => {
  const StyleCard = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow:"hidden",
    borderRadius: "100%",
    width: "100px",
    height: 400,
    cursor: "pointer",

    [theme.breakpoints.up("md")]: {
      height: 100,
    },

    [theme.breakpoints.down("md")]: {
      height: 100,
    },

    "&:hover": {
      opacity: 0.8,
      boxSizing: "borderBox",
      zIndex: 1,
      transition: `all 0.45s ease`,
    },
  }));
  const StyledTypography = styled(Typography)({
    textAlign: "center",
    color: "black",
    fontSize: "20",
  });

  const CardBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  });
  return (
    <Stack Container direction={"row"} mt={4} spacing={4} ml={3} overflow={"auto"}>
        <CardBox>
            <StyleCard sx={{ backgroundImage: `url(${drinks})` }}/>
            <StyledTypography>Drinks</StyledTypography>
        </CardBox>
        <CardBox>
            <StyleCard sx={{ backgroundImage: `url(${healthy})` }}/>
            <StyledTypography>Drinks</StyledTypography>
        </CardBox>
        <CardBox>
            <StyleCard sx={{ backgroundImage: `url(${dinner})` }}/>
            <StyledTypography>Drinks</StyledTypography>
        </CardBox>
        <CardBox>
            <StyleCard sx={{ backgroundImage: `url(${instant})` }}/>
            <StyledTypography>Drinks</StyledTypography>
        </CardBox>
        <CardBox>
            <StyleCard sx={{ backgroundImage: `url(${meat})` }}/>
            <StyledTypography>Drinks</StyledTypography>
        </CardBox>
        <CardBox>
            <StyleCard sx={{ backgroundImage: `url(${nachos})` }}/>
            <StyledTypography>Drinks</StyledTypography>
        </CardBox>
        <CardBox>
            <StyleCard sx={{ backgroundImage: `url(${salad})` }}/>
            <StyledTypography>Drinks</StyledTypography>
        </CardBox>
        <CardBox>
            <StyleCard sx={{ backgroundImage: `url(${vegan})` }}/>
            <StyledTypography>Drinks</StyledTypography>
        </CardBox>
        <CardBox>
            <StyleCard sx={{ backgroundImage: `url(${drinks})` }}/>
            <StyledTypography>Drinks</StyledTypography>
        </CardBox>
        <CardBox>
            <StyleCard sx={{ backgroundImage: `url(${drinks})` }}/>
            <StyledTypography>Drinks</StyledTypography>
        </CardBox>
    </Stack>
  );
};

export default Category;
