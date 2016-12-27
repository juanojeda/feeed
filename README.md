# feeed
A hub for all my online activities, such as posting recipes, photos, journaling, etc.

## Documentation

#### Post Types

###### mediaPost
- **Media**: {array : media url} image, video, array of image/video
- **posterImage**: {string : media url} image to be used as preview image for video _(optional)_
- **caption**: {string : media url} used as message/post on instagram/fb _(optional)_
- **tags**: {array : tag string} not related to the hashtags in the caption. used for searching on the site, and for rough categorisation _(optional)_
- **socialConnections**: {object : socialConnectionType} used for linking the post to its social media broadcast (ie. its instagram post, facebook post, etc.)
  - **socialConnectionType**: {object} a key/value pair of social media outlet (eg. facebook) and the related post url, or false, eg.

  ```
  socialConections: {
    "facebook": "https://www.facebook.com/photo.php?fbid=10154826060369890",
    "instagram": false
  }
  ```


## todo

### data model
-----
- [ ] connect to contentful
  - [ ] read data
  - [ ] write data

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
  - [ ] create post

---
  - [ ] CV

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
