export interface IResult {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export interface ITest {
    response_code: number;
    results: IResult[];
}
