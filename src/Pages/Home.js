import { React } from 'react';
import { makeStyles } from "@mui/styles"
import { styled, Typography, Button, ImageList, ImageListItem, Unstable_Grid2 as Grid} from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import { useSpring, animated } from 'react-spring';

const useStyles = makeStyles((theme) => ({
    contain: { 
      padding: theme.spacing(0, 1)
    },
    bimg: {
      height: "100%",
    width: "100%",
    zIndex: 1,
    },
}))


  export const Home = () => {

  const classes = useStyles();

  const CoolButton = styled(Button)(() => ({
    fontFamily: [
      'Silkscreen',
    ].join(','),
    fontSize: 'large',
    color: "black", 
    marginLeft: "0.4em", 
    marginTop: "1.5em"
  }));

  const animate1 = useSpring( 
    {
      from: {y: -500},
      to: {y: 0}
    });

  const animate2 = useSpring( 
    {
      from: {y: 20000},
      to: {y: 15}
    });
  
  const animate3 = useSpring( 
    {
      from: {y: 40000},
      to: {y: 0}
    });
  

  const AnimatedText = animated(Typography);
  const AnimatedButton = animated(CoolButton);

  const itemData = [
    {
      img: 'https://github.com/rathclayton1/personal-website/blob/master/src/Images/WCD.png?raw=true',
      title: 'drums',
    },
    {
      img: 'https://github.com/rathclayton1/personal-website/blob/master/src/Images/SM.png?raw=true',
      title: 'sm',
    },
    {
      img: 'https://github.com/rathclayton1/personal-website/blob/master/src/Images/Tristan.png?raw=true',
      title: 'tristan',
    },
    {
      img: 'https://github.com/rathclayton1/personal-website/blob/master/src/Images/Cru22M.png?raw=true',
      title: 'cru22',
    },
    {
      img: 'https://github.com/rathclayton1/personal-website/blob/master/src/Images/AudrieM.png?raw=true',
      title: 'audrie',
    },
    {
      img: 'https://github.com/rathclayton1/personal-website/blob/master/src/Images/vacuum.png?raw=trMue',
      title: 'vacuum',
    },
    {
      img: 'https://github.com/rathclayton1/personal-website/blob/master/src/Images/dad.png?raw=true',
      title: 'dad',
    },
    {
      img: 'https://github.com/rathclayton1/personal-website/blob/master/src/Images/STNW_.png?raw=true',
      title: 'stnw',
    },
    {
      img: 'https://github.com/rathclayton1/personal-website/blob/master/src/Images/HomeDrums.png?raw=true',
      title: 'drums2',
    },
    {
      img: 'https://github.com/rathclayton1/personal-website/blob/master/src/Images/backpack.png?raw=true',
      title: 'backpack',
    },
  ];

  return (
    <div className={classes.bimg} style={{overflowX: "hidden", backgroundImage: "../Images/green.webp"}}>
    <Grid container className={classes.contain} spacing={1} direction="column" overflow="auto">
      <Grid item>
        <Grid container spacing={3} justify="flex-end" alignItems="normal" direction="row">
          <Grid item marginTop="7em" xs={12} md={6}>
            <AnimatedText variant="h1" align="left" fontFamily="Silkscreen" style={animate1}>
              Hello!
            </AnimatedText>
            <AnimatedText variant="h5" marginLeft="0.4em" marginTop="3em" fontFamily="WorkSans" align="left" style={animate2}>
              My name is Clayton Rath. I am a native Wisconsinite with a passion for blah, blah, and blah. 
              I decided to create this full-stack website from the ground up to encapsulate those three interests (and maybe more), as well as to enhance my software development skills.
            </AnimatedText>
            <AnimatedButton size="large" style={animate3} variant="contained">
              Check it out!
              <ArrowDropDown/>
            </AnimatedButton>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container direction="row" spacing={0} xs={12} overflow="auto" disableEqualOverflow>
              <ImageList variant="masonry" cols={3} gap={12}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}`}
                      srcSet={`${item.img}`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </div>
  )

};

export default Home;

