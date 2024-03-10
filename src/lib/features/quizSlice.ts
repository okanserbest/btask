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
    status: "INITIAL" | "LOADING" | "IN_PROGRESS" | "QUIZ_COMPLETED";
    canRespond: boolean;
}

const initialState: QuestionState = {
    step: 0,
    questions: [],
    status: "INITIAL",
    canRespond: false,
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
            state.canRespond = false;
            if (state.step === state.questions.length) state.status = "QUIZ_COMPLETED";
        },
        changeAnswer: (state, action: PayloadAction<number>) => {
            state.questions[state.step].answerIndex = action.payload;
        },
        changeCanRespond: (state, action: PayloadAction<boolean>) => {
            state.canRespond = action.payload;
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuestion.pending, (state) => {
                state.status = 'LOADING';
            })
            .addCase(fetchQuestion.fulfilled, (state, action) => {
                state.questions = action.payload;
                state.step = 0;
                state.canRespond = false;
                state.status = "IN_PROGRESS";
            });
    },
});

export const { incrementStep, changeAnswer, changeCanRespond } = productSlice.actions;

export default productSlice.reducer;
