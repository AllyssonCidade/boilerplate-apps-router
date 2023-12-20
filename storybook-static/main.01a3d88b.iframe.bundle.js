;(self.webpackChunkboilerplate_apps_router =
  self.webpackChunkboilerplate_apps_router || []).push([
  [179],
  {
    './node_modules/@storybook/nextjs/dist sync recursive': (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'")
        throw ((e.code = 'MODULE_NOT_FOUND'), e)
      }
      ;(webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id =
          './node_modules/@storybook/nextjs/dist sync recursive'),
        (module.exports = webpackEmptyContext)
    },
    './storybook-config-entry.js': (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      var external_STORYBOOK_MODULE_GLOBAL_ =
          __webpack_require__('@storybook/global'),
        external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__(
          '@storybook/preview-api'
        ),
        external_STORYBOOK_MODULE_CHANNELS_ = __webpack_require__(
          '@storybook/channels'
        )
      const importers = [
        async (path) => {
          if (
            !/^\.[\\/](?:src[\\/]components(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)stories\.tsx)$/.exec(
              path
            )
          )
            return
          const pathRemainder = path.substring(17)
          return __webpack_require__(
            './src/components lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src[\\\\/]components(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)stories\\.tsx)$'
          )('./' + pathRemainder)
        }
      ]
      const channel = (0,
      external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({
        page: 'preview'
      })
      external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),
        'DEVELOPMENT' ===
          external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE &&
          (window.__STORYBOOK_SERVER_CHANNEL__ = channel)
      const preview = new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb()
      ;(window.__STORYBOOK_PREVIEW__ = preview),
        (window.__STORYBOOK_STORY_STORE__ = preview.storyStore),
        (window.__STORYBOOK_ADDONS_CHANNEL__ = channel),
        (window.__STORYBOOK_CLIENT_API__ =
          new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({
            storyStore: preview.storyStore
          })),
        preview.initialize({
          importFn: async function importFn(path) {
            for (let i = 0; i < importers.length; i++) {
              const moduleExports = await ((x = () => importers[i](path)), x())
              if (moduleExports) return moduleExports
            }
            var x
          },
          getProjectAnnotations: () =>
            (0, external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([
              __webpack_require__(
                './node_modules/@storybook/react/dist/entry-preview.mjs'
              ),
              __webpack_require__(
                './node_modules/@storybook/react/dist/entry-preview-docs.mjs'
              ),
              __webpack_require__(
                './node_modules/@storybook/nextjs/dist/preview.mjs'
              ),
              __webpack_require__(
                './node_modules/@storybook/addon-essentials/dist/docs/preview.js'
              ),
              __webpack_require__(
                './node_modules/@storybook/addon-essentials/dist/actions/preview.js'
              ),
              __webpack_require__(
                './node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js'
              ),
              __webpack_require__(
                './node_modules/@storybook/addon-essentials/dist/measure/preview.js'
              ),
              __webpack_require__(
                './node_modules/@storybook/addon-essentials/dist/outline/preview.js'
              ),
              __webpack_require__(
                './node_modules/@storybook/addon-essentials/dist/highlight/preview.js'
              ),
              __webpack_require__('./.storybook/preview.tsx')
            ])
        })
    },
    './.storybook/preview.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          decorators: () => decorators
        })
      var _templateObject,
        react = __webpack_require__(
          './node_modules/next/dist/compiled/react/index.js'
        ),
        taggedTemplateLiteral = __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'
        )
      const global = (0,
      __webpack_require__(
        './node_modules/styled-components/dist/styled-components.browser.esm.js'
      ).vJ)(
        _templateObject ||
          (_templateObject = (0, taggedTemplateLiteral.Z)([
            "\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  html {\n    font-size: 62.5%; // 1rem = 10px == 10/16px = 62.5% (1.4rem = 14px)\n  }\n  html, body, #__next {\n    height: 100%;\n  }\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  }\n"
          ]))
      )
      var __jsx = react.createElement,
        decorators = [
          function (Story) {
            return __jsx(
              react.Fragment,
              null,
              __jsx(global, null),
              __jsx(Story, null)
            )
          }
        ]
    },
    './src/components lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src[\\\\/]components(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)stories\\.tsx)$':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var map = {
          './Main/stories': ['./src/components/Main/stories.tsx', 756],
          './Main/stories.tsx': ['./src/components/Main/stories.tsx', 756]
        }
        function webpackAsyncContext(req) {
          if (!__webpack_require__.o(map, req))
            return Promise.resolve().then(() => {
              var e = new Error("Cannot find module '" + req + "'")
              throw ((e.code = 'MODULE_NOT_FOUND'), e)
            })
          var ids = map[req],
            id = ids[0]
          return __webpack_require__
            .e(ids[1])
            .then(() => __webpack_require__(id))
        }
        ;(webpackAsyncContext.keys = () => Object.keys(map)),
          (webpackAsyncContext.id =
            './src/components lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src[\\\\/]components(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)stories\\.tsx)$'),
          (module.exports = webpackAsyncContext)
      },
    '@storybook/channels': (module) => {
      'use strict'
      module.exports = __STORYBOOK_MODULE_CHANNELS__
    },
    '@storybook/client-logger': (module) => {
      'use strict'
      module.exports = __STORYBOOK_MODULE_CLIENT_LOGGER__
    },
    '@storybook/core-events': (module) => {
      'use strict'
      module.exports = __STORYBOOK_MODULE_CORE_EVENTS__
    },
    '@storybook/global': (module) => {
      'use strict'
      module.exports = __STORYBOOK_MODULE_GLOBAL__
    },
    '@storybook/preview-api': (module) => {
      'use strict'
      module.exports = __STORYBOOK_MODULE_PREVIEW_API__
    }
  },
  (__webpack_require__) => {
    __webpack_require__.O(0, [810], () => {
      return (
        (moduleId = './storybook-config-entry.js'),
        __webpack_require__((__webpack_require__.s = moduleId))
      )
      var moduleId
    })
    __webpack_require__.O()
  }
])
