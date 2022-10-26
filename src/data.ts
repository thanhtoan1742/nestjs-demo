import { Class } from './student/student.service';

let ID_COUNTER = 20;
const CLASSES: Map<string, Class[]> = new Map([
  [
    '1910617',
    [
      {
        id: '10',
        courseId: '1',
        classRoom: '104H1',
        startPeriod: 6,
        endPeriod: 8,
        weekDay: 'mon',
        weeks: [40, 41, 42, 43],
      },
      {
        id: '20',
        courseId: '2',
        classRoom: '302H6',
        startPeriod: 2,
        endPeriod: 5,
        weekDay: 'tue',
        weeks: [40, 41, 42, 43, 44, 45],
      },
    ],
  ],
]);

export function getClassesByStudent(studentId: string): Class[] {
  return CLASSES.get(studentId);
}

export function getClassByStudent(studentId: string, classId: string): Class {
  const classes = CLASSES.get(studentId);
  for (const cl of classes) if (cl.id === classId) return cl;

  return undefined;
}

export function createClassForStudent(studentId: string, cl: Class): Class {
  const id = (++ID_COUNTER).toString();
  cl.id = id;
  CLASSES.get(studentId).push(cl);
  return cl;
}

export function updateClassForStudent(studentId: string, newCl: Class): Class {
  for (let i = 0; i < CLASSES.get(studentId).length; i++)
    if (CLASSES.get(studentId)[i].id == newCl.id) {
      CLASSES.get(studentId)[i] = newCl;
      return newCl;
    }
  return undefined;
}
