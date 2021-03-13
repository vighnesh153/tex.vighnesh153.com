import React, {useRef, useState, useLayoutEffect} from "react";

function MathComponent({ tex, display = false }) {
  const rootElementRef = useRef(null);

  // Store this in local state so we can make the component re-render when
  // it's updated.
  const [isReady, setIsReady] = useState(window.__MathJax_State__.isReady);

  useLayoutEffect(() => {
    // Avoid running this script if the MathJax library hasn't loaded yet.
    if (!isReady) {
      // But trigger a re-render of this component once it is loaded.
      window.__MathJax_State__.promise.then(() => setIsReady(true));
      return;
    }

    // This element won't be null at this point.
    const mathElement = rootElementRef.current;

    // Remove previous typeset children.
    mathElement.innerHTML = "";

    // Reset equation numbers.
    window.MathJax.texReset();

    // Construct options.
    const options = window.MathJax.getMetricsFor(mathElement);
    options.display = display;

    // Potentially this could/should be switched to use the synchronous version
    // of this MathJax function, `MathJax.tex2svg()`.
    window.MathJax.tex2svgPromise(tex, options)
      .then(function (node) {
        // `mathElement.replaceWith(node)` would be nicer markup-wise, but that
        // seems to mess with React's diffing logic.
        mathElement.appendChild(node);
        // Update the global MathJax CSS to account for this new element.
        window.MathJax.startup.document.clear();
        window.MathJax.startup.document.updateDocument();
      })
      .catch(function (err) {
        console.error(err);
      });
  }, [tex, display, isReady]);

  return <span ref={rootElementRef} />;
}

export default MathComponent;
