import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Зу-ль-Карнайн",
    content: "Зу́-ль-Ка́рнайн (араб. ذو القرنين‎ — «обладатель двух рогов», «двурогий»[1]) — праведник и великий царь, воздвигший стену, защищающую от народов Яджудж и Маджудж. Имя Зу-ль-Карнайн четырежды упомянуто в восемнадцатой суре Корана[2].",
    user: "0",
    date: sub(new Date(), {minutes: 1000}).toISOString()
  },
  {
    id: "2",
    title: "Имя и Прототип",
    content: "Зу-ль-Карнайн в переводе с арабского означает «обладающий двумя рогами». Точное толкование имени Зу-ль-Карнайна неизвестно. Одни называют «рогами солнца» восток и запад, другие объясняют это тем, что он владел Румом и Персией, третьи наличием на его лбу рожек или шишек[3].",
    user: "1",
    date: sub(new Date(), {minutes: 3660}).toISOString()
  },
  {
    id: "3",
    title: "Имя и Прототип. Продолжение.",
    content: "Согласно некоторым преданиям, имя Зу-ль-Карнайна было «Искандер», из-за чего его обычно отождествляли с Александром Македонским («Искандером Двурогим»), который к тому же был изображён на монетах как воплощение рогатого бога Зевса-Амона. Другие видят прототип Зу-ль-Карнайна в Кире Великом или Соломоне; некоторые современные исследователи считают, что прототипом мог быть даже византийский император Ираклий I.",
    user: "2",
    date: sub(new Date(), {minutes: 12}).toISOString()
  }
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId
          }
        };
      }
    },
    postDeleted(state, action) {
      state.splice(action.payload, 1);
    },
    postUpdated(state, action) {
      const currentPost = state.find((post) => post.id === action.payload.id);
      if (currentPost) {
        currentPost.title = action.payload.title;
        currentPost.content = action.payload.content;
      }
    }
  }
});

export const { postAdded, postDeleted, postUpdated } = postsSlice.actions;
export default postsSlice.reducer;
