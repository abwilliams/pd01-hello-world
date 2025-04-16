# Hello ,world!

This is the first commit of PlebDev's Starter Tutorial.

The tutorial can be found at "https://plebdevs.com".

Take a look for yourself.

## Setting up your coding/development environment (on Arch Linux)
* Visual Code Studio (VCS)
* Git
* GitHub Command-line utility (GH CLI)
1. Create an account on GitHub.com.
2. Download and install VCS (paru Visual Code Studio or go to the website).
3. Open VCS and add some extensions (Don't forget to enable :D ) : -
   * ESLint (Microsoft)
   * Prettier ESLint (Rebecca Vest)
   * Live Server (Ritwick Dey)
   * Install shell command (Ctrl-P; "Shell Command: Install 'code' command in PATH") to allow opening VCS in the current directory with '**vscode .**' (Arch terminal command).
4. Install git (pacman -S git) (See https://wiki.archlinux.org/title/Git).
5. Configure git (git config --global user.name "Name"; git config --global user.email "email").
6. Create a directory on your local machine for your work (mkdir ~/Docs/code/) and cd into it.
7. Create a new file (touch index.html)
8. Install GH CLI (paru github-cli).
9. Open VCS in the current directory (vscode . ) and open a terminal (terminal tab) (Ctrl+`).
10. Configure GH CLI using the terminal of VCS. (gh ; get the code from the page that opened in the default browser; input the code into the command-lineof VCS).
11. Create the repository on GitHub first (Click your avatar and select Repositories; New; Give a name and keep the defaults). Heed the two options, use Push Local and copy the commands.
12. On the local machine : -
* git init (Creates the local repo and branch name - master).
* git status (Gives information on which files have been modified).
* git add . (Adds everything '.' to staged status).
* git commit -m "reason" (Updates the repo and gives a description of the changes).
* git remote add (copy the command from the GitHub repo page).
The setup is complete.
13. Test the work flow : -
- In VCS create a new README.md.
- Add some text to the file.
- Add the file to the local repo with 'git add .' .
- Commit/Stage the changes 'git commit -m "Added README.md" '.
- Push to the cloud 'git push'.
- Check the repo for the file on GitHub.
Always start by pushing the local repo to the remote as this can save possible confusion.

---

Information Sources:
## HTML
* https://w3schools.com/html
* https://html.com/cheat-sheet
* https://www.freecodecamp.org/news/html-starter-template-a-basic-html5-boilerplate-for-index-html/

## CSS
* https://w3schools.com/css
* https://css-tricks.com/snippets/css/a-guide-to-flexbox
* https://flexboxfroggy.com
### CSS Units
Julia Evans @b0rk "CSS units" cartoon
#### Absolute Units
* px - pixels
* pt - points
* cm - centimeters
* mm - millimeters
* in - inches
#### Relative Units
* % - percentage relative to parent
* em - relative to font-size
* rem - relative to root font-size
* vh - viewport height
* vw - viewport width
### CSS Specificity
 (High to Low) : Inline - ID - Class - Tag

## JavaScript
* https://plebdevs.com/content?tag=cheatsheet
* https://www.w3schools.com/js/js_htmldom_eventlistener.asp
* https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
JavaScript is predominantly used for : -
* Document Object Model (DOM) manipulation;
* Event listening;
* Retrieving external data (Async Operations & Fetch API).
### Variable declaration
* var - function-scoped (avoid using in modern JavaScript).
* let - block-scoped. Can be reassigned.
* const - block-scoped. Can't be reassigned (but object properties can be modified).


## Markdown
* https://markdownguide.org
