# Xuanpu Wang's Academic Website

Personal academic website of Xuanpu Wang, hosted on GitHub Pages.

**Live site:** [xuanpu-wang.github.io](https://xuanpu-wang.github.io/)

## Pages

- **Home** — introduction, research interests, and selected projects.
- **Projects** — research projects with video previews where available.
- **Publications** — research paper information and related media.
- **CV** — HTML CV with a link to the [PDF version](files/XuanpuWang.pdf).

## Local preview

This is a static HTML, CSS, and JavaScript website. No build step or dependencies are required. From the repository directory, run:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Then open <http://127.0.0.1:8000/>.

## Updating the site

Edit the HTML pages in the repository root. The profile photo is at `figures/me.jpg`, and the CV PDF and project videos are in `files/`. Video paths are configured in `media.js`; an empty path displays "Coming Soon". Available previews play muted and loop, and can be opened in a larger player.

The site is published through GitHub Pages from the `main` branch. Push changes to that branch to update the live site.

## Credits

Based on the [Academic Homepage Template](https://github.com/Arvid-pku/Academic-Homepage-Template) by [Xunjian Yin](https://xunjianyin.github.io/).
