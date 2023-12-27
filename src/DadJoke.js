import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
export default function DadJoke() {
    const [joke, setjoke] = useState('');

    const fetchNewJoke = async () => {
        const response = await axios.get("https://icanhazdadjoke.com/",{
            headers: {
                Accept: "application/json"
            }
        })
        setjoke(response.data.joke)
        localStorage.setItem('myjoke', JSON.stringify(response.data.joke))   
    }

    useEffect(() => {
        const storedJoke = localStorage.getItem('myjoke')
        if (storedJoke){
            setjoke(storedJoke)
        }
    })
  return (
    <>
    <div class="text-bg-secondary p-3">
        <div class="w-auto p-3">
            <div class="card-body">
            <h5 class="card-title">Dad jokes</h5>
            <p class="card-text">{joke}</p>
            <button onClick={fetchNewJoke} type="button" class="btn btn-outline-dark">Get another joke</button>
        </div>
    </div>
    </div>    
    </>
  )
}

    
 