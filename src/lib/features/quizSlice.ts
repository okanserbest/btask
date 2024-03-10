import getRandomElements from "@/utils/getRandomElements";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Question {
    id: number;
    questionText: string;
    options: string[];
    answerIndex: number;

}

export interface QuestionState {
    step: number;
    questions: Question[];
    startTime?: number;
    endTime?: number;
    status: "INITIAL" | "LOADING" | "IN_PROGRESS" | "QUIZ_COMPLETED";
}

interface ChangeAnswer {
    questionIndex: number;
    answerIndex: number;
}

const initialState: QuestionState = {
    step: 0,
    questions: [],
    status: "INITIAL",
};

// Async Thunk action oluşturma
export const fetchQuestion = createAsyncThunk("quiz/fetchQuery", async () => {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );
    const data = await response.json();

    const rondomQuestion = getRandomElements(data, 10);

    const questions: Question[] = rondomQuestion.map((item: any, index: number) => {
        const options = item.body.split('\n');
        return {
            id: item.id,
            questionText: item.title,
            options: options,
            answerIndex: -1,
        };
    });

    return questions;
});

export const productSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        incrementStep: (state) => {
            state.step += 1;
            if (state.step === state.questions.length) state.status = "QUIZ_COMPLETED";
        },
        changeAnswer: (state, action: PayloadAction<ChangeAnswer>) => {
            state.questions[action.payload.questionIndex].answerIndex = action.payload.answerIndex;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuestion.pending, (state) => {
                state.status = 'LOADING';
            })
            .addCase(fetchQuestion.fulfilled, (state, action) => {
                state.questions = action.payload;
                state.status = "IN_PROGRESS";
            });
    },
});

export const { incrementStep, changeAnswer } = productSlice.actions;

export default productSlice.reducer;
