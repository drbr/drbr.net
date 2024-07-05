[![Netlify Status](https://api.netlify.com/api/v1/badges/4812df70-6e0e-4f2b-9ead-53ea3e04bc18/deploy-status)](https://app.netlify.com/sites/glistening-meringue-642bee/deploys)

Drbr's personal website, as of 2024. Forked and modified from the [Fernfolio](https://github.com/TylerMRoderick/fernfolio-11ty-template) eleventy template
by Tyler M.Roderick, which was in turn based on the [11ty-base-blog](https://github.com/11ty/eleventy-base-blog) template.
Original readme is below, which modifications to get the site to work in 2024.

# Fernfolio — An 11ty Portfolio Template

Launch your personal portfolio in minutes and modify content without opening a code editor!

## 🤔 What is this?

An [Eleventy](https://www.11ty.io/) theme designed to simplify the process of creating a beautiful portfolio and blog. Tightly integrated with [Netlify CMS](https://www.netlifycms.org/) for flexible, Git-powered content management.

## ✨ Features

- Deep integration with [Netlify CMS](https://www.netlifycms.org/). Modify content without opening a code editor.
- Customizable blog and project pages with tag support
- Working contact form powered by [Netlify Forms](https://www.netlify.com/products/forms/)
- Fast page speeds and high lighthouse scores
- Uses Markdown for content files and Nunjucks for layouts
- 100% Javascript framework free
- SCSS support with sane base styles
- Continuous Deployment workflow via [Netlify](https://www.netlify.com/)
- Responsive images generated at build time
- Minified HTML with [HTMLMinifier](https://github.com/kangax/html-minifier)
- Minified CSS with [cssnano](https://github.com/cssnano/cssnano)
- [Turbolinks](https://github.com/turbolinks/turbolinks) integration to enable instant navigation without page refresh
- Useful Nunjuck filters built in

## 🚀 Quick Start

### 1. Click the "Deploy to Netlify" button below

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/TylerMRoderick/fernfolio-11ty-template&stack=cms)

This will clone this repo to your github account and will deploy a copy of the demo website to your Netlify
account (you can create an account during this process if you don't have one).

### 2. Setup authentication

Enable Netlify Identity in the Netlify site configuration, set it up as invite-only, and invite
yourself as a user. Also enable GitHub OAuth and the Git Gateway so that you can log in as a GitHub
user and so that the CMS can commit updates.

~~After deploying this project, Netlify Identity will add you as a CMS user and
will email you an invite.~~ Open the invite email, hit the "Accept the invite" link, and that should redirect you to the deployed site. From there, you can add your password to finish user setup.

### 3. Edit some content

Now that you are added as a CMS user, add `/admin` to the end of your site url, refesh the page, and log in using your new credentials. You should now see the content dashboard. Now you can start editing content!

Any changes saved in the CMS will trigger a git commit in your repo. That new commit will then trigger an auto-deployment on Netlify.

## 🏠 Local Development

If you want to test things locally before deploying, follow the steps below:

- Open your terminal
- Clone the repo locally `git clone https://github.com/TylerMRoderick/fernfolio-11ty-template.git`
- Navigate to root folder: `cd fernfolio-11ty-template/`
- Install the goods:`pnpm install`
- Run it: `pnpm start`
- You should now be able to see everything running on localhost:8080

## 💻 Development Scripts

- **`pnpm start`**

  Run 11ty with hot reload at localhost:8080

- **`pnpm build`**

  Generate minified production build

Use this as the "Publish command" if needed by hosting such as Netlify.

## 💡 Dark mode

To enable switching from light to dark mode, `global.json` has some settings:

- `enable_theme_switch`: set to `true` if you want your visitors to be able to switch theme
- `default_theme`: set to `dark` or another value (which always means `light`)
- `use_system_theme`: set to `true` if you want the system preference to be enforced

## 🎩 Common issues

If you change the repo that was created at deploy time from public to private, you'll need to regenerate your token,
as the token generated using the deploy to Netlify button can only access public repositories. To
regenerate your token, head to "Settings" in your Netlify site dashboard, go to the "Identity"
section, then scroll to "Services" where you'll see an "Edit settings" button. Click that and you'll
see a text link to "Generate access token in GitHub".

## Credit

The Fernfolio template was originally forked from [eleventy-netlify-boilerplate](https://github.com/danurbanowicz/eleventy-netlify-boilerplate), but completely revamped to match the needs of a modern porfolio.
