import { useState, useEffect } from "react";
import Axios from "axios";
import Select from "react-select";

function SkillsData(props) {
  const [skillsData, setSkillsData] = useState([]);
  const link = "https://bootcamp-2022.devtest.ge/api/skills";

  function getskill() {
    Axios.get(link).then((response) => {
      const data = response.data;
      setSkillsData([
        {
          id: data[0].id,
          label: data[0].title,
          value: data[0].title,
        },
        {
          id: data[1].id,
          label: data[1].title,
          value: data[1].title,
        },
        {
          id: data[2].id,
          label: data[2].title,
          value: data[2].title,
        },
        {
          id: data[3].id,
          label: data[3].title,
          value: data[3].title,
        },
        {
          id: data[4].id,
          label: data[4].title,
          value: data[4].title,
        },
        {
          id: data[5].id,
          label: data[5].title,
          value: data[5].title,
        },
        {
          id: data[6].id,
          label: data[6].title,
          value: data[6].title,
        },
        {
          id: data[7].id,
          label: data[7].title,
          value: data[7].title,
        },
      ]);
    });
  }

  useEffect(() => {
    getskill();
  }, []);

  return (
    <div>
      <Select options={skillsData} onChange={props.onChange} />
    </div>
  );
}

export default SkillsData;
