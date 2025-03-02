import { AddLessonDto } from "./add-lesson-dto";

export class AddCategoryDto {
    name: string = '';
    lessons: AddLessonDto[] = [];
}