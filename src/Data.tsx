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
        contentSmScreen:
          "Lorem ipsum dolor amet and askdjfaslk ajdksakddfds adlLorem ipsum dolor amet and askdjfaslk ajdksaka dlLorem ipsum dolor amet and askdjfaslk ajdksaka dlLorem ipsum dolor amet and askdjfaslk ajdksak adlLorem ipsum dolor amet and askdjfaslk ajdksa kadlLorem ipsum dolor amet and askdjfaslk ajdksakadl  ",
        contentLgScreen: `/**
 * Skills
 * Lorem ipsum dolor amet and askdjfaslk ajdksakadl afjdhasd dsfsaa
 * fjdlf a Lorem ipsum dolor amet and askdjfksakadl afjdhasd dsfsaa 
 * akdfjas lfjdlf aLorem ipsum  dolor amet ansakadl afjdhasd dsfsaa
 * ajdkfjs  akdfjas lfjdlf aLorem ipsum dolorsakadl afjdhasd dsfsaa
 * ajdkfjs  akdfjas lfjdlf aLorem ipsum dolorsakadl afjdhasd dsfsaa
 * ajdkfjs  akdfjas lfjdlf aLorem ipsum dolorsakadl afjdhasd dsfsaa
 * ajdkfjs  akdfjas lfjdlf aLorem ipsum dolorsakadl afjdhasd dsfsaa
 * 
 * ajdkfjs  akdfjas lfjdlf aLorem ipsum dolorsakadl afjdhasd dsfsaa
 * ajdkfjs  akdfjas lfjdlf aLorem ipsum dolorsakadl afjdhasd dsfsaa
 * ajdkfjs  akdfjas lfjdlf aLorem ipsum dolorsakadl afjdhasd dsfsaa
 * ajdkfjs  akdfjas lfjdlf a
 */ `,
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
