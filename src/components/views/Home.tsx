const Home = () => {
  return (
    <div className="home w-full main-height mb-4 md:mb-7 lg:mb-0 border lg:flex flex-col border-gray rounded-b-lg lg:rounded-none  overflow-scroll py-20">
      <div className="my-auto">
        <div className="flex justify-center items-center xl:gap-x-12">
          <div className="intro w-4/5 xl:w-1/3">
            <p className="text-white text-xs font-medium">Hi, I'm</p>
            <p className="text-white text-5xl md:text-6xl xl:text-4xl my-2">
              Abdulmuizz Hamzat
            </p>
            <p className="text-green text-xl xl:text-cyan xl:text-lg font-medium mb-40 xl:mb-12">
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
          <div className="game-container hidden xl:block w-96 h-96 border border-green"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
