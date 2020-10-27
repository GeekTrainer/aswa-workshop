# Push code to GitHub

Azure Static Web Apps is designed to meet developers where they are, using existing workflows. The most common workflow when writing code is to create and use a [GitHub repository](https://docs.github.com/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github).

## Create a GitHub repository

- Navigate to [GitHub.com/new](https://github.com/new) to create a new repository
- Name the repository **aswa-dogs**
- Set the repository to public
- Click **Create repository**.

## Enable our local repository

Let's set up our local repository so we can push our code to GitHub.

- Return to **Visual Studio Code**, and hit **Ctl-\`** (or **Cmd-\`**) to open the [Integrated Terminal](https://code.visualstudio.com/docs/editor/integrated-terminal)
- In the **integrated terminal**, execute the following [git](https://git-scm.com/) commands

``` bash
git init
git add .
git commit -m "Initial commit"
```

The above commands created our local repository, added all current code (make sure all files are saved!), and then committed all changes. Keep in mind this is done locally; the next step is to push everything to GitHub.

## Push our code to GitHub

With our local repository created, we will now push our code to GitHub.

- Execute the following code in the Integrated Terminal

``` bash
git remote add origin https://github.com/<REPLACE-ME>/aswa-dogs.git
git branch -M master
git push -u origin master
```

> **NOTE:** Replace **\<REPLACE-ME\>** with your GitHub handle.

The above commands will setup your GitHub repository as a remote repository, setup the main branch as **master**, and then push your code to GitHub.

## Next steps

Our code is now on GitHub! Let's setup our [Azure Static Web App](3-create-aswa.md)!
