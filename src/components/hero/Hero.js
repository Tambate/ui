import { Box, Container, Grid, Typography, styled } from "@mui/material";
import meat from "../../static/meat.jpg";
import drinks from "../../static/drinks.jpg";
import appetizer from "../../static/appetizer.jpg";
import burger from "../../static/burger1.jpg";
import Category from '../categoryList/Category'


const Hero = () => {
  const StyleCard = styled(Box)(({theme})=>({
    display: "flex",
    justifyContent: "center",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: 400,
    cursor:'pointer',

    [theme.breakpoints.up('md')]:{
        height: 400,
    },

    [theme.breakpoints.down('md')]:{
        height: 400,
    },

    "&:hover":{
        opacity: 0.8,
        boxSizing: "borderBox",
        zIndex: 1,
        transition: `all 0.45s ease`,
        
    }
  }));

  const StyledTypography = styled(Typography)({
    textAlign: "center",
    color: "white",
    backgroundColor: "tomato",
    fontSize: "20",
  });

  const StyledWrapper = styled(Box)(({theme})=>({
    width: "80%",

    [theme.breakpoints.up('md')]:{
        paddingTop: "140%",

    },

    [theme.breakpoints.down('md')]:{
        paddingTop: "40%",

    },
  }));

  return (
    <Container>
      <Grid container direction={"rown"} columnSpacing={2} rowSpacing={2}>
        <Grid item md={3} xs={6}>
          <StyleCard sx={{ backgroundImage: `url(${meat})` }}>
            <StyledWrapper>
              <StyledTypography>Burger</StyledTypography>
            </StyledWrapper>
          </StyleCard>
        </Grid>

        <Grid item md={3} xs={6}>
          <StyleCard sx={{ backgroundImage: `url(${drinks})` }}>
            <StyledWrapper>
              <StyledTypography>Drinks</StyledTypography>
            </StyledWrapper>
          </StyleCard>
        </Grid>

        <Grid item md={3} xs={6}>
          <StyleCard sx={{ backgroundImage: `url(${appetizer})` }}>
            <StyledWrapper>
              <StyledTypography>Appetizer</StyledTypography>
            </StyledWrapper>
          </StyleCard>
        </Grid>

        <Grid item md={3} xs={6}>
          <StyleCard sx={{ backgroundImage: `url(${burger})` }}>
            <StyledWrapper>
              <StyledTypography>burger</StyledTypography>
            </StyledWrapper>
          </StyleCard>
        </Grid>

        <Grid item md={3}>
          <StyleCard sx={{ backgroundImage: `url(${burger})` }}>
            <StyledWrapper>
              <StyledTypography>burger</StyledTypography>
            </StyledWrapper>
          </StyleCard>
        </Grid>
      </Grid>
      {/* import category list  */}
      <Category />
    </Container>
  );
};

export default Hero;
