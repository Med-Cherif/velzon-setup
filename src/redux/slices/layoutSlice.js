import { createSlice } from '@reduxjs/toolkit';

import {
  layoutTypes,
  leftSidebarTypes,
  layoutModeTypes,
  layoutWidthTypes,
  layoutPositionTypes,
  topbarThemeTypes,
  leftsidbarSizeTypes,
  leftSidebarViewTypes,
  leftSidebarImageTypes,
  preloaderTypes
} from "../../Components/constants/layout";

const INIT_STATE = {
  layoutType: layoutTypes.TWOCOLUMN,
  leftSidebarType: leftSidebarTypes.LIGHT,
  layoutModeType: layoutModeTypes.LIGHTMODE,
  layoutWidthType: layoutWidthTypes.FLUID,
  layoutPositionType: layoutPositionTypes.FIXED,
  topbarThemeType: topbarThemeTypes.LIGHT,
  leftsidbarSizeType: leftsidbarSizeTypes.DEFAULT,
  leftSidebarViewType: leftSidebarViewTypes.DEFAULT,
  leftSidebarImageType: leftSidebarImageTypes.NONE,
  preloader: preloaderTypes.DISABLE
};

/** 
 * changeLayout
  changeLayoutMode
  changeSidebarTheme
  changeLayoutWidth
  changeLayoutPosition
  changeTopbarTheme
  changeLeftsidebarSizeType
  changeLeftsidebarViewType
  changeSidebarImageType
  resetValue
  changePreLoader
*/

function changeHTMLAttribute(attribute, value) {
    if (document.documentElement) document.documentElement.setAttribute(attribute, value);
    return true;
}

const slice = createSlice({
  name: 'layout',
  initialState: INIT_STATE,
  reducers: {
    changeLayout: (state, { payload }) => {
      if (payload === "twocolumn") {
        document.documentElement.removeAttribute("data-layout-width");
    } else if (payload === "horizontal") {
        document.documentElement.removeAttribute("data-sidebar-size");
    }
    changeHTMLAttribute("data-layout", payload);
      state.layoutType = payload;
    },

    changeLayoutMode: (state, { payload }) => {
      changeHTMLAttribute("data-layout-mode", payload)
      state.layoutModeType = payload;
    },

    changeSidebarTheme: (state, { payload }) => {
      changeHTMLAttribute("data-sidebar", payload);
      state.leftSidebarType = payload;
    },
    changeLayoutWidth: (state, { payload }) => {
      if (payload === 'lg') {
        changeHTMLAttribute("data-layout-width", "fluid");
    } else {
        changeHTMLAttribute("data-layout-width", "boxed");
    }
      state.layoutWidthType = payload;
    },

    changeLayoutPosition: (state, { payload }) => {
      changeHTMLAttribute("data-layout-position", payload)
      state.layoutPositionType = payload;
    },

    changeTopbarTheme: (state, { payload }) => {
      changeHTMLAttribute("data-topbar", payload)
      state.topbarThemeType = payload;
    },


    changeLeftsidebarSizeType: (state, { payload }) => {
      switch (payload) {
        case 'lg':
            changeHTMLAttribute("data-sidebar-size", "lg");
            break;
        case 'md':
            changeHTMLAttribute("data-sidebar-size", "md");
            break;
        case "sm":
            changeHTMLAttribute("data-sidebar-size", "sm");
            break;
        case "sm-hover":
            changeHTMLAttribute("data-sidebar-size", "sm-hover");
            break;
        default:
            changeHTMLAttribute("data-sidebar-size", "lg");
    }
      state.leftsidbarSizeType = payload;
    },

    changeLeftsidebarViewType: (state, { payload }) => {
      changeHTMLAttribute("data-layout-style", payload);
      state.leftSidebarViewType = payload;
    },

    changeSidebarImageType: (state, { payload }) => {
      changeHTMLAttribute("data-sidebar-image", payload);
      state.leftSidebarImageType = payload;
    },

    resetValue: (state) => {
      state = INIT_STATE;
    },
    changePreLoader: (state, { payload }) => {
      changeHTMLAttribute("data-preloader", payload);
      state.preloader = payload;
    },
  },
});

export const layoutSlice = slice.reducer;

// export default slice.actions;

export const changeLayout = slice.actions.changeLayout
export const changeLayoutMode = slice.actions.changeLayoutMode
export const changeSidebarTheme = slice.actions.changeSidebarTheme
export const changeLayoutWidth = slice.actions.changeLayoutWidth
export const changeLayoutPosition = slice.actions.changeLayoutPosition
export const changeTopbarTheme = slice.actions.changeTopbarTheme
export const changeLeftsidebarSizeType = slice.actions.changeLeftsidebarSizeType
export const changeLeftsidebarViewType = slice.actions.changeLeftsidebarViewType
export const changeSidebarImageType = slice.actions.changeSidebarImageType
export const resetValue = slice.actions.resetValue
export const changePreLoader = slice.actions.changePreLoader