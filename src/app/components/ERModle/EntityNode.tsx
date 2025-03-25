"use client"

import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
import { DragIndicator } from '../asset/icon/DragIndicator';
import ColumnItem from './ColumnItem';

const handleStyle = { left: 10 };

type Props = {
  data: any
}

export function EntityNode({ data }: Props) {
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className='rounded-sm bg-white'>
      <div className='flex'>
        Header
      </div>
      <hr />

      <ColumnItem />
      <ColumnItem />
      <ColumnItem />
      <ColumnItem />

      {/* <div>
        <label htmlFor="text">Text:</label>
        <input id="text" name="text" onChange={onChange} className="nodrag" />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        style={handleStyle}
      /> */}
    </div>
  );
}