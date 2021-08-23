const pattern = new RegExp(/[kcq][uo]al[ai]h?/, 'gi');
const emoji = String.fromCodePoint(0x1F428);

function hunt(parent) {
  for (let i = 0; i < parent.childNodes.length; i += 1) {
    const node = parent.childNodes[i];
    if (node.nodeType === Element.TEXT_NODE) {
      node.textContent = node.textContent.replace(pattern, emoji);
    } else if (node.nodeType === Element.ELEMENT_NODE) {
      hunt(node);
    }
  }
}

hunt(document.body);
