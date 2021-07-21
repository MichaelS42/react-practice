import React, { useState, useEffect } from "react";


import {axiosAuth} from "../axiosAuth";

const Page = () => {


  const [, set] = useState([]);
  const [dependency, setDependency] = useState(false)
  // fetch your colors data from the server when the componet mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosAuth()
    .post('http://localhost:5000/api/')
    .then(res => {
      set(res.data)
      setDependency(false)
    })
    .catch(err => {
      console.log(err.response)
    })
  }, [])



  return (
    <div>
      < ={} update={set} setDependency={setDependency}/>
      < ={} />
    </div>
  );
};

export default Page;