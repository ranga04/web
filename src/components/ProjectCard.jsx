import React from "react";

const ProjectCard = ({ title, description, image, video }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-moderateBlue text-veryLightGray">
      {image && <img className="w-full" src={image} alt={title} />}
      {video && (
        <video className="w-full" controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-lightGrayishBlue text-base">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
