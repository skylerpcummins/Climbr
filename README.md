# Climbr

[Heroku link][heroku]

[heroku]: http://www.climbrproject.herokuapp.com

## Minimum Viable Product

Flickr-inspired climbing-photo uploading / sharing website with
geotagging functionality to identify photos by climbing area.
Climbr allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [x] Create account
- [x] Log in / out
- [ ] Upload / remove photos
- [ ] Create climbing area, add / remove photos
- [x] View image index page
- [x] View image show page
- [x] View user show page
- [ ] View area show page
- [ ] Geotag images
- [ ] Search / filter images by climbing area

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Photo, Comment, models and JSON API (1-2 days)

In phase 1, I will start with the rails backend and some JSON API. After signing up/logging in, the user will be redirected to the photos index page, which will have a container for photos on the left, and one for the map on the left (to be built later).



[Details][phase-one]

### Phase 2: Flux Architecture and Photo CRUD (2 days)

Phase 2 will primarily consist of getting Flux, the React Router and view structure for the main application. Probably will do a lot of seeding here.

[Details][phase-two]

### Phase 3: Areas and Tags (2-3 days)

In Phase 3 I will implement Areas, allowing users to group photos by climbing area.

[Details][phase-three]

### Phase 4: Maps (1-2 days)

Implement google maps API a-la Bench-BnB.

[Details][phase-four]

### Phase 5: Styling (its gonna take a whiiiile)

Lots of bootstrap and CSS here, though I may implement some earlier on depending on how things are looking.

[Details][phase-five]

### Bonus Features (TBD)
<!-- - [ ] Prettify transitions
- [ ] Use javascript library for cleaner tag selection
- [ ] Infinite scroll for Photos Index -->

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
