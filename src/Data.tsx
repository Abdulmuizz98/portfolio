const personalInfoData = {
  bio: {
    name: "bio",
    payload: [
      {
        highlight: "profile",
        content: `const button = document.querySelector('#sendBtn');

      const message = {
          name: "",
          email: "",
          message: "",
          date: "",
      }
      
      button.addEventListener('click', () => {
        form.send(message);
      })`,
      },
      {
        highlight: "skills",
        content:
          "Lorem ipsum dolor amet and askdjfaslk ajdkfjs  akdfjas lfjdlf a",
      },
    ],
  },
  interests: {
    name: "interests",
    payload: [
      {
        highlight: "hobbies",
        content:
          "Lorem ipsum dolor amet and askdjfaslk ajdkfjs  akdfjas lfjdlf a",
      },
      {
        highlight: "software-engineering",
        content:
          "Lorem ipsum dolor amet and askdjfaslk ajdkfjs  akdfjas lfjdlf a",
      },
    ],
  },

  education: {
    name: "education",
    payload: [
      {
        highlight: "high-school",
        content:
          "Lorem ipsum dolor amet and askdjfaslk ajdkfjs  akdfjas lfjdlf a",
      },
      {
        highlight: "university",
        content:
          "Lorem ipsum dolor amet and askdjfaslk ajdkfjs  akdfjas lfjdlf a",
      },
    ],
  },
};

export const { bio, interests, education } = personalInfoData;
