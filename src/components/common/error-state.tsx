interface ErrorStateProps {
  title: string;
}
const ErrorState = ({ title }: ErrorStateProps) => {
  return (
    <p className="text-sm text-red-600" role="alert">
      {title}
    </p>
  );
};

export default ErrorState;
