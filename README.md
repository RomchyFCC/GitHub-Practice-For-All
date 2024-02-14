# GitHub Practice For All
[![first-timers-only](http://img.shields.io/badge/first--timers--only-friendly-blue.svg?style=flat-square)](http://www.firsttimersonly.com/)

🌐 [Project Website](https://romchyfcc.github.io/GitHub-Practice-For-All/)
📝 [FreeCodeCamp Forum Post](https://forum.freecodecamp.org/t/git-and-github-practice-for-all-us-noobies/171808)
👑 [Our Contributors so far!](#contributors)

### How to contribute:

1. 🍴 Fork a copy of this project to your own repository in the upper-right corner of this page!
2. 📥 Now create a `git clone` in your local storage. The step-by-step guide is available [here](#how-to-pr).
   - Create a new branch `git checkout -b <branch-name>`
   - Set `upstream` branch so you can keep your local files synched with the original repository; [Details](#how-to-sync-your-local-repo-with-the-original-repo)
3. 📝 Now open the files in your text editor of choice.
4. ✍️ Write your name anywhere in the file so it shows up on the webpage!
5. 🚀 Now git push the changes made to your repository `git push origin <branch-name>`
6. 🎉 Submit a pull request in this repository; [Details](#how-to-pr)
7. 👀 THAT'S IT, you're done! We will review the Pull Request, and if it fits the theme, we will merge it.
8. 💪 For the best team-like experience, stay in sync with our repository and contribute more by resolving our [issues](https://github.com/RomchyFCC/GitHub-Practice-For-All/issues) or submit your own!
9. 🙌 Thank you for contributing!

### A few guidance rules to follow:
- You mustn't delete/replace the names already in the file
- You can contribute more than once
- You can also style the whole document, remove or place new styles to your desires, BUT the names already approved must stay in the document and must show up on the webpage (no matter how big or small, hint hint)
- You can put your name anywhere in the body tag of the HTML file or even create a new page linked to the first one and put it there
- Me and darrenFj will use our discretion with merge conflicts and will notify all parties of the decision (this sounds so formal)
- Your best weapon here is your creativity
- All pull requests will be approved as long as they meet the first criteria

### Additional Resources

For more information on GitHub and Markdown, check out these resources:
- [GitHub and Markdown Guides](https://github.com/JABedford/Front-End-Bible/tree/master/Learning%20Resources/Github%20and%20Markdown%20Guides)

### 📹 Github First Timer Video Tutorial

If you prefer visual learning, you might find this video tutorial helpful:
- [Quick GitHub tutorial](https://www.youtube.com/watch?v=iv8rSLsi1xo&ab_channel=AnsonAlexander)
---

### 🙌 Special thanks to [JacksonBates](https://github.com/JacksonBates) for the well-written contributions documentation!

# Contributing

Please note that we have a code of conduct. Please follow it in all your interactions with the project.

🔍 **If you don't know where to start, check the "Guides" file for more information.**

## Making contributions

If there is a particular issue you want to fix, communicate your intention via the comments on the specific issue. This will ensure that you are not working on something someone else is close to finishing, and also allows you to discuss your approach and get any help or advice you may need before starting.

If the bug or feature you wish to work on is not yet in the existing issues, add it to the issues thread first and comment regarding your intention to work on it straight away.

Aside from that, stick to the fork-pull workflow outlined below.

## Getting started

+ Fork this repo before making any changes - you will be initially pushing commits to **your fork**, not this repo.  

+ Create issues on **this** repo, not your fork, if you encounter bugs, non-ideal behavior/css, or wish to request features.

<b>Below, you will find the summary of git guides from the Guides file. </b>

## How to PR
(pull request)

+ On your forked version of the repo on GitHub, click the green 'clone or download' button and copy the link.
  + The link will look something like this: `https://github.com/RomchyFCC/GitHub-Practice-For-All.git` (but with your username, not mine)
+ In the terminal write the following command to clone the repo. This will give you a local copy to work on:
  + `git clone <paste-the-link-of-your-repo.git-here>`
  + eg: `git clone https://github.com/RomchyFCC/GitHub-Practice-For-All.git`
+ In your terminal navigate to the folder that was just created.
  + The command for this is `cd`
  + eg: `cd GitHub-Practice-For-All`
+ If your version of the repo is ever out of sync with the original repo, i.e. there are new commits on the master branch of the original that you don't have, you need to sync your repo before adding your contributions. **See below, in the section called 'How to sync your local repo with the original repo' for details or click [here](#how-to-sync-your-local-repo-with-the-original-repo)**
+ **Create a new branch to work on** (you'll do this for your real contributions, too).
  + At the terminal, in the correct folder, run `git checkout -b <new-branch-name>`
  + `<new-branch-name>` should be replaced with something sensible, like `feature-login-form` or `fix-login-bug`
  + Altogether, an example: `git checkout -b feature-login-form`
+ Make the changes to the appropriate files.
+ Push your change to your fork:
  + `git add .` (the `.` adds all modified and created items up for commit)
  + `git commit -m "<comment-about-your-commit>"` (the `-m` signifies that you will pass a commit comment as an argument in quotes)
  + `git push origin <your-branch-name>`
+ Open a pull request. Follow the guide here: [Creating a pull request from a fork](https://help.github.com/articles/creating-a-pull-request-from-a-fork/)
  + @mention anyone you specifically want to review your PR
+ From there, a reviewer will go through the rest of the process with you.
  + You may be required to make changes to your code before it gets pulled into the master branch - have patience and know that the difficult bits are done.

+ Now you can delete your local and remote branches:
  + switch to `master` branch:  
    `git checkout master`
  + List all branches:  
    `git branch`  
    you should see `* master` and the second branch you created previously
  + Now delete that second branch:  
    `git branch -D <name-of-the-branch>`
  + Delete the second branch from your GitHub:  
    `git push origin --delete <name-of-the-branch>`

## How to sync your local repo with the original repo

This setup should be done only once for the repo.

+ List the current configured remote repository for your fork:
  + `git remote -v`
  + You should see two links with `origin` in front of them.
  + The links will begin either with `https` or `git@`
+ Specify a new remote upstream repository that will be synced with the fork:
  + `git remote add upstream https://github.com/RomchyFCC/GitHub-Practice-For-All.git`
  + or
  + `git remote add upstream git@github.com:RomchyFCC/GitHub-Practice-For-All.git`
  + depending on which protocol you saw in the first step.
+ Verify the new upstream repository you've specified for your fork:
  + `git remote -v`
  + Now you should see four links: two `origin` and two `upstream`
  + This should be done to check for updates on the remote repo:

+ Get data from the original repo:
  + `git fetch upstream`
+ Switch to the `master` branch of your local repo:
  + `git checkout master`
+ Merge changes from the original repo into your local master branch:
  + `git merge upstream/master`
+ Now push changes to your GitHub repo:
  + `git push`

+ Now your local repo and your GitHub repo are up to date with the original repo you forked from.

### Our Pledge

🤝 We're committed to creating a welcoming and inclusive environment for all contributors and community members. Regardless of your background, identity, or experience level, we want everyone to feel safe and valued.

### Our Standards

✨ To foster a positive atmosphere, we ask everyone to:

- Use welcoming and inclusive language
- Respect differing viewpoints and experiences
- Accept constructive criticism gracefully
- Focus on the collective good of the community
- Show empathy towards fellow members

🚫 Unacceptable behaviors include:

- Using sexualized language or imagery
- Making unwelcome sexual advances
- Engaging in trolling or personal attacks
- Harassing others, publicly or privately
- Sharing private information without permission

### Our Responsibilities

🛡️ As project maintainers, we're responsible for:

- Clarifying and upholding community standards
- Taking appropriate action in response to unacceptable behavior
- Removing or rejecting contributions that violate these standards
- Ensuring a safe and respectful environment for everyone

### Scope

🌐 This Code of Conduct applies to all spaces associated with our project, including online forums, social media, and offline events. We expect all members to represent the project in a positive and respectful manner.

### Enforcement

🔍 If you experience or witness any behavior that violates our Code of Conduct, please report it to the project team (@RomchyFCC & @DarrenfJ). All reports will be promptly reviewed and addressed in a fair and confidential manner.

🔨 Project maintainers who fail to uphold this Code of Conduct may face consequences, as determined by the project's leadership.

### Attribution

📜 This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 1.4, available at [http://contributor-covenant.org/version/1/4][version].

[homepage]: http://contributor-covenant.org
[version]: http://contributor-covenant.org/version/1/4/

### Any questions?
Could this CONTRIBUTING file be improved? Was anything inaccurate or unclear? Please open up an issue and suggest appropriate fixes. Good documentation is just as crucial as good code - so documentation contributions are just as valued as fancy code contributions!

## Contributors

- [Darren](https://github.com/DarrenfJ)
- [Ariel Leslie](https://github.com/ArielLeslie)
- [Ivan Oung](https://github.com/ivanoung)
- [Tom](https://github.com/moT01)
- [Aaron Schmidt](https://github.com/Schmidt-Aaron)
- [Alex Nielsen](https://github.com/bushbass)
- [Sachithra Lahiru Kahatapitiya](https://github.com/Sacheec47)
- [dmac0505](https://github.com/dmac0505)
- [Alan Moir](https://github.com/mills3)
- [stacyHere](https://github.com/stacyHere)
- [akashksunny13](https://github.com/akashksunny13)
- [Firuz Shoev](https://github.com/FiruzShoev)
- [Bratislav](https://github.com/bracar)
- [Catherine Fromont](https://github.com/catherinefromont)
- [Tian](https://github.com/tian-dutoit)
- [Elyse Wyatt](https://github.com/ElyseWyatt)
- [rkimmi](https://github.com/rkimmi)
- [Sheena Mattu](https://github.com/sheenapercy)
- [Pinja Pessi](https://github.com/ppessi)
- [h1tag](https://github.com/h1tag)
- [Danielle Shwed](https://github.com/danielleshwed)
- [dinamahmoud25](https://github.com/dinamahmoud25)
- [sunil](https://github.com/usunil0)
- [Nirmal Dalmia](https://github.com/nirmaldalmia)
- [mukul7](https://github.com/mukul7)
- [Ivan Yakimov](https://github.com/ivan3123708)
- [Ayush](https://github.com/heyayushh)
- [Bing](https://github.com/BingZL1983)
- [Dimitra Karamperi](https://github.com/dimikara)
- [Daria Puch](https://github.com/dar-puch)
- [Ravi Kishore Thella](https://github.com/ravikishorethella)
- [Rob Williams](https://github.com/poppashingles)
- [richardson3535](https://github.com/richardson3535)
- [Jacek Złoty](https://github.com/jzloty)
- [Rose](https://github.com/rkett)
- [vignesh](https://github.com/vignesh240)
- [Kevin T Reynolds](https://github.com/OnlinePseudonym)
- [William Larry](https://github.com/geekiam23)
- [Akshay Kumar](https://github.com/akshaykumar123)
- [Daniel Cook](https://github.com/dcookwebdev)
- [Tee Wen Seng](https://github.com/tws9797)
- [Gan Chew Ying](https://github.com/gcyying123)
- [Leandro Bitencourt](https://github.com/lavela)
- [Kyle Fertile](https://github.com/Fertalicious)
- [Dev Kant Chouhan](https://github.com/devkant)
- [Sergio Enriquez](https://github.com/saeg2k3)
- [Oleks Sobol](https://github.com/OleksSobol)
- [Whyzar](https://github.com/whyzar)
- [Nicholas Comendant](https://github.com/ncomendant)
- [Carlos Martinez](https://github.com/UFCarlosMartinez)
