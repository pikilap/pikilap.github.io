var posts=["posts/2024/clvn7utnj00007js6ht9gcw3f","posts/2024/clvp4136o0000uhs6dvmka3r6"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };