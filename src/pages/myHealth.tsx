import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const MyHealth = () => {
    return (
        <div>
            <div>
                <Box sx={{ marginY: '14px', justifyContent: 'center' }}>
                    <Box sx={{ borderBottom: 1, marginX: '10px' }} >
                        <h1>
                            <strong>My Health</strong>
                        </h1>
                    </Box>
                </Box>
            </div >
            <div>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Box sx={{ borderRadius: '16px', display: 'flex', bgcolor: 'grey.500', justifyContent: 'center', alignItems: 'center', marginX: '14px', height: '150px', width: '170px' }}>
                            <Link to="/asd">
                                <Typography sx={{ color: 'white' }} >Personal <br />Information</Typography>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ borderRadius: '16px', display: 'flex', bgcolor: 'grey.500', justifyContent: 'center', alignItems: 'center', marginX: '14px', height: '150px', width: '170px' }}>
                            <Link to="/asd">
                                <Typography sx={{ color: 'white' }} >Medical <br />Benefits</Typography>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ borderRadius: '16px', display: 'flex', bgcolor: 'grey.500', justifyContent: 'center', alignItems: 'center', marginX: '14px', height: '150px', width: '170px' }}>
                            <Link to="/asd">
                                <Typography sx={{ color: 'white' }} >Medical <br />History</Typography>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ borderRadius: '16px', display: 'flex', bgcolor: 'grey.500', justifyContent: 'center', alignItems: 'center', marginX: '14px', height: '150px', width: '170px' }}>
                            <Link to="/asd">
                                <Typography sx={{ color: 'white' }} >Appointments</Typography>
                            </Link>
                        </Box>
                    </Grid>

                </Grid>
            </div>
            <div>
                <Box sx={{ display: 'absolute', margin: '14px' }}>
                    <Stack spacing={1}>
                        <Box sx={{ borderRadius: 2, border: 1, borderColor: '#61E5FF' }}>
                            <Stack direction="row" spacing={1}>
                                <Box sx={{ borderRadius: 1, borderLeft: 4, borderColor: '#61E5FF', paddingY: '1px', display: 'block', paddingX: '5px', justifyContent: 'center' }}>
                                    <strong>12</strong> <br />June
                                </Box>
                                <Stack direction="column" spacing={0.25}>
                                    <Box sx={{ paddingX: '10px' }}>
                                        Visit <strong> Dr. Kittipong Tapy</strong>
                                    </Box>
                                    <Stack direction="column">
                                        <Box sx={{ paddingX: '10px' }}>
                                            15.00 - 16.00
                                        </Box>
                                        <Box sx={{ paddingX: '10px', fontSize: 12 }}>
                                            Phraram 2 Hospital
                                        </Box>

                                    </Stack>
                                </Stack>
                            </Stack>
                        </Box>

                        <Box sx={{ borderRadius: 2, border: 1, borderColor: '#61E5FF' }}>
                            <Stack direction="row" spacing={1}>
                                <Box sx={{ borderRadius: 1, borderLeft: 4, borderColor: '#61E5FF', paddingY: '1px', display: 'block', paddingX: '5px', justifyContent: 'center' }}>
                                    <strong>25</strong> <br />June
                                </Box>
                                <Stack direction="column" spacing={0.25}>
                                    <Box sx={{ paddingX: '10px' }}>
                                        Visit <strong> Dr. Wongsatorn Sungsil</strong>
                                    </Box>
                                    <Box sx={{ paddingX: '10px' }}>
                                        15.00 - 16.00
                                    </Box>
                                </Stack>
                            </Stack>
                        </Box>


                    </Stack>


                </Box>
            </div>
        </div>

    );
}