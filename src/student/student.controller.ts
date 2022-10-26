import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Class, StudentService } from './student.service';

@Controller('api/students')
export class StudentController {
  constructor(private readonly service: StudentService) {}

  @Get(':studentId/classes')
  getAllClassByStudent(@Param('studentId') studentId: string): Class[] {
    return this.service.getClassesByStudent(studentId);
  }

  @Get(':studentId/classes/:classId')
  getClassByStudent(
    @Param('studentId') studentId: string,
    @Param('classId') classId: string,
  ): Class {
    return this.service.getClassByStudent(studentId, classId);
  }

  @Post(':studentId/classes')
  createClassForStudent(
    @Param('studentId') studentId: string,
    @Body() body: Class,
  ): Class {
    return this.service.createClassForStudent(studentId, body);
  }

  @Put(':studentId/classes/:classId')
  updateClassByStudent(
    @Param('studentId') studentId: string,
    @Param('classId') classId: string,
    @Body() body: Class,
  ): Class {
    return this.service.updateClassForStudent(studentId, classId, body);
  }

  @Delete(':studentId/classes/:classId')
  deleteClassByStudent(
    @Param('studentId') studentId: string,
    @Param('classId') classId: string,
  ): string {
    return 'deleted' + studentId + ':' + classId;
  }
}
