# Contributing to the Kubefirst documentation

Thank you for taking the time to contribute to the Kubefirst documentation. If you have questions that you don’t see addressed here, [reach out to us on Slack.](https://konstructio.slack.com/)

Please follow our [code of conduct](CODE_OF_CONDUCT.md) for all of your interactions with the project to keep our community healthy.

_For details on contributing to the Kubefirst CLI, refer to the [CONTRIBUTING.md](https://github.com/konstructio/kubefirst/blob/main/CONTRIBUTING.md) in the [Kubefirst repository](https://github.com/konstructio/kubefirst)._

- [Contributing to the Kubefirst documentation](#contributing-to-the-kubefirst-documentation)
  - [Ways to Contribute](#ways-to-contribute)
  - [Getting Started](#getting-started)
    - [Commits](#commits)
    - [Images](#images)
      - [Alt Text](#alt-text)
      - [Themed images](#themed-images)
    - [Markdown](#markdown)
      - [Special Syntax](#special-syntax)
        - [Admonitions](#admonitions)
      - [Syntax Highlight](#syntax-highlight)
    - [Syntax Validation](#syntax-validation)
    - [Testing](#testing)
    - [Update docs across versions](#update-docs-across-versions)
    - [Versioning](#versioning)
  - [Help](#help)

## Ways to Contribute

At Konstruct, we believe that every contribution is valuable, not just code.

Whether you want to add more details to a specific section or a page, or you want to fix a typo in the text or in a code example, you are more than welcome to create a pull request for us to review.

For more substantial changes or for changes you don't want to make yourself, we recommend reaching out to us. You can either create an [issue](https://github.com/konstructio/kubefirst-pro-docs/issues), or by join our [Slack community](https://konstruct.io/slack) and starting a new thread in the #contributors channel.

- Before creating an issue, review the current list to make sure [an issue has not already been created](https://github.com/konstructio/kubefirst-pro-docs/issues).

## Getting Started

We are using [Docusaurus](https://github.com/facebook/docusaurus) as our documentation platform. More information on Docusaurus is available in their [documentation](https://docusaurus.io/docs). Here are some guidelines to follow before suggesting and content changes.

### Commits

We subscribe to the [Conventional Commits specification](https://www.conventionalcommits.org). It can be a bit difficult to choose the right commit message prefix since this repository is for documentation, and not an application. Here are the guidelines for the documentation specific ones:

- `docs`: when adding new information to the docs (ex.: creating a new page, adding a section to an existing one).
- `fix`: when fixing the documentation (ex.: correcting a typo, rectifying untrue content).
- `refactor`: rewording part of the content or restructuring the documentation.

Non-content prefixes:

- `chore`: anything that isn't Docusaurus code related (see `feat` prefix) or documentation content (ex.: updating the `CONTRIBUTING.md` file or releasing a new version of the docs).
- `ci`: any automation, probably GitHub Actions related.
- `feat`: anything related to Docusaurus as our documentation platform (ex.: updating Docusaurus, changing the configurations), aside from styling.
- `style`: anything about styling, mostly CSS.

As of now, we don't typically use the `perf` & `test` prefixes.

We suggest that you create a branch within your fork to add your changes before creating a pull request, instead of committing them directly to your `main` branch. This prevents misunderstandings in the GitHub UI for a status like `Merge branch 'main' into main` which in case we have updated your pull request code with the latest from the `kubefirst` repository `main` branch could be interpreted as us already having merged your changes to the `kubefirst` repository `main` branch.

Your commits need to be signed so they can be verified. GitHub has [great documentation on how to do that](https://docs.github.com/en/authentication/managing-commit-signature-verification).

### Images

All images are automatically optimized with a lossless compression level to ensure the best possible experience, while minimizing the image size for slower more costly internet connections.

All images should be added in the appropriate `img` folder under each documentation version. If you're not sure of the best location, get in touch. No specific documentation images should be added in the `static/img` folder to allow us to include different image for different Kubefirst versions.

#### Alt Text

All images must have alternative text (alt text) that are representative, and descriptive of the image. It is important as we want our documentation to be accessible to everyone. Images with complex information, such as diagrams, should have a short description in the alt text, and have full-fledged text explaining the content of the image within the documentation or as an additional page. For "utility images", the alt text should be a description of the information or action intended by the image, and not the image or icon itself (for example: a LinkedIn logo icon that links to our LinkedIn page should have "Konstruct LinkedIn account" instead of "LinkedIn logo" alt text).

#### Themed images

If you want to use a different image for light or dark mode, use the following syntax:

```markdown
![Alt text here](my-image-for-light-mode.png#light-mode)![Alt text here](my-image-for-dark-mode.png#dark-mode)
```

The magic happens with the CSS looking for path fragments, in our case, a URL with either `#light-mode` or `#dark-mode` in it to display the correct image.

### Markdown

Before merging your PR, the [GitHub Action responsible for checking the Markdown validity](https://github.com/konstructio/docs/blob/main/.github/workflows/check-markdown.yml) needs to pass. If you want to test your changes locally before sending a PR, you can do it by using [act](https://github.com/nektos/act), and run `act -j markdown-check`. We follow the [rules](https://github.com/DavidAnson/markdownlint#rules--aliases) from the [markdownlint application](https://github.com/DavidAnson/markdownlint) with the some exceptions including:

- [MD013](https://github.com/DavidAnson/markdownlint/blob/main/doc/md013.md): limiting the line length to 80 as it's easier to manage without line breaks within the text for documentation content.
- [MD024](https://github.com/DavidAnson/markdownlint/blob/main/doc/md024.md): preventing same text headers as it's needed for our project documentation.
- [MD033](https://github.com/DavidAnson/markdownlint/blob/main/doc/md033.md): restrict inline HTML as we sometimes need more customization for the content than what Markdown allows.

We also enforce some styling to prevent ambiguity, and ensure consistency for:

- MD049: underscores for italic text.
- MD050: asterisks for bold text.

#### Special Syntax

##### Admonitions

You can include special Docusaurus Markdown syntax called admonitions, which display styled notes, information, warnings, and others. Check [out the docusaurus content on markdown](https://docusaurus.io/docs/markdown-features/admonitions) for formatting and examples.

#### Syntax Highlight

Docusaurus uses Prism for code block syntax highlighting. Here's a list of [supported languages](https://prismjs.com/#supported-languages).

### Syntax Validation

<!-- vale off -->
We have a [GitHub Workflow that validates the syntax](https://github.com/konstructio/kubefirst-docs/blob/main/.github/workflows/check-syntax.yml) for typographical errors, and to enforce some ways to write specific words (ex.: GitHub instead of Github or github). It uses [Vale](https://github.com/errata-ai/vale), and all settings are in the [.vale](https://github.com/konstructio/kubefirst-docs/tree/main/.vale) folder.

There are two ways to modify its behavior: what it accepts, and what suggestions it can give you (ex.: Consider using 'Kubernetes' instead of 'kubernetes'). To add words that are valid, but rejected by Vale (ex.: Crossplane wasn't a known project name by Vale), add them in the [accept.txt](https://github.com/konstructio/kubefirst-docs/blob/main/.vale/config/vocabularies/base/accept.txt) file.

If you want to ensure some words are writing specifically (ex.: Argo CD instead of ArgoCD or argocd), there are two steps. If it was reported as an unknown word, let Vale ignore it at first by adding it to [ignore.txt](https://github.com/konstructio/kubefirst-docs/blob/main/.vale/Custom/ignore.txt) file. Second, add the incorrect spelling or letter case (ex.: mongo should always be MongoDB) and what Vale should suggest to the person submitting a pull request in the [substitutions.yml](https://github.com/konstructio/kubefirst-docs/blob/main/.vale/Custom/substitutions.yml) file. You can even [use regular expressions](https://vale.sh/docs/topics/styles/#substitution).

By default Vale will not check the syntax inside a code block, inline code, or HTML/JSX in .MD or .MDX files. If for whatever reason you need to deactivate it for a small section of the documentation (as we've done for this section that has intentional mistakes), use the `<!-- vale off -->` JavaScript comment. To reactivate it for the rest of the document, use the `<!-- vale on -->`. We suggest you avoid using this unless absolutely necessary.
<!-- vale on -->

### Testing

To run the documentation locally, run `npm start` in your terminal.

> If you modify the CSS, the changes aren't picked up by the development server like when you modify the documentation content. You need to restart the server with npm.

### Update docs across versions

Sometimes changes in `v.next` are also valid for previous versions. This is often the case when refactoring a section, or adding missing information to a page.

To update multiple versions, you can either copy the content manually into each version, or use (at your own risk) the ZSH tools we created. First, you need to stage the file(s) you modified or created. Once the files are staged, run this command from the documentation folder in your terminal:

```shell
zsh tools/duplicator.zsh
```

You'll be presented with a menu giving you the opportunity to select the files you want to copy, and also the ability to select to which version you want to modify. Once the selections are done, the script will copy or overwrite existing files with your changes, and stage them. Create a new branch for the PR, and [commit](#commits) the changes.

We also provide a script to delete all the `versioned_docs` for a specific version. This is useful when updating documentation for a patch release when `v.next` had nothing new that should be only for the next minor or major release.

```shell
npm run remove_version <version>
npm run docusaurus docs:version <version>
```

### Versioning

Docusaurus manages [documentation versions](https://docusaurus.io/docs/versioning). This means that every time we release a new version (minor or major only) of Kubefirst or Kubefirst Pro, we need to freeze the `next` documentation, meaning the documentation updated in the `docs` directory, into a versioned one inside the `versioned_docs\version-X.X` folder. To generate a new version, run the [create a new docs version](https://github.com/konstructio/docs/actions/workflows/release.yml) GitHub Actions workflow, and enter the desired version number. It will create a pull request with the new version for you.

## Help

If you need help in your Kubefirst journey as a contributor, join our [Slack Community](https://konstruct.io/slack). We have a `#contributors` channel to ask questions or get help with anything contribution-related. For support as a user, ask in the `#helping-hands` channel.
