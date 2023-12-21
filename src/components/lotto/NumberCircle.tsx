import React from 'react';
import {Chip, Typography} from "@mui/joy";

interface NumberCircleProps {
    number: number
}

const NumberCircle = ({number}: NumberCircleProps) => {

    const getNumberColor = (lottoNum: number) => {

    }

    return (
        <Chip size='md'
              sx={{margin: '2px', borderRadius: '50%', backgroundColor: 'green', color: 'white'}}>{number}</Chip>
    );
};

export default NumberCircle;