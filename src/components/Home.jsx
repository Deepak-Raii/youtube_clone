import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import axios from "axios";

export default function Home() {
  const [allcontent, setAllContent] = useState([]);

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
          <div key={index} style={{width:'400px'}} className=" px-4 py-2 gap-3">
            <img style={{minHeight:'90px', minWidth:'400px', objectFit:'fill', borderRadius:15}} src={data.thumbnails[1].url}/>
            <div className="flex justify-start items-start gap-2 mt-5">
              <div className="flex justify-start items-start gap-2">
                <div>
                  <img style={{borderRadius:50, height:'30px', width:'30px', objectFit:'fill'}} src={data.thumbnails[1].url}/>
                </div>
                <div>
                  {/* <h3>{data}</h3> */}
                  <h3>{data.title}</h3>
                  <div className="flex gap-2 justify-start items-start">
                    <p>{data.number_of_views} views</p>
                    <p>{data.published_time}</p>
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
