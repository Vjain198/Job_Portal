import { Button, Card } from "antd";
import React from "react";
import { experienceIcon, officeIcon, salaryIcon } from "../../constants/icons";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

const InfoCard = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "transparent",
        height: "auto",
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <Card
        style={{
          width: 300,
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            color: "#000000",
          }}
        >
          New to GetWork?
        </h2>
        <Button
          size="large"
          style={{
            width: "230px",
            height: "auto",
            padding: " 10px 4px",
            backgroundColor: "#00203F",
            color: "#ffffff",
          }}
        >
          Upload Resume
          <br />
          <span
            style={{
              fontSize: "14px",
            }}
          >
            Connect with Hiring Manager
          </span>
        </Button>
      </Card>
      <Card
        style={{
          width: 300,
        }}
      >
        <h2>Recently Viewed Jobs</h2>
        <Card
          style={{
            width: 240,
            margin: "0px 10px",
          }}
        >
          <p>Testing</p>
          <p>Create okipied</p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              {salaryIcon} <span>Not Disclosed</span>
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              {officeIcon} <span>Full Time Job</span>
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              {experienceIcon} <span>1-2 years</span>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Button
              size="large"
              style={{
                width: "200px",
                height: "auto",
                padding: " 10px 0",
                backgroundColor: "#00203F",
                color: "#ffffff",
                margin: "5px 0px",
              }}
            >
              View Details
            </Button>
          </div>
        </Card>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            margin: "20px 10px",
          }}
        >
          <div>
            <LeftCircleOutlined
              style={{
                fontSize: "26px",
                color: "#08c",
              }}
            />
          </div>
          <div>
            <RightCircleOutlined
              style={{
                fontSize: "26px",
                color: "#08c",
              }}
            />
          </div>
        </div>
      </Card>
      <Card
        style={{
          width: 300,
          height: 220,
        }}
      >
        Related Search Software Engineering Jobs In Indore Software Engineering
        Jobs In Hyderabad Software Engineering Jobs In Surat Frequently Asked
        Questions About GetWork About Us Blogs Career FAQ's Security Policy
        Terms & Conditions Cancellation & Refund Privacy & Cookie Policy Contact
      </Card>
    </div>
  );
};

export default InfoCard;
