import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardTitle from './card_title';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DoneIcon from '@mui/icons-material/Done';

const Education = () => {
    return <Container>
      <Box sx={{position: "relative", top: -70}} id="education" />
      <Card sx={{ my: 2 }}>
        <CardTitle text="Education" />
        <CardContent sx={{mx: 2}}>
            <Box>
              <Typography>
                <strong>Solidity Bootcamp - Encode Club (currently)</strong>
              </Typography>
              <Typography sx={{mx: 4}}>
                An intensive, 8-week coding bootcamp to learn Solidity.
              </Typography>
            </Box>
            <Box>
              <Typography>
                <strong>Damn Vulnerable Defi:</strong> is a wargame to learn offensive security of DeFi smart contracts in Ethereum.
              </Typography>
              <Typography sx={{mx: 4}}>
                <DoneIcon sx={{width: 15, height: 15}}/>
                &nbsp;
                Completed the 15 challenges. <a href="https://github.com/LuchoLeonel/Damn-Vulnerable-Defi" target="_blank" rel="noreferrer">Github Repository</a>
                </Typography>
            </Box>
            <Box>
              <Typography>
                <strong>Ethernaut:</strong> is a Web3/Solidity based wargame created by Open Zeppelin, played in the EVM.
              </Typography>
              <Typography sx={{mx: 4}}>
                <DoneIcon sx={{width: 15, height: 15}}/>
                &nbsp;
                Completed the 28 challenges. <a href="https://github.com/LuchoLeonel/Ethernaut-Open-Zeppelin" target="_blank" rel="noreferrer">Github Repository</a>
              </Typography>
            </Box>
            <Box>
              <Typography>
                <strong>CTF Defi Security Summit Standford:</strong> is a Smart Contract Security Capture the Flag Workshop by Secureum.
              </Typography>
              <Typography sx={{mx: 4}}>
                <DoneIcon sx={{width: 15, height: 15}}/>
                &nbsp;
                Completed the 4 challenges. <a href="https://github.com/LuchoLeonel/DeFi-Security-Summit-Stanford" target="_blank" rel="noreferrer">Github Repository</a>
              </Typography>
            </Box>
        </CardContent>
      </Card>
    </Container>
}

export default Education;