import { useEffect, useState } from "react";
import { getFilterData } from "../../Api";
import FilterCard from "../FilterCard";
import { CloseCircleOutlined, FilterOutlined } from "@ant-design/icons";
import { Divider, Switch } from "antd";

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
  const [paramVal, setParamVal] = useState([]);
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

  const selectValueChange = (label, value) => {
    console.log(label, value);
    setParamVal((prev) => {
      return [
        ...prev,
        {
          param_name: company.param_name,
          data: value,
        },
      ];
    });
    setSelectValue([...selectvalue, label]);
  };
  const handleClear = (value) => {
    const newVal = selectvalue.filter((item) => {
      return item !== value;
    });
    setSelectValue(newVal);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minWidth: "280px",
        height: "auto",
        marginTop: "20px",
        boxShadow: "0px 0px 10px 2px #0000001A",
        borderRadius: "8px",
        backdropFilter: "blur(30px)",
        backgroundColor: "#ffffff",
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
        <div
          style={{ color: "green", cursor: "pointer" }}
          onClick={() => setSelectValue("")}
        >
          Clear All
        </div>
      </div>
      <Divider />
      {selectvalue.length ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(100px , 1fr))",
            gridGap: "2px",
          }}
        >
          {selectvalue?.map((val, i) => {
            return (
              <>
                <div
                  key={i}
                  style={{
                    padding: "10px",
                    margin: "5px",
                    textAlign: "center",
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
                    {<CloseCircleOutlined onClick={() => handleClear(val)} />}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      ) : (
        ""
      )}
      {selectvalue.length ? <Divider /> : ""}

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 10px",
        }}
      >
        <p>Work From Home</p>
        <Switch />
      </div>
    </div>
  );
};

export default FilterBy;
