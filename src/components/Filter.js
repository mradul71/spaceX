import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import './filter.css'

function Filter({changeYear}) {
    let navigate = useNavigate();

    const [launch, setLaunch] = useState(false);
    const [land, setLand] = useState(false);

    const changeLaunch = (x) => {
        if (x === true) {
          setLaunch(true);
          if (land && x) {
            navigate('/launch_land_success');
          } else {
            navigate('/launch_success');
          }
        } else {
          setLaunch(x);
          if (land) {
            navigate('/land_success');
          } else {
            navigate('/');
          }
        }
      };
    
      const changeLand = (x) => {
        if (x === true) {
          setLand(true);
          if (x && launch) {
            navigate('/launch_land_success');
          } else {
            navigate('/land_success');
          }
        } else {
          setLand(x);
          if (launch) {
            navigate('/launch_success');
          } else {
            navigate('/');
          }
        }
      };

    return (
        <div className='filter'>
            <h3>Filters</h3>
            <h2>Launch Year</h2><hr />
            <div className='years'>
                {Array.from(Array(15), (e, i) => {
                    return <button className='yearButton' onClick={() => {changeYear(2006+i)}} key={i}>{2006+i}</button>
                })}
            </div>
            <div className='launch'>
                <h2>Successful Launch</h2><hr />
                <div className='trueFalse'>
                <button onClick={ () =>  changeLaunch(true)}>True</button>
                <button onClick={ () =>  changeLaunch(false)}>False</button>
                </div>
            </div>
            <div className='land'>
                <h2>Successful Landing</h2><hr />
                <div className='trueFalse'>
                <button onClick={ () =>  changeLand(true)}>True</button>
                <button onClick={ () =>  changeLand(false)}>False</button>
                </div>
            </div>
        </div>
    )
}

export default Filter
