import img from '../images/start.png';
import img1 from '../images/intro.jpg';
import img2 from '../images/cat.jpg';
import img3 from '../images/couples.jpg';
// import img4 from '../images/flame.jpg';

const __posts = [
  {
    img: img,
    id: "001",
    title: "Starting Your Coding Journey",
    subtitle: "Everything You Need To Know To Get Started",
    content: `*Deep Breath* So, after seeing all the memes, listening to all your programmer friends going on and 
    on about the ‘dark side’, that is programming, you decided to venture into the dark side too…
    However, there’s one small problem, now that you’re here, it’s probably ’cause you’re not sure how to start 
    the journey. I mean, look around, there’s so many languages, frameworks, technologies, and whatnot, 
    each with its own cheeky name and logo, which don’t really seem to help you choose.
          `,
    upvotes: 10,
    downvotes: 4,
    comments: ["this is a comment on the first post"]
  },
  {
    img: img1,
    id: "002",
    title: "Intro To HTML",
    subtitle: "It All Begins Here",
    content: `HTML (Hypertext Markup Language) is the foundation of a website. While you may see file extensions like php, cfm, asp, etc., these files will still contain HTML tags in order to display content. An HTML file is placed on a server and when requested by a user, it is read into the user’s browser and displayed as a web page.

    The standards and practices for writing HTML are set by the World Wide Web Consortium (W3C) and there are multiple versions of HTML. Since this is more of an introduction to HTML, we will not go into detail about the various versions like XHTML, HTML 4.01, and HTML 2.0. We also won’t go into classifications of standards like strict, traditional, and frameset.
           `,
    upvotes: 0,
    downvotes: 0,
    comments: []
  },
  {
    img: img2,
    id: "003",
    title: "Retail Pet Stores",
    subtitle: "Brief Summary of Laws Affecting Retail Pet Stores Ashley Duncan(2006)",
    content: `Over half of all households in America have at least one pet. 
            The most common types of animals kept as pets are birds, cats, dogs, fish, reptiles, and small animals such as hamsters and guinea pigs. While some of these animals are available for adoption at local humane societies, 
             most people buy their pets from retail pet stores. Since there are so many animals being housed at retail pet stores, many welfare issues exist, including the availability of veterinary care, food and water, proper housing, and proper sanitation.

            The health and safety of animals in pet stores is an important issue. Unfortunately, there is no federal law which regulates the care of animals in all pet stores. To find laws that address the care of animals in pet stores, 
            you must look at state laws.
            There are currently fifteen states which do not have any laws regulating pet stores. 
           The pet store laws in the other thirty-five states plus the District of Columbia greatly vary.
      `,
    upvotes: 0,
    downvotes: 0,
    comments: []
  },
  {
    img: img3,
    id: "004",
    title: "Entertainment",
    subtitle: "Studios release movies at home in response to COVID-19",
    content: `TORONTO -- Streaming platforms are joining Hollywood in throwing away the rule book in hopes to attract viewers stuck inside during the COVID-19 pandemic.

              There was already a shakeup in how audiences consumed film and TV entertainment before the outbreak, 
              driven by the growing number of streaming platforms and a slowdown in movie ticket sales.

              But as the entertainment industry scrambles to keep up with COVID-19 developments, 
              films are being pushed off the theatrical release slate and onto video-on-demand platforms at an unprecedented pace.
            `,
    upvotes: 0,
    downvotes: 0,
    comments: []
  }
]

// get all posts from the post variable
// returns an array of posts
export function getAllPosts() {
  return __posts;
}

// add a post to the post variable
// return a post object
export function getPostById( post_id ) {
  return __posts.filter( (post) => post.id === post_id )[0];
}

export function addNewComment( post_id, comment ) {
  if(comment) {
    getPostById(post_id).comments.unshift(comment);
    alert("comment added")
  }
}

export function upvotePost( post_id ) {
  getPostById(post_id).upvotes++;
}

export function downvotePost ( post_id ) {
  getPostById(post_id).downvotes++;
}

export function createNewPost(title, sub_title, image, content, callback) {
  const newPost = {};

  newPost.title = title;
  newPost.subtitle = sub_title;
  newPost.content = content;
  newPost.img = image;
  newPost.comments = [];
  newPost.id = getNewId()

  __posts.unshift(newPost);

  callback();
}

function getNewId() {
  let postLength = __posts.length + 2;
  postLength = "" + postLength + "";
  while(postLength.length < 3) {
    postLength = "0" + postLength;
  }

  return postLength;
}