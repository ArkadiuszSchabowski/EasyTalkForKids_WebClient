import { GetLessonDto } from "./get-lesson-dto";

export class GetCategoryDto {
    id: number = 0;
    name: string = '';
    lessons: GetLessonDto[] = [];
}