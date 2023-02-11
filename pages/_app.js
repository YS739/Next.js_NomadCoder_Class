import NavBar from "@/components/NavBar";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      {/* global만 붙이면 전역으로 사용 가능 */}
      <style jsx global>{`
        .active {
          color: forestgreen;
          font-size: 24px;
        }
      `}</style>
    </>
  );
};

export default App;
