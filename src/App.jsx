import Header from "./components/Header";
import NewsContainer from "./functionalcomponent/NewsContainer"
// import NewsPortal from "./classcomponents/NewsPortal"

function App() {
  

  return (
    <div className="bg-info">
      <Header />
      {/* <NewsPortal /> */}
      <NewsContainer />
    </div>
  )
}

export default App
