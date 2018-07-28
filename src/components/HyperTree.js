import { h } from "hyperapp";
import { render } from "./_hypertree.js";

export const HyperTree = ({ config, onChange }, children) => {
  let hypertree = null;
  const oncreate = () => {
    hypertree = render(config, document.querySelector(".hypertree-container"));
    hypertree.subscribe(function(data) {
      onChange(data.actionName);
    });
  };
  return <div oncreate={oncreate} class="hypertree-container" />;
};
