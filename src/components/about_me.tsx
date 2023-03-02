import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardTitle from './card_title';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const AboutMe = () => {

    return <Container>
      <Box sx={{position: "relative", top: -70}} id="about-me" />
      <Card sx={{ my: 2 }} >
        <CardTitle text="About me"/>
        <CardContent sx={{mx: 2}}>
            <Typography>
              I'm a <strong>Full-Stack Developer</strong> at <strong>Constata.eu</strong>, a startup that certifies documents into the Bitcoin Blockchain. <a href="https://www.constata.eu" target="_blank" rel="noreferrer">Site here</a>.
            </Typography>
            <Typography>
              The main technologies I handle are: <strong>React, Rust & Solidity</strong>.
            </Typography>
            <Typography>
              My goal is to continue forming myself as a <strong>Web3 Developer</strong> into the Ethereum Blockchain and to become a <strong>Smart Contract Security Auditor</strong>.
            </Typography>
            <Typography>
              Love programming and learning every day about EVM. Currently doing the <strong>Encode Club Solidity Bootcamp</strong>.
            </Typography>
            <Typography>
              Also, I hold a <strong>Degree in Law</strong> from Argentina, which is currently the country where I reside.
            </Typography>
            <Typography>
              In case you are interested in my profile, <strong>you may reach out to me</strong> via the following email address: <a href="mailto:carrenoluciano@gmail.com">carrenoluciano@gmail.com</a>.
            </Typography>
        </CardContent>
      </Card>
    </Container>
    
}


export default AboutMe