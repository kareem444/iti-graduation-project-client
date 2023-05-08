import React from "react";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import userImage from "../../imported/images/user.png";
import { RepoUpdateMyProfile } from "../../repositories/user.repo";

const AvatarComponent = ({ src }) => {
    const { mutate } = RepoUpdateMyProfile()
    return (
        <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
                <div
                    style={{
                        backgroundColor: "white",
                        borderRadius: "100px",
                        padding: "5px",
                        border: "1px solid #888",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <img
                        src="https://img.icons8.com/ios/50/000000/camera--v4.png"
                        height={20}
                    />
                    <input
                        type="file"
                        accept="image/*"
                        style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            height: "150px",
                            opacity: "0",
                        }}
                        onChange={(e) => {
                            mutate({ file: e.target.files[0] })
                        }}
                    />
                </div>
            }
        >
            <Avatar
                src={src ?? userImage}
                style={{ height: "150px", width: "150px" }}
            />
        </Badge>
    );
};

export default AvatarComponent;
