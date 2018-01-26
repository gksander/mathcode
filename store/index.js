import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({

    state: {
      editorShown: true,
      defaultCode: "",
      savedCode: "",
      count: 0,
      title: "COSma Coding",
      eID: ""
    },

    mutations: {
      toggleEditor (state) {
        state.editorShown = !state.editorShown
      },

      showEditor (state) {
        state.editorShown = true;
      },

      changeDefaultCode (state, code) {
        state.defaultCode = code;
        state.count++;
      },

      changeTitle (state, title) {
        state.title = title;
      },

      changeEID (state, eID) {
        state.eID = eID;
      }
    }

  })
}

export default createStore