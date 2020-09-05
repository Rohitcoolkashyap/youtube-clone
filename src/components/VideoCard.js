import React from "react";
import Avatar from "@material-ui/core/Avatar";
export default function VideoCard({
  image,
  channel,
  channelImage,
  timestamp,
  title,
  views,
}) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt="" />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} * {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}
