import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Head2 } from "../theme";

export default function CardTitle({text, ...props}) {
  const theme = useTheme();

  return(<Box {...props} sx={{ p: 2, borderBottom: "2px solid", borderColor: theme?.palette?.primary?.main }}>
    <Head2>{ text }</Head2>
  </Box>)
}
