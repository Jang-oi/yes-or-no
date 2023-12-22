import React from 'react';
import {Avatar, Chip, Typography} from "@mui/joy";

interface NumberCircleProps {
    number: number
}

const NumberCircle = ({number}: NumberCircleProps) => {

    const getNumberColor = (lottoNum: number) => {

        let color;
        if (lottoNum <= 10) {
            color = '#fbc400';
        } else if (lottoNum <= 20) {
            color = '#69c8f2';
        } else if (lottoNum <= 30) {
            color = '#ff7272';
        } else if (lottoNum <= 40) {
            color = '#aaa';
        } else {
            color = '#b0d840';
        }
        return color
    }

    // return <Chip size='lg' sx={{margin: '5px', borderRadius: '50%', backgroundColor: getNumberColor(number), color: 'white'}}>{number}</Chip>
    return <Avatar sx={{ bgcolor: getNumberColor(number)}}>{number}</Avatar>
};

export default NumberCircle;