# Deploy updates

With our code updated, it's time to turn our attention to deploying it. We will create a new branch in our local repository and push it to GitHub. We'll then create a PR to see how Azure Static Web Apps manages the workflow, and finish by merging our code.

## Create a new branch and push to GitHub

- Hit **Ctl-\`** (or **Cmd-\`**) to open the [Integrated Terminal](https://code.visualstudio.com/docs/editor/integrated-terminal)
- If Azure Functions are still running, hit **Ctl-C** to stop execution
- Type the following Git commands

``` bash
# Create a new branch and checkout
git checkout -b functions

# Add all code
git add .

# Commit our changes
git commit -m "Added functions"

# Push to GitHub
git push -u origin functions
```

## Create a PR in GitHub and manage workflow

The action created by Static Web Apps executes on either commits or pull requests (PR) into the branch you selected on initial setup of the Azure resources. If you make a PR, the branch will be deployed into a new staging environment in Azure. This is great for testing and ensuring everything works correctly.

### Create the PR

- Return to your repository on GitHub
- Click **Pull Requests**
- Click **New Pull Request**
- On the two dropdowns, set the left to **base: master** (your main branch) and the right to **compare: functions**
  - This will bring our new branch into the existing one
- Click **Create pull request**
  - **DO NOT** click on merge

Shortly after you create the PR you will notice a couple of action items will appear on the screen. This is your action executing. Your code is now being deployed to Azure!

### View the staging environment on Azure

> **NOTE:** This will take a few minutes to complete

- Return to the tab with the Azure Portal and your Static Web App
- Click on **Environments**
- Click **Refresh** periodically until a new entry appears under **Staging**
- Click **Browse** next to the new environment under **Staging**

The new entry (environment) is a staging environment. It's designed for final testing before pushing to production and making it live. You will notice the name on Static Web Apps will have **-1** appended to it. You should also notice the first "dog" listed on the page is now **Azure**!

### Complete the merge to push to production

Now that we've confirmed our code works, it's time to push it to production!

- Return to GitHub and your PR page
- Click on **Merge** and **Confirm**

You will again notice the actions executing. This time they are pushing your new code and removing the staging environment.

- When the actions complete, return to the **Environments** tab on Azure
- Click **Browse** for your **Production** environment

You should now notice your new code is executing on production!

## Congratulations! You've now deployed new code to Azure

Azure Static Web Apps is designed to host full stack web applications while integrating into common developer workflows. With Azure Functions as the platform for back-end compute, you can focus on writing code not web server deployment.
