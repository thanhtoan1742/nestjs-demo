import { CacheKey, Injectable } from '@nestjs/common';
import {
  createClassForStudent,
  deleteClassForStudent,
  getClassByStudent,
  getClassesByStudent,
  updateClassForStudent,
} from 'src/data';

export interface Class {
  id: string;
  courseId: string;
  weekDay: string;
  startPeriod: number;
  endPeriod: number;
  classRoom: string;
  weeks: number[];
}

@Injectable()
export class StudentService {
  getClassesByStudent(studentId: string): Class[] {
    return getClassesByStudent(studentId);
  }

  getClassByStudent(studentId: string, classId: string): Class {
    return getClassByStudent(studentId, classId);
  }

  createClassForStudent(studentId: string, cl: Class): Class {
    return createClassForStudent(studentId, cl);
  }

  updateClassForStudent(studentId: string, classId: string, cl: Class): Class {
    cl.id = classId;
    return updateClassForStudent(studentId, cl);
  }

  deleteClassForStudent(studentId: string, classId: string): string {
    return deleteClassForStudent(studentId, classId);
  }
}
