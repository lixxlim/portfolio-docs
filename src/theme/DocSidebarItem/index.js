import React from 'react';
import DocSidebarItem from '@theme-original/DocSidebarItem';

export default function DocSidebarItemWrapper(props) {
  const { item } = props;
  const iconPath = item?.customProps?.iconPath;

  const labelWithIcon = iconPath ? (
    <>
      <img
        src={iconPath}
        alt=""
        width={16}
        height={16}
        style={{ marginRight: '6px', verticalAlign: 'middle' }}
      />
      {item.label}
    </>
  ) : (
    item.label
  );

  return (
    <>
      <DocSidebarItem {...props} 
        item={{
          ...item,
          label: labelWithIcon,
        }}
      />
    </>
  );
}
