# feeed
A hub for all my online activities, such as posting recipes, photos, journaling, etc.

## Documentation

#### Post Types

###### mediaPost
- _Media_: {array : media url} image, video, array of image/video
- _caption_: {string} used as message/post on instagram/fb
- _tags_: {array : string} not related to the hashtags in the caption. used for searching on the site, and for rough categorisation
- _socialConnections_: {object : socialConnectionType} used for linking the post to its social media broadcast (ie. its instagram post, facebook post, etc.)
  - _socialConnectionType_: {object} a key/value pair of social media outlet (eg. facebook) and the related post url, eg.

  ```
  socialConections: {
    "facebook": "https://www.facebook.com/photo.php?fbid=10154826060369890",
    "instagram": "https://www.instagram.com/p/BOhPx0fjJx7/"
  }
  ```


## todo

### data model
-----

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
  - [ ] notePost
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
