import "../../game";
// import { useEffect } from "react";
import Key from "../Key";
// import { gameRef } from "../../game";
import { useAppSelector } from "../../store/hooks";
import {
  ApBoltBottomLeft,
  ApBoltBottomRight,
  ApBoltUpLeft,
  ApBoltUpRight,
} from "../../Icon";

const Home = () => {
  const left = useAppSelector((state) => state.game.left);
  const level = useAppSelector((state) => state.game.level);
  const isInPlay = useAppSelector((state) => state.game.isInPlay);
  // const isWon = useAppSelector((state) => state.game.isWon);
  const timesPlayed = useAppSelector((state) => state.game.timesPlayed);

  console.log(isInPlay, "isInplay");

  return (
    <div className="home page w-full main-height mb-4 md:mb-7 lg:mb-0 border lg:flex flex-col border-gray rounded-b-lg lg:rounded-none  overflow-scroll py-20">
      <div className="my-auto">
        <div className="flex justify-center items-center xl:gap-x-12">
          <div className="intro w-4/5 lg:w-1/3">
            <p className="text-white text-xs font-medium">Hi, I'm</p>
            <p className="text-white text-5xl md:text-6xl lg:text-4xl my-2">
              Abdulmuizz Hamzat
            </p>
            <p className="text-green text-xl lg:text-cyan xl:text-lg font-medium mb-72 lg:mb-12">
              &gt; Full-stack Software Engineer
            </p>

            <div className="text-xs font-medium">
              <p className="hidden xl:block">
                // Never hurts to play a game before you continue...
              </p>
              <p className="my-2">// Take a sneak peek at my github profile</p>
              <p>
                <span className="text-cyan">const</span>{" "}
                <span className="text-green">githubLink</span>{" "}
                <span className="text-white">=</span>{" "}
                <a
                  className="text-red hover:underline"
                  href="https://github.com/abdulmuizz98"
                >
                  "https://github.com/abdulmuizz98";
                </a>
              </p>
            </div>
          </div>
          <div className="game-container relative hidden lg:block">
            <span className="absolute top-2 left-2">
              <ApBoltUpLeft />
            </span>
            <span className="absolute top-2 right-1">
              <ApBoltUpRight />
            </span>
            <span className="absolute bottom-2 left-2">
              <ApBoltBottomLeft />
            </span>
            <span className="absolute bottom-2 right-1">
              <ApBoltBottomRight />
            </span>
            <div className="game-body lg:flex my-6 mx-7 justify-between">
              <div className="game-grid bg-blue relative rounded-lg">
                {!timesPlayed && !isInPlay && (
                  <button
                    onClick={() => {
                      // gameRef.play();
                    }}
                    type="button"
                    className="alt-custom-btn-1 start-btn absolute center-x top-3/4 z-10"
                  >
                    start-game
                  </button>
                )}
                {!isInPlay && timesPlayed && left ? (
                  <>
                    <p className="text-green bg-black absolute top-2/4 inline-block text-center py-1 text-lg w-full">
                      GAME OVER!
                    </p>
                    <button
                      type="button"
                      className="alt-custom-btn-2 start-btn absolute center-x top-44 z-10"
                    >
                      start-again
                    </button>
                  </>
                ) : null}
                {!left && !isInPlay ? (
                  <>
                    <p className="text-green bg-black absolute top-2/4 inline-block text-center py-1 text-lg w-full">
                      WELL DONE!
                    </p>
                    <button
                      type="button"
                      className="alt-custom-btn-2 start-btn absolute center-x top-44 z-20 text-white"
                    >
                      play-again
                    </button>
                  </>
                ) : null}
              </div>
              <div className="game-board text-11">
                <div className="help bg-blue bg-opacity-40 text-white rounded-lg">
                  <p className=" pl-2 pt-2">
                    // use keyboard
                    <br />
                    // arrows to play
                  </p>
                  <div className="key-container mt-2">
                    <div className="flex item-center justify-center">
                      <Key position="up" />
                    </div>
                    <div className="flex item-center justify-center mt-1 gap-1 pb-2">
                      <Key position="left" />
                      <Key position="down" />
                      <Key position="right" />
                    </div>
                  </div>
                </div>
                <div className="food-left text-white">
                  <p className=" pl-2 pt-2">// food left:</p>
                  <div className="mt-2 text-orange text-5xl text-center">
                    {left}
                  </div>
                </div>
                <div className="level text-white">
                  <p className=" pl-2 pt-2">// level:</p>
                  <div className="mt-2 text-cyan text-5xl text-center">
                    {level}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
