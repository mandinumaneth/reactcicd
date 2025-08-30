function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black text-white font-sans">
      <div className="max-w-2xl mx-auto py-16 px-6">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold text-green-400 drop-shadow-lg mb-4">
            React CI/CD Demo: GitHub Actions
          </h1>
          <p className="text-lg text-gray-300">
            This project is a hands-on demo showing how to automate build and
            deployment for a React app using Vite, TailwindCSS, GitHub Actions,
            and GitHub Pages.
          </p>
        </header>
        <article className="bg-gray-800 bg-opacity-80 rounded-xl shadow-xl p-8">
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-300 mb-2">
              Project Highlights
            </h2>
            <ul className="list-disc pl-6 text-gray-200 mb-4">
              <li>
                Vite + React for fast development with TailwindCSS v3+ for
                modern styling
              </li>
              <li>Automatic build & deploy with GitHub Actions</li>
              <li>Hosted for free on GitHub Pages</li>
            </ul>
            <h3 className="text-xl font-bold text-green-200 mb-2">
              CI/CD Workflow Example
            </h3>
            <pre className="bg-gray-900 rounded-lg p-4 text-xs overflow-x-auto mb-4">
              {`name: Deploy React App
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist`}
            </pre>
            <p className="text-gray-200">
              Every push to{" "}
              <span className="font-semibold text-green-200">main</span>{" "}
              triggers this workflow: dependencies are installed, the app is
              built, and the <code>dist/</code> folder is deployed to GitHub
              Pages automatically.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-300 mb-2">
              How to View Your Deployed App
            </h2>
            <ol className="list-decimal pl-6 text-gray-200">
              <li>
                Push your changes to the{" "}
                <span className="font-semibold text-green-200">main</span>{" "}
                branch.
              </li>
              <li>
                GitHub Actions will build and deploy your app automatically.
              </li>
              <li>Go to your repository settings &gt; Pages.</li>
              <li>
                Find your live site URL (e.g.{" "}
                <a
                  href="https://mandinumaneth.github.io/reactcicd/"
                  className="text-green-300 underline"
                >
                  https://mandinumaneth.github.io/reactcicd/
                </a>
                ).
              </li>
            </ol>
          </section>
          <section>
            <h2 className="text-3xl font-bold text-green-300 mb-2">
              Tips for Your Own CI/CD Projects
            </h2>
            <ul className="list-disc pl-6 text-gray-200">
              <li>Keep workflows simple and modular</li>
              <li>
                Use secrets for sensitive data (like <code>GITHUB_TOKEN</code>)
              </li>
              <li>Monitor deployments for errors in the Actions tab</li>
              <li>Customize your workflow for your own needs</li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}

export default App;
