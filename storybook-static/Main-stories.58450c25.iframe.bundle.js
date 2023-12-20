'use strict'
;(self.webpackChunkboilerplate_apps_router =
  self.webpackChunkboilerplate_apps_router || []).push([
  [756],
  {
    './src/components/Main/stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: () => Basic,
          Default: () => Default,
          default: () => stories
        })
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        react = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        ),
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        ),
        styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ),
        Wrapper = styled_components_browser_esm.ZP.main(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.Z)([
              '\n  background-color: #06092b;\n  color: #fff;\n  width: 100%;\n  height: 100%;\n  padding: 3rem;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n'
            ]))
        ),
        Logo = styled_components_browser_esm.ZP.img(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.Z)([
              '\n  width: 25rem;\n  margin-bottom: 2rem;\n'
            ]))
        ),
        Title = styled_components_browser_esm.ZP.h1(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.Z)([
              '\n  font-size: 2.5rem;\n'
            ]))
        ),
        Description = styled_components_browser_esm.ZP.h2(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.Z)([
              '\n  font-size: 2rem;\n  font-weight: 400;\n'
            ]))
        ),
        Illustration = styled_components_browser_esm.ZP.img(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.Z)([
              '\n  margin-top: 3rem;\n  width: min(30rem, 100%);\n'
            ]))
        ),
        __jsx = react.createElement,
        Main = function Main(_ref) {
          var _ref$title = _ref.title,
            title = void 0 === _ref$title ? 'React Avançado' : _ref$title,
            _ref$description = _ref.description,
            description =
              void 0 === _ref$description
                ? 'TypeScript, ReactJS, NextJS e Styled Components'
                : _ref$description
          return __jsx(
            Wrapper,
            null,
            __jsx(Logo, {
              src: '/img/logo.svg',
              alt: 'Imagem de um átomo e React Avançado escrito ao lado.'
            }),
            __jsx(Title, null, title),
            __jsx(Description, null, description),
            __jsx(Illustration, {
              src: '/img/hero-illustration.svg',
              alt: 'Um desenvolvedor de frente para uma tela com código.'
            })
          )
        }
      Main.displayName = 'Main'
      const components_Main = Main
      try {
        ;(Main.displayName = 'Main'),
          (Main.__docgenInfo = {
            description: '',
            displayName: 'Main',
            props: {
              title: {
                defaultValue: { value: 'React Avançado' },
                description: '',
                name: 'title',
                required: !1,
                type: { name: 'string' }
              },
              description: {
                defaultValue: {
                  value: 'TypeScript, ReactJS, NextJS e Styled Components'
                },
                description: '',
                name: 'description',
                required: !1,
                type: { name: 'string' }
              }
            }
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Main/index.tsx#Main'] = {
              docgenInfo: Main.__docgenInfo,
              name: 'Main',
              path: 'src/components/Main/index.tsx#Main'
            })
      } catch (__react_docgen_typescript_loader_error) {}
      const stories = {
        title: 'Main',
        component: components_Main,
        args: { title: 'title default', description: 'description default' },
        parameters: { layout: 'fullscreen' }
      }
      var Default = {},
        Basic = {
          args: { title: 'title basic', description: 'description basic' }
        }
    }
  }
])
