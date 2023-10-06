import { useEffect, useState } from "react";
import { getFilterData } from "../../Api";

const SIdeFilter = () => {
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    async function FilterBy() {
      const data = await getFilterData();
      return data;
    }
    FilterBy().then((data) => setFilterData(data));
  });

  return <>{console.log(filterData)}</>;
};

export default SIdeFilter;
