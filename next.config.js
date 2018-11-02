/**
 * The property name on the left is the route being registered with the server handler
 * you can change it, and the page will work when requested directly, but not when clicking around the SPA
 * Basically you need to register the same routes as the ones used within the SPA
 * 
 * /p/ is the route registered in the SERVER, you need to stick to that
 * 
 * page: refers to the page component in /pages
 * query: query is an object to simulate url params. Normally accessible via props.url.query in the components
 * 
 * NPM Scripts
 * 
 * Npm run build:
 * build all the pages listed in export
 */

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/p/hello-nextjs': { page: '/post', query: { title: "Hello Next.js" } },
      '/p/learn-nextjs': { page: '/post', query: { title: "Learn Next.js is awesome" } },
      '/p/deploy-nex  tjs': { page: '/post', query: { title: "Deploy apps with Zeit" } },
      '/p/exporting-pages': { page: '/post', query: { title: "Learn to Export HTML Pages" } }
    }
  }
}