// CONDITIONALY RENDER THE REQUEST
// DEPENDENT ON PROPS PASSED (SPECIFIC VOLUNTEER OR BUSINESS)

// ALL REQUESTS LIST
// IF HAS NOT BEEN PICKED UP
// UNIQUE BUSINESS REQUEST LIST
// UNIQUE VOLUNTEER ACCEPTED REQUESTS LIST

// dev

import React, { useEffect, useDebugValue } from "react";
import { connect } from "react-redux";

import RequestCard from "./RequestCard";
/* import CreateRequestForm from "./CreateRequestForm" */

import {
  getRequests,
  createRequest,
  deleteRequest
} from "../actions/requestActions";

const RequestList = props => {
  return (
    <div>
      {!props.isBusiness &&
        props.requests.map(request => {
          return (
            <RequestCard
              title={request.title}
              description={request.description}
              ready_by={request.ready_by}
            />
          );
        })}
      {props.isBusiness &&
        props.requests.map(request => {
          if (props.id == request.business_id) {
            return (
              <RequestCard
                title={request.title}
                description={request.description}
                ready_by={request.ready_by}
              />
            );
          }
        })}
    </div>
  );
};

export default RequestList;
