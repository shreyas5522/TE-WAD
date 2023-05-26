
![Github Profile](Screenshot.PNG)

# GitHub Version Control Setup

This guide will help you create a version control account on GitHub and use Git commands to create a repository and push your code to GitHub.

## Steps

1. Sign up for a GitHub account:
   - Go to the [GitHub website](https://github.com).
   - Click on the "Sign up" button and follow the instructions to create your account.

2. Install Git:
   - Download and install Git for your operating system from the official [Git website](https://git-scm.com/downloads).
   - Follow the installation instructions specific to your operating system.

3. Configure Git:
   - Open a terminal or command prompt.
   - Set your username by running the following command, replacing `<username>` with your GitHub username:
     ```
     git config --global user.name "Your GitHub Username"
     ```
   - Set your email address associated with your GitHub account by running the following command, replacing `<email>` with your email address:
     ```
     git config --global user.email "your-email@example.com"
     ```

4. Create a new repository on GitHub:
   - Go to the [GitHub website](https://github.com).
   - Click on the "+" icon in the top-right corner and select "New repository."
   - Provide a repository name, optional description, and choose any additional settings you prefer.
   - Click on the "Create repository" button.

5. Initialize a local Git repository:
   - Open a terminal or command prompt.
   - Navigate to the directory where you want to create your local repository.
   - Run the following command to initialize a new Git repository:
     ```
     git init
     ```

6. Add and commit your code:
   - Add your code files to the repository by running the following command:
     ```
     git add .
     ```
   - Commit the changes with a meaningful message:
     ```
     git commit -m "Initial commit"
     ```

7. Connect your local repository to the remote GitHub repository:
   - Go to the GitHub repository you created in step 4.
   - Copy the remote repository's URL (e.g., `https://github.com/your-username/your-repo.git`).
   - Run the following command to add the remote repository:
     ```
     git remote add origin <remote-repository-url>
     ```

8. Push your code to GitHub:
   - Run the following command to push your code to the remote repository:
     ```
     git push -u origin master
     ```
   - You may be prompted to enter your GitHub username and password.

That's it! Your code should now be pushed to the GitHub repository you created. You can visit your repository on GitHub to verify that the code has been successfully pushed.
