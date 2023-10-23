import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./DemoComponent/ClassComponent";
import FunctionComponent from "./DemoComponent/FunctionComponent";
import Ex_Layout from "./Ex_Layout/Ex_Layout";
import DataBinding from "./DataBinding/DataBinding";
import DemoState from "./DemoState/DemoState";
import BaiTapLayoutComponent from "./BaiTapLayout/BaiTapLayoutComponent";
import DemoProps from "./DemoProps/DemoProps";
import Ex_Phone from "./Ex_Phone/Ex_Phone";

function App() {
  // jsx : html + js
  return (
    <div className="container">
      {/* <ClassComponent /> */}
      {/* <FunctionComponent /> */}
      {/* <Ex_Layout /> */}
      {/* <DataBinding /> */}
      {/* <DemoState /> */}
      <BaiTapLayoutComponent />
      {/* <DemoProps /> */}
      {/* <Ex_Phone /> */}
    </div>
  );
}

export default App;
