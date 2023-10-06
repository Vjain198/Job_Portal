import { Select, Spin } from "antd";
import { useEffect, useState } from "react";
import { getDetailData, getFilterData } from "../../Api";
import DetailCard from "../DetailCard";
import "./sortby.css";


const SortBy = () => {
  const [sortData, setSortData] = useState({});
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  const [details, setDetails] = useState([]);
  useEffect(() => {
    async function sortBy() {
      const data = await getFilterData();
      return data;
    }
    sortBy().then((datas) => {
      setSortData(datas);
      setOptions(datas?.data?.sort_by?.data);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    async function getDetail() {
      const data = await getDetailData();
      return data;
    }

    getDetail().then((data) => {
      setCount(data?.data?.count);
      setDetails(data?.data?.results);
      setLoading(false);
    });
  }, []);

  const onChange = (value, label) => {
    setValue(label?.label);
    setLoading(true);
    getDetailData(1, 7, "sort_by", value).then((data) => {
      setCount(data?.data?.count);
      setDetails(data?.data?.results);
    });
    setLoading(false);
  };

  return (
    <div className="container">
      <div
        style={{
          width: "630px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>{`1- 10 of ${count} Opportunities`}</h2>
        <Select
          value={
            sortData?.data?.sort_by?.heading
              ? `${sortData?.data?.sort_by?.heading} ${value}` ||
                `${sortData?.data?.sort_by?.heading}`
              : ""
          }
          style={{
            width: 250,
          }}
          options={options.map((op) => {
            return {
              label: op?.name,
              value: op?.id,
            };
          })}
          onChange={onChange}
          loading={loading}
        />
      </div>
      <div>
        {loading ? (
          <Spin tip="wait" size="large" />
        ) : (
          <DetailCard sortData={details} loading={loading} />
        )}
      </div>
      
    </div>
  );
};

export default SortBy;
