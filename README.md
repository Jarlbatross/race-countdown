# Mari vs. 42.2 km — Arctic Run Countdown

A fun countdown site tracking Mari's bet to run the [Arctic Run](https://thearcticrun.com/) marathon on **June 9, 2029**.

## Live site

After deploying to GitHub Pages, your site will be at:

**https://\<your-github-username\>.github.io/race-countdown/**

## Deploy to GitHub Pages

### 1. Create the repo on GitHub

Go to [github.com/new](https://github.com/new) and create a public repo named `race-countdown`.

Or, if you have the [GitHub CLI](https://cli.github.com/) installed:

```bash
gh repo create race-countdown --public --source=. --remote=origin
```

### 2. Push the code

From this folder:

```bash
git init
git add .
git commit -m "Add Arctic Run countdown site for Mari's 2029 bet"
git branch -M main
git remote add origin https://github.com/<your-github-username>/race-countdown.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Open your repo on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose branch **`main`**, folder **`/ (root)`**, then **Save**.
5. Wait 1–2 minutes. GitHub will show the live URL at the top of the Pages settings page.

## Local preview

Open `index.html` in your browser, or run a simple server:

```bash
npx serve .
```

## Customization

- **Race date/time**: edit `RACE_DATE` in `script.js` (currently midnight June 9, 2029, Europe/Oslo).
- **Bet start date**: edit `BET_START` in `script.js` (used for the progress bar).
- **Quips**: add or edit strings in the `QUIPS` array in `script.js`.
