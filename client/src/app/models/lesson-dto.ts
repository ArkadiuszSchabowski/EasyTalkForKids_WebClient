import { WordDto } from "./word-dto";

export class LessonDto {
    id: number | null = null;
    wordsDto: WordDto[] = [];
}