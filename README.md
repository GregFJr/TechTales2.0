# TechTales

TechTales is a CMS-style blog platform tailored for developers to share their experiences, tutorials, and thoughts with a community of like-minded individuals. With an emphasis on user experience and design, TechTales allows tech enthusiasts to immerse themselves in content that speaks to their professional journeys and interests.

## Features

- **Homepage Overview**: Visitors are welcomed with a series of blog posts, navigational links to the homepage, dashboard, and an invitation to log in.
- **User Registration**: Newcomers can sign up with a username password and email, while returning users can sign in with their existing credentials.
- **Dashboard Accessibility**: Logged-in users gain access to a dashboard displaying their posts and options to create new ones or edit existing ones.
- **Blog Interaction**: Users can read detailed blog posts, which include the title, content, author's username, and the date of posting.
- **Post Management**: Users can contribute new blog posts and manage (update or delete) their existing ones from the dashboard.
- **Secure Logout**: Users can log out of the site, which secures their session.
- **Session Timeout**: For enhanced security, users are prompted to log in again after a period of inactivity.

## Usage

1. **Homepage**: Visit the homepage to explore published blog posts.
2. **Navigation**: Utilize the navigation links to traverse the site.
3. **Sign Up or Sign In**: Register for a new account or log in with your credentials.
4. **Dashboard**: Manage your blog posts - create, view, edit, or delete.
5. **Logout**: Ensure to log out after your session.

## Upcoming Features

- **Comment System**: A forthcoming feature will allow users to comment on blog posts, fostering community interaction and discussion.

## Technical Stack

- Server-side powered by Node.js and Express.js.
- Database interactions managed by Sequelize ORM.
- User sessions handled by express-session.
- Views rendered server-side with express-handlebars.
- Adheres to the MVC architectural pattern for code organization.

## Local Setup

1. Clone the repo to your machine.
2. In your CLI, navigate to the project's root directory.
3. Run `npm install` to install dependencies.
4. Set up your `.env` file with the required environment variables.
5. Use Sequelize CLI to set up your database.
6. Start the app with `npm start` and head to `localhost:3001` in your browser.

## Contributions

Contributions are always welcome! Please fork the repo and submit a pull request with your ideas.

---

Join TechTales and start sharing your tech stories with a growing community!
