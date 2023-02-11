/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact/:path*",
        destination: "/new-contact/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
      },
      {
        source: "/api/movies/:id",
        // source와 destination 모두 :id라고 일치시켜줘야 함
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
      },
    ];
  },
};
