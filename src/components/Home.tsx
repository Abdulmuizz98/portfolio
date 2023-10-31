const Home = () => {
  return (
    <div className="flex h-full w-full  justify-center items-center  xl:gap-x-12 xxl:gap-x-24">
      <div className="intro w-4/5 xl:w-auto">
        <p className="text-white text-lg font-medium">Hi all, I am</p>
        <p className="text-white text-5xl md:text-6xl xl:text-5xl xxl:text-6xl my-4">
          Abdulmuizz Hamzat
        </p>
        <p className="text-green text-xl xl:text-cyan xl:text-2xl xxl:text-3xl font-medium mb-40 xl:mb-20">
          &gt; Full-stack Software Engineer
        </p>

        <p className="hidden xl:block font-medium text-sm xl:text-base">
          // Never hurts to play a game before you continue...
        </p>
        <p className="my-2 font-medium text-sm xl:text-base">
          // Take a sneak peek at my github profile
        </p>
        <p className="font-medium text-sm xl:text-base">
          <span className="text-cyan">const</span>{" "}
          <span className="text-green">githubLink</span>{" "}
          <span className="text-white">=</span>{" "}
          <a className="text-red" href="https://github.com/abdulmuizz98">
            "https://github.com/abdulmuizz98"
          </a>
        </p>
      </div>
      <div className="game-container b-test hidden xl:block"></div>
    </div>
  );
};

export default Home;
