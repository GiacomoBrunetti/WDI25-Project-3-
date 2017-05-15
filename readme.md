# AccommoData

##GA WDI London - Project 3

###Registering Homelessness 

#####[View it here!](https://mysterious-beach-72095.herokuapp.com/)

![](./src/images/home.png)

#####About

AccommoData is a fully restful application. It relies on user submissions to measure homelessness against available resources in London.

![](./src/images/info.png)

#####How it Works

Once registered and logged in, users can submit a form registering homelessness in a certain location. If a submission already exists within 100m of their location, their data is added to that submission, and an average is calculated based on the number of submissions in any one place. 

Users can edit and delete their own submissions. From the info page, they can see all user submissions in the form of markers on a map, along side all available resources for homeless people in London. They can filter by info and resource type. 


#####Build

* HTML 5, SASS, Angular, AJAX, Node.js, and Google Maps API were used to create this application.
* The font 'Montserrat' was used across all pages.

![](./src/images/collage-accommoData.pdf)

#####Future Additions

We would like to add a way of mapping the collected data across time, so increases and decreases of homelessness in certain areas can be clearly communicated. 

#####Problems & Challenges

Updating user locations on marker clicks, or autocomplete, and storing that data was difficult. As was the logic behind finding duplicate submissions based on the location of users, and averaging out the data. 

