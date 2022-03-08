import styles from "./Skills.module.css";

function OutputSkills(props) {
  return props?.selectedSkills
    ? props?.selectedSkills?.map((data, index) => {
        return (
          <div key={index} className={styles.output}>
            <p className={styles.p1}>{data.language}</p>
            <p className={styles.p2}>Years of Experience: {data.experience}</p>
            <button onClick={() => props.onDelete(index)}>-</button>
          </div>
        );
      })
    : null;
}
export default OutputSkills;
