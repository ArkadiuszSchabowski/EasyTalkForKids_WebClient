import { GetWordDto } from "./get-word-dto";

export class GetLessonDto {
    id: number = 0;
    topicId: number = 0;
    categoryId: number = 0;
    wordsDto: GetWordDto[] = [];
}