import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardTitle from './card_title';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Experience = () => {
    return <Container>
    <Box sx={{position: "relative", top: -70}} id="experience" />
      <Card sx={{ my: 2 }}>
        <CardTitle text="Full-Stack Developer - Constata.eu"/>
        <CardContent sx={{mx: 2}}>
            <Typography>
                <strong>Technologies: React & Rust</strong>
            </Typography>
            <Typography>
                <strong>Tasks developed (2021 - current)</strong>:
            </Typography>
            <Typography sx={{ml: 2}}>
                -Design of a KYC (Know Your Customer) system for sending requests, accepting and rejecting them.
            </Typography>
            <Typography sx={{ml: 2}}>
                -Creation of the mechanism for the user to exercise the right to be forgotten according to GDPR (General Data Protection Regulation) of the European Union.
            </Typography>
            <Typography sx={{ml: 2}}>
                -Creation of a back office panel with staggered access.
            </Typography>
            <Typography sx={{ml: 2}}>
                -Queries to the node, creation of transactions and automation of bumps.
            </Typography>
            <Typography sx={{ml: 2}}>
                -Use of bitcoin wallets to apply digital signatures as an authentication method.
            </Typography>
            <Typography sx={{ml: 2}}>
                -Database migrations for new features.
            </Typography>
            <Typography sx={{ml: 2}}>
                -Unit and integration tests for new features.
            </Typography>
        </CardContent>
      </Card>
    </Container>
}

export default Experience;