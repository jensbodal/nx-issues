# nx-issues

## Create new issue

```
pnpm run create-issue <issue-name>
```

Or manually:

```
cd issues && npx create-nx-workspace@latest \
    --nxCloud=skip \
    --preset=ts \
    --workspaceType=package-based \
    --bundler=vite \
    --skipGit \
    --packageManager=pnpm \
    --name=<issue-name>
```

### Other options

| Flag | Description | Type
| --- | --- | ---
| --name | Workspace name (e.g. org name) | [string]
| --preset | Customizes the initial content of your workspace. Default presets include: ["apps", "empty", "core", "npm", "ts", "web-components", "angular-monorepo", "angular-standalone", "react-monorepo", "react-standalone", "vue-monorepo", "vue-standalone", "nuxt", "nuxt-standalone", "next", "nextjs-standalone", "react-native", "expo", "nest", "express", "react", "vue", "angular", "node-standalone", "node-monorepo", "ts-standalone"]. To build your own see https://nx.dev/extending-nx/recipes/create-preset | [string]
| --interactive |  Enable interactive mode with presets | [boolean] [default: true]
| --workspaceType |  The type of workspace to create | [string] [choices: "integrated", "package-based", "standalone"]
| --appName |  The name of the app when using a monorepo with certain stacks | [string]
| --style |  Stylesheet type to be used with certain stacks | [string]
| --standaloneApi |  Use Standalone Components if generating an Angular app | [boolean] [default: true]
| --routing |  Add a routing setup for an Angular app | [boolean] [default: true]
| --bundler |  Bundler to be used to build the app | [string]
| --framework |  Framework option to be used with certain stacks | [string]
| --docker | Generate a Dockerfile for the Node API | [boolean]
| --nextAppDir | Enable the App Router for Next.js | [boolean]
| --nextSrcDir | Generate a 'src/' directory for Next.js | [boolean]
| --e2eTestRunner |  Test runner to use for end to end (E2E) tests. | [string] [choices: "cypress", "playwright", "none"]
| --ssr |  Enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering) for the Angular application | [boolean]
| --defaultBase |  Default base to use for new projects | [string] [default: main]
| -g, --skipGit |  Skip initializing a git repository | [boolean] [default: false]
| --commit.name |  Name of the committer | [string]
| --commit.email | E-mail of the committer | [string]
| --commit.message | Commit message | [string] [default: "Initial commit"]
| --packageManager, --pm | Package manager to use | [string] [choices: "npm", "pnpm", "yarn"] [default: npm]
| -a, --allPrompts | Show all prompts | [boolean] [default: false]
| --nxCloud, --ci |  Set up CI with caching, distribution and test deflaking | [string] [choices: "yes", "github", "circleci", "skip"]

## Add new package within an issue

**First `cd` into your new project...**

### React

```
pnpm i --save-dev @nx/react@latest
nx g @nx/react:app \
  --bundler=vite \
  --compiler=swc \
  --e2eTestRunner='none' \
  --inSourceTests=true \
  --routing=true \
  --setParserOptionsProject=true \
  --style=scss \
  --unitTestRunner=vitest \
  --name=react
```

#### Other Options

| Flag | Description | Type
| --- | --- | ---
| --name | The name of the application. |  [string]
| --bundler |  The bundler to use. |  [string] [choices: "vite", "webpack",  "rspack"] [default: "webpack"]
| --directory, -dir |  The directory of the new application. | [string]
| --classComponent, -C | Use class components instead of functional component. |  [boolean]
| --compiler | The compiler to use. | [string] [choices:  "babel", "swc"] [default: "babel"]
| --e2eTestRunner |  Test runner to use for | [string] [choices: end to end (E2E) tests.  "cypress",  "playwright", "none"] [default: "cypress"]
| --globalCss |  Default is `false`. When `true`, the component is generated with `*.css`/`*.scss` instead of `*.module.cs s`/`*.module.scss`. | [boolean]
| --inSourceTests |  When using Vitest, separate spec files will not be generated and instead will be included within the source files. Read more on the Vitest docs site: https://vitest.dev/guide/in-source.html |  [boolean]
| --js | Generate JavaScript files rather than TypeScript files. | [boolean]
| --linter | The tool to use for |  [string] [choices: running lint checks.  "eslint", "none"]  [default: "eslint"]
| --minimal |  Generate a React app with a minimal setup, no separate test files. |  [boolean]
| --pascalCaseFiles, -P |  Use pascal case component file name (e.g. `App.tsx`). | [boolean]
| --projectNameAndRootFormat | Whether to generate the (`as-provided`) or generate them composing their values and taking the configured layout into account (`derived`). |  [string] [choices: project name and root  "as-provided", directory as provided  "derived"]
| --routing |  Generate application with routes. |  [boolean]
| --setParserOptionsProject |  Whether or not to configure the ESLint `parserOptions.project` option. We do not do this by default for lint performance reasons. | [boolean]
| --strict | Creates an application strict type checking. |  [boolean] [default: with strict mode and  true]
| --style, -s |  The file extension to be used for style files. |  [string] [default: "css"]
| --tags, -t | Add tags to the application (used for linting). |  [string]
| --unitTestRunner | Test runner to use for | [string] [choices: unit tests. "jest", "vitest",  "none"] [default:  "jest"]
| --skipFormat | Skip formatting files. |  [boolean]
| --skipNxJson | Skip updating `nx.json` with default options based on values provided to this app. | [boolean]
| --skipPackageJson |  Do not add dependencies to `package.json`. `apps/myorg/myapp-e2e` nx g app myapp --classComponent  Use class components instead of functional components nx g app myapp --routing Set up React Router | [boolean]
