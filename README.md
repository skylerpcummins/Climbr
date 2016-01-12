# Climbr

www.climbr.xyz

# Application Description

Flickr-inspired climbing-photo uploading / sharing website with
geotagging functionality to identify photos by climbing area.
Climbr allows users to:

- Create account
- Log in / out
- Upload photos
- Create climbing area, add photos to area
- View image index page
- View image show page
- View user show page
- View area show page
- Geotag images via area
- Filter images by climbing area

## Design Docs
* [DB schema][schema]

[schema]: ./docs/schema.md

## App Components

Climbr is built on React.js and follows the Flux unidirectional data flow pattern. For example, if a user interacts with the area creation form to add a new climbing area, an AJAX request will be issued to POST a new area. Upon success, the resultant data is passed to the appropriate 'store'. The store then emits a notification to any reliant components, which in turn pass more data to the appropriate stores. This continues until the page is fully updated.

### User Authentication

Climbr makes use of BCrypt to hash and salt passwords, creating a password_digest, which is stored in the database. Session tokens are generated using SecureRandom. Measures are taken to guarantee that any two session tokens are never the same. These steps ensure secure login, and that users cannot be logged in from more than one device at a time.

### Index Pages

The various photo index pages (index, area, user) are built using the React Masonry Component library. The React Masonry Component library automatically finds the optimal arrangement for a group of photos of different aspects. Clicking on a photo on the main index page or on the user index page activates the React Router, which triggers the proper re-rendering to end up at the photo show page. Clicking on a photo on the areas index page also activates the React Router, and renders the proper area show page.

![Alt text](./app/assets/images/masonry_example.png?raw=true)

### Photo Show Page

The photo show page renders the photo in an optimal size, as well as a map with a marker representing the proper climbing area. The photo show page also displays the photo title, and a link to the area that the photo was tagged with.

### Area Creation Page

The area creation page renders a map, as well as a form to supply the necessary information for adding a new climbing area. Clicking on the map supplies GPS coordinates for the area. After creating the area, users must navigate to the photo upload form to add an image for their new area before it will show up in the areas index page.

### Photo Upload form

The photo upload form first renders the Cloudinary upload widget, where users can drag and drop or browse for the photos that they wish to upload. After uploading the photo, the users are presented with a form to add the remaining necessary information for uploading a photo to Climbr.

### Future

I am always open to suggestions for how to improve Climbr. Some of the things I would like to change/add in the future are:

- Make map interactive.
- Improve UX of site navigation.
- Redirect to photo upload form after area creation.
- Add tagging functionality.
