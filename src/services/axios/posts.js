import axios from 'axios';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export async function getRecentPosts() {
  try {
     const response = await axios.get(`https://gorest.co.in/public/v2/posts?access-token=${import.meta.env.GOREST_TOKEN}`);
     return response.data;
  } catch (error) {
     console.log(error);
  }

}

export async function getPost(id) {
   const response = await getRecentPosts();
   try {
      const post = response.filter(post => {
         return post.id == id;
      });
      return post[0];
   } catch (error) {
      console.log(error);
   }
}