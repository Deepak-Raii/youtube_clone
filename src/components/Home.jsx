import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import axios from "axios";

export default function Home() {
  const [allcontent, setAllContent] = useState([]);
  const [thumbnail, setThumbnail] = useState([]);
//   const getData = async () => {

// const apiKey = 'AIzaSyC0EeePOO71wV6ZA8dYsFhHKgxCSPg7-1M';
// const searchTerm = 'videos';

// const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&key=${apiKey}`;

// axios.get(apiUrl)
//   .then(response => {
//     const searchResults = response.data.items;
//     console.log(searchResults[0].snippet);
//     setAllContent(searchResults)
//   })
//   .catch(error => {
//     console.error('Error fetching YouTube data:', error.response.data.error.message);
//   });


//   };


async function getData(){

  const options = {
    method: 'GET',
    url: 'https://youtube-v2.p.rapidapi.com/video/recommendations',
    params: {
      video_id: 'Y_AJvHdgu9A'
    },
    headers: {
      'X-RapidAPI-Key': '095b95aefemsh08ca586ffef52c9p11c203jsnfe0bfdde9759',
      'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data.videos[0]);
    // setAllContent(response.data.videos)
    setAllContent(response.data.videos)
  } catch (error) {
    console.error(error);
  }
}

  useEffect(()=>{
    getData();
  },[]);
  return (
    <div className="flex justify-start items-start">
      <div>
        <SideBar />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "row",
          gap: "10px",
          flexWrap: "wrap",
          width:'100%'
        }}
      >
        {allcontent.map((data, index) => (
          <div key={index} className=" bg-slate-500 px-4 py-2 gap-3">
            <img style={{minHeight:'90px', minWidth:'120px', objectFit:'cover'}} src={data.thumbnails[0].url}/>
            <div className="flex justify-start items-start gap-2 bg-black">
              <div className="flex justify-start items-start gap-2">
                <div>logo</div>
                <div>
                  {/* <h3>{data}</h3> */}
                  <h3>{data.author}</h3>
                  <div className="flex gap-2 justify-start items-start">
                    <p>{data.number_of_views}</p>
                    <p>Count</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
