import {Avatar, Box, Button, Card, CardContent, Chip, Grid, Typography} from "@mui/joy";
import LottoCard from "../../components/lotto/LottoCard";

const Winning = () => {

    const abc = [{발행일 : '2023년 12월 10일',추첨일 : '2023년 12월 16일', 지급기한 : '2024년 12월 24일', number : [12,16,21,24,41,43]}]
    
    return (
        <Grid container>
            {abc.map(lottoItem => (
                <Grid xs={12} sm={12} md={12} lg={12}>
                    <LottoCard LottoItem={lottoItem}/>
                </Grid>
            ))}
        </Grid>
    );
};


export default Winning;