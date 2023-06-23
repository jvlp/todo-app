import {
  FcLowPriority,
  FcMediumPriority,
  FcHighPriority,
} from "react-icons/fc";

function PriorityIcon({ priority }) {
  if (priority === 1)
    return <FcMediumPriority className="ml-auto mr-4 flex text-2xl" />;

  if (priority === 2)
    return <FcHighPriority className="ml-auto mr-4 flex text-2xl" />;

  return <FcLowPriority className="ml-auto mr-4 flex text-2xl" />;
}

export default PriorityIcon;
