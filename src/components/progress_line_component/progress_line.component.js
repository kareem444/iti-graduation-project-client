import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useIsFetching, useIsMutating } from '@tanstack/react-query'

export default function ProgressLineComponent() {
    const isFetching = useIsFetching()
    const isMutating = useIsMutating()

    return (
        <>
            {(isFetching == true || isMutating == true) &&
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
            }
        </>
    );
}