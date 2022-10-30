import axios from 'axios';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export async function getTodos(userId) {
  try {
     const response = await axios.get(`https://gorest.co.in/public/v2/users/${userId}/todos?access-token=${import.meta.env.GOREST_TOKEN}`);
     return response.data;
  } catch (error) {
     console.log(error);
  }
}

export async function getTodosUsers() {
   try {
      const response = await axios.get(`https://gorest.co.in/public/v2/todos?access-token=${import.meta.env.GOREST_TOKEN}`);
      const users = response.data.map(user => {
         return user.user_id;
      });
      return users;
   } catch (error) {
      console.log(error);
   }
}