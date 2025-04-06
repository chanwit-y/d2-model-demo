"use client"

import { use, useCallback, useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import SortableItem from './SortableItem';
import { Dragable } from "../asset/icon/Dragable"
import { Moveable } from '../asset/icon/Moveable';
import { Context } from './Context';


type Props = {
  data: any
}

export function EntityNode({ data }: Props) {


  const { setNodes } = use(Context)
  const [canMove, setCanMove] = useState(true)

  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);

  const [items, setItems] = useState([1, 2, 3]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <div className='rounded-sm bg-white min-w-60'>
      <div className='flex justify-between items-center py-1 px-2'>
        <span className='text-sm font-bold text-gray-700'>
         [Table Name] 
        </span>
        <div className='flex items-center gap-1'>
          <div onClick={() => setCanMove((prev) => {

            setNodes((nodes: any) => {
              return nodes.map((node: any) => {
                if (node.id === 'node-1') {
                  return { ...node, dragHandle: !prev ? '.drag-handle__custom' : undefined }
                }
                return node
              })
            })

            return !prev
          })} className='border  rounded-sm p-1 cursor-pointer bg-blue-50 border-blue-400'>
            <Moveable width={14} height={14} className='text-blue-500' />
          </div>
          <div className=' border border-gray-300 rounded-sm p-1 cursor-pointer'>
            <Dragable width={14} height={14} />
          </div>
        </div>

      </div>
      <hr />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items}
          strategy={verticalListSortingStrategy}
        >
          {items.map(id => <SortableItem key={id} id={id} />)}
        </SortableContext>
        {/* <ColumnItem />
        <ColumnItem />
        <ColumnItem />
        <ColumnItem /> */}
      </DndContext>

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