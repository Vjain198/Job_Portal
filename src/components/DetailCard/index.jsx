import { Card, Divider, Image, Skeleton, Spin } from "antd";
import "./detail.css";
import {
  bookmarkIcon,
  experienceIcon,
  locationIcon,
  officeIcon,
  salaryIcon,
  skillIcon,
  timer,
} from "../../constants/icons";

const DetailCard = ({ sortData, loading }) => {
  return (
    <>
      {loading ? (
        <Spin tip="loading" size="large" />
      ) : (
        <>
          {sortData?.map((detail, index) => {
            return (
              <Skeleton key={index} loading={loading}>
                <Card
                  bodyStyle={{
                    padding: "0 20px",
                  }}
                  className="card-detail"
                >
                  <div className="top">
                    <Image
                      width={50}
                      src={
                        detail?.company_logo
                          ? detail?.company_logo
                          : "http://test.getwork.org/company/default.jpg"
                      }
                    />
                    <h2>{detail?.job_title}</h2>
                  </div>
                  <div className="middle">
                    <div className="office">
                      {officeIcon}
                      <span>{detail?.job_type_name}</span>
                    </div>
                    <div className="salary">
                      {salaryIcon}
                      <span>{detail?.ctc_value}</span>
                    </div>
                    <div className="experience">
                      {experienceIcon}
                      <span style={{ color: "black" }}>
                        {detail?.eligibility_criteria?.experience}
                      </span>
                    </div>
                  </div>
                  <div className="location">
                    {locationIcon}
                    <span>{detail?.job_location?.map((loc) => loc?.city)}</span>
                  </div>
                  <div className="skills">
                    {skillIcon}
                    <span>
                      {detail?.eligibility_criteria?.skills?.map(
                        (skill) => skill?.skill_name
                      )}
                    </span>
                  </div>

                  <Divider />
                  <div className="bottom">
                    <div className="posted">
                      {timer}
                      <span>Posted {detail?.time_ago}</span>
                    </div>
                    <div>{bookmarkIcon}</div>
                  </div>
                </Card>
              </Skeleton>
            );
          })}
        </>
      )}
    </>
  );
};

export default DetailCard;
