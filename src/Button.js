// https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free
// https://webpack.js.org/configuration/optimization/#optimizationusedexports

function Button () {
  const renderContent = 'Button' + [].slice.call(arguments).join('-')
  console.log(renderContent)
}

function ButtonProvider () {
  return function addProvider (WrappedComponent) {
    return WrappedComponent(1, 2, 3)
  }
}

export const WrappedButton = /*#__PURE__*/ButtonProvider()(Button)

export const buttonSizes = ['large', 'medium', 'small']
