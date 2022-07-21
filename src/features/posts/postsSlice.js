import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Bioinformatics. Part II",
    content: "Bioinformatics (/ˌbaɪ.oʊˌɪnfərˈmætɪks/ (listen)) is an interdisciplinary field that develops methods and software tools for understanding biological data, in particular when the data sets are large and complex. As an interdisciplinary field of science, bioinformatics combines biology, chemistry, physics, computer science, information engineering, mathematics and statistics to analyze and interpret the biological data. Bioinformatics has been used for in silico analyses of biological queries using computational and statistical techniques.",
    user: "0",
    date: sub(new Date(), {minutes: 1000}).toISOString()
  },
  {
    id: "2",
    title:  "Bioinformatics. Part I",
    content: "Bioinformatics includes biological studies that use computer programming as part of their methodology, as well as specific analysis 'pipelines' that are repeatedly used, particularly in the field of genomics. Common uses of bioinformatics include the identification of candidates genes and single nucleotide polymorphisms (SNPs). Often, such identification is made with the aim to better understand the genetic basis of disease, unique adaptations, desirable properties (esp. in agricultural species), or differences between populations. In a less formal way, bioinformatics also tries to understand the organizational principles within nucleic acid and protein sequences, called proteomics.[1]",
    user: "1",
    date: sub(new Date(), {minutes: 3660}).toISOString()
  },
  {
    id: "3",
    title: "Signal Processing",
    content: "Image and signal processing allow extraction of useful results from large amounts of raw data. In the field of genetics, it aids in sequencing and annotating genomes and their observed mutations. It plays a role in the text mining of biological literature and the development of biological and gene ontologies to organize and query biological data. It also plays a role in the analysis of gene and protein expression and regulation. Bioinformatics tools aid in comparing, analyzing and interpreting genetic and genomic data and more generally in the understanding of evolutionary aspects of molecular biology. At a more integrative level, it helps analyze and catalogue the biological pathways and networks that are an important part of systems biology. In structural biology, it aids in the simulation and modeling of DNA,[2] RNA,[2][3] proteins[4] as well as biomolecular interactions.[5][6][7][8]",
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
