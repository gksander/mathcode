import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({

    state: {
      editorShown: true,
      defaultCode: "",
      store_savedCode: "",
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

      hideEditor (state) {
        state.editorShown = false;
      },

      changeDefaultCode (state, code) {
        // Change the default code
        state.defaultCode = code;
        this.commit('pullSavedCode');
        // Increment
        state.count++;
      },

      changeTitle (state, title) {
        state.title = title;
      },

      changeEID (state, eID) {
        state.eID = eID;
      },

      pullSavedCode (state) {
        // Try to pull saved code
        if (!state.eID) {
          let sc = localStorage.getItem(`cosma/default`);
          if (sc) {
            state.store_savedCode = sc;
          } else {
            state.store_savedCode = "print('No Saved Code');";
          }
        }
        else {
          let sc = localStorage.getItem(`cosma/${state.eID}`);
          if (sc) {
            state.store_savedCode = sc;
          } else {
            state.store_savedCode = "print('No Saved Code');";
          }
        }
      }
    }

  })
}

export default createStore