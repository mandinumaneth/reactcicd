function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black text-white font-sans">
      <div className="max-w-2xl mx-auto py-16 px-6">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold text-green-400 drop-shadow-lg mb-4">
            Building a CI/CD Pipeline for React with GitHub Actions & Pages
          </h1>
          <p className="text-lg text-gray-300">
            A step-by-step guide to automating deployment for your React
            projects.
          </p>
        </header>
        <article className="bg-gray-800 bg-opacity-80 rounded-xl shadow-xl p-8">
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-300 mb-2">
              What is CI/CD?
            </h2>
            <p className="text-gray-200 mb-2">
              Welcome to the world of modern DevOps! In this blog, we'll explore
              how to set up a CI/CD pipeline for your React app using GitHub
              Actions and deploy it seamlessly to GitHub Pages.
            </p>
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
              publish_dir: ./dist
    `}
            </pre>
            <p className="text-gray-200">
              This workflow builds your React app and deploys it to GitHub Pages
              every time you push to{" "}
              <span className="font-semibold text-green-200">main</span>.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-green-300 mb-2">
              How to Enable GitHub Pages
            </h2>
            <ol className="list-decimal pl-6 text-gray-200">
              <li>Go to your repository settings on GitHub</li>
              <li>
                Find <span className="font-semibold text-green-200">Pages</span>{" "}
                section
              </li>
              <li>
                Set the source to{" "}
                <span className="font-semibold text-green-200">gh-pages</span>{" "}
                branch
              </li>
              <li>Save and your site is live!</li>
            </ol>
          </section>
          <section>
            <h2 className="text-3xl font-bold text-green-300 mb-2">
              Tips for Success
            </h2>
            <ul className="list-disc pl-6 text-gray-200">
              <li>Keep your workflows simple and modular</li>
              <li>Use secrets for sensitive data</li>
              <li>Monitor deployments for errors</li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}

export default App;
