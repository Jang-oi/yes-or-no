import React from 'react';
import {Box, Card, CardContent, Stack, Typography} from "@mui/joy";
import NumberCircle from "./NumberCircle";

interface LottoItem {
    발행일: string,
    추첨일: string,
    지급기한: string,
    number: number[]
}

interface LottoCardProps {
    LottoItem: LottoItem,
}

const LottoCard = ({LottoItem}: LottoCardProps) => {

    const {추첨일, 발행일, 지급기한, number} = LottoItem;

    return (
        <Card sx={{margin: '30px'}}>
            <Box sx={{textAlign: 'center', mb: '10px'}}>
                <Typography level="h2">제 1098 회 </Typography>
            </Box>
            <Box sx={{mb: '30px'}}>
                <Typography level="title-md">추첨일 : {추첨일}</Typography>
                <Typography level="title-md">발행일 : {발행일}</Typography>
                <Typography level="title-md">지급기한 : {지급기한}</Typography>
            </Box>
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                {number.map(lottoNumber => (
                    <NumberCircle number={lottoNumber}/>
                ))}
            </Stack>
        </Card>
    );
};

export default LottoCard;