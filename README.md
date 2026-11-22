# Cyndi Wiley portfolio

Static portfolio site: one `index.html` file, an `img` folder, a `video` folder and an `isu` folder. No build step is needed.

## How to edit

- **Text**: open `index.html` and scroll to the `<script>` section near the end. Section intros live in `SECTIONS`, case studies in `CASES`, and the bio in `ABOUT`. Image titles, captions and alt text live in the `IMG` data at the top of the script.
- **Images**: each work has two files with the same name, a full-size image in `img/` and a thumbnail in `img/t/`. To add a work, add both files, add an entry to `IMG`, then add its name to a group in `SECTIONS`.
- **Videos**: each video is an MP4 file in `video/` with a poster image of the same name in `img/`. A project lists it with `video` and `note` fields.
- **On GitHub**: press the period key on the repository page to open the web editor, make the change and commit. GitHub Pages republishes the site within a few minutes.
- **ISU web app**: the `isu` folder holds the Iowa State University Extension and Outreach kiosk app, "Creating the People's College: The Land Grant Legacy." It opens at `/isu/`. The wrapper page `isu/index.html` scales `isu/app.html` to fit any window and shows a start screen so the sound can play. Keep the folder as it is, because the app depends on its file names.
- **Impact page**: the `IMPACT` data in the script holds the Impact page: the proof figures, the Digital Accessibility Lab text and projects, the three featured pieces and the press and talks list with its filter categories. Each press item has a category (`talks`, `press` or `honors`) and no link, because some sources sit behind paywalls or no longer load. The three featured pieces keep their links.
- **Captions and transcripts**: a captioned video has a WebVTT caption file with the same name in `video/`, such as `video/w-mp.vtt`. Transcripts and short video descriptions live in the `VTEXT` data in the script, and each one shows under its video in a collapsed block.
- **Search engines**: `robots.txt` asks search engines and other crawlers to stay out, and every page carries a `noindex` meta tag. Remove both if you ever want the site to appear in search results.
