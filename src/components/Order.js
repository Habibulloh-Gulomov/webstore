import { useState, useEffect } from "react";
import axios from "axios";
export default function Order(){
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://thewebstorenode.uz.thewebstore.uz/order', {
      headers: {
        token: "eyJhbGciOiJIUzI1NiJ9.MQ.1tRPowLx-U0FAddHad0zerSPN41lydQhy7A-toLHzBo",
      },
    })
      .then(response => {
        setData(response.data.data);
        console.log(response);
        
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);
  
}