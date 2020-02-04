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
  const businessRequests = props.requests.map(request => {
    if (!request.volunteer_id) {
      return <RequestCard request={request} key={request.id} />;
    }
  });

  return (
    <div>
      {!props.isBusiness && props.requests && businessRequests}
      {props.isBusiness &&
        props.requests &&
        props.requests.map(request => {
          if (props.id === request.business_id) {
            return <RequestCard request={request} key={request.id} />;
          } else {
            return [];
          }
        })}
      {props.isBusiness && businessRequests.length === 0 && (
        <p>No requests yet. Create requests to have them appear here.</p>
      )}
    </div>
  );
};

export default RequestList;
