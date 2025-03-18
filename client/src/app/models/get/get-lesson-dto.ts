import { GetWordDto } from "./get-word-dto";

export class GetLessonDto {
    id: number = 0;
    polishName: string = ''
    englishName: string = ''
    categoryId: number = 0;
    wordsDto: GetWordDto[] = [];
}