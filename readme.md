# **Image Processing API**

## This is a lightweight web application developed in TypeScript that was built to resize images and use them as place holders maybe in one of your projects, it also gives you the option to upload image to the server then resize them using the images end point

## **i. Installation**

    ### **Dependencies**

### **Production**

     1. ExpressJS
     2. ejs
     3. Multer
     4. Sharp

### To install production only dependencies use the following command

    npm install --production

### **Development**

    1. @types/ejs
    2. @types/eslint
    3. @types/express
    4. @types/jasmine
    5. @types/multer
    6. @types/node
    7. @types/prettier
    8. @types/sharp
    9. @types/supertest
    10. @typescript-eslint/eslint-plugin
    11. @typescript-eslint/parser
    12. eslint
    13. eslint-config-prettier
    14. eslint-plugin-prettier
    15. jasmine
    16. jasmine-spec-reporter
    17. nodemon
    18. prettier
    19. supertest
    20. ts-node
    21. typescript

### To install all dependencies use the following command

    npm install

## **2. Build**

After installing dependencies you can start with building the application using the following command

    npm run build

## **3. Start Server**

Now you can start the server using following command

    npm run startserver

Alternatively in development you can use Nodemon with the following command

    npm run start

## **4. Lint & Prettier**

You can always organize and lint your code using the following commands

    npm run lint
    npm run prettier

## **5. Run tests using Jasmine**

Using the following command

    ```
    npm run test
    ```

## **ii. Usage**

### **1. Image resizing End point**

You can make a get request to this end point to resize on of the images tha are one the server

     base_url/images?image=<image_name>&width=<width in pixels>&height=<height in pixels>&format=<mime type>

This will direct show you the file with requested width and height.

### **2. Home page**

In the home page you can upload files that you want to resize or browse the images that are already available on the server.
