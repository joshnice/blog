export default {
    // Boilplate for set up worker
    async fetch(request, env, ctx) {
      return new Response("Hello World!");
    },
  };
  