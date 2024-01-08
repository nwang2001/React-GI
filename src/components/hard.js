// HARD: Now that you have a basic react app to display one person’s worth of information, now modify the app to iterate over an array of people’s basic information, while still keeping the new list of contacts in the top-level of state. (Optional: add styling to space out each person’s info)

import React from 'react';
import BasicInfo from './medium'; 

    const BasicInfoList = () => {
        const peoplesInfo = [

            {name: "Jerry Mouse", 
            age: "16",
            number: "911",
            state: "Running",
            city: "House",
            dob: "02-10-1940"},

            {name: "Tom Cat", 
            age: "17",
            number: "411",
            state: "Chasing",
            city: "House",
            dob: "02-10-1940"},

            {name: "Toodles Galore", 
            age: "16",
            number: "911",
            state: "Running",
            city: "House",
            dob: "07-05-1941"},

            {name: "Nibbles Mouse", 
            age: "8",
            number: "211",
            state: "Orphaning",
            city: "House",
            dob: "04-30-1949"}
        ];



  return (
    <div className="listPeople">
        {peoplesInfo.map((info) => (

            <BasicInfo 
            name={info.name} 
            age={info.age} 
            number={info.number} 
            state={info.state} 
            city={info.city} 
            dob={info.dob} />
        ))};
    </div>
  );
};

export default BasicInfoList;