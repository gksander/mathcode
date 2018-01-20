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
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merriweather' },
      {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.css'}
    ],

    script: [
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.9/ace.js'},
      {src: 'https://unpkg.com/babel-standalone@6/babel.min.js'},
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.js'},
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/contrib/auto-render.min.js'},
      {src: '/js/particles.min.js' },
      {src: '/js/particleBackground.js'},
      {src: '/js/functions.js'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#5d3f9e' },
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
  }

  // plugins: [
  //   {src: './components/editor.vue', ssr:false}
  // ]
}