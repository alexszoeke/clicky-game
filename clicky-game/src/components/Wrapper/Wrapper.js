import React from "react";
import "./Wrapper.css";

const Wrapper = (props) => <div className="container-fluid">

<div className="container-fluid">
        {props.children}
</div>

</div>;

export default Wrapper;
