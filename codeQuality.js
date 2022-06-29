// level {2}

async function getUsers() {
    let doc = await Promise.all(getUser(), getProfile(), getPosts());
  
    let user = doc[0];
    let profile = doc[1];
    let posts = doc[2];
  
    return { user, profile, posts };
  }
