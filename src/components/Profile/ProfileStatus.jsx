import React, { useEffect, useState } from "react";

export const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode ? (
        <div>
          <span onDoubleClick={activateMode}>
            {props.status || "--- No status ---"}
          </span>
        </div>
      ) : (
        <div>
          <input
            autoFocus={true}
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};
