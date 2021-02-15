<h1 align="center">  🛒 &nbsp; Shopping App 🛒 </h1>

> Built with MERN stack (MongoDB, Express, React and Node).


### <h2 align="center"> ⚡️⚡️⚡️ &nbsp; [Live Demo](https://buyashirt.herokuapp.com/) ⚡️⚡️⚡️ </h2>

## 📜 &nbsp; Table of contents

- [Main Features](#--main-features)
- [Technologies](#--technologies)
- [Key Concepts](#--key-concepts)
- [UML Diagram](#--uml-diagram)
- [Setup](#--setup)

## 🚩 &nbsp; Main Features

> This App was made to track the order state since the customer place it
> once it's shipped the seller mark it as shipped, and then the shipper mark it as delivered.

#### Project methodology

- **Register and signin system**
  - Everyone is registered as a customer.
  - Customers can apply to be sellers. 
  - Shipper only created by the Admin.
  - Admins can create any other admins.
- **Product life cycle**
  - A seller add a product.
  - A customer order some products, number in stock decreases.
  - The customer tracks the order's state since it's placed. 
  - The product's seller get a notification about the order. 

- **Other facilities**
  - Users can edit their account info. 
  - Users can track their order's state. 
  - Users can add, delete or edit addresses. 
  - Users can have a wishlist with any amount of products.

#### Users roles -

- **Customer**
  - Sign up & login.
  - Switch the account to seller.
  - Purchase order of any amount of products.

- **Seller** -> all above plus.
  - Add and edit his own products.
  - Receive notifications of the new orders the customer make (only his products).

- **Admin** -> all above plus
  - Add, Edit and Delete categories.
  - Add, Edit and Delete any products.
  - Create other Admins.
  - Restrict any user from all the permissions.

## 💹 &nbsp; Technologies

> Project is created with:

#### Backend

- Express
- Mongoose
- Json Web Token (For authentication)
- bcryptjs (for data encryption)

#### Frontend

- React JS
- React-router (To handle routing)
- Axios (For http requests)
- React Bootstrap


## 💡 &nbsp; Key Concepts

- MVC (Model-View-Controller)
- CRUD operations
- Authentication system
- Encrypting passwords
- Images handling using multer
- OOP (Object Oriented Programming)

## 📈 &nbsp; UML Diagram

> It's my first time to design a UML so maybe it sucks :D

![UML Diagram](readmeFiles/arche.jpg)

## 💻 &nbsp; Setup

To run this project, install it locally using npm:

1. First and foremost, open your terminal and type to clone this repository.
  ```
  git clone https://github.com/HiteshBucky/buyshirt.git
  ```
2. Install the necessary dependencies to your app by running 
  ```
  npm install
  ```
3. Launch the development build of the app, by running  
  ```
  npm start
  ```
4. Open your favourite browser and type
  ```
  http://localhost:3000/
  ```
Happy Coding :)

# Author

👤 &nbsp; **Hitesh Kumar**

- Github: [@HiteshBucky](https://github.com/HiteshBucky)
- Linkedin: [@hiteshkumar87](https://www.linkedin.com/in/hiteshkumar87/)
- Email: [hk824778@gmail.com](mailto:hk824778@gmail.com)
