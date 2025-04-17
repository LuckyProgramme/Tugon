import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { cn } from '../../utils/cn';

interface DraggableAnswerProps {
  id: string;
  answer: string;
}

export function DraggableAnswer({ id, answer }: DraggableAnswerProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cn(
        "p-4 bg-teal-400 text-white rounded-lg cursor-move",
        "hover:bg-teal-500 transition-colors",
        isDragging && "opacity-50"
      )}
    >
      {answer}
    </div>
  );
}