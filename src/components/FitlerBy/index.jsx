import { useEffect, useState } from "react";
import { getFilterData } from "../../Api";
import FilterCard from "../FilterCard";
import { CloseCircleOutlined, FilterOutlined } from "@ant-design/icons";
import { Divider } from "antd";

const FilterBy = () => {
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    async function FilterData() {
      const data = await getFilterData();
      return data;
    }
    FilterData().then((data) => setFilterData(data));
  });
  const [selectvalue, setSelectValue] = useState([]);

  const keyword = filterData?.data?.keyword;
  const company = filterData?.data?.company;
  const job_segment = filterData?.data?.job_segment;
  const job_role_group = filterData?.data?.job_role_group;
  const location = filterData?.data?.location;
  const industry = filterData?.data?.industry;
  const job_type = filterData?.data?.job_type;
  const job_category = filterData?.data?.job_category;
  const work_experience = filterData?.data?.work_experience;
  const salary = filterData?.data?.salary;
  const work_from_home = filterData?.data?.work_from;

  const selectValueChange = (value) => {
    setSelectValue([...selectvalue, value]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "280px",
        height: "auto",
        boxShadow: "0px 0px 10px 2px #0000001A",
        borderRadius: "8px",
        backdropFilter: "blur(30px)",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 10px",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <FilterOutlined />
          <p>FilterBy</p>
        </div>
        <div style={{ color: "green" }} onClick={() => setSelectValue("")}>
          Clear All
        </div>
      </div>
      <Divider />
      {selectvalue.length ? (
        <>
          {selectvalue?.map((val, i) => {
            return (
              <>
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "4px",
                    gridColumn: "20px",
                    width: "fit-content",
                    padding: "10px",
                    margin: "10px",
                    backgroundColor: "lightgreen",
                    color: "black",
                    border: "1px solid #e6e6e6",
                    borderRadius: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "3px",
                      alignItems: "center",
                    }}
                  >
                    {val}
                    {<CloseCircleOutlined onClick={() => setSelectValue("")} />}
                  </div>
                </div>
              </>
            );
          })}
          <Divider />
        </>
      ) : (
        ""
      )}

      <div className="keyword">
        <FilterCard item={keyword} handleChangeValue={selectValueChange} />
      </div>
      <br />
      <div className="company">
        <FilterCard item={company} handleChangeValue={selectValueChange} />
      </div>
      <br />
      <div className="job_segment">
        <FilterCard item={job_segment} handleChangeValue={selectValueChange} />
      </div>
      <br />
      <div className="job_role_group">
        <FilterCard
          item={job_role_group}
          handleChangeValue={selectValueChange}
        />
      </div>
      <br />
      <div className="location">
        <FilterCard item={location} handleChangeValue={selectValueChange} />
      </div>
      <br />
      <div className="industry">
        <FilterCard item={industry} handleChangeValue={selectValueChange} />
      </div>
      <br />
      <div className="job_type">
        <FilterCard item={job_type} handleChangeValue={selectValueChange} />
      </div>
      <br />
      <div className="job_category">
        <FilterCard item={job_category} handleChangeValue={selectValueChange} />
      </div>
      <br />
      <div className="work_experience">
        <FilterCard
          item={work_experience}
          handleChangeValue={selectValueChange}
        />
      </div>
      <br />
      <div className="salary">
        <FilterCard item={salary} handleChangeValue={selectValueChange} />
      </div>
      <br />
    </div>
  );
};

export default FilterBy;
