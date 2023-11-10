
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function RatingCard(){
    return(
        <Stack spacing={1}>
            <Rating 
                sx={{
                    'color': 'black',
                }}
                name="size-small"
                precision={0.5} 
                defaultValue={4.5}
                size="small" 
            />
        </Stack>
    );
}