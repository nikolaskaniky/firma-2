export const testReducer = (
  profileArray = [
    {
      label: "Desginer",
      isSelected: true,
      skills: [
        {
          name: "Photoshop",
          experience: 0,
          isSelected: false,
        },

        {
          name: "ADOBE XD",
          experience: 0,
          isSelected: false,
        },
      ],
    },

    {
      label: "Developer",
      isSelected: false,
      skills: [
        {
          name: "Reactjs",
          experience: 0,
          isSelected: false,
        },

        {
          name: "Angular",
          experience: 0,
          isSelected: false,
        },
      ],
    },
  ],
  action
) => {
  switch (action.type) {
    case "GET_USER_PROFILE":
      for (let i = 0; i < profileArray.length; i++) {
        profileArray[i].isSelected = false;
      }

      if (action.payload.isSelected === false) {
        action.payload.isSelected = true;
        return (profileArray = [...profileArray]);
      } else {
        action.payload.isSelected = false;
        return (profileArray = [...profileArray]);
      }

    default:
      return profileArray;
  }
};
