import './App.css'
import {DisplayTree, string2DisplayTree} from "./util";

/**
 * Build a JSONViewer tool that 
 * 1. renders JSON in pretty way with 2 space padding for indentation
 * 2. supports collapse/expand functionality per node for navigation 
 * 
 * For example, check out https://jsoneditoronline.org/
 */

// Question: about sizings, for now assume small.
// Q: skip different colors.
// Q: skip indented of long strings.
// Q: valid JSON

// algorithm: BFS or DFS into lines
// Choose DFS
// map json struct to array
// then map array to jsx.

// Test JSON from https://fakestoreapi.com/users?limit=1
// const USER_1_JSON_STRING: string = '{"address":{"geolocation":{"lat":"-37.3159","long":"81.1496"},"city":"kilcoole","street":"new road","number":7682,"zipcode":"12926-3874"},"id":1,"email":"john@gmail.com","username":"johnd","password":"m38rmF$","name":{"firstname":"john","lastname":"doe"},"phone":"1-570-236-7033"}';
  const test = '{"address":"1245", "phone":456}';

function App() {
  console.log("app");
  return (
    <div className="app">
      <div className="header">
        <div>
          <img src="https://storage.googleapis.com/coderpad_project_template_assets/coderpad_logo.svg" />
        </div>
        <div>
          <img src="https://storage.googleapis.com/coderpad_project_template_assets/react.svg" />
          <span>JSON Viewer</span>
        </div>
      </div>
      <div className="content">
        {/* <Disp /> */}
        <DisplayTree lines={string2DisplayTree(test)}/>
      </div>
    </div>
  )
}

export default App
