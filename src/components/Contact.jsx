import React from "react"
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Contact()
{

    return (
    <>
          <div className="col-10 mx-auto">
            <div className="About-head">
                Contact Me
            </div>
            <React.Fragment>
               <CssBaseline />
                <Container maxWidth="sm">
                  
                <Typography className="container" component="div" style={{ backgroundColor: '#d14760', height: '60vh',color:'white' }} >
                  <div className="contact">
                     <strong style={{color:"#6286f0"}}>E-mail:</strong>ambivaishali1998@gmail.com<br/>
                      <strong style={{color:"#6286f0"}}>Linkdin: </strong>vaishali-ambi-75b339159<br/>
                      <strong style={{color:"#6286f0"}}>Mobile: </strong>9665670148
                    </div>
          
                      </Typography>
                    </Container>
            </React.Fragment>

            

         </div>
    

    </>
    );
}   