# feeed
A hub for all my online activities, such as posting recipes, photos, journaling, etc.

## Documentation

#### Post Types

###### mediaPost
- **media**                  : { array : media url } image, video, array of image/video
- **posterImage**            : { string : media url } image to be used as preview image for video _(optional)_
- **caption**                : { string : media url } used as message/post on instagram/fb _(optional)_
- **tags**:                   { array : tag string } not related to the hashtags in the caption. used for searching on the site, and for rough categorisation _(optional)_
- **socialConnections**      : { object : socialConnectionType } used for linking the post to its social media broadcast (ie. its instagram post, facebook post, etc.)
  - **socialConnectionType**   : { object : social connection kvp } a key/value pair of social media outlet (eg. facebook) and the related post url, or false, eg.

  ```
  socialConections: {
    "facebook": "https://www.facebook.com/photo.php?fbid=10154826060369890",
    "instagram": false
  }
  ```

###### notePost
- **title**   : { string : post title }    The title of the post
- **content** : { string : markdown text } The content of the blog post or journal, in markdown format
- **tags**    : { array  : tag string }    Used for searching on the site, and for rough categorisation _(optional)_

###### recipePost
- **title**       : { string : recipe title }  The name of the recipe
- **blurb**       : { string : markdown text } The description of the recipe
- **ingredients** : { array : JSON objects }   An array of objects that represent the ingredients, their initial preparation, their unit, and their amount (see below)
  - **ingredient**  : { string : ingredient name }   The taxonomical name of the ingredient (so that they can be searched)
  - **amount**      : { number : ingredient amount } How much is needed? (future-proofing for scaling)
  - **preparation** : { string : ingredient prep }   How it's prepared for this recipe (eg. Chopped, sliced, whisked, separated etc)
  - **unit**        : { string : ingredient unit }   The unit  - either convertible units (eg. cup, tbsp) or display units (eg. "1 *medium* onion", "2 celery stalks", etc). (future-proofing for scaling)
- **method**      : { string : markdown text } The instructions for preparing the recipe
- **images**      : { array : media urls }     A list of images to help show how the recipe should look
- **tags**        : { array : tag string }     A list of tags to help with searching (eg. "moroccan", "spicy" etc)

```
// example of ingredients array
ingredients: [
  {
    "ingredient": "carrot",
    "amount": "1",
    "unit": "medium"
    "method": "diced very finely"
  },
  {
    "ingredient": "onion",
    "amount": "2",
    "unit": "large"
    "method": "diced very finely"
  },
  {
    "ingredient": "celery",
    "amount": "1",
    "unit": "stalk",
    "method": "diced very finely"
  },
  {
    "ingredient": "butter",
    "amount": "1",
    "unit": "large knob"
  }
]
```

## todo

### data model
-----
- [ ] add env variables in VPS for API Key generation
- [ ] set up node server on VPS
- [ ] create OAuth key on node
- [ ] connect to contentful
  - [ ] read data
  - [ ] write data
  - [ ] cache data (? - nice to have)

**post types**

  - [x] albumPost (covered by mediaPost)
    - array of images/videos
    - caption
    - post to facebook

---
  - [x] imagePost (covered by mediaPost)
    - image
    - caption
    - [action] post to instagram
    - [action] post to facebook

---
  - [x] videoPost (covered by mediaPost)
    - video
    - posterImage
    - caption
    - [action] post to instagram
    - [action] post to facebook

---
  - [x] notePost
    - title
    - content (markdown)
    - tags

---
  - [x] recipePost
    - title
    - blurb
    - ingredients
    - method
    - tags
    - images

---
  - [ ] CVPost
    - job metadata
    - tbd


### page content
----

**page templates**

  - [ ] post feed
    - [ ] video only
    - [ ] image only
    - [ ] note only
    - [ ] grid layout
    - [ ] 1up layout

---
- [ ] CV

---

**Create**

  - [ ] Create media post
    - [ ] Upload media
    - [ ] Use device camera

---
  - [ ] Create note post

---

  - [ ] Create recipe post


---

**Components**

  - [ ] image tile

---
  - [ ] video tile

---
  - [ ] note tile/small module

---
  - [ ] album preview

---
