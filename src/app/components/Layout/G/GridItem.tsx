/* eslint-disable react/jsx-props-no-spreading */
import React, {forwardRef, useRef} from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

export function SortableGridItem({className, item, styles}:any) {
  const {
    setNodeRef,
    attributes,
    listeners,
    transition,
    transform,
  } = useSortable({id: item.id});

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    ...styles,
  };

  return (
    <GridItem
      ref={setNodeRef}
      item={item}
      style={style}
      className={className}
      {...attributes}
      {...listeners}
    />
  );
}

export const GridItem = forwardRef(({item, ...props}: any, ref) => {
  return (
    <div className=' overflow-hidden text-2xl relative bg-cyan-500 rounded text-white flex items-center justify-center' ref={ref} {...props}>
      {item.name}
    </div>
  );
});

// export const GridItem = styled(UnstyledGridItem)`
//   overflow: hidden;
//   font-size: 20px;
//   position: relative;
//   background: coral;
//   border-radius: 20px;
//   color: #fff;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 300px;
// `;

