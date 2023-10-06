import { SearchOutlined } from "@ant-design/icons";
import { Checkbox, Collapse, Select } from "antd";

const FilterCard = ({ item, handleChangeValue }) => {
  const arr = item?.data;
  const heading = item?.heading;

  const handleChange = (value, label) => {
    handleChangeValue(label.label);
  };

  const handleChecked = (checked, val) => {
    if (checked) {
      handleChangeValue(val);
    }
  };

  const items = [
    {
      key: 1,
      label: <>{heading}</>,
      children: (
        <>
          {arr?.slice(0, 5).map((arr, i) => {
            return (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Checkbox
                  id={arr?.id}
                  onChange={(e) => handleChecked(e.target.checked, arr.name)}
                >
                  {arr?.name}
                </Checkbox>
              </div>
            );
          })}
        </>
      ),
    },
  ];
  return (
    <div>
      <div>
        <Collapse defaultActiveKey={["1"]} ghost items={items} />
      </div>
      <div
        style={{
          padding: "0px 10px",
        }}
      >
        <Select
          style={{
            width: "250px",
          }}
          placeholder="Search"
          suffixIcon={<SearchOutlined />}
          showSearch
          loading
          options={arr?.slice(6, 15).map((item) => {
            return {
              label: item?.name,
              value: item?.id,
            };
          })}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default FilterCard;
