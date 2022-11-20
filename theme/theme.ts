import {createTheme} from '@mui/material';

const theme =createTheme({
    typography:{
        fontFamily:'Circular Std',
        h1:{
            fontSize:'32px',
            lineHeight:'38px',
            fontStyle:'normal',
            color:'#fff'
        },
        h2:{

        },
        subtitle1:{
            fontSize:'14px',
            fontWeight:700,
            fontStyle:'normal',
            lineHeight:'16px',
            color:'#fff'
        },
    },
    palette: {
        primary: {
          main: '#000',
        },
        secondary:{
            main:'#fff',
        }
    },
})

export default theme;