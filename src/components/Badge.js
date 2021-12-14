import React from "react";
import { Avatar } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";

function Badge() {
  return (
    <>
      <div>
        <Avatar
          style={{ float: "left", margin: "15px" }}
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 80 }}
          icon={<AntDesignOutlined />}
        />
      </div>
    </>
  );
}

export default Badge;
