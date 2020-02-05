// CONDITIONALY RENDER THE REQUEST
// DEPENDENT ON PROPS PASSED (SPECIFIC VOLUNTEER OR BUSINESS)

// ALL REQUESTS LIST
// IF HAS NOT BEEN PICKED UP
// UNIQUE BUSINESS REQUEST LIST
// UNIQUE VOLUNTEER ACCEPTED REQUESTS LIST

// dev

import React from "react";

import RequestCard from "./RequestCard";
/* import CreateRequestForm from "./CreateRequestForm" */

const RequestList = props => {
  const availableRequests = props.requests.map(request => {
    if (!request.volunteer_id) {
      return <RequestCard request={request} key={request.id} />;
    }
  });

  console.log(props.getAll);

  return (
    <div>
      {!props.isBusiness && props.requests && props.getAll && availableRequests}
      {!props.isBusiness && !props.getAll && props.requests}
      {props.isBusiness &&
        props.requests &&
        props.requests.map(request => {
          return <RequestCard request={request} key={request.id} />;
        })}
      {props.isBusiness && availableRequests.length === 0 && (
        <p>No requests yet. Create requests to have them appear here.</p>
      )}
    </div>
  );
};

export default RequestList;
