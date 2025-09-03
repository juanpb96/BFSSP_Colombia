"use client";
import React from "react";
import Image from "next/image";
import { Community } from "../types/types";

interface CommunityCardProps {
  community: Community;
}

export const CommunityCard = ({ community }: CommunityCardProps) => {
  const [displayImage, setDisplayImage] = React.useState(false);

  return (
    <>
      <p>{community.name}</p>
      <p>{community.description}</p>
      <p>{community.languages}</p>
      {community.images && displayImage && (
        <Image
          src={community.images[0]}
          alt=""
          onLoad={() => setDisplayImage(true)}
        />
      )}
    </>
  );
};
