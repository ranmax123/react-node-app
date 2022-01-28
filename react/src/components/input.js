import React, { memo } from "react";

export default memo(({ value, onChange = () => { }, isRequired = false, isError, }) => {
  return (
    <input
      value={value}
      onChange={e => onChange?.(e.target.value)}
      style={{ border: (isRequired && isError && !value?.trim()) ? 'red 1px solid' : '' }}
    />
  )
})