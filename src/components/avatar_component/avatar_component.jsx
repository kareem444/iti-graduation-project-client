import React from 'react';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

import { styled } from '@mui/material/styles';
const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
}));

const AvatarComponent = ({ src }) => {
    return (
        <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
                <div style={{ backgroundColor: "white", borderRadius: "100px" , padding:"5px" , border:"1px solid #888"}}>
                    <img src="https://img.icons8.com/ios/50/000000/camera--v4.png" height={20}/>
                </div>
            }
        >
            <Avatar src={src ?? "assets/user.png"} style={{ height: "150px", width: "150px" }} />
        </Badge>
    );
}

export default AvatarComponent;
