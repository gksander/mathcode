module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'mathcode',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merriweather' }
    ],

    script: [
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.9/ace.js'},
      {src: 'https://unpkg.com/babel-standalone@6/babel.min.js'},
      {src: '/js/particles.min.js' },
      {src: '/js/particleBackground.js'},
      {src: '/js/functions.js'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Router customization
  */
  router: {
    linkActiveClass: "is-active"
  },
  /*
  ** Build configuration
  */
  build: {
    vender: ['ace']
  },

  // plugins: [
  //   {src: './components/editor.vue', ssr:false}
  // ]
}
