# My Personal Webpage (2.0-resdesign branch)
## Overview
This is a small page made with Angular and styled with PaperCSS. It has a banner with a cool paper feel and a profile card, and a nice visual style.
<img width="1288" height="1059" alt="1794090251102393413" src="https://github.com/user-attachments/assets/ecc5ee1b-dd1f-4f3a-8ce2-7bd35e59e567" />
## Project Structure
```
public
|_ aesthetic-banner.jpg - aesthetic banner for website
|_ pixel-heart.png - heart icon for lists
|_ profile.png - github profile picture
|_ favicon.ico - favicon
|_ src
  |_ app
    |_ classes
      |_ table-data.ts - data model for a two column table
    |_ components
      |_ content-container - main content box
      |_ data-table - two column table component
      |_ footer - an unused footer component
      |_ link-buttons - component where the link buttons are hard-coded
      |_ main - wrapper
      |_ nav - an unused navigation bar component
      |_ title - title component with an easter egg
      |_ markdown
        |_ quote - markdown quote component
        |_ title-lower - subtitle component for widgets
        |_ title - title component for widgets
    |_ app.html - html content of the page, containing all components
  |_ styles.scss - global styles with papercss import and fonts
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
```
## TODO
* add content to boxes
* move links elsewhere
