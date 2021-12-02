// import { FETCH_PROGRAMMINGSKILLS } from "./actionType";

const initialState = {
  workExperiences: [
    {
      name: "Confidential",
      location: "Delhi",
      duration: "Jan 2017 - now",
      title: "Lead Developer",
      responsibles:
        "",
    },
    {
      name: "Happiest Mind (Osscube)",
      location: "Noida",
      duration: "Mar 2011 - July 2015",
      title: "Sr. Software Engineer",
      responsibles: "",
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
