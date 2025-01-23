import { About, Projects, Contact } from "./components/script";

function App() {
  return (
    <>
      <main className="absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] xflex flex-col justify-center items-center ">
        <nav className="w-full navbar flex justify-between items-center h-[80px]">
          <h1 className="font-bold">Sathvik Gitta</h1>
          <a href="linkedin.com" target="_blank">
            Linkedin
          </a>
          <br />
        </nav>
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
