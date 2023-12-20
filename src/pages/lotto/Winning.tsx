import {Avatar, Button, Card, CardContent, Typography} from "@mui/joy";

const Winning = () => {
    return (
        <Card sx={{ width: 320 }}>
            <div>
                <Typography level="title-lg">제 1097 회 </Typography>
                <Typography level="body-sm">April 24 to May 02, 2021</Typography>
            </div>
            <CardContent orientation="horizontal">
                <div>
                    <Typography level="body-xs">Total price:</Typography>
                    <Typography fontSize="lg" fontWeight="lg">
                        $2,900
                    </Typography>
                </div>
                <Button
                    variant="solid"
                    size="md"
                    color="primary"
                    aria-label="Explore Bahamas Islands"
                    sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                >
                    Explore
                </Button>
            </CardContent>
        </Card>
    );
};



export default Winning;