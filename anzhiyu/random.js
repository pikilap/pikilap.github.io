var posts=["2024/clvn7utnj00007js6ht9gcw3f"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };