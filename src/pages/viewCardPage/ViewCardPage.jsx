import React from "react";
import { useParams } from "react-router-dom";
import BrowsePopup from "../../components/popups/browse/Browse";

const ViewCardPage = () => {
  let { id } = useParams();
  return <BrowsePopup id={id} />;
};

export default ViewCardPage;
