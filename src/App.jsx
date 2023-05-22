
 import axios from "axios";
import { useEffect, useState } from "react";
const App = () => {
 const [data, setData] = useState()



const options = {
  method: "GET",
  url: "https://pizza-and-desserts.p.rapidapi.com/pizzas/",
  headers: {
    "X-RapidAPI-Key": "81fa6cf4ecmshb9f94060066c7f3p1c4b1djsn9eb2248cb444",
    "X-RapidAPI-Host": "pizza-and-desserts.p.rapidapi.com",
  },
};

  useEffect(() => {
    
    async () => {
const response = await axios.request(options);
    }
    
  }, []);

 


  return (
    <div>
      <div>
        <h1>{data.name}</h1>
      </div>
    </div>
  )
}

export default App