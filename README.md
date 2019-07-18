---
Create a basic photo collection browser, using a vanilla Angular 8 project (use the Angular CLI). You will need to create a Service for networking calls, and create Components for display bits. You need two routes (one for the collection and one for the detail view).
---

## REST Data for you

API key: 81ce9c934431fb7027da435cf1448f3f4f2eedf08c72a5db94d6f8ff86847dc9
(if you hit the rate limit, please create a sample developer account and "app")

- Do not use the official JS API
- Wrap the following networking in an Angular Service

https://unsplash.com/documentation#get-a-collection
https://unsplash.com/documentation#get-a-collections-photos

- Use collection_id 2022043 [done]
- Create "components" for reusable bits, but only as needed

## Page

- Display the Title, the curator, the total collection size

## Collection

- Don't worry about the Masonry style grid
- Use CSS Grid only (make it responsive w/ a few breakpoints - single column for "mobile" and a variable amount otherwise)
- Load 25 photos at a time
- Load the next page when clicking a simple Next button. Append elements to the DOM

## Photo Card

- Show the "small" photo, just use a 4:3 card and don't distort the image, don't worry about portrait photos
- Show the author with "small" avatar and real name
- On click navigate to the detail route

## Detail

- show the "full" image
- show the author info
- have a link to open the "raw" file

## Styling

- Use Arial and only 2 sizes (0.85rem, 2rem). Default weight 500.
- For the "title" use 700 weight.
- Colors - if showing text over a photo, use 60% white (hover 100% if link), otherwise if over a light background, use 85% black (titles) or 60% black (body copy).

##Onsite Demo

- Be prepared to make small design updates while presenting, like changing a size or color across all components in the most efficient manner.
