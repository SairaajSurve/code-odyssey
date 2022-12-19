<p align='center'><img src='https://user-images.githubusercontent.com/80088008/208483596-64e26f9a-7fdd-4e24-a717-e421f1fc5a45.png' width="150" ></p>

# Code Odessey
# Roots of India
Explore the hidden gems in rural India

Demo: https://youtu.be/qidhOGHmjMM

# The Problem
Due to rising international tourism and westernization, people tend to buy imported products. This affects our country's GDP in a negative way. A probable solution to this is to use local products. Rural India is a hidden gem. Most of these imported artificats are made by Indians and sold at affordable prices by the locals. Only bottleneck is people aren't much aware of this.

# The Solution
Our responsive website Roots of India, which:
- Creates awarness about rural tourism in India
- Promotes use and buying of handmade art and crafts made by the local skilled-people of India
- Provides employment opportunities to the local residents of rural areas

# Technologies used:
- HTML
- Tailwind CSS
- JavaScript
- MongoDB
- Node JS
- Express JS
- Axios
- Node package manager (npm)

# Challenges we ran into
- Making site responsive: Solved using tailwind css utilities
- Allocation of specific tour guide: Solved using pincode matching in Backend

# Getting Started

## Prerequisites
- Install Node JS - Refer to https://nodejs.org/en/ to install nodejs

## Cloning the repository locally
- Clone the project on localhost
```bash
git clone https://github.com/Devang-Shah-49/code-odyssey.git
```
- Move to the project directory
```bash
cd .\code-odyssey\
```
- Install required npm packages
```bash
npm install
```
## Connecting to the Database
- Spin up your cluster in MongoDB and also create a `.env` file
- Replace your connection with URI in `.env`
- If you face any problems, refer to the [MongoDB](https://www.mongodb.com/blog/postquick-start-nodejs-mongodb--how-to-get-connected-to-your-database) website.

## Connecting to the Database if you haven't used MongoDB Atlas before
Install the MongoDB Node.js Driver with the following command:
```bash
npm install mongodb
```

Set up a [MongoDB Atlas Database](https://www.youtube.com/watch?v=rPqRyYJmx2g) by following this short MongoDB setup video till the *3:20* mark. Stop after that mark!

On your Cluster home page, select CONNECT > Connect your application. 
1. Select Node.js in the drop down for your driver, and select the latest version. 
2. Then, copy the connecting string (URI).
3. Paste this string as the value of mongoURI inside `.env` of this project.

Replace the `<password>` section of the string with your Database Access password. Your server should now successfuly connect to MongoDB!

## Running the website locally
- Execute the command 
```bash
npm run dev
```
- Nodemon will automatically run node server.js for you
- If everything executed properly, you will get a log `Connected at 3001` on the console.
- Hurray! The web would now be up and running on `http://localhost:3001/`

# Screenshots of the website
![home](https://user-images.githubusercontent.com/80088008/206693635-cc6c1ef1-f545-4917-a331-9940a45369f5.png)
![places_to_visit](https://user-images.githubusercontent.com/80088008/206693685-a06cdc71-aa66-4c66-a3d5-932bd7d18cc5.png)
![kutch1](https://user-images.githubusercontent.com/80088008/206693655-2e2d46ff-8ab1-45ab-847d-69fc21d789a3.png)
![kutch2](https://user-images.githubusercontent.com/80088008/206693667-6b547424-2d57-4bad-ab5e-4137c9b34711.png)
![guide_alloc](https://user-images.githubusercontent.com/80088008/206693603-c318c18c-da60-4d63-bba0-0034d78952c7.png)

# Bug Reporting/Feature Request
- Feel free to [open an issue](https://github.com/Devang-Shah-49/code-odyssey/issues) on GitHub if you find any bug or to request any additional features.
- Connect with me on [LinkedIn](https://www.linkedin.com/in/devang-shah-63a29b210). I would love ❤️️ to help!
