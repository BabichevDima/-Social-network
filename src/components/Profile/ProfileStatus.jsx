import React, { useEffect, useState } from "react";

export const ProfileStatus = ({ status, updateStatus }) => {
  const [editMode, setEditMode] = useState(false);
  const [newStatus, setStatus] = useState(status);

  useEffect(() => {
    setStatus(status);
  }, [status]);

  const activateMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(newStatus);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode ? (
        <div>
          <span onDoubleClick={activateMode}>
            {status || "--- No status ---"}
          </span>
        </div>
      ) : (
        <div>
          <input
            autoFocus={true}
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            value={newStatus}
          />
        </div>
      )}
    </div>
  );
};
