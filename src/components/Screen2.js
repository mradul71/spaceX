import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import './home.css'

function Screen2({year, success}) {
    const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          !year ? 'https://api.spacexdata.com/v3/launches?limit=100&land_success=true' : 'https://api.spacexdata.com/v3/launches?limit=100&land_success=true&launch_year='+year
        );
        if (result?.data) setData(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [year]);

  if (data)
    return (
      <div className='cards-div'>
      {data.map((foo) => (
        <div className='card' key={foo.launch_date_unix}>
          <img src={foo.links.mission_patch} width="100" />
          <div className='info'>
            <div className='name'>{foo.mission_name}&ensp;#{foo.flight_number}</div>
            <div className='id'>Mission Ids:&ensp;<span className='ans'>{foo.mission_id}</span></div>
            <p className='launchYear'>Launch Year:&ensp;<span className='ans'>{foo.launch_year}</span></p>
              {success && <p>Successful Landing:&ensp;<span className='ans'>true</span></p>}
          </div>
        </div>
      ))}
    </div>
    );

  return <div>Loading...</div>;
}

export default Screen2
