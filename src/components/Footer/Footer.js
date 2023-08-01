import React from "react";
import { Container, Typography, Grid } from "@mui/material";

function Footer() {

  return (
    <>
      <Container maxWidth='100'
        sx={{
          display: 'flex',
          backgroundColor: '#16171A',
          marginTop: '2em',
        }}
      >
        <Grid container spacing={1} columns={12} sx={{
          width: '95%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingTop: '1.6em',
          paddingBottom: '1.6em',
        }}>

          <Grid item xs={2} sx={{ textAlign: 'center', marginRight: '2em' }}>
            
            <Typography
              variant="h6"
              className='footLogo'
              sx={{
                fontSize: { xs: '18px', md: '20px', lg: '22px', xl: '24px' },
              }}
            >
              Doris's
            </Typography>
          </Grid>

          <Grid item xs={0.5} className="hideCol"></Grid>

          <Grid item xs={3}>
            <Typography
              variant="h6"
              sx={{
                textTransform: 'uppercase',
                fontSize: { xs: '1rem', md: '1.1rem', lg: '1.25rem' },
              }}
            >
              Contact
            </Typography>
            <Typography
              variant="subtitle1"
              className="footLink"
              // onClick={() => handleRedirect('mailto:YourMom@email.com')}
              marginLeft={{ xs: '5px', md: '6px', lg: '8px' }}
              sx={{
                fontSize: { xs: '14px', md: '15px', lg: '16px' },
              }}
            >
              Email
            </Typography>
            <Typography
              variant="subtitle1"
              className="footLink"
              // onClick={() => handleRedirect('mailto:YourMom@email.com')}
              marginLeft={{ xs: '5px', md: '6px', lg: '8px' }}
              sx={{
                fontSize: { xs: '14px', md: '15px', lg: '16px' },
              }}
            >
              Request a Quote
            </Typography>
            <Typography
              variant="subtitle1"
              className="footLink"
              // onClick={() => handleRedirect('mailto:YourMom@email.com')}
              marginLeft={{ xs: '5px', md: '6px', lg: '8px' }}
              sx={{
                fontSize: { xs: '14px', md: '15px', lg: '16px' },
              }}
            >
              Media Requests
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography
              variant="h6"
              sx={{
                textTransform: 'uppercase',
                fontSize: { xs: '1rem', md: '1.1rem', lg: '1.25rem' },
              }}
            >
              About
            </Typography>
            <Typography
              variant="subtitle1"
              className="footLink"
              // onClick={() => handleRedirect('mailto:YourMom@email.com')}
              marginLeft={{ xs: '5px', md: '6px', lg: '8px' }}
              sx={{
                fontSize: { xs: '14px', md: '15px', lg: '16px' },
              }}
            >
              Meet the Team
            </Typography>
            <Typography
              variant="subtitle1"
              className="footLink"
              // onClick={() => handleRedirect('mailto:YourMom@email.com')}
              marginLeft={{ xs: '5px', md: '6px', lg: '8px' }}
              sx={{
                fontSize: { xs: '14px', md: '15px', lg: '16px' },
              }}
            >
              Careers
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography
              variant="h6"
              sx={{
                textTransform: 'uppercase',
                fontSize: { xs: '1rem', md: '1.1rem', lg: '1.25rem' },
              }}
            >
              Extra Stuff
            </Typography>
            <Typography
              variant="subtitle1"
              className="footLink"
              // onClick={() => handleRedirect('mailto:YourMom@email.com')}
              marginLeft={{ xs: '5px', md: '6px', lg: '8px' }}
              sx={{
                fontSize: { xs: '14px', md: '15px', lg: '16px' },
              }}
            >
              Stuff 1
            </Typography>
            <Typography
              variant="subtitle1"
              className="footLink"
              // onClick={() => handleRedirect('mailto:YourMom@email.com')}
              marginLeft={{ xs: '5px', md: '6px', lg: '8px' }}
              sx={{
                fontSize: { xs: '14px', md: '15px', lg: '16px' },
              }}
            >
              Stuff 2
            </Typography>
          </Grid>

          <Grid item xs={1.5} className="hideCol"></Grid>

          <Grid item xs={3} md={2} sx={{
            justifyContent: 'center',
            alignItems: 'end'
          }}>
          </Grid>
        </Grid>
      </Container>
      {/* <Modal
        open={openModal}
        onClose={handleModalClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: '5px',
        }}
      >
        <div
          className="modal-container"
          style={{
            backgroundColor: "#fff",
            paddingLeft: "2rem",
            paddingRight: '2rem',
            paddingBottom: '2rem',
            borderRadius: "4px",
            color: "#fff",
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '525px',
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            <IconButton
              className="paymentClose"
              variant="text"
              onClick={handleModalClose}
              sx={{
                display: 'flex',
                marginLeft: '98%',
                marginTop: '2%',
              }}
            >
              <CloseRoundedIcon className="paymentClose" sx={{ color: '#8180809e', fontSize: '32px' }} />
            </IconButton>
            <Typography sx={{
              color: "#0b4548",
              marginBottom: '0.4rem',
              marginTop: '-1rem',
              textAlign: 'center',
              fontFamily: 'roboto',
              fontSize: '1.5rem'
            }}
            >
              How Can We Help You?
            </Typography>
          </div>
          <p style={{
            color: "#0b4548",
            marginBottom: '1rem',
            textAlign: "center",
          }}
          >
            Please add your contact info and a message below.
          </p>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Your Name"
              value={textInput1}
              onChange={handleTextInput1Change}
              fullWidth
              style={{ marginBottom: "1rem" }}
              InputLabelProps={{
                style: { color: "#8180809e" },
              }}
              InputProps={{
                style: { color: "black" },
              }}
            />
            <TextField
              label="Email or Phone"
              value={textInput2}
              onChange={handleTextInput2Change}
              fullWidth
              style={{ marginBottom: "1rem" }}
              InputLabelProps={{
                style: { color: "#8180809e" },
              }}
              InputProps={{
                style: { color: "#black" },
              }}
            />
            <TextField
              label="Message"
              value={textInput3}
              onChange={handleTextInput3Change}
              fullWidth
              style={{ marginBottom: "1rem" }}
              InputLabelProps={{
                style: { color: "#8180809e" },
              }}
              InputProps={{
                style: { color: "#black" },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              style={{
                marginLeft: 'calc(50% - 30px)'
              }}
            >
              Send
            </Button>
          </form>
        </div>
      </Modal> */}
    </>
  )
}

export default Footer;