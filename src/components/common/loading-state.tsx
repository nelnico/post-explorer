interface EmptyStateProps {
  title?: string;
}
export function LoadingState({ title }: EmptyStateProps) {
  return (
    <div className="  p-10 text-center text-gray-600  ">
      <p className="text-sm mt-1">{title ? title : "Loading"} ...</p>
    </div>
  );
}
