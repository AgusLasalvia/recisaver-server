# 🍽️ Recipe Saver API

This is a **Node.js** based API server built with **Express.js**. It serves as the backend for a **Recipe Storage and Sharing Application**, where users can store their recipes, view shared recipes, and interact with each other's culinary creations. The server utilizes **Prisma ORM** for efficient database management, interacting with a **PostgreSQL** database hosted on **Supabase**. This project is using **Clean Acrchitecture**(ish) without all the interface and injections but yes it folder distribution

## 🚀 Features
- **User Management**: User registration, authentication, and profile management.
- **Recipe Storage**: Users can create, update, and delete recipes.
- **Recipe Sharing**: Recipes can be shared with other users.
- **Database**: PostgreSQL with Prisma ORM for seamless data storage and retrieval.
- **Real-Time Updates**: Supabase handles real-time data synchronization for shared recipes.
- **Image Storage**: Recipes can include images, with support for file uploads.
  
## 🛠️ Technologies Used
- **Node.js**: JavaScript runtime for building scalable server-side applications.
- **Express.js**: Web framework to build and manage APIs.
- **Prisma ORM**: Object-relational mapping tool for interacting with PostgreSQL.
- **PostgreSQL**: Relational database for storing recipe data.
- **Supabase**: Cloud platform that provides a managed PostgreSQL database and other backend services like authentication and real-time features.
- **JWT (JSON Web Tokens)**: Authentication mechanism for secure user login and session management.
- **Multer**: Middleware for handling file uploads, specifically images for recipes.

## 📋 Prerequisites

Before you begin, make sure you have the following installed on your machine:
- **Node.js** (LTS version)
- **npm** (Node Package Manager)
- **Git** (for version control)
- **A Supabase account** for managing the PostgreSQL database.


