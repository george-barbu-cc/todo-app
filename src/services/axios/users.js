import axios from 'axios';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export async function getAllUSers() {
  try {
     const response = await axios.get(`https://gorest.co.in/public/v2/users?access-token=${import.meta.env.GOREST_TOKEN}`);
     return response.data;
  } catch (error) {
     console.log(error);
  }
}

export async function getAllUSersIDs() {
   const response = await getAllUSers();
   try {
      const users = response.map(user => {
         return user.id;
      });
      return users;
   } catch (error) {
      console.log(error);
   }
}