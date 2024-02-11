import userImage from "../../../assets/user image.png";
import { FC, useState } from "react";
interface ShowcaseFeedProp {
  image: string;
  alt: string;
  comment: string;
}

const ShowcaseFeed: FC<ShowcaseFeedProp> = ({ image, alt, comment }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="mb-5">
      <div className="profile-info flex gap-3">
        <img
          src={userImage}
          alt="profile picture"
          className="profile-pic w-[36px] h-[36px] rounded-[50%]"
        ></img>

        <div className="username ">
          <p className="text-cyan">Abdulmuizz Hamzat</p>
          <p>@abdulmuizz98</p>
        </div>
      </div>
      <div className="post rounded-[15px] bg-black my-4 h-64 w-full border border-gray p-5">
        <img
          className={`object-cover w-full h-full ${!isLoaded && "hidden"}`}
          src={image}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
        ></img>
        <div
          className={`flex animate-pulse items-center justify-center  border w-full h-full rounded ${
            isLoaded && "hidden"
          } `}
        >
          <svg
            className="w-10 h-10 text-gray-200  dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      </div>
      <div className="comment border-t border-gray py-4">{comment}</div>
    </div>
  );
};

export default ShowcaseFeed;
