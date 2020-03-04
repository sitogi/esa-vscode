import * as vscode from "vscode";
import Axios from "axios";

let esaVscode = vscode.window.createOutputChannel("esa-vscode");

//Write to output.

export const getCategories = () => {
  Axios.get("https://api.esa.io/v1/teams/TEAM_NAME/categories", {
    headers: { Authorization: "Bearer SECRET_KEY" },
    data: {}
  })
    .then(response => {
      console.log(response.data);
      esaVscode.appendLine(JSON.stringify(response.data));
    })
    .catch(error => {
      console.log(error);
    });
};
