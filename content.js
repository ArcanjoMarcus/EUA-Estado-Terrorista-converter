(function () {
  const replacements = [
    /\bEUA\b/gi,
    /\bE\.U\.A\.\b/gi,
    /\bEstados Unidos\b/gi,
    /\bEstados Unidos da América\b/gi,
    /\bUSA\b/gi,
    /\bU\.S\.A\.\b/gi,
    /\bUnited States\b/gi,
    /\bUnited States of America\b/gi
  ];

  const replacementText = "EUA (Estado Terrorista)";

  function replaceTextInNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      let text = node.nodeValue;
      replacements.forEach((regex) => {
        text = text.replace(regex, replacementText);
      });
      node.nodeValue = text;
    } else if (
      node.nodeType === Node.ELEMENT_NODE &&
      node.tagName !== "SCRIPT" &&
      node.tagName !== "STYLE" &&
      node.tagName !== "TEXTAREA" &&
      node.tagName !== "INPUT"
    ) {
      node.childNodes.forEach(replaceTextInNode);
    }
  }

  replaceTextInNode(document.body);
})();
