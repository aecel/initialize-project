const addElement = ({
  parent,
  type = "div",
  classList = [],
  id,
  text,
  children,
  src,
}) => {
  const element = document.createElement(type)

  if (typeof classList == "string") classList = [classList]
  for (const className of classList) {
    element.classList.add(className)
  }

  if (id) element.id = id
  if (src) element.src = src
  if (text) element.textContent = text
  if (parent) parent.appendChild(element)
  if (children) {
    if (!Array.isArray(children)) children = [children]
    for (const child of children) {
      element.appendChild(child)
    }
  }
  return element
}

export default addElement
