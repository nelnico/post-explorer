interface EmptyStateProps {
  title: string;
  description?: string;
}
export function EmptyState(props: EmptyStateProps) {
  const { title, description } = props;
  return (
    <div className="rounded-xl border border-dashed border-gray-300 bg-white p-10 text-center text-gray-600">
      <p>{title}</p>
      {description && <p className="text-sm mt-1">{description}</p>}
    </div>
  );
}
