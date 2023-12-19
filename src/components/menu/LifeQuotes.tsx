import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";

export default function LifeQuotes() {
    return (
        <Box sx={{minWidth: 0, flex: 1}}>
            <Typography level="h4" sx={{mb: '10px'}}>오늘의 한 줄</Typography>
            <Typography level="title-md">행운은 눈이 멀지 않았다. 따라서 부지런하고 성실한 사람을 찾아간다. 앉아서 기다리는 사람에게는 영원히 찾아오지 않는다. 걷는
                사람만이 앞으로 나아갈 수 있다. 노력하는 사람에게 행운이 찾아온다.</Typography>
        </Box>
    );
}
