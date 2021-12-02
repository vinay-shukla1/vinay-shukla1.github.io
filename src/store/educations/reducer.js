// import { FETCH_PROGRAMMINGSKILLS } from "./actionType";

const initialState = {
  educations: [
    {
      education: {
        date: "Magento Plus Certified Developer",
        description:
          "Certification in top ecommerce framework",
      },
    },
    {
      education: {
        date: "Zend Certified Developer && Zend Framework Certified Developer",
        description:
          "certification in php framework with Zend Tech",
      },
    },
    {
      education: {
        date: "2005 - 2008",
        description:
          "Master in Computer Application",
      },
    },
    {
      education: {
        date: "2003 - 2005",
        description: "Batchler in Science",
      },
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
