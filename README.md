# Xuanpu Wang — academic website

This static website is based on the [Academic Homepage Template](https://github.com/Arvid-pku/Academic-Homepage-Template). It has four pages: Home, Projects, Publications, and CV.

## Local preview

From this directory, run:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Open <http://127.0.0.1:8000/>. No build step or dependencies are required.

## Before deployment

Review the name, email, research wording, and manuscript status. The CV page presents the supplied PDF as HTML, with the Tsinghua University High School entry added. The `[PDF]` link opens `files/XuanpuWang.pdf`.

The home page photo is `figures/me.jpg`.

Video slots are reserved on the Projects and Publications pages. Add approved MP4 files to the site and set their paths in `VIDEO_SOURCES` at the top of `media.js`. The thumbnails then autoplay silently and loop; clicking opens a larger player. The same `cofinav` video path is used on both pages.
