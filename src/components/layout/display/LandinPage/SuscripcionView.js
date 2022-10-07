import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import BasicButtons from '../../../forms/Buttons';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./SuscripcionViewStyles";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function SuscripcionView() {
  return (
    <Box>
        <div
            style={{
              width: '600px',
              height: '200px',
            }}
        >
            <h1>Si, es posible y fácil</h1>
            <h5>Comienza hoy a sembrar tu vida porque nosotros nos encargamos de hacerlo posible. Elimina el ruido y escógenos como tu único aliado.</h5>
            <BasicButtons />
        </div>
        <div
            style={{
              width: '600px',
              height: '200px',
            }}
        >
            <h1 sx={{ fontColor: 'black' }} >Disfruta comprando tu futuro hogar</h1>
            <h5>No te pierdas de las últimas novedades que hemos encontrado para ti</h5>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <BasicButtons />
        </div>
    </Box>
  );
}

// sx={{
//   flexGrow: 1,
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   height: '200px',
//   width: '1200px',
//   background: '#6A8D73',
//   color: 'white',
//   fontSize: '20px',
//   fontWeight: 'bold',
//   fontFamily: 'Roboto',
//   fontColor: 'black',
//   borderRadius: '10px',
//   boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
//   margin: '20px',
//   padding: '20px',
//   }}