var posts=["posts/2024/clvn7utnj00007js6ht9gcw3f","posts/2024/clvos66nz0001its6cpvo72kk"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };