import { h, app } from "hyperapp";
import { HyperTree } from "./components/HyperTree.js";

const state = {
  title: "Hello Hyperapp !",
  hyperTreeLastAction: ""
};
const actions = {
  setHyperTreeLastAction: actionName => state => {
    return { ...state, hyperTreeLastAction: actionName };
  }
};

const view = (state, actions) => {
  const config = {
    title: "Hyper Tree Title",
    nodes: [
      {
        text: "Node1",
        children: [
          {
            text: "Node5"
          }
        ]
      },
      {
        text: "Node2",
        children: [
          {
            text: "Node6",
            children: [
              {
                text: "Node10"
              }
            ]
          },
          {
            text: "Node7"
          }
        ]
      },
      {
        text: "Node3",
        children: [
          {
            text: "Node8"
          },
          {
            text: "Node9",
            children: [
              {
                text: "Node11"
              },
              {
                text: "Node12"
              },
              {
                text: "Node13"
              }
            ]
          }
        ]
      },
      {
        text: "Node4"
      }
    ]
  };

  return (
    <div>
      <h1>{state.title}</h1>
      <HyperTree config={config} onChange={actions.setHyperTreeLastAction} />
      <div>
        Hypertree last action (please try to expand/collapse nodes): <strong>{state.hyperTreeLastAction}</strong>
      </div>
    </div>
  );
};

app(state, actions, view, document.querySelector("#app"));
