// import { FETCH_PROGRAMMINGSKILLS } from "./actionType";

const initialState = {
  progSkills: [
    {
      skills: {
        name: "javascript",
        rating: 91,
      },
    },
    {
      skills: {
        name: "css",
        rating: 86,
      },
    },
    {
      skills: {
        name: "javascript",
        rating: 95,
      },
    },
    {
      skills: {
        name: "php",
        rating: 85,
      },
    },
    {
      skills: {
        name: "HTML",
        rating: 85,
      },
    },
    {
      skills: {
        name: "DART",
        rating: 76,
      },
    },
  ],
  frontEnd: [
    {
      skills: {
        name: "Angular RC1 to IVY(Angular 9)",
        rating: 95,
      },
    },
    {
      skills: {
        name: "React",
        rating: 90,
      },
    },
    {
      skills: {
        name: "Flutter",
        rating: 80,
      },
    },
    {
      skills: {
        name: "AngularJs",
        rating: 60,
      },
    },
    {
      skills: {
        name: "NGRX",
        rating: 90,
      },
    },
    {
      skills: {
        name: "redux",
        rating: 88,
      },
    },
    {
      skills: {
        name: "react native",
        rating: 80,
      },
    },
    {
      skills: {
        name: "expo",
        rating: 77,
      },
    },
    {
      skills: {
        name: "ADA compliance",
        rating: 87,
      },
    },
  ],
  backEnd: [
    {
      skills: {
        name: "node js",
        rating: 95,
      },
    },
    {
      skills: {
        name: "laravel",
        rating: 90,
      },
    },
    {
      skills: {
        name: "express",
        rating: 89,
      },
    },
    {
      skills: {
        name: "Symfony",
        rating: 85,
      },
    },
    {
      skills: {
        name: "mongoDb",
        rating: 87,
      },
    },
    {
      skills: {
        name: "mongoose",
        rating: 84,
      },
    },
    {
      skills: {
        name: "My Sql",
        rating: 89,
      },
    },
    {
      skills: {
        name: "firebase",
        rating: 80,
      },
    },
    {
      skills: {
        name: "Magento",
        rating: 80,
      },
    },
    {
      skills: {
        name: "postgresql",
        rating: 88,
      },
    },
    {
      skills: {
        name: "mysql",
        rating: 88,
      },
    },
    {
      skills: {
        name: "redis",
        rating: 88,
      },
    },
  ],
  others: [
    {
      skills: {
        name: "github",
        rating: 90,
      },
    },
    {
      skills: {
        name: "mac terminal",
        rating: 83,
      },
    },
    {
      skills: {
        name: "windows Command",
        rating: 80,
      },
    },
    {
      skills: {
        name: "linux terminal",
        rating: 83,
      },
    },
    {
      skills: {
        name: "eclipse",
        rating: 70,
      },
    },
    {
      skills: {
        name: "visual studio",
        rating: 85,
      },
    },
    {
      skills: {
        name: "aws server",
        rating: 80,
      },
    },
    {
      skills: {
        name: "docker",
        rating: 78,
      },
    },
    {
      skills: {
        name: "microservice",
        rating: 83,
      },
    },
    {
      skills: {
        name: "monolith",
        rating: 87,
      },
    },
    {
      skills: {
        name: "jest",
        rating: 85,
      },
    },
    {
      skills: {
        name: "wordpress",
        rating: 85,
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
