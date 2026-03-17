# My Personal Webpage
## Overview
This is a small page made with Angular and styled with PaperCSS. It links to a blog, and to [my stuff](https://github.com/sxlphuric/mystuff). It has 3 links, which are all hard-coded, and an image loaded from [Picsum](https://picsum.photos). It also has an easter egg.
<img width="623" height="818" alt="image" src="https://github.com/user-attachments/assets/0cd40a31-d317-40ac-9748-6f05b69152d0" />
## Project Structure
```
public - public folder containing stuff like favicon, etc.
|_ favicon.ico - favicon
|_ src - source folder containing all the code
  |_ app
    |_ components
      |_ footer - an unused footer component
      |_ link-buttons - component where the link buttons are hard-coded
      |_ main - main content (image and description)
      |_ nav - an unused navigation bar component
      |_ title - title component with an easter egg
    |_ app.html - html content of the page, containing all components
    |_ app.scss - styles of the page
    |_ app.ts - title signaler
  |_ index.html - page html file, containing the angular app component
  |_ main.ts - page angular bootstrapper
  |_ styles.scss - global styles with papercss import
```
## Contributing
I'm assuming you already have the Angular toolchain installed. If not, please [install it](https://angular.dev/installation).
```fish
# Clone the repo
git clone https://github.com/sxlphuric/sxl.phuri.cc.git/

# Go into the directory
cd sxl.phuri.cc

# Run a development server
ng serve
## TODO
* Mobile support
* Find the 3rd link
## Roadmap
- [ ] Mobile website
- [ ] Working 3rd link
- [ ] Add another easter egg
