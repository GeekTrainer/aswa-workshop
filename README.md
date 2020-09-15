# Azure Static Web Apps

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) is a preview service which allows you to automatically build and deploy full stack web applications from a GitHub repository to Azure. With Azure Static Web Apps you're able to develop using the front end framework you like (such as Angular, React or Vue.js), and have an integrated deployment pipeline using GitHub.

To help you get started, I've created a workshop based around this repository. It will walk you through the basic features.

## Scenario

We want to display a list of dog names on a page. We will start by running everything in the client and deploy our page to Azure. We'll then add server-side code through Azure functions and test it locally. We'll close by deploying our changes to Azure. All of this will be completed with just a few tools installed locally, GitHub, and of course Azure.

## Tooling

- [Node.js](https://nodejs.org/) to run Azure Functions Core Tools
- [Azure Function Core Tools](https://www.npmjs.com/package/azure-functions-core-tools)
- [Visual Studio Code](https://code.visualstudio.com/)
  - [Azure Functions for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions) to add Azure Functions
  - [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to quickly host your application
  - [Bootstrap 4, Font awesome 4, Font Awesome 5 Free & Pro snippets](https://marketplace.visualstudio.com/items?itemName=thekalinga.bootstrap4-vscode) to quickly bootstrap our application
- [Azure account](https://azure.microsoft.com/account/free)
  - If you're a student, you can enroll for [Azure for Students](https://aka.ms/a4s) for $100 in free credit and other bonuses
- [Git](https://git-scm.com/)
- [GitHub account](https://github.com/join)

> **NOTE**: While Visual Studio Code isn't required to use Azure Static Web Apps, we are going to use the tool during our workshop.

## Core steps

1. [Start with an HTML project](1-starting.md)
2. [Push your code to GitHub](2-github.md)
3. [Create a Static Web App on Azure and deploy our code](3-create-aswa.md)
4. [Add Azure Functions for server functionality](4-functions.md)
5. [Deploy updates to Azure](5-deploy-updates.md)

## Learn more

- [Azure Static Web Apps Documentation](https://docs.microsoft.com/azure/static-web-apps)
- [Authentication and authorization for Azure Static Web Apps Preview](https://docs.microsoft.com/azure/static-web-apps/authentication-authorization)
- [Publish an Angular, React, Svelte, or Vue JavaScript app and API with Azure Static Web Apps](https://docs.microsoft.com/learn/modules/publish-app-service-static-web-app-api/)
