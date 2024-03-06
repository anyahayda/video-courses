import { CourseModel } from '../features/courses/models/course.model';


export const courseData: CourseModel[] = [
  {
    id: 1,
    title: 'Video Course 1',
    creationDate: new Date(2023, 9, 25),
    duration: 28,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
      'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
      'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ' +
      'dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia ' +
      'deserunt mollit anim id est laborum.',
    toRated: true,
  },
  {
    id: 2,
    title: 'Video Course 2',
    creationDate: new Date(2024, 6, 13),
    duration: 10,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
      'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
      'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ' +
      'dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia ' +
      'deserunt mollit anim id est laborum.',
    toRated: false,
  },
  {
    id: 3,
    title: 'Video Course 3',
    creationDate: new Date(2023, 11, 14),
    duration: 70,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
      'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
      'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ' +
      'dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia ' +
      'deserunt mollit anim id est laborum.',
    toRated: true,
  },
];
