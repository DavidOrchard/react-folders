import React from "react";

export const string2DisplayTree = (input:string):Record<string,any>[] => {
  const js = JSON.parse(input);
  const levelArray:Record<string,any>[] = [];
  let indent = 0;
  const parseLevel = (indent:number, value:Record<string,any>) => {
    const levelKeys = Object.keys(value);
    levelKeys.forEach((key) => {
      if(typeof(js[key]) === "object") {
        parseLevel(indent + 2, value);
        // recurse
      } else {
        levelArray.push({indent, key, value:js[key]})
      }
    });
  }
  parseLevel(indent, js);
  return levelArray;
}

type DisplayTreeProps = {
  lines:Record<string,any>[];
}

export const DisplayTree = ({lines}: DisplayTreeProps): JSX.Element => {
  console.log('lines', lines);
  const tree =  (<>
    {lines.map((record) => {
      return (<div>{record.key}: {record.value}</div>);
      }
    )}
  </>);

console.log('tree', tree);
  return tree
}