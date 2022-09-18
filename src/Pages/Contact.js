import { React, useState } from "react";
import { Typography, TextField, Grid, Card, CardContent, useMediaQuery } from "@mui/material";
import { CoolButton } from "./Home";
import emailjs from "@emailjs/browser";
import { useTheme } from "@emotion/react";

export const Contact = () => {
  const theme = useTheme();

  const [success, setSuccess] = useState("");

  const isSM = useMediaQuery(theme.breakpoints.down("sm"));

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x03jugp",
        "template_656pypk",
        e.target,
        "s9_HsdfwoLwyL27Wz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    setSuccess("Message sent!");
  };

  return (
    <Grid padding={isSM ? "1.5em" : "3em"} justifyContent="center" align="center">
      <Card elevation={12} style={{ width: isSM ? "100%" : 500 }}>
        <CardContent>
          <Typography align="center" fontFamily="Silkscreen" variant="h3">
            Whats up?
          </Typography>
          <Typography
            variant="body2"
            fontFamily="workSans"
            align="center"
            component="p"
            gutterBottom
            marginBottom="1em"
          >
            Messages sent straight to my email.
          </Typography>
          <form onSubmit={sendEmail}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  placeholder="Enter first name"
                  name="first"
                  label="First Name"
                  variant="outlined"
                  fontFamily="Silkscreen"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  placeholder="Enter last name"
                  name="last"
                  label="Last Name"
                  variant="outlined"
                  fontFamily="Silkscreen"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  label="Email"
                  variant="outlined"
                  fontFamily="Silkscreen"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  name="phone"
                  placeholder="Enter phone number"
                  label="Phone"
                  variant="outlined"
                  fontFamily="Silkscreen"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  placeholder="Type your message here"
                  variant="outlined"
                  fontFamily="Silkscreen"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <CoolButton
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ marginLeft: "0em" }}
                  fullWidth
                >
                  Submit
                </CoolButton>
              </Grid>
            </Grid>
          </form>
          <Typography
            variant="body2"
            fontFamily="workSans"
            align="center"
            paddingTop="2em"
          >
            {success}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Contact;
