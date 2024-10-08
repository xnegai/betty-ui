export default function StakeIcon(props: {
  size: number;
  strokeWidth?: number;
}) {
  let strokeWidth = 2;
  if (props.strokeWidth) {
    strokeWidth = props.strokeWidth;
  }
  return (
    <>
      <svg
        className={`h-` + props.size + ` w-` + props.size}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth={strokeWidth}
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {" "}
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <line x1="3" y1="21" x2="21" y2="21" />{" "}
        <line x1="3" y1="10" x2="21" y2="10" />{" "}
        <polyline points="5 6 12 3 19 6" />{" "}
        <line x1="4" y1="10" x2="4" y2="21" />{" "}
        <line x1="20" y1="10" x2="20" y2="21" />{" "}
        <line x1="8" y1="14" x2="8" y2="17" />{" "}
        <line x1="12" y1="14" x2="12" y2="17" />{" "}
        <line x1="16" y1="14" x2="16" y2="17" />
      </svg>
    </>
  );
}
