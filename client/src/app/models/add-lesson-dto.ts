import { AddWordDto } from "./add-word-dto";

export class AddLessonDto {
    topicId: number = 0;
    categoryId: number = 0;
    wordsDto: AddWordDto[] = [];
}